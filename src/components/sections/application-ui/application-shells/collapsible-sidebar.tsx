import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  HiEye,
  HiHeart,
  HiHome,
  HiInbox,
  HiInboxIn,
  HiLightBulb,
  HiLightningBolt,
  HiLocationMarker,
  HiLockClosed,
  HiLogout,
  HiOutlineChatAlt,
  HiPlus,
  HiPresentationChartBar,
  HiSearch,
  HiShoppingBag,
  HiUser,
  HiUserAdd,
  HiUserCircle,
  HiUsers,
  HiVideoCamera,
  HiViewGrid,
} from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
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

const formSchema = z.object({
  search: z.string(),
});

export function CollapsibleSidebarApplicationShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b bg-background antialiased">
        <nav>
          <div className="border-gray-200 px-4 py-2.5 lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <a href="https://modernui.com" className="mr-6 flex">
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
                </a>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
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
                        placeholder="Search"
                        type="search"
                        className="pl-9"
                        {...form.register("search")}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  className="px-2 lg:hidden"
                  variant={"ghost"}
                  onClick={toggleSidebar}
                  aria-label="Toggle sidebar"
                >
                  <span className="sr-only">Open menu</span>
                  <HiSearch className="size-6" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="px-2">
                      <span className="sr-only">View notifications</span>
                      <HiBell className="size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-96">
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
                  <DropdownMenuContent className="w-60">
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
              </div>
            </div>
          </div>
        </nav>
      </header>

      <aside
        id="default-sidebar"
        className={`fixed left-0 top-0 z-40 h-screen bg-background pt-12 transition-transform lg:flex
        ${isSidebarOpen ? "flex" : "hidden"}
        `}
        aria-label="Sidenav"
      >
        <div className="z-30 h-full w-16 overflow-y-auto border-r border-gray-200 px-3 py-5 dark:border-gray-700">
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiHome className="size-6" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiUser className="size-6" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiChartPie className="size-6" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiInboxIn className="size-6" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiLockClosed className="size-6" />
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`h-full w-52 overflow-y-auto border-r border-gray-200 px-3 py-5 dark:border-gray-700 lg:block
          ${isSidebarOpen ? "block" : "hidden"}
          `}
        >
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Customization
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-pages" className="space-y-2 py-2">
                    {["Settings", "Kanban", "Calendar"].map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
            <li>
              <Text className="p-5 pb-2 text-gray-500 dark:text-gray-700">
                Reports
              </Text>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Realtime
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-pages" className="space-y-2 py-2">
                    {["Overview", "Locations", "Content", "Events"].map(
                      (link, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {link}
                          </Link>
                        </li>
                      ),
                    )}
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
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Acquisition
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-pages" className="space-y-2 py-2">
                    {["Overview", "Locations", "Content", "Events"].map(
                      (link, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {link}
                          </Link>
                        </li>
                      ),
                    )}
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
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Audience
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-pages" className="space-y-2 py-2">
                    {["Overview", "Locations", "Content", "Events"].map(
                      (link, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {link}
                          </Link>
                        </li>
                      ),
                    )}
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
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Behaviour
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-pages" className="space-y-2 py-2">
                    {["Overview", "Locations", "Content", "Events"].map(
                      (link, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {link}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          </ul>
          <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
            {[
              {
                label: "Docs",
              },
              {
                label: "Components",
              },
              {
                label: "Help",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <aside
        id="sidebar-contacts"
        className="fixed right-0 top-0 z-40 hidden h-full w-16 border-l bg-background pt-12 transition-transform lg:block"
        aria-label="Sidebar"
      >
        <div className="block h-full w-16 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-3">
            {[
              { icon: <HiCalendar className="size-6" />, label: "Calendar" },
              { icon: <HiLightBulb className="size-6" />, label: "Notes" },
              { icon: <HiClipboardList className="size-6" />, label: "Tasks" },
              { icon: <HiUsers className="size-6" />, label: "Users" },
              { icon: <HiVideoCamera className="size-6" />, label: "Media" },
              {
                icon: <HiPresentationChartBar className="size-6" />,
                label: "Statistics",
              },
              {
                icon: <HiLocationMarker className="size-6" />,
                label: "Locations",
              },
              {
                icon: <HiPlus className="size-6" />,
                label: "Add new item",
              },
            ].map((item, index) => (
              <li
                key={index}
                className={`${index === 4 && "mb-4 space-y-2 border-b border-gray-200 pb-4 dark:border-gray-700"}`}
              >
                <Link
                  href="#"
                  className="flex items-center rounded-lg p-2 text-gray-500 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className={"h-auto bg-background p-4 pt-20 lg:pl-72 lg:pr-20"}>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-64"
            ></div>
          ))}
        </div>
        <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"
            ></div>
          ))}
        </div>
        <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-48 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 md:h-72"
            ></div>
          ))}
        </div>
      </main>
    </>
  );
}
