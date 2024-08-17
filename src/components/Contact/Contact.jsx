import React, { useRef, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';
import "./Contact.css";
import { Themecontext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
  const theme=useContext(Themecontext);
  const darkMode=theme.state.darkMode;

              const form = useRef();

              const [done,setdone]=useState(false)
              const sendEmail = (e) => {
                e.preventDefault();
            
                emailjs.sendForm('service_5t2alia', 'template_mv1kqc9', form.current, 'UVG7TX_2bWbJpK1ob')
                  .then((result) => {
                      console.log(result.text);
                      setdone(true)
                      setTimeout(() => {
                            setdone(false);
                      }, 3000);
                  }, (error) => {
                      console.log(error.text);
                  });
              };
  return (
<>
<div className="contact-form" id='contact'>
   <div className="w-left">
      <div className="awesome">
        <span style={darkMode?{color:"white"}:{color:"black"}}>Get in touch</span>
        <span>Contact me</span>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
      </div>
   </div>

    <div className="c-right">
         <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" className="user" placeholder="Name" required/>
              <input type="email" name="user_email" className="user" placeholder="Email" required/>
              <textarea name="message" className="user" placeholder="Message" required></textarea>
              <input type="submit" value="Send" className="button"/>
              <span>{done && "Thanks to contact me!"}</span>
              <div className="blur c-blur1" ></div>
         </form>
    </div>
</div>
</>
  );
};

export default Contact;
