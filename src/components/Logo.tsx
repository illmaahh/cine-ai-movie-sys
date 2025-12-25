import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-3xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <motion.div 
      className="flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {/* Logo Icon - Film + AI Neural */}
      <div className="relative" style={{ width: icon, height: icon }}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer Film Frame */}
          <rect
            x="4"
            y="8"
            width="40"
            height="32"
            rx="4"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            fill="none"
          />
          
          {/* Film Perforations Left */}
          <rect x="6" y="12" width="4" height="3" rx="1" fill="hsl(var(--cine-red))" opacity="0.8" />
          <rect x="6" y="18" width="4" height="3" rx="1" fill="hsl(var(--cine-red))" opacity="0.8" />
          <rect x="6" y="24" width="4" height="3" rx="1" fill="hsl(var(--cine-red))" opacity="0.8" />
          <rect x="6" y="30" width="4" height="3" rx="1" fill="hsl(var(--cine-red))" opacity="0.8" />
          
          {/* Film Perforations Right */}
          <rect x="38" y="12" width="4" height="3" rx="1" fill="hsl(var(--cine-red))" opacity="0.8" />
          <rect x="38" y="18" width="4" height="3" rx="1" fill="hsl(var(--cine-red))" opacity="0.8" />
          <rect x="38" y="24" width="4" height="3" rx="1" fill="hsl(var(--cine-red))" opacity="0.8" />
          <rect x="38" y="30" width="4" height="3" rx="1" fill="hsl(var(--cine-red))" opacity="0.8" />
          
          {/* AI Neural Network Center */}
          <circle cx="24" cy="24" r="3" fill="url(#logoGradient)" />
          <circle cx="16" cy="20" r="2" fill="hsl(var(--cine-violet))" />
          <circle cx="32" cy="20" r="2" fill="hsl(var(--cine-violet))" />
          <circle cx="16" cy="28" r="2" fill="hsl(var(--cine-cyan))" />
          <circle cx="32" cy="28" r="2" fill="hsl(var(--cine-cyan))" />
          
          {/* Neural Connections */}
          <line x1="18" y1="20" x2="22" y2="23" stroke="hsl(var(--cine-violet))" strokeWidth="1" opacity="0.6" />
          <line x1="30" y1="20" x2="26" y2="23" stroke="hsl(var(--cine-violet))" strokeWidth="1" opacity="0.6" />
          <line x1="18" y1="28" x2="22" y2="25" stroke="hsl(var(--cine-cyan))" strokeWidth="1" opacity="0.6" />
          <line x1="30" y1="28" x2="26" y2="25" stroke="hsl(var(--cine-cyan))" strokeWidth="1" opacity="0.6" />
          
          {/* Glow Effect */}
          <circle cx="24" cy="24" r="8" fill="url(#glowGradient)" opacity="0.3" />
          
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--cine-red))" />
              <stop offset="100%" stopColor="hsl(var(--cine-violet))" />
            </linearGradient>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--cine-red))" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
        
        {/* Animated Glow */}
        <div className="absolute inset-0 rounded-full bg-cine-red/20 blur-md animate-glow-pulse" />
      </div>

      {showText && (
        <div className={`font-display font-bold ${text} tracking-tight`}>
          <span className="text-gradient">Cine</span>
          <span className="text-foreground"> AI</span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
