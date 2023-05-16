import {
  NrComponentCarousel,
  NrContainer,
  NrText,
  NrTitle,
} from "@/components/ui";
import { gameData } from "@/mock/data";
const VrGames = () => {
  return (
    <section className="bg-darker">
      <NrContainer
        styles={{
          size: "md",
          css: "flex flex-col gap-20 px-xl items-center lg:max-w-screen-xl",
        }}
      >
        <div className="flex flex-col gap-lg max-w-screen-md m-auto">
          <NrTitle
            component="h2"
            styles={{
              align: "center",
            }}
          >
            Games for Everyone
          </NrTitle>
          <NrText
            styles={{
              align: "center",
            }}
          >
            Travel to new dimensions with our large catalog of VR games! Jump,
            run, fly, and explore endless possibilities with friends and family
            in an immersive experience you wont forget.
          </NrText>
        </div>
        <NrComponentCarousel item={gameData} component="NrEventCard" />
      </NrContainer>
    </section>
  );
};

export default VrGames;
