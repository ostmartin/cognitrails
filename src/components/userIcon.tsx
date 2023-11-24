'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { auth } from "@/firebase-admin/firebase";

import userIcon from '../../public/profile-user-svgrepo-com.svg';

export const UserIcon = () => {
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setShowIcon(true);
            } else {
                setShowIcon(false);
            }
        })
    }, [])

    return (
        <>
            {
                showIcon ?
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