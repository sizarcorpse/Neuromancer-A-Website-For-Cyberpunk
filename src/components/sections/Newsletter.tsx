"use client";
import {
  NrComponentSlider,
  NrContainer,
  NrText,
  NrTitle,
} from "@/components/ui";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

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

const Newsletter = () => {
  return (
    <section className="bg-blue-dark ">
      <NrContainer
        styles={{
          size: "md",
        }}
      >
        <div className="p-lg flex items-center justify-between bg-dark rounded-md">
          <div className="basis-6/12 p-8">
            <div>
              <NrTitle component="h2">Welcome to Neuromancer</NrTitle>
              <NrText>
                Most good programmers do programming not because they expect to
                get paid or get adulation by the public, but because it is fun
                to program.
              </NrText>
            </div>
          </div>
          <div className="basis-6/12 grow-0">
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
