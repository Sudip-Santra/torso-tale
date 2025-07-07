import { useState, useEffect, useRef } from 'react';

interface UseImageLoaderOptions {
  threshold?: number; // Intersection observer threshold
  rootMargin?: string; // Intersection observer root margin
  skipLazyLoading?: boolean; // Option to skip lazy loading for critical images
}

export function useImageLoader(
  src: string,
  options: UseImageLoaderOptions = {}
) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(options.skipLazyLoading || false);
  const [error, setError] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If skip lazy loading is true, we don't need to setup the intersection observer
    if (options.skipLazyLoading) {
      setIsInView(true);
      return;
    }

    // Create an element reference to observe
    const element = document.createElement('div');

    // Use IntersectionObserver to detect when the image should be loaded
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Disconnect the observer once the element is in view
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      });
    };

    // Setup the observer
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: options.threshold || 0.1, // Default threshold of 10%
      rootMargin: options.rootMargin || '200px 0px', // Default 200px margin above and below
    });

    // Start observing
    observerRef.current.observe(element);

    // Clean up the observer when component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options.threshold, options.rootMargin, options.skipLazyLoading]);

  useEffect(() => {
    // Only load the image when it comes into view
    if (!isInView) return;

    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoaded(true);
    };

    img.onerror = () => {
      setError('Failed to load image');
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, isInView]);

  return { isLoaded, isInView, error };
}
