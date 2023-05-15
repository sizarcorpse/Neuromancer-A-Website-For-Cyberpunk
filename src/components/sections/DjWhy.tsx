import {
  NrButton,
  NrContainer,
  NrLinkButton,
  NrList,
  NrText,
  NrTitle,
} from "@/components/ui";
import Image from "next/image";

const listData = [
  {
    icon: "",
    title: "Relief stress and relax.",
  },
  {
    icon: "",
    title: "Enjoy live and fun entertainment.",
  },
  {
    icon: "",
    title: "Socialize and build your network.",
  },
  {
    icon: "",
    title: "Move and exercise with thrilling VR games.",
  },
];

const DjWhy = () => {
  return (
    <section className="grid items-center justify-center bg-darker">
      <NrContainer>
        <div className="flex flex-wrap items-center gap-6 max-w-screen-lg lg:gap-10">
          <div className="basis-full lg:basis-[512px]">
            <Image
              src="/assets/images/gallery-image-1.jpg"
              width={768}
              height={432}
              alt="Neuromancer VR"
              className="rounded-3xl"
            />
          </div>
          <div className="basis-full lg:basis-[calc(100%-512px-40px)] flex flex-col items-start justify-center gap-lg">
            <NrTitle
              component="h2"
              styles={{
                color: "light",
              }}
            >
              The perfect way to enter your weekends
            </NrTitle>
            <NrText
              styles={{
                color: "gray",
              }}
            >
              Kick-off your weekends in positive energy. Dance and game the
              night away with electrifying beats from hottest DJs in Denver.
            </NrText>
            <NrList items={listData} />
            <NrLinkButton href="/vr" styles={{ color: "rose", icon: true }}>
              Explore Neuromancer
            </NrLinkButton>
          </div>
        </div>
      </NrContainer>
    </section>
  );
};

export default DjWhy;
