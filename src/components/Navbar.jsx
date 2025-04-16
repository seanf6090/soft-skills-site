import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-[#1E40AF]'>
      <h1 className='w-full text-3xl font-bold text-[#FACC15]'>InternConnect</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 text-[#FACC15] hover:text-white'><Link to='/'>Home</Link></li>
        <li className='p-4 text-[#FACC15] hover:text-white'><Link to='/company'>Company</Link></li>
        <li className='p-4 text-[#FACC15] hover:text-white'><Link to='/resources'>Resources</Link></li>
        <li className='p-4 text-[#FACC15] hover:text-white'><Link to='/about'>About</Link></li>
        <li className='p-4 text-[#FACC15] hover:text-white'><Link to='/contact'>Contact</Link></li>
        <li className='p-4 text-[#FACC15] hover:text-white'><Link to='/message'>Message</Link></li>
        <li className='p-4 text-[#FACC15] hover:text-white'><Link to='/connections'>My Connections</Link></li>
        <li className='p-4 text-[#FACC15] hover:text-white'><Link to='/softskills-game'>Game</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-[#1E40AF] ease-in-out duration-500 text-white' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#FACC15] m-4'>InternConnect</h1>
        <li className='p-4 border-b border-gray-300 text-[#FACC15] hover:text-white'><Link to='/'>Home</Link></li>
        <li className='p-4 border-b border-gray-300 text-[#FACC15] hover:text-white'><Link to='/company'>Company</Link></li>
        <li className='p-4 border-b border-gray-300 text-[#FACC15] hover:text-white'><Link to='/resources'>Resources</Link></li>
        <li className='p-4 border-b border-gray-300 text-[#FACC15] hover:text-white'><Link to='/about'>About</Link></li>
        <li className='p-4 border-b border-gray-300 text-[#FACC15] hover:text-white'><Link to='/contact'>Contact</Link></li>
        <li className='p-4 border-b border-gray-300 text-[#FACC15] hover:text-white'><Link to='/message'>Message</Link></li>
        <li className='p-4 border-b border-gray-300 text-[#FACC15] hover:text-white'><Link to='/connections'>My Connections</Link></li>
        <li className='p-4 text-[#FACC15] hover:text-white'><Link to='/softskills-game'>Game</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;