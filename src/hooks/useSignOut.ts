/*
    Hook copied from react-firebase-hooks
    https://github.com/CSFrequency/react-firebase-hooks
*/

import type { Auth, AuthError } from "firebase/auth";
import { useCallback, useState } from "react";

type SignOutHook = [
    () => Promise<boolean>,
    boolean,
    AuthError | Error | undefined
];

export default (auth: Auth): SignOutHook => {
    const [error, setError] = useState<AuthError>();
    const [loading, setLoading] = useState<boolean>(false);

    const signOut = useCallback(async () => {
        setLoading(true);
        setError(undefined);

        try {
            await auth.signOut();
            return true;
        } catch (error) {
            setError(error as AuthError);
            return false;
        } finally {
            setLoading(false)
        }

    }, [auth])
    
    return [signOut, loading, error];
}