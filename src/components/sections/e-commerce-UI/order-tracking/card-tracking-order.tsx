import React from "react";
import Link from "next/link";

import {
  Archive,
  Dock,
  FileText,
  Home,
  Receipt,
  ShoppingCart,
  Truck,
  Warehouse,
} from "lucide-react";

//component imports
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

const orderSteps = [
  {
    date: "Tomorrow 24 November 2023",
    status: "Estimated delivery tomorrow",
    icon: <Home className="size-5" />,
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

const billingInfo = {
  name: "Bonnie Green",
  phone: "+1 234 567 890",
  address: "San Francisco, California, United States, 3454, Scott Street",
};

const deliveryInfo = {
  name: "Bonnie Green",
  phone: "+1 234 567 890",
  address: "San Francisco, California, United States, 3454, Scott Street",
};

const paymentMethod = "Online with credit card";
const amountToBePaid = "$7,191.00";

const CardOrderTracking = () => {
  return (
    <section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-lg md:max-w-5xl">
          <Heading level={3} className="font-semibold tracking-normal">
            Track the delivery of order #957684673
          </Heading>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2 lg:gap-2.5 xl:mt-12">
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
                        <FileText className="-ms-0.5 me-1.5 size-4" />
                        View order details
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-4">
              <div className="space-y-4 rounded-lg border border-primary-200 bg-primary-50 p-6 shadow-sm">
                <Heading level={5} className="tracking-normal">
                  Billing information
                </Heading>
                <dl className="space-y-1">
                  <dt className="font-medium text-secondary-foreground">
                    Individual
                  </dt>
                  <dd className="font-normal text-muted-foreground">
                    {billingInfo.name} - {billingInfo.phone},{" "}
                    {billingInfo.address}
                  </dd>
                </dl>
              </div>

              <div className="space-y-4 rounded-lg border border-primary-200 bg-primary-50 p-6 shadow-sm">
                <Heading level={5} className="font-semibold tracking-normal">
                  Delivery information
                </Heading>
                <dl className="space-y-1">
                  <dt className="font-medium text-secondary-foreground">
                    Individual
                  </dt>
                  <dd className="font-normal text-muted-foreground">
                    {deliveryInfo.name} - {deliveryInfo.phone},{" "}
                    {deliveryInfo.address}
                  </dd>
                </dl>
              </div>

              <div className="space-y-4 rounded-lg border border-primary-200 bg-primary-50 p-6 shadow-sm ">
                <Heading level={5} className="font-semibold tracking-normal">
                  Payment method
                </Heading>
                <Text className="font-medium text-secondary-foreground">
                  {paymentMethod}
                </Text>
              </div>

              <div className="space-y-4 rounded-lg border border-primary-200 bg-primary-50 p-6 shadow-sm ">
                <Heading level={5} className="font-semibold tracking-normal">
                  The amount to be paid
                </Heading>
                <Text className="text-lg font-bold text-secondary-foreground">
                  {amountToBePaid}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardOrderTracking;
