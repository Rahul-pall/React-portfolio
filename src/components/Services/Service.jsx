import React from "react";
import "./Service.css";
import Resume from './RESUME.pdf'
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "./Card";
import { Themecontext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";
const Service = () => {
   const transition={duration:2,type:'spring'}
   const theme=useContext(Themecontext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="Service" id="service">
      {/* left */}
      <div className="left-s">
        <span style={darkMode?{color:"white"}:{color:"black"}}>My Awesome</span>
        <span>Services,</span>
        <span>
          I can provide you a fully responsive React And Next.js websites. <br /> These
          websites are SEO friendly.
        </span>
        <a href={Resume} download>
        <button className="button s-button1">Download CV</button>
        </a>
        <div className="blur s-blur1"></div>
      </div>
      {/* Right */}
      <div className="right-s">
           <motion.div className="box1"
              initial={{left:'22rem'}}
              whileInView={{left:'14rem'}}
              transition={transition}>
              <Card
                 emoji={Heartemoji}
                 heading="Design"
                 details="Figma, Sketch, Adobe,
                 Photoshop, Adobe, xd etc."
              />
           </motion.div>
           <motion.div className="box2"
              initial={{left:'-12rem',top:'14rem'}}
              whileInView={{left:'-4rem',top:'12rem'}}
              transition={transition}
              >
              <Card
                 emoji={Glasses}
                 heading="Devloper"
                 details="Html, Css ,Javascript, React,
                 Next.js,Tailwind,Bootstrap, etc."
              />
           </motion.div>
           <motion.div className="box3"
           initial={{left:'22rem'}}
              whileInView={{left:'12rem'}}
              transition={transition}
           >
              <Card
                 emoji={Humble}
                 heading="UI/UX"
                 details="Great UI/UX designs. To give User good Experiance"
              />
           </motion.div>
           <div className="blur s-blur2"></div>
      </div>
    </div>
  );
};

export default Service;
