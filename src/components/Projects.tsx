import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const categories = ['All', 'ML', 'DL', 'NLP', 'Gen AI'];
  
  const projects: Project[] = [
    {
      title: "NvidiaNim",
      description: "A Streamlit application utilizing NVIDIA AI endpoints to analyze U.S. Census documents and respond to queries.",
      image: "https://logos-world.net/wp-content/uploads/2020/11/Nvidia-Logo-2006-present.jpg",
      technologies: ["Python", "Streamlit", "NVIDIA AI", "FastAPI"],
      category: "Gen AI",
      github: "https://github.com/hardik7863/NvidiaNim"
    },    
    {
      title: "BlogGenerationAWS",
      description: "An end-to-end Generative AI application that generates blog posts using AWS Bedrock, AWS Lambda, and Amazon S3.",
      image: "https://tse4.mm.bing.net/th?id=OIP.6dYTtAjr65H5Yq5UyXVeywHaEE&pid=Api&P=0&h=180",
      technologies: ["Python", "AWS Lambda", "Amazon Bedrock", "Amazon S3", "API Gateway"],
      category: "Gen AI",
      github: "https://github.com/hardik7863/BlogGenerationAWS"
    },
    {
      title: "AWS Bedrock Project",
      description: "A generative AI project leveraging AWS Bedrock to build and deploy machine learning models efficiently",
      image: "https://external-preview.redd.it/amazon-titan-image-generator-multimodal-embeddings-and-text-v0-qhLSGsy8HWZa58LdwaxBVhDtUds3yWPZa5mr-BlQtp0.jpg?auto=webp&s=1dff6ff083dc0ab6106053003d8e7f1e6617d911",
      technologies: ["Python", "AWS Bedrock", "LangChain", "Streamlit"],
      category: "Gen AI",
      github: "https://github.com/hardik7863/AWSBedrock"
    },    
    {
      title: "End-to-End ML Project",
      description: "A comprehensive machine learning project demonstrating the entire workflow from data preprocessing to model deployment.",
      image: "https://tse2.mm.bing.net/th?id=OIP.66xwQPBd_elRigZi-Uk5-wHaDU&pid=Api&P=0&h=180",
      technologies: ["Jupyter Notebook", "Python", "Machine Learning", "Model Deployment"],
      category: "ML",
      github: "https://github.com/hardik7863/MLProject"
    }, 
    {
      title: "NLP Text Summarizer",
      description: "A text summarization tool leveraging NLP techniques and deep learning models to generate concise summaries.",
      image: "https://tse2.mm.bing.net/th?id=OIP.BWVilnEOOIgwq1qydj36TAHaEK&pid=Api",
      technologies: ["Python", "NLTK", "Transformers", "Flask"],
      category: "NLP",
      github: "https://github.com/hardik7863/NLPTextSummarizer"
    },    
    {
      title: "Next Word Prediction",
      description: "A deep learning model that predicts the next word in a sentence using LSTM networks.",
      image: "https://i.ytimg.com/vi/Zn22qt7j2dM/maxresdefault.jpg",
      technologies: ["Python", "LSTM", "Keras", "Flask"],
      category: "DL",
      github: "https://github.com/hardik7863/NextWordPrediction"
    },
    {
      title: "Movie Sentiment Analysis",
      description: "A deep learning model that analyzes and classifies movie reviews based on sentiment using LSTM networks.",
      image: "https://tse2.mm.bing.net/th?id=OIP.GRNwG60zEGAGWh6DbE-uagHaE6&pid=Api&P=0&h=180",
      technologies: ["Python", "LSTM", "Keras", "Flask", "NLTK"],
      category: "DL",
      github: "https://github.com/hardik7863/MovieSentimentAnaylsis"
    },
    {
      title: "Customer Churn Predictor",
      description: "A deep learning model that predicts customer churn based on historical data using artificial neural networks (ANN).",
      image: "https://tse3.mm.bing.net/th?id=OIP.43V7Qmu04tyxko1021BSSQHaEK&pid=Api&P=0&h=180",
      technologies: ["Python", "ANN", "TensorFlow", "Flask"],
      category: "DL",
      github: "https://github.com/hardik7863/Ann-Customer-Churn-Predictor"
    }           
  ];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset to first page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of projects section
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in machine learning, deep learning, and generative AI.
          </p>
        </motion.div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="project-card-inner h-full bg-white dark:bg-dark-200 rounded-xl overflow-hidden card-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === number
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'
                }`}
              >
                {number}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;