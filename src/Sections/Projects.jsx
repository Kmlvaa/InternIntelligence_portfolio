import React from 'react'
import { FaLink } from "react-icons/fa";

export default function Projects() {
    return (
        <div className='bg-gray-900 w-full h-auto text-white px-32 py-28'>
            <h1 className='text-5xl font-semibold w-60 m-auto mb-20 relative'>
                Projects
                <span className="absolute left-5 bottom-0 w-full h-[4px] bg-[#eb3257] rounded-full"></span>
            </h1>
            <div className='flex flex-col gap-10 w-full'>
                {projects?.slice().reverse().map((project) => {
                    return (
                        <div id={project.id} className="flex odd:justify-start group even:justify-end even:text-end">
                            <div className='flex flex-row items-center w-3/4 gap-5'>
                                <div className='rounded-xl border border-white w-1/3 h-48 hidden group-odd:block'>
                                    <img src={project.image} alt={project.name} className='cover w-full h-full rounded-xl' />
                                </div>
                                <div className='w-2/3 relative'>
                                    <h1 className='text-white font-semibold text-3xl'>{project.name}</h1>
                                    <p className='text-gray-600'>{project.date}</p>
                                    <p className='text-gray-600 mt-5'>{project.description}</p>
                                    <a href={project.github} target='_blank' rel="noopener noreferrer"
                                        className='text-white cursor-pointer hover:text-gray-600 w-6 group-even:absolute right-0 mt-1'><FaLink size={16} /></a>
                                </div>
                                <div className='rounded-xl border border-white w-1/3 h-48 hidden group-even:block'>
                                    <img src={project.image} alt={project.name} className='cover w-full h-full rounded-xl' />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

const projects = [
    {
        id: 1,
        name: "Pinterest Clone",
        description: "Pinterest Clone is a full-stack web application built using React for the frontend and C# Web API for the backend. This project replicates Pinterest’s core functionalities, allowing users to create, save, and organize image collections. The backend handles user authentication, image uploads, and board management, while the frontend ensures a smooth and responsive UI. ",
        date: "April 2024",
        image: 'assets/Pinterest.png',
        github: 'https://github.com/Kmlvaa/Pinterest_React.git'
    },
    {
        id: 2,
        name: "X academy",
        description: "Empowering Future Professionals - An educational platform built with React, Next.js, and Tailwind CSS, offering expert-led courses in UX/UI Design, C# Programming, Frontend Development, SMM, and more. Designed for a seamless and responsive learning experience with a modern UI.",
        date: "Oct 2024",
        image: 'assets/XAcademy.png',
        github: 'https://github.com/Kmlvaa/XAcademy.git'
    },
    {
        id: 3,
        name: "Aladdin Agency",
        description: "A dynamic agency website built with React, Next.js, Tailwind CSS and Ant Design, offering top-tier services in branding, web development, UX/UI design, SMM, and digital marketing. Designed for a sleek user experience with a modern, responsive interface.",
        date: "Oct 2024 - Dec 2024",
        image: 'assets/Agency.png',
        github: 'https://github.com/Kmlvaa/Agency.git'
    },
    {
        id: 4,
        name: "Admin Panel",
        description: "A feature-rich React, Next.js, and Tailwind CSS admin panel built as a personal project. While not in active use, it includes well-implemented functionalities such as dashboard analytics, data tables, and interactive UI components, showcasing strong front-end development skills.",
        date: "Dec 2024 - Jan 2025",
        image: 'assets/adminpanel.png',
        github: 'https://github.com/Kmlvaa/AdminPanel.git'
    },
    {
        id: 5,
        name: "Portfolio",
        description: "First portfolio attempt",
        date: "Mart 2025",
        image: 'assets/portfolio.png',
        github: 'https://github.com/Kmlvaa/InternIntelligence_portfolio.git'
    }
]
