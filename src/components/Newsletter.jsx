import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 bg-[#1E40AF] text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & resources to grow professionally?
          </h1>
          <p className='text-[#E0F2FE]'>Join our newsletter to stay up to date on soft skill games, mentorship events, and polls.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black border border-[#FACC15]'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#FACC15] text-[#1E40AF] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 hover:bg-[#FFE066] transition'>
              Notify Me
            </button>
          </div>
          <p className='text-sm mt-2 text-[#E0F2FE]'>
            We care about your data. Read our{' '}
            <span className='text-[#FACC15] underline cursor-pointer'>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;