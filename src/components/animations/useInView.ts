import { useEffect, useRef, useState } from 'react';

export function useInView<T extends Element = HTMLElement>(options: IntersectionObserverOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
    });

    if (ref.current) {
      observer.observe(ref.current as unknown as Element);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView };
}

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}