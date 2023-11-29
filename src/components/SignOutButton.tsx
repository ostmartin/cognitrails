'use client'

import { Button } from "@nextui-org/button";

import { authFirebase } from "@/firebase-admin/firebase";
import useSignOut from "@/hooks/useSignOut";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SignOutButton = () => {
    const [signOut, loading, error] = useSignOut(authFirebase);
    const [status, setStatus] = useState<boolean | undefined>();

    const router = useRouter();

    const handleSignOut = async () => {
        const result = await signOut();
        setStatus(prev => result);
        router.replace('/');
    }

    return (
        <Button color="default" onClick={handleSignOut} isLoading={loading}>Log Out</Button>
    )
}