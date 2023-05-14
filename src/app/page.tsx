import { Header } from "@/components/navigation";
import { HomeCorporate, HomeExplore, HomeHero } from "@/components/sections";
const Home = () => {
  return (
    <main>
      <Header />
      <HomeHero />
      <HomeExplore />
      <HomeCorporate />
    </main>
  );
};

export default Home;
