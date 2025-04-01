import Home from "./Sections/Home";
import { useEffect, useRef, useState } from "react";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import Projects from "./Sections/Projects";
import { TfiAngleDown } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";

export default function Pages() {

    const [Active, setActive] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    const menuRef = useRef(null);
    const [visibleSections, setVisibleSections] = useState({});

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

    const scrollToSection = (elementRef, id) => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            setActive(id);
        }
    };

    const links = [
        { id: 'home', ref: home, label: 'Home' },
        { id: 'about', ref: about, label: 'About' },
        { id: 'experience', ref: experience, label: 'Experience' },
        { id: 'projects', ref: projects, label: 'Projects' },
        { id: 'contact', ref: contact, label: 'Contact' },
    ]

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.5,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                    setVisibleSections((prev) => ({
                        ...prev,
                        [entry.target.id]: true,
                      }));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        links.forEach(({ ref }) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative scroll-smooth bg-black">
            {/* Navbar */}
            <div className="fixed top-4 z-[10000] flex flex-row items-center justify-around max-sm:justify-between w-full px-10">
                <div className="text-white text-xl z-[10000]">ᛕꪖꪑ꠸ꪶꪮꪜꪖ</div>
                <div className="p-[1px] rounded-full bg-gradient-to-r from-customGreen via-sky-600 to-customPurple max-sm:hidden">
                    <ul className="rounded-full bg-black text-white px-6 py-3 flex gap-6 justify-center items-center list-none">
                        {links.map(({ id, ref, label }) => {
                            return (
                                <li key={id} onClick={() => { scrollToSection(ref, id) }} className={`cursor-pointer hover:text-violet-300 ${Active == id ? 'text-customGreen' : ''}`}>
                                    {label}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="relative w-16 max-sm:w-auto" ref={menuRef}>
                    <div className={`z-[10000] w-6 h-4 flex flex-col justify-between cursor-pointer ${isOpen ? '' : 'group'}`} onClick={handleClick}>
                        <span className={`block h-0.5 bg-white rounded transition-all duration-300 group-hover:rotate-12 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 bg-white rounded transition-all duration-300 group-hover:-rotate-12 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                    {isOpen &&
                        <div className={`absolute top-6 w-auto h-auto border border-white bg-black rounded-md flex flex-col gap-2 p-5 ${isOpen ? 'left-0 max-lg:-left-28' : 'left-[-100%] transition-all duration-500 ease-in-out'
                            }`}
                        >
                            <div className="flex flex-row gap-2 items-center">
                                <p className="text-white font-semibold">Github</p>
                                <a href="https://github.com/Kmlvaa" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className="bg-white hover:bg-violet-200 rounded-full p-2 cursor-pointer" /></a>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <p className="text-white font-semibold">Linkedin</p>
                                <a href="https://www.linkedin.com/in/samira-kamilova-184158281/" target="_blank" rel="noopener noreferrer"><ImLinkedin size={40} className="bg-white hover:bg-sky-200 rounded-full p-2 cursor-pointer" /></a>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <p className="text-white font-semibold">Mail</p>
                                <a href=""><BiLogoGmail size={40} className="bg-white hover:bg-green-200 rounded-full p-2 cursor-pointer" /></a>
                            </div>
                        </div>}
                </div>
            </div>

            {/* Sections */}
            <div id="home" ref={home} className={`min-h-screen transition-all ${visibleSections['home'] ? 'animate-fade-in-down' : ''}`}>
                <Home />
            </div>
            <div className='flex items-center justify-center relative'>
                <TfiAngleDown size={50} color='white' className="absolute bottom-10 cursor-pointer animate-bounce" onClick={() => { scrollToSection(about) }} />
            </div>
            <div className="w-full h-[1px] bg-gray-900 "></div>
            <div id="about" ref={about} className={`min-h-screen transition-all ${visibleSections['home'] ? 'animate-fade-in-down' : ''}`}>
                <About />
            </div>
            <div className="w-full h-[1px] bg-gray-900 "></div>
            <div id="experience" ref={experience} className={`transition-all ${visibleSections['home'] ? 'animate-fade-in-down' : ''}`}>
                <Experience />
            </div>
            <div className="w-full h-[1px] bg-gray-900 "></div>
            <div id="projects" ref={projects} className={`min-h-screen transition-all ${visibleSections['home'] ? 'animate-fade-in-down' : ''}`}>
                <Projects />
            </div>
            <div className="w-full h-[1px] bg-gray-900 "></div>
            <div id="contact" ref={contact}>
                <Contact />
            </div>
            <div className="w-full h-px bg-gray-900 px-20"></div>
            <div className="text-white py-4 w-full flex flex-col items-center justify-center text-sm">
                <p>Developed by Samira Kamilova</p>
                <p>Built with <span className="text-customGreen font-semibold">React.js</span> & <span className="text-customGreen font-semibold">Tailwind CSS</span>.</p>
            </div>
        </div >
    );
}

