import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HiBell,
  HiChevronDown,
  HiClipboardList,
  HiCog,
  HiCurrencyDollar,
  HiEye,
  HiHeart,
  HiInbox,
  HiInboxIn,
  HiLogout,
  HiMenu,
  HiOutlineAdjustments,
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
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function DoubleDashboardNavbarWithSearchInput() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  return (
    <header className="bg-background">
      <nav className="border-gray-200 px-0 py-2.5 antialiased">
        <div className="flex w-full flex-wrap items-center justify-between">
          <div className="flex w-full items-center justify-start px-4 lg:px-6">
            <Link href="https://modernui.com" className="mr-6 flex xl:mr-8">
              <Image
                width={100}
                height={100}
                src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                className="mr-3 h-8 w-auto"
                alt=""
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold">
                ModernUI
              </span>
            </Link>
            <div className="w-full items-center justify-between lg:order-1 lg:ml-6 lg:flex">
              <nav className="hidden lg:block">
                <ul className="flex gap-x-7">
                  <Link href="#">Company</Link>
                  <Link href="#">Marketplace</Link>
                  <Link href="#">Features</Link>
                  <Link href="#">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-1">
                          <Text>Dropdown</Text>
                          <HiChevronDown className="size-4" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                        <DropdownMenuItem>Earnings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </Link>
                </ul>
              </nav>
              <div className="flex items-center justify-end lg:order-2 lg:justify-between">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="px-1" variant={"ghost"}>
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
                      <Link
                        href="#"
                        className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <div className="shrink-0">
                          <Image
                            width={100}
                            height={100}
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
                            &quot;Hey, what&apos;s up? All set for the
                            presentation?&quot;
                          </div>
                          <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                            a few moments ago
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="#"
                        className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <div className="shrink-0">
                          <Image
                            width={100}
                            height={100}
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
                      </Link>
                      <Link
                        href="#"
                        className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <div className="shrink-0">
                          <Image
                            width={100}
                            height={100}
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
                      </Link>
                      <Link
                        href="#"
                        className="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                      >
                        <div className="shrink-0">
                          <Image
                            width={100}
                            height={100}
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
                      </Link>
                      <Link
                        href="#"
                        className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        <div className="shrink-0">
                          <Image
                            width={100}
                            height={100}
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
                            &nbsp;posted a new video: Glassmorphism - learn how
                            to implement the new design trend.
                          </div>
                          <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                            3 hours ago
                          </div>
                        </div>
                      </Link>
                    </div>
                    <Link
                      href="#"
                      className="block border-t border-gray-200 bg-gray-50 py-2 text-center text-base font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:underline"
                    >
                      <div className="inline-flex items-center ">
                        <HiEye className="mr-2 size-5" />
                        View all
                      </div>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="mx-2 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="px-1">
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
                          text: "Sales",
                        },
                        {
                          icon: (
                            <HiUsers className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                          ),
                          text: "Users",
                        },
                        {
                          icon: (
                            <HiInbox className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                          ),
                          text: "Inbox",
                        },
                        {
                          icon: (
                            <HiUserCircle className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                          ),
                          text: "Profile",
                        },
                        {
                          icon: (
                            <HiCog className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                          ),
                          text: "Settings",
                        },
                        {
                          icon: (
                            <HiInboxIn className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                          ),
                          text: "Products",
                        },
                        {
                          icon: (
                            <HiCurrencyDollar className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                          ),
                          text: "Pricing",
                        },
                        {
                          icon: (
                            <HiClipboardList className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                          ),
                          text: "Billing",
                        },
                        {
                          icon: (
                            <HiLogout className="mx-auto mb-2 size-6 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400" />
                          ),
                          text: "Logout",
                        },
                      ].map((item, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          {item.icon}
                          <div className="text-sm font-medium">{item.text}</div>
                        </Link>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="mx-2 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"}>
                      modernui.com
                      <HiChevronDown className="size-4" />
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
                            <Label
                              htmlFor="helper-checkbox-4"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              <div>themesberg.com</div>
                              <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
                                Free templates and themes
                              </p>
                            </Label>
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
                            <Label
                              htmlFor="helper-checkbox-5"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              <div>iconscale.com</div>
                              <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
                                Open-source SVG icons
                              </p>
                            </Label>
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
                            <Label
                              htmlFor="helper-checkbox-6"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              <div>ui.glass</div>
                              <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
                                Glassmorphism UI framework
                              </p>
                            </Label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="ml-2 mr-4 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline"></span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="px-1">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        width={100}
                        height={100}
                        className="size-8 rounded-full"
                        src="https://github.com/shadcn.png"
                        alt=""
                      />
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
                    <ul
                      className="py-1  text-gray-500 dark:text-gray-400"
                      aria-labelledby="userMenuDropdownButton"
                    >
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          My profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Account settings
                        </Link>
                      </li>
                    </ul>
                    <ul
                      className="py-1 text-gray-500 dark:text-gray-400"
                      aria-labelledby="userMenuDropdownButton"
                    >
                      <li>
                        <Link
                          href="#"
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            className="mr-2 size-4 text-gray-400"
                            aria-hidden
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                          </svg>
                          My likes
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            className="mr-2 size-4 text-gray-400"
                            aria-hidden
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            {" "}
                            <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
                            <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
                            <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
                          </svg>
                          Collections
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <span className="flex items-center">
                            <svg
                              className="mr-2 size-4 text-primary-600 dark:text-primary-500"
                              aria-hidden
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
                        </Link>
                      </li>
                    </ul>
                    <ul
                      className="py-1  text-gray-500 dark:text-gray-400"
                      aria-labelledby="dropdown"
                    >
                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </Link>
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
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="mt-4 w-full">
            <form className="w-full px-4 lg:max-w-xl lg:px-6">
              <div className="flex">
                <Label
                  htmlFor="search-dropdown"
                  className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Email
                </Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="rounded-r-none" variant={"outline"}>
                      http + https
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuContent></DropdownMenuContent>
                    <DropdownMenuItem>https only</DropdownMenuItem>
                    <DropdownMenuItem>http</DropdownMenuItem>
                    <DropdownMenuItem>http + https</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="relative flex w-full">
                  <Input
                    id="search-dropdown"
                    placeholder="Domain or URL"
                    required
                    type="search"
                    className="w-full rounded-none"
                  />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="rounded-none" variant={"outline"}>
                        <span className="hidden lg:inline">Subdomains</span>
                        <HiChevronDown className="hidden size-4 lg:inline" />
                        <HiOutlineAdjustments className="size-4 lg:hidden" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Subfolders</DropdownMenuItem>
                      <DropdownMenuItem>Subdomains</DropdownMenuItem>
                      <DropdownMenuItem>Full domain</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button className="rounded-l-none px-2" type="submit">
                    <HiSearch className="size-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </div>
            </form>
            <div className="lg:mt-4 lg:hidden">
              <Link href="#" className="px-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="px-1">
                      <>
                        Website&nbsp;
                        <span className="ml-2 text-base text-gray-500 dark:text-gray-400">
                          modernui.com
                        </span>
                      </>
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
                            <Label
                              htmlFor="helper-checkbox-4"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              <div>themesberg.com</div>
                              <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
                                Free templates and themes
                              </p>
                            </Label>
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
                            <Label
                              htmlFor="helper-checkbox-5"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              <div>iconscale.com</div>
                              <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
                                Open-source SVG icons
                              </p>
                            </Label>
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
                            <Label
                              htmlFor="helper-checkbox-6"
                              className="font-medium text-gray-900 dark:text-gray-300"
                            >
                              <div>ui.glass</div>
                              <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
                                Glassmorphism UI framework
                              </p>
                            </Label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Link>
              <Link href="#" className="px-4 text-sm font-medium">
                Company
              </Link>
              <Link href="#" className="px-4 text-sm font-medium">
                Marketplace
              </Link>
              <Link href="#" className="px-4 text-sm font-medium">
                Features
              </Link>
              <Link href="#" className="px-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"}>
                      Dropdown
                      <HiChevronDown className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    <DropdownMenuItem>Earnings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
