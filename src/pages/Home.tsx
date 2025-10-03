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
            x: "-100vw",
            y: 0,
            transition: { duration: 1.4 },
        },
        animate: { opacity: 1, x: 0, transition: { duration: 1.4 } },
        exit: { opacity: 0, x: "100vw", y: 0, transition: { duration: 1.4 } },
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
