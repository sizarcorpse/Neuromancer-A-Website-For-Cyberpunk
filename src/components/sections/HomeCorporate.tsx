import {
  NrButton,
  NrComponentSlider,
  NrContainer,
  NrEventCard,
  NrText,
  NrTitle,
} from "@/components/ui";
import { corporateData } from "@/mock/data";
import { NrEvent, NrEvents } from "@/types/event";

const HomeCorporate = () => {
  return (
    <section className="bg-home-corporate-bgi bg-home-corporate-bgs">
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
            VR Corporate Events
          </NrTitle>
          <NrText
            styles={{
              align: "center",
            }}
          >
            Elevate your corporate events with immersive VR games that unite
            teams, enhance communication, foster strength, and drive sales
            through engaging gameplay.
          </NrText>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center gap-10 md:flex-row lg:flex-col">
          {corporateData.map((item, index) => (
            <div key={index}>
              <NrEventCard item={item as NrEvent} />
            </div>
          ))}
        </div>
        <div className="block w-full max-w-sm md:hidden">
          <NrComponentSlider
            item={corporateData as NrEvents}
            component="NrEventCard"
          />
        </div>
      </NrContainer>
    </section>
  );
};

export default HomeCorporate;
