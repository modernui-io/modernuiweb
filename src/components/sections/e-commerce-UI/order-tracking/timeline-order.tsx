import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Archive,
  Dock,
  FileCheck,
  FileText,
  Truck,
  Warehouse,
} from "lucide-react";

//component imports
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
//Image imports
import WatchDark from "~/lib/assets/images/apple-watch-dark.svg";
import WatchLight from "~/lib/assets/images/apple-watch-light.svg";
import IMacDark from "~/lib/assets/images/imac-front-dark.svg";
import IMacLight from "~/lib/assets/images/imac-front.svg";
import IpadDark from "~/lib/assets/images/ipad-dark.svg";
import IpadLight from "~/lib/assets/images/ipad-light.svg";
import IphoneDark from "~/lib/assets/images/iphone-dark.svg";
import IphoneLight from "~/lib/assets/images/iphone-light.svg";
import MacDark from "~/lib/assets/images/macbook-pro-dark.svg";
import MacLight from "~/lib/assets/images/macbook-pro-light.svg";
import MasterCardLogo from "~/lib/assets/images/mastercard.svg";
import Ps5Dark from "~/lib/assets/images/ps5-dark.svg";
import Ps5Light from "~/lib/assets/images/ps5-light.svg";
import XboxDark from "~/lib/assets/images/xbox-dark.svg";
import XboxLight from "~/lib/assets/images/xbox-light.svg";

const orderItems = [
  {
    id: 1,
    date: "19 Nov 2023: 10:45",
    description: "Order placed",
    icon: <FileText className="size-8 lg:mx-auto" />,
    isCompleted: true,
  },
  {
    id: 2,
    date: "19 Nov 2023: 10:47",
    description: "Payment accepted",
    icon: <Dock className="size-8 lg:mx-auto" />,
    isCompleted: true,
  },
  {
    id: 3,
    date: "22 Nov 2023: 12:27",
    description: "Products delivered to the courier - DHL",
    icon: <Archive className="size-8 lg:mx-auto" />,
    isCompleted: true,
  },
  {
    id: 4,
    date: "23 Nov 2023: 15:15",
    description: "Products in the courier's warehouse",
    icon: <Warehouse className="size-8 lg:mx-auto" />,
    isCompleted: true,
  },
  {
    id: 5,
    date: "Today",
    description: "Products in delivery progress",
    icon: <Truck className="size-8 lg:mx-auto" />,
    isCompleted: false,
  },
  {
    id: 6,
    date: "Estimated delivery tomorrow",
    description: "Products delivered",
    icon: <FileCheck className="size-8 lg:mx-auto" />,
    isCompleted: false,
  },
];

const products = [
  {
    id: 1,
    name: "Apple iMac 27”",
    quantity: 1,
    price: "$1,499",
    lightImg: IMacLight,
    darkImg: IMacDark,
  },
  {
    id: 2,
    name: "Apple iPhone 14",
    quantity: 2,
    price: "$1,998",
    lightImg: IphoneLight,
    darkImg: IphoneDark,
  },
  {
    id: 3,
    name: "Apple iPad Air",
    quantity: 1,
    price: "$898",
    lightImg: IpadLight,
    darkImg: IpadDark,
  },
  {
    id: 4,
    name: "Xbox Series S",
    quantity: 4,
    price: "$4,499",
    lightImg: XboxLight,
    darkImg: XboxDark,
  },
  {
    id: 5,
    name: "PlayStation 5",
    quantity: 1,
    price: "$499",
    lightImg: Ps5Light,
    darkImg: Ps5Dark,
  },
  {
    id: 6,
    name: 'MacBook Pro 16"',
    quantity: 1,
    price: "$499",
    lightImg: MacLight,
    darkImg: MacDark,
  },
  {
    id: 7,
    name: "Apple Watch SE",
    quantity: 2,
    price: "$799",
    lightImg: WatchLight,
    darkImg: WatchDark,
  },
];

