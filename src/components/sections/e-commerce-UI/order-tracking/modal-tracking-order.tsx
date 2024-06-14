import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Archive,
  Dock,
  Eye,
  MapPin,
  Receipt,
  ShoppingCart,
  Truck,
  Warehouse,
} from "lucide-react";

//component imports
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import MasterCardLogo from "~/lib/assets/images/mastercard.svg";

const orderSteps = [
  {
    date: "Tomorrow 24 November 2023",
    status: "Estimated delivery tomorrow",
    icon: <MapPin className="size-5" />,
  },
  {
    date: "24 November 2023 between 15:00 - 17:00",
    status: "Products ready for delivery",
    icon: <Truck className="size-5 text-green-600" />,
  },
  {
    date: "23 November 2023 at 15:15",
    status: "Products in the courier's warehouse",
    icon: <Warehouse className="size-5 text-green-600" />,
  },
  {
    date: "22 November 2023 at 12:27",
    status: "Products delivered to the courier - DHL",
    icon: <Archive className="size-5 text-green-600" />,
  },
  {
    date: "19 November 2023 at 10:47",
    status: "Payment accepted",
    icon: <Dock className="size-5 text-green-600" />,
  },
  {
    date: "19 November 2023 at 10:45",
    status: "Order placed",
    icon: <ShoppingCart className="size-5 text-green-600" />,
  },
];

const ModalOrderTracking = () => {
  return (
    <div className="flex w-full justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300">
            Show order tracking modal
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-full w-full max-w-4xl bg-primary-100">
          <div className="mx-auto ">
            <Heading
              level={3}
              className="border-b border-primary-200 pb-6 font-semibold tracking-normal sm:mb-5 sm:pb-4 xl:mb-8 xl:pb-8"
            >
              Track the delivery of order #957684673
            </Heading>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
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
              <div>
                <ol className="relative ms-3 border-s border-dotted border-primary-200">
                  {orderSteps.map((step, index) => (
                    <li key={index} className="mb-10 ms-6">
                      <span className="absolute -start-4 flex size-8 items-center justify-center rounded-full bg-background ring-background focus:ring-4">
                        {step.icon}
                      </span>
                      <Heading
                        level={6}
                        className="mb-0.5 flex items-center pt-1 font-semibold tracking-normal"
                      >
                        {step.status}
                      </Heading>
                      <time className="mb-2 block text-base font-normal text-muted-foreground">
                        {step.date}
                      </time>
                      {step.status === "Order placed" && (
                        <Link
                          href="#"
                          className="inline-flex items-center rounded-lg border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:text-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-200"
                        >
                          <Receipt className="-ms-0.5 me-1.5 size-4" />
                          View Invoice
                        </Link>
                      )}
                      {step.status === "Products ready for delivery" && (
                        <Link
                          href="#"
                          className="inline-flex items-center rounded-lg border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:text-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-200"
                        >
                          <Eye className="-ms-0.5 me-1.5 size-4" />
                          View order details
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="gap-4 border-t border-primary-200 pt-6 sm:mt-5 sm:flex sm:items-center sm:pt-5 xl:mt-8 xl:pt-8">
              <Button className="mt-4 flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-400 sm:mt-0">
                <Link href="#">Order details</Link>
              </Button>
              <Button className="rounded-lg  border border-primary-200 bg-background px-5  py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-200">
                Cancel the order
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalOrderTracking;
