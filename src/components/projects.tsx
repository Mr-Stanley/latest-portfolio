"use client"
import { Arrow } from "./svgs";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/data";

const Projects = () => {
    return (
        <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent opacity-40 transition-colors duration-300" />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-5"
                >
                    <h2 className="text-2xl md:text-3xl font-clashbold text-[var(--text-primary)] mb-6 tracking-tight transition-colors duration-300">
                        Projects
                        <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🚀</span>
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
                    <p className="text-[var(--text-secondary)] text-base md:text-l transition-colors duration-300">
                        Showcasing my latest works and experiments in tech
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group relative bg-[var(--bg-secondary)]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[var(--border-color)] transition-colors duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 flex flex-col h-full">
                                <h3 className="text-[var(--text-primary)] text-2xl font-clashbold mb-3 transition-colors duration-300">
                                    {project.name}
                                </h3>

                                <p className="text-purple-400 text-sm font-medium mb-4">
                                    {project.lang}
                                </p>

                                <p className="text-[var(--text-secondary)] text-sm flex-grow transition-colors duration-300">
                                    {project.desc}
                                </p>

                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center group/link"
                                >
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-3 text-[var(--text-primary)] hover:text-purple-300 transition-colors"
                                    >
                                        <span className="text-sm font-medium">View Project</span>
                                        <Arrow className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                    </motion.div>
                                </Link>

                                <div className="h-[2px] w-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 absolute bottom-0 left-0" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
