'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { authFirebase } from "@/firebase-admin/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { useAuthStateCustom } from "@/hooks/use-auth-state";

export const SignInButton = () => {
    // const [showIcon, setShowIcon] = useState(false);

    // useEffect(() => {
    //     authFirebase.onAuthStateChanged((user) => {
    //         if (user) {
    //             setShowIcon(false);
    //         } else {
    //             setShowIcon(true);
    //         }
    //     })
    // }, [])

    // const [value, loading, error] = useAuthState(authFirebase);
    // console.log(value)

    const { value } = useAuthStateCustom(authFirebase);

    return (
        <>
            {
                !value ?
                <Link className="text-white bg-black rounded-md py-1 px-2 h-fit" href="/?sign-in=y">Sign In</Link> : null
            }
        </>
    )
}