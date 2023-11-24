'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth } from "@/firebase-admin/firebase";

export const SignInButton = () => {
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setShowIcon(false);
            } else {
                setShowIcon(true);
            }
        })
    }, [])

    return (
        <>
            {
                showIcon ?
                <Link className="text-white bg-black rounded-md py-1 px-2 h-fit" href="/sign-in">Sign In</Link> : null
            }
        </>
    )
}