import {
  NrButton,
  NrContainer,
  NrLinkButton,
  NrText,
  NrTitle,
} from "@/components/ui";

interface Hero {
  hero: {
    images: {
      background?: string;
    };
    content: {
      title: string;
      description: string;
      primaryAction: {
        type: string;
        label: string;
        href: string;
      };
      secondaryAction: {
        type: string;
        label: string;
        href: string;
      };
    };
  };
}

const HomeHero: React.FC<Hero> = ({ hero }) => {
  const {
    content: { title, description, primaryAction, secondaryAction },
  } = hero;

  return (
    <section
      className={`grid min-h-screen bg-[linear-gradient(0deg,rgba(15,23,42,1)_0%,rgba(9,9,121,0)_40%),url('/assets/images/bg-p.svg'),url('/assets/media/home-hero-background.jpg')] bg-center bg-[100%_100%,cover,cover] bg-no-repeat`}
    >
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
              css: "text-4xl font-bold",
            }}
          >
            {title}
          </NrTitle>
          <NrText
            styles={{
              align: "left",
            }}
          >
            {description}
          </NrText>
        </div>
        <div className="flex items-start justify-center gap-lg flex-col sm:flex-row sm:items-center">
          <NrButton
            styles={{
              icon: false,
            }}
          >
            {primaryAction.label}
          </NrButton>
          <NrLinkButton
            styles={{
              icon: true,
              color: "amber",
            }}
            href="/vr"
          >
            {secondaryAction.label}
          </NrLinkButton>
        </div>
      </NrContainer>
    </section>
  );
};

export default HomeHero;
