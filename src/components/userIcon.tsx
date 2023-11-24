'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { authFirebase } from "@/firebase-admin/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { useAuthStateCustom } from "@/hooks/use-auth-state";

import userIcon from '../../public/profile-user-svgrepo-com.svg';

export const UserIcon = () => {
    // const [showIcon, setShowIcon] = useState(false);

    // useEffect(() => {
    //     authFirebase.onAuthStateChanged((user) => {
    //         if (user) {
    //             setShowIcon(true);
    //         } else {
    //             setShowIcon(false);
    //         }
    //     })
    // }, [])
    const {value} = useAuthStateCustom(authFirebase);
    // const [loading, value, error] = useAuthState(authFirebase)

    return (
        <>
            {
                value ?
                <Link href='/workspace/profile'>
                    <Image
                        src={userIcon}
                        alt="Profile"
                        width={40}
                        className="max-h-full"
                    />
                </Link> : null
            }
        </>
    )
}