import Link from "next/link";
import Image from 'next/image'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../utils/firebase';
export default function Nav() {

    const [user,loading] = useAuthState(auth);

    return(
        <nav className="flex justify-between px-10 py-3 bg-white text-black rounded-lg">
            <Link href={"/"} className="flex align-center justify-center text-3xl">
                SCHPG
            </Link>
            <ul>
                {!user && (
                <Link href={"/auth/login"} className="bg-black text-white rounded-xl px-2 text-xl">LOG-IN
                </Link> 
                )}
                {user && (
                    <div className="flex">
                        <Link href={'/dashboard'}>
                            <img src={user.photoURL} alt="avatar" referrerPolicy="no-referrer" className="w-12 rounded-full"/>
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
        
    )
}