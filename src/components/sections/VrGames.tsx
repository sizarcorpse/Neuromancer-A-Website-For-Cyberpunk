import {
  NrComponentCarousel,
  NrContainer,
  NrText,
  NrTitle,
} from "@/components/ui";
import { gameData } from "@/mock/data";
const VrGames = () => {
  return (
    <section className="bg-nr-darker bg-[linear-gradient(0deg,rgba(9,9,11,1)_5%,rgba(9,9,121,0)_60%),linear-gradient(180deg,rgba(9,9,11,1)_5%,rgba(9,9,121,0)_50%),url('/assets/media/vr-game-bg-pattern.png')]">
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
