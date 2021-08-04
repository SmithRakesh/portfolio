import { motion } from 'framer-motion'
import React from 'react'
import { profiency } from '../data/proficiency'
import styles from "../styles/Proficiency.module.css"
const Proficiency = () => {
    return (
        <div className={styles.container}>
            <h1>Proficiencies</h1>
            <div className={styles.proficiency}>
                {
                    profiency.map(({src,title}) => <div>
                        <motion.img 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={styles.img} src={src} alt={title} />
                        <h3>{title}</h3>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Proficiency