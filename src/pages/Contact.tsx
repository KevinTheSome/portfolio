import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

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
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
        },
        animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
            transition: {
                duration: 0.3,
                ease: "easeIn",
            },
        },
    };

    const inputVariants = {
        focus: {
            scale: 1.02,
            transition: { duration: 0.2 },
        },
    };

    return (
        <motion.section
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.container}
        >
            <div className={styles.heroSection}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="contact-hero"
                >
                    <motion.h1 variants={itemVariants} className={styles.title}>
                        Get In Touch
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className={styles.description}
                    >
                        Have a project in mind or want to collaborate? I'd love
                        to hear from you. Drop me a message and let's build
                        something amazing together.
                    </motion.p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={styles.contactContent}
                    >
                        <motion.form
                            variants={itemVariants}
                            action="https://getform.io/f/bvrmljmb"
                            method="POST"
                            className={styles.form}
                        >
                            <motion.div
                                variants={itemVariants}
                                className={styles.formGroup}
                            >
                                <motion.input
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className={styles.input}
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className={styles.formGroup}
                            >
                                <motion.input
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className={styles.input}
                                />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className={styles.formGroup}
                            >
                                <motion.textarea
                                    whileFocus="focus"
                                    variants={inputVariants}
                                    name="message"
                                    placeholder="Your Message"
                                    rows={5}
                                    required
                                    className={styles.textarea}
                                />
                            </motion.div>

                            <input
                                type="hidden"
                                className={styles.gotcha}
                                name="_gotcha"
                            />

                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className={styles.buttonPrimary}
                            >
                                {submitted ? "✓ Message Sent!" : "Send Message"}
                            </motion.button>
                        </motion.form>

                        <motion.div
                            variants={itemVariants}
                            className={styles.contactInfo}
                        >
                            <motion.div
                                whileHover={{ x: 5 }}
                                className={styles.infoItem}
                            >
                                <span className={styles.infoLabel}>Email</span>
                                <a href="mailto:kevinskanalis@gmail.com">
                                    kevinskanalis@gmail.com
                                </a>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className={styles.infoItem}
                            >
                                <span className={styles.infoLabel}>GitHub</span>
                                <a
                                    href="https://github.com/KevinTheSome"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    github.com/KevinTheSome
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;
