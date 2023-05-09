import {
  NrButton,
  NrLinkButton,
  NrList,
  NrText,
  NrTitle,
} from "@/components/ui";
import Image from "next/image";
import React from "react";
import { MdShare } from "react-icons/md";

type EventCardProps = {
  preset: "social" | "corporate" | "vr" | "game";
  images: {
    src: string;
    alt: string;
  }[];
  title: string;
  status?: "Coming Soon" | "Live" | "Ended" | "Cancelled";
  descriptions: string;
  featured?: {
    icon: string;
    title: string;
  }[];
  action?: {
    type: "link" | "button";
    label: string;
    href: string;
  };
  share?: {
    enabled: boolean;
  };
};

const NrShareButton = () => {
  return (
    <button title="Icon Button" className="rounded-full p-xs">
      <MdShare className="text-rose" size="1.25em" />
    </button>
  );
};

const NrEventCard = ({ item }: { item: EventCardProps }) => {
  const {
    preset,
    images,
    title,
    status,
    descriptions,
    featured,
    share,
    action,
  } = item;
  return (
    <article
      className={`${
        preset === "social" &&
        "max-w-sm rounded-t-lg bg-dark p-lg flex flex-col gap-md sm:p-xl sm:gap-lg"
      }
      ${
        preset === "corporate" &&
        "max-w-sm rounded-lg bg-dark flex flex-col lg:max-w-5xl lg:flex-row"
      }
      ${
        preset === "vr" &&
        "max-w-sm rounded-t-lg bg-event-vr-gradient  p-lg flex flex-col gap-md sm:p-xl sm:gap-l"
      }
      ${
        preset === "game" &&
        "max-w-sm rounded-none bg-dark p-lg flex flex-col gap-md sm:p-xl sm:gap-lg"
      }
      `}
    >
      <Image
        src={images[0].src}
        alt={images[0].alt}
        width={336}
        height={236}
        className={`
        bg-cover
        ${preset === "social" && "rounded-t-lg"}
        ${preset === "vr" && "rounded-t-lg"}
        ${preset === "game" && "rounded-t-lg"}
        ${
          preset === "corporate" &&
          "rounded-t-lg w-full max-w-[720px] max-h-[291px] lg:rounded-none lg:rounded-l-lg md:max-w-[420px]"
        }`}
      />
      <div
        className={`${preset === "social" && "flex flex-col gap-lg"}
        ${preset === "corporate" && "flex flex-col gap-lg p-xl"}
        ${preset === "vr" && "flex flex-col gap-lg"}
        ${preset === "game" && "flex flex-col gap-lg"}`}
      >
        <div className="inline-flex justify-between gap-x-sm items-center">
          <div className="inline-flex  items-center gap-md">
            <NrTitle component="h3">{title}</NrTitle>
            {status && (
              <span className="text-amber italic text-sm">{status}</span>
            )}
          </div>
          {share && share.enabled && (
            <div className="inline-flex items-center justify-center">
              <NrShareButton />
            </div>
          )}
        </div>
        <NrText>{descriptions}</NrText>
        {featured && (
          <NrList
            items={featured}
            styles={{
              listDirection: "horizontal",
              columnCount:
                preset === "social" ? 2 : preset === "corporate" ? 3 : 2,
              icon: true,
            }}
          />
        )}
        {action && (
          <div className="flex flex-row items-center justify-start mt-auto">
            {action.type === "link" && (
              <NrLinkButton
                href="#"
                styles={{
                  icon: true,
                  position: "right",
                  color: preset === "vr" ? "amber" : "light",
                }}
              >
                {action.label}
              </NrLinkButton>
            )}
            {preset === "game" && action.type === "button" && (
              <NrButton
                styles={{ icon: true, iconPosition: "end", size: "xs" }}
              >
                {action.label}
              </NrButton>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default NrEventCard;
