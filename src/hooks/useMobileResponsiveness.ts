import { useMediaQuery } from '@chakra-ui/react';
import { BREAKPOINTS } from 'const/breakpoints';

export const useMobileResponsiveness = () => {
  const [isMobile, isTablet, isDesktop] = useMediaQuery([
    BREAKPOINTS.mobile,
    BREAKPOINTS.tablet,
    BREAKPOINTS.desktop,
  ]);

  const getFlexDir = () => {
    if (isTablet) return 'column';
    return 'row';
  };

  const getPadding = (x: string, y?: string) => {
    if (isDesktop) return x;
    return y;
  };

  return { getFlexDir, getPadding, isMobile, isTablet, isDesktop };
};
