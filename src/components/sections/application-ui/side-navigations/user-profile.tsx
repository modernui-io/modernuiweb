import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HiAcademicCap,
  HiBell,
  HiChevronDown,
  HiCollection,
  HiIdentification,
  HiLockClosed,
  HiLogout,
  HiMenuAlt2,
  HiOutlineQuestionMarkCircle,
  HiPhone,
  HiViewGrid,
  HiX,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

export function UserProfileSideNavigation() {
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
          <div className="text-center text-gray-500 dark:text-gray-400">
            <Image
              width={100}
              height={100}
              className="mx-auto mb-4 size-20 rounded-full"
              src="https://github.com/shadcn.png"
              alt="Micheal Avatar"
            />
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link href="#">Michael Gough</Link>
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              name@company.com
            </p>
            <Link
              href="#"
              className="my-5 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              <HiLogout className="mr-1 size-5" />
              Logout
            </Link>
            <ul className="mb-4 flex justify-center space-x-1">
              {[
                { icon: <HiViewGrid className="size-6" />, label: "View Grid" },
                { icon: <HiBell className="size-6" />, label: "Bell" },
                {
                  icon: <HiOutlineQuestionMarkCircle className="size-6" />,
                  label: "Help",
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="inline-flex rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiIdentification className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">About</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiCollection className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiAcademicCap className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Work experience</span>
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
                      Tasks
                    </span>

                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-authentication" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "To Do" },
                      { href: "#", label: "In Progress" },
                      { href: "#", label: "Completed" },
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
                <HiPhone className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
