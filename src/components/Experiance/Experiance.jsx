import React from 'react'
import './Experiance.css'
import { Themecontext } from '../../Context';
import { useContext } from 'react';
const Experiance = () => {
  const theme=useContext(Themecontext);
  const darkMode=theme.state.darkMode;
  return (
    <div className='experiance' id='experiance'>
      <div className="achivements">
              <div className="circle" style={darkMode?{color:"black"}:{color:"black"}}>1.5</div>
              <span>1 Year</span>
              <span> Experiance</span>
      </div>
      <div className="achivements">
              <div className="circle" style={darkMode?{color:"black"}:{color:"black"}}>30+</div>
              <span>completed</span>
              <span>Projects</span>
      </div>
      <div className="achivements">
              <div className="circle" style={darkMode?{color:"black"}:{color:"black"}}>1.5</div>
              <span>Experianced</span>
              <span>Work</span>
      </div>
    </div>
  )
}

export default Experiance
