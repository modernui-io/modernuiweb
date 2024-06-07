import React from "react";
import Image from "next/image";
import Link from "next/link";

import { CheckCircle } from "lucide-react";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
//images
import WatchDark from "~/lib/assets/images/apple-watch-dark.svg";
import Watch from "~/lib/assets/images/apple-watch-light.svg";
import MacDark from "~/lib/assets/images/imac-front-dark.svg";
import Mac from "~/lib/assets/images/imac-front.svg";
import IPhoneDark from "~/lib/assets/images/iphone-dark.svg";
import IPhone from "~/lib/assets/images/iphone-light.svg";
import MasterCard from "~/lib/assets/images/mastercard.svg";
import PS5Dark from "~/lib/assets/images/ps5-dark.svg";
import PS5 from "~/lib/assets/images/ps5-light.svg";
import XBoxDark from "~/lib/assets/images/xbox-dark.svg";
import XBox from "~/lib/assets/images/xbox-light.svg";

export const OrderSummaryWithSiderbarStepper = () => {
  const orderItems = [
    {
      id: 1,
      imgLight: Mac,
      imgDark: MacDark,
      name: "PC system All in One APPLE iMac (2023)",
      quantity: 1,
      price: 1499,
    },
    {
      id: 2,
      imgLight: Watch,
      imgDark: WatchDark,
      name: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case",
      quantity: 2,
      price: 598,
    },
    {
      id: 3,
      imgLight: PS5,
      imgDark: PS5Dark,
      name: "Sony Playstation 5 Digital Edition Console",
      quantity: 1,
      price: 799,
    },
    {
      id: 4,
      imgLight: XBox,
      imgDark: XBoxDark,
      name: "Xbox Series X Diablo IV Bundle",
      quantity: 1,
      price: 699,
    },
    {
      id: 5,
      imgLight: IPhone,
      imgDark: IPhoneDark,
      name: "APPLE iPhone 15 5G phone, 256GB, Gold",
      quantity: 3,
      price: 2997,
    },
  ];

  const orderDetails = [
    { label: "Order date", value: "24 November 2023", hasImage: false },
    { label: "Email", value: "name@example.com", hasImage: false },
    { label: "Phone", value: "+123 456 7890", hasImage: false },
    { label: "Payment method", value: "Credit Card", hasImage: true },
    {
      label: "Shipping address",
      value: "62 Miles Drive St, Newark, NJ 07103, California",
      hasImage: false,
    },
  ];

  return (
    <MuiLayout.Section className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <ol className="flex w-full max-w-2xl items-center text-center text-sm font-medium text-primary-500 sm:text-base">
          {["Cart", "Checkout", "Order summary"].map((step, index) => (
            <li
              key={index}
              className={`flex items-center text-primary-700 ${
                index !== 2
                  ? "after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-primary-200 sm:w-full sm:after:inline-block xl:after:mx-10"
                  : "flex shrink-0 items-center"
              }`}
            >
              <span className="flex items-center after:mx-2 after:text-primary-200 after:content-['/'] sm:after:hidden">
                <CheckCircle className="me-2 size-4 sm:size-5" />
                {step}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-8">
          <div className="min-w-0 flex-1 divide-y divide-primary-200 rounded-lg border border-primary-200 shadow-sm">
            {orderItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between"
              >
                <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                  <Link href="#" className="block aspect-square w-20 shrink-0">
                    <Image
                      className="size-full dark:hidden"
                      src={item.imgLight}
                      alt={item.name}
                    />
                    <Image
                      className="hidden size-full dark:block"
                      src={item.imgDark}
                      alt={item.name}
                    />
                  </Link>
                  <div className="w-full md:max-w-sm lg:max-w-md">
                    <Link
                      href="#"
                      className="font-medium text-primary-900 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </div>
                </div>
                <div className="w-8 shrink-0">
                  <Text className="text-base font-normal text-primary-900">
                    x{item.quantity}
                  </Text>
                </div>
                <div className="md:w-24 md:text-right">
                  <Text className="text-base font-bold text-primary-900">
                    ${item.price}
                  </Text>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 w-full divide-y divide-primary-200 overflow-hidden rounded-lg border border-primary-200 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div className="px-6 pt-6">
              <Heading level={4} className="mb-4 font-semibold">
                Order Details
              </Heading>
              <div className="flow-root">
                <div className="divide-y divide-primary-200 ">
                  {orderDetails.map((detail, index) => (
                    <dl
                      key={index}
                      className={`py-4 sm:flex sm:items-center sm:justify-between sm:gap-4 ${index === 0 ? "pb-4" : ""}`}
                    >
                      <dt className="whitespace-nowrap font-semibold text-primary-900">
                        {detail.label}
                      </dt>
                      <dd
                        className={`mt-2 text-primary-500 sm:mt-0 sm:text-right`}
                      >
                        {detail.hasImage ? (
                          <div className="flex items-center gap-2 sm:justify-end">
                            <Image
                              className="h-auto w-5"
                              src={MasterCard}
                              alt="Mastercard"
                            />
                            <span className="text-right text-primary-500">
                              {detail.value}
                            </span>
                          </div>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </dl>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <Heading level={4} className="font-semibold">
                Order amount
              </Heading>
              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-primary-500 ">Original price</dt>
                    <dd className="font-medium text-primary-900 ">$6,592.00</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-primary-500 ">Savings</dt>
                    <dd className="font-medium text-green-500">-$299.00</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-primary-500 ">Store Pickup</dt>
                    <dd className="font-medium text-primary-900 ">$99</dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-primary-500">Tax</dt>
                    <dd className="font-medium text-primary-900 ">$799</dd>
                  </dl>
                </div>
                <dl className="flex items-center justify-between gap-4 border-t border-primary-200 pt-2">
                  <dt className="font-bold text-primary-900">Total</dt>
                  <dd className="font-bold text-primary-900">$7,191.00</dd>
                </dl>
              </div>
              <Button className="w-full">Place your order</Button>
              <Text className="max-w-xs text-sm font-normal text-primary-500">
                By placing your order, you agree to ModernUiWeb&apos;s{" "}
                <Link
                  href="#"
                  title=""
                  className="text-sm font-medium text-primary-700 underline hover:no-underline"
                >
                  privacy note
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  title=""
                  className="text-sm font-medium text-primary-700 underline hover:no-underline "
                >
                  terms of use
                </Link>
                .
              </Text>
            </div>
            <div className="space-y-4 bg-primary-50 p-6 ">
              <Text className="text-sm font-medium text-primary-900 ">
                Your benefits:
              </Text>
              <ul className="list-outside list-disc space-y-1 pl-4 text-sm font-normal text-primary-500 ">
                <li>Pre-order guarantee</li>
                <li>Free shipping</li>
                <li>Best price</li>
              </ul>
              <Link
                href="#"
                title=""
                className="inline-block text-sm font-medium text-primary-700 underline hover:no-underline "
              >
                {" "}
                How are shipping costs calculated?{" "}
              </Link>
              <Text className="max-w-xs text-sm font-normal text-primary-500 ">
                mordernUiWeb PRO shipping benefits have been applied to your
                order.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </MuiLayout.Section>
  );
};
