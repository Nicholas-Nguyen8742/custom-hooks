import { useEffect } from 'react';

declare global {
  interface Window {
    usePreloadImagesData?: Record<symbol, unknown[]>;
  }
}

export default function usePreloadImages (imageSrcs: string[]): void {
  useEffect(() => {
    const key = Symbol();
    window.usePreloadImagesData = window.usePreloadImagesData ?? {};
    window.usePreloadImagesData[key] = [];
    for (const src of imageSrcs) {
      const img = new Image();
      img.src = src;
      window.usePreloadImagesData[key].push(img); 
    }
    return () => {
      delete window.usePreloadImagesData?.[key];
    };
  }, [imageSrcs]);
}
