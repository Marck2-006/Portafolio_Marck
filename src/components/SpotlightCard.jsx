import { useRef, useState } from 'react';

const ACCENT_CONFIG = {
  blue: {
    spotlight: 'rgba(59, 130, 246, 0.16)',
    borderGlow: 'rgba(59, 130, 246, 0.45)',
    hoverBorder: 'hover:border-blue-500/35',
  },
  purple: {
    spotlight: 'rgba(139, 92, 246, 0.16)',
    borderGlow: 'rgba(139, 92, 246, 0.45)',
    hoverBorder: 'hover:border-violet-500/35',
  },
  crimson: {
    spotlight: 'rgba(244, 63, 94, 0.16)',
    borderGlow: 'rgba(244, 63, 94, 0.48)',
    hoverBorder: 'hover:border-rose-500/40',
  },
};

export default function SpotlightCard({
  children,
  className = '',
  accent = 'blue',
  as: Component = 'div',
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const colors = ACCENT_CONFIG[accent] || ACCENT_CONFIG.blue;

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D14]/85 backdrop-blur-md transition-colors duration-300 ${colors.hoverBorder} ${className}`}
      {...props}
    >
      {/* Interactive border spotlight ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(280px circle at ${position.x}px ${position.y}px, ${colors.borderGlow}, transparent 65%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />

      {/* Interactive interior radial spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, ${colors.spotlight}, transparent 65%)`,
        }}
      />

      {/* Subtle top specular edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
