import React from 'react'
import TechStacks from './TechStacks'
import { motion } from 'framer-motion'
import { aboutInfo } from '../data/aboutInfo'
import styles from "../styles/About.module.css"
import Proficiency from './Proficiency'

const About = () => {
    const variants = {
        visible: i => ({
        opacity: 1,
        transition: {
        delay: i * 0.6,
        },
        }),
        hidden: { opacity: 0 },
        }
    return (
        <div className={styles.container}>
               <div
               className={styles.content}
                >
                   <div className={styles.heading}>Little about me</div>
             {
                aboutInfo.map(({info},i) => <motion.div
                custom={i}
                animate="visible"
                initial="hidden"
                variants={variants}
                className={styles.li}
               >* {info}</motion.div>)
            }
            </div>
            <Proficiency/>
            <TechStacks/>
            <div className={styles.experience}>
                <div className={styles.experienceContainer}>
                    <motion.div 
                    whileHover={{
                        rotate: 360,
                        transition: {
                            ease:'linear',
                            duration:1
                        }
                    }}
                    className={styles.circle}>1200+</motion.div>
                    <div className={styles.experienceTitle}>Hours Of Coding</div>
                </div>
                <div className={styles.experienceContainer}>
                    <motion.div 
                      whileHover={{
                        rotate: 360,
                        transition: {
                            ease:'linear',
                            duration:1
                        }
                    }}
                    className={styles.circle}>300+</motion.div>
                    <div className={styles.experienceTitle}>Hours Of Soft Skills</div>
                </div>
            </div>
        </div>
    )
}

export default About
