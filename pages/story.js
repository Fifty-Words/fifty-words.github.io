import Head from 'next/head'
import {default as StoryComponent} from "../components/story"

export default function Story() {
  return (
    <div>
      <Head>
        <title>Story</title>
      </Head>

      <main>
        <StoryComponent/>
      </main>

      <footer>
        {/* TODO ... */}
      </footer>
    </div>
  )
}
