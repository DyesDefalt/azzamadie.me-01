import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Liquid drip animation for the broken flask
  const liquidVariants = {
    initial: { height: 0 },
    animate: { 
      height: 120,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div 
          className="mb-8 relative mx-auto w-64 h-64"
          variants={itemVariants}
        >
          {/* Broken Flask SVG */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Flask body */}
            <path 
              d="M70,50 L60,120 C60,150 140,150 140,120 L130,50" 
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Flask neck */}
            <path 
              d="M70,50 L70,30 L130,30 L130,50" 
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Flask cap */}
            <rect x="65" y="25" width="70" height="5" rx="2" fill="hsl(var(--primary))" />
            
            {/* Broken part (jagged edge) */}
            <path 
              d="M90,80 L85,90 L95,95 L90,105 L100,110 L95,120" 
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1 0"
            />
            
            {/* Liquid inside flask */}
            <motion.path 
              d="M60,120 C60,150 140,150 140,120 L130,90 L70,90 L60,120"
              fill="hsl(var(--accent)/30)"
              variants={liquidVariants}
            />
            
            {/* Dripping liquid */}
            <motion.path 
              d="M95,120 L95,170"
              stroke="hsl(var(--accent)/60)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 1, 0],
                transition: { 
                  pathLength: { delay: 1, duration: 2, ease: "easeOut" },
                  opacity: { delay: 1, duration: 2, times: [0, 0.2, 1] }
                }
              }}
            />
            
            {/* Bubbles */}
            <motion.circle 
              cx="80" 
              cy="100" 
              r="3" 
              fill="hsl(var(--accent)/80)"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: -20, 
                opacity: [0, 1, 0],
                transition: { 
                  y: { duration: 2, repeat: Infinity, repeatType: "loop" },
                  opacity: { duration: 2, repeat: Infinity, repeatType: "loop", times: [0, 0.2, 1] }
                }
              }}
            />
            <motion.circle 
              cx="100" 
              cy="110" 
              r="4" 
              fill="hsl(var(--accent)/80)"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: -30, 
                opacity: [0, 1, 0],
                transition: { 
                  y: { duration: 3, repeat: Infinity, repeatType: "loop", delay: 0.5 },
                  opacity: { duration: 3, repeat: Infinity, repeatType: "loop", times: [0, 0.2, 1], delay: 0.5 }
                }
              }}
            />
            <motion.circle 
              cx="120" 
              cy="105" 
              r="2" 
              fill="hsl(var(--accent)/80)"
              initial={{ y: 0, opacity: 0 }}
              animate={{ 
                y: -15, 
                opacity: [0, 1, 0],
                transition: { 
                  y: { duration: 1.5, repeat: Infinity, repeatType: "loop", delay: 1 },
                  opacity: { duration: 1.5, repeat: Infinity, repeatType: "loop", times: [0, 0.2, 1], delay: 1 }
                }
              }}
            />
            
            {/* Sad face avatar */}
            <motion.g
              initial={{ x: 150, y: 120, opacity: 0 }}
              animate={{ 
                x: 150, 
                y: 120, 
                opacity: 1,
                transition: { delay: 0.8, duration: 0.5 }
              }}
            >
              <circle cx="0" cy="0" r="20" fill="hsl(var(--muted))" />
              <circle cx="-5" cy="-5" r="2" fill="white" />
              <circle cx="5" cy="-5" r="2" fill="white" />
              <path 
                d="M-7,7 C-7,12 7,12 7,7" 
                stroke="white" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
                transform="rotate(180 0 7)"
              />
            </motion.g>
          </svg>
        </motion.div>
        
        <motion.h1 
          className="text-6xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-8"
          variants={itemVariants}
        >
          Sorry, seems that page got spoiled with the Chem!
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NotFound;
