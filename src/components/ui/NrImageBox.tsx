import { NrLinkButton, NrText, NrTitle } from "@/components/ui";
import Image from "next/image";

type NrImageBoxProps = {
  item: {
    image: string;
    href?: string;
    title?: string;
    description?: string;
  };
  styles: {
    preset: "default" | "box" | "round";
  };
};

const NrImageBox: React.FC<NrImageBoxProps> = ({ item, styles }) => {
  const { image, href, title, description } = item || {};
  const { preset } = styles || {};

  return (
    <article>
      <div
        className={`max-w-xs flex flex-col
      ${preset === "round" ? "gap-lg" : ""}`}
      >
        <Image
          src={image}
          alt=""
          width={640}
          height={480}
          style={{
            aspectRatio: "4/3",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: preset === "box" ? "0" : "1rem",
          }}
        />
        <div
          className={`max-w-xs flex flex-col ${
            preset === "box"
              ? "bg-darker items-start justify-start gap-lg p-xl"
              : preset === "round"
              ? "bg-transparent items-center justify-center gap-lg px-lg"
              : ""
          }`}
        >
          <NrTitle
            component="h5"
            styles={{
              align: preset === "box" ? "left" : "center",
            }}
          >
            {title}
          </NrTitle>
          <NrText
            styles={{
              size: "sm",
              align: preset === "box" ? "left" : "center",
            }}
          >
            {description}
          </NrText>
          {href && (
            <NrLinkButton
              href={href}
              styles={{
                icon: true,
              }}
            >
              Learn More
            </NrLinkButton>
          )}
        </div>
      </div>
    </article>
  );
};

export default NrImageBox;
