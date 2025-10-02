import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
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
        <section className="contact">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="section-content"
            >
                <motion.h2 variants={itemVariants}>Contact</motion.h2>
                <motion.form variants={itemVariants} className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default Contact;
