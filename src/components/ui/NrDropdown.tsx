"use client";
import { NrLinkButton, NrSocialCard, NrText, NrTitle } from "@/components/ui";
import { DropdownProps } from "@/types";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { GiDeerHead } from "react-icons/gi";

const NrDropdown: React.FC<DropdownProps> = ({
  featured,
  socials,
  actionLink,
  styles,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-nr-dark bg-opacity-20 px-4 py-2 text-sm font-medium text-nr-light hover:bg-opacity-30">
        Explore
        <GiDeerHead
          className="ml-2 -mr-1 h-5 w-5 text-nr-light hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-250"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-250"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-80 max-w-xs origin-top-right rounded-md bg-nr-blue-dark shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] sm:max-w-none sm:w-96">
          <div className="p-2">
            {featured.map((item, index) => (
              <Menu.Item key={index}>
                <div className="group flex flex-row rounded-md cursor-pointer p-2 gap-4 transition-colors duration-200 hover:bg-nr-light">
                  {item.icon && (
                    <div className="grow shrink basis-20 h-16 flex items-center justify-center bg-nr-blue-gray rounded-md sm:basis-16">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={64}
                        height={64}
                        style={{ aspectRatio: "1/1" }}
                      />
                    </div>
                  )}
                  <div className="grow shrink basis-64 sm:basis-72">
                    <NrTitle
                      component="h5"
                      styles={{
                        css: "group-hover:text-nr-rose",
                      }}
                    >
                      {item.title}
                    </NrTitle>
                    <NrText
                      styles={{
                        size: "xs",
                        color: "nr-gray",
                        css: "group-hover:text-nr-dark",
                      }}
                    >
                      {item.description}
                    </NrText>
                  </div>
                </div>
              </Menu.Item>
            ))}

            {styles?.footer && (
              <Menu.Item>
                <div
                  className={`flex flex-row items-center justify-between rounded-md cursor-pointer p-2 gap-4 bg-nr-black`}
                >
                  {actionLink && (
                    <NrLinkButton
                      href="/explore"
                      styles={{ icon: true, size: "xs" }}
                    >
                      Explore Universe
                    </NrLinkButton>
                  )}
                  {socials && <NrSocialCard item={socials} />}
                </div>
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NrDropdown;
