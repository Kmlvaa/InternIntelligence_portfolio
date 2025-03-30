import React from 'react'

export default function About() {
    return (
        <div className='bg-gray-900 w-full h-screen text-white px-32'>
            <h1 className='text-5xl font-bold w-40 m-auto mb-20 relative'>
                About
                <span class="absolute left-10 bottom-0 w-full h-[4px] bg-red-500 rounded-full"></span>
            </h1>
            <div className='flex flex-row items-center justify-around max-lg:flex-col max-lg:text-center'>
                <div className="w-1/2 space-y-6">
                    <p>Hello! I'm a passionate web developer with a keen interest in building beautiful, functional, and user-friendly websites. My journey into web development started with a curiosity about how things work behind the scenes on the internet, and it quickly turned into a deep love for creating seamless digital experiences.</p>
                    <p>With a solid foundation in HTML, CSS, and JavaScript, I’ve expanded my expertise to frameworks like React, Tailwind CSS, and Node.js, allowing me to develop dynamic and responsive web applications. I'm always eager to learn new technologies and tools that help me stay on the cutting edge of web development.</p>
                    <p>I strive to write clean, maintainable code while keeping the user experience at the forefront of my development process. Whether it's building a simple landing page or a complex interactive web app, my goal is to create websites that not only function flawlessly but also look great and provide an intuitive experience for users.</p>
                </div>
                <div className="w-1/2 h-full flex flex-row items-center justify-center gap-10">
                    <div className='flex flex-col gap-10'>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src="https://benscott.dev/imgs/html.6aa56206be02cf6404844871df1d2da6.png" width={50} height={100} />
                        </div>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src='https://benscott.dev/imgs/react.cb15bfce2a9004ce61c5f79f805b067b.png' width={50} height={100} />
                        </div>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src='https://benscott.dev/imgs/nextjs.ff373e2ef4f7fdf152425a8c5c30816c.png' width={50} height={100} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src='https://benscott.dev/imgs/js.f8a28e905c78dadb79434b7ceebd52a0.png' width={50} height={100} />
                        </div>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src='https://benscott.dev/imgs/css.0ce0f0a2b4c4aa34b64c40e5278af3d1.png' width={50} height={100} />
                        </div>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src='https://benscott.dev/imgs/sass.3706567f8b353c748df3850c1aabca46.png' width={50} height={100} />
                        </div>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src='https://benscott.dev/imgs/git.3092b5991e8accb9e7c36817c048a8d5.png' width={50} height={100} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQUhj9h4kUDmJEgKawEkjcGKStqNi1pxaxIXHivetkHV4YhhoFV0JT0_pdmwK37hIS0gen210BFSumTXDLoNEQua7kT8deUkkka_9XXbY" width={50} height={100} />
                        </div>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s' width={50} height={100} />
                        </div>
                        <div className='border px-8 py-4 border-blue-500 rounded-xl'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJvdRbTTnOGtjmdp8d4NuG6szCqe5xRSlTdTBAO_ZW55-9blejgQR_czaNNE4jneBmxE&usqp=CAU' width={50} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
