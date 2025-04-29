import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax"; // Import Parallax

const AboutPreview = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      id="about-preview" 
      className="section-padding bg-secondary overflow-hidden" // Added overflow-hidden for parallax
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Apply Parallax to the image column */}
          <Parallax speed={-5} className="order-2 md:order-1">
            <motion.div variants={itemVariants}>
              <motion.img
                src="/lovable-uploads/1d121099-8d16-417d-9542-55bd12a925b5.webp"
                alt="Ahmad Azzam Fuadie"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                width={400}
                height={400}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </Parallax>
          
          {/* Apply Parallax to the text column */}
          <Parallax speed={5} className="order-1 md:order-2 text-left">
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              
              <motion.p className="text-gray-300 mb-4" variants={itemVariants}>
                As a Biddable Media Specialist at Dentsu with over 3 years of experience, I leverage my unique Chemical Engineering background to manage high-impact campaigns for leading clients like XL Axiata and Bank BCA.
              </motion.p>
              
              <motion.p className="text-gray-300 mb-6" variants={itemVariants}>
                My approach combines analytical thinking with creative strategies to deliver data-driven marketing solutions that achieve measurable results - including reducing CPR by up to 50% and increasing conversion efficiency by 20% across multiple platforms.
              </motion.p>
              
              <motion.div className="flex flex-wrap gap-3 mb-8" variants={itemVariants}>
                {/* Skills tags */}
                <span className="bg-background/30 px-3 py-1 rounded-full text-sm text-gray-300">
                  SEO & SEM
                </span>
                <span className="bg-background/30 px-3 py-1 rounded-full text-sm text-gray-300">
                  Social Media Marketing
                </span>
                <span className="bg-background/30 px-3 py-1 rounded-full text-sm text-gray-300">
                  Campaign Management
                </span>
                <span className="bg-background/30 px-3 py-1 rounded-full text-sm text-gray-300">
                  Analytics
                </span>
                <span className="bg-background/30 px-3 py-1 rounded-full text-sm text-gray-300">
                  Web Development
                </span>
                <span className="bg-background/30 px-3 py-1 rounded-full text-sm text-gray-300">
                  Meta Certified
                </span>
                <span className="bg-background/30 px-3 py-1 rounded-full text-sm text-gray-300">
                  Google Certified
                </span>
                <span className="bg-background/30 px-3 py-1 rounded-full text-sm text-gray-300">
                  TikTok Certified
                </span>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link 
                  to="/about"
                  className="inline-flex items-center text-teal hover:text-teal-400 transition-colors gap-2 font-medium"
                >
                  Read more about me <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPreview;

