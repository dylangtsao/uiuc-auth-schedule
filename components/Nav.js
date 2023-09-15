import Link from "next/link";
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../utils/firebase';
export default function Nav() {

    const [user,loading] = useAuthState(auth);

    return(
        <nav className="flex justify-between p-8 bg-white">
            <Link href={"/"}>Logo</Link>
            <ul>
                {!user && (
                <Link href={"/auth/login"} className="bg-gray-300 rounded-xl p-3 font-medium">LOG-IN
                </Link> 
                )}
                {user && (
                    <div>
                        <Link href={'/dashboard'}>
                            <img src={user.photoURL} alt="avatar" referrerPolicy="no-referrer" className="w-12 rounded-full"/>
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
        
    )
}