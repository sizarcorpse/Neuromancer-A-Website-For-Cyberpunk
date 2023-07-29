import { NrText } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/svg/Logo.svg";
import { FC } from "react";

interface NrNewsletterCard {
  item: {
    image: {
      src: string;
      alt: string;
    };
    review: string;
    author: {
      name: string;
      role: string;
    };
  };
}

const NrNewsletterCard: FC<NrNewsletterCard> = ({ item }) => {
  const { image, review, author } = item;
  return (
    <article className="relative">
      <div>
        <Image
          src={image.src}
          alt={image.alt}
          width={900}
          height={900}
          quality={100}
          style={{
            objectFit: "cover",
            borderRadius: "16px",
          }}
          className="h-auto aspect-square lg:aspect-auto"
        />
      </div>
      <div className="p-lg absolute bottom-0 left-0 right-0 w-full h-full flex flex-col justify-between items-end bg-[url('/assets/images/newsletter-overlay.png')] bg-center bg-no-repeat bg-cover sm:p-8 md:p-16">
        <Link href="/">
          <Image src={Logo} width={208} height={36} alt="Neuromancer" />
        </Link>
        <div className="flex flex-col gap-lg">
          <NrText
            styles={{
              css: "text-base text-justify line-clamp-5 sm:line-clamp-none sm:text-lg md:text-xl xl:text-2xl",
            }}
          >
            {review}
          </NrText>
          <div>
            <NrText
              styles={{
                css: "text-sm font-bold mb-1",
              }}
            >
              {author.name}
            </NrText>
            <NrText
              styles={{
                css: "text-xs",
              }}
            >
              {author.role}
            </NrText>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NrNewsletterCard;
