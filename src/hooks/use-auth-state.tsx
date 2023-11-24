import { useState, useEffect } from "react";
import { onAuthStateChanged, Auth, User } from "firebase/auth";

export const useAuthStateCustom = (auth: Auth, options?: {onUserChanged: (user: User | null) => void}) => {
    const [value, setValue] = useState<boolean>(false);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (options?.onUserChanged) {
                try {
                    options.onUserChanged(user);
                } catch (e) {
                    console.log(e)
                }
            }

            if (user) {
                setValue(true);
            } else {
                setValue(false);
            }
        });

        return () => {
            unsubscribe();
        }
    }, [auth])

    return {value};
}