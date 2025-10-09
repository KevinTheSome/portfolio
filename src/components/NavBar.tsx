import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    };

    const topLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 9 },
    };

    const middleLineVariants = {
        closed: { opacity: 1, scaleX: 1 },
        open: { opacity: 0, scaleX: 0 },
    };

    const bottomLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -9 },
    };

    const buttonVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <nav className={`${styles.navbar} ${styles["navbar--dark"]}`}>
            <div className={styles["nav-container"]}>
                <div className={styles["links-wrapper"]}>
                    <ul
                        className={`${styles["nav-links"]} ${isOpen ? styles["nav-links--active"] : ""}`}
                    >
                        <motion.li
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className={styles["nav-item"]}
                        >
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${styles["nav-link"]} ${isActive ? styles["nav-link--active"] : ""}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </NavLink>
                        </motion.li>
                        <motion.li
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className={styles["nav-item"]}
                        >
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `${styles["nav-link"]} ${isActive ? styles["nav-link--active"] : ""}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </NavLink>
                        </motion.li>
                        <motion.li
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className={styles["nav-item"]}
                        >
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `${styles["nav-link"]} ${isActive ? styles["nav-link--active"] : ""}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </NavLink>
                        </motion.li>

                        {/* GitHub button on mobile */}
                        <motion.li
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className={`${styles["nav-item"]} ${styles["mobile-github"]}`}
                        >
                            <a
                                href="https://github.com/kevinthesome"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles["github-link"]}
                                onClick={() => setIsOpen(false)}
                            >
                                GitHub
                            </a>
                        </motion.li>
                    </ul>
                </div>

                {/* GitHub button on desktop */}
                <motion.a
                    href="https://github.com/kevinthesome"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles["github-button"]} ${styles["desktop-github"]}`}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                </motion.a>

                <div className={styles.hamburger} onClick={toggleMenu}>
                    <motion.span
                        variants={topLineVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        variants={middleLineVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        transition={{ duration: 0.3 }}
                        style={{ originX: "50%" }}
                    />
                    <motion.span
                        variants={bottomLineVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>
            {isOpen && (
                <div
                    className={styles["mobile-overlay"]}
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default NavBar;
