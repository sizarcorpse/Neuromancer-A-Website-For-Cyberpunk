import {
  HomeCorporate,
  HomeExplore,
  HomeHero,
  Newsletter,
  Reviews,
} from "@/components/sections";

import { home, socials } from "@/mock/db";

const Home = () => {
  const { hero, explore, corporate, reviews, newsletter } = home;
  return (
    <>
      <HomeHero hero={hero} />
      <HomeExplore explore={explore as any} />
      <HomeCorporate corporate={corporate as any} />
      <Reviews reviews={reviews} />
      <Newsletter newsletter={newsletter} socials={socials} />
    </>
  );
};

export default Home;
