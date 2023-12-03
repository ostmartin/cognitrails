'use client'

import { Link, Avatar } from "@nextui-org/react";
import { authFirebase } from "firebase-admin/firebase";
import { useAuthState } from "hooks/useAuthState";

export const UserIcon: React.FC = () => {
    const [value, loading, error] = useAuthState(authFirebase);

    return (
        <>
            {
                value ?
                <Link href='/workspace/profile'>
                    <Avatar isBordered color="primary"/>
                </Link> : null
            }
        </>
    )
}