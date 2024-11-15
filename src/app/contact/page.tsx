
import React from 'react';


const Contact = () => {
  return (
    <>
      

      <div className="contact-container">
        <h1 className="contact-heading">Contact Me</h1>
        <p className='para-4'>Feel free to reach out to me anytime!
I’d love to hear from you and answer any questions you have.</p>
        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows={5} placeholder="Write your message here" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
