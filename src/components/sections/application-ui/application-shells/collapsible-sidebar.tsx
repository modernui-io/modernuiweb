import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HiBell,
  HiCalendar,
  HiChartPie,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiClipboardList,
  HiCog,
  HiCollection,
  HiCurrencyDollar,
  HiDocumentText,
  HiDotsHorizontal,
  HiEye,
  HiHeart,
  HiHome,
  HiInbox,
  HiInboxIn,
  HiInformationCircle,
  HiLightningBolt,
  HiLockClosed,
  HiLogout,
  HiMail,
  HiMenuAlt2,
  HiOutlineChatAlt,
  HiPlusCircle,
  HiQuestionMarkCircle,
  HiSearch,
  HiSelector,
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
import { Checkbox } from "~/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);

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
      <header className="fixed top-0 z-50 w-full bg-background antialiased">
        <nav>
          <div className="border-gray-200 px-4 py-2.5 lg:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <a href="https://modernui.com" className="mr-6 flex">
                  <img
                    src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                    className="mr-3 h-8"
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
                        placeholder="Jump to Favorites, Apps, Pipelines..."
                        type="search"
                        className="pl-9"
                        {...form.register("search")}
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
                        <a
                          key={index}
                          href="#"
                          className="group block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          {item.icon}
                          <div className="text-sm font-medium">{item.text}</div>
                        </a>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <span className="mx-2 hidden h-5 w-px bg-gray-200 dark:bg-gray-600 lg:inline" />

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"}>
                      <span className="sr-only">Open user menu</span>
                      <img
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
                  className="lg:hidden"
                  variant={"ghost"}
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
                            src="https://github.com/shadcn.png"
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
                      {[
                        {
                          id: "helper-radio-4",
                          name: "helper-radio",
                          title: "themesberg.com",
                          description: "Free templates and themes",
                        },
                        {
                          id: "helper-radio-5",
                          name: "helper-radio",
                          title: "iconscale.com",
                          description: "Open-source SVG icons",
                        },
                        {
                          id: "helper-radio-6",
                          name: "helper-radio",
                          title: "ui.glass",
                          description: "Glassmorphism UI framework",
                        },
                      ].map((item) => (
                        <li key={item.id}>
                          <div className="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                            <div className="flex h-5 items-center">
                              <Checkbox id={item.id} name={item.name} />
                            </div>
                            <div className="ml-2 text-sm">
                              <Label
                                htmlFor={item.id}
                                className="font-medium text-gray-900 dark:text-gray-300"
                              >
                                <div>{item.title}</div>
                                <p
                                  id={`helper-radio-text-${item.id}`}
                                  className="text-xs font-normal text-gray-500 dark:text-gray-300"
                                >
                                  {item.description}
                                </p>
                              </Label>
                            </div>
                          </div>
                        </li>
                      ))}
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
                    {[
                      {
                        icon: (
                          <HiPlusCircle className="mr-2 size-4 text-gray-500 dark:text-gray-300" />
                        ),
                        text: "Create new app",
                      },
                      {
                        icon: (
                          <HiMail className="mr-2 size-4 text-gray-500 dark:text-gray-300" />
                        ),
                        text: "Inbox",
                      },
                      {
                        icon: (
                          <HiInformationCircle className="mr-2 size-4 text-gray-500 dark:text-gray-300" />
                        ),
                        text: "App info",
                      },
                      {
                        icon: (
                          <HiInboxIn className="mr-2 size-4 text-gray-500 dark:text-gray-300" />
                        ),
                        text: "Edit app",
                      },
                    ].map((item, index) => (
                      <DropdownMenuItem key={index}>
                        {item.icon}
                        {item.text}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </nav>
          {isNavVisible && (
            <div>
              <div className="flex w-full flex-col items-center border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:flex-row [&_li]:w-full lg:[&_li]:w-auto">
                {[
                  { label: "Home", href: "#" },
                  { label: "Company", href: "#" },
                  { label: "Team", href: "#" },
                  { label: "Features", href: "#" },
                  { label: "Marketplace", href: "#" },
                  { label: "Resources", href: "#" },
                  { label: "Forum", href: "#" },
                  { label: "Support", href: "#" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block border-b p-0 dark:border-gray-700 md:inline md:border-b-0"
                    >
                      <span className="block border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 hover:border-primary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:border-primary-500 dark:hover:text-primary-500">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <aside
        id="default-sidebar"
        className="fixed left-0 top-0 z-40 flex h-screen bg-background pt-28 transition-transform lg:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="z-30 h-full w-16 overflow-y-auto border-r border-gray-200 px-3 py-5 dark:border-gray-700">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
              className="mb-6 h-7 pl-2"
              alt="ModernUI Logo"
            />
          </a>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiHome className="size-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiUser className="size-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiChartPie className="size-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiInboxIn className="size-6" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center rounded-lg p-2 text-gray-400 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <HiLockClosed className="size-6" />
              </a>
            </li>
          </ul>
        </div>
        {isSidebarOpen && (
          <div
            className={`h-full overflow-y-auto border-r border-gray-200 px-3 py-5 dark:border-gray-700
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
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
                      {["Settings", "Kanban", "Calendar"].map((link, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {link}
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
                        { label: "Products" },
                        { label: "Billing" },
                        { label: "Invoice" },
                      ].map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
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
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Messages
                  </span>
                  <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                    6
                  </span>
                </a>
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
                        { label: "Sign In" },
                        { label: "Sign Up" },
                        { label: "Forgot Password" },
                      ].map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {item.label}
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
                  <a
                    href="#"
                    className="group flex items-center rounded-lg p-2 text-base font-normal transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Button
          variant={"ghost"}
          className="absolute bottom-2 left-20 inline-flex cursor-pointer rounded-full p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <HiChevronLeft
            className={`size-6 ${!isSidebarOpen && "rotate-180"}`}
            onClick={toggleSidebar}
          />
        </Button>
      </aside>

      <aside
        id="sidebar-contacts"
        className="fixed right-0 top-0 z-40 h-full w-16 border-l bg-background pt-28 transition-transform"
        aria-label="Sidebar"
      >
        <div className="block h-full w-16 overflow-y-auto px-3 py-4">
          <ul className="mb-4 space-y-2 border-b border-gray-200 pb-4 dark:border-gray-700">
            {[
              { icon: <HiCalendar className="size-6" />, label: "Calendar" },
              { icon: <HiClipboardList className="size-6" />, label: "Tasks" },
              { icon: <HiShoppingBag className="size-6" />, label: "Products" },
              { icon: <HiInboxIn className="size-6" />, label: "Inbox" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center rounded-lg p-2 text-gray-500 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </a>
              </li>
            ))}
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

      <main
        className={`h-auto bg-background p-4 pr-20 pt-48 ${isSidebarOpen ? "pl-72" : "pl-20"}`}
      >
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
