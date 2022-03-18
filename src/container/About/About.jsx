
  import React from 'react'
import { motion } from 'framer-motion'

import{AppWrap,MotionWrap} from "../../wrapper"

 

import './About.scss'

const About = () => {

   const experience=[

        {
          year:'2021-2022',
          works:[{ name:'Full-Stack Development',  college:"Masai School, Bangalore"}],
        
     
        },

        {
          year:'2017-2019',
          works:[{ name:'MBA(Operations)',college:"S.P.P.U,Pune"}]
     
        },
          {
          year:'2013-2017',
          works:[{ name:'B. TECH(Food Tech)',college:"DR.B.S.K.K.V,Dapoli"}]
     
        },
  
    ]

  return (
    <>
      <h2 className='head-text'>
        About me

      </h2>
      <div className='app__about-des' >
          <h3 className='p-text'  id='description'>Aspiring full-stack developer
                                     with a specialization in MERN
                                    stack. Possesses the ability to
                                     understand business
                                      requirements to translate them
                                     into technical requirements. A
                                       quick learner, eager to work in a
                                      challenging environment, and
                                    Proactive in time management.</h3>

      </div>
             
               
      <div
      className='app__skills-container'>
        <h2 className='head-text  app__exp'>
        Education

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

                {console.log(experience.works)}
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
              <p className='p-text'>{work.college}</p>
               </motion.div>

               {/* <ReactTooltip 
               effect="solid"
               arrowColor="#fff"
               className="skills-tooltip"
               >
                 {work.desc}
               </ReactTooltip> */}
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
  MotionWrap(About,'app__skills'),

  "about",
  "app__whitebg"
  )