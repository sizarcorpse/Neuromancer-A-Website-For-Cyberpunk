import {
  NrComponentSlider,
  NrContainer,
  NrEventCard,
  NrText,
  NrTitle,
} from "@/components/ui";
import { NrEvent, NrEvents } from "@/types/event";
import { FC } from "react";

interface Corporate {
  corporate: {
    images: {};
    content: {
      title: string;
      description: string;
      events: NrEvents;
    };
  };
}

const HomeCorporate: FC<Corporate> = ({ corporate }) => {
  const {
    content: { title, description, events },
  } = corporate;
  return (
    <section className="bg-[linear-gradient(360deg,rgba(15,23,42,1)_0%,rgba(0,0,0,0)_30%),radial-gradient(#09090b_3px,#00000000_3px),linear-gradient(180deg,rgba(9,9,11,1)_50%,rgba(15,23,42,1)_100%)] bg-[40px,40px_40px,cover]">
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
        <div className="hidden md:flex flex-col items-center justify-center gap-10 md:flex-row lg:flex-col">
          {events.map((item, index) => (
            <div key={index}>
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
      </NrContainer>
    </section>
  );
};

export default HomeCorporate;
