import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { Check, Home, Truck } from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import WatchDark from "~/lib/assets/images/apple-watch-dark.svg";
import WatchLight from "~/lib/assets/images/apple-watch-light.svg";
import MacDark from "~/lib/assets/images/imac-front-dark.svg";
import MacLight from "~/lib/assets/images/imac-front.svg";
import IphoneDark from "~/lib/assets/images/iphone-dark.svg";
import IphoneLight from "~/lib/assets/images/iphone-light.svg";
import Ps5Dark from "~/lib/assets/images/ps5-dark.svg";
import Ps5Light from "~/lib/assets/images/ps5-light.svg";
import XboxDark from "~/lib/assets/images/xbox-dark.svg";
import XboxLight from "~/lib/assets/images/xbox-light.svg";

interface ProductDetail {
  imgLight: StaticImageData;
  imgDark: StaticImageData;
  title: string;
  productId: string;
  quantity: string;
  price: string;
}

const products = [
  {
    imgLight: MacLight,
    imgDark: MacDark,
    title:
      "PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24' Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma, Blue, Keyboard layout INT",
    productId: "BJ8364850",
    quantity: "1",
    price: "$1,499",
  },
  {
    imgLight: WatchLight,
    imgDark: WatchDark,
    title:
      "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
    productId: "BJ8364850",
    quantity: "2",
    price: "$598",
  },
  {
    imgLight: Ps5Light,
    imgDark: Ps5Dark,
    title:
      "Sony Playstation 5 Digital Edition Console with Extra Blue Controller, White PULSE 3D Headset and Surge Dual Controller",
    productId: "BJ8364850",
    quantity: "1",
    price: "$799",
  },
  {
    imgLight: XboxLight,
    imgDark: XboxDark,
    title:
      "Xbox Series X Diablo IV Bundle + 2 Xbox Wireless Controller Carbon Black + Controller Charger",
    productId: "BJ8364850",
    quantity: "1",
    price: "$699",
  },
  {
    imgLight: IphoneLight,
    imgDark: IphoneDark,
    title: "APPLE iPhone 15 5G phone, 256GB, Gold",
    productId: "BJ8364850",
    quantity: "3",
    price: "$2,997",
  },
];

const ProductItem = (props: ProductDetail) => {
  const { imgLight, imgDark, title, productId, quantity, price } = props;
  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center gap-6">
        <Link href="#" className="size-14 shrink-0">
          <Image
            className="size-full dark:hidden"
            src={imgLight}
            alt="product image"
          />
          <Image
            className="hidden size-full dark:block"
            src={imgDark}
            alt="product image"
          />
        </Link>
        <Link
          href="#"
          className="min-w-0 flex-1 font-medium text-secondary-foreground hover:underline"
        >
          {title}
        </Link>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Text className="text-sm font-normal text-muted-foreground">
          <span className="font-medium text-secondary-foreground">
            Product ID:
          </span>{" "}
          {productId}
        </Text>
        <div className="flex items-center justify-end gap-4">
          <Text className="text-base font-normal text-secondary-foreground">
            x{quantity}
          </Text>
          <Text className="text-xl font-bold leading-tight text-secondary-foreground">
            {price}
          </Text>
        </div>
      </div>
    </div>
  );
};

const orderHistory = [
  {
    title: "Estimated delivery in 24 Nov 2023",
    description: "Products delivered",
    bgColor: "bg-primary-100",
    textColor: "text-muted-foreground",
    icon: <Home className="size-4 text-muted-foreground" />,
  },
  {
    title: "Today",
    description: "Products being delivered",
    bgColor: "bg-primary-100",
    textColor: "text-muted-foreground",
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

const DefaultOrderTracking = () => (
  <MuiLayout.Section className="bg-background py-8 antialiased md:py-16">
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <Heading level={3} className="font-semibold tracking-normal">
        Track the delivery of order #957684673
      </Heading>
      <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
        <div className="w-full divide-y divide-primary-200 overflow-hidden rounded-lg border border-primary-200 lg:max-w-xl xl:max-w-2xl">
          {products.map((product, index) => (
            <ProductItem
              key={index}
              imgLight={product.imgLight}
              imgDark={product.imgDark}
              title={product.title}
              productId={product.productId}
              quantity={product.quantity}
              price={product.price}
            />
          ))}
          <div className="space-y-4 bg-primary-50 p-6">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="font-normal text-muted-foreground">
                  Original price
                </dt>
                <dd className="font-medium text-secondary-foreground">
                  $6,592.00
                </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="font-normal text-muted-foreground">Savings</dt>
                <dd className="text-base font-medium text-green-500">
                  -$299.00
                </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="font-normal text-muted-foreground">
                  Store Pickup
                </dt>
                <dd className="font-medium text-secondary-foreground">$99</dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="font-normal text-muted-foreground">Tax</dt>
                <dd className="font-medium text-secondary-foreground">$799</dd>
              </dl>
            </div>
            <dl className="flex items-center justify-between gap-4 border-t border-primary-200 pt-2">
              <dt className="text-lg font-bold text-secondary-foreground">
                Total
              </dt>
              <dd className="text-lg font-bold text-secondary-foreground">
                $7,191.00
              </dd>
            </dl>
          </div>
        </div>
        <div className="mt-6 grow sm:mt-8 lg:mt-0">
          <div className="space-y-6 rounded-lg border border-primary-200 bg-background p-6 shadow-sm">
            <Heading level={3} className="font-semibold tracking-normal">
              Order history
            </Heading>
            <OrderHistory />
            <div className="gap-4 sm:flex sm:items-center">
              <Button className="w-full rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-200">
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
  </MuiLayout.Section>
);

export default DefaultOrderTracking;
