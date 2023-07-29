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
import { FC } from "react";

import { MdShare } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";

interface Newsletter {
  newsletter: {
    image?: {};
    content: {
      title: string;
      description: string;
      reviews: {
        image: {
          src: string;
          alt: string;
        };
        review: string;
        author: {
          name: string;
          role: string;
        };
      }[];
    };
  };
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
    soundcloud: string;
  };
}

const Divider = () => {
  return (
    <div className="flex items-center justify-center gap-lg">
      <div className="w-1/2 h-[0.5px] bg-nr-gray"></div>
      <NrText
        styles={{
          size: "sm",
        }}
      >
        or
      </NrText>
      <div className="w-1/2 h-[0.5px] bg-nr-gray"></div>
    </div>
  );
};

const NrShareButton = () => {
  return (
    <button title="Icon Button" className="rounded-full p-xs">
      <MdShare className="text-nr-rose" size="1.25em" />
    </button>
  );
};

const LoginWithGithub = () => {
  return (
    <button className="w-full rounded-md bg-button-gradient p-[1px]">
      <div className="flex items-center justify-center gap-lg rounded-md text-nr-gray px-lg py-md bg-nr-dark">
        <VscGithubInverted className="text-2xl text-nr-light" />
        <NrText>Connect with Github</NrText>
      </div>
    </button>
  );
};

const Newsletter: FC<Newsletter> = ({ newsletter, socials }) => {
  const {
    content: { title, description, reviews },
  } = newsletter;

  return (
    <section className="bg-[linear-gradient(180deg,rgba(15,23,42,1)_45%,rgba(9,9,11,1)_100%)]">
      <NrContainer
        styles={{
          size: "md",
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-y-lg rounded-md lg:bg-nr-dark lg:p-lg">
          <div className="basis-12/12 order-1 p-lg bg-nr-dark rounded-md flex flex-col justify-center gap-y-10 sm:p-16 md:p-24 lg:basis-6/12 lg:order-0 lg:bg-none lg:rounded-none lg:p-12 lg:gap-y-12 xl:p-24">
            <div className="flex flex-col gap-y-lg">
              <NrTitle component="h2">{title}</NrTitle>
              <NrText
                styles={{
                  css: "text-justify",
                }}
              >
                {description}
              </NrText>
              <div className="bg-nr-blue-dark w-full py-md px-lg rounded-lg flex items-center justify-between lg:px-md">
                <NrSocialCard
                  item={socials}
                  styles={{
                    size: "xl",
                  }}
                />
                <NrShareButton />
              </div>
              <LoginWithGithub />
            </div>
            <Divider />
            <NewsletterForm />
          </div>
          <div className="basis-12/12 order-0 lg:basis-6/12 lg:order-1">
            <NrComponentSlider component="NrNewsletterCard" item={reviews} />
          </div>
        </div>
      </NrContainer>
    </section>
  );
};

export default Newsletter;
