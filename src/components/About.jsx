import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'> 👋 Hi, I'm Shachi Sachan, a versatile Software Developer 👨‍💻 with a passion for crafting high-quality software solutions. I bring a rich skill set in various programming languages and technologies, including:
              <br></br>
              <br></br>
              <ul>
                <li>🖥️ C & C++: Strong foundation in system-level programming and performance optimization.</li>
                <li>🌐 HTML & CSS: Expertise in building responsive, user-friendly web interfaces.</li>
                <li>💻 JavaScript & React: Proficient in creating dynamic, interactive web applications.</li>
                <li>🗄️ SQL: Skilled in designing and managing robust database solutions.</li>
                <li>📚 Data Structures & Algorithms (DSA): Adept at solving complex problems efficiently.</li>
              </ul>
              <br></br>
              💡 My journey as a developer is driven by a relentless curiosity and a commitment to continuous learning. I thrive on challenges and enjoy turning complex requirements into elegant, scalable solutions. 🚀
            </p>

            <p>🚀 I'm always excited to take on new projects and collaborate with teams
               to deliver impactful software solutions. Let's build something amazing together!</p>
              <br></br> 
            <ButtonLink
              url='https://drive.google.com/file/d/17wEMep2WIkQcgHlx-idFTG27M-O1LMf5/view?usp=drivesdk'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;