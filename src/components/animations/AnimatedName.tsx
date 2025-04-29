import { useState } from 'react';
import { motion } from 'framer-motion';

// Define the segments and their atomic info
const nameSegments = [
  { text: 'A', atomic: 'H', number: '1', name: 'Hydrogen' },
  { text: 'hmad' },
  { text: ' Azzam' },
  { text: ' F', atomic: 'F', number: '9', name: 'Fluorine' },
  { text: 'u', atomic: 'U', number: '92', name: 'Uranium' },
  { text: 'adie', atomic: 'I', number: '53', name: 'Iodine' }, // Combining 'adie' for balance, using 'I' for Iodine
];

const AnimatedName = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    initial: {},
    hover: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  // Remove y-shift from segment variant on hover to prevent main text movement
  const segmentVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 1 }, // Keep opacity or adjust as needed, but no movement
  };

  const atomicInfoVariants = {
    initial: { opacity: 0, scale: 0.8, y: 5 }, // Start slightly below/above and faded
    hover: { opacity: 1, scale: 1, y: 0 }, // Fade in and scale up
  };

  return (
    <motion.h1
      // Reduced font size slightly to help prevent wrapping, adjust if needed
      className="text-4xl md:text-6xl font-bold text-white mb-6 inline-block cursor-default whitespace-nowrap" 
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      variants={containerVariants}
      initial="initial"
      animate={isHovered ? 'hover' : 'initial'}
    >
      {nameSegments.map((segment, index) => (
        <motion.span 
          key={index} 
          className="inline-block relative px-0.5" // Reduced padding slightly
          variants={segmentVariants}
        >
          {/* Atomic Number/Mass Above */}
          {segment.atomic && (
            <motion.span 
              className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs font-mono text-accent-foreground"
              variants={atomicInfoVariants}
              style={{ whiteSpace: 'nowrap' }} // Prevent wrapping of atomic info
            >
              {segment.number}
            </motion.span>
          )}
          
          {/* Main Letter/Text */}
          {segment.text}
          
          {/* Element Name Below */}
          {segment.atomic && (
            <motion.span 
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] font-sans text-muted-foreground"
              variants={atomicInfoVariants}
              style={{ whiteSpace: 'nowrap' }} // Prevent wrapping of element name
            >
              {segment.name}
            </motion.span>
          )}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedName;

