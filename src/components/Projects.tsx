import React from 'react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';
import ImageCollage from './ImageCollage';

const Projects: React.FC = () => {
  // We'll only use the first two projects
  const selectedProjects = projects.slice(0, 2);

  return (
    <section id="projects" className="py-0 bg-gray-900 perspective-1000">
      {/* Image Collage Section */}
      <ImageCollage />
      
      {/* Featured Work Section */}
      <div className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my projects spanning directing, cinematography, and editing. Each piece tells a unique story through visual language.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selectedProjects.map((project) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg transform-gpu transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.2)]"
              >
                <div className="aspect-video overflow-hidden bg-gray-800">
                  <iframe
                    src={getYoutubeEmbedUrl(project.videoUrl)}
                    title={project.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="p-6 bg-gray-800 text-white">
                  <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2 inline-block">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to convert regular YouTube URLs to embed URLs
const getYoutubeEmbedUrl = (url: string | undefined): string => {
  if (!url) return '';
  
  // Handle YouTube URLs
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}?autoplay=0&rel=0`;
  }
  
  // Return original URL if not a YouTube URL
  return url;
};

export default Projects;