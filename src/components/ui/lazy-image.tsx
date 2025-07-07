import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useImageLoader } from '@/hooks/use-image-loader';
import { Skeleton } from './skeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  skipLazyLoading?: boolean;
  threshold?: number;
  rootMargin?: string;
  onLoad?: () => void;
  showLoadingEffect?: boolean;
}

export function LazyImage({
  src,
  alt,
  className,
  skeletonClassName,
  skipLazyLoading = false,
  threshold,
  rootMargin,
  onLoad,
  showLoadingEffect = true,
  ...props
}: LazyImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Use our custom hook to handle image loading
  const { isLoaded, isInView, error } = useImageLoader(src, {
    skipLazyLoading,
    threshold,
    rootMargin,
  });
  
  // When the image is mounted, get its dimensions to create a proper placeholder
  useEffect(() => {
    if (imgRef.current) {
      const { offsetWidth, offsetHeight } = imgRef.current;
      if (offsetWidth && offsetHeight) {
        setDimensions({
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    }
  }, []);

  // Invoke the onLoad callback when the image loads
  useEffect(() => {
    if (isLoaded && onLoad) {
      onLoad();
    }
  }, [isLoaded, onLoad]);

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        className
      )}
      style={{
        minHeight: dimensions.height || 'auto',
        minWidth: dimensions.width || 'auto',
      }}
    >
      {/* Skeleton loader shown when image is not yet loaded */}
      {(!isLoaded || !isInView) && showLoadingEffect && (
        <Skeleton 
          className={cn(
            'absolute inset-0',
            skeletonClassName
          )} 
        />
      )}

      {/* The actual image */}
      <img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        className={cn(
          'w-full h-full transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={() => {
          if (onLoad) onLoad();
        }}
        {...props}
      />

      {/* Show error state if image fails to load */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          Failed to load image
        </div>
      )}
    </div>
  );
}
