import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Home from "./Sections/Home";
import { useState } from "react";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import { useInView } from "react-intersection-observer";

export default function Pages() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0.3, // When 30% of the element is in the viewport
    });

    return (
        <div className="relative scroll-smooth">
            {/* Navbar */}
            <div className="fixed top-4 z-[10000] flex flex-row items-center justify-around w-full">
                <div className="text-white text-xl z-[10000]">ᛕꪖꪑ꠸ꪶꪮꪜꪖ</div>
                <div className="p-[1px] rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 via-red-500 via-orange-500 to-purple-600">
                    <nav className="rounded-full bg-gray-800 text-white px-6 py-3 flex gap-6 justify-center items-center">
                        <Link to="home" smooth={true} duration={800} className="cursor-pointer hover:text-[#eb3257]">
                            Home
                        </Link>
                        <Link to="about" smooth={true} duration={800} className="cursor-pointer hover:text-[#eb3257]">
                            About
                        </Link>
                        <Link to="experience" smooth={true} duration={800} className="cursor-pointer hover:text-[#eb3257]">
                            Experience
                        </Link>
                        <Link to="contact" smooth={true} duration={800} className="cursor-pointer hover:text-[#eb3257]">
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className={`z-[10000] w-6 h-4 flex flex-col justify-between cursor-pointer ${isOpen ? '' : 'group'}`} onClick={handleClick}>
                    <span className={`block h-0.5 bg-white rounded transition-all duration-300 group-hover:rotate-12 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block h-0.5 bg-white rounded transition-all duration-300 group-hover:-rotate-12 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>

            </div>

            {/* Sections */}
            <motion.section
                id="home"
                className="h-screen"
                initial={{ opacity: 0, y: 100 }} // Start position
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Final position
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                ref={ref}
            >
                <Home />
            </motion.section>

            <motion.section
                id="about"
                className="h-screen"
                ref={ref}
                initial={{ opacity: 0, y: 100 }} // Start position
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Final position
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <About />
            </motion.section>

            <motion.section
                id="experience"
                className="h-screen"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Experience />
            </motion.section>

            <motion.section
                id="contact"
                className="h-screen"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Contact />
            </motion.section>
            <div className="w-full h-px bg-gray-600 px-20"></div>
            <div className="bg-gray-900 text-gray-600 py-10 w-full flex flex-col items-center justify-center">
                <p className="">© 2025 All rights reserved. Designed using React.js & Tailwind CSS.</p>
                <p>By Samira Kamilova</p>
            </div>
        </div >
    );
}

