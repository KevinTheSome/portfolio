import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="about">
            <div className="App">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="section-content"
                >
                    <motion.h2 variants={itemVariants}>About Me</motion.h2>
                    <motion.p variants={itemVariants} className="bio">
                        I'm a full-stack developer with experience in React,
                        TypeScript, and more. I love building scalable
                        applications and contributing to open-source projects.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
