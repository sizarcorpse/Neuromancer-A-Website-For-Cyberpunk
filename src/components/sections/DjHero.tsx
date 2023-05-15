import {
  NrButton,
  NrContainer,
  NrLinkButton,
  NrText,
  NrTitle,
} from "@/components/ui";
const DjHero = () => {
  return (
    <section className="grid items-center justify-center min-h-screen bg-cover bg-dj-hero-bgi bg-no-repeat">
      <NrContainer
        styles={{
          css: "flex flex-col items-center justify-end gap-y-10",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full gap-y-7 md:max-w-screen-md">
          <NrTitle
            component="h1"
            styles={{
              align: "center",
            }}
          >
            DJ Fridays: Pre-party like you’ve never experienced before
          </NrTitle>
          <NrText
            styles={{
              align: "center",
            }}
          >
            Tired of the same old routine every week? Spice things up with DJ
            Fridays - the perfect way to wrap off your week in style!
          </NrText>
        </div>
        <div className="flex items-center justify-center gap-lg flex-col sm:flex-row sm:items-center">
          <NrButton
            styles={{
              icon: true,
            }}
          >
            Beyond The Universe
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

export default DjHero;
