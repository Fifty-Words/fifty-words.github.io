import {useState} from "react"
import {useRouter} from "next/router"
import {motion} from 'framer-motion'
const esrever = require('esrever')

export default function Form({children})
{
    const router = useRouter()

    const [story, setStory] = useState("")
    const [isFormVisible, setIsFormVisible] = useState(false)

    const storyCharacterCount = story.length
    const storyWordCount = story.trim().split(" ").filter(Boolean).length
    const isValid = storyWordCount === 50

    const handleChangeStory = (event) => setStory(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()

        // We don't want the story to be directly readable in the URL! Otherwise some people may not click 😂
        // Using esrever, we can safely reverse the string, supporting multibyte characters too.
        // We're not trying to encrypt the string, so simply reversing it is more than enough to obscure it!
        const storyReversed = esrever.reverse(story)

        router.push({
            pathname: "/story",
            query: {
                story: storyReversed,
            }
        })
    }

    if (false === isFormVisible){
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        scale: 0.2,
                        opacity: 0,
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            type: "tween",
                            ease: "easeInOut",
                            delay: 1.9,
                            duration: .3,
                        },
                    },
                }}
                className="text-center pb-12"
            >
                <button
                    className="inline-block px-4 py-2 rounded-full shadow-md bg-teal-600 text-white text-xs "
                    onClick={() => setIsFormVisible(true)}
                >Add your 50 words</button>
            </motion.div>
        )
    }

    return (
        <motion.form
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    scale: 0.2,
                    opacity: 0.2,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: "tween",
                        ease: "easeInOut",
                        duration: .3,
                    },
                },
            }}
            className="max-w-lg mx-auto rounded mb-12 p-4 bg-white shadow-md"
            onSubmit={handleSubmit}
        >
            <div>
                <div>
                    <div className="mb-4 rounded-full px-4 py-2 bg-gray-100 text-gray-600 text-xs">
                        <div className={`flex justify-between transition duration-400 ${storyCharacterCount > 0 ? '':'opacity-50'}`}>
                            <span>{ storyCharacterCount } char{ storyCharacterCount === 1 ? '':'s' }</span>
                            <span className={`${isValid ? 'text-green-500':''}`}>{ storyWordCount } word{ storyWordCount === 1 ? '':'s' }</span>
                        </div>
                    </div>

                    <textarea
                        className="w-full border border-gray-300 rounded p-2 text-sm"
                        cols="30"
                        rows="10"
                        onChange={handleChangeStory}
                        placeholder="Begin typing here..."
                        autoFocus
                    />
                </div>
                {
                    storyWordCount > 25 ? (
                        <div className="py-4">
                            {
                                isValid ? (
                                    <p className="pb-4 text-xs text-green-500">
                                        Your story is <strong>perfect</strong> and ready to bless the world with.
                                    </p>
                                ) : (
                                    <p className="pb-4 text-xs text-orange-400">
                                        Your 50 word story is close, { Math.abs(50 - storyWordCount) } away...
                                    </p>
                                )
                            }

                            <button
                                className={`w-full px-4 py-2 text-white rounded transform transition-all duration-150 ${isValid ? 'bg-green-500 hover:scale-105':'bg-green-300 pointer-events-none'}`}
                                type="submit"
                                disabled={false === isValid}
                            >
                                Post
                            </button>
                        </div>
                    ) : (
                        <div className="py-4 text-xs text-gray-600 max-w-md">
                            <p className="pb-2">
                                With the average typing speed of 40 words per minute for most adults, I know you have got this. ✍
                            </p>
                        </div>
                    )
                }
            </div>
        </motion.form>
    )
}