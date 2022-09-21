import { Box } from '@chakra-ui/react';
import CoinGraphGrid from 'components/CoinGraphGrid';
import Hero from 'components/Hero';
import { useCryptoService } from 'hooks/useCryptoService';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const { trendingData } = useCryptoService();

  return (
    <Box>
      <Hero />
      <CoinGraphGrid data={trendingData} />
    </Box>
  );
};

export default Home;
