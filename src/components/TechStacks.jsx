import React from 'react'
import {techStackInfo} from "../data/techstackInfo"
import styles from "../styles/TechStacks.module.css"
import {motion} from "framer-motion"

const TechStacks = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Tech Stacks</h1>
           <div className={styles.logoWrapper}>
                {
                    techStackInfo.map(({src,title},i) => <motion.img 
                    drag="x"
                    dragConstraints={{ left: -100, right: 50 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.logo} src={src} alt={title}/>)
                }
           </div>
        </div>
    )
}

export default TechStacks
