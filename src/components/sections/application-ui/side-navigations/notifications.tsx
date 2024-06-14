import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HiArrowNarrowRight,
  HiChartPie,
  HiChevronDown,
  HiCollection,
  HiDocumentText,
  HiInboxIn,
  HiLockClosed,
  HiMenuAlt2,
  HiQuestionMarkCircle,
  HiShoppingBag,
  HiX,
} from "react-icons/hi";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

export function NotificationsSideNavigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Button
        variant={"ghost"}
        onClick={toggleSidebar}
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
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
          <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
            {[
              {
                icon: (
                  <HiDocumentText className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                ),
                label: "Docs",
              },
              {
                icon: (
                  <HiCollection className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                ),
                label: "Components",
              },
              {
                icon: (
                  <HiQuestionMarkCircle className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                ),
                label: "Help",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute bottom-0 left-0 w-full justify-center px-4 pb-4">
          <div
            id="alert-update"
            className="mb-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-700"
            role="alert"
          >
            <div className="mb-3 flex items-center justify-between">
              <Badge className="mr-2 bg-purple-100 text-purple-600 hover:bg-purple-200 dark:bg-purple-600 dark:text-purple-200 dark:hover:bg-purple-500">
                New update
              </Badge>
              <Button
                variant={"ghost"}
                className="inline-flex size-6 rounded-lg bg-gray-50 p-1 text-gray-500 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <span className="sr-only">Dismiss</span>
                <HiX className="size-4" />
              </Button>
            </div>
            <div className="mb-3 text-sm text-gray-700 dark:text-gray-300">
              A new system update is available today.
            </div>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-purple-600 hover:underline dark:text-purple-500"
            >
              Update now
              <HiArrowNarrowRight className="ml-1 size-5" />
            </Link>
          </div>
          <div
            id="alert-new-feature"
            className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700"
            role="alert"
          >
            <div className="mb-3 flex items-center justify-between">
              <Badge className="mr-2">New plugin</Badge>
              <Button
                variant={"ghost"}
                className="inline-flex size-6 rounded-lg bg-gray-50 p-1 text-gray-500 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <span className="sr-only">Dismiss</span>
                <HiX className="size-4" />
              </Button>
            </div>
            <div className="mb-3 text-sm text-gray-700 dark:text-gray-300">
              ModernUI Widget Generator is now ready.
            </div>
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Download
              <HiArrowNarrowRight className="ml-1 size-5" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
