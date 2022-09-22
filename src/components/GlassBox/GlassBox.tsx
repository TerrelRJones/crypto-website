import { Box, BoxProps } from '@chakra-ui/react';

interface GlassBoxProps {
  boxProps?: BoxProps;
  children?: React.ReactNode;
}

export const GlassBox = ({ boxProps, children }: GlassBoxProps) => {
  return (
    <Box
      background="rgba( 75, 75, 75, 0.25 )"
      // background="beige"
      backdropFilter="auto"
      boxShadow="lg"
      blur="lg"
      borderRadius="lg"
      {...boxProps}>
      {children}
    </Box>
  );
};
