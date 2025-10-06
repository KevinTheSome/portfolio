import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import { ProjectCard } from "../components/ProjectCard";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
}

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "Task Manager",
            description: "A web app built with React and Node.js for task management.",
            technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
            image: "https://images.pexels.com/photos/1207875/pexels-photo-1207875.jpeg?_gl=1*1gy20tz*_ga*MzkzOTgyNDA1LjE3NTk3NzQ2Nzk.*_ga_8JE65Q40S6*czE3NTk3NzQ2NzgkbzEkZzAkdDE3NTk3NzQ2NzgkajYwJGwwJGgw",
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            description: "An e-commerce platform using TypeScript and Framer Motion for animations.",
            technologies: ["TypeScript", "React", "Framer Motion", "TailwindCSS"],
            image: "https://images.pexels.com/photos/1207875/pexels-photo-1207875.jpeg?_gl=1*1gy20tz*_ga*MzkzOTgyNDA1LjE3NTk3NzQ2Nzk.*_ga_8JE65Q40S6*czE3NTk3NzQ2NzgkbzEkZzAkdDE3NTk3NzQ2NzgkajYwJGwwJGgw",
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A portfolio site showcasing my work with modern web technologies.",
            technologies: ["TypeScript", "React", "CSS3", "Vite"],
            image: "https://images.pexels.com/photos/1207875/pexels-photo-1207875.jpeg?_gl=1*1gy20tz*_ga*MzkzOTgyNDA1LjE3NTk3NzQ2Nzk.*_ga_8JE65Q40S6*czE3NTk3NzQ2NzgkbzEkZzAkdDE3NTk3NzQ2NzgkajYwJGwwJGgw",
        },
    ];

    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 0.95,
            filter: "blur(5px)",
        },
        animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
                scale: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                },
            },
        },
        exit: {
            opacity: 0,
            scale: 1.05,
            filter: "blur(5px)",
            transition: {
                duration: 0.3,
                ease: "easeIn" as const,
            },
        },
    };

    return (
        <motion.section
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.projects}
        >
            <div className={styles.container}>
                
                {/* Geometric Canvas */}
                <div className={styles.geometricCanvas}>
                    <svg
                        viewBox="0 0 1000 1000"
                        className={styles.geometricSvg}
                        preserveAspectRatio="none"
                    >
                        <defs>
                            {/* Image patterns for each project */}
                            <pattern
                                id="imagePattern1"
                                patternUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <image
                                    href={projects[0].image}
                                    x="0"
                                    y="0"
                                    width="1000"
                                    height="1000"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </pattern>
                            <pattern
                                id="imagePattern2"
                                patternUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <image
                                    href={projects[1].image}
                                    x="0"
                                    y="0"
                                    width="1000"
                                    height="1000"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </pattern>
                            <pattern
                                id="imagePattern3"
                                patternUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <image
                                    href={projects[2].image}
                                    x="0"
                                    y="0"
                                    width="1000"
                                    height="1000"
                                    preserveAspectRatio="xMidYMid slice"
                                />
                            </pattern>
                        </defs>

                        {/* Project 1 - Center Polygon with image */}
                        <motion.polygon
                            points="250,1000 350,0 650,0 750,1000"
                            className={styles.projectPolygon}
                            style={{ fill: "url(#imagePattern1)" }}
                            onClick={() => setSelectedProject(projects[0])}
                            whileHover={{ opacity: 0.8 }}
                            transition={{ duration: 0.3 }}
                        />
                        <polygon
                            points="250,1000 350,0 650,0 750,1000"
                            fill="url(#stripePattern1)"
                            pointerEvents="none"
                        />

                        {/* Project 2 - Right Section with image */}
                        <motion.polygon
                            points="650,0 1000,0 1000,1000 750,1000"
                            className={styles.projectPolygon}
                            style={{ fill: "url(#imagePattern2)" }}
                            onClick={() => setSelectedProject(projects[1])}
                            whileHover={{ opacity: 0.8 }}
                            transition={{ duration: 0.3 }}
                        />
                        <polygon
                            points="650,0 1000,0 1000,1000 750,1000"
                            fill="url(#stripePattern2)"
                            pointerEvents="none"
                        />

                        {/* Project 3 - Left Section with image */}
                        <motion.polygon
                            points="0,0 350,0 250,1000 0,1000"
                            className={styles.projectPolygon}
                            style={{ fill: "url(#imagePattern3)" }}
                            onClick={() => setSelectedProject(projects[2])}
                            whileHover={{ opacity: 0.8 }}
                            transition={{ duration: 0.3 }}
                        />
                        <polygon
                            points="0,0 350,0 250,1000 0,1000"
                            fill="url(#stripePattern3)"
                            pointerEvents="none"
                        />
                    </svg>
                </div>

                {/* Project Details Card */}
                <AnimatePresence mode="wait">
                    {selectedProject && (
                        <ProjectCard
                            key={selectedProject.id}
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default Projects;
