'use client'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import { auth } from '@/firebase-admin/firebase';

export const GitHubButton = () => {
    const router = useRouter();

    const handleGithubAuth = () => {
        
        const provider = new GithubAuthProvider();

        signInWithPopup(auth, provider)
            .then(() => {
                router.push('/')
            })
            .catch(console.log)
    }

    return (
        <button className="bg-black text-white rounded-lg px-4 py-1 max-w-[100px]" onClick={handleGithubAuth}>GitHub</button>
    )
}