import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  
  // Number of dots to create
  const dotsCount = 5;
  
  useEffect(() => {
    // Initialize dots array
    dotsRef.current = Array(dotsCount).fill(null).map(() => document.createElement('div'));
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);
  
  // Create an array of dots with different sizes and delays
  const dots = Array.from({ length: dotsCount }, (_, i) => {
    const size = 20 - i * 3; // Decreasing size for trailing dots
    const delay = i * 0.05; // Increasing delay for trailing effect
    
    return (
      <motion.div
        key={i}
        className="pointer-events-none fixed top-0 left-0 rounded-full z-50"
        style={{
          width: size,
          height: size,
          backgroundColor: i === 0 ? 'rgba(59, 130, 246, 0.7)' : 'rgba(96, 165, 250, 0.4)',
          boxShadow: i === 0 ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none',
        }}
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          delay: delay,
        }}
      />
    );
  });
  
  return <>{dots}</>;
};

export default MouseFollower;
