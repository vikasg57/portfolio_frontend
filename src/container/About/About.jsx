
import React from 'react'
import {motion} from "framer-motion"
import './About.scss'
import {images} from '../../constants'
import { urlFor,client } from "../../client";
import { useEffect,useState } from 'react'
import { AppWrap} from "../../wrapper";



const About = () => {

  const [abouts, setabouts] = useState([])

  useEffect(() => {

    const query='*[_type=="abouts"]';

    client.fetch(query).then((data)=>{ setabouts(data)   })
  
  }, [])
  
  return (
    <>
    <h2 className='head-text'>I know That <span> Good Devlopment</span> <br /> means <span>Good apps</span></h2>
    <div className='app__profiles'>

      {abouts.map((about,i)=>(

      
       <motion.div
       whileInView={{opacity:1}}
       whileHover={{scale:1.1}}
       transition={{duration:0.5,type:'tween'}}
       className="app__profile-item"
       key={about.title+i}
       >
        
       <img src={urlFor(about.imgUrl)} alt={about.title}/>
       <h2 className='bold-text' style={{marginTop:20}}> {about.title}</h2>
       <h2 className='bold-text' style={{marginTop:10}}> {about.description}</h2>

      </motion.div>))}



    </div>
    </>
  )
}

export default AppWrap(About,"about")