import {
  NrButton,
  NrComponentSlider,
  NrContainer,
  NrDjCard,
  NrText,
  NrTitle,
} from "@/components/ui";

import { Djs } from "@/types/dj";
import { FC } from "react";

interface DjFeaturedProp {
  dj: {
    images?: {};
    content: {
      title: string;
      description: string;
      djs: Djs;
      primaryAction: {
        label: string;
        type: string;
        href: string;
      };
    };
  };
}

const DjFeatured: FC<DjFeaturedProp> = ({ dj }) => {
  const {
    content: { title, description, djs, primaryAction },
  } = dj;
  return (
    <section className="bg-nr-darker bg-[linear-gradient(180deg,rgba(42,15,15,0)_50%,rgba(9,9,11,1)_100%),linear-gradient(0deg,rgba(42,15,15,0)_50%,rgba(9,9,11,1)_100%),url('/assets/media/festival-explore-background-pattern.png')] bg-no-repeat bg-center bg-cover">
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
        <div className="hidden m-auto md:flex flex-col flex-wrap justify-between items-stretch gap-4 md:flex-row">
          {djs.map((item, index) => (
            <div
              key={index}
              className={`grow-0 shrink justify-start md:basis-column-3-gap-4 lg:basis-column-4-gap-4`}
            >
              <NrDjCard item={item} />
            </div>
          ))}
        </div>
        {/* note : in order to make slider component center at mobile view,
        use the used `max-w` value on `NrComponent` */}
        <div className="block w-auto max-w-xs md:hidden">
          <NrComponentSlider item={djs} component="NrDjCard" />
        </div>
        <NrButton
          styles={{
            icon: true,
          }}
        >
          {primaryAction.label}
        </NrButton>
      </NrContainer>
    </section>
  );
};

export default DjFeatured;
