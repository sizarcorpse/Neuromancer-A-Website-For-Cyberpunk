import { NrContainer, NrDropdown, NrText } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/svg/Logo.svg";

import { exploreData, socialData } from "@/mock/data";

type EventCardProps = {
  uuid: string;
  preset: "social" | "corporate" | "vr" | "game";
  galleries: {
    src: string;
    alt: string;
  }[];
  icon: string;
  title: string;
  status?: "Coming Soon" | "Live" | "Ended" | "Cancelled";
  description: string;
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
}[];

const Header = () => {
  return (
    <header className="absolute mx-auto w-full h-auto">
      <NrContainer>
        <div className="flex items-center justify-between">
          <div className="grow-0 shrink basis-52">
            <Link href="/">
              <Image src={Logo} width={208} height={36} alt="Neuromancer" />
            </Link>
          </div>
          <div className="flex flex-row gap-lg item items-center">
            <Link href="/support">
              <NrText>Support</NrText>
            </Link>
            <Link href="/events">
              <NrText>Event</NrText>
            </Link>
            <NrDropdown
              exploreData={exploreData as EventCardProps}
              socialData={socialData}
              actionLink="/explore"
              styles={{
                footer: true,
              }}
            />
          </div>
        </div>
      </NrContainer>
    </header>
  );
};

export default Header;
