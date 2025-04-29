import { motion } from 'framer-motion';

const AtomAnimation = () => {
  const nucleusRadius = 8;
  const orbitRadius = 40;
  const electronRadius = 4;
  const numElectrons = 3;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* Nucleus */}
      <motion.div
        className="absolute rounded-full bg-primary shadow-lg"
        style={{ 
          width: nucleusRadius * 2, 
          height: nucleusRadius * 2,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbits and Electrons */}
      {Array.from({ length: numElectrons }).map((_, i) => {
        const angleOffset = (i * 360) / numElectrons;
        const animationDuration = 5 + i * 1.5; // Vary speed

        return (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{ 
              transformOrigin: 'center center',
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5 // Stagger start times
            }}
          >
            {/* Electron */}
            <motion.div
              className="absolute rounded-full bg-accent shadow-md"
              style={{
                width: electronRadius * 2,
                height: electronRadius * 2,
                top: `calc(50% - ${orbitRadius}px - ${electronRadius}px)`,
                left: `calc(50% - ${electronRadius}px)`,
                // Quantum highlight effect using box-shadow
                boxShadow: `0 0 8px 2px hsl(var(--accent)), 0 0 3px 1px hsl(var(--accent))`
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AtomAnimation;
