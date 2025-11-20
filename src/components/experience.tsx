'use client'

import Resume from "./resume";
const resumeUrl = '/pdf/StanUgoo.pdf';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] via-[#130b1c]/80 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-[var(--text-primary)] mb-6 tracking-tight transition-colors duration-300">
            Professional Journey
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6f1cd7] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#6f1cd7]/40 via-[#6f1cd7]/20 to-transparent" />

          <div className="space-y-12">
            {[
              {
                title: "Backend Developer",
                company: "Bluebow research and consultancy",
                location: "London Area, UK",
                period: "2025 - Present",
                description: [
                  "Lead backend developer for  Bluebow research and consultancy.",
                  "Designed and implemented the core backend for a multi-role agricultural platform..",
                  "Architected secure, scalable APIs for farmers, mentors, coaches, and admins, covering authentication, messaging, training, scheduling, and forum systems. ",
                  "Set technical standards, define database schemas, enforce security practices, and guide implementation patterns across the backend.",
                  "Ensured data integrity, optimize performance, and maintain code quality while coordinating with frontend teams and stakeholders to deliver a robust, production-ready platform."
                ]
              },
              {
                title: "Backend Developer",
                company: "Xerv",
                location: "India",
                period: "2024 - 2025",
                description: [
                  "Led the development and implementation of innovative web solutions.",
                  "Managed the backend aspects of projects.",
                  "implemented comprehensive authentication and authorization systems, including JWT-based authentication and role-based access control.",
                  "Developed RESTful APIs for CRUD operations, data validation, and error handling.",
                ]
              },
              {
                title: "Fullstack Developer",
                company: "Briles Software solutions",
                location: "Lagos, Nigeria",
                period: "2024 - 2025",
                description: [
                  "Maintained the backend infrastructure for a web-based application.",
                  "Database management and optimization.",
                  "code optimization and refactoring."
                  
                ]
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-6 md:pl-24"
              >
                <motion.div
                  className="absolute left-0 top-3 transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#130b1c] border-2 border-[#6f1cd7] shadow-lg shadow-[#6f1cd7]/20" />
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(111, 28, 215, 0.08)'
                  }}
                  className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6f1cd7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-clashbold text-[var(--text-primary)] mb-3 transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <p className="text-[#6f1cd7] font-medium tracking-wide">{experience.company}</p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[var(--text-tertiary)]">•</span>
                        <span className="text-[var(--text-secondary)] text-sm transition-colors duration-300">{experience.location}</span>
                        <span className="text-[var(--text-tertiary)]">•</span>
                        <span className="text-[var(--text-secondary)] text-sm tracking-wider transition-colors duration-300">{experience.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-[var(--text-secondary)] leading-relaxed font-light flex items-start transition-colors duration-300">
                          <span className="text-[#6f1cd7] mr-3 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24"
          >
            <Resume
              pdfUrl={resumeUrl}
              fileName="StanUgoo.pdf"
              buttonText="Download Resume"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
