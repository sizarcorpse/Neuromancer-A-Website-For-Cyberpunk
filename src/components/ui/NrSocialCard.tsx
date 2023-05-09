import Link from "next/link";
import { cloneElement } from "react";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiSoundcloudFill,
  RiTwitterFill,
} from "react-icons/ri";

type NrSocialCardProps = {
  item: {
    [key: string]: string | undefined;
    facebook?: string | undefined;
    github?: string;
    instagram?: string;
    soundcloud?: string;
    twitter?: string;
  };
};

const socialIcon = [
  {
    name: "facebook",
    icon: <RiFacebookFill />,
  },
  {
    name: "github",
    icon: <RiGithubFill />,
  },
  {
    name: "instagram",
    icon: <RiInstagramFill />,
  },
  {
    name: "soundcloud",
    icon: <RiSoundcloudFill />,
  },
  {
    name: "twitter",
    icon: <RiTwitterFill />,
  },
];

const NrSocialCard: React.FC<NrSocialCardProps> = ({ item }) => {
  return (
    <div className="flex flex-row gap-md items-center justify-center">
      {Object.keys(item).map((key: string, index) => (
        <Link
          key={index}
          href={item[key] || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full p-sm "
        >
          {cloneElement(socialIcon[index].icon, {
            size: "1em",
            className:
              "text-rose scale-100 group-hover:scale-150 transition-all duration-300",
          })}
        </Link>
      ))}
    </div>
  );
};

export default NrSocialCard;
