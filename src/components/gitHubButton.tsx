'use client'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';

import { authFirebase } from 'firebase-admin/firebase-web-app';
import { Button } from '@nextui-org/button';

export const GitHubButton = ({onClick}: {onClick?:() => void}) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleGithubAuth = async () => {
        setLoading(true);
        const provider = new GithubAuthProvider();

        await signInWithPopup(authFirebase, provider);
        onClick?.();
        setLoading(false);
    }

    return (
        <Button color="default" variant="ghost" className="font-bold" onClick={handleGithubAuth} isLoading={loading}>GitHub</Button>
    )
}