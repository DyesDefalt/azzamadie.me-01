import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import { motion } from "framer-motion";
import AnimatedName from "./animations/AnimatedName"; // Import the new AnimatedName component

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Replace AnimatedText with AnimatedName for the hover effect */}
            <AnimatedName />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-accent mb-6">
              Digital Marketing Specialist | Meta, Google & TikTok Certified
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Crafting data-driven digital marketing strategies 
              that drive real business results.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-hover-effect inline-block"
              >
                Let's Talk
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="bg-transparent border border-white/20 hover:border-white/40 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 inline-block"
              >
                View My Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{
          opacity: { delay: 1.2, duration: 1 },
          y: { duration: 2, repeat: Infinity, repeatType: "loop" }
        }}
      >
        <a
          href="#about-preview"
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
