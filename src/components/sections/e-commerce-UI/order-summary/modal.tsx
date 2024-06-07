import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog";
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

export const OrderSummaryWithModal = () => {
  const products = [
    {
      id: 1,
      name: 'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma, Blue, Keyboard layout INT',
      quantity: 1,
      price: 1499,
      imageUrl: Mac,
      darkImageUrl: MacDark,
    },
    {
      id: 2,
      name: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
      quantity: 2,
      price: 598,
      imageUrl: Watch,
      darkImageUrl: WatchDark,
    },
    {
      id: 3,
      name: "Sony Playstation 5 Digital Edition Console with Extra Blue Controller, White PULSE 3D Headset and Surge Dual Controller, 2 games",
      quantity: 1,
      price: 799,
      imageUrl: PS5,
      darkImageUrl: PS5Dark,
    },
    {
      id: 4,
      name: "Xbox Series X Diablo IV Bundle + Xbox Wireless Controller Carbon Black",
      quantity: 1,
      price: 699,
      imageUrl: XBox,
      darkImageUrl: XBoxDark,
    },
    {
      id: 5,
      name: "APPLE iPhone 15 5G phone, 256GB, Gold",
      quantity: 3,
      price: 2997,
      imageUrl: IPhone,
      darkImageUrl: IPhoneDark,
    },
  ];

  const orderSummaryDetails = [
    {
      label: "Original price",
      value: "$6,592.00",
      valueClass: "text-primary-900 ",
    },
    { label: "Savings", value: "-$299.00", valueClass: "text-green-500" },
    {
      label: "Store Pickup",
      value: "$99",
      valueClass: "text-primary-900 ",
    },
    {
      label: "Tax",
      value: "$799",
      valueClass: "text-primary-900 ",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button>Show order summary modal</Button>
      </DialogTrigger>
      <DialogContent className="max-h-full overflow-y-auto md:max-h-[90%] md:max-w-screen-md">
        <DialogHeader className="border-b pb-4">
          <Heading level={5} className="font-semibold leading-none">
            Order summary
          </Heading>
        </DialogHeader>

        <div className="flow-root">
          <div className="divide-y divide-primary-200 text-sm ">
            <dl className="pb-4  sm:flex sm:items-center sm:justify-between sm:gap-4">
              <dt className="whitespace-nowrap font-semibold text-primary-900 ">
                Order date
              </dt>
              <dd className="mt-2 text-primary-500  sm:mt-0 sm:text-right">
                24 November 2023
              </dd>
            </dl>

            <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <dt className="whitespace-nowrap font-semibold text-primary-900 ">
                Email
              </dt>
              <dd className="mt-2 text-primary-500  sm:mt-0 sm:text-right">
                name@example.com
              </dd>
            </dl>

            <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <dt className="whitespace-nowrap text-base font-semibold text-primary-900 ">
                Phone
              </dt>
              <dd className="mt-2 text-primary-500  sm:mt-0 sm:text-right">
                +123 456 7890
              </dd>
            </dl>

            <dl className="py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <dt className="whitespace-nowrap font-semibold text-primary-900 ">
                Payment method
              </dt>
              <dd className="mt-2 flex items-center gap-2 sm:mt-0 sm:justify-end">
                <Image className="h-auto w-5" src={MasterCard} alt="" />
                <span className="text-right text-primary-500 ">
                  {" "}
                  Credit Card{" "}
                </span>
              </dd>
            </dl>

            <dl className="pt-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
              <dt className="whitespace-nowrap font-semibold text-primary-900 ">
                Shipping address
              </dt>
              <dd className="mt-2 text-primary-500  sm:mt-0 sm:text-right">
                62 Miles Drive St, Newark, NJ 07103, California,
              </dd>
            </dl>
          </div>
        </div>
        <h4 className="mb-1 mt-2 text-lg font-semibold text-primary-900 ">
          Products
        </h4>
        <div className="mb-5 divide-y divide-primary-200 rounded-lg border border-primary-200 bg-primary-50">
          {products.map((product) => (
            <div
              key={product.id}
              className="items-center space-y-4 p-4 sm:flex sm:gap-6 sm:space-y-0"
            >
              <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                <Link href="#" className="block aspect-square size-14 shrink-0">
                  <Image
                    className="size-full dark:hidden"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <Image
                    className="hidden size-full dark:block"
                    src={product.darkImageUrl}
                    alt={product.name}
                  />
                </Link>
                <div className="w-full md:max-w-sm lg:max-w-md">
                  <Link
                    href="#"
                    className=" text-sm font-medium text-primary-900 hover:underline "
                  >
                    {product.name}
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 shrink-0">
                  <Text className="text-sm font-normal text-primary-900 ">
                    x{product.quantity}
                  </Text>
                </div>
                <div className="md:w-24 md:text-right">
                  <Text className="text-sm font-bold text-primary-900 ">
                    ${product.price}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-4">
          <Heading level={5} className=" font-semibold">
            Order summary
          </Heading>
          <div className="space-y-4">
            <div className="space-y-2">
              {orderSummaryDetails.map((detail, index) => (
                <dl
                  key={index}
                  className="flex items-center justify-between gap-4"
                >
                  <dt className="text-primary-500 ">{detail.label}</dt>
                  <dd className={`text-base font-medium ${detail.valueClass}`}>
                    {detail.value}
                  </dd>
                </dl>
              ))}
            </div>
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-lg font-bold text-primary-900">Total</dt>
              <dd className="text-lg font-bold text-primary-900">$7,191.00</dd>
            </dl>
          </div>
        </div>
        <div className="mt-4 items-center space-x-4 space-y-4 border-t border-primary-200 sm:space-y-0 md:mt-5 md:pt-5">
          <Button>Place your order</Button>
          <DialogClose>
            <Button variant={"outline"}>Cancel the order</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
