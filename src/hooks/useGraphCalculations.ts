import { useMemo } from 'react';
import { COLORS } from 'const/colors';

export const useGraphCalculations = (prices: [number, number][]) => {
  const dayOneClose = prices[0][1];
  const daySevenClose = prices[prices.length - 1][1];

  const color = useMemo(() => {
    if (dayOneClose > daySevenClose) {
      return COLORS.neonRed;
    }
    return COLORS.neonGreen;
  }, [dayOneClose, daySevenClose]);

  const sevenDayPercentageChange = useMemo(() => {
    const percentage = ((dayOneClose - daySevenClose) / daySevenClose) * 100;
    return Math.abs(percentage).toString().substring(0, 5);
  }, [dayOneClose, daySevenClose]);

  return { color, sevenDayPercentageChange };
};
