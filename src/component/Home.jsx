import React from 'react';
import HeroImage from "../assets/hero-1.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center fon-bold text-white'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have 3 years of experience in developing websites and software. Currently, I love to work on new
            web application using technologies lik React, Tailwind CSS, Next JS, Laravel and GraphQL.
          </p>

          <div>
            <Link to='portfolio' duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan to-blue cursor-pointer'>
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                  <FaLongArrowAltRight size={20} className='ml-1'></FaLongArrowAltRight>
                </span>
            </Link>
          </div>
          </div>

          <div>
            <img
              src={HeroImage}
              alt='my profile'
              className='rounded-2xl mx-auto w-w/3 md:w-full'>

            </img>
          </div>
      </div>
    </div>
  )
}

export default Home;