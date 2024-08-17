import React from "react";
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/Glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Themecontext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Intro = () => {
  const transition={duration:2,type:'spring'}
  const theme=useContext(Themecontext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode?{color:"white"}:{color:"black"}}>Hy! I am </span>
          <span>Rahul Pal </span>
          <span>Frontend Developer with higher level of experience in web designing and development,
          producting the Quality work.</span>
        </div>
        <Link spy={true} to="contact" smooth={true} activeClass="activeClass">
        <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
        <motion.a
        initial={{left:"-4rem"}}
         whileInView={{left:'0rem'}}
        transition={{duration:1,type:'spring'}}

         href="https://github.com/dashboard" target="_blank"><img src={Github} alt="" /></motion.a>
        <motion.a
        initial={{left:"-4rem"}}
         whileInView={{left:'0rem'}}
        transition={{duration:1,type:'spring'}}
         href="https://linkedin.com/in/rahul-pal-71498a244" target="_blank"><img src={LinkedIn} alt="" /></motion.a>
        <motion.a
        initial={{left:"-4rem"}}
         whileInView={{left:'0rem'}}
        transition={{duration:0.5,type:'spring'}}
         href="https://www.instagram.com/__rahul2002_/" target="_blank"><img src={Instagram} alt="" /></motion.a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img src={Glassesimoji} alt="" 
          initial={{left:'-46%'}}
          whileInView={{left:'-24%'}}
          transition={transition}

        />

        <motion.div style={{top:'-4%',left:'55%'}}
        initial={{top:'-8%',left:'74%'}}
        whileInView={{left:'64%',top:'-4%'}}
        transition={transition}
        className="Floating-div"
        >
        <FloatingDiv img={Crown} txt1="Web" txt2="Developer"/>
        </motion.div>
        <motion.div style={{top:'18rem',left:"0rem"}}
        initial={{top:'18rem',left:'9rem'}}
        whileInView={{left:'0rem'}}
        transition={transition}
        className="Floating-div"
        >
        <FloatingDiv img={Thumbup} txt1="Best Design" txt2="Award"/>
        </motion.div>
        {/* blur effect */}
        <div className="blur"></div>
        <div className="blur blur1"></div>
      </div>
    </div>
  );
};

export default Intro;
