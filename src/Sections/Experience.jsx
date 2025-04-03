import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
    }, []);
    return (
        <div className='w-full h-auto text-white px-20 py-28 max-lg:px-10'>
            <h1 data-aos='zoom-in-down' className='text-5xl font-bold text-customGreen mb-20 w-1/2 m-auto max-xl:w-4/5 max-lg:w-full max-sm:text-4xl'>Experience & Education</h1>
            <div className='flex flex-row items-start justify-between gap-2 max-sm:gap-5'>
                <div className='flex flex-col gap-10'>
                    {exp.map((e) => {
                        return (
                            <div key={e.id}>
                                <p data-aos='fade-right' className='text-gray-500 text-xl max-md:text-lg max-sm:text-sm'>{e.name}</p>
                                <p data-aos='fade-right' className='text-3xl font-semibold max-md:text-2xl max-xl:text-xl max-sm:text-lg'>{e.prof}</p>
                                <p data-aos='fade-right' className='text-gray-500 text-xl max-md:text-lg max-sm:text-sm'>{e.date}</p>
                            </div>
                        );
                    })}
                </div>
                <div className='flex flex-col gap-10'>
                    {edu.map((e) => {
                        return (
                            <div key={e.id}>
                                <p data-aos='fade-left' className='text-gray-500 text-xl max-md:text-lg max-sm:text-sm'>{e.prof}</p>
                                <p data-aos='fade-left' className='text-3xl font-semibold max-md:text-2xl max-xl:text-xl max-sm:text-lg'>{e.place}</p>
                                <p data-aos='fade-left' className='text-gray-500 text-xl max-md:text-lg max-sm:text-sm'>{e.date}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
const exp = [
    {
        id: 1,
        name: 'Intern Intelligence',
        prof: 'Frontend Developer Intern',
        date: 'Mar 2025 - Apr 2025'
    },
    {
        id: 2,
        name: 'Ministry of Agriculture of Azerbaijan',
        prof: 'Helpdesk Intern',
        date: 'Feb 2025 - Jul 2025'
    },
    {
        id: 3,
        name: 'Aladdin Holding',
        prof: 'Frontend Developer Intern',
        date: 'Sep 2024 - Jan 2025'
    },
]
const edu = [
    {
        id: 1,
        prof: 'Bachelor degree - Computer Engineering',
        place: 'Baku Engineering University',
        date: 'Sep 2021 - Jun 2025'
    },
    {
        id: 2,
        prof: 'Full-stack Programming with C#',
        place: 'Code Academy',
        date: 'Aug 2024 - Feb 2025'
    }
]