import { useQuery } from "react-query";
import { client } from "services/cryptoApi";
import { TrendingResponse } from "types/coins";
import { EndPoints } from "types/endpoints";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const { data } = useQuery<TrendingResponse, Error>(
    "trending",
    async () => await client({ endpoint: EndPoints.TRENDING })
  );

  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

export default Home;
