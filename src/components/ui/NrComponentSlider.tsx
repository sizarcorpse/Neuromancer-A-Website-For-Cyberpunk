"use client";
import useEmblaCarousel from "embla-carousel-react";
import dynamic from "next/dynamic";

type NrImageSliderProps = {
  item: any;
  component: string;
  styles?: {};
};

const dynamicComponents = {
  NrEventCard: dynamic(() => import("@/components/ui/NrEventCard")),
  NrDjCard: dynamic(() => import("@/components/ui/NrDjCard")),
  NrNewsletterCard: dynamic(() => import("@/components/ui/NrNewsletterCard")),
  NrFestivalCard: dynamic(() => import("@/components/ui/NrFestivalCard")),
};

const NrComponentSlider: React.FC<NrImageSliderProps> = ({
  item,
  component,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    inViewThreshold: 0.1,
  });
  const Element =
    dynamicComponents[component as keyof typeof dynamicComponents];

  return (
    <div className="embla h-full relative">
      <div
        className={`embla__viewport overflow-hidden w-auto h-full`}
        ref={emblaRef}
      >
        <div className="embla__container flex touch-pan-y flex-row h-full bg-transparent">
          {item &&
            item.map((event: any, index: any) => (
              <div
                className="embla__slide bg-none bg-transparent overflow-hidden grow-0 shrink-0 basis-full relative mr-lg"
                key={index}
              >
                <div className="h-full">
                  <Element item={event} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NrComponentSlider;
