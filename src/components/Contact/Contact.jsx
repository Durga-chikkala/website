import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
// import Love from "C:/Users/DELL/Practice/practicee/src/img/Love.png";

import "./Contact.css";
function Contact() {
    const form = useRef();
    const [Done,setDone]=useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
       emailjs.sendForm('service_6cu1a37', 'template_iqkxijw', form.current, 'KjWk2nTkExf3qKebM')
        .then((result) => {
            setDone(true)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact' id="contact">
    <form ref={form} onSubmit={sendEmail} className='form'>
        <div className='c-left'>
            <span>Get in touch</span>
            <span>Contact Me</span>
        </div>
        <div className='c-right'>
            
            <input type="text" name="from_name" placeholder='Name'/>
            
            <input type="email" name="from_email"  placeholder="Email"/>
            
            <textarea name="message" placeholder="Message" />
            <input type="submit" value="Send" className='button' />
            <span>{Done && "I will Reach you soon"}</span>
            
        </div>
    </form>
    </div>
  )
}

export default Contact