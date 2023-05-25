import {
  HomeCorporate,
  HomeExplore,
  HomeHero,
  Newsletter,
  Reviews,
} from "@/components/sections";
const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeExplore />
      <HomeCorporate />
      <Reviews />
      <Newsletter />
    </>
  );
};

export default Home;
