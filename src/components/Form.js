import "./FormStyles.css";
import React from 'react';
import { useRef } from "react";
import emailjs from '@emailjs/browser';


const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zxlr3wb', 'template_i455skz', form.current, '-gI0agEp99pRGeURv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
         };

  return (
      <div className="form">
          <form ref={form} onSubmit={sendEmail}>
              <label><h4>Your Name</h4></label>
              <input type="text" name="user_name" required/>

              <label><h4>Email</h4></label>
              <input type="email" name="user_email" required></input>

              <label><h4>Subject</h4></label>
              <input type="text"  name="sub" required></input>

              <label><h4>Message</h4></label>
              <textarea rows="6" placeholder="Type your Message Here"  name="message" required />
              
              <button type="submit" className="btn">Submit</button>
          </form>
    </div>
  )
}

export default Form