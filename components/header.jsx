import Link from "next/link"
import {motion} from "framer-motion"
import Logo from "../media/svgs/clean-complete-logo.svg"

export default function Header({children})
{
    return (
        <motion.header
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
                        ease: "easeInOut",
                        delay: 0,
                        duration: .3,
                    },
                },
            }}
            className="flex flex-col items-center justify-center py-8"
        >
            <div>
                <div className="relative inline-block">
                    <Logo className="relative text-teal-500 w-40 max-w-full"/>
                    <Link
                        href="/"
                    >
                        <a
                            className="absolute top-0 left-0 w-full h-full z-10"
                            title="50 Words Homepage"
                            aria-label="50 Words Homepage"
                        />
                    </Link>
                </div>
            </div>
            { children }
        </motion.header>
    )
}