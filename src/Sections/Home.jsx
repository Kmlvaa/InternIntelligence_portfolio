import React from 'react'
import { Link } from 'react-scroll'

export default function Home() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-8'>
                <div className='flex flex-col items-center '>
                    <h1 className='text-5xl font-bold text-white max-sm:text-2xl max-[400px]:text-lg'>Hello, I'm</h1>
                    <p className='text-7xl font-bold text-white max-sm:text-4xl'>Samira Kamilova</p>
                    <p className='text-2xl text-gray-500 max-sm:text-sm'>A student who is interested in <span className='text-customGreen'>web development</span></p>
                </div>
                <button
                    className='bg-gradient-to-r from-customGreen to-customPurple rounded-full px-4 py-2 font-semibold text-white flex flex-row gap-2 transition-all duration-200 hover:brightness-75 border-0 '>
                    <Link to="">Resume</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
