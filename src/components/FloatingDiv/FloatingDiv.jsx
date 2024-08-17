import React from "react";
import "./FloatingDiv.css";
import { Themecontext } from '../../Context';
import { useContext } from 'react';
const FloatingDiv = (props) => {
  const theme=useContext(Themecontext);
  const darkMode=theme.state.darkMode;
  const { img, txt1, txt2 } = props;
  return (
    <div className="Floatingdiv">
      <img src={img} alt="" />
      <span style={darkMode?{color:"black"}:{color:"black"}}>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
