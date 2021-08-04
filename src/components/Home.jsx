import { motion } from 'framer-motion'
import React from 'react'
import styles from "../styles/Home.module.css"

const Home = () => {
    return (
        <motion.div 
        initial={{
            opacity: 0.3
        }}
        animate={{
            opacity: 1,
            transition: {
                delay:0.5,
                ease:'linear',
                duration:1.5
            }
        }}
        
        className={styles.container}>
            <div className={styles.info}>
                <div className={styles.heading}>Hello, I'm Smith Rakesh.M </div>
                <div className={styles.content}>A quick thinking individual with a bent towards building
                scalable and user centric web application with hands on
                experience of 1200 plus hours of coding. Seeking a
                challenging position in an reputed organization to enhance
                my skills</div>
            </div>
            <div className={styles.imgWrapper}>
            <img className={styles.profile} src="./background.jpg" alt="profilepic" />
            </div>
        </motion.div>
    )
}

export default Home
