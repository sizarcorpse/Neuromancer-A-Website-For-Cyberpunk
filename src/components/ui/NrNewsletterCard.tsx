import { NrText } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/svg/Logo.svg";

const NrNewsletterCard = ({ item }: { item: any }) => {
  const { image, description, author } = item;
  return (
    <article className="relative">
      <div>
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={800}
          quality={100}
          style={{
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
      </div>
      <div className="p-10 absolute bottom-0 w-full h-full flex flex-col justify-between items-end bg-[url('/assets/images/newsletter-overlay.png')] bg-center bg-no-repeat bg-cover">
        <Link href="/">
          <Image src={Logo} width={208} height={36} alt="Neuromancer" />
        </Link>
        <div className="flex flex-col gap-7">
          <NrText
            styles={{
              css: "text-xl text-justify",
            }}
          >
            {description}
          </NrText>
          <div>
            <NrText
              styles={{
                css: "text-sm text-bold mb-1",
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
