import { useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ClientLogos from "@/components/ClientLogos";
import { Button } from "@/components/ui/button";

// Simplified project structure based on PDF overview
interface Project {
  id: number;
  title: string;
  category: string; // e.g., sem, social, web, content, app
  client?: string; // Optional client name
  brief: string; // Short description or key achievement
  image: string; // Placeholder or relevant image
}

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  // Updated categories based on PDF/brief
  const categories = [
    { id: "all", name: "All Work" },
    { id: "sem", name: "Search Marketing" },
    { id: "social", name: "Social Media" },
    { id: "app", name: "App Campaign" },
    { id: "web", name: "Web Development" },
    // Add other relevant categories if needed
  ];

  // Updated projects based on PDF overview (concise)
  const projects: Project[] = [
    {
      id: 1,
      title: "BCA - Don't Know? Kasih No!",
      category: "social", // Assuming primarily social/awareness
      client: "Bank BCA",
      brief: "Award-winning campaign (YouTube Works, Marketing Excellence) focused on fraud awareness. Managed campaign execution and reporting.",
      image: "/images/portfolio/bca_dkkn.png" // Placeholder - needs actual image
    },
    {
      id: 2,
      title: "BCA - Ramadan #KemuDianRingan",
      category: "social", // Assuming primarily social/awareness
      client: "Bank BCA",
      brief: "Gold Award winner (Marketing Excellence) for brand awareness during Ramadan. Managed campaign execution.",
      image: "/images/portfolio/bca_ramadan.png" // Placeholder - needs actual image
    },
    {
      id: 3,
      title: "BCA - Paylater Launch",
      category: "sem", // Assuming SEM/Performance focus
      client: "Bank BCA",
      brief: "Silver Award winner (Marketing Excellence) for brand strategy supporting the Paylater product launch.",
      image: "/images/portfolio/bca_paylater.png" // Placeholder - needs actual image
    },
    {
      id: 4,
      title: "XL Axiata - App Install Campaign",
      category: "app",
      client: "XL Axiata",
      brief: "Managed Meta Ads for app installs, achieving significant cost reduction per result (CPR -50%) and improved conversion efficiency (+20%).",
      image: "/images/portfolio/xl_app.png" // Placeholder - needs actual image
    },
    {
      id: 5,
      title: "Putupatu - Teaser Leads Generation",
      category: "social", // Lead gen via social
      client: "Putupatu",
      brief: "Generated leads for a new B2C service launch with CTR and Conversion Rates exceeding benchmarks.",
      image: "/images/portfolio/putupatu.png" // Placeholder - needs actual image
    },
    {
      id: 6,
      title: "Personal Project - Web Development",
      category: "web",
      brief: "Developed various websites including putupatu.site, savanatour.id, and a Web 3.0 project (freshgem.crypto).",
      image: "/images/portfolio/web_dev.png" // Placeholder - needs actual image
    }
    // Add more projects concisely from PDF if needed
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal delay={1}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              My Portfolio
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Explore selected projects showcasing my expertise in digital marketing. 
              For detailed case studies, please download the full portfolio.
            </p>
            <a href="/Ahmad_Azzam_Fuadie_Portfolio.pdf" download>
              <Button variant="outline" className="hover-lift">
                <Download className="mr-2 h-4 w-4" /> Download Full Portfolio (PDF)
              </Button>
            </a>
          </div>
        </ScrollReveal>

        <ClientLogos />

        <ScrollReveal delay={2}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-3 sm:px-5 py-2 rounded-full transition-all transform hover:scale-105 text-sm sm:text-base ${
                  filter === category.id
                    ? "bg-primary text-primary-foreground font-medium"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              delay={((idx % 3) + 1) as 1 | 2 | 3}
            >
              {/* Link the card to the PDF or a specific section if possible */}
              <a href="/Ahmad_Azzam_Fuadie_Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="block group bg-card rounded-lg overflow-hidden hover-lift transform transition-all duration-300 border border-border hover:border-primary/50">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image || '/placeholder.svg'} // Use placeholder if no image
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                   {project.client && (
                     <span className="absolute bottom-2 left-2 bg-primary/80 text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                       {project.client}
                     </span>
                   )}
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white text-lg font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" size={20} />
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.brief}</p>

                  {/* Optional: Add category tag */}
                  <span className="inline-block bg-muted px-2 py-1 rounded-md text-xs text-muted-foreground capitalize">
                    {project.category}
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Portfolio;

