import {
  NrContainer,
  NrLinkButton,
  NrList,
  NrText,
  NrTitle,
} from "@/components/ui";
import Image from "next/image";
import { FC } from "react";

interface DjWhyProps {
  why: {
    images: {};
    content: {
      title: string;
      description: string;
      features: {
        icon: string;
        title: string;
      }[];
      primaryAction: {
        type: string;
        label: string;
        href: string;
      };
    };
  };
}

const DjWhy: FC<DjWhyProps> = ({ why }) => {
  const {
    content: { title, description, features, primaryAction },
  } = why;
  return (
    <section className="grid items-center justify-center bg-nr-darker bg-[linear-gradient(180deg,rgba(42,15,15,0)_50%,rgba(9,9,11,1)_100%),linear-gradient(0deg,rgba(42,15,15,0)_50%,rgba(9,9,11,1)_100%),url('/assets/media/festival-explore-background-bg.png')]">
      <NrContainer
        styles={{
          size: "md",
        }}
      >
        <div className="flex flex-wrap items-center gap-6 max-w-6xl lg:gap-10">
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
                css: "max-w-[20ch]",
              }}
            >
              {title}
            </NrTitle>
            <NrText
              styles={{
                color: "nr-gray",
              }}
            >
              {description}
            </NrText>
            <NrList items={features} />
            <NrLinkButton href="/vr" styles={{ color: "nr-rose", icon: true }}>
              {primaryAction.label}
            </NrLinkButton>
          </div>
        </div>
      </NrContainer>
    </section>
  );
};

export default DjWhy;
