interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'light';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo = ({ variant = 'full', className = '' }: BrandLogoProps) => (
  <div className={`brand-logo ${variant === 'light' ? 'brand-logo--light' : ''} ${className}`}>
    <img
      src="/images/majestic-logo-transparent.webp"
      alt="Majestic Aesthetics - Aesthetics & Skin Care"
      width={1448}
      height={1086}
      decoding="async"
    />
  </div>
);
