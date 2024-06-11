import React from "react";
import Link from "next/link";

import { Check, ChevronDown, FileText, RefreshCcw, X } from "lucide-react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
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

export const OrderOverviewDrawer = () => {
  const orders = [
    {
      id: "#FWB1273255",
      status: "Completed",
      date: "02 June 2024",
      price: "$475",
      statusColor: "green",
    },
    {
      id: "#FWB1273192",
      status: "Completed",
      date: "18 May 2024",
      price: "$1,045",
      statusColor: "green",
    },
    {
      id: "#FWB1273192",
      status: "Cancelled",
      date: "25 February 2024",
      price: "$2,977",
      statusColor: "red",
    },
    {
      id: "#FWB1273111",
      status: "Completed",
      date: "27 January 2024",
      price: "$900",
      statusColor: "green",
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
    <Sheet>
      <SheetTrigger className="w-full">
        <Button>Show my orders</Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-x-auto md:max-w-md">
        <SheetHeader>
          <Heading
            level={"sub"}
            className="font-semibold uppercase leading-none text-primary-500 "
          >
            My orders
          </Heading>
        </SheetHeader>
        <div className="mt-4 flex-1 space-y-4">
          <div className="items-center space-y-4 sm:flex sm:space-x-4 md:space-y-0">
            <label
              htmlFor="order-type-drawer"
              className="sr-only me-2 block text-sm font-medium text-primary-900 "
            >
              Select order type
            </label>
            <select
              id="order-type-drawer"
              className="block w-full rounded-lg border border-primary-300 bg-primary-50 px-2.5 py-2 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
            >
              <option selected>All orders</option>
              <option value="pre-order">Pre-order</option>
              <option value="transit">In transit</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>

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
          </div>
          {orders.map((order, index) => (
            <div
              key={index}
              className="rounded-lg border border-primary-200 bg-primary-50 p-4 "
            >
              <div className="flex items-center justify-between border-b border-primary-200 pb-4 ">
                <Heading level={6} className="text-primary-500 ">
                  Order ID:
                  <Link
                    href="#"
                    className="font-medium text-primary-900 hover:underline "
                  >
                    {order.id}
                  </Link>
                </Heading>
                <span
                  className={`  ms-2 inline-flex items-center  rounded px-2.5 py-0.5 text-xs font-medium`}
                >
                  <StatusBadge status={order.status} />
                </span>
              </div>
              <div className="items-center space-y-4 border-b border-primary-200 py-4  sm:flex sm:space-x-4 sm:space-y-0">
                <Button
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  "
                >
                  <RefreshCcw className="-ms-0.5 me-1.5 size-4" />
                  Order again
                </Button>
                <Link
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg  border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100  "
                >
                  <FileText className="-ms-0.5 me-1.5 size-4" />
                  Order details
                </Link>
              </div>
              <div className="items-center text-sm sm:flex sm:flex-wrap">
                <dl className="mt-4 flex items-center text-primary-500  sm:me-6">
                  <dt className="me-2 font-medium text-primary-900 ">
                    Order date:
                  </dt>
                  <dd>{order.date}</dd>
                </dl>
                <dl className="mt-4 flex items-center text-primary-500  sm:me-6">
                  <dt className="me-2 font-medium text-primary-900 ">
                    Total price:
                  </dt>
                  <dd>{order.price}</dd>
                </dl>
              </div>
            </div>
          ))}
          <Link
            href="#"
            className="block w-full rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-center text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100  "
          >
            Back to shopping
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
