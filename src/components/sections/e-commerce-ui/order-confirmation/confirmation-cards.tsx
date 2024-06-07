import React from "react";
import Image from "next/image";
import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
//images
import IMacDark from "~/lib/assets/images/imac-front-dark.svg";
import IMac from "~/lib/assets/images/imac-front.svg";
import PS5Dark from "~/lib/assets/images/ps5-dark.svg";
import PS5 from "~/lib/assets/images/ps5-light.svg";

const orderDetails = [
  { label: "Order number", value: "#76453857" },
  { label: "Date", value: "14 May 2024" },
  { label: "Payment Method", value: "Mastercard" },
  { label: "Name", value: "modern UI Web Studios LLC" },
  { label: "Address", value: "Scott Street, San Francisco, California, USA" },
  { label: "Phone", value: "+(123) 456 7890" },
  { label: "Email", value: "name@company.com" },
];

const recommendedProducts = [
  {
    id: 1,
    name: "Apple iMac 27”",
    description:
      "This generation has some improvements, including a longer continuous battery.",
    price: "$1,299",
    lightImg: IMac,
    darkImg: IMacDark,
  },
  {
    id: 2,
    name: "PlayStation 5",
    description:
      "This generation has some improvements, including a longer continuous battery.",
    price: "$1,299",
    lightImg: PS5,
    darkImg: PS5Dark,
  },
];

export const OrderConfirmationCards = () => {
  return (
    <MuiLayout.Section className="bg-background py-8 antialiased md:py-16">
      <MuiLayout.Container className="mx-auto max-w-3xl px-4 2xl:px-0">
        <Heading level={3} className="mb-2 font-semibold sm:text-2xl">
          Thanks for your order!
        </Heading>
        <Text className="mb-6 text-primary-500 md:mb-8">
          Your order will be processed within 24 hours during working days. We
          will notify you by email once your order has been shipped.
        </Text>
        <div className="mb-6 flex items-center space-x-4 md:mb-8">
          <Link
            href="#"
            className="rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
          >
            Track your order
          </Link>
          <Link
            href="#"
            className="rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100"
          >
            Return to shopping
          </Link>
        </div>
        <div className="mb-6 divide-y divide-primary-200 rounded-lg border border-primary-100 bg-primary-50 p-4 md:mb-8 md:p-6">
          {orderDetails.map((detail, index) => (
            <dl
              className={`items-center justify-between gap-4 sm:flex ${index > 0 && "py-3"} ${index === 0 && "pb-3"}`}
              key={index}
            >
              <dt className="mb-1 font-normal text-primary-500 sm:mb-0">
                {detail.label}
              </dt>
              <dd className="font-medium text-primary-900 sm:text-end">
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
        <Heading level={4} className="mb-4 font-semibold text-primary-900">
          Recommended for you
        </Heading>
        <div className="grid gap-6 sm:grid-cols-2">
          {recommendedProducts.map((product) => (
            <Link
              href="#"
              className="rounded-lg border border-primary-200 p-4 hover:shadow-md md:p-6"
              key={product.id}
            >
              <div className="h-60 w-full">
                <Image
                  className="h-auto max-h-full w-full dark:hidden"
                  src={product.lightImg}
                  alt={`${product.name} image`}
                />
                <Image
                  className="hidden h-auto max-h-full w-full dark:block"
                  src={product.darkImg}
                  alt={`${product.name} image`}
                />
              </div>
              <Heading
                level={4}
                className="mb-2 mt-6 font-semibold leading-tight"
              >
                {product.name}
              </Heading>
              <Text className="mb-4 text-primary-500">
                {product.description}
              </Text>
              <Text className="text-xl font-bold text-primary-900">
                {product.price}
              </Text>
            </Link>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
