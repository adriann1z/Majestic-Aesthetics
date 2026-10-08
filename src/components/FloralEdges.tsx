import { useEffect, useRef, useState } from 'react';

const TILE_HEIGHT = 733.333;

export const FloralEdges = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tileCount, setTileCount] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const main = container?.parentElement;
    const credentials = main?.querySelector<HTMLElement>('.credentials-strip');
    if (!container || !main || !credentials) return;

    const update = () => {
      const start = credentials.offsetTop + credentials.offsetHeight;
      container.style.top = `${start}px`;
      setTileCount(Math.max(1, Math.ceil((main.offsetHeight - start) / TILE_HEIGHT)));
    };
    const observer = new ResizeObserver(update);
    observer.observe(main);
    observer.observe(credentials);
    const hero = main.querySelector('#hero');
    if (hero) observer.observe(hero);
    update();
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="floral-edges" aria-hidden="true">
      {['left', 'right'].map(side => (
        <div key={side} className={`floral-rail floral-rail--${side}`}>
          {Array.from({ length: tileCount }, (_, index) => (
            <div key={index} className="floral-tile" />
          ))}
        </div>
      ))}
    </div>
  );
};
