
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: 1 | 2 | 3 | 4 | 5;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const ScrollReveal = ({ 
  children, 
  delay = 1, 
  direction = 'up' 
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Always show content immediately on initial load to prevent content flashing
    if (ref.current) {
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Find child elements with animate-on-scroll class and add active class
            const animateElements = entry.target.querySelectorAll('.animate-on-scroll');
            animateElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-active');
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  let transformInitial = 'translateY(30px)';
  
  switch (direction) {
    case 'up':
      transformInitial = 'translateY(30px)';
      break;
    case 'down':
      transformInitial = 'translateY(-30px)';
      break;
    case 'left':
      transformInitial = 'translateX(30px)';
      break;
    case 'right':
      transformInitial = 'translateX(-30px)';
      break;
    case 'none':
      transformInitial = 'none';
      break;
  }
  
  // Apply visible styles when visible or on mobile
  const visibleStyle = (isVisible || isMobile) ? {
    opacity: 1,
    transform: 'none',
    transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay * 0.1}s`
  } : {
    opacity: 0,
    transform: transformInitial,
    transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay * 0.1}s`
  };
  
  return (
    <div 
      ref={ref} 
      className={`reveal reveal-delay-${delay}`}
      style={visibleStyle}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
