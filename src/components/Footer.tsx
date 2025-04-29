import React from 'react';
import { Film } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Film className="h-8 w-8 text-amber-500" />
            <span className="ml-2 text-xl font-bold text-white">SPS Cut</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">© {currentYear} SrinjoyPramanikSignatureCut. All Rights Reserved.</p>
            <p className="text-sm">Crafted with passion for visual storytelling</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;