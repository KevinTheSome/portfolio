import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="home" className="hero">
            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="hero-content"
            >
                <motion.h1 variants={itemVariants}>
                    Welcome to My Portfolio
                </motion.h1>
                <motion.p variants={itemVariants}>
                    Hi, I'm a passionate developer creating amazing web
                    experiences.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Home;
