import Home from "./Sections/Home";
import { useEffect, useRef, useState } from "react";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import { TfiAngleDown } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";

export default function Pages() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    const home = useRef(null);
    const about = useRef(null);
    const experience = useRef(null);
    const contact = useRef(null);
    const projects = useRef(null);

    const scrollToSection = (elementRef) => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                top: elementRef.current.offsetTop + 120
            });
            console.log(elementRef.current.offsetTop + 120, window.scrollY);
        }
    };


    return (
        <div className="relative scroll-smooth">
            {/* Navbar */}
            <div className="fixed top-4 z-[10000] flex flex-row items-center justify-around w-full">
                <div className="text-white text-xl z-[10000]">ᛕꪖꪑ꠸ꪶꪮꪜꪖ</div>
                <div className="p-[1px] rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 via-red-500 via-orange-500 to-purple-600">
                    <ul className="rounded-full bg-gray-800 text-white px-6 py-3 flex gap-6 justify-center items-center list-none">
                        <li onClick={() => { scrollToSection(home) }} className="cursor-pointer hover:text-[#eb3257]">
                            Home
                        </li>
                        <li onClick={() => { scrollToSection(about) }} className="cursor-pointer hover:text-[#eb3257]">
                            About
                        </li>
                        <li onClick={() => { scrollToSection(experience) }} className="cursor-pointer hover:text-[#eb3257]">
                            Experience
                        </li>
                        <li onClick={() => { scrollToSection(projects) }} className="cursor-pointer hover:text-[#eb3257]">
                            Projects
                        </li>
                        <li onClick={() => { scrollToSection(contact) }} className="cursor-pointer hover:text-[#eb3257]">
                            Contact
                        </li>
                    </ul>
                </div>
                <div className="relative" ref={menuRef}>
                    <div className={`z-[10000] w-6 h-4 flex flex-col justify-between cursor-pointer ${isOpen ? '' : 'group'}`} onClick={handleClick}>
                        <span className={`block h-0.5 bg-white rounded transition-all duration-300 group-hover:rotate-12 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 bg-white rounded transition-all duration-300 group-hover:-rotate-12 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                    {isOpen &&
                        <div className={`absolute top-6 w-auto h-auto border border-white bg-gray-900 rounded-md flex flex-col gap-2 p-5 ${
                            isOpen ? 'left-0' : 'left-[-100%] transition-all duration-500 ease-in-out'
                          }`}
                          >
                            <div className="flex flex-row gap-2 items-center">
                                <p className="text-white font-semibold">Github</p>
                                <a href="https://github.com/Kmlvaa" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className="bg-white hover:bg-purple-200 rounded-full p-2 cursor-pointer" /></a>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <p className="text-white font-semibold">Linkedin</p>
                                <a href="https://www.linkedin.com/in/samira-kamilova-184158281/" target="_blank" rel="noopener noreferrer"><ImLinkedin size={40} className="bg-white hover:bg-purple-200 rounded-full p-2 cursor-pointer" /></a>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <p className="text-white font-semibold">Mail</p>
                                <a href=""><BiLogoGmail size={40} className="bg-white hover:bg-purple-200 rounded-full p-2 cursor-pointer" /></a>
                            </div>
                        </div>}
                </div>
            </div>

            {/* Sections */}
            <div id="home" ref={home}>
                <Home />
            </div>
            <div className='bg-gray-900 flex items-center justify-center relative'>
                <TfiAngleDown size={50} color='white' className="absolute bottom-10 cursor-pointer" onClick={() => { scrollToSection(about) }} />
            </div>
            <div id="about" ref={about}>
                <About />
            </div>

            <div id="experience" ref={experience}>
                <Experience />
            </div>

            <div id="contact" ref={contact}>
                <Contact />
            </div>
            <div className="w-full h-px bg-gray-600 px-20"></div>
            <div className="bg-gray-900 text-gray-600 py-4 w-full flex flex-col items-center justify-center">
                <p className="">© 2025 All rights reserved. Designed using React.js & Tailwind CSS.</p>
                <p>By Samira Kamilova</p>
            </div>
        </div >
    );
}

