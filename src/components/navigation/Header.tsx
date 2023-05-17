import { Drawer } from "@/components/navigation";
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
        <div className="flex items-center justify-between gap-lg">
          <div className="grow-0 shrink basis-52">
            <Link href="/">
              <Image src={Logo} width={208} height={36} alt="Neuromancer" />
            </Link>
          </div>
          <div className="flex flex-row gap-lg item items-center">
            <div className="hidden flex-row items-center justify-end gap-lg md:flex">
              <Link href="/dj">
                <NrText>Festival</NrText>
              </Link>
              <Link href="/vr">
                <NrText>Virtual Reality</NrText>
              </Link>
            </div>
            <div className="flex items-center justify-end gap-lg">
              <NrDropdown
                exploreData={exploreData as EventCardProps}
                socialData={socialData}
                actionLink="/explore"
                styles={{
                  footer: true,
                }}
              />
              <Drawer />
            </div>
          </div>
        </div>
      </NrContainer>
    </header>
  );
};

export default Header;
