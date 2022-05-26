import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4vk3nh9', 'template_3o1lvbt', form.current, 'TueOMXo5s35GdqRJ4')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Have An Issue Not Is Not Addressed In The FAQ</h5>
      <h2>Submit your query here</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ministryofhealthkenya@govservices.com</h5>
            <a href="mailto:MukitiRyanGit@gmail.com" target='_blank'>Send a Message</a>
          </article>
          {/* <article className='contact__option'>
            <FaGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>Mukiti-Ryan</h5>
            <a href="https://github.com/Mukiti-Ryan" target='_blank'>Send a Message</a>
          </article> */}
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+254722444444</h5>
            <a href="https://api.whatsapp.com/send?phone=+254722444444" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your email address' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact