import React, { useEffect, useState } from 'react'
import { FaAnglesUp } from "react-icons/fa6";

export const ScrollToTop = () => {

    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log("scroll event triggered");

            if (window.scrollY > 200) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
            {showScrollBtn && <div className='rounded-full bg-customGreen border-0 p-3 fixed bottom-8 left-8 max-sm:bottom-3 max-sm:left-3 cursor-pointer hover:scale-110 transi duration-300'>
                <FaAnglesUp size={30} color='white' onClick={scrollTop} />
            </div>}
        </>
    )
}
