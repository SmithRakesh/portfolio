import React from 'react'
import styles from "../styles/SingleProject.module.css"
import { motion } from "framer-motion"

const SingleProject = ({src,title,info,url,logo,custom,animate,initial,variants}) => {
    
    return (
        <motion.div
        custom={custom}
        animate={animate}
        initial={initial}
        variants={variants}
       
        className={styles.wrapper}
        >
            <motion.div 
            whileHover={{ scale: 0.9 ,transition:{ease:'easeInOut'}}}
            whileTap={{ scale: 0.8 }}
            className={styles.container}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={src} alt={title} />
                </div>
            <motion.div 
            whileTap={{fontSize:"25px"}}
            className={styles.info}>
            <div className={styles.title}>{title}</div>
                <div className={styles.projectInfo}>{info}</div>
                <a className={styles.url} href={url} rel="noreferrer" target="_blank">View source</a>
                <div className={styles.techStack}>
                    <div className={styles.stack}>Tech stacks</div>
                    <div className={styles.imgContainer}>
                    <img className={styles.logo} src="./logos/html.jpg" alt="html" />
                    <img className={styles.logo} src="/logos/css.jpg" alt="css" />
                    {
                        title !== "Greenhouse-clone" && (
                        <img className={styles.logo} src="/logos/js.png" alt="js" />
                    )
                    }
                    {
                        logo && <img className={styles.logo} src={logo} alt="react logo" />
                    }
                    </div>
                </div>
            </motion.div>
           </motion.div>
        </motion.div>
    )
}

export default SingleProject
