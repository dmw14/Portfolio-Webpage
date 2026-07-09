import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold: number = 0.1
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Only reveal once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe the main element and any children with .reveal class
    const revealElements = element.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Also observe the element itself if it has .reveal
    if (element.classList.contains('reveal')) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useCountUp(
  end: number,
  duration: number = 2000,
  startOnReveal: boolean = true
) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      
      const startTime = performance.now();
      const startValue = 0;

      const tick = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startValue + (end - startValue) * eased);
        
        if (element) {
          element.textContent = current.toString();
        }

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    if (startOnReveal) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            animate();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(element);
      return () => observer.disconnect();
    } else {
      animate();
    }
  }, [end, duration, startOnReveal]);

  return ref;
}
