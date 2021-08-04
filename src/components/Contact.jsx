import { motion } from 'framer-motion'
import React from 'react'
import { contactIno } from '../data/contactInfo'
import styles from "../styles/Contact.module.css"

const Contact = () => {
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
            <h1>You can connect me through</h1>
            <div>
                {
                    contactIno.map(({rel,target,href,src,title},i) => <motion.a 
                    custom={i}
                    animate="visible"
                    initial="hidden"
                    variants={variants}
                    rel={rel}
                    target={target}
                    href={href}>
                        <img width="100px" src={src} alt={title} />
                        <h3>{title}</h3>
                    </motion.a>)
                }
            </div>
        </div>
    )
}

export default Contact
