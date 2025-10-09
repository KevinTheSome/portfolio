import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import { ProjectCard } from "../components/ProjectCard";
import TurniketsImage from "../assets/Turnikets.png";
import WhatGameImage from "../assets/WhatGame.png";
import GroundBnBImage from "../assets/GroundBnB.png";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    technologiesIcons: string[];
    githubLink: string;
    image: string;
    video: string;
}

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );

    const projects: Project[] = [
        {
            id: 1,
            title: "Turnikets",
            description:
                "A web app for managing entry and exit of people in dorms.",
            technologies: ["TypeScript", "React", "Laravel", "PHP", "SQLite"],
            technologiesIcons: ["TypeScript", "React Native", "Laravel"],
            image: TurniketsImage,
            githubLink: "https://github.com/raivokinne/turnikets",
            video: "https://youtu.be/V8jPUXVNPN8",
        },
        {
            id: 2,
            title: "WhatGame?",
            description: "Mobile app for finding a games to play with friends.",
            technologies: ["TypeScript", "React Native", "Laravel", "SQLite"],
            technologiesIcons: ["TypeScript", "React Native", "Laravel"],
            image: WhatGameImage,
            githubLink: "https://github.com/KevinTheSome/WhatGame",
            video: "https://youtu.be/bDG5rLqGdhY",
        },
        {
            id: 3,
            title: "GroundBnB",
            description: "A AirBnB clone. made ",
            technologies: ["JavaScript", "React", "Laravel", "TailwindCSS"],
            technologiesIcons: ["JavaScript", "React Native", "Laravel"],
            image: GroundBnBImage,
            githubLink: "https://github.com/KevinTheSome/GroundBnB",
            video: "https://youtu.be/iY3EtIUohqY",
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
                    <motion.div
                        className={styles.projectPolygon}
                        style={{
                            backgroundImage: `url(${TurniketsImage})`,
                            clipPath:
                                "polygon(25% 100%, 35% 0%, 65% 0%, 75% 100%)",
                        }}
                        onClick={() => setSelectedProject(projects[0])}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className={styles.projectPolygon}
                        style={{
                            backgroundImage: `url(${WhatGameImage})`,
                            clipPath:
                                "polygon(65% 0%, 100% 0%, 100% 100%, 75% 100%)",
                        }}
                        onClick={() => setSelectedProject(projects[1])}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className={styles.projectPolygon}
                        style={{
                            backgroundImage: `url(${GroundBnBImage})`,
                            clipPath:
                                "polygon(0% 0%, 35% 0%, 25% 100%, 0% 100%)",
                        }}
                        onClick={() => setSelectedProject(projects[2])}
                        transition={{ duration: 0.3 }}
                    />
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
