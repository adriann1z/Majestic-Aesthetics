import { Facebook, Instagram } from 'lucide-react';

export const SocialLinks = () => (
  <nav aria-label="Social media" className="flex shrink-0 items-center gap-2">
    {[
      { label: 'Facebook', href: 'https://www.facebook.com/majesticaestheticswithkate', Icon: Facebook },
      { label: 'Instagram', href: 'https://www.instagram.com/majestic_aesthetics_official/', Icon: Instagram },
    ].map(({ label, href, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Majestic Aesthetics on ${label} (opens in a new tab)`}
        className={`group relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C08EA1] transition-all motion-reduce:transform-none ${label === 'Facebook' ? 'bg-[#1877F2] hover:bg-[#1264D0]' : 'bg-[#B63275] hover:bg-[#96265F]'}`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
        <span className="pointer-events-none absolute right-0 top-full z-40 mt-1 rounded px-2 py-1 text-xs bg-[#282924] text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
          {label}
        </span>
      </a>
    ))}
  </nav>
);
