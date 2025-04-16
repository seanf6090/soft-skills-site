import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white bg-[#1E40AF]'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#FACC15] font-bold p-2'>
          BUILD CONFIDENCE WITH INTERACTIVE SCENARIOS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Learn by Playing.
        </h1>
        <div className='text-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Grow soft skills in
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold'
            strings={['Teamwork', 'Empathy', 'Critical Thinking']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-[#E0F2FE]'>Practice real-world communication and decision-making through fun, fast-paced challenges.</p>
        <Link to='/explore'>
          <button className='bg-white text-[#1E40AF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#E0E7FF] transition'>
            Let's Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
