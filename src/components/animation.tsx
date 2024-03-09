"use client"

import { FC } from "react"
import { motion } from "framer-motion"
import { AnimationProps } from "@/@types"
import { twMerge } from "tailwind-merge"

export const Animation: FC<AnimationProps> = ({
    children, initial, whileInView, animate, exit, transition, className
}) => {

    return (

        <motion.div
            initial={initial}
            whileInView={whileInView}
            exit={exit}
            transition={transition}
            animate={animate}
            className={twMerge(
                "flex items-center justify-center",
                className
            )}
        >
            {children}
        </motion.div>
    )
}
