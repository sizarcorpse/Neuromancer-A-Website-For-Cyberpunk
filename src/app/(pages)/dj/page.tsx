import { DjFeatured, DjFestival, DjHero, DjWhy } from "@/components/sections";
import { festival } from "@/mock/db";

const BarPage = () => {
  const { hero, why, dj, festivals } = festival;
  return (
    <>
      <DjHero hero={hero} />
      <DjWhy why={why} />
      <DjFeatured dj={dj} />
      <DjFestival festivals={festivals} />
    </>
  );
};

export default BarPage;
