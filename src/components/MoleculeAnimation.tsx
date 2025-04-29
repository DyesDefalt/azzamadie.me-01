import { motion } from 'framer-motion';

const MoleculeAnimation = () => {
  // Define molecule structure with atoms and bonds
  const atoms = [
    { id: 1, x: 50, y: 50, radius: 8, color: 'hsl(var(--primary))' },
    { id: 2, x: 90, y: 30, radius: 6, color: 'hsl(var(--accent))' },
    { id: 3, x: 110, y: 70, radius: 7, color: 'hsl(var(--accent))' },
    { id: 4, x: 30, y: 90, radius: 5, color: 'hsl(var(--primary))' },
  ];

  // Define bonds between atoms
  const bonds = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 3 },
  ];

  return (
    <div className="relative w-36 h-36">
      {/* Render bonds first (behind atoms) */}
      {bonds.map((bond, index) => {
        const fromAtom = atoms.find(a => a.id === bond.from);
        const toAtom = atoms.find(a => a.id === bond.to);
        
        if (!fromAtom || !toAtom) return null;
        
        return (
          <motion.div
            key={`bond-${index}`}
            className="absolute bg-muted-foreground/30"
            style={{
              height: '2px',
              width: Math.sqrt(
                Math.pow(toAtom.x - fromAtom.x, 2) + 
                Math.pow(toAtom.y - fromAtom.y, 2)
              ),
              left: fromAtom.x,
              top: fromAtom.y,
              transformOrigin: 'left center',
              transform: `rotate(${Math.atan2(
                toAtom.y - fromAtom.y,
                toAtom.x - fromAtom.x
              )}rad)`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
        );
      })}

      {/* Render atoms */}
      {atoms.map((atom) => (
        <motion.div
          key={`atom-${atom.id}`}
          className="absolute rounded-full"
          style={{
            width: atom.radius * 2,
            height: atom.radius * 2,
            left: atom.x - atom.radius,
            top: atom.y - atom.radius,
            backgroundColor: atom.color,
            boxShadow: `0 0 6px 1px ${atom.color}`,
          }}
          animate={{
            x: [0, Math.random() * 10 - 5, 0],
            y: [0, Math.random() * 10 - 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: atom.id * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default MoleculeAnimation;
