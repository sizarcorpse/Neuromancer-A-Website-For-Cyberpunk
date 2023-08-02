import { DjHero, VrGames, VrSocialEvents } from "@/components/sections";
import { festival } from "@/mock/db";

const BarPage = () => {
  const { hero } = festival;
  return (
    <>
      <DjHero hero={hero} />
      <VrGames />
      <VrSocialEvents />
    </>
  );
};

export default BarPage;
