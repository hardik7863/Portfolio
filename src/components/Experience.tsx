import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const experiences = [
    {
      title: "AI/ML Intern",
      company: "AgriTwin.ai (Remote)",
      period: "November 2024 – Present",
      description: "Worked on AI-driven agricultural solutions focusing on computer vision, cloud automation, and geospatial analysis.",
      highlights: [
        "Developed & deployed a CI/CD pipeline on GCP for automated workflows.",
        "Implemented image preprocessing techniques (clipping images) to build a structured dataset.",
        "Performed geospatial analysis: Extracted latitude, longitude, and altitude data from drone images.",
        "Conducted grass density analysis by generating heatmaps using image processing techniques.",
        "Collaborated with a cross-functional team to integrate AI-driven solutions for scalable precision farming."
      ],
      skills: ["CI/CD", "Google Cloud (GCP)", "Computer Vision", "Geospatial Analysis", "Image Processing", "Python", "MLOps"]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-dark-200/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hands-on experience in AI, machine learning, and cloud automation, contributing to real-world projects.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="timeline-item pl-8 pb-12 relative"
            >
              <div className="bg-white dark:bg-dark-200 rounded-lg p-6 card-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-display">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center mt-1">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4">
                  {exp.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
