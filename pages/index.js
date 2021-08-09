import Head from 'next/head'
import Form from "../components/form"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fifty Words</title>
      </Head>

      <main>
        <Form/>
      </main>

      <footer>
        {/* TODO ... */}
      </footer>
    </div>
  )
}
