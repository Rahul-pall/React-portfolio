import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Themecontext } from "../../Context";
import { useContext } from "react";
import Home from '@iconscout/react-unicons/icons/uil-home'
import Service from '@iconscout/react-unicons/icons/uil-bag'
import Experiance from '@iconscout/react-unicons/icons/uil-newspaper'
import Portfolio from '@iconscout/react-unicons/icons/uil-book-open'
import Testimonials from '@iconscout/react-unicons/icons/uil-house-user'
import Cancel from '@iconscout/react-unicons/icons/uil-cancel'
import Menu from '@iconscout/react-unicons/icons/uil-chart-line'
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  const theme = useContext(Themecontext);
  const darkMode = theme.state.darkMode;
  const cancel=()=>{
    document.querySelector(".ul").style.top="-110vh"
  }
  const open1=()=>{
    document.querySelector(".ul").style.top="0vh" 
  }
  document.onclick=function(e){
    const open=document.getElementById('open');
    const sidemenu=document.getElementById('sidemenu');
    if(e.target.id!=='open'){
        sidemenu.style.top='-120vh'
    }
  }
  return (
    <>
      <div className="n-wrapper" id="navbar">
        <div className="n-left">
          <div className="n-name">
          Rahul</div>
          <Toggle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul className="ul" id="sidemenu">
              {/* <Link
                spy={true}
                to="navbar"
                smooth={true}
                activeClass="activeClass"
                style={darkMode ? { color: "white" } : { color: "black" }}
              >
                <li><Home size='2rem' className="n-icons"/> Home</li>
              </Link> */}

              <Link to="#navbar" smooth
              style={darkMode ? { color: "white" } : { color: "black" }}
              ><li><Home  size='2rem' className="n-icons"/>Home</li></Link>

              <Link
                spy={true}
                to="#service"
                smooth={true}
                activeClass="activeClass"
                style={darkMode ? { color: "white" } : { color: "black" }}
              >
                <li><Service size='2rem' className="n-icons"/> Services</li>
              </Link>

              <Link
                spy={true}
                to="#experiance"
                smooth={true}
                activeClass="activeClass"
                style={darkMode ? { color: "white" } : { color: "black" }}
              >

                <li><Experiance size='2rem' className="n-icons"/> Experiance</li>
              </Link>

              <Link
                spy={true}
                to="#portfolio"
                smooth={true}
                activeClass="activeClass"
                style={darkMode ? { color: "white" } : { color: "black" }}
              >
                <li><Portfolio size='2rem' className="n-icons"/> Portfolio</li>
              </Link>

              <Link
                spy={true}
                to="#Testimonials"
                smooth={true}
                activeClass="activeClass"
                style={darkMode ? { color: "white" } : { color: "black" }}
              >
                <li><Testimonials size='2rem' className="n-icons"/> Testimonials</li>
              </Link>
              <div onClick={cancel}><Cancel size='4rem' className="cancel"/></div>
              
            </ul>
          </div>
          <Link spy={true} to="#contact" smooth={true} activeClass="activeClass">
            <button className="button n-button">Contact</button>
          </Link>
          <div onClick={open1}><Menu size="3rem" id="open"></Menu></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
