import { useState } from "react";

import {
  HiBell,
  HiChevronRight,
  HiClipboardList,
  HiCog,
  HiCollection,
  HiCurrencyDollar,
  HiEye,
  HiHeart,
  HiInbox,
  HiInboxIn,
  HiLightningBolt,
  HiLogout,
  HiMenu,
  HiOutlineChatAlt,
  HiSearch,
  HiShoppingBag,
  HiUserAdd,
  HiUserCircle,
  HiUsers,
  HiVideoCamera,
  HiViewGrid,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function TripleDashbardNavbarWithProjectSwitchAndSubnav() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  return (
    <header className="bg-background antialiased">
      <nav>
        <div className="border-gray-200 px-4 py-2.5 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="https://modernui.com" className="mr-6 flex">
                <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="mr-3 h-8"
                  alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold">
                  ModernUI
                </span>
              </a>
              <form action="#" method="GET" className="hidden lg:block lg:pl-2">
                <Label htmlFor="topbar-search" className="sr-only">
                  Search
                </Label>
                <div className="relative mt-1 lg:w-96">
                  <div className="relative flex items-center">
                    <HiSearch className="absolute left-3 size-5 text-gray-500 dark:text-gray-400" />
                    <Input
                      id="topbar-search"
                      name="topbar-search"
                      placeholder="Jump to Favorites, Apps, Pipelines..."
                      type="search"
                      className="pl-9"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-between lg:order-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <>
                      <span className="sr-only">View notifications</span>
                      <HiBell className="size-5" />
                    </>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    Notifications
                  </div>
                  <div className="border-t dark:border-gray-600">
                    <a
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          className="size-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                          <HiInbox className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          New message from&nbsp;
                          <span className="font-semibold">Bonnie Green</span>:
                          "Hey, what's up? All set for the presentation?"
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          a few moments ago
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          className="size-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                          <HiUserAdd className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Jese Leos</span>
                          &nbsp;and&nbsp;
                          <span className="font-medium">5 others</span>
                          &nbsp;started following you.
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          10 minutes ago
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          className="size-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                          <HiHeart className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Joseph McFall</span>
                          &nbsp;and&nbsp;
                          <span className="font-medium">141 others</span>
                          &nbsp;love your story. See it and view more stories.
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          44 minutes ago
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          className="size-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                          <HiOutlineChatAlt className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">
                            Leslie Livingston
                          </span>
                          &nbsp;mentioned you in a comment:&nbsp;
                          <span className="font-medium text-primary-700 dark:text-primary-500">
                            @bonnie.green
                          </span>
                          &nbsp;what do you say?
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          1 hour ago
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <div className="shrink-0">
                        <img
                          className="size-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                          alt=""
                        />
                        <div className="absolute -mt-5 ml-6 flex size-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                          <HiVideoCamera className="size-3 text-white" />
                        </div>
                      </div>
                      <div className="w-full pl-3">
                        <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Robert Brown</span>
                          &nbsp;posted a new video: Glassmorphism - learn how to
                          implement the new design trend.
                        </div>
                        <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                          3 hours ago
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    href="#"
                    className="block border-t border-gray-200 bg-gray-50 py-2 text-center text-base font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:underline"
                  >
                    <div className="inline-flex items-center ">
                      <HiEye className="mr-2 size-5" />
                      View all
                    </div>
                  </a>
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="mx-2 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <>
                      <span className="sr-only">View apps</span>
                      <HiViewGrid className="size-5" />
                    </>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    Apps
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t p-4 dark:border-gray-600">
                    <a
                      href="#"
                      className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiShoppingBag className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                      <div className="text-sm font-medium">Sales</div>
                    </a>
                    <a
                      href="#"
                      className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiUsers className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                      <div className="text-sm font-medium">Users</div>
                    </a>
                    <a
                      href="#"
                      className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiInbox className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                      <div className="text-sm font-medium">Inbox</div>
                    </a>
                    <a
                      href="#"
                      className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiUserCircle className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                      <div className="text-sm font-medium">Profile</div>
                    </a>
                    <a
                      href="#"
                      className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiCog className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />

                      <div className="text-sm font-medium">Settings</div>
                    </a>
                    <a
                      href="#"
                      className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiInboxIn className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />

                      <div className="text-sm font-medium">Products</div>
                    </a>
                    <a
                      href="#"
                      className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiCurrencyDollar className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />

                      <div className="text-sm font-medium">Pricing</div>
                    </a>
                    <a
                      href="#"
                      className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiClipboardList className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                      <div className="text-sm font-medium">Billing</div>
                    </a>
                    <a
                      href="#"
                      className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <HiLogout className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                      <div className="text-sm font-medium">Logout</div>
                    </a>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <span className="mx-2 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline" />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="size-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt=""
                      />
                    </>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="px-4 py-3">
                    <span className="block text-sm font-semibold">
                      Neil Sims
                    </span>
                    <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>My profile</DropdownMenuItem>
                  <DropdownMenuItem>Account settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <HiHeart className="mr-2 size-4 text-gray-400" />
                    My links
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HiCollection className="mr-2 size-4 text-gray-400" />
                    Collections
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex w-full items-center justify-between">
                      <span className="flex items-center">
                        <HiLightningBolt className="mr-2 size-4 text-primary-600 dark:text-primary-500" />
                        Pro version
                      </span>
                      <HiChevronRight className="size-4 text-gray-400" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <ul className="py-1 text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                id="toggleMobileMenuButton"
                className="lg:hidden"
                variant={"ghost"}
                data-collapse-toggle="toggleMobileMenu"
                onClick={() => setIsNavVisible(!isNavVisible)}
              >
                <span className="sr-only">Open menu</span>
                <HiMenu className="size-6" />
              </Button>
            </div>
          </div>
        </div>
        <nav className="bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-wrap items-center justify-between p-4 sm:pb-3 lg:px-6">
            <div className="mb-4 flex items-center sm:mb-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <>
                      <span className="sr-only">Open user menu</span>
                      <div className="mr-2 flex items-center">
                        <img
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          className="mr-2 size-7 rounded-full"
                          alt=""
                        />
                        <div className="text-left">
                          <div className="text-sm font-semibold leading-none text-gray-900 dark:text-white">
                            Personal
                          </div>
                        </div>
                      </div>
                      <svg
                        className="size-3 text-gray-500 dark:text-gray-400"
                        aria-hidden
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5m0 6 4 4 4-4"
                        />
                      </svg>
                    </>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <a
                    href="#"
                    className="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <div className="text-left">
                      <div className="mb-0.5 text-sm font-medium leading-none text-gray-900 dark:text-white">
                        Company
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Created August, 2014
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center rounded px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <div className="text-left">
                      <div className="mb-0.5 text-sm font-medium leading-none text-gray-900 dark:text-white">
                        Personal
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Created September, 2018
                      </div>
                    </div>
                  </a>
                </DropdownMenuContent>
              </DropdownMenu>

              <svg
                className="mx-4 size-3 text-gray-500 dark:text-gray-400"
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>modernui.com</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <ul className="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex h-5 items-center">
                          <Checkbox id="helper-radio-4" name="helper-radio" />
                        </div>
                        <div className="ml-2 text-sm">
                          <Label
                            htmlFor="helper-radio-4"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>themesberg.com</div>
                            <p
                              id="helper-radio-text-4"
                              className="text-xs font-normal text-gray-500 dark:text-gray-300"
                            >
                              Free templates and themes
                            </p>
                          </Label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex h-5 items-center">
                          <Checkbox id="helper-radio-5" name="helper-radio" />
                        </div>
                        <div className="ml-2 text-sm">
                          <Label
                            htmlFor="helper-radio-5"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>iconscale.com</div>
                            <p
                              id="helper-radio-text-5"
                              className="text-xs font-normal text-gray-500 dark:text-gray-300"
                            >
                              Open-source SVG icons
                            </p>
                          </Label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex h-5 items-center">
                          <Checkbox id="helper-radio-6" name="helper-radio" />
                        </div>
                        <div className="ml-2 text-sm">
                          <Label
                            htmlFor="helper-radio-6"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>ui.glass</div>
                            <p
                              id="helper-radio-text-6"
                              className="text-xs font-normal text-gray-500 dark:text-gray-300"
                            >
                              Glassmorphism UI framework
                            </p>
                          </Label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:items-center">
              <Button className="whitespace-nowrap [&>span]:text-xs">
                Open app
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <>
                      <span>More&nbsp;</span>
                      <svg
                        className="ml-1.5 size-2.5"
                        aria-hidden
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5m0 6 4 4 4-4"
                        />
                      </svg>
                    </>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <svg
                      className="mr-2 size-4 text-gray-500 dark:text-gray-300"
                      aria-hidden
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Create new app
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <svg
                      className="mr-2 size-4 text-gray-500 dark:text-gray-300"
                      aria-hidden
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Inbox
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <svg
                      className="mr-2 size-4 text-gray-500 dark:text-gray-300"
                      aria-hidden
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    App info
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <svg
                      className="mr-2 size-4 text-gray-500 dark:text-gray-300"
                      aria-hidden
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit app
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
        {isNavVisible && (
          <div>
            <div className="flex w-full flex-col items-center border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:flex-row [&_li]:w-full lg:[&_li]:w-auto">
              <a
                aria-current="page"
                href="#"
                className="block border-b p-0 dark:border-gray-700 lg:inline lg:border-b-0"
              >
                <span className="block border-b-2 border-primary-600 px-4 py-3 text-sm font-medium text-primary-600 hover:text-primary-600 dark:border-primary-500 dark:text-primary-500">
                  Home
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Company
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Team
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Features
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Marketplace
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Resources
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Forum
                </span>
              </a>
              <a
                href="#"
                className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
              >
                <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                  Support
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
