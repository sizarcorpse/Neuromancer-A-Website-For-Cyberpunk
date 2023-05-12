"use client";
import { NrLinkButton, NrSocialCard, NrText, NrTitle } from "@/components/ui";
import { DropdownExplore } from "@/types/dropdown";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { GiDeerHead } from "react-icons/gi";

const NrDropdown: React.FC<DropdownExplore> = ({
  exploreData,
  socialData,
  actionLink,
  styles,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30">
        Explore
        <GiDeerHead
          className="ml-2 -mr-1 h-5 w-5 text-light hover:text-violet-100"
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
        <Menu.Items className="absolute right-0 mt-2 w-96 origin-top-right rounded-md bg-blue-dark shadow-dropdown-shadow ">
          <div className="p-2">
            {exploreData.map((item, index) => (
              <Menu.Item key={index}>
                <div className="group flex flex-row rounded-md cursor-pointer p-2 gap-4 transition-colors duration-200 hover:bg-light">
                  {item.icon && (
                    <div className="grow shrink basis-16 h-16 flex items-center justify-center bg-blue-gray rounded-md">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={64}
                        height={64}
                        style={{ aspectRatio: "1/1" }}
                      />
                    </div>
                  )}
                  <div className="grow shrink basis-72">
                    <NrTitle
                      component="h5"
                      styles={{
                        css: "group-hover:text-rose",
                      }}
                    >
                      {item.title}
                    </NrTitle>
                    <NrText
                      styles={{
                        size: "xs",
                        color: "gray",
                        css: "group-hover:text-dark",
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
                  className={`flex flex-row items-center justify-between rounded-md cursor-pointer p-2 gap-4 bg-slate-950`}
                >
                  {actionLink && (
                    <NrLinkButton
                      href="/explore"
                      styles={{ icon: true, size: "xs" }}
                    >
                      Explore Universe
                    </NrLinkButton>
                  )}
                  {socialData && <NrSocialCard item={socialData} />}
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
