import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-[#1E40AF] text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#FACC15]'>InternConnect</h1>
          <p className='py-4 text-[#E0F2FE]'>
            Building bridges between students, alumni, and companies through fun, skill-based interactivity. InternConnect makes professional growth feel human.
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>

        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-[#FACC15]'>Platform</h6>
            <ul>
              <li className='py-2 text-sm'>Games</li>
              <li className='py-2 text-sm'>Polls</li>
              <li className='py-2 text-sm'>Calendar</li>
              <li className='py-2 text-sm'>Connect</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#FACC15]'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Help Center</li>
              <li className='py-2 text-sm'>Contact</li>
              <li className='py-2 text-sm'>Feedback</li>
              <li className='py-2 text-sm'>Accessibility</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#FACC15]'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Team</li>
              <li className='py-2 text-sm'>Careers</li>
              <li className='py-2 text-sm'>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;