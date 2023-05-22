"use client";
import {
  NrContainer,
  NrImageBox,
  NrSocialCard,
  NrText,
  NrTitle,
} from "@/components/ui";
import { socialData } from "@/mock/data";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/svg/Logo.svg";
import { MdKeyboardArrowUp, MdShare } from "react-icons/md";

const footerData = [
  {
    title: "Explore",
    items: [
      {
        title: "VR 9D Cinema",
        href: "/",
      },
      {
        title: "VR Free Roam",
        href: "/",
      },
      {
        title: "VR Escape Room",
        href: "/",
      },
      {
        title: "VR Arcade",
        href: "/",
      },
      {
        title: "VR Free Play",
        href: "/",
      },

      {
        title: "VR Party",
        href: "/",
      },
      {
        title: "VR Corporate",
        href: "/",
      },
    ],
  },
  {
    title: "Events",
    items: [
      {
        title: "Family Fun Night",
        href: "/",
      },
      {
        title: "Family Fun Night",
        href: "/",
      },
      {
        title: "DJ Friday",
        href: "/",
      },
    ],
  },
  {
    title: "Games",
    items: [
      {
        title: "Mission Sigma",
        href: "/",
      },
      {
        title: "Arizona Sunshine",
        href: "/",
      },
      {
        title: "Quantum Arena",
        href: "/",
      },
      {
        title: "The Walking Dead",
        href: "/",
      },
      {
        title: "Jungle Quest",
        href: "/",
      },
      {
        title: "Dynamite",
        href: "/",
      },
    ],
  },
];

const NrShareButton = () => {
  return (
    <button title="Icon Button" className="rounded-full p-xs">
      <MdShare className="text-rose" size="1.25em" />
    </button>
  );
};

const NrFooterList = ({ footerData }: { footerData: any }) => {
  return (
    <div className="hidden lg:flex flex-row justify-around gap-lg">
      {footerData.map((item: any, index: any) => (
        <div key={index} className="w-full">
          <NrTitle
            component="h5"
            styles={{
              css: "mb-6",
            }}
          >
            {item.title}
          </NrTitle>
          <div className="flex flex-col gap-md">
            {item.items.map((item: any, index: any) => (
              <Link key={index} href={item.href} className="group">
                <NrText
                  styles={{
                    size: "sm",
                    css: "group-hover:text-amber",
                  }}
                >
                  {item.title}
                </NrText>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const NrFooterMobileList = ({ footerData }: { footerData: any }) => {
  return (
    <div className="grow flex flex-col gap-lg lg:hidden">
      {footerData.map((item: any, index: any) => (
        <div key={index} className="w-full">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full p-lg bg-dark rounded-md items-center justify-between">
                  <NrTitle component="h5">{item.title}</NrTitle>
                  <MdKeyboardArrowUp
                    className={`text-rose ${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>

                <Disclosure.Panel className="p-lg flex flex-col gap-md">
                  {item.items.map((item: any, index: any) => (
                    <Link key={index} href={item.href}>
                      <NrText
                        styles={{
                          size: "sm",
                        }}
                      >
                        {item.title}
                      </NrText>
                    </Link>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-darker">
      <NrContainer
        styles={{
          css: "grid grid-cols-12 gap-y-8 lg:gap-x-8 xl:gap-x-16",
        }}
      >
        <div className="col-span-12 lg:col-span-3 flex flex-col items-start gap-lg">
          <Link href="/">
            <Image src={Logo} width={208} height={36} alt="Neuromancer" />
          </Link>
          <NrText
            styles={{
              css: "text-justify",
            }}
          >
            I didn’t work hard to make Ruby perfect for everyone, because you
            feel differently from me. No language can be perfect for everyone. I
            tried to make Ruby perfect for me, but maybe it’s not perfect for
            you. The perfect language for `Guido van Rossum` is probably Python.
          </NrText>
          <div className="bg-blue-dark w-full py-md px-lg rounded-lg flex items-center justify-between lg:px-md">
            <NrSocialCard
              item={socialData}
              styles={{
                size: "lg",
              }}
            />
            <NrShareButton />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <NrFooterMobileList footerData={footerData} />
          <NrFooterList footerData={footerData} />
        </div>

        <div className="col-span-12 lg:col-span-3">
          <NrImageBox
            item={{
              image: "/assets/images/gallery-image-5.jpg",
              href: "/",
              title:
                "Your most unhappy customers are your greatest source of learning.",
            }}
            styles={{
              preset: "box",
            }}
          />
        </div>
      </NrContainer>
    </footer>
  );
};

export default Footer;
