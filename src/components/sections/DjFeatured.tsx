import {
  NrButton,
  NrComponentSlider,
  NrContainer,
  NrDjCard,
  NrText,
  NrTitle,
} from "@/components/ui";
import { djsData } from "@/mock/data";
import { Dj, DjCard, Djs } from "@/types/dj";
const DjFeatured = () => {
  return (
    <section className="bg-darker">
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
            Featured DJs
          </NrTitle>
          <NrText
            styles={{
              align: "center",
            }}
          >
            From dance hall to hip-hop and everything in between, our Featured
            DJs are the crème de la crème of the local music scene, ready to get
            you moving.
          </NrText>
        </div>
        <div className="hidden m-auto md:flex flex-col flex-wrap justify-start items-stretch gap-4 md:flex-row">
          {djsData.map((item, index) => (
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
          <NrComponentSlider item={djsData as Djs} component="NrDjCard" />
        </div>
        <NrButton
          styles={{
            icon: true,
          }}
        >
          Explore DJs
        </NrButton>
      </NrContainer>
    </section>
  );
};

export default DjFeatured;
