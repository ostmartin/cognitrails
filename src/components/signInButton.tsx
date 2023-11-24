'use client'

import Link from "next/link";
import { authFirebase } from "@/firebase-admin/firebase";
import { useAuthState } from "@/hooks/useAuthState";

export const SignInButton = () => {

    const [value, loading, error] = useAuthState(authFirebase);

    return (
        <>
            {
                !value ?
                <Link className="text-white bg-black rounded-md py-1 px-2 h-fit" href="/?sign-in=y">Sign In</Link> : null
            }
        </>
    )
}