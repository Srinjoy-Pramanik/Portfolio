import React from 'react';
import { skills } from '../data/skills';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return Icon ? <Icon className="w-10 h-10 mb-4 text-amber-500" /> : null;
  };

  return (
    <section id="skills" className="py-24 bg-black perspective-1000">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Creative Skills</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A blend of technical expertise and artistic vision that brings stories to life through the lens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { delay: index * 0.1 }
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              viewport={{ once: true }}
              className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg text-center transform-gpu transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.2)] relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
              <div className="relative z-10">
                <motion.div 
                  className="flex justify-center"
                  whileHover={{ rotateY: 180, transition: { duration: 0.5 } }}
                >
                  {renderIcon(skill.icon)}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;