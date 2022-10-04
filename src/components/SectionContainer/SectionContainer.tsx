import { Box } from '@chakra-ui/react';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';

interface SectionContainerProps {
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
}) => {
  const { isMobile } = useMobileResponsiveness();
  return <Box p={isMobile ? '20px 0px' : '40px 0px'}>{children}</Box>;
};
