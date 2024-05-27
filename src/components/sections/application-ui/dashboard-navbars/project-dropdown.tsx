import { useState } from "react";

import {
  HiBell,
  HiChevronDown,
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
  HiQuestionMarkCircle,
  HiShoppingBag,
  HiUserAdd,
  HiUserCircle,
  HiUsers,
  HiVideoCamera,
  HiViewGrid,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function DoubleDashboardNavbarWithProjectDropdown() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  return (
    <header className="bg-background antialiased">
      <nav className="border-gray-200 px-4 py-2.5 lg:px-6">
        <div className="w-full px-4 py-3.5 lg:px-6">
          <div className="flex w-full flex-wrap items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="https://modernui.com" className="mr-4 flex">
                <img
                  src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                  className="mr-3 h-8"
                  alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold">
                  ModernUI
                </span>
              </a>
            </div>
            <div className="flex items-center lg:order-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant={"ghost"}>
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
                          src="https://github.com/shadcn.png"
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
                          src="https://github.com/shadcn.png"
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
                          src="https://github.com/shadcn.png"
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
                          src="https://github.com/shadcn.png"
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
                          src="https://github.com/shadcn.png"
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
              <span className="mx-2 h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant={"ghost"}>
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
                    {[
                      {
                        icon: (
                          <HiShoppingBag className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Sales",
                      },
                      {
                        icon: (
                          <HiUsers className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Users",
                      },
                      {
                        icon: (
                          <HiInbox className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Inbox",
                      },
                      {
                        icon: (
                          <HiUserCircle className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Profile",
                      },
                      {
                        icon: (
                          <HiCog className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Settings",
                      },
                      {
                        icon: (
                          <HiInboxIn className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Products",
                      },
                      {
                        icon: (
                          <HiCurrencyDollar className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Pricing",
                      },
                      {
                        icon: (
                          <HiClipboardList className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Billing",
                      },
                      {
                        icon: (
                          <HiLogout className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                        ),
                        label: "Logout",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {item.icon}
                        <div className="text-sm font-medium">{item.label}</div>
                      </a>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <span className="mx-2 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size={"sm"} variant={"ghost"}>
                      <span className="sr-only">View FAQ</span>
                      <HiQuestionMarkCircle className="size-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <Text>View FAQ</Text>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <span className="mx-2 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant={"ghost"}>
                    N. Virginia <HiChevronDown className="ml-3 size-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <ul
                    className="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="regionDropdownButton"
                  >
                    <li>
                      <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex h-5 items-center">
                          <Checkbox
                            id="helper-checkbox-4"
                            name="helper-checkbox"
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label
                            htmlFor="helper-checkbox-4"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>New York</div>
                            <p
                              id="helper-checkbox-text-4"
                              className="text-xs font-normal text-gray-500 dark:text-gray-300"
                            >
                              Dynamic server switching
                            </p>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex h-5 items-center">
                          <Checkbox
                            id="helper-checkbox-5"
                            name="helper-checkbox"
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label
                            htmlFor="helper-checkbox-5"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>N. Virginia</div>
                            <p
                              id="helper-checkbox-text-5"
                              className="text-xs font-normal text-gray-500 dark:text-gray-300"
                            >
                              Auto-scaling adapter
                            </p>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex h-5 items-center">
                          <Checkbox
                            id="helper-checkbox-6"
                            name="helper-checkbox"
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label
                            htmlFor="helper-checkbox-6"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>Washington DC.</div>
                            <p
                              id="helper-checkbox-text-6"
                              className="text-xs font-normal text-gray-500 dark:text-gray-300"
                            >
                              Automatic backups included
                            </p>
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="mx-2 h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant={"ghost"}>
                    <>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="size-8 rounded-full"
                        src="https://github.com/shadcn.png"
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
                      name@modernui.com
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

        {isNavVisible && (
          <div className="flex flex-col lg:flex-row">
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant={"ghost"}>
                    <span className="flex w-full items-center justify-between text-sm font-medium lg:p-0 lg:hover:underline">
                      <span>
                        Account&nbsp;
                        <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
                          Bonnie @ 1234-567-890
                        </span>
                      </span>
                      <svg
                        className="size-2.5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
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
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="px-4 py-3">
                    <span className="block text-sm font-semibold">
                      Neil Sims
                    </span>
                    <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                      name@modernui.com
                    </span>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>My profile</DropdownMenuItem>
                  <DropdownMenuItem>Account settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <svg
                      className="mr-2 size-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                    </svg>
                    My links
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <svg
                      className="mr-2 size-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
                      <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
                      <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
                    </svg>
                    Collections
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex w-full items-center justify-between">
                      <span className="flex items-center">
                        <svg
                          className="mr-2 size-4 text-primary-600 dark:text-primary-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                        </svg>
                        Pro version
                      </span>
                      <svg
                        className="size-2.5 text-gray-400"
                        aria-hidden="true"
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant={"ghost"}>
                    <span className="flex w-full items-center justify-between text-sm font-medium lg:p-0 lg:hover:underline">
                      <span>
                        Regions&nbsp;
                        <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
                          US East (N. Virginia)
                        </span>
                      </span>
                      <svg
                        className="size-2.5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
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
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <ul className="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex h-5 items-center">
                          <Checkbox
                            id="helper-checkbox-4"
                            name="helper-checkbox"
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label
                            htmlFor="helper-checkbox-4"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>New York</div>
                            <p
                              id="helper-checkbox-text-4"
                              className="text-xs font-normal text-gray-500 dark:text-gray-300"
                            >
                              Dynamic server switching
                            </p>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex h-5 items-center">
                          <Checkbox
                            id="helper-checkbox-5"
                            name="helper-checkbox"
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label
                            htmlFor="helper-checkbox-5"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>N. Virginia</div>
                            <p
                              id="helper-checkbox-text-5"
                              className="text-xs font-normal text-gray-500 dark:text-gray-300"
                            >
                              Auto-scaling adapter
                            </p>
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex h-5 items-center">
                          <Checkbox
                            id="helper-checkbox-6"
                            name="helper-checkbox"
                          />
                        </div>
                        <div className="ml-2 text-sm">
                          <label
                            htmlFor="helper-checkbox-6"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            <div>Washington DC.</div>
                            <p
                              id="helper-checkbox-text-6"
                              className="text-xs font-normal text-gray-500 dark:text-gray-300"
                            >
                              Automatic backups included
                            </p>
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <a
              href="#"
              className="px-4 py-2.5 text-sm font-medium hover:underline lg:mr-8"
            >
              Home
            </a>
            <a
              href="#"
              className="px-4 py-2.5 text-sm font-medium hover:underline lg:mr-8"
            >
              Company
            </a>
            <a
              href="#"
              className="px-4 py-2.5 text-sm font-medium hover:underline lg:mr-8"
            >
              Team
            </a>
            <a
              href="#"
              className="px-4 py-2.5 text-sm font-medium hover:underline lg:mr-8"
            >
              Features
            </a>
            <a
              href="#"
              className="px-4 py-2.5 text-sm font-medium hover:underline lg:mr-8"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="px-4 py-2.5 text-sm font-medium hover:underline lg:mr-8"
            >
              Resources
            </a>
            <a
              href="#"
              className="px-4 py-2.5 text-sm font-medium hover:underline lg:mr-8"
            >
              Forum
            </a>
            <a
              href="#"
              className="border-b-0 px-4 py-2.5 text-sm font-medium hover:underline"
            >
              Support
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