const TimelineOrderTracking = () => {
  return (
    <section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <Heading level={3} className="font-semibold tracking-normal">
          Track the delivery of order #957684673
        </Heading>

        <div className="mt-6 sm:mt-8 lg:mt-12">
          <div className="grid grid-cols-1 divide-y divide-primary-200 text-start lg:grid-cols-6 lg:gap-8 lg:divide-y-0 lg:text-center">
            {orderItems.map((item) => (
              <div
                key={item.id}
                className={`py-4 ${item.isCompleted ? "text-tremor-brand" : "text-primary-600"} lg:py-0`}
              >
                {item.icon}
                <Text
                  className={`mt-2 text-sm ${item.isCompleted ? "text-tremor-brand" : "text-primary-600"}`}
                >
                  {item.date}
                </Text>
                <Text
                  className={`mt-1 text-base font-medium leading-tight lg:text-sm xl:text-base ${item.isCompleted ? "text-tremor-brand" : "text-primary-600"}`}
                >
                  {item.description}
                </Text>
              </div>
            ))}
          </div>

          <div className="mt-6 hidden h-3 w-full rounded-full bg-primary-200 sm:mt-8 lg:block">
            <div
              className="h-3 rounded-full bg-tremor-brand"
              style={{ width: "68%" }}
            ></div>
          </div>
        </div>

        <div className="mt-6 gap-8 sm:mt-8 lg:mt-12 lg:flex">
          <div className="relative w-full overflow-x-auto lg:max-w-xl xl:max-w-3xl">
            <Table className="table min-w-full border-b border-primary-200 text-left font-medium text-secondary-foreground md:table-fixed">
              <TableBody className="divide-y divide-primary-200">
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="whitespace-nowrap py-4 md:w-[384px]">
                      <div className="flex items-center gap-4">
                        <Link
                          href="#"
                          className="flex aspect-square size-10 shrink-0 items-center"
                        >
                          <Image
                            className="h-auto max-h-full w-full dark:hidden"
                            src={product.lightImg}
                            alt={product.name}
                          />
                          <Image
                            className="hidden h-auto max-h-full w-full dark:block"
                            src={product.darkImg}
                            alt={product.name}
                          />
                        </Link>
                        <Link href="#" className="hover:underline">
                          {product.name}
                        </Link>
                      </div>
                    </TableCell>
                    <TableCell className="p-4 text-base font-normal text-secondary-foreground">
                      x{product.quantity}
                    </TableCell>
                    <TableCell className="p-4 text-right text-base font-bold text-secondary-foreground">
                      {product.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <div className="space-y-6 rounded-lg bg-primary-50 p-4 md:p-6">
              <Heading level={6} className="font-semibold tracking-normal">
                Order Details
              </Heading>

              <div className="flow-root">
                <div className="-mt-4 divide-y divide-primary-200 border-b border-primary-200">
                  <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                    <dt className="whitespace-nowrap text-base font-semibold text-secondary-foreground">
                      Order date
                    </dt>
                    <dd className="mt-2 text-base font-normal text-muted-foreground sm:mt-0 sm:text-right">
                      24 November 2023
                    </dd>
                  </dl>

                  <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                    <dt className="whitespace-nowrap text-base font-semibold text-secondary-foreground">
                      Email
                    </dt>
                    <dd className="mt-2 text-base font-normal text-muted-foreground sm:mt-0 sm:text-right">
                      name@example.com
                    </dd>
                  </dl>

                  <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                    <dt className="whitespace-nowrap text-base font-semibold text-secondary-foreground">
                      Phone
                    </dt>
                    <dd className="mt-2 text-base font-normal text-muted-foreground sm:mt-0 sm:text-right">
                      +123 456 7890
                    </dd>
                  </dl>

                  <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                    <dt className="whitespace-nowrap text-base font-semibold text-secondary-foreground">
                      Payment method
                    </dt>
                    <dd className="mt-2 flex items-center gap-2 sm:mt-0 sm:justify-end">
                      <Image
                        className="h-auto w-5"
                        src={MasterCardLogo}
                        alt=""
                      />
                      <Text className="text-right text-base font-normal text-muted-foreground">
                        Credit Card
                      </Text>
                    </dd>
                  </dl>

                  <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                    <dt className="whitespace-nowrap text-base font-semibold text-secondary-foreground">
                      Shipping address
                    </dt>
                    <dd className="mt-2 text-base font-normal text-muted-foreground sm:mt-0 sm:text-right">
                      62 Miles Drive St, Newark, NJ 07103, California
                    </dd>
                  </dl>

                  <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-16">
                    <dt className="whitespace-nowrap text-lg font-bold text-secondary-foreground">
                      Total price
                    </dt>
                    <dd className="mt-2 text-lg font-bold text-secondary-foreground sm:mt-0 sm:text-right">
                      $7,191.00
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="gap-4 sm:flex sm:items-center">
                <Button className="w-full rounded-lg  border border-primary-200 bg-background px-5  py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-200">
                  Cancel the order
                </Button>

                <Link
                  href="#"
                  className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:mt-0"
                >
                  Order details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineOrderTracking;
