import { useId } from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'light';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo = ({ variant = 'full', className = '', showSubtitle = true }: BrandLogoProps) => {
  const heartGoldId = useId();
  return (
  <div className={`brand-logo brand-logo--${variant} ${className}`} aria-label="Majestic Aesthetics">
    <div className="brand-logo__primary">
      <span>Majestic</span>
      <svg className="brand-logo__heart" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={heartGoldId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9D783A" />
            <stop offset="0.45" stopColor="#F0DEB7" />
            <stop offset="0.7" stopColor="#D9B66F" />
            <stop offset="1" stopColor="#9D783A" />
          </linearGradient>
        </defs>
        <path fill={`url(#${heartGoldId})`} d="M46 91 C52 69 58 46 51 28 C46 13 35 5 22 8 C5 11 1 28 10 42 C17 53 33 62 42 77 C29 64 9 55 3 40 C-6 19 8 2 24 3 C40 3 49 17 52 31 C55 15 67 2 81 2 C98 2 104 19 97 33 C88 51 65 64 46 91 Z" />
      </svg>
    </div>
    <div className="brand-logo__secondary">Aesthetics</div>
    {showSubtitle && (
      <div className="brand-logo__services" aria-label="Anti-aging, hormone health, skin care">
        <span aria-hidden="true" />
        <strong>Anti-Aging</strong>
        <b aria-hidden="true">|</b>
        <strong>Hormone Health</strong>
        <b aria-hidden="true">|</b>
        <strong>Skin Care</strong>
        <span aria-hidden="true" />
      </div>
    )}
  </div>
  );
};
