import { NrText, NrTitle } from "@/components/ui";
import Image from "next/image";
import {
  MdStar,
  MdStarHalf,
  MdStarOutline,
  MdThumbUpOffAlt,
} from "react-icons/md";

import { Review } from "@/types/review";

const NrLikeButton = () => {
  return (
    <button title="Icon Button" className="rounded-full p-xs">
      <MdThumbUpOffAlt className="text-rose" size="1.25em" />
    </button>
  );
};

const NrReviewCard = ({ item }: { item: Review }) => {
  const { rating, review, reviewer, avatar } = item;
  return (
    <article className="group/review h-full flex flex-col sm:flex-row items-start gap-lg bg-blue-gray rounded-lg p-lg max-w-xl cursor-pointer transition-all duration-300 hover:bg-white">
      <div className="basis-[64px]">
        <Image
          src={avatar}
          alt="review"
          width={64}
          height={64}
          style={{
            aspectRatio: "1/1",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "100%",
          }}
        />
      </div>
      <div className="grow flex flex-col justify-start items-start gap-md basis-[calc(100%-64px-16px)]">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start items-center">
            {Array.from({ length: 5 }, (_, i) => {
              const star = i + 1;
              if (rating >= star) {
                return <MdStar key={i} className="text-base text-amber" />;
              } else if (rating >= star - 0.5) {
                return <MdStarHalf key={i} className="text-base text-amber" />;
              } else {
                return (
                  <MdStarOutline key={i} className="text-base text-amber" />
                );
              }
            })}
          </div>
          <NrLikeButton />
        </div>
        <NrText
          styles={{
            css: "line-clamp-4 transition-all duration-300 group-hover/review:text-dark",
          }}
        >
          {review}
        </NrText>
        <NrTitle
          component="h5"
          styles={{
            css: "transition-all duration-300 group-hover/review:text-dark",
          }}
        >
          {reviewer}
        </NrTitle>
      </div>
    </article>
  );
};

export default NrReviewCard;
