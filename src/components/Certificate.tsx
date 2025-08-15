// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award, ExternalLink } from 'lucide-react';

// interface Certificate {
//   title: string;
//   issuer: string;
//   date: string;
//   credentialLink?: string;
//   image?: string;
// }

// interface CertificateProps {
//   certificates: Certificate[];
// }

// const Certificate: React.FC<CertificateProps> = ({ certificates }) => {
//   return (
//     <section className="py-16 relative">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center gap-2 mb-12">
//           <Award className="w-8 h-8 text-blue-500" />
//           <h2 className="text-3xl font-bold text-white">Certifications</h2>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {certificates.map((cert, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="backdrop-blur-md bg-white/5 rounded-lg overflow-hidden shadow-xl 
//                          hover:shadow-2xl transition-all duration-300 border border-white/10
//                          hover:border-blue-500/50 hover:bg-white/10"
//             >
//               {cert.image && (
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={cert.image} 
//                     alt={cert.title}
//                     className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               )}
              
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
//                   {cert.title}
//                 </h3>
//                 <p className="text-gray-300 mb-2">{cert.issuer}</p>
//                 <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
                
//                 {cert.credentialLink && (
//                   <a
//                     href={cert.credentialLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 
//                              transition-colors group"
//                   >
//                     <span>View Credential</span>
//                     <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 
//                                           transition-transform duration-300" />
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificate;