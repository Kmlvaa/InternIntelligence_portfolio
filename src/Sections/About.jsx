import React from 'react'

export default function About() {
    return (
        <div className='w-full h-auto text-white px-20 py-28 max-lg:px-10'>
            <h1 className='text-5xl font-bold text-customGreen mb-20 w-40 m-auto max-sm:text-4xl max-sm:w-28'>About</h1>
            {/* <h1 className='text-5xl font-semibold w-40 m-auto mb-20 relative'>
                About
                <span className="absolute left-10 bottom-0 w-full h-[4px] bg-mainPinkColor rounded-full"></span>
            </h1> */}
            <div className='flex flex-row items-center gap-20 justify-between max-lg:flex-col max-lg:text-center'>
                <div className="w-3/5 space-y-6 max-lg:w-full max-xl:text-sm">
                    <p>Hello! I'm a passionate web developer with a keen interest in building beautiful, functional, and user-friendly websites. My journey into web development started with a curiosity about how things work behind the scenes on the internet, and it quickly turned into a deep love for creating seamless digital experiences.</p>
                    <p>With a solid foundation in HTML, CSS, and JavaScript, I’ve expanded my expertise to frameworks like React, Tailwind CSS, and Node.js, allowing me to develop dynamic and responsive web applications. I'm always eager to learn new technologies and tools that help me stay on the cutting edge of web development.</p>
                    <p>I strive to write clean, maintainable code while keeping the user experience at the forefront of my development process. Whether it's building a simple landing page or a complex interactive web app, my goal is to create websites that not only function flawlessly but also look great and provide an intuitive experience for users.</p>
                </div>
                <div className="w-2/5 h-full flex flex-row items-center justify-between gap-10 text-end max-lg:w-full max-lg:justify-center max-sm:gap-5">
                    <div className='flex flex-col gap-10 max-sm:gap-5'>
                        {skills[0]?.links.map((l, i) =>
                            <div key={i} className="p-[1px] rounded-xl bg-gradient-to-r from-customGreen via-sky-600 to-customPurple">
                                <div className='px-8 py-4 rounded-xl bg-black w-28 h-20 max-sm:w-24 max-sm:h-16 flex items-center justify-center hover:bg-transparent cursor-pointer hover:scale-110 transition-transform duration-300'>
                                    <img src={l.link} width={50} height={50} alt="Skill Icon" className='cover max-sm:w-8 max-sm:h-8' />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col gap-10 max-sm:gap-5'>
                        {skills[1]?.links.map((l, i) =>
                            <div key={i} className="p-[1px] rounded-xl bg-gradient-to-r from-customGreen via-sky-600 to-customPurple">
                                <div className='px-8 py-4 rounded-xl bg-black w-28 h-20 max-sm:w-24 max-sm:h-16 flex items-center justify-center hover:bg-transparent cursor-pointer hover:scale-110 transition-transform duration-300'>
                                    <img src={l.link} width={50} height={50} alt="Skill Icon" className='max-sm:w-8 max-sm:h-8' />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex flex-col gap-10 max-sm:gap-5'>
                        {skills[2]?.links.map((l, i) =>
                            <div key={i} className="p-[1px] rounded-xl bg-gradient-to-r from-customGreen via-sky-600 to-customPurple">
                                <div className='px-8 py-4 rounded-xl bg-black w-28 h-20 max-sm:w-24 max-sm:h-16 flex items-center justify-center hover:bg-transparent cursor-pointer hover:scale-110 transition-transform duration-300'>
                                    <img src={l.link} width={50} height={50} alt="Skill Icon" className='max-sm:w-8 max-sm:h-8' />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const skills = [
    {
        links: [
            { link: 'https://benscott.dev/imgs/html.6aa56206be02cf6404844871df1d2da6.png' },
            { link: 'https://benscott.dev/imgs/react.cb15bfce2a9004ce61c5f79f805b067b.png' },
            { link: 'https://benscott.dev/imgs/nextjs.ff373e2ef4f7fdf152425a8c5c30816c.png' }
        ]
    },
    {
        links: [
            { link: 'https://benscott.dev/imgs/js.f8a28e905c78dadb79434b7ceebd52a0.png' },
            { link: 'https://benscott.dev/imgs/css.0ce0f0a2b4c4aa34b64c40e5278af3d1.png' },
            { link: 'https://benscott.dev/imgs/sass.3706567f8b353c748df3850c1aabca46.png' },
            { link: 'https://benscott.dev/imgs/git.3092b5991e8accb9e7c36817c048a8d5.png' }
        ]
    },
    {
        links: [
            { link: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSQUhj9h4kUDmJEgKawEkjcGKStqNi1pxaxIXHivetkHV4YhhoFV0JT0_pdmwK37hIS0gen210BFSumTXDLoNEQua7kT8deUkkka_9XXbY' },
            { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s' },
            { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJvdRbTTnOGtjmdp8d4NuG6szCqe5xRSlTdTBAO_ZW55-9blejgQR_czaNNE4jneBmxE&usqp=CAU' }
        ]
    },
]