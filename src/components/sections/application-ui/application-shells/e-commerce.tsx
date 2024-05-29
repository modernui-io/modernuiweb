import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HiBell,
  HiChartPie,
  HiChevronDown,
  HiCog,
  HiCreditCard,
  HiDotsHorizontal,
  HiEye,
  HiGift,
  HiGlobe,
  HiHeart,
  HiIdentification,
  HiInbox,
  HiInboxIn,
  HiLogout,
  HiOutlineChatAlt,
  HiSearch,
  HiShoppingCart,
  HiStar,
  HiTruck,
  HiUser,
  HiUserAdd,
  HiVideoCamera,
  HiViewList,
} from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const formSchema = z.object({
  search: z.string(),
});

export function ECommerceApplicationShell() {
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
      <div className="bg-background antialiased">
        <header>
          <nav className="inset-x-0 top-0 z-50 border-b border-gray-200 px-4 py-2.5 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                <a href="https://modernui.com" className="mr-6 flex">
                  <Image
                    width={100}
                    height={100}
                    src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4"
                    className="mr-3 h-8 w-auto"
                    alt="ModernUI Logo"
                  />
                  <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                    ModernUI
                  </span>
                </a>

                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="hidden md:block"
                >
                  <div className="flex">
                    <Label
                      htmlFor="search-dropdown"
                      className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Email
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="rounded-r-none border border-primary py-5">
                          All categories
                          <HiChevronDown className="ml-1 size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <div id="dropdown" className="w-44">
                          <ul
                            className="text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdown-button"
                          >
                            <DropdownMenuItem>
                              <Button
                                variant={"ghost"}
                                className="inline-flex w-full px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Electronics
                              </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Button
                                variant={"ghost"}
                                className="inline-flex w-full px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Vehicles
                              </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Button
                                variant={"ghost"}
                                className="inline-flex w-full px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Instruments
                              </Button>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Button
                                variant={"ghost"}
                                className="inline-flex w-full px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Clothings
                              </Button>
                            </DropdownMenuItem>
                          </ul>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="relative w-full">
                      <Input
                        type="search"
                        id="search-dropdown"
                        placeholder="Search Products... (ie. iPhone 12)"
                        required
                        className="w-72 rounded-none py-5"
                        {...form.register("search")}
                      />
                      <Button
                        type="submit"
                        className="absolute -right-3 top-0 rounded-l-none rounded-r-lg border border-primary p-2.5 py-5 text-sm font-medium"
                      >
                        <HiSearch className="size-5" />
                        <span className="sr-only">Search</span>
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="flex items-center gap-2"
                    >
                      <USFlagIcon />
                      English (US)
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
                <Button
                  variant={"ghost"}
                  className="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 md:hidden"
                >
                  <span className="sr-only">Search</span>
                  <HiSearch className="size-6" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"}>
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
                <Link
                  href="#"
                  className="inline-flex items-center rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-800"
                >
                  <div className="relative">
                    <HiShoppingCart className="size-6 text-gray-500 dark:text-gray-400 sm:mr-2" />
                    <span className="absolute -right-2 -top-1.5 size-4 rounded-full bg-red-700 text-center text-xs text-white sm:right-0">
                      2
                    </span>
                  </div>
                  <span className="ml-1 hidden sm:inline">My Cart</span>
                </Link>
                <Button
                  variant={"ghost"}
                  onClick={toggleSidebar}
                  className="items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 lg:hidden"
                >
                  <span className="sr-only">Open menu</span>
                  <HiViewList className="size-6" />
                </Button>
              </div>
            </div>
          </nav>
          <nav
            id="toggleMobileMenu"
            className="border-b border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-700 lg:hidden"
          >
            <div className="px-4 py-2">
              <div className="flex items-center">
                <ul className="flex items-center text-sm font-medium text-gray-900">
                  {[
                    { text: "Home" },
                    { text: "Shop" },
                    { text: "Today's deals" },
                    { text: "Blog", hidden: "md:block lg:inline" },
                    { text: "Contact", hidden: "md:block lg:inline" },
                    { text: "Forum", hidden: "md:block lg:inline" },
                    { text: "Support", hidden: "md:block lg:inline" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className={`block lg:inline ${item.hidden}`}
                    >
                      <Link
                        href="#"
                        className="inline-block rounded-lg px-3 py-2 hover:bg-gray-200 hover:text-gray-900 dark:text-white dark:hover:bg-gray-600"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                  <li className="block md:hidden">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant={"ghost"}
                          className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600"
                        >
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
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

        <div className="relative mx-auto flex size-full max-w-screen-2xl px-4 pt-4 xl:pt-8">
          <div>
            <aside
              id="sidebar"
              className={`fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-background transition-transform dark:border-gray-700 lg:relative lg:z-0 lg:block lg:h-auto lg:translate-x-0 lg:rounded-lg lg:border-r-0
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                `}
              aria-label="Sidebar"
            >
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="px-3 pt-3 md:hidden"
              >
                <Label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Search
                </Label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiSearch className="size-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <Input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-6 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Search..."
                    required
                    {...form.register("search")}
                  />
                  <Button
                    size={"sm"}
                    type="submit"
                    className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-3 py-1 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </Button>
                </div>
              </form>

              <div className="h-full overflow-y-auto px-3 py-5 lg:rounded-lg">
                <Link
                  href="#"
                  className="mb-5 flex w-full items-center justify-between rounded-lg p-2 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="flex items-center">
                    <Image
                      width={100}
                      height={100}
                      src="https://github.com/shadcn.png"
                      className="mr-3 size-8 rounded-full"
                      alt="Bonnie avatar"
                    />
                    <div className="text-left">
                      <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                        Bonnie Green
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        bonnie@modernui.com
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="my-5 border-y border-gray-100 py-5 dark:border-gray-700">
                  <ul className="grid grid-cols-3 gap-2">
                    <li>
                      <Link
                        href="#"
                        className="group flex flex-col items-center justify-center rounded-xl bg-primary-50 p-2.5 hover:bg-primary-100 dark:bg-primary-900 dark:hover:bg-primary-800"
                      >
                        <span className="mb-1 flex size-8 items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 dark:bg-primary-800 dark:group-hover:bg-primary-700">
                          <HiUser className="size-5 text-primary-600 dark:text-primary-300" />
                        </span>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-300">
                          Profile
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="group flex flex-col items-center justify-center rounded-xl bg-purple-50 p-2.5 hover:bg-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800"
                      >
                        <span className="mb-1 flex size-8 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 dark:bg-purple-800 dark:group-hover:bg-purple-700">
                          <HiGift className="size-5 text-purple-600 dark:text-purple-300" />
                        </span>
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
                          Gifts
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="group flex flex-col items-center justify-center rounded-xl bg-teal-50 p-2.5 hover:bg-teal-100 dark:bg-teal-900 dark:hover:bg-teal-800"
                      >
                        <span className="mb-1 flex size-8 items-center justify-center rounded-full bg-teal-100 group-hover:bg-teal-200 dark:bg-teal-800 dark:group-hover:bg-teal-700">
                          <HiGlobe className="size-5 text-teal-600 dark:text-teal-300" />
                        </span>
                        <span className="text-sm font-medium text-teal-600 dark:text-teal-300">
                          Support
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
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
                          className="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          <HiTruck className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                          <span className="ml-3 flex-1 whitespace-nowrap text-left">
                            Orders
                          </span>
                          <HiChevronDown className="size-6" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <ul id="dropdown-orders" className="space-y-2 py-2">
                          {[
                            "Completed orders",
                            "Orders in delivery",
                            "Canceled orders",
                            "Returns",
                          ].map((text, index) => (
                            <li key={index}>
                              <Link
                                href="#"
                                className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >
                                {text}
                              </Link>
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
                          className="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          <HiCreditCard className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                          <span className="ml-3 flex-1 whitespace-nowrap text-left">
                            Payments
                          </span>
                          <HiChevronDown className="size-6" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <ul id="dropdown-payments" className="space-y-2 py-2">
                          {["Invoices", "Payouts", "Billing information"].map(
                            (text, index) => (
                              <li key={index}>
                                <Link
                                  href="#"
                                  className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                  {text}
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <HiInboxIn className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Messages
                      </span>
                      <span className="inline-flex size-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                        5
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <HiStar className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Reviews
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <HiEye className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Recently viewed
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <HiHeart className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Favourite items
                      </span>
                    </Link>
                  </li>
                </ul>
                <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <HiCog className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Settings
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <HiIdentification className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Personal info
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      <HiCreditCard className="size-6 shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Subscriptions
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="group flex items-center rounded-lg p-2 text-base font-medium text-red-600 hover:bg-red-100 dark:text-red-500 dark:hover:bg-gray-700"
                    >
                      <HiLogout className="size-6 shrink-0 text-red-600 transition duration-75 dark:text-red-500" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Log out
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          <main className="h-full flex-1 overflow-y-auto pb-4 lg:pl-4">
            <div className="mb-4 grid grid-cols-2 gap-4 xl:grid-cols-4">
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  key={index}
                  className="h-32 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-64"
                ></div>
              ))}
            </div>

            {/* Grid 2 */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              {Array.from({ length: 2 }, (_, index) => (
                <div
                  key={index}
                  className="h-48 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-96"
                ></div>
              ))}
            </div>

            {/* Grid 3 */}
            <div className="mb-4 grid grid-cols-3 gap-4">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="h-32 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-64"
                ></div>
              ))}
            </div>

            {/* Grid 4 */}
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 2 }, (_, index) => (
                <div
                  key={index}
                  className="h-48 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 lg:h-96"
                ></div>
              ))}
            </div>
          </main>
        </div>
      </div>
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
