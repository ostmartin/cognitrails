/*
    Hook copied from react-firebase-hooks
*/

import { useMemo, useCallback, useReducer } from "react";

type LoadingValue<T, E> = {
    value?: T;
    error?: E;
    loading: boolean;
    reset: () => void;
    setValue: (value: T) => void;
    setError: (error: E) => void;
}

type ReducerState<E> = {
    error?: E;
    value?: any;
    loading: boolean;
}

type ErrorAction<E> = {
    type: 'error';
    error: E;
}

type ResetAction = {
    type: 'reset';
    defaultValue?: any;
}

type ValueAction = {
    type: 'value';
    value: any;
}

type ReducerAction<E> = ErrorAction<E> | ResetAction | ValueAction;

const defaultState = (defaultValue?: any) => {
    return {
        loading: defaultValue === undefined || defaultValue === null,
        value: defaultValue
    }
}

function reducer<E>(
    state: ReducerState<E>,
    action: ReducerAction<E>
): ReducerState<E> {
    switch (action.type) {
        case 'value': 
            return {
                ...state,
                error: undefined,
                value: action.value,
                loading: false
            };
        case 'error':
            return {
                ...state,
                error: action.error,
                value: undefined,
                loading: false
            };
        case 'reset':
            return defaultState(action.defaultValue);
        default:
            return state;
    }
}

export default <T, E>(getDefaultValue?: T): LoadingValue<T, E> => {
    const defaultValue = getDefaultValue ? getDefaultValue : undefined;
    const [state, dispatch] = useReducer(reducer<E>, defaultState(defaultValue))

    const reset = useCallback(() => {
        const defaultValue = getDefaultValue ? getDefaultValue : undefined;
        dispatch({type: 'reset', defaultValue});
    }, [getDefaultValue])

    const setError = useCallback((error: E) => {
        dispatch({type: 'error', error});
    }, [])

    const setValue = useCallback((value?: T) => {
        dispatch({type: 'value', value});
    }, [])

    return useMemo(
        () => ({
            error: state.error,
            loading: state.loading,
            value: state.value,
            setError,
            setValue,
            reset
        }),
        [state.error, state.value, state.loading, reset, setError, setValue]
    );
}