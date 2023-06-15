"use client";
import { NrLinkButton, NrSocialCard } from "@/components/ui";
import { DrawerProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/assets/svg/Logo.svg";
import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Drawer: React.FC<DrawerProps> = ({ actionLink, socials }) => {
  let [isOpenDrawer, setOpenDrawer] = useState(false);

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <div className="md:hidden">
      <button
        title="Open Menu"
        type="button"
        onClick={handleOpenDrawer}
        className="inline-flex w-full justify-center px-2 py-2 text-sm font-medium text-nr-light hover:bg-opacity-30"
      >
        <GiHamburgerMenu className="text-lg" aria-hidden="true" />
      </button>

      <Transition appear show={isOpenDrawer} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 overflow-hidden lg:hidden"
          onClose={handleCloseDrawer}
        >
          <div className="pointer-events-none absolute inset-0 z-40 flex translate-x-0">
            <div className="pointer-events-auto min-w-0 max-w-screen-md flex-1 backdrop-blur backdrop-filter firefox:bg-opacity-90 pr-10">
              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-full h-full max-w-md transform overflow-hidden bg-nr-blue-dark p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-full h-full flex flex-col items-start">
                    <div className="grow">
                      <Link href="/">
                        <Image
                          src={Logo}
                          width={208}
                          height={36}
                          alt="Neuromancer"
                        />
                      </Link>
                    </div>
                    <div
                      className={`w-full flex flex-row items-center justify-between rounded-md cursor-pointer p-2 gap-4 bg-nr-black`}
                    >
                      {actionLink && (
                        <NrLinkButton
                          href="/explore"
                          styles={{ icon: true, size: "xs" }}
                        >
                          Explore Universe
                        </NrLinkButton>
                      )}
                      {<NrSocialCard item={socials} />}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Drawer;
