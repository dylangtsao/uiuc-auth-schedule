import Head from "next/head";
import {auth} from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user,loading] = useAuthState(auth);
  return (
    <div className="bg-gray-200 h-max w-max">
      <Head>
        <title>UIUC-auth schedule</title>
        <meta name="description" content="UIUC-auth schedule" />
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main className="w-screen h-screen px-10">
        <h1 className="text-2xl pt-2">Welcome {user.displayName}</h1>
      </main>
    </div>
    
  )
}
