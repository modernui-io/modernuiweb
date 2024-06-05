import React from "react";
import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

export const OrderConfirmationDefault = () => {
  const orderItems = [
    { id: 1, name: "Date", value: "14 May 2024" },
    { id: 2, name: "Payment Method", value: "JPMorgan monthly installments" },
    { id: 3, name: "Name", value: "ModernUIweb Studios LLC" },
    {
      id: 4,
      name: "Address",
      value: "34 Scott Street, San Francisco, California, USA",
    },
    { id: 5, name: "Phone", value: "+(123) 456 7890" },
  ];

  return (
    <MuiLayout.Section className="bg-background py-8 antialiased md:py-16">
      <MuiLayout.Container className="mx-auto max-w-2xl px-4 2xl:px-0">
        <Heading level={4} className="mb-2 font-semibold sm:text-xl">
          Thanks for your order!
        </Heading>
        <Text className="mb-6 text-primary-500  md:mb-8">
          Your order{" "}
          <Link
            href="#"
            className="font-medium text-primary-900 hover:underline"
          >
            #7564804
          </Link>{" "}
          will be processed within 24 hours during working days. We will notify
          you by email once your order has been shipped.
        </Text>
        <div className="mb-6 space-y-4 rounded-lg border border-primary-100 bg-primary-50 p-6 sm:space-y-2 md:mb-8">
          {orderItems.map((item) => (
            <dl
              key={item.id}
              className="items-center justify-between gap-4 sm:flex"
            >
              <dt className="mb-1 font-normal text-primary-500 sm:mb-0">
                {item.name}
              </dt>
              <dd className="font-medium text-primary-900 sm:text-end">
                {item.value}
              </dd>
            </dl>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            Track your order
          </Link>
          <Link
            href="#"
            className="rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100"
          >
            Return to shopping
          </Link>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
