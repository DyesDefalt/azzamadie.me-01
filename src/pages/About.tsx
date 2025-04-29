import { useEffect } from "react";
import Profile from "@/components/about/Profile";
import Skills from "@/components/about/Skills";
import Experience from "@/components/about/Experience";
import Education from "@/components/about/Education";
import SimplifiedCertifications from "@/components/about/SimplifiedCertifications";
import AwardsSection from "@/components/AwardsSection"; // Import the new AwardsSection

const About = () => {
  const skills = [
    "Search Engine Marketing (SEM)",
    "Social Media Advertising",
    "Data Analytics & Reporting",
    "Content Strategy",
    "Campaign Management",
    "Conversion Rate Optimization",
    "Email Marketing",
    "Google Analytics",
    "Google Ads",
    "Meta Ads Manager",
    "Web Development",
    "A/B Testing"
  ];

  // Updated certification paths
  const certifications = [
    {
      name: "Full Stack Digital Marketing",
      issuer: "RevoU",
      logo: "/images/certs/revou_logo.png" // Updated path
    },
    {
      name: "Google Ads Certification",
      issuer: "Google Skillshop",
      logo: "/images/certs/google_partner_badge.webp" // Updated path
    },
    {
      name: "Meta Certified Professional",
      issuer: "Meta Blueprint",
      logo: "/images/certs/meta_certified_media_buying_professional.png" // Updated path
    },
    {
      name: "TikTok Marketing Certification",
      issuer: "TikTok Blueprint",
      logo: "/images/certs/tiktok_marketing_badge.png" // Updated path
    }
  ];

  const experience = [
    {
      title: "Biddable Media Specialist",
      company: "Dentsu Indonesia",
      period: "July 2022 - Present",
      location: "Jakarta, Indonesia",
      description: "Managing digital campaigns for major clients (incl. Bank BCA, XL Axiata), optimizing multi-platform campaigns, and executing brand lift studies with significant performance improvements."
    },
    {
      title: "Digital Marketing Manager",
      company: "Freelance",
      period: "January 2024 - Present",
      location: "Indonesia",
      description: "Developing media strategies that increased leads and achieved strong ROAS for travel and skincare clients."
    }
  ];

  const education = [
    {
      degree: "Full Stack Digital Marketing",
      school: "RevoU",
      year: "January 2022 - May 2022"
    },
    {
      degree: "Bachelor's in Chemical Engineering",
      school: "Universitas Muhammadiyah Jakarta",
      year: "2014 - 2021"
    }
  ];

  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          el.classList.add('animate-active');
        }
      });
    };
    
    window.addEventListener('scroll', animateElements);
    setTimeout(animateElements, 100);
    
    return () => {
      window.removeEventListener('scroll', animateElements);
    };
  }, []);

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          <Profile />
          <Skills skills={skills} />
          <Experience experience={experience} />
          
          {/* Include Awards Section Here */}
          <AwardsSection /> 
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Education education={education} />
            <SimplifiedCertifications certifications={certifications} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

