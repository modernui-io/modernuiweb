import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HiDotsHorizontal,
  HiMenuAlt2,
  HiPlus,
  HiSearch,
  HiVideoCamera,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
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
      <Button
        variant={"ghost"}
        onClick={toggleSidebar}
        className="ml-auto mr-3 mt-2 flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenuAlt2 className="size-6" />
      </Button>

      <aside
        id="sidebar-contacts"
        className={`fixed right-0 top-0 z-40 h-full w-64 bg-background transition-transform lg:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto border-l border-gray-200 px-3 py-4 dark:border-gray-800">
          <div className="mb-4 flex items-center justify-between text-sm font-medium text-gray-500 dark:text-gray-400">
            <h3 className="uppercase">Contacts</h3>
            <div className="flex items-center space-x-1">
              <Link
                href="#"
                className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <HiVideoCamera className="size-5" />
                <span className="sr-only">Video call</span>
              </Link>
              <Link
                href="#"
                className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <HiSearch className="size-5" />
                <span className="sr-only">Search contacts</span>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <HiDotsHorizontal className="size-5" />
                    <span className="sr-only">Settings</span>
                  </Button>
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
                      {["Dashboard", "Settings", "Earnings", "Sign out"].map(
                        (item, index) => (
                          <li key={index}>
                            <Link
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {item}
                            </Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <ul className="space-y-4 border-b border-gray-200 pb-5 dark:border-gray-700">
            {[
              {
                name: "Jese Leos",
                avatar: "https://github.com/shadcn.png",
                status: "green",
              },
              {
                name: "Bonnie Green",
                avatar: "https://github.com/shadcn.png",
                status: "green",
              },
              {
                name: "Joseph McFall",
                avatar: "https://github.com/shadcn.png",
                status: "red",
              },
              {
                name: "Lana Byrd",
                avatar: "https://github.com/shadcn.png",
                status: "green",
              },
              {
                name: "Leslie Livingston",
                avatar: "https://github.com/shadcn.png",
                status: "red",
              },
              {
                name: "Thomas Lean",
                avatar: "https://github.com/shadcn.png",
                status: "green",
              },
              {
                name: "Robert Brown",
                avatar: "https://github.com/shadcn.png",
                status: "green",
              },
              {
                name: "Micheal Gough",
                avatar: "https://github.com/shadcn.png",
                status: "red",
              },
              {
                name: "Roberta Casas",
                avatar: "https://github.com/shadcn.png",
                status: "green",
              },
              {
                name: "Neil Sims",
                avatar: "https://github.com/shadcn.png",
                status: "green",
              },
              {
                name: "Joseph Mcfall",
                avatar: "https://github.com/shadcn.png",
                status: "green",
              },
              {
                name: "Karen Nelson Sims",
                avatar: "https://github.com/shadcn.png",
                status: "red",
              },
            ].map((user, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="flex items-center space-x-4 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <div className="relative mr-2.5">
                    <Image
                      width={100}
                      height={100}
                      className="size-8 rounded-full"
                      src={user.avatar}
                      alt={`${user.name} avatar`}
                    />
                    <span
                      className={`absolute -top-0.5 left-5 size-3 rounded-full border-2 border-white bg-green-500 dark:border-gray-800`}
                    ></span>
                  </div>
                  {user.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mb-4 flex items-center justify-between pt-5 text-sm font-medium text-gray-500 dark:text-gray-400">
            <h3 className="uppercase">Group conversations</h3>
            <Link
              href="#"
              className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <HiPlus className="size-5" />
              <span className="sr-only">Create new group</span>
            </Link>
          </div>
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="flex items-center space-x-2 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="flex -space-x-5">
                  <Image
                    width={100}
                    height={100}
                    className="size-8 rounded-full border-2 border-white dark:border-gray-800"
                    src="https://github.com/shadcn.png"
                    alt="Jese avatar"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="size-8 rounded-full border-2 border-white dark:border-gray-800"
                    src="https://github.com/shadcn.png"
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
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center space-x-2 font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <div className="flex -space-x-5">
                  <Image
                    width={100}
                    height={100}
                    className="size-8 rounded-full border-2 border-white dark:border-gray-800"
                    src="https://github.com/shadcn.png"
                    alt="Jese avatar"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="size-8 rounded-full border-2 border-white dark:border-gray-800"
                    src="https://github.com/shadcn.png"
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
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
