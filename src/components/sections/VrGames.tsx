import {
  NrComponentCarousel,
  NrContainer,
  NrText,
  NrTitle,
} from "@/components/ui";
import { NrEvent, NrEvents } from "@/types/event";
import { FC } from "react";
interface Game {
  game: {
    images: {};
    content: {
      title: string;
      description: string;
      games: NrEvents;
      primaryAction: {
        type: string;
        label: string;
        href: string;
      };
    };
  };
}

const VrGames: FC<Game> = ({ game }) => {
  const {
    content: { title, description, games },
  } = game;
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
            {title}
          </NrTitle>
          <NrText
            styles={{
              align: "center",
            }}
          >
            {description}
          </NrText>
        </div>
        <NrComponentCarousel item={games} component="NrEventCard" />
      </NrContainer>
    </section>
  );
};

export default VrGames;
