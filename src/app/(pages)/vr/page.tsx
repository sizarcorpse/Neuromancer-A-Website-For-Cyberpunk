import { VrGames, VrHero, VrSocialEvents } from "@/components/sections";
import { vr } from "@/mock/db";

const BarPage = () => {
  const { hero, game, event } = vr;
  return (
    <>
      <VrHero hero={hero} />
      <VrGames game={game as any} />
      <VrSocialEvents event={event as any} />
    </>
  );
};

export default BarPage;
