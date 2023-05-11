import {
  NrButton,
  NrContainer,
  NrLinkButton,
  NrText,
  NrTitle,
} from "@/components/ui";
const HomeHero = () => {
  return (
    <section className="grid min-h-screen bg-home-hero-bgi bg-no-repeat bg-home-hero-bgp bg-home-hero-bgs">
      <NrContainer
        styles={{
          css: "flex flex-col items-start justify-end gap-y-10",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full gap-y-7 md:max-w-screen-md">
          <NrTitle
            component="h1"
            styles={{
              align: "left",
            }}
          >
            Explore Endless Realities with our VR Experiences
          </NrTitle>
          <NrText
            styles={{
              align: "left",
            }}
          >
            Whether you are looking for a chill bar to host a VR party, a new
            kind of experience for dates and get-togethers, or just want to
            escape reality for a minute while having fun at it, VR Social is for
            you.
          </NrText>
        </div>
        <div className="flex items-start justify-center gap-lg flex-col sm:flex-row sm:items-center">
          <NrButton
            styles={{
              icon: false,
            }}
          >
            Rule The Universe
          </NrButton>
          <NrLinkButton
            styles={{
              icon: true,
              color: "amber",
            }}
            href="/vr"
          >
            Explore Neuromancer
          </NrLinkButton>
        </div>
      </NrContainer>
    </section>
  );
};

export default HomeHero;
