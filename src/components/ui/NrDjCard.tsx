import { NrSocialCard, NrText, NrTitle } from "@/components/ui";
import Image from "next/image";

import { DjCard } from "@/types/dj";

const NrDjCard: React.FC<DjCard> = ({ item }) => {
  const { name, description, image, social } = item;
  return (
    <article className="w-full h-full max-w-xs rounded-lg overflow-hidden">
      <div className="w-full h-full flex flex-col items-start justify-center">
        <Image
          src={image.src}
          alt={image.alt}
          width={512}
          height={288}
          className="rounded-b-lg"
        />
        <div className="p-lg flex flex-col gap-lg bg-amber-light">
          <NrTitle
            component="h3"
            styles={{
              color: "dark",
              align: "center",
            }}
          >
            {name}
          </NrTitle>
          <NrText
            styles={{
              color: "dark",
              align: "center",
              css: "line-clamp-3",
            }}
          >
            {description}
          </NrText>
          <NrSocialCard item={social} />
        </div>
      </div>
    </article>
  );
};

export default NrDjCard;
