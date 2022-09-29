import {
  Box,
  Center,
  Circle,
  Divider,
  Flex,
  Icon,
  Select,
  Text,
} from '@chakra-ui/react';
import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import GlassBox from 'components/GlassBox';
import { COLORS } from 'const/colors';

interface BuyCryptoProps {
  someProp?: any;
}

const mockCurrencyList = ['USD', 'KRW', 'EUR'];

const mockCoinList = [
  {
    XRP: {
      usd: 0.02831284,
    },
  },
  {
    BTC: {
      usd: 19502.24,
    },
  },
  {
    ETH: {
      usd: 12.74,
    },
  },
];

const GhostDivider = () => {
  return (
    <Center height={5}>
      <Divider orientation="vertical" borderColor={COLORS.ghostAccentBlue} />
    </Center>
  );
};

interface ConversionBarProps {
  icon?: any;
  price?: number;

  options?: string[];
}

const ConversionBar = ({ icon, price, options }: ConversionBarProps) => {
  return (
    <Center
      border=".01em solid"
      borderColor="rgba(75, 77, 89, 0.5)"
      borderRadius={50}
      background="rgba(75, 75, 75, 0.176)"
      backdropFilter="auto"
      blur="lg"
      mb={6}
      p={3}>
      <Text color="white" flexGrow={2}>
        {price}
      </Text>
      <GhostDivider />
      <Center>
        <Box px={2}>
          <Circle size="25px" bg={COLORS.primaryBlue} color="white">
            {icon}
          </Circle>
        </Box>

        <Select color="white" minW={90} variant="unstyled">
          {options?.map(option => (
            <option value={option}>{option}</option>
          ))}
        </Select>
      </Center>
    </Center>
  );
};

const BuyCrypto = ({ someProp }: BuyCryptoProps) => {
  return (
    <GlassBox boxProps={{ p: 10 }}>
      <Center alignItems="center" justifyContent="space-between" px={10} mb={5}>
        <Text color={COLORS.primaryBlue} fontWeight="bold">
          Buy
        </Text>
        <GhostDivider />
        <Text color={COLORS.ghostAccentBlue} fontWeight="bold">
          Sell
        </Text>
      </Center>
      <Center>
        <Text color={COLORS.white}>1 BTC is roughly</Text>
      </Center>
      <Center mb={10}>
        <Text color={COLORS.white} fontWeight="bold">
          53,260.20
        </Text>
        <Text color={COLORS.accentBlue} pl={3}>
          USD
        </Text>
      </Center>
      <ConversionBar price={5000} options={mockCurrencyList} />
      <ConversionBar
        price={0.8511}
        options={mockCoinList.map(option => Object.keys(option)[0])}
      />
      <Button buttonType={ButtonType.PRIMARY}>Buy Now</Button>
    </GlassBox>
  );
};

export default BuyCrypto;
