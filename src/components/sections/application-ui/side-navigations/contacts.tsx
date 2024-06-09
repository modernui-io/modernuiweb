import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HiAdjustments,
  HiChartPie,
  HiChevronDown,
  HiDocumentText,
  HiInboxIn,
  HiInformationCircle,
  HiLockClosed,
  HiMenuAlt2,
  HiShoppingBag,
  HiX,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Text } from "~/components/ui/custom/text";

export function ContactsSideNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Button
        variant={"ghost"}
        onClick={toggleSidebar}
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenuAlt2 className="size-6" />
      </Button>

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
          className={`absolute right-5 top-5 px-0 lg:hidden ${!isSidebarOpen && "hidden"}`}
        >
          <HiX className="size-4" />
        </Button>
        <div className="h-full overflow-y-auto border-r border-gray-200 px-3 py-5 dark:border-gray-700">
          <Link
            href="https://modernui.com"
            className="mb-5 flex items-center pl-2"
          >
            <Image
              width={100}
              height={100}
              src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
              className="mr-3 h-6 w-auto sm:h-8"
              alt="ModernUI Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              ModernUI
            </span>
          </Link>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiChartPie className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Overview</span>
              </Link>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <HiDocumentText className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Pages
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-pages" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "Settings" },
                      { href: "#", label: "Kanban" },
                      { href: "#", label: "Calendar" },
                    ].map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <HiShoppingBag className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Sales
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-sales" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "Products" },
                      { href: "#", label: "Billing" },
                      { href: "#", label: "Invoice" },
                    ].map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiInboxIn className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3 flex-1 whitespace-nowrap">Messages</span>
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                  6
                </span>
              </Link>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <HiLockClosed className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Authentication
                    </span>

                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-authentication" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "Sign In" },
                      { href: "#", label: "Sign Up" },
                      { href: "#", label: "Forgot Password" },
                    ].map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          </ul>
          <ul className="mt-5 space-y-4 border-t border-gray-200 pt-5 dark:border-gray-700">
            <li className="pb-3">
              <Text className="text-sm">ACTIVE CONTACTS</Text>
            </li>
            {[
              {
                href: "#",
                name: "Jese Leos",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-green-400",
              },
              {
                href: "#",
                name: "Bonnie Green",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-green-400",
              },
              {
                href: "#",
                name: "Joseph McFall",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-red-400",
              },
              {
                href: "#",
                name: "Lana Byrd",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-red-400",
              },
              {
                href: "#",
                name: "Leslie Livingston",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-green-400",
              },
              {
                href: "#",
                name: "Thomas Lean",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-green-400",
              },
              {
                href: "#",
                name: "Robert Brown",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-red-400",
              },
              {
                href: "#",
                name: "Micheal Gough",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-green-400",
              },
              {
                href: "#",
                name: "Roberta Casas",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-green-400",
              },
              {
                href: "#",
                name: "Neil Sims",
                imgSrc: "https://github.com/shadcn.png",
                status: "bg-green-400",
              },
            ].map((user, index) => (
              <li key={index}>
                <Link
                  href={user.href}
                  className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white"
                >
                  <div className="relative mr-2.5">
                    <Image
                      width={100}
                      height={100}
                      className="size-6 rounded-full"
                      src={user.imgSrc}
                      alt={`${user.name} avatar`}
                    />
                    <span
                      className={`absolute left-4 top-0 size-3 rounded-full border-2 border-white ${user.status} dark:border-gray-800`}
                    ></span>
                  </div>
                  {user.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 p-4 lg:flex">
          <Link
            href="#"
            className="inline-flex cursor-pointer items-center rounded p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <HiAdjustments className="mr-1 size-4" />
            Settings
          </Link>
          <Link
            href="#"
            data-tooltip-target="tooltip-settings"
            className="inline-flex cursor-pointer items-center rounded p-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <HiInformationCircle className="mr-1 size-4" />
            Help
          </Link>
        </div>
      </aside>
    </>
  );
}
