
import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  radius: number;
  xSpeed: number;
  ySpeed: number;
  color: string;
  alpha: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let orbs: Orb[] = [];
    const orbCount = window.innerWidth < 768 ? 10 : 20;

    const colors = [
      "#20C997", // teal
      "#F4A261", // orange
      "#7fcdff", // light blue
      "#9b87f5", // purple
    ];

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initOrbs(); // Reinitialize orbs when resizing
    };

    const initOrbs = () => {
      orbs = [];
      for (let i = 0; i < orbCount; i++) {
        const radius = Math.random() * 60 + 40;
        orbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          xSpeed: Math.random() * 0.5 - 0.25,
          ySpeed: Math.random() * 0.5 - 0.25,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.2 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update orbs
      orbs.forEach((orb) => {
        // Create gradient
        const gradient = ctx.createRadialGradient(
          orb.x, 
          orb.y, 
          0, 
          orb.x, 
          orb.y, 
          orb.radius
        );
        
        gradient.addColorStop(0, `${orb.color}${Math.floor(orb.alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${orb.color}00`);
        
        // Draw orb
        ctx.globalAlpha = orb.alpha;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Move orb
        orb.x += orb.xSpeed;
        orb.y += orb.ySpeed;
        
        // Check for mouse influence - subtle attraction
        const dx = mouseRef.current.x - orb.x;
        const dy = mouseRef.current.y - orb.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;
        
        if (distance < maxDistance) {
          const intensity = (maxDistance - distance) / maxDistance * 0.05;
          orb.x += dx * intensity;
          orb.y += dy * intensity;
        }
        
        // Bounce off edges
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="canvas-container">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.8 }}
      />
    </div>
  );
};

export default AnimatedBackground;
