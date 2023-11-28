/*
    Hook copied from react-firebase-hooks
*/

import { useEffect } from "react";
import { onAuthStateChanged, Auth, User } from "firebase/auth";
import useLoadingValue from "./useLoadingValue";


export type LoadingHook<T, E> = [T | undefined, boolean, E | undefined];
type AuthStateHook = LoadingHook<User | null, Error>;
type AuthStateOptions = {
    onUserChanged?: (user: User | null) => Promise<void>;
}

export const useAuthState = (auth: Auth, options?: AuthStateOptions): AuthStateHook => {
    const { error, value, loading, setError, setValue } = useLoadingValue<User | null, Error>(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            async (user) => {
                if (options?.onUserChanged) {

                    //обработка любого другого триггера
                    try {
                        await options.onUserChanged(user);
                    } catch (e) {
                        setError(e as Error);
                    }
                }

                if (user) {
                    setValue(user);
                }
            }     
        );

        return () => {
            unsubscribe();
        }
    }, [auth])

    return [value, loading, error];
}