import React from 'react'
import './Card.css';
import { Themecontext } from '../../Context';
import { useContext } from 'react';
const Card = (props) => {
  const theme=useContext(Themecontext);
  const darkMode=theme.state.darkMode;
              const {emoji,heading,details}=props;
  return (
    <div className='card'>
       <img src={emoji} alt="" />
       <span>{heading}</span>
       <span style={darkMode?{color:"white"}:{color:"black"}}>{details}</span>
       <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Card
