import { Box } from '@chakra-ui/react';
import CoinGraphGrid from 'components/CoinGraphGrid';
import Hero from 'components/Hero';
import PlatformInfoSection from 'components/PlatformInfoSection';
import { useCryptoService } from 'hooks/useCryptoService';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const { trendingData } = useCryptoService();

  return (
    <Box>
      <Hero
        button
        header="A trusted and secure cryptocurrency exchange."
        buttonTitle="Get Started">
        Your guide to the world of an open financial system. Get started with
        the easiest and most secure platform to buy and trade cryptocurrency.
      </Hero>
      <CoinGraphGrid data={trendingData} />
      <PlatformInfoSection />
    </Box>
  );
};

export default Home;
