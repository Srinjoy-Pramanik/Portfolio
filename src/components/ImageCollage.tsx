import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Create an array containing both JPG and PNG file paths
// We'll create fallback options for each image number
const generateImagePaths = () => {
  const paths = [];
  for (let i = 1; i <= 18; i++) {
    // We'll try both JPG and PNG formats - the browser will use whichever one exists
    paths.push({
      id: i,
      jpg: `/images/${i}.jpg`,
      png: `/images/${i}.png`
    });
  }
  return paths;
};

// Array of image options with both formats
const imageOptions = generateImagePaths();

// Define different sizes for the images
const sizes = ['small', 'medium', 'large'];

interface CollageImage {
  id: number;
  src: string;
  fallbackSrc: string;
  size: string;
}

const ImageCollage: React.FC = () => {
  const [images, setImages] = useState<CollageImage[]>([]);
  
  useEffect(() => {
    // Create the image array with randomized order and sizes
    const shuffledImages = [...imageOptions].sort(() => Math.random() - 0.5);
    
    const collageImages = shuffledImages.map((img, index) => ({
      id: index,
      src: img.jpg, // Try JPG first
      fallbackSrc: img.png, // Fallback to PNG
      size: sizes[Math.floor(Math.random() * sizes.length)]
    }));
    
    setImages(collageImages);
  }, []);

  // Image error handler to try the fallback format
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const imgElement = e.currentTarget;
    const fallbackSrc = imgElement.getAttribute('data-fallback');
    if (fallbackSrc && imgElement.src !== fallbackSrc) {
      imgElement.src = fallbackSrc;
    }
  };

  // Determine grid span classes based on image size
  const getSizeClasses = (size: string): string => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1';
      case 'medium':
        return 'col-span-1 md:col-span-2 row-span-1';
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-2';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <div className="overflow-hidden py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 auto-rows-min">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              className={`${getSizeClasses(image.size)} overflow-hidden rounded-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.05 }
              }}
              viewport={{ once: true }}
            >
              <div className="aspect-square w-full h-full relative">
                <motion.img 
                  src={image.src}
                  data-fallback={image.fallbackSrc}
                  alt={`Portfolio image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;