import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Database, Server, Code, Brain, Cpu, MessageSquare, Sparkles, Settings, Cloud, Activity, Shuffle, Layers } from 'lucide-react';

interface SkillCubeProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  delay: number;
}

const SkillCube: React.FC<SkillCubeProps> = ({ icon, title, skills, delay }) => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cubeRef, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView && cubeRef.current) {
      gsap.fromTo(
        cubeRef.current,
        { 
          rotateY: -30, 
          rotateX: 15,
          y: 50,
          opacity: 0 
        },
        { 
          rotateY: 0, 
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: delay * 0.2
        }
      );
    }
  }, [isInView, delay]);

  return (
    <div 
      ref={cubeRef}
      className="skill-cube bg-white dark:bg-dark-200 rounded-xl p-6 card-shadow h-full opacity-0"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 text-primary-600 dark:text-primary-400">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 flex-grow">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const skillCategories = [
    {
      icon: <Database size={32} />,
      title: "Data Science & Analytics",
      skills: ["Python", "SQL", "Pandas", "NumPy", "Feature Engineering", "EDA", "Data Cleaning", "Visualization (Matplotlib, Seaborn)"]
    },
    {
      icon: <Server size={32} />,
      title: "MLOps & DevOps",
      skills: ["DVC", "MLflow", "Apache Airflow", "Docker", "Kubernetes", "Terraform", "CI/CD (GitHub Actions, Jenkins)"]
    },
    {
      icon: <Brain size={32} />,
      title: "Machine Learning",
      skills: ["Scikit-learn", "XGBoost", "LightGBM", "Hyperparameter Tuning", "Model Evaluation"]
    },
    {
      icon: <Cpu size={32} />,
      title: "Deep Learning & Computer Vision",
      skills: ["PyTorch", "TensorFlow", "CNN", "RNN", "Transformers", "Image Processing"]
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Natural Language Processing",
      skills: ["Text Processing", "Named Entity Recognition", "BERT", "Sentiment Analysis", "LLMs", "LangChain", "AutoGen"]
    },
    {
      icon: <Sparkles size={32} />,
      title: "Generative AI & LLMs",
      skills: ["GPT Models", "RAG", "Fine-Tuning", "Agentic RAG", "CrewAI", "Diffusion Models", "Prompt Engineering"]
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Computing",
      skills: ["AWS (SageMaker, S3, EC2)", "GCP (Vertex AI)", "Azure", "Oracle Cloud"]
    },
    {
      icon: <Activity size={32} />,
      title: "Big Data & Streaming",
      skills: ["Apache Kafka", "Spark Streaming", "Data Pipelines", "ETL"]
    },
    {
      icon: <Shuffle size={32} />,
      title: "Vector Databases & Retrieval",
      skills: ["FAISS", "Pinecone", "ChromaDB", "AstroDB"]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specialized in AI, Machine Learning, MLOps, and cloud-based solutions, with expertise in full-stack development and scalable architectures.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCube
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
