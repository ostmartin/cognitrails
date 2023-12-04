'use client'

import { authFirebase } from "firebase-admin/firebase-web-app";
import { useAuthState } from "hooks/useAuthState";

import { SignInModal } from "./signinModal";

export const SignInButtonWithModal = () => {

    const [value, loading, error] = useAuthState(authFirebase);
    console.log(loading)

    return (
        <>
            {
                !value ?
                <SignInModal/> : null
            }
        </>
    )
}