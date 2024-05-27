import { useState } from "react";

import {
  HiAcademicCap,
  HiBookOpen,
  HiClipboardList,
  HiCollection,
  HiColorSwatch,
  HiIdentification,
  HiLightBulb,
  HiMenuAlt2,
  HiPlus,
  HiPlusCircle,
  HiPresentationChartBar,
  HiSelector,
  HiShoppingCart,
  HiSpeakerphone,
  HiUsers,
  HiX,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";

export function UserSwitchSideNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100"
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenuAlt2 className="size-6" />
      </button>

      <aside
        id="default-sidebar"
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-background transition-transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidenav"
      >
        <Button
          variant={"ghost"}
          onClick={toggleSidebar}
          className={`absolute -right-6 top-5 px-0 lg:hidden ${!isSidebarOpen && "hidden"}`}
        >
          <HiX className="size-4" />
        </Button>
        <div className="h-full overflow-y-auto border-r px-3 py-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"ghost"}
                id="dropdownUserNameButton"
                data-dropdown-toggle="dropdownUserName"
                className="my-4 flex w-full items-center justify-between rounded-lg p-2 focus:outline-none focus:ring-4"
                type="button"
              >
                <span className="sr-only">Open user menu</span>
                <div className="flex items-center">
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    className="mr-3 size-8 rounded-full"
                    alt="Bonnie avatar"
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none">
                      Bonnie Green
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      bonnie@flowbite.com
                    </div>
                  </div>
                </div>
                <HiSelector className="size-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div
                id="dropdownUserName"
                className="w-60 divide-y divide-gray-100 rounded shadow"
                data-popper-placement="bottom"
              >
                <a
                  href="#"
                  className="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    className="mr-3 size-8 rounded-full"
                    alt="Michael avatar"
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none">
                      Michael Gough
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      michael@flowbite.com
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    className="mr-3 size-8 rounded-full"
                    alt="Roberta avatar"
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none">
                      Roberta Casas
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      roberta@flowbite.com
                    </div>
                  </div>
                </a>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <form className="mb-4 flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <HiCollection className="size-5 text-gray-500 dark:text-gray-400" />
              </div>
              <Input
                type="search"
                id="simple-search"
                className="w-full border-gray-300 p-2.5 pl-10 text-sm"
                placeholder="Search projects"
                required
              />
            </div>
          </form>
          <ul className="space-y-1.5">
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiIdentification className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Activity</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiBookOpen className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Contacts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiClipboardList className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Tasks</span>
              </a>
            </li>
          </ul>
          <div className="mb-2 mt-5 flex items-center justify-between border-t border-gray-200 pl-2 pt-3 text-sm font-medium uppercase text-gray-500 dark:border-gray-700 dark:text-gray-400">
            <h3>Collections</h3>
            <a
              href="#"
              className="inline-flex rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <HiPlusCircle className="size-5" />
            </a>
          </div>
          <ul className="space-y-1.5">
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiShoppingCart className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Sales</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiColorSwatch className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Design</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiSpeakerphone className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Fundraising</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiPresentationChartBar className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Internal</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiLightBulb className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Customer Success</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiUsers className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Networking</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiAcademicCap className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Legal</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiPlus className="size-6 text-gray-400 transition duration-75" />
                <span className="ml-3">Add collection</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
