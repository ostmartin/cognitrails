'use client'

import { authFirebase } from "firebase-admin/firebase";
import { useAuthState } from "hooks/useAuthState";

import { SignInModal } from "./signinModal";

export const SignInButtonWithModal = () => {

    const [value, loading, error] = useAuthState(authFirebase);

    return (
        <>
            {
                !value ?
                <SignInModal/> : null
            }
        </>
    )
}