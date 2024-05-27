import { useState } from "react";

import { HiMenu, HiPlus, HiSearch, HiSelector, HiUsers } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";

export function TripleDashboardNavbarWithCTAButtonAndSearchInput() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  return (
    <header className="flex flex-col bg-background antialiased">
      <nav className="order-1 border-gray-200 px-4 py-2.5 lg:px-6">
        <div className="py-2.5g:px-6 order-1 mb-3 border-gray-200 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="#" className="mr-6 flex">
                <img
                  src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                  className="mr-3 h-8"
                  alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold">
                  ModernUI
                </span>
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <>
                      <span className="sr-only">Open user menu</span>
                      <div className="flex items-center">
                        <img
                          src="https://github.com/shadcn.png"
                          className="mr-3 size-8 rounded-full"
                          alt=""
                        />
                        <div className="text-left">
                          <div className="mb-0.5 font-semibold leading-none">
                            Bonnie{" "}
                            <span className="hidden lg:inline">Green</span>
                          </div>
                        </div>
                      </div>
                      <HiSelector className="ml-2 size-3 text-gray-500 dark:text-gray-400" />
                    </>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <img
                      src="https://github.com/shadcn.png"
                      className="mr-3 size-8 rounded-full"
                      alt=""
                    />
                    <div className="text-left">
                      <div className="mb-0.5 font-semibold leading-none">
                        Michael Gough
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        michael@company.com
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <img
                      src="https://github.com/shadcn.png"
                      className="mr-3 size-8 rounded-full"
                      alt=""
                    />
                    <div className="text-left">
                      <div className="mb-0.5 font-semibold leading-none">
                        Roberta Casas
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        roberta@company.com
                      </div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center justify-between lg:order-2">
              <ul className="mr-4 mt-0 hidden w-full flex-col text-sm font-medium lg:flex lg:flex-row">
                <li>
                  <a
                    href="#"
                    className="px-4 py-3 hover:text-primary-600 dark:hover:text-primary-500"
                    aria-current="page"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-3 hover:text-primary-600 dark:hover:text-primary-500"
                    aria-current="page"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-3 hover:text-primary-600 dark:hover:text-primary-500"
                    aria-current="page"
                  >
                    Docs
                  </a>
                </li>
              </ul>
              <Button className="hidden lg:inline">Feedback</Button>
              <Button
                className="lg:hidden"
                variant={"ghost"}
                onClick={() => setIsNavVisible(!isNavVisible)}
              >
                <span className="sr-only">Open menu</span>
                <HiMenu className="size-6" />
              </Button>
            </div>
          </div>
        </div>
        {isNavVisible && (
          <div className="order-3 lg:order-2">
            <div className="flex w-full flex-col items-center border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:flex-row [&_li]:w-full lg:[&_li]:w-auto">
              <a
                aria-current="page"
                href="#"
                className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
              >
                <span className="block border-b-2 border-primary-600 px-4 py-3 text-sm font-medium text-primary-600 hover:text-primary-600 dark:border-primary-500 dark:text-primary-500">
                  Overview
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Company
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Team
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Features
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Marketplace
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Resources
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Forum
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Support
                </span>
              </a>
            </div>
          </div>
        )}

        <nav className="order-2 border-b border-gray-200 lg:order-3">
          <div className="flex flex-col items-center px-4 py-3 lg:flex-row lg:px-6">
            <form className="relative mb-4 w-full lg:mb-0 lg:mr-4 lg:max-w-sm">
              <div className="relative flex items-center">
                <HiSearch className="absolute left-3 size-5 text-gray-500 dark:text-gray-400" />
                <Input
                  id="search"
                  name="search"
                  placeholder="Search"
                  required
                  type="search"
                  className="pl-9 [&_input]:py-2"
                />
              </div>
            </form>
            <div className="grid w-full grid-cols-2 items-center gap-4 lg:flex lg:w-auto lg:gap-3">
              <Button variant={"outline"}>
                <HiUsers className="mr-2 size-4" />
                Create a Team
              </Button>
              <Button>
                <HiPlus className="mr-2 size-4" />
                New Project
              </Button>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
}
