import {
  NrButton,
  NrComponentSlider,
  NrContainer,
  NrFestivalCard,
  NrText,
  NrTitle,
} from "@/components/ui";
import { FC } from "react";

interface DjFestivalProps {
  festivals: {
    image?: {};
    content: {
      title: string;
      description: string;
      festivals: {
        banner: {
          src: string;
          alt: string;
        };
        time: {
          start: string;
        };
        logo: {
          src: string;
          alt: string;
        };
        title: string;
        venue?: string;
      }[];
    };
  };
}

const DjFestival: FC<DjFestivalProps> = ({ festivals }) => {
  const {
    content: { title, description, festivals: events },
  } = festivals;
  return (
    <section className="flex justify-center items-center min-h-screen bg-[linear-gradient(0deg,rgba(9,9,11,1)_5%,rgba(9,9,121,0)_60%),linear-gradient(180deg,rgba(9,9,11,1)_5%,rgba(9,9,121,0)_50%),url('/assets/media/festival-background.jpg')] bg-center bg-cover">
      <NrContainer
        styles={{
          size: "md",
          css: "flex flex-col gap-20 px-xl items-center justify-center lg:max-w-screen-xl",
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
        <div className="hidden max-w-screen-xl m-auto md:flex flex-col flex-wrap justify-center items-stretch gap-6 md:flex-row">
          {events.map((item, index) => (
            <div
              key={index}
              className={`grow shrink justify-center md:basis-column-2-gap-4 lg:basis-column-3-gap-4`}
            >
              <NrFestivalCard item={item} />
            </div>
          ))}
        </div>
        <div className="block w-full max-w-sm md:hidden">
          <NrComponentSlider item={events} component="NrFestivalCard" />
        </div>
      </NrContainer>
    </section>
  );
};

export default DjFestival;
