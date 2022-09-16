interface HomeProps {
  children?: React.ReactNode;
}

const Home = ({ children }: HomeProps) => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <div>{children}</div>
    </div>
  );
};

export default Home;
