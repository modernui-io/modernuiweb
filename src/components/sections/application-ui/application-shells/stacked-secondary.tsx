import Image from "next/image";
import Link from "next/link";

import { HiDotsHorizontal } from "react-icons/hi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function StackedSecondaryApplicationShell() {
  return (
    <>
      <div className="bg-background antialiased">
        <header>
          <nav className="border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <a href="https://modernui.com" className="mr-6 flex">
                  <Image
                    width={100}
                    height={100}
                    src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                    className="mr-3 h-8 w-auto"
                    alt="ModernUI Logo"
                  />
                  <span className="self-center whitespace-nowrap text-2xl font-semibold">
                    ModernUI
                  </span>
                </a>
              </div>
              <div className="flex items-center justify-between space-x-4 text-sm lg:order-2">
                <Link
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  My profile
                </Link>
                <div className="mx-2 h-4 w-px border dark:border-gray-700"></div>
                <Link
                  href="#"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Logout
                </Link>
              </div>
            </div>
          </nav>

          <nav
            id="toggleMobileMenu"
            className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-700"
          >
            <div className="px-4 py-2">
              <div className="flex items-center">
                <ul className="flex flex-wrap">
                  {[
                    { text: "Overview", hidden: false },
                    { text: "Sales", hidden: false },
                    { text: "Billing", hidden: false },
                    { text: "Team", hidden: true },
                    { text: "Resources", hidden: true },
                    { text: "Messages", hidden: true },
                    { text: "Support", hidden: true },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`block ${item.hidden ? "hidden md:block" : ""} lg:inline`}
                    >
                      <Link
                        href="#"
                        className="inline-block rounded-lg px-3 py-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}

                  <li className="block md:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          id="navigationDropdownButton"
                          aria-expanded="false"
                          data-dropdown-toggle="navigationDropdown"
                          className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600"
                        >
                          <HiDotsHorizontal className="size-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-52">
                        <div id="navigationDropdown">
                          <ul
                            className="py-1 text-gray-700 dark:text-gray-300"
                            aria-labelledby="navigationDropdownButton"
                          >
                            {[
                              "Overview",
                              "Sales",
                              "Billing",
                              "Team",
                              "Resources",
                              "Messages",
                              "Support",
                            ].map((item, index) => (
                              <li key={index}>
                                <Link
                                  href="#"
                                  className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-1 space-y-4 p-4">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-4">
            <div className="col-span-1 mb-4 grid gap-4 lg:mb-0">
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  key={index}
                  className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-48"
                ></div>
              ))}
            </div>
            <div className="col-span-2 flex flex-col gap-4">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-64"
                ></div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {Array.from({ length: 2 }, (_, index) => (
              <div
                key={index}
                className="flex h-32 w-full flex-1 items-center justify-center rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 lg:h-64"
              ></div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
