import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Home from "./Home";
import { useState } from "react";
import About from "./About";

export default function Pages() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Home />
            </motion.section>

            <motion.section
                id="about"
                className="h-screen"
                initial={{ opacity: 0, y: 50 }}
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
                <h1 className="text-5xl text-center text-white py-24">Experience Section</h1>
            </motion.section>

            <motion.section
                id="contact"
                className="h-screen"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-5xl text-center text-white py-24">Contact Section</h1>
            </motion.section>
        </div >
    );
}

