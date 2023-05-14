import {
  NrButton,
  NrImageSlider,
  NrLinkButton,
  NrList,
  NrText,
  NrTitle,
} from "@/components/ui";
import { NrEvent } from "@/types/event";
import React from "react";
import { MdShare } from "react-icons/md";

const NrShareButton = () => {
  return (
    <button title="Icon Button" className="rounded-full p-xs">
      <MdShare className="text-rose" size="1.25em" />
    </button>
  );
};

const NrEventCard = ({ item }: { item: NrEvent }) => {
  const {
    preset,
    galleries,
    title,
    status,
    description,
    features,
    share,
    action,
  } = item;
  return (
    <article
      className={`_ev_ dropdown-shadow h-full ${
        preset === "social" &&
        "w-full max-w-sm rounded-t-lg bg-dark p-lg flex flex-col gap-md sm:p-xl sm:gap-lg"
      }
      ${
        preset === "corporate" &&
        "w-full max-w-sm rounded-lg bg-dark flex flex-col lg:max-w-5xl lg:flex-row"
      }
      ${
        preset === "vr" &&
        "w-full max-w-sm rounded-lg bg-event-vr-gradient p-lg flex flex-col gap-lg sm:p-xl md:max-w-md"
      }
      ${
        preset === "game" &&
        "w-full max-w-sm rounded-none bg-dark p-lg flex flex-col gap-md sm:p-xl sm:gap-lg"
      }
      `}
    >
      {/* <Image
        src={images[0].src}
        alt={images[0].alt}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
        priority={true}
        className={`
        bg-cover
        ${
          preset === "corporate"
            ? "rounded-t-lg w-full max-h-[291px] lg:rounded-none lg:rounded-l-lg md:max-w-[420px]"
            : "rounded-t-lg"
        }`}
      /> */}
      <NrImageSlider item={galleries} styles={{ preset }} />
      <div
        className={`h-full ${preset === "social" && "flex flex-col gap-lg"}
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
        <NrText
          styles={{
            css: "line-clamp-3",
          }}
        >
          {description}
        </NrText>
        {features && (
          <NrList
            items={features}
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
                  placement: "right",
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
