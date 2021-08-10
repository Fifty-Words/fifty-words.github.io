import Head from 'next/head'
import {motion} from "framer-motion"
import Header from "../components/header"
import Form from "../components/form"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fifty Words</title>
      </Head>

        <Header>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        scale: 0.8,
                        opacity: 0,
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            type: "tween",
                            ease: "easeInOut",
                            delay: 0.9,
                            duration: .3,
                        },
                    },
                }}
                className="inline-block max-w-xs mx-auto text-center text-xs text-gray-500 pt-4"
            >
                <p className="pb-2">
                  Fifty word stories.
                </p>
                <p>
                    Not novels, just <i>compelling sentences</i>.
                </p>
            </motion.div>
        </Header>

      <main>
        <Form/>
      </main>

      <footer>
        {/* TODO ... */}
      </footer>
    </div>
  )
}
