import React from 'react'
import { projectInfo } from '../data/projectInfo'
import SingleProject from './SingleProject'


const Projects = () => {
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
        <div>
          {/* <h1>Few of my works</h1> */}
            {
                projectInfo.map((project,i) => <SingleProject
                custom={i}
                animate="visible"
                initial="hidden"
                variants={variants}
                key={project.title} {...project}/>)
            }
        </div>
    )
}

export default Projects
