import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  HiPlus,
  HiSearch,
  HiShoppingBag,
  HiUserAdd,
  HiUserCircle,
  HiUsers,
  HiVideoCamera,
  HiViewGrid,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export function CenteredDoubleDashboardNavbarWithCTAButtonsAndSearchInput() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

  const navClassName = `order-3 border-t px-4 py-2.5 lg:order-2 lg:flex lg:px-6 ${isNavVisible ? "flex" : "hidden"}`;

  return (
    <header className="flex flex-col bg-background antialiased">
      <nav className="order-1 border-b border-gray-200 px-4 py-2.5 lg:px-6">
        <div className="order-1 px-4 py-2.5 lg:px-6">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0 items-center justify-start">
              <Link href="#" className="mr-6 flex">
                <Image
                  width={100}
                  height={100}
                  src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                  className="mr-3 h-8 w-auto"
                  alt=""
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  ModernUI
                </span>
              </Link>
            </div>
            <ul className="mt-0 hidden w-full flex-col justify-center text-sm font-medium text-gray-500 dark:text-gray-400 lg:flex lg:flex-row">
              <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-3 hover:text-gray-900 dark:hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-3 hover:text-gray-900 dark:hover:text-white"
                >
                  Clients
                </Link>
              </li>
              <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-3 hover:text-gray-900 dark:hover:text-white"
                >
                  Marketing
                </Link>
              </li>
              <li className="block border-b dark:border-gray-700 lg:inline lg:border-b-0">
                <Link
                  href="#"
                  className="block rounded-lg px-4 py-3 hover:text-gray-900 dark:hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="ml-4 flex shrink-0 items-center justify-between lg:order-2">
              <Button className="mr-3 hidden lg:inline">
                <div className="flex items-center gap-2">
                  <HiPlus className="-ml-1 mr-1 size-4" />
                  Upgrade
                </div>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"} className="px-2">
                    <span className="sr-only">View notifications</span>
                    <HiBell className="size-5" />
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
                          &nbsp;posted a new video: Glassmorphism - learn how to
                          implement the new design trend.
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"} className="px-2">
                    <span className="sr-only">View apps</span>
                    <HiViewGrid className="size-5" />
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
                      <Link
                        key={index}
                        href="#"
                        className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        {item.icon}
                        <div className="text-sm font-medium">{item.label}</div>
                      </Link>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"} className="pl-2 pr-0">
                    <span className="sr-only">Open user menu</span>
                    <Image
                      width={100}
                      height={100}
                      className="size-7 rounded-full"
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
                onClick={() => setIsNavVisible(!isNavVisible)}
              >
                <span className="sr-only">Open menu</span>
                <HiMenu className="size-6" />
              </Button>
            </div>
          </div>
        </div>
        <div className={navClassName}>
          <div className="flex w-full flex-col items-center justify-between lg:flex-row">
            <ul className="order-2 mt-0 flex w-full flex-col rounded-lg border border-gray-200 bg-gray-50 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 lg:order-1 lg:flex-row lg:rounded-none lg:border-0 lg:bg-white dark:lg:bg-gray-900">
              {[
                { href: "#", label: "Projects", current: true },
                { href: "#", label: "Sales", current: false },
                { href: "#", label: "Team", current: false },
                { href: "#", label: "Workspaces", current: false },
                { href: "#", label: "Tasks", current: false },
                { href: "#", label: "Analytics", current: false },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-4 py-3 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 ${
                      link.current
                        ? "text-primary-600 hover:bg-gray-50 hover:text-primary-700 dark:text-primary-500 dark:hover:bg-gray-800"
                        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                    }`}
                    aria-current={link.current ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="order-1 mb-4 flex w-full items-center justify-end lg:order-2 lg:mb-0 lg:ml-4 lg:max-w-sm">
              <Label htmlFor="simple-search" className="sr-only">
                Search
              </Label>
              <div className="relative flex items-center">
                <HiSearch className="absolute left-3 size-5 text-gray-500 dark:text-gray-400" />
                <Input
                  id="search"
                  name="search"
                  placeholder="Find anything"
                  required
                  type="search"
                  className="w-full pl-9 lg:w-fit"
                />
              </div>

              <Button type="submit" className="ml-3 [&>span]:py-3">
                <HiSearch className="size-5" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
