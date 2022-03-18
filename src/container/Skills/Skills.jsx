import React from 'react'



import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
 import ReactTooltip from "react-tooltip"
import{AppWrap,MotionWrap} from "../../wrapper"
import{urlFor,client} from "../../client"
 

import './Skills.scss'

const Skills = () => {

 const [experience, setExperience] = useState([])
  const [skill, setSkills] = useState([])

    useEffect(() => {
    
    const query = '*[_type =="skills"]';

   const workQuery='*[_type =="experiences"]';

    client.fetch(workQuery).then((data)=>{
      console.log(data)
      setExperience(data)

 
    })

     client.fetch(query).then((data)=>{
      setSkills(data)
 
    })

  },[])


  return (
    <>
      <h2 className='head-text'>
        Skills

      </h2>
      <div
      className='app__skills-container'>

        <motion.div
        className='app__skills-list'

        >
          {skill?.map((skill)=>(

            <motion.div

            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className='app__skills-item app__flex'
            key={skill.name}

            >

              <div className='app__flex' 
              style={{backgroundColor:skill.bgColor}}>

                <img src={urlFor(skill.icon)} alt={skill.name} />

              </div>
              <p className='p-text'>{skill.name}</p>
              </motion.div>

          ))}

        </motion.div>
        <h2 className='head-text  app__exp'>
        Experience

      </h2> 

           <motion.div
           className='app__skills-exp'
           >
          
             {experience?.map((experience)=>(
               <motion.div
               className='app__skills-exp-item'
               key={experience.year}>

                 <div
                 className='app__skills-exp-year'
                 >
                   <p className='bold.text'>{experience.year}</p>
                 </div>
                 <motion.div className='app__skills-exp-works'>

                   {experience.works.map((work)=>(
               <>
               <motion.div
               className='app__skills-exp-work'
                  whileInView={{opacity:[0,1]}}
                transition={{duration:0.5}}
                data-tip
                data-onFocusCapture={work.name}
                key={work.name}

            >
              <h4 className='bold-text'>{work.name}</h4>
              <p className='p-text'>{work.company}</p>


               </motion.div>

               <ReactTooltip 
               effect="solid"
               arrowColor="#fff"
               className="skills-tooltip"
               >
                 {work.desc}
               </ReactTooltip>
               </>
                   ))}
                 </motion.div>
               </motion.div>
             ))}
           </motion.div>

      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills,'app__skills'),

  "skills",
  "app__primarybg"
  )