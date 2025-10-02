import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <motion.div>
                    <ul className="footer-menu">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
