'use client'

import { Link, Avatar } from "@nextui-org/react";
import { authFirebase } from "@/firebase-admin/firebase";
import { useAuthState } from "@/hooks/useAuthState";

export const UserIcon = () => {
    const [value, loading, error] = useAuthState(authFirebase);

    return (
        <>
            {
                value ?
                <Link href='/workspace/profile'>
                    <Avatar isBordered color="default"/>
                </Link> : null
            }
        </>
    )
}