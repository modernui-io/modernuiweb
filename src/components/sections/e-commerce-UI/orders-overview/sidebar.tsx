import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronDown,
  ChevronRight,
  Download,
  Eye,
  FileText,
  Filter,
  Gift,
  Heart,
  Home,
  Info,
  LogOut,
  Package,
  RefreshCcw,
  Search,
  Settings,
  ShoppingBag,
  Star,
  Trash2,
  Truck,
  User,
  Wallet,
} from "lucide-react";

import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/custom/pagination";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import MasterCardDark from "~/lib/assets/images/mastercard-dark.svg";
import MasterCard from "~/lib/assets/images/mastercard.svg";
import Paypal from "~/lib/assets/images/paypal.svg";
import PaypalDark from "~/lib/assets/images/paypal.svg";
import VisaDark from "~/lib/assets/images/visa-dark.svg";
import Visa from "~/lib/assets/images/visa.svg";

const data = {
  user: {
    name: "Jese Leos",
    email: "jese@morderuiweb.com",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
  },
  menuItems: [
    { icon: <User />, label: "Profile", bgColor: "primary" },
    { icon: <Gift />, label: "Gifts", bgColor: "purple" },
    { icon: <Wallet />, label: "Wallet", bgColor: "teal" },
    { icon: <Package />, label: "My orders", bgColor: "blue" },
    { icon: <Star />, label: "Reviews", bgColor: "yellow" },
    { icon: <Truck />, label: "Delivery addresses", bgColor: "green" },
    { icon: <Settings />, label: "Settings", bgColor: "gray" },
    { icon: <LogOut />, label: "Log out", bgColor: "red" },
  ],
  orders: [
    {
      id: "#FWB1273643",
      status: "Pre-order",
      statusColor: "primary",
      date: "24 January 2024",
      email: "name@example.com",
      paymentMethod: "Credit card",
      paymentLogo: MasterCard,
      expectedDelivery: "Monday 16 Jul 2024",
    },
    {
      id: "#FWB1273722",
      status: "In transit",
      statusColor: "yellow",
      date: "01 May 2024",
      email: "name@example.com",
      paymentMethod: "Credit card",
      paymentLogo: Visa,
      expectedDelivery: "Today",
    },
    {
      id: "#FWB1273756",
      status: "Completed",
      statusColor: "green",
      date: "01 May 2024",
      email: "name@example.com",
      paymentMethod: "Credit card",
      paymentLogo: Visa,
      expectedDelivery: "Friday 04 May 2024",
    },
    {
      id: "#FWB1273855",
      status: "Cancelled",
      statusColor: "red",
      date: "08 March 2024",
      email: "name@example.com",
      paymentMethod: "Paypal",
      paymentLogo: Paypal,
      expectedDelivery: "Monday 08 March 2024",
    },
    {
      id: "#FWB1273444",
      status: "Completed",
      statusColor: "green",
      date: "09 February 2024",
      email: "name@example.com",
      paymentMethod: "Monthly installments",
      paymentLogo: "",
      expectedDelivery: "Thursday 14 Feb 2024",
    },
  ],
};

