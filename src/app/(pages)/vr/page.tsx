import { VrGames, VrHero, VrSocialEvents } from "@/components/sections";
import { festival } from "@/mock/db";

const BarPage = () => {
  const { hero } = festival;
  return (
    <>
      <VrHero hero={hero} />
      <VrGames />
      <VrSocialEvents />
    </>
  );
};

export default BarPage;
