import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4
        },
        text: {
            width: 80,
            height: 80,
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            backgroundColor: 'pink',
            mixBlendMode: 'difference'
        },
    }

    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            const bubble = {
                id: crypto.randomUUID(),
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 8 + 4,
                offsetX: Math.random() * 20 - 10,
                offsetY: Math.random() * 20 - 10,
                rotation: Math.random() * 60 - 30,
                floatX: Math.random() * 40 - 20,
            };

            setMousePosition({ x: e.clientX, y: e.clientY });

            setBubbles((prev) => {
                const newBubbles = [...prev, bubble];
                return newBubbles.slice(-30);
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    return (
        <div>
            {/* <div className="text-8xl font-bold" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>My Portfolio</div> */}
            <motion.div
                className="bg-white rounded-full left-0 top-0 fixed pointer-events-none"
                variants={variants}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}>
            </motion.div>

            {/* Bubbles */}
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="fixed top-0 left-0 bg-white rounded-full pointer-events-none w-2 h-2 z-[9999]"
                    initial={{
                        x: bubble.x + bubble.offsetX,
                        y: bubble.y + bubble.offsetY,
                        opacity: 0.8,
                        scale: 0.8,
                    }}
                    animate={{
                        x: bubble.x + bubble.offsetX + bubble.floatX,
                        y: bubble.y + bubble.offsetY - 40,
                        opacity: 0,
                        scale: 1.2,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut",
                    }}
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        
                    }}
                />
            ))}
        </div>
    );
};

export default Cursor;
