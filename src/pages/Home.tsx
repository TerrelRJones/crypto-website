import { Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { client } from 'services/cryptoApi';
import { TrendingResponse } from 'types/coins';
import { EndPoints } from 'types/endpoints';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const { data } = useQuery<TrendingResponse, Error>(
    'trending',
    async () => await client({ endpoint: EndPoints.TRENDING }),
  );

  return (
    <Box>
      <h1>HOME PAGE</h1>
    </Box>
  );
};

export default Home;
