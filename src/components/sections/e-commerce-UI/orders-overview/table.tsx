import React from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Eye,
  Hourglass,
  RefreshCw,
  Search,
  ShoppingCart,
  Trash2,
  Truck,
  X,
  XCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
//component imports
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const orderStatuses = [
  { value: "", label: "All orders" },
  { value: "pre-order", label: "Pre-order" },
  { value: "transit", label: "In transit" },
  { value: "confirmed", label: "Confirmed" },
  { value: "cancelled", label: "Cancelled" },
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

const orders = [
  {
    id: "#FWB127364372",
    date: "09 Mar 2023",
    price: "$466",
    status: "Pre-order",
  },
  {
    id: "#FWB125467980",
    date: "12 Mar 2023",
    price: "$245",
    status: "In transit",
  },
  {
    id: "#FWB139485607",
    date: "19 Mar 2023",
    price: "$2000",
    status: "Confirmed",
  },
  {
    id: "#FWB137364371",
    date: "23 Apr 2023",
    price: "$90",
    status: "Confirmed",
  },
  {
    id: "#FWB148273645",
    date: "20 Apr 2023",
    price: "$3040",
    status: "Cancelled",
  },
];

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

const formSchema = z.object({
  search: z.string().optional(),
});

export const OrdersOverviewList = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background py-8 antialiased  md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <Heading level={4} className="font-semibold sm:text-2xl">
            My orders
          </Heading>

          <div className="mt-6 space-y-6 sm:mt-8 sm:space-y-8">
            <div className="gap-8 lg:flex">
              <div className="w-full space-y-4 rounded-lg border border-primary-200 bg-background p-4 shadow-sm   md:p-6 lg:max-w-xl">
                <Heading level={6} className="font-semibold  ">
                  Hi, Bonnie Green
                </Heading>

                <Text className="text-base font-normal text-primary-500 ">
                  So far you have accumulated{" "}
                  <span className="font-semibold  ">5,183</span> points, to
                  become a Premium user, you need{" "}
                  <span className="font-semibold  ">10,000</span> points.
                </Text>

                <div className="space-y-1">
                  <Text className="text-right text-sm font-medium text-primary-500 ">
                    5183/10000
                  </Text>
                  <div className="mb-4 h-1.5 w-full rounded-full bg-primary-200 ">
                    <div
                      className="h-1.5 rounded-full bg-green-500"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>

                <Link
                  href="#"
                  title=""
                  className="inline-flex items-center gap-2 font-medium text-primary-700 hover:underline "
                >
                  View premium benefits
                  <ChevronRight className="size-5" />
                </Link>
              </div>

              <div className="mt-6 space-y-4 rounded-lg border border-primary-200 bg-background p-4 shadow-sm   sm:mt-8 md:p-6 lg:mt-0">
                <Heading level={6} className="text-lg font-semibold  ">
                  You have a $49 voucher
                </Heading>

                <div className="space-y-2">
                  <Text className="text-primary-500 ">
                    You have -$49 extra dollars for an order of the Oral-B iO10
                    electric toothbrush product.
                  </Text>
                  <Text className="font-medium  ">
                    Expires on 31.12.2023 - 23:59
                  </Text>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    title=""
                    className="rounded-lg bg-primary-700 px-3 py-2 text-center text-xs font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300   "
                    role="button"
                  >
                    Apply in basket
                  </Link>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex items-center gap-2 font-medium  hover:underline "
                  >
                    See voucher details
                    <ChevronRight className="size-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="divide-y divide-primary-200 overflow-hidden rounded-lg border border-primary-200 bg-background shadow-sm  ">
              <div className="space-y-4 p-4">
                <div className="flex flex-col-reverse items-center justify-between md:flex-row md:space-x-4">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="w-full flex-1 md:mr-4 md:max-w-md"
                    >
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Search className="size-4 text-primary-500 " />
                        </div>
                        <FormField
                          control={form.control}
                          name="search"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="sr-only"> Search</FormLabel>
                              <FormControl>
                                <Input
                                  type="search"
                                  id="default-search"
                                  className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2 pl-10 text-sm  focus:border-primary-500 focus:ring-primary-500"
                                  placeholder="Search by Order ID"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          className="absolute inset-y-0 right-0 rounded-r-lg bg-primary-700 px-4 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300   "
                        >
                          Search
                        </Button>
                      </div>
                    </form>
                  </Form>
                  <div className="mb-4 w-full md:mb-0 md:w-auto">
                    <Popover>
                      <PopoverTrigger className="flex w-full items-center justify-center rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium  hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100  md:w-auto">
                        Last 7 days
                        <ChevronDown className="-me-0.5 ms-1.5 size-4" />
                      </PopoverTrigger>
                      <PopoverContent className="p-0">
                        <ul
                          className="divide-y divide-gray-200 text-sm dark:divide-gray-700"
                          aria-labelledby="dateDropdownButtonLabel"
                        >
                          {dateRanges.map((item, index) => (
                            <li key={index}>
                              <Link
                                href="#"
                                className="group flex items-center gap-2 px-4 py-2 text-xs text-primary-700 hover:bg-gray-100"
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

                <hr className="border-primary-200 " />

                <div className="flex flex-wrap items-center">
                  <div className="mr-4 hidden items-center text-sm font-medium   md:flex">
                    Show:
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-3">
                    {orderStatuses.map((status, index) => (
                      <div key={index} className="mr-4 flex items-center">
                        <Input
                          id={status.value}
                          type="radio"
                          value={status.value}
                          name="show-only"
                          className="size-4 border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                        />
                        <Label
                          htmlFor={status.value}
                          className="ml-2 text-sm font-medium  "
                        >
                          {status.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative overflow-x-auto">
                <Table className="table w-full divide-y divide-primary-200 text-left text-sm   sm:min-w-full">
                  <TableHeader className="bg-primary-50 text-xs uppercase text-primary-700  ">
                    <TableRow>
                      <TableHead
                        scope="col"
                        className="whitespace-nowrap p-4 text-xs font-semibold uppercase text-primary-500 "
                      >
                        Order ID
                      </TableHead>
                      <TableHead
                        scope="col"
                        className="whitespace-nowrap p-4 text-xs font-semibold uppercase text-primary-500 "
                      >
                        <div className="flex items-center gap-1">
                          Due Date
                          <ChevronDown className="size-4 text-primary-400 " />
                        </div>
                      </TableHead>
                      <TableHead
                        scope="col"
                        className="whitespace-nowrap p-4 text-xs font-semibold uppercase text-primary-500 "
                      >
                        <div className="flex items-center gap-1">
                          Price
                          <ChevronDown className="size-4 text-primary-400 " />
                        </div>
                      </TableHead>
                      <TableHead
                        scope="col"
                        className="whitespace-nowrap p-4 text-xs font-semibold uppercase text-primary-500 "
                      >
                        <div className="flex items-center gap-1">
                          Status
                          <ChevronDown className="size-4 text-primary-400 " />
                        </div>
                      </TableHead>
                      <TableHead
                        scope="col"
                        className="p-4 text-xs font-semibold uppercase"
                      >
                        <span className="sr-only"> Actions </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y divide-primary-200 ">
                    {orders.map((order, index) => (
                      <TableRow key={index} className="hover:bg-primary-50 ">
                        <TableCell
                          scope="row"
                          className="whitespace-nowrap p-4 font-medium  "
                        >
                          <Link href="#" className="hover:underline">
                            {order.id}
                          </Link>
                        </TableCell>
                        <TableCell className="whitespace-nowrap p-4 text-sm font-medium">
                          {order.date}
                        </TableCell>
                        <TableCell className="whitespace-nowrap p-4 text-sm font-medium">
                          {order.price}
                        </TableCell>
                        <TableCell className="p-4">
                          <span className={`me-2 inline-flex items-center`}>
                            <StatusBadge status={order.status} />
                          </span>
                        </TableCell>
                        <TableCell className="p-4 text-right">
                          <Popover>
                            <PopoverTrigger
                              asChild
                              className="inline-flex items-center justify-center rounded-lg bg-transparent px-1 text-primary-500 shadow-none  hover:bg-primary-100"
                            >
                              <Ellipsis className="size-6 text-primary-800" />
                            </PopoverTrigger>
                            <PopoverContent className="w-40 divide-y divide-primary-100 rounded-lg bg-background p-0 shadow ">
                              <ul
                                className="p-2 text-left text-sm font-medium text-primary-500 "
                                aria-labelledby={`actionsMenuDropdown${index}`}
                              >
                                <li>
                                  <Link
                                    href="#"
                                    className="hover: group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-primary-500 hover:bg-primary-100   "
                                  >
                                    <RefreshCw className="group-hover: me-1.5 size-4 text-primary-400  " />
                                    <span>Order again</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="#"
                                    className="hover: group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-primary-500 hover:bg-primary-100   "
                                  >
                                    <Eye className="group-hover: me-1.5 size-4 text-primary-400  " />
                                    Order details
                                  </Link>
                                </li>
                                <li>
                                  <Dialog>
                                    <DialogTrigger className="flex w-full justify-start rounded-md border-none bg-transparent px-0 py-2 pl-3 text-sm text-red-600 shadow-none hover:bg-primary-100 focus-visible:ring-0">
                                      <Trash2 className="me-1.5 size-4" />
                                      Cancel order
                                    </DialogTrigger>
                                    <DialogContent className="md:w-[400px]">
                                      <div className="relative text-center">
                                        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-primary-100 p-2 ">
                                          <Trash2 className="size-8 text-primary-500 " />
                                          <span className="sr-only">
                                            Danger icon
                                          </span>
                                        </div>
                                        <Text className="mb-3.5  ">
                                          <span className="font-medium text-primary-700 ">
                                            @bonniegr
                                          </span>
                                          , are you sure you want to delete this
                                          order from your account?
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
                                </li>
                              </ul>
                            </PopoverContent>
                          </Popover>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="p-4">
                <nav
                  className="flex flex-col items-start justify-between space-y-3 md:flex-row md:items-center md:space-y-0"
                  aria-label="Table navigation"
                >
                  <span className="text-sm font-normal text-primary-500 ">
                    Showing <span className="font-semibold  ">1-10</span> of{" "}
                    <span className="font-semibold  ">1000</span>
                  </span>
                  <Pagination className="justify-end">
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
                </nav>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start">
              <Link
                href="#"
                title=""
                className="me-2 inline-flex items-center justify-center gap-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium  hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100"
                role="button"
              >
                <ChevronRight className="size-5" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MuiLayout.Section>
  );
};
