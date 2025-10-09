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

    return (
        <nav className={`${styles.navbar} ${styles["navbar--dark"]}`}>
            <div className={styles["nav-container"]}>
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
                </ul>

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
