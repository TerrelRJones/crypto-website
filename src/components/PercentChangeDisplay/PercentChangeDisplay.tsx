import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { COLORS } from 'const/colors';
import { useGraphCalculations } from 'hooks/useGraphCalculations';
import { PriceResponse } from 'types/coins';

interface PercentChangeDisplayProps {
  prices: PriceResponse;
  fontSize?: number;
}

export const PercentChangeDisplay = ({
  prices,
  fontSize,
}: PercentChangeDisplayProps) => {
  const { color, sevenDayPercentageChange } = useGraphCalculations(prices);
  return (
    <Box color={color} height="100%" display="flex" alignItems="center">
      {color === COLORS.neonGreen ? (
        <TriangleUpIcon color={color} pr={1} />
      ) : (
        <TriangleDownIcon color={color} pr={1} />
      )}
      <Text fontSize={fontSize} fontWeight="medium">
        {sevenDayPercentageChange}%
      </Text>
    </Box>
  );
};
