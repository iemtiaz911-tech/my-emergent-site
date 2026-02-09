import { useEffect, useRef } from 'react';

export const useCounterAnimation = (target, options = {}) => {
  const {
    suffix = '',
    prefix = '',
    decimals = 0,
    duration = 2000,
    threshold = 0.3
  } = options;

  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animateCounter = (start, end) => {
      let startTime = null;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (end - start) * easeOut;
        element.textContent = prefix + current.toFixed(decimals) + suffix;
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounter(0, target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [target, suffix, prefix, decimals, duration, threshold]);

  return elementRef;
};
