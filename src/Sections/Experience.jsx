import React from 'react'

export default function Experience() {
    return (
        <div className='bg-gray-900 w-full h-screen text-white px-32'>
            <h1 className='text-5xl font-bold w-1/2 m-auto mb-20 relative'>
                Experience & Education
                <span class="absolute left-5 bottom-0 w-full h-[4px] bg-red-500 rounded-full"></span>
            </h1>
            <div className='flex flex-row items-start justify-between '>
                <div className='flex flex-col gap-10'>
                    <div className=''>
                        <p className='text-gray-500 text-xl'>Intern Intelligence</p>
                        <p className='text-3xl font-semibold'>Frontend Developer Intern</p>
                        <p className='text-gray-500 text-xl'>Mar 2025 - Apr 2025</p>
                    </div>
                    <div className=''>
                        <p className='text-gray-500 text-xl'>Ministry of Agriculture of Azerbaijan</p>
                        <p className='text-3xl font-semibold'>Helpdesk Intern</p>
                        <p className='text-gray-500 text-xl'>Feb 2025 - Jul 2025</p>
                    </div>
                    <div className=''>
                        <p className='text-gray-500 text-xl'>Aladdin Holding</p>
                        <p className='text-3xl font-semibold'>Frontend Developer Intern</p>
                        <p className='text-gray-500 text-xl'>Sep 2024 - Jan 2025</p>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className=''>
                        <p className='text-gray-500 text-xl'>Bachelor degree - Computer Engineering</p>
                        <p className='text-3xl font-semibold'>Baku Engineering University</p>
                        <p className='text-gray-500 text-xl'>Sep 2021 - Jun 2025</p>
                    </div>
                    <div className=''>
                        <p className='text-gray-500 text-xl'>Full-stack Programming with C#</p>
                        <p className='text-3xl font-semibold'>Code Academy</p>
                        <p className='text-gray-500 text-xl'>Aug 2024 - Feb 2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
