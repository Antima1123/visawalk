'use client';

import { useState, useEffect } from 'react';

// Breakpoint values matching Tailwind CSS defaults
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

type Breakpoint = keyof typeof breakpoints;

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('sm');

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });

      // Determine current breakpoint
      if (width >= breakpoints['2xl']) {
        setCurrentBreakpoint('2xl');
      } else if (width >= breakpoints.xl) {
        setCurrentBreakpoint('xl');
      } else if (width >= breakpoints.lg) {
        setCurrentBreakpoint('lg');
      } else if (width >= breakpoints.md) {
        setCurrentBreakpoint('md');
      } else {
        setCurrentBreakpoint('sm');
      }
    }

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper functions
  const isMobile = windowSize.width < breakpoints.md;
  const isTablet = windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg;
  const isDesktop = windowSize.width >= breakpoints.lg;
  const isLargeDesktop = windowSize.width >= breakpoints.xl;

  const isBreakpoint = (breakpoint: Breakpoint) => {
    return windowSize.width >= breakpoints[breakpoint];
  };

  const isBreakpointOnly = (breakpoint: Breakpoint) => {
    const breakpointKeys = Object.keys(breakpoints) as Breakpoint[];
    const currentIndex = breakpointKeys.indexOf(breakpoint);
    const nextBreakpoint = breakpointKeys[currentIndex + 1];
    
    if (!nextBreakpoint) {
      return windowSize.width >= breakpoints[breakpoint];
    }
    
    return windowSize.width >= breakpoints[breakpoint] && 
           windowSize.width < breakpoints[nextBreakpoint];
  };

  return {
    windowSize,
    currentBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isBreakpoint,
    isBreakpointOnly,
    breakpoints
  };
}

// Hook for media queries
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// Hook for orientation detection
export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    function handleOrientationChange() {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    }

    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);
    
    return () => window.removeEventListener('resize', handleOrientationChange);
  }, []);

  return orientation;
}

// Hook for detecting touch devices
export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      return 'ontouchstart' in window || 
             navigator.maxTouchPoints > 0 || 
             (navigator as any).msMaxTouchPoints > 0;
    };

    setIsTouchDevice(checkTouchDevice());
  }, []);

  return isTouchDevice;
}

// Hook for viewport dimensions
export function useViewport() {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
    scrollY: 0
  });

  useEffect(() => {
    function handleResize() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollY: window.scrollY
      });
    }

    function handleScroll() {
      setViewport(prev => ({
        ...prev,
        scrollY: window.scrollY
      }));
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return viewport;
}

// Hook for responsive values
export function useResponsiveValue<T>(values: {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}) {
  const { currentBreakpoint } = useResponsive();

  // Find the appropriate value based on current breakpoint
  const breakpointOrder: Breakpoint[] = ['2xl', 'xl', 'lg', 'md', 'sm'];
  const currentIndex = breakpointOrder.indexOf(currentBreakpoint);

  for (let i = currentIndex; i < breakpointOrder.length; i++) {
    const breakpoint = breakpointOrder[i];
    if (values[breakpoint] !== undefined) {
      return values[breakpoint];
    }
  }

  // Fallback to the smallest defined value
  for (const breakpoint of breakpointOrder.reverse()) {
    if (values[breakpoint] !== undefined) {
      return values[breakpoint];
    }
  }

  return undefined;
}

// Hook for container queries (experimental)
export function useContainerQuery(containerRef: React.RefObject<HTMLElement>) {
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setContainerSize({ width, height });
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [containerRef]);

  return containerSize;
}
