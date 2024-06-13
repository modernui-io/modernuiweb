import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  HiAcademicCap,
  HiArrowRight,
  HiBell,
  HiBookOpen,
  HiChartPie,
  HiChevronDown,
  HiClipboardList,
  HiCog,
  HiCollection,
  HiCurrencyDollar,
  HiDocumentText,
  HiEye,
  HiHeart,
  HiIdentification,
  HiInbox,
  HiInboxIn,
  HiLockClosed,
  HiLogout,
  HiMenuAlt2,
  HiOutlineAdjustments,
  HiOutlineChatAlt,
  HiOutlineQuestionMarkCircle,
  HiPhone,
  HiQuestionMarkCircle,
  HiShoppingBag,
  HiUserAdd,
  HiUserCircle,
  HiUsers,
  HiVideoCamera,
  HiViewGrid,
  HiX,
} from "react-icons/hi";

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
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function UserProfileSidebarApplicationShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className={`fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background transition-transform lg:translate-x-0 ${
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
        <div className="h-full overflow-y-auto border-gray-200 bg-white px-3 py-5 dark:border-gray-700 dark:bg-gray-800">
          <Link
            href="https://modernui.com"
            className="mb-5 flex items-center pl-2"
          >
            <Image
              width={100}
              height={100}
              src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
              className="mr-3 h-6 w-auto sm:h-8"
              alt="ModernUI Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              ModernUI
            </span>
          </Link>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="group flex items-center rounded-lg p-2 text-base font-normal"
              >
                <HiChartPie className="size-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3">Overview</span>
              </Link>
            </li>
            <li>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <HiDocumentText className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Pages
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-pages" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "Settings" },
                      { href: "#", label: "Kanban" },
                      { href: "#", label: "Calendar" },
                    ].map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
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
                    <HiShoppingBag className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />

                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Sales
                    </span>
                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-sales" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "Products" },
                      { href: "#", label: "Billing" },
                      { href: "#", label: "Invoice" },
                    ].map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </a>
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
                <HiInboxIn className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                <span className="ml-3 flex-1 whitespace-nowrap">Messages</span>
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                  6
                </span>
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
                      Authentication
                    </span>

                    <HiChevronDown className="size-6" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul id="dropdown-authentication" className="space-y-2 py-2">
                    {[
                      { href: "#", label: "Sign In" },
                      { href: "#", label: "Sign Up" },
                      { href: "#", label: "Forgot Password" },
                    ].map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          </ul>
          <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
            {[
              {
                icon: (
                  <HiDocumentText className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                ),
                label: "Docs",
              },
              {
                icon: (
                  <HiCollection className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                ),
                label: "Components",
              },
              {
                icon: (
                  <HiQuestionMarkCircle className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                ),
                label: "Help",
              },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 z-20 hidden w-full justify-center space-x-4 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 lg:flex">
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

      <Button
        variant={"ghost"}
        onClick={toggleSidebar}
        className={`${isSidebarOpen ? "pl-64" : "pl-3"} absolute top-5 ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden`}
      >
        <span className="sr-only">Open sidebar</span>
        <HiMenuAlt2 className="size-6" />
      </Button>

      <aside
        id="default-sidebar"
        className={`fixed right-0 top-0 z-40 h-screen w-64 border-l bg-background transition-transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Sidenav"
      >
        <div className="h-full overflow-y-auto border-r border-gray-200 bg-white px-3 py-5 dark:border-gray-700 dark:bg-gray-800">
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
            <Text className="font-light text-gray-500 dark:text-gray-400">
              name@company.com
            </Text>
            <Link
              href="#"
              className="my-5 inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              <HiLogout className="mr-1 size-5" />
              Logout
            </Link>
            <div className="border-b pb-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"} className="px-2">
                    <span className="sr-only">View apps</span>
                    <HiViewGrid className="size-6" />
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
                  <Button variant={"ghost"} className="px-2">
                    <span className="sr-only">View notifications</span>
                    <HiBell className="size-6" />
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
                    <span className="sr-only">Support</span>
                    <HiOutlineQuestionMarkCircle className="size-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <div className="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    Support
                  </div>
                  <div className="flex flex-col border-t dark:border-gray-600">
                    {[
                      {
                        text: "Learn how to create new projects",
                      },
                      {
                        text: "Invite your coworkers",
                      },
                      {
                        text: "Become a pro user",
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="group block border-b p-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        <Text className="text-sm text-gray-400">
                          {item.text}
                        </Text>
                        <span className="flex items-center gap-1 text-xs">
                          Read more <HiArrowRight className="size-3" />
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="#"
                      className="block bg-gray-50 py-2 text-center text-base font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:underline"
                    >
                      <div className="inline-flex items-center ">
                        <HiBookOpen className="mr-2 size-4" />
                        View full docs
                      </div>
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <ul className="space-y-2 pt-3">
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
                    <HiClipboardList className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
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
                        <a
                          href={link.href}
                          className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {link.label}
                        </a>
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

      <main className="flex size-full flex-1 flex-col items-stretch space-y-4 bg-background p-4 pt-20 lg:px-72 lg:pt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-96 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"
          ></div>
        ))}
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
