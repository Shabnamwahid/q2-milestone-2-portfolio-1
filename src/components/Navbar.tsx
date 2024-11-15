import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='header'>
<div className='logo'>
   <h5>SW Arain</h5>
   </div>

<div className='navigate'>
    <ul className=''>
        <li><Link href ="/"className='Link'>Home</Link></li>
        <li><Link href ="/about"className='Link'>About</Link></li>
        <li><Link href ="/projects"className='Link'>Projects</Link></li>
        <li><Link href ="/contact"className='Link'>Contact</Link></li>
        
    </ul>
</div>
<div className=' btn'>
    <button className='bt'>Download CV</button> 
 </div> 
    </header>
  )
}

export default Navbar
