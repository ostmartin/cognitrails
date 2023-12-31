'use client'

import { useRouter } from "next/navigation";
import { useAuthState } from "hooks/useAuthState";
import { authFirebase } from "firebase-admin/firebase-web-app";

import { GitHubButton } from "components";

export const GlobalAuthProvider = ({children}: { children: React.ReactNode }) => {
    const [value, loading, error] = useAuthState(authFirebase);
    const router = useRouter();

    const onSignInHandler = () => {
        router.refresh();
    }

    if(loading) return <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2">Loading...</div>

    if (!value) {
        return (
            <>
                <section className="flex justify-center h-screen">
                    <div className="h-fit w-fit flex flex-col justify-around items-center gap-8 border-2 border-gray-600 rounded-lg p-8 mt-10">
                        <h2>Login</h2>
                        <p>Choose sign in method:</p>
                        <GitHubButton onClick={onSignInHandler}/>
                    </div>
                </section>
            </>
        );
    }
    


    return (
        <>
            {children}
        </>
    )
}