const Breadcrumbs = () => {
  const breadcrumbs = [
    {
      icon: <Home className="me-2 size-4 text-primary-700" />,
      label: "Home",
      href: "#",
    },
    {
      icon: <ChevronRight className="mx-1 size-4 text-primary-700" />,
      label: "My account",
      href: "#",
    },
    {
      icon: <ChevronRight className="mx-1 size-4 text-primary-700" />,
      label: "All orders",
      href: "#",
    },
  ];

  return (
    <nav className="mb-4 flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="inline-flex items-center">
            <Link
              href={crumb.href}
              className="inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-600  "
            >
              {crumb.icon}
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

const UserMenu = () => {
  const mainMenuItems = [
    {
      href: "#",
      icon: (
        <ShoppingBag className="size-6 text-primary-400 transition duration-75 group-hover:text-primary-900  " />
      ),
      label: "My orders",
    },
    {
      href: "#",
      icon: (
        <Star className="size-6 text-primary-400 transition duration-75 group-hover:text-primary-900  " />
      ),
      label: "Reviews",
    },
    {
      href: "#",
      icon: (
        <Home className="size-6 text-primary-400 transition duration-75 group-hover:text-primary-900  " />
      ),
      label: "Delivery addresses",
    },
    {
      href: "#",
      icon: (
        <Eye className="size-6 text-primary-400 transition duration-75 group-hover:text-primary-900  " />
      ),
      label: "Recently viewed",
    },
    {
      href: "#",
      icon: (
        <Heart className="size-6 text-primary-400 transition duration-75 group-hover:text-primary-900  " />
      ),
      label: "Favourite items",
    },
  ];

  const secondaryMenuItems = [
    {
      href: "#",
      icon: (
        <Settings className="size-6 text-primary-400 transition duration-75 group-hover:text-primary-900  " />
      ),
      label: "Settings",
    },
    {
      href: "#",
      icon: (
        <LogOut className="size-6 shrink-0 text-red-600 transition duration-75 dark:text-red-500" />
      ),
      label: "Log out",
      className: "text-red-600 hover:bg-red-100 dark:text-red-500 ",
    },
  ];

  return (
    <aside
      id="sidebar"
      className="hidden h-full w-80 shrink-0 overflow-y-auto border border-primary-200 bg-background p-3 shadow-sm  lg:block lg:rounded-lg"
    >
      <Popover>
        <PopoverTrigger className="mb-3 flex w-full items-center justify-between rounded-lg bg-background p-2 hover:bg-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-200 ">
          <span className="sr-only">Open user menu</span>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <Image
                src="https://xsgames.co/randomusers/assets/avatars/female/1.jpg"
                className="mr-3 size-8 rounded-md"
                height={32}
                width={32}
                alt="Bonnie avatar"
              />
              <div className="text-left">
                <div className="mb-0.5 font-semibold leading-none text-primary-900 ">
                  Jese Leos (Personal)
                </div>
                <div className="text-sm text-primary-500 ">
                  jese@moderUiWeb.com
                </div>
              </div>
            </div>
            <ChevronDown className="size-5 text-primary-900 " />
          </div>
        </PopoverTrigger>
        <PopoverContent className="mt-1 w-[294px] divide-y divide-primary-100 rounded-lg bg-background p-0 shadow">
          <Link
            href="#"
            className="flex items-center rounded px-4 py-3 hover:bg-primary-50 "
          >
            <Image
              src="https://xsgames.co/randomusers/assets/avatars/male/1.jpg"
              className="mr-3 size-8 rounded"
              width={32}
              height={32}
              alt="Michael avatar"
            />
            <div className="text-left">
              <div className="mb-0.5 font-semibold leading-none text-primary-900 ">
                ModernUiWeb LLC (Company)
              </div>
              <div className="text-sm text-primary-500 ">
                company@modernUiWeb.com
              </div>
            </div>
          </Link>
        </PopoverContent>
      </Popover>

      <div className="mb-4 w-full border-y border-primary-100 py-4 ">
        <ul className="grid grid-cols-3 gap-2">
          <li>
            <Link
              href="#"
              className="group flex flex-col items-center justify-center rounded-xl bg-primary-50 p-2.5 hover:bg-primary-100 "
            >
              <span className="mb-1 flex size-8 items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200">
                <User className="size-5 text-primary-600 " />
              </span>
              <span className="text-sm font-medium text-primary-600 ">
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
                <Gift className="size-5 text-purple-600 dark:text-purple-300" />
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
                <Wallet className="size-5 text-teal-600 dark:text-teal-300" />
              </span>
              <span className="text-sm font-medium text-teal-600 dark:text-teal-300">
                Wallet
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <ul className="space-y-2">
        {mainMenuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`group flex items-center rounded-lg p-2 text-base font-medium text-primary-900 hover:bg-primary-100  `}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="mt-5 space-y-2 border-t border-primary-100 pt-5 ">
        {secondaryMenuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`group flex items-center rounded-lg p-2 text-base font-medium text-primary-900 hover:bg-primary-100   ${item.className ?? ""}`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const Orders = () => {
  const orders = [
    {
      id: "#FWB1273643",
      status: "Pre-order",
      statusColor: "bg-primary-100 text-primary-800",
      statusDarkColor: " ",
      date: "24 January 2024",
      email: "name@example.com",
      payment: {
        method: "Credit card",
        lightLogo: MasterCard,
        darkLogo: MasterCardDark,
      },
      alert: {
        text: "Expected delivery on Monday 16 Jul 2024",
        color:
          "bg-orange-50 text-orange-800 dark:bg-primary-200 dark:text-orange-300",
      },
    },
    {
      id: "#FWB1273722",
      status: "In transit",
      statusColor: "bg-yellow-100 text-yellow-800",
      statusDarkColor:
        "dark:bg-yellow-900 dark:bg-primary-200 dark:text-yellow-300",
      date: "01 May 2024",
      email: "name@example.com",
      payment: {
        method: "Credit card",
        lightLogo: Visa,
        darkLogo: VisaDark,
      },
      alert: {
        text: "Expected delivery Today",
        color:
          "bg-orange-50 text-orange-800 dark:bg-primary-200  dark:text-orange-300",
      },
    },
    {
      id: "#FWB1273756",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800",
      statusDarkColor: "dark:bg-green-900 dark:text-green-300",
      date: "01 May 2024",
      email: "name@example.com",
      payment: {
        method: "Credit card",
        lightLogo: Visa,
        darkLogo: VisaDark,
      },
      alert: {
        text: "Delivered on Friday 04 May 2024",
        color: "bg-primary-100 text-primary-800  ",
      },
    },
    {
      id: "#FWB1273855",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
      statusDarkColor: "dark:bg-red-900 dark:text-red-300",
      date: "08 March 2024",
      email: "name@example.com",
      payment: {
        method: "PayPal",
        lightLogo: Paypal,
        darkLogo: PaypalDark,
      },
      alert: {
        text: "Cancelled on Monday 08 March 2024",
        color: "bg-primary-100 text-primary-800  ",
      },
    },
    {
      id: "#FWB1273444",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800",
      statusDarkColor: "dark:bg-green-900 dark:text-green-300",
      date: "09 February 2024",
      email: "name@example.com",
      payment: {
        method: "Monthly installments",
        lightLogo: "",
        darkLogo: "",
      },
      alert: {
        text: "Delivered on Thursday 14 Feb 2024",
        color: "bg-primary-50 text-primary-800  ",
      },
    },
  ];
  return orders.map((order, index) => (
    <div
      key={order.id}
      className="mb-4 rounded-lg border border-primary-200 bg-background p-4 shadow-sm "
    >
      <div className="items-start justify-between border-b border-primary-100 pb-4  md:flex lg:block xl:flex">
        <div className="mb-4 justify-between sm:flex sm:items-center md:mb-0 md:block lg:mb-4 lg:flex xl:mb-0 xl:block">
          <Heading level={6} className="mb-2 text-primary-500  sm:mb-0 md:mb-2">
            Order ID:
            <Link
              href="#"
              className="font-medium text-primary-900 hover:underline "
            >
              {order.id}
            </Link>
            <span
              className={`ms-2 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${order.statusColor} ${order.statusDarkColor}`}
            >
              {order.status}
            </span>
          </Heading>
          <button
            type="button"
            className="inline-flex items-center font-medium text-primary-700 hover:underline "
          >
            <Download className="me-2 size-5" />
            Download invoice
          </button>
        </div>
        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          {(order.status === "In transit" || order.status === "Pre-order") && (
            <Dialog>
              <DialogTrigger className="w-full rounded-lg bg-red-700 px-3 py-2 text-sm font-medium text-background hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 sm:w-auto">
                Cancel order
              </DialogTrigger>
              <DialogContent className="md:w-[400px]">
                <div className="relative text-center">
                  <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 p-2 ">
                    <Trash2 className="size-8 text-primary-500 " />
                    <span className="sr-only">Danger icon</span>
                  </div>
                  <Text className="mb-3.5">
                    <span className="font-medium text-primary-700 ">
                      @bonniegr
                    </span>
                    , are you sure you want to delete this order from your
                    account?
                  </Text>
                  <Text className="mb-4 text-primary-500 ">
                    This action cannot be undone.
                  </Text>
                  <div className="flex items-center justify-center space-x-4">
                    <Button
                      data-modal-toggle="deleteOrderModal"
                      type="button"
                      className="hover: rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-primary-500 hover:bg-primary-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300"
                    >
                      No, cancel
                    </Button>
                    <Button
                      type="submit"
                      className="rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-background hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Yes, delete
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
          {order.status === "Completed" || order.status === "Cancelled" ? (
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300   sm:w-auto"
            >
              <RefreshCcw className="-ms-0.5 me-1.5 size-4" />
              Order again
            </button>
          ) : (
            <Link
              href="#"
              className="inline-flex w-full items-center justify-center rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100       sm:w-auto"
            >
              <FileText className="-ms-0.5 me-1.5 size-4" />
              Track order
            </Link>
          )}
          <Link
            href="#"
            className="inline-flex w-full justify-center rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100  sm:w-auto"
          >
            Order details
          </Link>
        </div>
      </div>
      <div className="mb-4 items-center sm:flex sm:flex-wrap xl:flex">
        <dl className="mt-4 flex items-center text-primary-500  sm:me-8">
          <dt className="me-2 font-medium text-primary-900 ">Order date:</dt>
          <dd>{order.date}</dd>
        </dl>
        <dl className="mt-4 flex items-center text-primary-500  sm:me-8">
          <dt className="me-2 font-medium text-primary-900 ">Email:</dt>
          <dd>{order.email}</dd>
        </dl>
        <dl className="mt-4 flex items-center text-primary-500 ">
          <dt className="me-2 font-medium text-primary-900 ">
            Payment method:
          </dt>
          <dd className="flex items-center">
            {order.payment.lightLogo && order.payment.darkLogo && (
              <>
                <Image
                  className="h-4 w-auto dark:hidden"
                  src={order.payment.lightLogo}
                  alt="Payment Logo"
                />
                <Image
                  className="hidden h-4 w-auto dark:flex"
                  src={order.payment.darkLogo}
                  alt="Payment Logo"
                />
              </>
            )}
            <span className="ms-1">{order.payment.method}</span>
          </dd>
        </dl>
      </div>
      <div
        className={`flex items-center rounded-lg px-4 py-3 text-sm ${order.alert.color}`}
        role="alert"
      >
        <Info className="me-2 hidden size-4 shrink-0 sm:flex" />
        <span className="sr-only">Info</span>
        <div>{order.alert.text}</div>
      </div>
    </div>
  ));
};

export const OrdersOverviewSiderbar = () => {
  const dateRanges = [
    {
      label: "Today",
      dateRange: "Aug 21, 2023 - Aug 21, 2023",
    },
    {
      label: "Yesterday",
      dateRange: "Aug 20, 2023 - Aug 21, 2023",
    },
    {
      label: "Last 7 days",
      dateRange: "Aug 21, 2023 - Aug 21, 2023",
    },
    {
      label: "Last Month",
      dateRange: "Aug 15, 2023 - Aug 21, 2023",
    },
    {
      label: "Last year",
      dateRange: "Jan 1, 2023 - Aug 21, 2023",
    },
    {
      label: "All time",
      dateRange: "Feb 1, 2020 - Aug 21, 2023",
    },
  ];
  return (
    <section className="bg-background py-8 antialiased  md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <Breadcrumbs />
        <Heading
          level={3}
          className="mb-4 font-semibold text-primary-900  sm:text-2xl md:mb-8"
        >
          My orders
        </Heading>
        <div className="gap-8 lg:flex">
          <UserMenu />
          <div className="w-full">
            <div className="mb-4 items-center justify-between md:flex md:space-x-4">
              <form className="w-full flex-1 md:mr-4 md:max-w-md">
                <label
                  htmlFor="default-search"
                  className="sr-only text-sm font-medium text-primary-900 "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="size-4 text-primary-500 " />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2 pl-10 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Search by Order ID"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 rounded-r-lg bg-primary-700 px-4 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  >
                    Search
                  </button>
                </div>
              </form>
              <div className="mt-4 items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
                <Popover>
                  <PopoverTrigger
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100  md:w-auto"
                  >
                    <Filter className="-ms-0.5 me-1.5 size-4" />
                    Filter by: Completed
                    <ChevronRight className="-me-0.5 ms-1.5 size-4" />
                  </PopoverTrigger>
                  <PopoverContent className="z-10 w-44 divide-y divide-primary-100 rounded-lg bg-background shadow ">
                    <ul
                      className="p-2 text-left text-sm font-medium text-primary-500 "
                      aria-labelledby="filterDropdownButtonLabel"
                    >
                      <li>
                        <Link
                          href="#"
                          className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-primary-500 hover:bg-primary-100 hover:text-primary-900  "
                        >
                          <span className="me-2 size-2.5 rounded-full bg-green-500"></span>
                          <span>Completed</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-primary-500 hover:bg-primary-100 hover:text-primary-900  "
                        >
                          <span className="me-2 size-2.5 rounded-full bg-primary-600"></span>
                          Pre-order
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-primary-500 hover:bg-primary-100 hover:text-primary-900  "
                        >
                          <span className="me-2 size-2.5 rounded-full bg-yellow-300"></span>
                          In transit
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-primary-500 hover:bg-primary-100 hover:text-primary-900  "
                        >
                          <span className="me-2 size-2.5 rounded-full bg-red-500"></span>
                          Cancelled
                        </Link>
                      </li>
                    </ul>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger className="z-20 flex w-full items-center justify-center rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium  hover:bg-primary-100 hover:text-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-100  md:w-auto">
                    Last 7 days
                    <ChevronDown className="-me-0.5 ms-1.5 size-4" />
                  </PopoverTrigger>
                  <PopoverContent className="z-20 bg-background p-0">
                    <ul
                      className="divide-y divide-primary-200 text-sm "
                      aria-labelledby="dateDropdownButtonLabel"
                    >
                      {dateRanges.map((item, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="group flex items-center gap-2 px-4 py-2 text-xs text-primary-700 hover:bg-primary-100"
                          >
                            {item.label}
                            <span className="text-primary-400 group-hover:text-primary-900 ">
                              {item.dateRange}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <Orders />
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious className="size-9 p-0" href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">100</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext className="size-9 p-0" href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
};
