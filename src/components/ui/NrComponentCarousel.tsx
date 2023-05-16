"use client";
import useEmblaCarousel from "embla-carousel-react";
import dynamic from "next/dynamic";

type NrComponentCarouselProps = {
  item: any;
  component: string;
  styles?: {};
};

const dynamicComponents = {
  NrEventCard: dynamic(() => import("@/components/ui/NrEventCard")),
  NrDjCard: dynamic(() => import("@/components/ui/NrDjCard")),
};

const NrComponentCarousel: React.FC<NrComponentCarouselProps> = ({
  item,
  component,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    inViewThreshold: 0.1,
  });

  const Element =
    dynamicComponents[component as keyof typeof dynamicComponents];

  return (
    <div className="overflow-hidden block w-full max-w-sm sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="embla h-full relative">
        <div
          className={`embla__viewport overflow-hidden w-auto h-full`}
          ref={emblaRef}
        >
          <div className="embla__container flex touch-pan-y flex-row h-full bg-transparent">
            {item &&
              item.map((event: any, index: any) => (
                <div
                  className="embla__slide relative mr-lg bg-none bg-transparent overflow-hidden grow-0 shrink-0 basis-full sm:basis-auto"
                  key={index}
                >
                  <div className="h-full w-full">
                    <Element item={event} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NrComponentCarousel;
