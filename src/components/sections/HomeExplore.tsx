import {
  NrButton,
  NrComponentSlider,
  NrContainer,
  NrEventCard,
  NrText,
  NrTitle,
} from "@/components/ui";
import { NrEvent, NrEvents } from "@/types/event";
import { FC } from "react";

interface Explore {
  explore: {
    images: {};
    content: {
      title: string;
      description: string;
      events: NrEvents;
      primaryAction: {
        type: string;
        label: string;
        href: string;
      };
    };
  };
}

const HomeExplore: FC<Explore> = ({ explore }) => {
  const {
    content: { title, description, events, primaryAction },
  } = explore;

  return (
    <section
      className={`bg-[url("/assets/media/home-explore-background-pattern.png"),linear-gradient(180deg,rgba(15,23,42,1)_50%,rgba(9,9,11,1)_100%)] bg-no-repeat bg-cover`}
    >
      <NrContainer
        styles={{
          size: "md",
          css: "flex flex-col gap-20 px-xl items-center justify-center lg:max-w-screen-xl",
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
        <div className="hidden max-w-screen-xl m-auto md:flex flex-col flex-wrap justify-center items-stretch gap-6 md:flex-row">
          {events.map((item, index) => (
            <div
              key={index}
              className={`grow shrink justify-center md:basis-column-2-gap-4 lg:basis-column-3-gap-4`}
            >
              <NrEventCard item={item as NrEvent} />
            </div>
          ))}
        </div>
        <div className="block w-full max-w-sm md:hidden">
          <NrComponentSlider
            item={events as NrEvents}
            component="NrEventCard"
          />
        </div>
        {primaryAction && (
          <NrButton
            styles={{
              icon: true,
            }}
          >
            {primaryAction.label}
          </NrButton>
        )}
      </NrContainer>
    </section>
  );
};

export default HomeExplore;
