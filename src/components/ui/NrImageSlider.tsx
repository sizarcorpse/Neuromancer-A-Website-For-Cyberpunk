"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

type PrevNextButtonPropType = {
  enabled: boolean;
  onClick: () => void;
};

type NrImageSliderProps = {
  item: {
    [key: string]: string;
    src: string;
    alt: string;
  }[];
  styles?: {
    preset?: "default" | "social" | "corporate" | "vr" | "game";
  };
};

const PrevButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      type="button"
      className="embla__button embla__button--prev bg-zinc-200 p-1 rounded-full z-[1] absolute flex items-center justify-center cursor-pointer top-[50%] translate-y-[-50%] left-3"
      onClick={onClick}
      disabled={!enabled}
      title="Previous"
    >
      <MdNavigateBefore size="1.2em" />
    </button>
  );
};

const NextButton: React.FC<PrevNextButtonPropType> = (props) => {
  const { enabled, onClick } = props;

  return (
    <button
      type="button"
      className="embla__button embla__button--next bg-zinc-200 p-1 rounded-full absolute flex items-center justify-center cursor-pointer top-[50%] translate-y-[-50%] right-3"
      onClick={onClick}
      disabled={!enabled}
      title="Next"
    >
      <MdNavigateNext size="1.2em" />
    </button>
  );
};

const NrImageSlider: React.FC<NrImageSliderProps> = ({ item, styles }) => {
  const preset = styles?.preset || "default";
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    inViewThreshold: 0,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, , onSelect]);

  return (
    // h-full
    <div className="embla h-auto relative">
      <div
        className={`embla__viewport overflow-hidden w-auto h-full ${
          preset === "corporate"
            ? "rounded-t-lg lg:rounded-none lg:rounded-l-lg lg:w-[420px]"
            : "rounded-t-lg"
        }`}
        ref={emblaRef}
      >
        <div className="embla__container flex touch-pan-y flex-row h-full">
          {item.map((image: any, index: any) => (
            <div
              className="embla__slide overflow-hidden grow-0 shrink-0 basis-full relative"
              key={index}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={720}
                height={420}
                priority={true}
                className={`
                object-cover
                ${
                  preset === "corporate"
                    ? "rounded-t-lg w-full h-full lg:rounded-none lg:rounded-l-lg"
                    : "rounded-t-lg"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      {item.length > 1 && (
        <>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </>
      )}
    </div>
  );
};

export default NrImageSlider;
