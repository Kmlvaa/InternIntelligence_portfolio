import React from 'react'

export default function Contact() {
    return (
        <div className='bg-gray-900 w-full h-auto px-32 flex flex-row justify-between py-28'>
            <div className='flex flex-col gap-5 items-start w-1/2'>
                {/* <h1 className='text-5xl font-bold text-[#eb3257]'>Get in Touch</h1> */}
                <h1 className='text-5xl font-semibold relative text-white'>
                    Get in Touch
                    <span className="absolute left-5 bottom-0 w-full h-[4px] bg-[#eb3257] rounded-full"></span>
                </h1>
                <p className='text-gray-500 text-lg'>Feel free to reach out! Whether you have a question or just want to drop a message, I’ll do my best to get back to you.</p>

                <div className='flex flex-row gap-5 items-center'>
                    <div className='w-16 h-16 border border-[#eb3257] text-[#eb3257] rounded-md flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p className='text-[#eb3257] text-2xl font-semibold'>Location</p>
                        <p className='text-gray-600'>Baku, Azerbaijan</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 items-center'>
                    <div className='w-16 h-16 border border-[#3279eb] text-[#3279eb] rounded-md flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div>
                        <p className='text-[#3279eb] text-2xl font-semibold'>Email</p>
                        <p className='text-gray-600'>kmlvasmra@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-row gap-5 items-center'>
                    <div className='w-16 h-16 border border-[#e5eb32] text-[#e5eb32] rounded-md flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div>
                        <p className='text-[#e5eb32] text-2xl font-semibold'>Phone</p>
                        <p className='text-gray-600'>+994 70 780 00 24</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 border border-white bg-gay-800 h-3/4 rounded-md'>
                <form className='p-4 leading-10 h-full'>
                    <label className='text-white'>Name</label><br />
                    <input type='text' name='name' placeholder='Enter your name' className='rounded-md px-3 py-1 w-full' />
                    <label className='text-white'>Email Adress</label><br />
                    <input type='text' name='email' placeholder='Enter your email' className='rounded-md px-3 py-1 w-full' />
                    <label className='text-white'>Your Message</label><br />
                    <textarea placeholder='Write here...' className='rounded-md px-3 py-1 w-full h-28' />

                    <div className='flex items-end w-full'>
                        <button className='border border-[#eb3257] text-[#eb3257] py-1 px-3 rounded-md flex flex-row items-center gap-2 bottom-0 hover:bg-[#eb3257] hover:text-white font-semibold'>
                            Send
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
