import {
  NrButton,
  NrContainer,
  NrLinkButton,
  NrText,
  NrTitle,
} from "@/components/ui";
import { FC } from "react";

interface DjHeroProps {
  hero: {
    images: {
      background: string;
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

const DjHero: FC<DjHeroProps> = ({ hero }) => {
  const {
    images,
    content: { title, description, primaryAction, secondaryAction },
  } = hero;
  return (
    <section
      className={`grid items-center justify-center min-h-screen bg-[linear-gradient(180deg,rgba(15,23,42,0.4)_60%,rgba(9,9,11,1)_100%),url('/assets/media/festival-hero-background.jpg')] bg-bottom bg-cover bg-no-repeat`}
    >
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
        <div className="flex items-center justify-center gap-lg flex-col sm:flex-row sm:items-center">
          <NrButton
            styles={{
              icon: true,
            }}
          >
            {primaryAction.label}
          </NrButton>
          <NrLinkButton
            styles={{
              icon: true,
              color: "nr-amber",
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

export default DjHero;
