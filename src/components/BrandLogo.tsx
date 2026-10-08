import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'light';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`relative inline-flex flex-col items-start select-none ${className}`}>
      <svg
        viewBox="0 0 520 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Majestic Aesthetics — Aesthetics & Skin Care"
      >
        <defs>
          {/* Watercolor Cloud Gradients */}
          <radialGradient id="waterColorCenter" cx="45%" cy="48%" r="48%">
            <stop offset="0%" stopColor="#EB7296" stopOpacity="0.55" />
            <stop offset="35%" stopColor="#F48CA5" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#F9BACD" stopOpacity="0.32" />
            <stop offset="85%" stopColor="#FCD5E2" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FEEFF5" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="waterColorBloom1" cx="35%" cy="40%" r="42%">
            <stop offset="0%" stopColor="#F37E9F" stopOpacity="0.48" />
            <stop offset="50%" stopColor="#F7A3BC" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#FDF2F6" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="waterColorBloom2" cx="62%" cy="45%" r="38%">
            <stop offset="0%" stopColor="#F68EA9" stopOpacity="0.42" />
            <stop offset="60%" stopColor="#F9BCD0" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFF5F8" stopOpacity="0" />
          </radialGradient>

          {/* Gold Glitter Shimmer Gradient */}
          <linearGradient id="goldShimmerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECC46A" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#F8DE95" />
            <stop offset="100%" stopColor="#B38928" />
          </linearGradient>

          {/* Soft Blur for watercolor edges */}
          <filter id="watercolorEdgeBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" result="blur" />
          </filter>
          <filter id="softDiffusion" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" result="blur" />
          </filter>
        </defs>

        {/* 1. LAYER: Organic Pink Watercolor Wash Background */}
        <g className="watercolor-group">
          {/* Broad soft background aura */}
          <ellipse
            cx="260"
            cy="95"
            rx="180"
            ry="75"
            fill="url(#waterColorCenter)"
            filter="url(#softDiffusion)"
            opacity={isLight ? "0.75" : "0.95"}
          />
          
          {/* Main textured watercolor blotch contours */}
          <path
            d="M 125,90 C 130,55 170,35 220,38 C 265,30 310,24 350,42 C 390,55 410,75 405,105 C 410,135 375,160 325,165 C 275,172 215,168 175,152 C 140,140 120,118 125,90 Z"
            fill="url(#waterColorCenter)"
            filter="url(#watercolorEdgeBlur)"
          />

          {/* Secondary overlapping watercolor lobes for natural organic edges */}
          <path
            d="M 150,85 C 160,50 205,38 250,48 C 295,50 340,38 375,65 C 405,90 395,130 360,150 C 320,165 240,160 190,142 C 150,128 140,105 150,85 Z"
            fill="url(#waterColorBloom1)"
            filter="url(#watercolorEdgeBlur)"
          />
          <path
            d="M 210,65 C 255,42 320,40 365,58 C 400,75 415,110 395,140 C 365,165 305,155 260,148 C 220,142 190,115 200,85 Z"
            fill="url(#waterColorBloom2)"
            filter="url(#watercolorEdgeBlur)"
          />

          {/* Subtle natural watercolor wash ripples */}
          <path
            d="M 190,95 C 210,70 260,65 300,72 C 340,78 370,95 360,120 C 345,145 295,145 250,140 C 215,135 180,115 190,95 Z"
            fill="#F2779B"
            opacity="0.22"
            filter="url(#watercolorEdgeBlur)"
          />
        </g>

        {/* 2. LAYER: Shimmering Gold Dust / Gold Glitter Spatter on Top Right */}
        <g className="gold-glitter-group">
          {/* Dense gold dust cluster */}
          <circle cx="350" cy="35" r="1.5" fill="#D4AF37" opacity="0.9" />
          <circle cx="362" cy="28" r="2.2" fill="#F8DE95" opacity="0.95" />
          <circle cx="375" cy="38" r="1.8" fill="#ECC46A" opacity="0.85" />
          <circle cx="388" cy="24" r="2.5" fill="#D4AF37" opacity="0.95" />
          <circle cx="395" cy="35" r="1.6" fill="#F8DE95" opacity="0.9" />
          <circle cx="410" cy="30" r="2.0" fill="#ECC46A" opacity="0.95" />
          <circle cx="422" cy="38" r="1.4" fill="#D4AF37" opacity="0.8" />
          <circle cx="435" cy="26" r="2.2" fill="#F8DE95" opacity="0.9" />
          <circle cx="448" cy="34" r="1.6" fill="#D4AF37" opacity="0.85" />
          <circle cx="460" cy="42" r="1.8" fill="#ECC46A" opacity="0.75" />

          {/* Mid scatter */}
          <circle cx="330" cy="48" r="1.8" fill="#D4AF37" opacity="0.8" />
          <circle cx="342" cy="56" r="2.4" fill="#F8DE95" opacity="0.95" />
          <circle cx="355" cy="46" r="1.5" fill="#ECC46A" opacity="0.85" />
          <circle cx="368" cy="58" r="2.8" fill="#D4AF37" opacity="0.95" />
          <circle cx="380" cy="48" r="1.9" fill="#F8DE95" opacity="0.9" />
          <circle cx="392" cy="62" r="2.2" fill="#ECC46A" opacity="0.85" />
          <circle cx="405" cy="52" r="1.6" fill="#D4AF37" opacity="0.8" />
          <circle cx="418" cy="65" r="2.5" fill="#F8DE95" opacity="0.9" />
          <circle cx="430" cy="54" r="1.7" fill="#ECC46A" opacity="0.85" />
          <circle cx="445" cy="66" r="2.0" fill="#D4AF37" opacity="0.8" />
          <circle cx="458" cy="58" r="1.4" fill="#F8DE95" opacity="0.7" />
          <circle cx="472" cy="72" r="1.8" fill="#ECC46A" opacity="0.65" />

          {/* Lower delicate fallout */}
          <circle cx="365" cy="75" r="1.6" fill="#D4AF37" opacity="0.75" />
          <circle cx="382" cy="82" r="2.1" fill="#F8DE95" opacity="0.85" />
          <circle cx="398" cy="78" r="1.5" fill="#ECC46A" opacity="0.7" />
          <circle cx="415" cy="85" r="2.0" fill="#D4AF37" opacity="0.8" />
          <circle cx="432" cy="80" r="1.3" fill="#F8DE95" opacity="0.75" />
          <circle cx="448" cy="90" r="1.7" fill="#ECC46A" opacity="0.6" />
          <circle cx="462" cy="86" r="1.2" fill="#D4AF37" opacity="0.5" />

          {/* Micro glitter flecks */}
          <path d="M 378,32 L 380,28 L 382,32 L 386,34 L 382,36 L 380,40 L 378,36 L 374,34 Z" fill="url(#goldShimmerGrad)" opacity="0.95" />
          <path d="M 412,44 L 413.5,41 L 415,44 L 418,45.5 L 415,47 L 413.5,50 L 412,47 L 409,45.5 Z" fill="url(#goldShimmerGrad)" opacity="0.9" />
          <path d="M 438,36 L 439.5,33 L 441,36 L 444,37.5 L 441,39 L 439.5,42 L 438,39 L 435,37.5 Z" fill="url(#goldShimmerGrad)" opacity="0.85" />
          <path d="M 358,62 L 359.5,59 L 361,62 L 364,63.5 L 361,65 L 359.5,68 L 358,65 L 355,63.5 Z" fill="url(#goldShimmerGrad)" opacity="0.8" />
        </g>

        {/* 3. LAYER: Majestic Aesthetics Brand Script */}
        <g className="brand-wordmark" transform="translate(0, 10)">
          {/* Main Script Text */}
          <text
            x="245"
            y="112"
            textAnchor="middle"
            fontFamily="'Alex Brush', cursive"
            fontSize="78"
            fontWeight="bold"
            letterSpacing="0.01em"
            fill={isLight ? "#FFFFFF" : "#111111"}
            style={{
              textShadow: isLight
                ? "0 2px 8px rgba(0,0,0,0.4)"
                : "0 1px 2px rgba(255,255,255,0.7)"
            }}
          >
            Majestic Aesthetics
          </text>
        </g>

        {/* 4. LAYER: Subtitle "Aesthetics & Skin Care" */}
        {showSubtitle && (
          <g className="brand-subtitle" transform="translate(0, 14)">
            <text
              x="385"
              y="156"
              textAnchor="middle"
              fontFamily="'DM Sans', 'Manrope', system-ui, sans-serif"
              fontSize="20"
              fontWeight="600"
              letterSpacing="0.08em"
              fill={isLight ? "#F9EDF2" : "#161616"}
            >
              Aesthetics &amp; Skin Care
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
