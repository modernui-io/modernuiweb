import React from "react";
import Link from "next/link";

import { CircleCheck } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

const orderDetails = [
  { label: "Order number", value: "#76453857" },
  { label: "Date", value: "14 May 2024" },
  { label: "Payment Method", value: "Mastercard" },
  { label: "Name", value: "Modern UI Web Studios LLC" },
  { label: "Address", value: "Scott Street, San Francisco, California, USA" },
  { label: "Phone", value: "+(123) 456 7890" },
  { label: "Email", value: "name@company.com" },
  {
    label: "Estimated delivery",
    value: "Wednesday, May 15",
    showGreen: true,
  },
];

export const OrderConfirmationDrawer = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="m-5 text-center">
            <Button>Show order confirmation drawer</Button>
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="max-w-[400px] overflow-y-auto sm:max-w-[470px]"
        >
          <SheetHeader className="flex-1">
            <SheetTitle className="text-base font-semibold uppercase leading-none text-primary-500">
              Order confirmation
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex-1 space-y-6">
            <div>
              <div className="mb-2 flex items-center space-x-2">
                <div className="flex size-6 items-center justify-center rounded-full bg-primary-100 ">
                  <CircleCheck className="size-7 text-primary-900" />
                </div>
                <Heading level={4} className="font-semibold leading-none ">
                  Thanks for your order!
                </Heading>
              </div>
              <Text className="mb-6 text-primary-500 ">
                Your order will be processed within 24 hours during working
                days. We will notify you by email once your order has been
                shipped.
              </Text>
            </div>
            <div className="mb-6 divide-y divide-primary-200 rounded-lg border border-primary-100 bg-primary-50 p-4 md:mb-8">
              {orderDetails.map((detail, index) => (
                <dl
                  className={`items-center justify-between gap-4 sm:flex ${index > 0 ? "py-3" : "pb-3"}`}
                  key={index}
                >
                  <dt className="mb-1 font-normal text-primary-500 sm:mb-0">
                    {detail.label}
                  </dt>
                  <dd
                    className={`font-medium  sm:text-end ${detail.showGreen ? "text-green-500" : "text-primary-900"}`}
                  >
                    {detail.value}
                  </dd>
                </dl>
              ))}
            </div>
            <Text className="mb-6 text-primary-500 md:mb-8">
              Need anything in the meantime? You can reach us at{" "}
              <Link
                href="#"
                className="font-medium text-primary-900 underline hover:no-underline"
              >
                support@company.com
              </Link>
              .
            </Text>
          </div>
          <div className="mt-8 gap-4 sm:flex sm:items-center sm:justify-center">
            <Link
              href="#"
              className="mb-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:my-0"
            >
              Track your order
            </Link>
            <Button className="inline-flex w-full justify-center rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100">
              Return to shopping
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
