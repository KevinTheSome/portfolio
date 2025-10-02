import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
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
        <section className="projects">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="section-content"
            >
                <motion.h2 variants={itemVariants}>Projects</motion.h2>
                <div className="project-grid">
                    <motion.div
                        className="project-card"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>Project 1</h3>
                        <p>
                            A web app built with React and Node.js for task
                            management.
                        </p>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </motion.div>
                    <motion.div
                        className="project-card"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>Project 2</h3>
                        <p>
                            An e-commerce platform using TypeScript and Framer
                            Motion for animations.
                        </p>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </motion.div>
                    <motion.div
                        className="project-card"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>Project 3</h3>
                        <p>
                            A portfolio site showcasing my work with modern web
                            technologies.
                        </p>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
