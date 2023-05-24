"use client";
import { NewsletterForm } from "@/components/form";
import {
  NrComponentSlider,
  NrContainer,
  NrSocialCard,
  NrText,
  NrTitle,
} from "@/components/ui";
import { socialData } from "@/mock/data";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { MdShare } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";

const newsletterData = [
  {
    image: {
      src: "/assets/images/newsletter-1.jpg",
      alt: "Newsletter 1",
    },
    description:
      "when you do not create things, you become defined by your tastes rather than ability. Programs must be written for people to read, and only incidentally for machines to execute",
    author: {
      name: "Silver Surfer",
      role: "Heralds of Galactus",
    },
  },
  {
    image: {
      src: "/assets/images/newsletter-2.jpg",
      alt: "Newsletter 1",
    },
    description:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning",
    author: {
      name: "Galactus",
      role: "The Devourer of Worlds",
    },
  },
];

const Divider = () => {
  return (
    <div className="flex items-center justify-center gap-lg">
      <div className="w-1/2 h-[0.5px] bg-gray"></div>
      <NrText
        styles={{
          size: "sm",
        }}
      >
        or
      </NrText>
      <div className="w-1/2 h-[0.5px] bg-gray"></div>
    </div>
  );
};

const NrShareButton = () => {
  return (
    <button title="Icon Button" className="rounded-full p-xs">
      <MdShare className="text-rose" size="1.25em" />
    </button>
  );
};

const LoginWithGoogle = () => {
  return (
    <button className="w-full rounded-md bg-button-gradient p-[1px]">
      <div className="flex items-center justify-center gap-lg rounded-md text-gray px-lg py-md bg-dark">
        <VscGithubInverted className="text-2xl text-light" />
        <NrText>Sign in with Github</NrText>
      </div>
    </button>
  );
};

const Newsletter = () => {
  return (
    <section className="bg-blue-dark">
      <NrContainer
        styles={{
          size: "md",
        }}
      >
        <div className="p-lg flex flex-wrap items-center justify-between bg-dark rounded-md max-w-screen-lg m-auto">
          <div className="basis-12/12 p-0 lg:basis-6/12 lg:p-12 flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-lg">
              <NrTitle component="h2">Welcome to Neuromancer</NrTitle>
              <NrText>
                Most good programmers do programming not because they expect to
                get paid or get adulation by the public, but because it is fun
                to program.
              </NrText>
              <div className="bg-blue-dark w-full py-md px-lg rounded-lg flex items-center justify-between lg:px-md">
                <NrSocialCard
                  item={socialData}
                  styles={{
                    size: "xl",
                  }}
                />
                <NrShareButton />
              </div>
              <LoginWithGoogle />
            </div>
            <Divider />
            <NewsletterForm />
          </div>
          <div className="basis-12/12 lg:basis-6/12 grow-0">
            <NrComponentSlider
              component="NrNewsletterCard"
              item={newsletterData}
            />
          </div>
        </div>
      </NrContainer>
    </section>
  );
};

export default Newsletter;
