import {
  NrButton,
  NrComponentCarousel,
  NrComponentSlider,
  NrContainer,
  NrEventCard,
  NrText,
  NrTitle,
} from "@/components/ui";
import { socialEventData } from "@/mock/data";
import { NrEvent } from "@/types/event";

const VrSocialEvents = () => {
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
            Upcoming Events
          </NrTitle>
          <NrText
            styles={{
              align: "center",
            }}
          >
            Looking for a fun and active way to unwind on the weekends? Our
            Social Events feature heart-pumping VR games, DJs, karaoke, and more
            to enjoy with your friends and family.
          </NrText>
        </div>
        <div className="hidden m-auto xl:flex flex-col flex-wrap justify-center items-stretch gap-4 md:flex-row">
          {socialEventData.map((item, index) => (
            <div
              key={index}
              className={`grow-0 shrink justify-start md:basis-column-3-gap-4 lg:basis-column-3-gap-4`}
            >
              <NrEventCard item={item as NrEvent} />
            </div>
          ))}
        </div>
        <div className="w-full sm:w-auto xl:hidden">
          <NrComponentCarousel item={socialEventData} component="NrEventCard" />
        </div>
        <NrButton
          styles={{
            icon: true,
          }}
        >
          Reserve A Seat
        </NrButton>
      </NrContainer>
    </section>
  );
};

export default VrSocialEvents;
