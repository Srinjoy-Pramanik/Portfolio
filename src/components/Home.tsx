import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  
  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black perspective-1000"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
        <motion.img 
          src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Cinematic background"
          className="w-full h-full object-cover object-center filter brightness-50"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ rotateX: -90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.span 
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Srinjoy Pramanik
          </motion.span>
          <motion.span 
            className="text-amber-500 text-3xl md:text-5xl block mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            Storyteller Through Lens
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          BE Computer Engineering student with a passion for filmmaking, directing, and visual storytelling.
          Creating narratives that connect, inspire, and resonate.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          <motion.button 
            onClick={scrollToProjects} 
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-md transition-all transform-gpu hover:shadow-[0_0_30px_rgba(255,193,7,0.3)]"
            whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="px-8 py-3 bg-transparent border-2 border-white hover:border-amber-500 text-white hover:text-amber-500 font-bold rounded-md transition-all transform-gpu"
            whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.button 
          onClick={scrollToProjects} 
          className="text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;