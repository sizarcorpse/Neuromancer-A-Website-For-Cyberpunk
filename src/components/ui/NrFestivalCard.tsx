import { NrText, NrTitle } from "@/components/ui";
import Image from "next/image";
import { MdMoreHoriz, MdOutlineAccessTime, MdShare } from "react-icons/md";
interface NrCardProps {
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
  venue: string;
}

const NrCardData: NrCardProps = {
  banner: {
    src: "/assets/media/festival-card-1.jpg",
    alt: "Festival",
  },
  time: {
    start: "2 days left",
  },
  logo: {
    src: "/assets/svg/VrDjIcon.svg",
    alt: "VrDjIcon",
  },
  title: "The most awesome festival ever!",
  venue: "Virtual",
};

const NrShareButton = () => {
  return (
    <button title="Icon Button" className="rounded-full p-xs">
      <MdShare className="text-nr-light" size="1.25em" />
    </button>
  );
};

const OutlineButton = () => {
  return (
    <button className="w-full rounded-md bg-button-gradient p-[1px]">
      <div className="flex items-center justify-center gap-lg rounded-md text-nr-gray px-lg py-md bg-nr-dark">
        <NrText
          styles={{
            size: "sm",
          }}
        >
          Book it now
        </NrText>
      </div>
    </button>
  );
};

const NrFestivalCard = () => {
  const { banner, time, logo, title, venue } = NrCardData;
  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden bg-nr-darker bg-opacity-40 border border-nr-dark/40">
      <Image src={banner.src} alt={banner.alt} width={768} height={360} />
      <div className="w-full flex flex-col gap-4 p-4 backdrop-filter backdrop-blur-sm">
        <div className="inline-flex items-center justify-between gap-6">
          <div className="inline-flex items-center gap-2">
            <MdOutlineAccessTime className="text-nr-light" size="1.25em" />
            <NrText
              styles={{
                size: "sm",
              }}
            >
              {time.start}
            </NrText>
          </div>
          <div className="inline-flex items-center gap-4">
            <MdMoreHoriz className="text-nr-rose" size="1.25em" />
            <NrShareButton />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Image src={logo.src} alt={logo.alt} width={60} height={60} />
          <div className="flex flex-col items-start justify-start gap-1">
            <NrTitle component="h5">{title}</NrTitle>
            <NrText
              styles={{
                size: "sm",
              }}
            >
              @{venue}
            </NrText>
          </div>
        </div>

        <OutlineButton />
      </div>
    </div>
  );
};

export default NrFestivalCard;
