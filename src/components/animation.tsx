"use client"

import { FC } from "react"
import { motion } from "framer-motion"
import { AnimationProps } from "@/@types"

export const Animation: FC<AnimationProps> = ({
    children, initial, whileInView, animate, exit, transition
}) => {

    return (

        <motion.div
            initial={initial}
            whileInView={whileInView}
            exit={exit}
            transition={transition}
            animate={animate}
        >
            {children}
        </motion.div>
    )
}
