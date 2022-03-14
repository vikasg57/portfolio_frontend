import React from 'react'

import './Work.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import{AiFillEye,AiFillGithub} from "react-icons/ai"
import{AppWrap} from "../../wrapper"
import{urlFor,client} from "../../client"
 

const Work = () => {

  const [activeFilter, setactiveFilter] = useState("All")
  const [animateCard, setanimateCard] = useState({y:0,opacity:1})
  const [Works, setWorks] = useState([]);
  const [FilterWork, setFilterWork] = useState([])


  useEffect(() => {
    
    const query = '*[_type =="works"]';

    client.fetch(query).then((data)=>{
      setWorks(data)
      setFilterWork(data)
    })

  }, [])
  

  function handWorkFilter(item){

    setactiveFilter(item)
    setanimateCard([{y:100,opacity:0}])

    setTimeout(() => {

      setanimateCard([{y:0,opacity:1}])

      if(item=="All"){

        setFilterWork(Works)

        
      }
      else{
        setFilterWork(Works.filter((work)=>(work.tags.includes(item))))
      }


      
    }, 500);



  }
  return (
    <>
     <h2 className='head-text'>My Creative <span> Portfolio</span> Section</h2>

     <div className='app__work-filter'>
       {["JavaScript","MERN","React JS","All"].map((item,i)=>(

         <div
         key={i}

         onClick={()=>handWorkFilter(item)}
         className={`app__work-filter-item app__flex p-text ${activeFilter===item ?"item-active":"" }`}
         
         >
           {item}

         </div>
       )
       
       )}
     </div>
     <motion.div
     animate={animateCard}
     transition={{duration:0.5,delayChildren:0.5}}
     className="app__work-portfolio"
     >

       {FilterWork.map((work,i)=>(
         <div
         className='app__work-item app__flex' key={i}
       
         >
             <div className='app__work-img app__flex'>

               <img src={urlFor(work.imgUrl)} alt={work.name} />

               <motion.div
               whileHover={{opacity:[0,1]}}
               transition={{duration:0.25,ease:"easeInOut", staggeerChildren:0.5}}
               className="app__work-hover app__flex"
               >
                 <a href={work.projectLink} target="_blank" rel="noreferrer"  >

                  <motion.div
                  whileInView={{scale:[0,1]}}
                   whileHover={{scale:[1,0.9]}}
               transition={{duration:0.25}}
               className="app__flex">

                 <AiFillEye/>

               </motion.div>

                 </a>
                 <a href={work.codeLink} target="_blank" rel="noreferrer"  >

                  <motion.div
                  whileInView={{scale:[0,1]}}
                   whileHover={{scale:[1,0.9]}}
               transition={{duration:0.25}}
               className="app__flex">

                 <AiFillGithub/>

               </motion.div>

                 </a>


               </motion.div>
             </div>
             <div
             className='app__work-content app__flex'>

               <h4 className='bold-text'>{work.title}</h4>
               <p className='p-text' style={{marginTop:10}}>{work.description}</p>
               <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
               </div>

             </div>

         </div>
       ))}


     </motion.div>

     



    </>
  )
}

export default AppWrap(Work,"work")