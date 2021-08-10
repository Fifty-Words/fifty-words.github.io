import {useState} from "react"
import {useRouter} from "next/router"
import {motion} from 'framer-motion'
const esrever = require('esrever')

export default function Story({children})
{
    const router = useRouter()

    let {story} = router.query

    let isValid = !!story

    if (isValid){

        // the story will be in reverse, lets reverse it back
        story = esrever.reverse(story)

        const storyCharacterCount = story.length
        const storyWordCount = story.trim().split(" ").filter(Boolean).length
        isValid = storyWordCount === 50
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: "tween",
                        ease: "anticipate",
                        delay: .2,
                        duration: .6,
                    },
                },
            }}
        >
            <div className={`max-w-lg mx-auto rounded mb-12 p-4 bg-white shadow-md ${isValid ? '':'line-through'}`}>
                { story }
            </div>
            {
                false === isValid ? (
                    <div className="text-center text-xs text-orange-500">
                        This story is NOT 50 words long! Someone was playing with the URL field... 😉
                    </div>
                ) : null
            }
        </motion.div>
    )
}