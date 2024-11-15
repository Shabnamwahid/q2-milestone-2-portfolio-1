import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div>
      <h1 className='heading'>My Projects</h1>
      <div className='projects'>
        <h2 className='pro-h2'>Explore My Projects</h2>
        <p className='pergraph'>Simple and direct, emphasizing that this is a personal showcase.
            Friendly and inviting, encouraging viewers to dive in.
        </p>
      </div>
      <div className='main'>

        <div className="card">
          <Image  src="/images/Sc-shot-2.jpg" alt="" width={300} height={200} className='img2'/>
            <h3 className='card-h'>Figma website</h3>
            <p className='card-p'> Built a personal portfolio website using Next.js, showcasing various 
              frontend development skills and integrating
               an interactive hero section with floating text elements.</p>
               <span><Link href="https://05th-assignment-figme.vercel.app/" className='span'>Preview</Link></span>
               <div className='tag-btn'>
                <button className='tag' >React</button>
                <button className='tag'>Node.js</button>
                <button className='tag'>HTML</button>
          </div>
        </div>
        <div className="card">
          
          <Image  src="/images/Sc-shot-6.jpg" alt="website" width={300} height={200} className='img2'/>
          <h3 className='card-h'>Dynamic Resume</h3>
          <p className='card-p'> Built a personal portfolio website using Next.js, showcasing various 
            frontend development skills and integrating
             an interactive hero section with floating text elements.</p>
             <span><Link href="https://dynamic-resume-3.vercel.app/"  className='span'>Preview</Link></span>
             <div className='tag-btn'>
              <button className='tag' >React</button>
              <button className='tag'>Node.js</button>
              <button className='tag'>HTML</button>
        </div>
      </div>
      <div className="card">
          
          <Image  src="/images/Sc-shot-4.jpg" alt="website" width={300} height={200} className='img2'/>
          <h3 className='card-h'>Men Watches</h3>
          <p className='card-p'> Built a personal portfolio website using Next.js, showcasing various 
            frontend development skills and integrating
             an interactive hero section with floating text elements.</p>
             <span><Link href="https://assignment-1-thur-class.vercel.app/"  className='span'>Preview</Link></span>
             <div className='tag-btn'>
              <button className='tag' >React</button>
              <button className='tag'>Node.js</button>
              <button className='tag'>HTML</button>
        </div>
      </div>
      <div className="card">
          
          <Image  src="/images/portfolio.jpg" alt="website" width={300} height={200} className='img2'/>
          <h3 className='card-h'>Portfolio</h3>
          <p className='card-p'> Built a personal portfolio website using Next.js, showcasing various 
            frontend development skills and integrating
             an interactive hero section with floating text elements.</p>
             <span><Link href="https://milestone-2-portfolio-2-three.vercel.app/"  className='span'>Preview</Link></span>
             <div className='tag-btn'>
              <button className='tag' >React</button>
              <button className='tag'>Node.js</button>
              <button className='tag'>HTML</button>
        </div>
      </div>
      <div className="card">
          
          <Image  src="/images/sc.jpg" alt="website" width={300} height={200} className='img2'/>
          <h3 className='card-h'>Dry Nuts web</h3>
          <p className='card-p'> Built a personal portfolio website using Next.js, showcasing various 
            frontend development skills and integrating
             an interactive hero section with floating text elements.</p>
             <span><Link href="https://third-assignment-q-2.vercel.app/"  className='span'>Preview</Link></span>
             <div className='tag-btn'>
              <button className='tag' >React</button>
              <button className='tag'>Node.js</button>
              <button className='tag'>HTML</button>
        </div>
      </div>
      <div className="card">
          
          <Image  src="/images/Sc-shot-5.jpg" alt="website" width={300} height={200} className='img2'/>
          <h3 className='card-h'>Figma Respo-web</h3>
          <p className='card-p'> Built a personal portfolio website using Next.js, showcasing various 
            frontend development skills and integrating
             an interactive hero section with floating text elements.</p>
             <span><Link href=""  className='span'>Preview</Link></span>
             <div className='tag-btn'>
              <button className='tag' >React</button>
              <button className='tag'>Node.js</button>
              <button className='tag'>HTML</button>
        </div>
      </div>
      <div className="card">
          
          <Image  src="/images/Sc-shot-3.jpg" alt="website" width={300} height={200} className='img2'/>
          <h3 className='card-h'>Food-web</h3>
          <p className='card-p'> Built a personal portfolio website using Next.js, showcasing various 
            frontend development skills and integrating
             an interactive hero section with floating text elements.</p>
             <span ><Link href="https://q-2-assignment-2.vercel.app/" className='span'>Preview</Link></span>
             <div className='tag-btn'>
              <button className='tag' >React</button>
              <button className='tag'>Node.js</button>
              <button className='tag'>HTML</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects
