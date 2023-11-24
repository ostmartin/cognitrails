'use client'

import Link from "next/link";
import Image from "next/image";
import { authFirebase } from "@/firebase-admin/firebase";

import { useAuthState } from "@/hooks/useAuthState";

import userIcon from '../../public/profile-user-svgrepo-com.svg';

export const UserIcon = () => {
    const [value, loading, error] = useAuthState(authFirebase);

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