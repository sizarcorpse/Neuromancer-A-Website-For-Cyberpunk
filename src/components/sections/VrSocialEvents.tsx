import {
  NrButton,
  NrComponentCarousel,
  NrComponentSlider,
  NrContainer,
  NrEventCard,
  NrText,
  NrTitle,
} from "@/components/ui";

import { NrEvent, NrEvents } from "@/types/event";
import { FC } from "react";

interface Event {
  event: {
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

const VrSocialEvents: FC<Event> = ({ event }) => {
  const {
    content: { title, description, events, primaryAction },
  } = event;

  return (
    <section className="bg-blue-dark bg-[url('/assets/media/vr-se-bg-pattern.png'),linear-gradient(0deg,rgba(9,9,11,1)_5%,rgba(9,9,121,0)_60%),linear-gradient(180deg,rgba(9,9,11,1)_5%,rgba(9,9,121,0)_50%)]">
      <NrContainer
        styles={{
          css: "flex flex-col gap-20 px-xl items-center",
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
        <div className="hidden m-auto xl:flex flex-col flex-wrap justify-center items-stretch gap-4 md:flex-row">
          {events.map((item, index) => (
            <div
              key={index}
              className={`grow-0 shrink justify-start md:basis-column-3-gap-4 lg:basis-column-3-gap-4`}
            >
              <NrEventCard item={item as NrEvent} />
            </div>
          ))}
        </div>
        <div className="w-full sm:w-auto xl:hidden">
          <NrComponentCarousel
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

export default VrSocialEvents;
