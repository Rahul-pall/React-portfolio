import React from "react";
import "./Work.css";
import Reactimg from '../../img/react.png'
import Javascript from '../../img/javascript.png'
import Mongo from '../../img/mongo.png'
import Git from '../../img/git.png'
import Ps from '../../img/ps.png'
import { Themecontext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Work = () => {
  const transition={duration:4,type:'spring'};
  const theme=useContext(Themecontext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="works">
    {/* left side */}
      <div className="left-s">
        <span style={darkMode?{color:"white"}:{color:"black"}}>Good experiance for all these</span>
        <span>languages & software</span>
        <span>
          I can provide you a fully responsive React And Next.js websites.{" "}
          <br /> These websites are SEO friendly.
          <br /> And the users use website easily.
          <br />
          And understand all features easily.
        </span>
        <Link spy={true} to="contact" smooth={true} activeClass="activeClass">
        <button className="button s-button1">Hire me</button>
        </Link>
        <div className="blur s-blur1"></div>
      </div>
      {/* right side */}
      <div className="w-right">
      <motion.div className="w-mainCircle"
      initial={{rotate:'0deg'}}
      whileInView={{rotate:'360deg'}}
      // viewport={{margin:'-40px'}}
      transition={transition}
      >
        <div className="w-secCircle">
          <img src={Reactimg} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Git} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Ps} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Mongo} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Javascript} alt="" />
        </div>
      </motion.div>
        {/* Background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
    </div>
    </div>
  );
};

export default Work;
