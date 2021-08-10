import Head from 'next/head'
import Header from "../components/header"
import {default as StoryComponent} from "../components/story"

export default function Story() {
  return (
    <div>
      <Head>
        <title>Story</title>
      </Head>

      <Header/>

      <main>
        <StoryComponent/>
      </main>

      <footer>
        {/* TODO ... */}
      </footer>
    </div>
  )
}
