import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fifty Words</title>
      </Head>

      <main className={"text-green-500 p-5"}>
        Hey Champ
      </main>

      <footer>
        {/* TODO ... */}
      </footer>
    </div>
  )
}
