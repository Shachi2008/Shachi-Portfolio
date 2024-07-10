import React from "react";
import ttt from '../assets/ttt.png';
import rps from '../assets/rps.png';
import pp from '../assets/pp.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title === 'Rock paper scissors' && (
                <a href="#">
                    <img className="w-full rounded-t-lg h-auto object-cover" src={rps} alt="" />
                </a>
            )}
            {title === 'Tic Tac Toe' && (
                <a href="#">
                    <img className="w-full rounded-t-lg h-auto object-cover" src={ttt} alt="" />
                </a>
            )}
            {title === 'Peachy Panda' && (
                <a href="#">
                    <img className="w-full rounded-t-lg h-auto object-cover" src={pp} alt="" />
                </a>
            )}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'Rock paper scissors',
        description: 'Created a digital version of the beloved game Rock, Paper, Scissors using HTML , CSS, JavaScript .Implemented interactive gameplay mechanics such as selecting choices and displaying results. ',
        image: rps,
        git: 'https://github.com/Shachi2008/Rock-Paper-Scissors',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Tic Tac Toe',
        description: 'Developed a robust Tic Tac Toe game with complete game logic. Including win conditions and restart option. Additionally, a "Reset" button allows players to start a new game.',
        image: ttt,
        git: 'https://github.com/Shachi2008/Tic-Tac-Toe',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Peachy Panda',
        description: 'An E-commerce Website for the skins of various electronic devices. Product Catalog: A comprehensive catalog showcasing a variety of skins for different electronic devices.',
        image: pp,
        git: 'https://github.com/Shachi2008/PeachyPanda',
        technologies: ['HTML', 'CSS', 'JavaScript']
    }
];

export default Projects;
