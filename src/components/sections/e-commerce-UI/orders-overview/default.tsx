import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  Hourglass,
  ShoppingCart,
  Truck,
  X,
  XCircle,
} from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
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

const orders = [
  {
    id: "#FWB127364372",
    date: "20.12.2023",
    price: "$4,756",
    status: "Pre-order",
  },
  {
    id: "#FWB125467980",
    date: "11.12.2023",
    price: "$499",
    status: "In transit",
  },
  {
    id: "#FWB139485607",
    date: "08.12.2023",
    price: "$85",
    status: "Confirmed",
  },
  {
    id: "#FWB137364371",
    date: "16.11.2023",
    price: "$119",
    status: "Confirmed",
  },
  {
    id: "#FWB134567890",
    date: "02.11.2023",
    price: "$2,056",
    status: "Confirmed",
  },
  {
    id: "#FWB146284623",
    date: "26.09.2023",
    price: "$180",
    status: "Cancelled",
  },
  {
    id: "#FWB145967376",
    date: "17.07.2023",
    price: "$756",
    status: "Confirmed",
  },
  {
    id: "#FWB148756352",
    date: "30.06.2023",
    price: "$235",
    status: "Confirmed",
  },
  {
    id: "#FWB159873546",
    date: "04.06.2023",
    price: "$90",
    status: "Cancelled",
  },
  {
    id: "#FWB156475937",
    date: "11.02.2023",
    price: "$1,845",
    status: "Confirmed",
  },
];
const orderTypes = [
  { value: "", label: "All orders", selected: true },
  { value: "pre-order", label: "Pre-order", selected: false },
  { value: "transit", label: "In transit", selected: false },
  { value: "confirmed", label: "Confirmed", selected: false },
  { value: "cancelled", label: "Cancelled", selected: false },
];

const durations = [
  { value: "this week", label: "this week", selected: true },
  { value: "this month", label: "this month", selected: false },
  { value: "last 3 months", label: "the last 3 months", selected: false },
  { value: "last 6 months", label: "the last 6 months", selected: false },
  { value: "this year", label: "this year", selected: false },
];

const pages = [1, 2, 3, "...", 100];

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
    case "Confirmed":
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

export const OrdersOverviewDefaults = () => {
  return (
    <MuiLayout.Section className="bg-background py-8 antialiased  md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <Heading level={3} className="font-semibold sm:text-2xl">
              My orders
            </Heading>
            <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
              <div>
                <label
                  htmlFor="order-type"
                  className="sr-only mb-2 block text-sm font-medium text-primary-900 "
                >
                  Select order type
                </label>
                <select
                  id="order-type"
                  className="block w-full min-w-32 rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500 "
                >
                  {orderTypes.map((type, index) => (
                    <option
                      key={index}
                      value={type.value}
                      selected={type.selected}
                    >
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <span className="inline-block text-primary-500 "> from </span>
              <div>
                <label
                  htmlFor="duration"
                  className="sr-only mb-2 block text-sm font-medium text-primary-900 "
                >
                  Select duration
                </label>
                <select
                  id="duration"
                  className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500 "
                >
                  {durations.map((duration, index) => (
                    <option
                      key={index}
                      value={duration.value}
                      selected={duration.selected}
                    >
                      {duration.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-primary-200 ">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="flex flex-wrap items-center gap-y-4 py-6"
                >
                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-primary-500 ">
                      Order ID:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-primary-900 ">
                      <Link href="#" className="hover:underline">
                        {order.id}
                      </Link>
                    </dd>
                  </dl>
                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-primary-500 ">
                      Date:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-primary-900 ">
                      {order.date}
                    </dd>
                  </dl>
                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-primary-500 ">
                      Price:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-primary-900 ">
                      {order.price}
                    </dd>
                  </dl>
                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-primary-500 ">
                      Status:
                    </dt>
                    <dd className="me-2 mt-1.5 inline-flex items-center">
                      <StatusBadge status={order.status} />
                    </dd>
                  </dl>
                  <div className="grid w-full gap-4 sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end">
                    {order.status === "Confirmed" ||
                    order.status === "Cancelled" ? (
                      <Button className="w-full rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-auto">
                        Order again
                      </Button>
                    ) : (
                      <Button
                        variant={"outline"}
                        className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"
                      >
                        Cancel order
                      </Button>
                    )}

                    <Link
                      href="#"
                      className="inline-flex w-full justify-center rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100  lg:w-auto"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
    </MuiLayout.Section>
  );
};
