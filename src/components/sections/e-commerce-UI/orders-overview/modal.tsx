import React from "react";
import Link from "next/link";

import {
  Check,
  ChevronDown,
  Eye,
  Hourglass,
  RotateCcw,
  Search,
  Trash2,
  Truck,
  X,
} from "lucide-react";

import { Badge } from "~/components/ui/badge";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case "Pre-order":
      return (
        <Badge className="bg-highlight-blue text-primary-700 hover:bg-highlight-blue">
          <Hourglass className="me-1 size-3 " />
          Pre-order
        </Badge>
      );
    case "In transit":
      return (
        <Badge className="bg-highlight-yellow text-primary-700 hover:bg-highlight-yellow">
          <Truck className="me-1 size-3 " />
          In transit
        </Badge>
      );
    case "Completed":
      return (
        <Badge className="bg-highlight-green text-primary-700 hover:bg-highlight-green">
          <Check className="me-1 size-3 " />
          Confirmed
        </Badge>
      );
    case "Cancelled":
      return (
        <Badge className="bg-highlight-red text-primary-700 hover:bg-highlight-red">
          <X className="me-1 size-3 " />
          Cancelled
        </Badge>
      );
    default:
      return <Badge>{status}</Badge>;
  }
};

export const OrderOverviewModal = () => {
  const orders = [
    {
      id: "#FWB12546798",
      date: "11.12.2023",
      price: "$499",
      status: "In transit",
      statusColor: "yellow",
      actions: [
        { label: "Order again", icon: RotateCcw },
        { label: "Order details", icon: Eye },
        { label: "Cancel order", icon: Trash2, color: "text-red-600" },
      ],
    },
    {
      id: "#FWB12546777",
      date: "10.11.2024",
      price: "$3,287",
      status: "Cancelled",
      statusColor: "red",
      actions: [
        { label: "Order again", icon: RotateCcw },
        { label: "Order details", icon: Eye },
      ],
    },
    {
      id: "#FWB12546846",
      date: "07.11.2024",
      price: "$111",
      status: "Completed",
      statusColor: "green",
      actions: [
        { label: "Order again", icon: RotateCcw },
        { label: "Order details", icon: Eye },
      ],
    },
    {
      id: "#FWB12546212",
      date: "18.10.2024",
      price: "$756",
      status: "Completed",
      statusColor: "green",
      actions: [
        { label: "Order again", icon: RotateCcw },
        { label: "Order details", icon: Eye },
      ],
    },
    {
      id: "#FWB12546004",
      date: "05.05.2024",
      price: "$1,247",
      status: "Completed",
      statusColor: "green",
      actions: [
        { label: "Order again", icon: RotateCcw },
        { label: "Order details", icon: Eye },
      ],
    },
  ];

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
    <Dialog>
      <DialogTrigger className="w-full">
        <Button>Show orders modal</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90%] max-w-3xl overflow-y-auto p-4">
        <DialogHeader className="border-b border-primary-200 pb-4">
          <Heading
            level={"sub"}
            className="font-semibold leading-none text-primary-500 "
          >
            My orders
          </Heading>
        </DialogHeader>

        <div className="flex items-center justify-between space-y-4 border-b border-primary-200 pb-4  sm:flex sm:space-x-4 sm:space-y-0 md:pb-5">
          <div className="w-full sm:w-72 md:w-96">
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
                className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2 pl-10 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500 "
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
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div>
              <label
                htmlFor="order-type"
                className="sr-only mb-2 block text-sm font-medium text-primary-900 "
              >
                Select order type
              </label>
              <select
                id="order-type"
                className="block w-full rounded-lg border border-primary-300 bg-primary-50 px-2.5 py-2 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
              >
                <option selected>All orders</option>
                <option value="pre-order">Pre-order</option>
                <option value="transit">In transit</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <Popover>
              <PopoverTrigger className="flex w-full items-center justify-center rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100  ">
                Last 7 days
                <ChevronDown className="-me-0.5 ms-1.5 size-4" />
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <ul
                  className="divide-y divide-primary-200 text-sm"
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
            <div
              id="dateDropdownButton3"
              className="z-10 hidden w-80 divide-y divide-primary-100 rounded bg-background shadow "
            >
              <ul
                className="divide-y divide-primary-200 text-sm "
                aria-labelledby="dateDropdownButtonLabel3"
              >
                {[
                  "Today",
                  "Yesterday",
                  "Last 7 days",
                  "Last Month",
                  "Last year",
                  "All time",
                ].map((label, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-primary-100 "
                    >
                      {label}
                      <span className="text-primary-400 group-hover:text-primary-900 ">
                        {" "}
                        Aug 21, 2023 - Aug 21, 2023{" "}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="divide-y divide-primary-200 ">
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center gap-y-4 py-4 md:py-5"
            >
              <dl className="w-1/2 sm:w-48">
                <dt className="text-base font-medium text-primary-500 ">
                  Order ID:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-primary-900 ">
                  <Link href="#" className="hover:underline">
                    {order.id}
                  </Link>
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-primary-500 ">
                  Date:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-primary-900 ">
                  {order.date}
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-primary-500 ">
                  Price:
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-primary-900 ">
                  {order.price}
                </dd>
              </dl>

              <dl className="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                <dt className="text-base font-medium text-primary-500 ">
                  Status:
                </dt>
                <dd
                  className={` mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium`}
                >
                  <StatusBadge status={order.status} />
                </dd>
              </dl>

              <div className="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                <Popover>
                  <PopoverTrigger className="flex w-full items-center justify-center rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100  md:w-auto">
                    Actions
                    <ChevronDown className="-me-0.5 ms-1.5 size-4" />
                  </PopoverTrigger>
                  <PopoverContent className="w-40 divide-y divide-primary-100 rounded-lg  bg-background p-0 ">
                    <ul
                      className="p-2 text-left text-sm font-medium text-primary-500 "
                      aria-labelledby={`actionsMenuDropdown${index}`}
                    >
                      {order.actions.map((action, actionIndex) => (
                        <li key={actionIndex}>
                          <Link
                            href="#"
                            className={`group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-primary-500 hover:bg-primary-100 hover:text-primary-900    ${action.color ?? ""}`}
                          >
                            <action.icon
                              className={`me-1.5 size-4 text-primary-400 group-hover:text-primary-900   ${action.color ?? ""}`}
                            />
                            <span>{action.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          ))}
        </div>
        <div className="items-center justify-between border-t border-primary-200 pt-4  sm:flex md:pt-5">
          <Text className="mb-4 text-sm text-primary-500  sm:mb-0 md:whitespace-nowrap">
            Showing <span className="font-medium text-primary-900 ">1-5</span>{" "}
            of <span className="font-medium text-primary-900 ">145</span>
          </Text>
          <Pagination className="justify-end bg-background">
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
        <div className="mt-4 items-center space-x-0 space-y-4 border-t border-primary-200 pt-4  sm:flex sm:space-x-4 sm:space-y-0 md:mt-2 md:pt-5">
          <Button
            type="submit"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:mt-0 sm:w-auto"
          >
            Return to homepage
          </Button>
          <Button className="w-full rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100 sm:w-auto">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
