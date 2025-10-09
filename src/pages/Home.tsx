import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const skills = [
        "JavaScript",
        "React",
        "TypeScript",
        "HTML/CSS",
        "SQL",
        "Git",
        "PHP",
        "Laravel",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const heroVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.5 + i * 0.08,
                ease: "easeOut",
            },
        }),
    };

    const scrollVariants = {
        animate: {
            y: [0, 8, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className={styles.container}>
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className={styles.heroSection}
            >
                {/* Name */}
                <motion.h1 variants={heroVariants} className={styles.title}>
                    Kevins Markuss Kanalis
                </motion.h1>

                {/* Position */}
                <motion.div
                    variants={itemVariants}
                    className={styles.positionContainer}
                >
                    <p className={styles.position}>Full-Stack Developer</p>
                    <div className={styles.divider} />
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className={styles.description}
                >
                    Crafting dynamic web apps with modern technologies.
                    Specialized in building applications from frontend to
                    backend.
                </motion.p>

                {/* Skills */}
                <motion.div
                    variants={containerVariants}
                    className={styles.skillsContainer}
                >
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill}
                            custom={i}
                            variants={skillVariants}
                            className={styles.skillBadge}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className={styles.buttonContainer}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.buttonPrimary}
                        onClick={() => navigate("/projects")}
                    >
                        View My Work
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.buttonSecondary}
                        onClick={() => navigate("/contact")}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>
            </motion.section>

            {/* Scroll Indicator */}
            <motion.div
                variants={scrollVariants}
                animate="animate"
                className={styles.scrollIndicator}
            >
                <ChevronDown size={24} />
            </motion.div>
        </div>
    );
};

export default Home;
