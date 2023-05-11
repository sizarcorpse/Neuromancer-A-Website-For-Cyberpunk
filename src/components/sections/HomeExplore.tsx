import {
  NrButton,
  NrContainer,
  NrEventCard,
  NrText,
  NrTitle,
} from "@/components/ui";
import { exploreData } from "@/mock/data";
import { NrEvent } from "@/types/event";

const HomeExplore = () => {
  return (
    <section className="bg-home-explore-bgi bg-no-repeat bg-cover">
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
            Enjoy our VR Experiences
          </NrTitle>
          <NrText
            styles={{
              align: "center",
            }}
          >
            Experience the thrill and excitement of VR gaming with our range of
            fun-filled VR experiences. Great for getting active and spending
            quality time with loved ones.
          </NrText>
        </div>
        <div className="max-w-screen-xl m-auto flex flex-col flex-wrap justify-center items-stretch gap-6 md:flex-row">
          {exploreData.map((item, index) => (
            <div
              key={index}
              className={`grow shrink justify-center md:basis-column-2-gap-4 lg:basis-column-3-gap-4`}
            >
              <NrEventCard item={item as NrEvent} />
            </div>
          ))}
        </div>
        <NrButton
          styles={{
            icon: true,
          }}
        >
          Book Now
        </NrButton>
      </NrContainer>
    </section>
  );
};

export default HomeExplore;
