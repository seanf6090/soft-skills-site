import React from 'react';
import Laptop from '../assets/laptop.jpg';
import { Link } from 'react-router-dom';

const Analytics = () => {
  return (
    <div className='w-full bg-[#F9FAFB] py-16 px-4 text-[#1E40AF]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#6366F1] font-bold'>ENGAGEMENT INSIGHTS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Understand Soft Skill Development</h1>
          <p className='text-[#475569]'>
            Track how students and alumni engage with collaborative games, polls, and peer learning. Use these insights to foster stronger communication and growth mindsets.
          </p>
          <Link to='/message'>
            <button className='bg-[#1E40AF] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#1E3A8A] transition'>
              View Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
