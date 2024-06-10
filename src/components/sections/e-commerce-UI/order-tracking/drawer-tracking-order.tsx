import React from "react";
import Link from "next/link";

import { Check, CheckCircle, Home, Package, Truck } from "lucide-react";

//component imports
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "~/components/ui/sheet";

const billingInfo = {
  company: "Bergside LLC",
  vat: "VAT 123456",
  phone: "(+1) 234 567 890",
};

const deliveryInfo = {
  courier: "DHL Express",
  address: "3454 Scott Street, San Francisco, California, United States",
};

const paymentMethod = "Online with credit card";
const orderAmount = {
  subtotal: "$5,992",
  savings: "$0",
  pickup: "$99",
  tax: "$199",
  total: "$6,290",
};

const orderHistory = [
  {
    title: "Estimated delivery in 24 Nov 2023",
    description: "Products delivered",
    bgColor: "bg-primary-200",
    textColor: "text-secondary-foreground",
    icon: <Home className="size-4 text-muted-foreground" />,
  },
  {
    title: "Today",
    description: "Products being delivered",
    bgColor: "bg-primary-200",
    textColor: "text-secondary-foreground",
    icon: <Truck className="size-4 text-muted-foreground" />,
  },
  {
    title: "23 Nov 2023, 15:15",
    description: "Products in the courier's warehouse",
    bgColor: "bg-tremor-brand-muted",
    textColor: "text-tremor-brand",
    icon: <Check className="size-4" />,
  },
  {
    title: "22 Nov 2023, 12:27",
    description: "Products delivered to the courier - DHL Express",
    bgColor: "bg-tremor-brand-muted",
    textColor: "text-tremor-brand",
    icon: <Check className="size-4" />,
  },
  {
    title: "19 Nov 2023, 10:47",
    description: "Payment accepted - VISA Credit Card",
    bgColor: "bg-tremor-brand-muted",
    textColor: "text-tremor-brand",
    icon: <Check className="size-4" />,
  },
  {
    title: "19 Nov 2023, 10:45",
    description: "Order placed - Receipt #647563",
    bgColor: "bg-tremor-brand-muted",
    textColor: "text-tremor-brand",
    icon: <Check className="size-4" />,
  },
];

const OrderHistory = () => (
  <ol className="relative ms-3 border-s border-primary-200">
    {orderHistory.map((item, index) => (
      <li key={index} className={`mb-10 ms-6 ${item.textColor}`}>
        <span
          className={`absolute -start-3 flex size-6 items-center justify-center rounded-full ${item.bgColor} ring-8 ring-background`}
        >
          {item.icon}
        </span>
        <Heading
          level={6}
          className={`mb-0.5 text-base font-semibold ${item.textColor}`}
        >
          {item.title}
        </Heading>
        <Text className={`text-sm font-normal ${item.textColor}`}>
          {item.description}
        </Text>
      </li>
    ))}
  </ol>
);

const DrawerOrderTracking = () => {
  return (
    <div className="flex w-full justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            id="orderTrackingButton"
            className="rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            Show order tracking drawer
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto p-4">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <Heading
                level={6}
                className="mt-4 uppercase leading-none tracking-normal text-muted-foreground"
              >
                Track the delivery of order #957846
              </Heading>
            </div>
            <OrderHistory />
            <div className="space-y-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
              <Heading level={6} className="font-semibold tracking-normal">
                Billing information
              </Heading>
              <dl>
                <dt className="text-base font-medium text-secondary-foreground">
                  Company
                </dt>
                <dd className="mt-1 text-base font-normal text-muted-foreground">
                  {billingInfo.company}, {billingInfo.vat}, {billingInfo.phone}
                </dd>
              </dl>
            </div>

            <div className="space-y-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
              <Heading level={6} className="font-semibold tracking-normal">
                Delivery information
              </Heading>
              <dl>
                <dt className="text-base font-medium text-secondary-foreground">
                  {deliveryInfo.courier}
                </dt>
                <dd className="mt-1 text-base font-normal text-muted-foreground">
                  {deliveryInfo.address}
                </dd>
              </dl>
            </div>

            <div className="space-y-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
              <Heading level={6} className="font-semibold tracking-normal">
                Payment method
              </Heading>
              <Text className="text-base font-medium text-secondary-foreground">
                {paymentMethod}
              </Text>
            </div>
            <div className="space-y-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
              <Heading level={6} className="font-semibold tracking-normal">
                Order amount
              </Heading>
              <dl className="mb-2 flex items-center justify-between gap-4">
                <dt className="font-normal text-muted-foreground">Subtotal</dt>
                <dd className="font-medium text-secondary-foreground">
                  {orderAmount.subtotal}
                </dd>
              </dl>
              <dl className="mb-2 flex items-center justify-between gap-4">
                <dt className="font-normal text-muted-foreground">Savings</dt>
                <dd className="font-medium text-green-500 dark:text-green-400">
                  {orderAmount.savings}
                </dd>
              </dl>
              <dl className="mb-2 flex items-center justify-between gap-4">
                <dt className="font-normal text-muted-foreground">
                  Store Pickup
                </dt>
                <dd className="font-medium text-secondary-foreground">
                  {orderAmount.pickup}
                </dd>
              </dl>
              <dl className="mb-2 flex items-center justify-between gap-4">
                <dt className="font-normal text-muted-foreground">Tax</dt>
                <dd className="font-medium text-secondary-foreground">
                  {orderAmount.tax}
                </dd>
              </dl>
              <dl className="mt-4 flex items-center justify-between gap-4 border-t border-primary-200 pt-2 font-bold text-secondary-foreground">
                <dt>Total</dt>
                <dd>{orderAmount.total}</dd>
              </dl>
            </div>
          </div>
          <div className="mt-5 gap-4 sm:flex sm:items-center">
            <Link
              href="#"
              className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:mt-0"
            >
              Order details
            </Link>
            <SheetClose asChild>
              <Button className="w-full rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-200">
                Cancel the order
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default DrawerOrderTracking;
