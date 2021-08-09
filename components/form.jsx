import {useState} from "react"
import {useRouter} from "next/router"

export default function Form({children})
{
    const router = useRouter()

    const [story, setStory] = useState("")

    const storyCharacterCount = story.length
    const storyWordCount = story.trim().split(" ").filter(Boolean).length
    const isValid = storyWordCount === 50

    const handleChangeStory = (event) => setStory(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        router.push({
            pathname: "/story",
            query: {
                story: story,
            }
        })
    }

    return (
        <form
            className="max-w-lg mx-auto rounded my-12 p-4 bg-white shadow-md"
            onSubmit={handleSubmit}
        >
            <div>
                <div>
                    <div className="flex justify-between mb-4 rounded-full px-4 py-2 bg-gray-100 text-xs">
                        <span>{ storyCharacterCount } char{ storyCharacterCount === 1 ? '':'s' }</span>
                        <span className={`${isValid ? 'text-green-500':''}`}>{ storyWordCount } word{ storyWordCount === 1 ? '':'s' }</span>
                    </div>

                    <textarea
                        className="w-full border border-gray-300 rounded p-2 text-sm"
                        cols="30"
                        rows="10"
                        onChange={handleChangeStory}
                        placeholder="Begin typing here..."
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
                                Begin typing your own 50 word story.
                            </p>
                            <p className="pb-2">
                                It does not need to be a novel, merely a few compelling sentences...
                            </p>
                            <p className="pb-2">
                                With the average typing speed of 40 words per minute for most adults, I know you have got this. ✍
                            </p>
                        </div>
                    )
                }
            </div>
        </form>
    )
}