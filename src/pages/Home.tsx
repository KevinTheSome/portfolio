import React from "react";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

const Home: React.FC = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 0.8,
            rotateY: -15,
            x: -100,
        },
        animate: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut" as const,
                scale: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                },
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            rotateY: 15,
            x: 100,
            transition: {
                duration: 0.4,
                ease: "easeInOut" as const,
            },
        },
    };

    return (
        <motion.section
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            id="home"
            className={styles.hero}
        >
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
        </motion.section>
    );
};

export default Home;
