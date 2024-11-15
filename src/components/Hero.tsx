import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='img-div'>
        <Image src="/images/port-image.jpg" alt='person' width={200} height={200} className='img' />
      </div>
      <div className='info'>
        <h1 className='name'>Hello I am <br /> Shabnam Wahid </h1> <br />
        <h3 className='float-heading'>Front-End Developer</h3> <br />
        <div className='btn2'>
          <Link href="/about" className='bt'>About Me</Link>
          <Link href="/contact" className='bt'>Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

