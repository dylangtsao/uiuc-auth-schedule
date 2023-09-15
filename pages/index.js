import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-white h-max w-max">
      <Head>
        <title>UIUC-auth schedule</title>
        <meta name="description" content="UIUC-auth schedule" />
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main>
        <h1 className="text-2xl bg-white">UIUC-auth schedule</h1>
      </main>
    </div>
    
  )
}
