import { useState } from "react";

import {
  HiBell,
  HiCalendar,
  HiChartPie,
  HiChevronDown,
  HiChevronRight,
  HiClipboardList,
  HiCog,
  HiCollection,
  HiCurrencyDollar,
  HiDocumentText,
  HiDotsHorizontal,
  HiEye,
  HiHeart,
  HiInbox,
  HiInboxIn,
  HiInformationCircle,
  HiLightningBolt,
  HiLockClosed,
  HiLogout,
  HiMail,
  HiMenuAlt2,
  HiOutlineAdjustments,
  HiOutlineChatAlt,
  HiPlusCircle,
  HiQuestionMarkCircle,
  HiSearch,
  HiSelector,
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
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function DoubleSidebarApplicationShell() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-background antialiased">
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
                <form
                  action="#"
                  method="GET"
                  className="hidden lg:block lg:pl-2"
                >
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
                            &nbsp;posted a new video: Glassmorphism - learn how
                            to implement the new design trend.
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
                  <HiMenuAlt2 className="size-6" />
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
                        <HiSelector className="size-3 text-gray-500 dark:text-gray-400" />
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

                <HiChevronRight className="mx-4 size-3 text-gray-500 dark:text-gray-400" />

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
                        <HiSelector className="ml-1.5 size-2.5" />
                      </>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <HiPlusCircle className="mr-2 size-4 text-gray-500 dark:text-gray-300" />
                      Create new app
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HiMail className="mr-2 size-4 text-gray-500 dark:text-gray-300" />
                      Inbox
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HiInformationCircle className="mr-2 size-4 text-gray-500 dark:text-gray-300" />
                      App info
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HiInboxIn className="mr-2 size-4 text-gray-500 dark:text-gray-300" />
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
      <aside
        id="sidebar-contacts"
        className="fixed right-0 top-0 z-40 h-full w-16 border-l bg-background pt-32 transition-transform"
        aria-label="Sidebar"
      >
        <div className="block h-full w-16 overflow-y-auto px-3 py-4">
          <ul className="mb-4 space-y-2 border-b border-gray-200 pb-4 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-500 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiCalendar className="size-6" />
                <span className="sr-only">Calendar</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-500 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiClipboardList className="size-6" />
                <span className="sr-only">Tasks</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-500 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiShoppingBag className="size-6" />
                <span className="sr-only">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-500 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiInboxIn className="size-6" />
                <span className="sr-only">Inbox</span>
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="flex items-center rounded-lg p-2 text-gray-500 transition duration-75 group-hover:text-white hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <HiDotsHorizontal className="size-5" />
            <span className="sr-only">Add new item</span>
          </a>
        </div>
      </aside>

      <aside
        id="default-sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background pt-32 transition-transform md:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="h-full overflow-y-auto border-gray-200 bg-white px-3 py-5 dark:border-gray-700 dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiChartPie className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Overview</span>
              </a>
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
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Kanban
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Calendar
                      </a>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <button
                    type="button"
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-controls="dropdown-sales"
                    data-collapse-toggle="dropdown-sales"
                  >
                    <HiShoppingBag className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Sales
                    </span>
                    <HiChevronDown className="size-6" />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-sales" className="space-y-2 py-2">
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Billing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Invoice
                      </a>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiInboxIn className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3 flex-1 whitespace-nowrap">Messages</span>
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                  6
                </span>
              </a>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <button
                    type="button"
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                    aria-controls="dropdown-authentication"
                    data-collapse-toggle="dropdown-authentication"
                  >
                    <HiLockClosed className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Authentication
                    </span>

                    <HiChevronDown className="size-6" />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-authentication" className="space-y-2 py-2">
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Forgot Password
                      </a>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          </ul>
          <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <HiDocumentText className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Docs</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <HiCollection className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Components</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <HiQuestionMarkCircle className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 md:flex">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"ghost"}>
                  <HiOutlineAdjustments className="size-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <Text>Tools page</Text>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"ghost"}>
                  <HiCog className="size-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <Text>Settings page</Text>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"}>
                <USFlagIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <USFlagIcon />
                  English (US)
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <GermanyFlagIcon />
                  Deutsch
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <ItalyFlagIcon />
                  Italiano
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <ChinaFlagIcon />
                  中文 (繁體)
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>
      <main className="mr-16 h-auto bg-background p-4 pt-48 md:ml-64">
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
          <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
          <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
          <div className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"></div>
        </div>
        <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
        </div>
        <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"></div>
        </div>
      </main>
    </>
  );
}

function USFlagIcon() {
  return (
    <svg
      aria-hidden
      className="size-4 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-us"
      viewBox="0 0 512 512"
    >
      <g fillRule="evenodd">
        <g strokeWidth="1pt">
          <path
            fill="#bd3d44"
            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
            transform="scale(3.9385)"
          />
          <path
            fill="#fff"
            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
            transform="scale(3.9385)"
          />
        </g>
        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
        <path
          fill="#fff"
          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
          transform="scale(3.9385)"
        />
      </g>
    </svg>
  );
}

function ChinaFlagIcon() {
  return (
    <svg
      aria-hidden
      className="size-4 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="flag-icon-css-cn"
      viewBox="0 0 512 512"
    >
      <defs>
        <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
      </defs>
      <path fill="#de2910" d="M0 0h512v512H0z" />
      <use
        width="30"
        height="20"
        transform="matrix(76.8 0 0 76.8 128 128)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="rotate(-121 142.6 -47) scale(25.5827)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="rotate(-98.1 198 -82) scale(25.6)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="rotate(-74 272.4 -114) scale(25.6137)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="matrix(16 -19.968 19.968 16 256 230.4)"
        xlinkHref="#a"
      />
    </svg>
  );
}

function ItalyFlagIcon() {
  return (
    <svg
      aria-hidden
      className="size-4 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-it"
      viewBox="0 0 512 512"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#009246" d="M0 0h170.7v512H0z" />
        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
      </g>
    </svg>
  );
}

function GermanyFlagIcon() {
  return (
    <svg
      aria-hidden
      className="size-4 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-de"
      viewBox="0 0 512 512"
    >
      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
      <path d="M0 0h512v170.7H0z" />
      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
    </svg>
  );
}
