import React from 'react'

export default function Experience() {
    return (
        <div className='w-full h-auto text-white px-20 py-28 max-lg:px-10'>
            <h1 className='text-5xl font-bold text-customGreen mb-20 w-1/2 m-auto max-xl:w-4/5 max-lg:w-full max-sm:text-4xl'>Experience & Education</h1>
            {/* <h1 className='text-5xl font-semibold w-1/2 m-auto mb-20 relative'>
                Experience & Education
                <span className="absolute left-5 bottom-0 w-full h-[4px] bg-mainPinkColor rounded-full"></span>
            </h1> */}
            <div className='flex flex-row items-start justify-between gap-2 max-sm:gap-5'>
                <div className='flex flex-col gap-10'>
                    {exp.map((e) => {
                        return (
                            <div>
                                <p className='text-gray-500 text-xl max-md:text-lg max-sm:text-sm'>{e.name}</p>
                                <p className='text-3xl font-semibold max-md:text-2xl max-xl:text-xl max-sm:text-lg'>{e.prof}</p>
                                <p className='text-gray-500 text-xl max-md:text-lg max-sm:text-sm'>{e.date}</p>
                            </div>
                        );
                    })}
                </div>
                <div className='flex flex-col gap-10'>
                    {edu.map((e) => {
                        return (
                            <div>
                                <p className='text-gray-500 text-xl max-md:text-lg max-sm:text-sm'>{e.prof}</p>
                                <p className='text-3xl font-semibold max-md:text-2xl max-xl:text-xl max-sm:text-lg'>{e.place}</p>
                                <p className='text-gray-500 text-xl max-md:text-lg max-sm:text-sm'>{e.date}</p>
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
        name: 'Intern Intelligence',
        prof: 'Frontend Developer Intern',
        date: 'Mar 2025 - Apr 2025'
    },
    {
        name: 'Ministry of Agriculture of Azerbaijan',
        prof: 'Helpdesk Intern',
        date: 'Feb 2025 - Jul 2025'
    },
    {
        name: 'Aladdin Holding',
        prof: 'Frontend Developer Intern',
        date: 'Sep 2024 - Jan 2025'
    },
]
const edu = [
    {
        prof: 'Bachelor degree - Computer Engineering',
        place: 'Baku Engineering University',
        date: 'Sep 2021 - Jun 2025'
    },
    {
        prof: 'Full-stack Programming with C#',
        place: 'Code Academy',
        date: 'Aug 2024 - Feb 2025'
    }
]