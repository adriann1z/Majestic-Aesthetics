import { useEffect } from 'react';

export const SectionReveal = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('main > section > .section-inner').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return null;
};
