interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'light';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo = ({ variant = 'full', className = '', showSubtitle = true }: BrandLogoProps) => (
  <div className={`brand-logo brand-logo--${variant} ${className}`} aria-label="Majestic Aesthetics">
    <div className="brand-logo__primary">
      <span>Majestic</span>
      <span className="brand-logo__spark" aria-hidden="true" />
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
