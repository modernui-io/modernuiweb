import { useState } from "react";

import {
  HiDotsHorizontal,
  HiMenuAlt2,
  HiPlus,
  HiSearch,
  HiVideoCamera,
} from "react-icons/hi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function SecondarySideNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        className="ml-auto mr-3 mt-2 flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenuAlt2 className="size-6" />
      </button>

      <aside
        id="sidebar-contacts"
        className={`fixed right-0 top-0 z-40 h-full w-64 bg-background transition-transform lg:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto border-l border-gray-200 px-3 py-4">
          <div className="mb-4 flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400">
            <h3 className="uppercase">Contacts</h3>
            <div className="flex items-center space-x-1">
              <a
                href="#"
                className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <HiVideoCamera className="size-5" />
                <span className="sr-only">Video call</span>
              </a>
              <a
                href="#"
                className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <HiSearch className="size-5" />

                <span className="sr-only">Search contacts</span>
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    type="button"
                    className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <HiDotsHorizontal className="size-5" />
                    <span className="sr-only">Settings</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div
                    id="dropdown"
                    className="z-10 w-44 divide-y divide-gray-100 rounded"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefault"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <ul className="space-y-4 border-b border-gray-200 pb-5 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="jese avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                </div>
                Jese Leos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="bonnie avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                </div>
                Bonnie Green
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="Joseph avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
                </div>
                Joseph McFall
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    alt="Lana avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                </div>
                Lana Byrd
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Leslie avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
                </div>
                Leslie Livingston
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
                    alt="Thomas avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                </div>
                Thomas Lean
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                    alt="Robert avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                </div>
                Robert Brown
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="Micheal avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
                </div>
                Micheal Gough
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    alt="Roberta avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                </div>
                Roberta Casas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
                    alt="Neil avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                </div>
                Neil Sims
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="Joseph avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
                </div>
                Joseph Mcfall
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="relative mr-2.5">
                  <img
                    className="size-8 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    alt="Karen avatar"
                  />
                  <span className="absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
                </div>
                Karen Nelson Sims
              </a>
            </li>
          </ul>
          <div className="mb-4 flex items-center justify-between pt-5 text-sm font-medium text-gray-500 dark:text-gray-400">
            <h3 className="uppercase">Group conversations</h3>
            <a
              href="#"
              className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <HiPlus className="size-5" />
              <span className="sr-only">Create new group</span>
            </a>
          </div>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="flex -space-x-5">
                  <img
                    className="size-8 rounded-full border-2 border-white dark:border-gray-800"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese avatar"
                  />
                  <img
                    className="size-8 rounded-full border-2 border-white dark:border-gray-800"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie avatar"
                  />
                </div>
                <div>
                  <div className="font-medium leading-tight text-gray-900 dark:text-white">
                    Business Group
                  </div>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Bonnie: Wait! What test?
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="flex -space-x-5">
                  <img
                    className="size-8 rounded-full border-2 border-white dark:border-gray-800"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese avatar"
                  />
                  <img
                    className="size-8 rounded-full border-2 border-white dark:border-gray-800"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="Micheal avatar"
                  />
                </div>
                <div>
                  <div className="font-medium leading-tight text-gray-900 dark:text-white">
                    Funny Week
                  </div>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Jese: Beautiful day!
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
