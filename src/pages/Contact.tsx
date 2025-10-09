import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

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

    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 1.1,
            y: -50,
            filter: "blur(10px)",
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
                scale: {
                    type: "spring",
                    damping: 15,
                    stiffness: 120,
                },
            },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 50,
            filter: "blur(10px)",
            transition: {
                duration: 0.3,
                ease: "easeIn" as const,
            },
        },
    };

    return (
        <motion.section
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.about}
        >
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
                    TypeScript, and more. I love building scalable applications
                    and contributing to open-source projects.
                </motion.p>
            </motion.div>
        </motion.section>
    );
};

export default About;
