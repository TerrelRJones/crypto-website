import { useCryptoService } from 'hooks/useCryptoService';

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const { trendingData } = useCryptoService();

  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

export default Home;
