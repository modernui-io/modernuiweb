import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HiChartPie,
  HiChevronDown,
  HiChevronLeft,
  HiCollection,
  HiDocumentText,
  HiHome,
  HiInboxIn,
  HiLockClosed,
  HiQuestionMarkCircle,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

export function DoubleSideNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed left-0 top-0 z-40 flex h-screen bg-background transition-transform lg:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="z-30 h-full w-16 overflow-y-auto border-r border-gray-200 px-3 py-5 dark:border-gray-700">
          <Link href="#">
            <Image
              width={100}
              height={100}
              src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
              className="mb-6 h-7 pl-2"
              alt="ModernUI Logo"
            />
          </Link>
          <ul className="space-y-2">
            {[
              { icon: <HiHome className="size-6" /> },
              { icon: <HiUser className="size-6" /> },
              { icon: <HiChartPie className="size-6" /> },
              { icon: <HiInboxIn className="size-6" /> },
              { icon: <HiLockClosed className="size-6" /> },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`h-full overflow-y-auto border-r border-gray-200 px-3 py-5 dark:border-gray-700 lg:block
        ${isSidebarOpen ? "block" : "hidden"}`}
        >
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
                  <button
                    type="button"
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-controls="dropdown-pages"
                    data-collapse-toggle="dropdown-pages"
                  >
                    <HiDocumentText className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Pages
                    </span>
                    <HiChevronDown className="size-6" />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-pages" className="space-y-2 py-2">
                    {["Settings", "Kanban", "Calendar"].map((link, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link}
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
                      { label: "Products" },
                      { label: "Billing" },
                      { label: "Invoice" },
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item.label}
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
                      { label: "Sign In" },
                      { label: "Sign Up" },
                      { label: "Forgot Password" },
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          </ul>
          <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <HiDocumentText className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Docs</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <HiCollection className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Components</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <HiQuestionMarkCircle className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Help</span>
              </Link>
            </li>
          </ul>
        </div>

        <Button
          variant={"ghost"}
          className="absolute bottom-2 left-20 inline-flex cursor-pointer rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden"
        >
          <HiChevronLeft
            className={`size-6 ${!isSidebarOpen && "rotate-180"}`}
            onClick={toggleSidebar}
          />
        </Button>
      </aside>
    </>
  );
}
