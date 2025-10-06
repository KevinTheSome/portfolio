import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
}

interface ProjectCardProps {
    project: Project;
    onClose: () => void;
}

export function ProjectCard({ project, onClose }: ProjectCardProps) {
    return (
        <motion.div
            className={styles.projectCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
        >
            <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
                <div className={styles.content}>
                    <div className={styles.leftSection}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>Project Description</h4>
                            <p className={styles.description}>{project.description}</p>
                        </div>
                        <div className={styles.section}>
                            <h4 className={styles.sectionTitle}>Project Technologies</h4>
                            <div className={styles.technologies}>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.imageContainer}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImage}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
