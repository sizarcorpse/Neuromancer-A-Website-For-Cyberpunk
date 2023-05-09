import { NrSocialCard, NrText, NrTitle } from "@/components/ui";
import Image from "next/image";

type NrDjCardProps = {
  item: {
    name: string;
    descriptions: string;
    image: {
      src: string;
      alt: string;
    };
    social: any;
  };
  styles?: {};
};

const NrDjCard: React.FC<NrDjCardProps> = ({ item }) => {
  const { name, descriptions, image, social } = item;
  return (
    <article className="w-full h-full max-w-[261px] bg-amber-light rounded-lg">
      <div className="w-full h-full flex flex-col">
        <Image
          src={image.src}
          alt={image.alt}
          width={261}
          height={180}
          className="rounded-lg object-cover max-h-[180px]"
        />
        <div className="p-lg flex flex-col gap-lg">
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
            }}
          >
            {descriptions}
          </NrText>
          <NrSocialCard item={social} />
        </div>
      </div>
    </article>
  );
};

export default NrDjCard;
