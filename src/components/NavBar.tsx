import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <NavLink
                        to="/"
                        className="nav-link"
                        onClick={() => setIsOpen(false)}
                    >
                        Portfolio
                    </NavLink>
                </div>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <motion.li
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        className="nav-item"
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </NavLink>
                    </motion.li>
                    <motion.li
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        className="nav-item"
                    >
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </NavLink>
                    </motion.li>
                    <motion.li
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        className="nav-item"
                    >
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </NavLink>
                    </motion.li>
                    <motion.li
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        className="nav-item"
                    >
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </motion.li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {isOpen && (
                <div
                    className="mobile-overlay"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default NavBar;
