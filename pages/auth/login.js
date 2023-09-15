import {FcGoogle} from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../../utils/firebase';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Login() {
    //Sign in with Google
    const [user,loading] = useAuthState(auth);
    const route = useRouter();
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result.user);
            route.push("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user) {
            route.push("/dashboard");
        } else {
            console.log("login");
        }
    }, [user]);

    return (
        <div className="bg-white shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-3xl font-medium">Join Today</h2>
            <div className="py-4">
                <h3 className="py-4">Sign in</h3>
            </div>
            <div className="flex flex-col gap-4">
                <button onClick={GoogleLogin}className="flex gap-4">
                    <FcGoogle className="text-2xl"/> Sign in with Google
                </button>
            </div>
        </div>
    );
}