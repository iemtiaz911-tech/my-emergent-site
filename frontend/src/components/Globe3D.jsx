import { useEffect, useRef } from 'react';

export const Globe3D = () => {
  const locations = [
    { name: 'New York', left: '25%', top: '35%' },
    { name: 'London', left: '48%', top: '30%' },
    { name: 'Cyprus', left: '58%', top: '38%' },
    { name: 'Ireland', left: '45%', top: '28%' },
    { name: 'India', left: '72%', top: '45%' }
  ];

  return (
    <div className="w-full h-full min-h-[500px] rounded-[40px] overflow-hidden bg-secondary-bg border border-border-main relative flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,208,207,0.05)_0%,transparent_70%)]"></div>
      
      {/* Globe container */}
      <div className="relative w-[400px] h-[400px] globe-container">
        {/* Globe sphere with gradient */}
        <div className="globe-sphere absolute inset-0 rounded-full bg-gradient-to-br from-[#0a1929] via-[#06141B] to-[#0a1929] border-2 border-border-main/30 shadow-[0_0_60px_rgba(204,208,207,0.1)] overflow-hidden">
          {/* Rotating grid lines */}
          <div className="globe-grid absolute inset-0">
            {/* Horizontal lines */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-border-main/20"
                style={{ top: `${(i / 6) * 100}%` }}
              ></div>
            ))}
            {/* Vertical lines */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-border-main/20"
                style={{ left: `${(i / 8) * 100}%` }}
              ></div>
            ))}
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(204,208,207,0.08)_0%,transparent_60%)]"></div>
        </div>

        {/* Location markers */}
        {locations.map((loc, index) => (
          <div
            key={index}
            className="location-marker absolute"
            style={{ left: loc.left, top: loc.top }}
          >
            {/* Pin */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-4 h-4 bg-[#D4AF87] rounded-full animate-pulse"></div>
              <div className="absolute w-8 h-8 bg-[#D4AF87]/20 rounded-full animate-ping"></div>
              <div className="absolute w-6 h-6 bg-[#D4AF87]/30 rounded-full"></div>
            </div>
            
            {/* Location name tooltip */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-secondary-bg/95 backdrop-blur-sm border border-border-main px-3 py-1 rounded-lg whitespace-nowrap">
                <span className="text-[10px] font-bold tracking-wider uppercase text-silver-accent">{loc.name}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full border border-silver-accent/10 animate-spin-slow"></div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
        <p className="text-body-text text-xs tracking-widest uppercase">Global Client Base</p>
      </div>

      <style jsx>{`
        .globe-container {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .globe-grid {
          animation: rotate 60s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg) scale(1.05);
          }
          to {
            transform: rotate(360deg) scale(1.05);
          }
        }

        .location-marker {
          transform: translate(-50%, -50%);
          z-index: 10;
        }
      `}</style>
    </div>
  );
};
