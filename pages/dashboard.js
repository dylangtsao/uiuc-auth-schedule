import {auth} from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useRouter} from 'next/router';

export default function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    if(loading) return <h1>Loading...</h1>
    if(!user) route.push("/auth/login");
    if (user)
        return(
            <div className="flex flex-col justify-between w-screen h-screen bg-gray-200 px-10">
                <h1 className="text-3xl pt-2">Welcome to your dashboard {user.displayName}</h1>
                <button onClick={() => auth.signOut()} className="pb-5 text-sm hover:text-base">Sign Out</button>
            </div>
        )
}