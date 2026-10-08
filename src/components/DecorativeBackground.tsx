interface DecorativeBackgroundProps {
  variant?: 'hero' | 'botanical' | 'wash';
}

export const DecorativeBackground = ({ variant = 'botanical' }: DecorativeBackgroundProps) => (
  <div className={`decorative-background decorative-background--${variant}`} aria-hidden="true">
    <img src={`${import.meta.env.BASE_URL}images/majestic-edge-art.webp`} alt="" loading={variant === 'hero' ? 'eager' : 'lazy'} />
  </div>
);
