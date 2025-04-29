
import { useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const ClientLogos = () => {
  // Updated clientsData based on revision: Only BCA and XL
  const clientsData = [
    {
      name: "Bank BCA",
      // Using SVG for good contrast and scalability
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg"
    },
    {
      name: "XL Axiata",
      // Using SVG for good contrast and scalability
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/XL_logo_2016.svg"
    }
  ];

  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logosRef.current) return;
      
      const logos = logosRef.current.querySelectorAll('.client-logo-container');
      
      logos.forEach((logo) => {
        const rect = logo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const containerElement = logo as HTMLDivElement;
        containerElement.style.setProperty('--mouse-x', `${x}px`);
        containerElement.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ScrollReveal delay={2}>
      <div className="mb-16">
        <h2 className="text-xl text-center font-medium text-white mb-8">Trusted by leading brands</h2>
        <div 
          ref={logosRef}
          // Adjust grid columns for fewer logos, e.g., centered or fewer columns
          className="grid grid-cols-2 gap-8 items-center justify-items-center max-w-md mx-auto" // Center the 2 logos
        >
          {clientsData.map((client, index) => (
            <div
              key={index}
              className="client-logo-container hover-lift relative bg-secondary/30 p-4 sm:p-6 rounded-lg h-20 sm:h-24 w-full flex items-center justify-center"
              style={{
                '--mouse-x': '0px',
                '--mouse-y': '0px'
              } as React.CSSProperties}
            >
              <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(56,189,248,0.15),transparent_40%)] transition-opacity duration-500"></div>
              <img 
                src={client.logo} 
                alt={client.name} 
                className="client-logo max-h-10 sm:max-h-12 max-w-[100px] sm:max-w-[120px] object-contain" // Added object-contain
              />
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ClientLogos;

