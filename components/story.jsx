import {useState} from "react"
import {useRouter} from "next/router"

export default function Story({children})
{
    const router = useRouter()

    const {story} = router.query

    let isValid = !!story

    if (isValid){
        const storyCharacterCount = story.length
        const storyWordCount = story.trim().split(" ").filter(Boolean).length
        isValid = storyWordCount === 50
    }

    return (
        <div>
            <div className={`max-w-lg mx-auto rounded my-12 p-4 bg-white shadow-md ${isValid ? '':'line-through'}`}>
                { story }
            </div>
            {
                false === isValid ? (
                    <div className="text-center text-xs text-orange-500">
                        This story is NOT 50 words long! Someone was playing with the URL field... 😉
                    </div>
                ) : 0
            }
        </div>
    )
}