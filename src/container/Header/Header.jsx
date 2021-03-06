
import React from 'react'

import {motion} from "framer-motion"

import {images} from "../../constants"

import {AppWrap} from "../../wrapper"

import {BsFillArrowDownCircleFill,BsEye} from "react-icons/bs"





import './Header.scss'

const scaleVariants={
  whileInView:{
    scale:[0,1],
    opacity: [0,1],
    transition: {
      duration:1,
      ease:"easeInOut"
    
    },


  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello,I am</p>
              <h1 className="head-text">Vikas</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex ">
            <p className="p-text">Web Developer</p>
          </div>

          <div className="tag-cmp app__flex cv__button ">
            <p className="p-text">RESUME</p>

            <div>
              <a
                href="https://drive.google.com/file/d/1DWdbkr02gWwfKKRSzvjJR8xY4laZmnUy/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <BsEye />
                </motion.div>
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1DWdbkr02gWwfKKRSzvjJR8xY4laZmnUy"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <BsFillArrowDownCircleFill />
                </motion.div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* <img src={images.peofile} alt="profile_bg" /> */}

        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.vikas}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.javascript, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={"circle-index"}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header,"home");