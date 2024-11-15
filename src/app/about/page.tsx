import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";


const About = () => {
  return (
    <div >
        <div className="container">
      <div>  
     <h1 className='heading'>About Me</h1> 
    
     <h2 className='h2'> I am Shabnam Wahid <br />
       Front-End Developer</h2>     
        
     <p className='para'>I am a frontend developer passionate about creating beautiful,
              responsive websites. With expertise in HTML, CSS, and JavaScript,
              I focus on building user-friendly interfaces that provide seamless
              experiences. I&apos;m constantly learning and exploring new
              technologies to improve my skills and deliver high-quality web
              applications.</p>
              </div>
         <div>
         <Image src="/images/port-image.jpg" alt="person"
      width={200} height={200} className='img'/> 
         </div>
         </div>
              <div className="icons">
              
               <a
                href="https://www.linkedin.com/in/shabnamwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="button
                "
              >
                <FaLinkedin aria-hidden="true" />
                {/* <span className="sr-only"></span> */}
              </a>
              <a
                href="https://github.com/Shabnamwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <FaGithub aria-hidden="true" />
                {/* <span className="sr-only"></span> */}
              </a>
              <a
                href="https://www.instagram.com/shabnamwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <FaInstagramSquare aria-hidden="true" />
                {/* <span className="sr-only"></span> */}
              </a> 
             
            </div>
           <Skills /> 
           </div>
         
  )
}

export default About;


 
 const Skills = () => {
   return (
     <div>
       <h1 className='Heading1'>My Skills</h1>
      <div>
       <h2 className='skills'>HTML</h2>
       <div className='bar'></div>
        </div> 
      <div>
       <h2 className='skills'>CSS</h2>
       <div className='bar'></div>
        </div> 
      <div>
       <h2 className='skills'>Typescript</h2>
       <div className='bar'></div>
        </div> 
      <div>
       <h2 className='skills'>Javascript</h2>
       <div className='bar'></div>
        </div> 
      <div>
       <h2 className='skills'>Next.js</h2>
       <div className='bar'></div>
        </div> 
      <div>
       <h2 className='skills'>React</h2>
       <div className='bar'></div>
        </div> 
     </div>
   )
 }
 

 