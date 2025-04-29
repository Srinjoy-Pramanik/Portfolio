import React from 'react';
import { Camera, Film, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src="/images/dp.jpg" 
                  alt="Film Student Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 border-4 border-amber-500 rounded-lg -z-10"></div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <div className="w-12 h-1 bg-amber-500 mb-6"></div>
            
            <p className="text-gray-300 mb-4 leading-relaxed text-justify">
              This is Srinjoy Pramanik, a third-year BE Computer Engineering student who found my true passion behind the camera. While technology is fascinating, storytelling through film has become my creative outlet and future aspiration.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed text-justify">
              My journey started with simple smartphone videos, which evolved into a deep love for the art of visual storytelling. I balance my technical education with my creative pursuits, finding unique ways to merge these worlds through innovative filmmaking approaches.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-start">
                <Film className="w-5 h-5 text-amber-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-bold text-white">Directing</h3>
                  <p className="text-gray-400 text-sm">3+ short films</p>
                </div>
              </div>
              <div className="flex items-start">
                <Camera className="w-5 h-5 text-amber-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-bold text-white">Photography</h3>
                  <p className="text-gray-400 text-sm">20+ projects</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-5 h-5 text-amber-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-bold text-white">Film Fest</h3>
                  <p className="text-gray-400 text-sm">1 award</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="w-5 h-5 text-amber-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-bold text-white">Script Writing</h3>
                  <p className="text-gray-400 text-sm">5+ projects</p>
                </div>
              </div>
            </div>
            
            {/* <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-md transition-all transform hover:scale-105">
              Download Resume
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;