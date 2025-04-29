import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax"; // Import Parallax

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

const PortfolioPreview = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Updated projects based on Portfolio.tsx (Revision point 7)
  const projects: Project[] = [
    {
      id: 1,
      title: "BCA - Don\'t Know? Kasih No!",
      category: "Social Media Campaign",
      description: "Award-winning campaign (YouTube Works, Marketing Excellence) focused on fraud awareness. Managed campaign execution and reporting.",
      image: "/images/portfolio/bca_dkkn.png", // Use actual image path
      link: "/portfolio"
    },
    {
      id: 4,
      title: "XL Axiata - App Install Campaign",
      category: "App Marketing",
      description: "Managed Meta Ads for app installs, achieving significant cost reduction per result (CPR -50%) and improved conversion efficiency (+20%).",
      image: "/images/portfolio/xl_app.png", // Use actual image path
      link: "/portfolio"
    },
    {
      id: 5,
      title: "Putupatu - Teaser Leads Generation",
      category: "Lead Generation",
      description: "Generated leads for a new B2C service launch with CTR and Conversion Rates exceeding benchmarks.",
      image: "/images/portfolio/putupatu.png", // Use actual image path
      link: "/portfolio"
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="section-padding bg-background overflow-hidden" // Added overflow-hidden
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Apply Parallax to the title section */}
        <Parallax speed={-3}>
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my most successful marketing campaigns and projects
              that showcase my approach to digital marketing challenges.
            </p>
          </motion.div>
        </Parallax>

        {/* Apply Parallax to the project grid */}
        <Parallax speed={3}>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={sectionVariants} // Reuse section variants for staggering grid items
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative h-80 rounded-lg overflow-hidden card-gradient shadow-lg border border-border hover:border-primary/50"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={project.image || 
  '/placeholder.svg'} // Use placeholder if no image
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-primary text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <motion.p
                    className={`text-gray-300 text-sm mb-4 overflow-hidden`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0, 
                      height: hoveredProject === project.id ? "auto" : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0, 
                      y: hoveredProject === project.id ? 0 : 10 
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Link
                      to={project.link || "/portfolio"}
                      className="inline-flex items-center text-white bg-primary/80 hover:bg-primary transition-colors px-4 py-2 rounded text-sm gap-1 self-start"
                    >
                      View Details <ExternalLink size={14} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Parallax>

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <Link
            to="/portfolio"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors gap-2 font-medium"
          >
            View all projects <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioPreview;

