'use client'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';

import { authFirebase } from '@/firebase-admin/firebase';

export const GitHubButton = ({onClick}: {onClick:() => void}) => {

    const handleGithubAuth = () => {
        
        const provider = new GithubAuthProvider();

        signInWithPopup(authFirebase, provider)
            .then(() => {
                onClick();
            })
            .catch(console.log)
    }

    return (
        <button className="bg-black text-white rounded-lg px-4 py-1 max-w-[100px]" onClick={handleGithubAuth}>GitHub</button>
    )
}