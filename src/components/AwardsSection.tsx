import ScrollReveal from "@/components/ScrollReveal";
import { Award } from "lucide-react";

interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  description: string;
  logo: string; // Path to the logo image
  sourceUrl?: string; // Optional link to the source
}

// Updated award data based on research
const awardsData: AwardItem[] = [
  {
    id: 1,
    title: "YouTube Works SEA 2024 - Grand Prix (ID) & More",
    issuer: "Bank BCA & Dentsu Indonesia",
    description: "Campaign \"Don't Know? Kasih No!\" won Grand Prix (Indonesia), Best Collaboration, and Best Use of YouTube.",
    logo: "/images/awards/youtube_works_logo.png",
    sourceUrl: "https://www.youtube.com/ads/youtube-works/sea/?utm_source=chatgpt.com#sea-winners"
  },
  {
    id: 2,
    title: "MMA Smarties Indonesia 2024 - Best in Show",
    issuer: "Bank BCA & Dentsu Indonesia",
    description: "Campaign \"Don't Know? Kasih No!\" awarded Best in Show for Indonesia and Gold in Social Impact Marketing.",
    logo: "/images/awards/mma_logo.png",
    sourceUrl: "https://www.mmaglobal.com/smarties-2024/finalists/winners/region:14"
  },
  {
    id: 3,
    title: "Meta Reels Impact Awards 2024 - Best of Creators (ID)",
    issuer: "Bank BCA & Dentsu Indonesia",
    description: "Recognized for the most creative and impactful use of Meta Reels for the \"Don't Know? Kasih No!\" campaign in Indonesia.",
    logo: "/images/awards/meta_reels_impact_awards_logo.webp",
    sourceUrl: "https://metareelsimpact.awardhub.org/"
  },
  {
    id: 4,
    title: "Festival of Media APAC Awards 2024 - Shortlisted",
    issuer: "Bank BCA & Dentsu Indonesia",
    description: "Campaign \"Awas Modus - The modern financial hero\" shortlisted for Best Integrated Campaign.",
    logo: "/images/awards/foma_apac_logo.png",
    sourceUrl: "https://www.instagram.com/dentsu_id/p/C4FBeX0y5Uj/"
  },
];

const AwardsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal delay={1}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center justify-center">
              <Award className="mr-3 h-8 w-8 text-primary" />
              Awards & Recognition
            </h2>
            <p className="text-muted-foreground text-lg">
              Acknowledged for impactful campaigns and strategic excellence in the digital marketing landscape.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {awardsData.map((award, idx) => (
            <ScrollReveal
              key={award.id}
              delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}
            >
              <div className="group bg-card rounded-lg p-6 flex flex-col items-center text-center h-full border border-border hover:border-primary/50 transition-all duration-300 hover-lift">
                <div className="mb-4 h-16 flex items-center justify-center">
                  <img 
                    src={award.logo || 
'/placeholder.svg'} 
                    alt={`${award.title} Logo`} 
                    className="max-h-12 w-auto object-contain" 
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">{award.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{award.issuer}</p>
                <p className="text-sm text-foreground flex-grow mb-4">{award.description}</p>
                {award.sourceUrl && (
                  <a 
                    href={award.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-primary hover:underline mt-auto"
                  >
                    Verify Source
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

