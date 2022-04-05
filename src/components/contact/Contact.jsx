import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>
        Get in touch
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>abcd@gmail.com</h5>
          <a href="mailto:abcd@gmail.com" target='_blank'>Mail Us</a>
          </article>

          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>facebook.com/codeburner</h5>
          <a href="https://m.me/codeburners" target='_blank'>Visit Us</a>
          </article>

          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Insta</h4>
          <h5>instagram.com/codeburner_programming</h5>
          <a href="https://instagram.com/codeburner_programming" target='_blank'>Follow Us</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='youremail@email.com'/>
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact