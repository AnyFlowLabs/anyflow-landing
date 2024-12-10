import { Box, Image as ChakraImage, ImageProps as ChakraImageProps } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface OptimizedImageProps extends Omit<ChakraImageProps, "onLoad"> {
  lowQualitySrc?: string;
  cacheKey?: string;
}

export const OptimizedImage = ({
  src,
  lowQualitySrc,
  alt,
  cacheKey,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(lowQualitySrc || src);

  useEffect(() => {
    // Try to get from cache first
    if (cacheKey) {
      const cached = localStorage.getItem(`img_${cacheKey}`);
      if (cached) {
        setImageSrc(cached);
        setIsLoaded(true);
        return;
      }
    }

    const img = new Image();
    img.src = src as string;
    img.onload = () => {
      setImageSrc(src as string);
      setIsLoaded(true);
      
      // Cache the image URL
      if (cacheKey) {
        try {
          localStorage.setItem(`img_${cacheKey}`, src as string);
        } catch (e) {
          console.warn('Failed to cache image:', e);
        }
      }
    };
  }, [src, cacheKey]);

  return (
    <Box position="relative" overflow="hidden" {...props}>
      <ChakraImage
        src={imageSrc}
        alt={alt}
        loading="lazy"
        transition="opacity 0.3s ease-in-out"
        opacity={isLoaded ? 1 : 0.5}
        style={{
          WebkitBackfaceVisibility: "hidden",
          MozBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        {...props}
      />
    </Box>
  );
}; 