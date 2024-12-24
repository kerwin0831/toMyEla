import React from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

// Card component
const Card = ({ children }) => {
    const motionValue = useMotionValue(0);
    const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
    const opacityValue = useTransform(
        motionValue,
        [-200, -200, 0, 150, 200],
        [0, 1, 1, 1, 0]
    );
    const animControls = useAnimation();

    // Inline styles based on the provided CSS
    const isMobile = window.innerWidth <= 768;
    const cardStyle = {
        background: 'linear-gradient(135deg,rgb(255, 255, 255),rgb(249, 249, 249))',
        width: isMobile ? "300px" : "380px", // Adjust width for mobile
        height: isMobile ? "300px" : "380px",
        padding: "15px",
        borderRadius: '10px',
        boxShadow: '0 10px 10px rgba(86, 86, 86, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '42px',
        color: 'black',
        FontFace: "",
        textTransform: "uppercase",
        textAlign: 'center',
        cursor: 'grab',
        position: 'absolute', // Ensures stacking in `.stack`
    };

    return (
        <motion.div
            style={{
                ...cardStyle,
                x: motionValue,
                rotate: rotateValue,
                opacity: opacityValue,
            }}
            drag="x"
            dragConstraints={{ left: -300, right: 300 }}
            animate={animControls}
            onDragEnd={(_event, info) => {
                if (Math.abs(info.point.x) <= 150) {
                    animControls.start({ x: 0 });
                } else {
                    animControls.start({ x: info.point.x < 0 ? -300 : 300 });
                }
            }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
