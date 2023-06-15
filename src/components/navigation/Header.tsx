import { Drawer } from "@/components/navigation";
import { NrDropdown, NrText } from "@/components/ui";
import { header } from "@/mock/db";
import { NrEvents } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/svg/Logo.svg";

const Header = () => {
  const {
    dropdown: { featuredEvents, socials, actionLink, styles },
    navigation,
  } = header;
  return (
    <header className="absolute mx-auto w-full h-auto">
      <div className="mx-auto px-6 py-xl sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl">
        <nav className="flex items-center justify-between gap-lg">
          <div className="grow-0 shrink basis-52">
            <Link href="/">
              <Image src={Logo} width={208} height={36} alt="Neuromancer" />
            </Link>
          </div>
          <div className="flex flex-row gap-lg item items-center">
            <div className="hidden flex-row items-center justify-end gap-lg md:flex">
              {navigation.map((item, index) => (
                <Link href={item.href} key={index}>
                  <NrText>{item.label}</NrText>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-end gap-lg">
              <Drawer socials={socials} actionLink={actionLink} />
              <NrDropdown
                featured={featuredEvents as NrEvents}
                socials={socials}
                actionLink={actionLink}
                styles={{
                  footer: styles.footer,
                }}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
