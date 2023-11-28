'use client'

import { Button, Link } from "@nextui-org/react";
import { authFirebase } from "@/firebase-admin/firebase";
import { useAuthState } from "@/hooks/useAuthState";

import { SignInModal } from "./SigninModal";

export const SignInButton = () => {

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