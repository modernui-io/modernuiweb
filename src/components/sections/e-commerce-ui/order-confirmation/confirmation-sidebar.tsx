import React from "react";
import Image from "next/image";
import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
//images
import IMacDark from "~/lib/assets/images/imac-front-dark.svg";
import IMac from "~/lib/assets/images/imac-front.svg";
import IPadDark from "~/lib/assets/images/ipad-dark.svg";
import IPad from "~/lib/assets/images/ipad-light.svg";
import IphoneDark from "~/lib/assets/images/iphone-dark.svg";
import Iphone from "~/lib/assets/images/iphone-light.svg";
import XBoxDark from "~/lib/assets/images/xbox-dark.svg";
import XBox from "~/lib/assets/images/xbox-light.svg";

const orderDetails = [
  { label: "Order number", value: "#76453857" },
  { label: "Date", value: "14 May 2024" },
  { label: "Payment Method", value: "JPMorgan monthly installments" },
  { label: "Name", value: "ModernUIWeb Studios LLC" },
  { label: "Address", value: "Scott Street, San Francisco, California, USA" },
  { label: "Phone", value: "+(123) 456 7890" },
  { label: "Email", value: "name@company.com" },
];

const orderItems = [
  {
    name: "Apple iMac 27”",
    quantity: 1,
    price: "$1,499",
    imgSrc: IMac,
    imgSrcDark: IMacDark,
  },
  {
    name: "Apple iPhone 14",
    quantity: 2,
    price: "$1,998",
    imgSrc: Iphone,
    imgSrcDark: IphoneDark,
  },
  {
    name: "Apple iPad Air",
    quantity: 1,
    price: "$898",
    imgSrc: IPad,
    imgSrcDark: IPadDark,
  },
  {
    name: "Xbox Series X",
    quantity: 4,
    price: "$4,499",
    imgSrc: XBox,
    imgSrcDark: XBoxDark,
  },
];

const summaryDetails = [
  { label: "Original price", value: "$4,894.00" },
  { label: "Savings", value: "-$299.00", isSaving: true },
  { label: "Store Pickup", value: "$99" },
  { label: "Tax", value: "$799" },
];

export const OrderConfirmationSidebar = () => {
  return (
    <MuiLayout.Section className="py-8 antialiased md:py-16">
      <MuiLayout.Container className="mx-auto max-w-5xl px-4 2xl:px-0">
        <Heading
          level={"xsDisplay"}
          className="mb-2 font-semibold text-foreground sm:text-2xl"
        >
          Thanks for your order!
        </Heading>
        <Text className="mb-6 text-primary-500 md:mb-8">
          Your order will be processed within 24 hours during working days. We
          will notify you by email once your order has been shipped.
        </Text>
        <div className="grid md:grid-cols-2 md:gap-12">
          <div className="mb-6 md:mb-8">
            <div className="mb-6 divide-y divide-primary-200 md:mb-8">
              {orderDetails.map((detail, index) => (
                <dl
                  key={index}
                  className="items-center justify-between gap-4 py-3 sm:flex"
                >
                  <dt className="mb-1 font-normal text-primary-500 sm:mb-0">
                    {detail.label}
                  </dt>
                  <dd className="font-medium text-foreground sm:text-end">
                    {detail.value}
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
                className="rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100"
              >
                Return to shopping
              </Link>
            </div>
          </div>
          <div className="space-x-4">
            <div className="rounded-lg border border-primary-100 bg-primary-50 p-4">
              <Text className="mb-4 text-xl font-semibold text-primary-900">
                Order summary
              </Text>
              <div className="relative overflow-x-auto">
                <Table className="w-full text-left font-medium text-primary-900 md:table-fixed">
                  <TableBody className="divide-y divide-primary-200">
                    {orderItems.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="whitespace-nowrap py-2.5 md:w-[256px]">
                          <div className="flex items-center gap-4">
                            <Link
                              href="#"
                              className="flex aspect-square size-10 shrink-0 items-center"
                            >
                              <Image
                                className="h-auto max-h-full w-full dark:hidden"
                                src={item.imgSrc}
                                alt={`${item.name} image`}
                              />
                              <Image
                                className="hidden h-auto max-h-full w-full dark:block"
                                src={item.imgSrcDark}
                                alt={`${item.name} image`}
                              />
                            </Link>
                            <Link href="#" className="hover:underline">
                              {item.name}
                            </Link>
                          </div>
                        </TableCell>
                        <TableCell className="w-[56px] p-2.5 text-base font-normal text-primary-900">
                          x{item.quantity}
                        </TableCell>
                        <TableCell className="py-2.5 ps-2.5 text-end text-base font-bold text-primary-900 ">
                          {item.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 space-y-4">
                <div className="space-y-2">
                  {summaryDetails.map((detail, index) => (
                    <dl
                      key={index}
                      className="flex items-center justify-between gap-4"
                    >
                      <dt className="text-base font-normal text-primary-500">
                        {detail.label}
                      </dt>
                      <dd
                        className={`text-base font-medium ${detail.isSaving ? "text-green-500" : "text-primary-900"}`}
                      >
                        {detail.value}
                      </dd>
                    </dl>
                  ))}
                </div>
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 text-lg font-bold text-primary-900">
                  <dt>Total</dt>
                  <dd>$5,493.00</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
