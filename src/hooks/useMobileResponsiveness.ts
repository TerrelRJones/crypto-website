import { useMediaQuery } from '@chakra-ui/react';
import { BREAKPOINTS } from 'const/breakpoints';

export const useMobileResponsiveness = () => {
  const [isMobile, isTablet, isDesktop] = useMediaQuery([
    BREAKPOINTS.mobile,
    BREAKPOINTS.tablet,
    BREAKPOINTS.desktop,
  ]);

  return { isMobile, isTablet, isDesktop };
};
