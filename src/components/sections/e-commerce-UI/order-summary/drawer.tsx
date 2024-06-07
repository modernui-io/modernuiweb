import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
//images
import WatchDark from "~/lib/assets/images/apple-watch-dark.svg";
import Watch from "~/lib/assets/images/apple-watch-light.svg";
import MacDark from "~/lib/assets/images/imac-front-dark.svg";
import Mac from "~/lib/assets/images/imac-front.svg";
import IPadDark from "~/lib/assets/images/ipad-dark.svg";
import IPad from "~/lib/assets/images/ipad-light.svg";
import IPhoneDark from "~/lib/assets/images/iphone-dark.svg";
import IPhone from "~/lib/assets/images/iphone-light.svg";
import MacBookDark from "~/lib/assets/images/macbook-pro-dark.svg";
import MacBook from "~/lib/assets/images/macbook-pro-light.svg";
import PS5Dark from "~/lib/assets/images/ps5-dark.svg";
import PS5 from "~/lib/assets/images/ps5-light.svg";
import XBoxDark from "~/lib/assets/images/xbox-dark.svg";
import XBox from "~/lib/assets/images/xbox-light.svg";

export const OrderSummaryWithDrawer = () => {
  const products = [
    {
      id: 1,
      name: "Apple iMac 27”",
      quantity: 1,
      price: 1499,
      imageUrl: Mac,
      darkImageUrl: MacDark,
    },
    {
      id: 2,
      name: "Apple iPhone 14",
      quantity: 2,
      price: 1998,
      imageUrl: IPhone,
      darkImageUrl: IPhoneDark,
    },
    {
      id: 3,
      name: "Apple iPad Air",
      quantity: 1,
      price: 898,
      imageUrl: IPad,
      darkImageUrl: IPadDark,
    },
    {
      id: 4,
      name: "Xbox Series X",
      quantity: 4,
      price: 4499,
      imageUrl: XBox,
      darkImageUrl: XBoxDark,
    },
    {
      id: 5,
      name: "PlayStation 5",
      quantity: 1,
      price: 499,
      imageUrl: PS5,
      darkImageUrl: PS5Dark,
    },
    {
      id: 6,
      name: 'MacBook Pro 16"',
      quantity: 1,
      price: 499,
      imageUrl: MacBook,
      darkImageUrl: MacBookDark,
    },
    {
      id: 7,
      name: "Apple Watch SE",
      quantity: 2,
      price: 799,
      imageUrl: Watch,
      darkImageUrl: WatchDark,
    },
  ];

  const orderSummaryDetails = [
    {
      label: "Subtotal",
      value: "$5,992",
      valueClass: "text-primary-900",
    },
    {
      label: "Savings",
      value: "$0",
      valueClass: "text-green-500",
    },
    {
      label: "Store Pickup",
      value: "$99",
      valueClass: "text-primary-900",
    },
    {
      label: "Tax",
      value: "$199",
      valueClass: "text-primary-900",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <Button>Show order summary drawer</Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto md:max-w-[448px]">
        <SheetHeader>
          <Heading level={6} className="font-semibold uppercase leading-none">
            My shopping cart
          </Heading>
        </SheetHeader>

        <div className="mt-6 flex-1 space-y-6">
          <div>
            <div className="space-y-4 border-b border-primary-200 pb-4 ">
              <Heading level={6} className="font-semibold ">
                Billing information
              </Heading>
              <dl>
                <dt className="text-base font-medium text-primary-900 ">
                  Company
                </dt>
                <dd className="mt-1 text-base font-normal text-primary-500 ">
                  Bergside LLC, VAT 123456, (+1) 234 567 890
                </dd>
              </dl>
              <Button variant="link" className="px-0">
                Edit
              </Button>
            </div>
            <div className="space-y-4 border-b border-primary-200 py-4 ">
              <Heading level={6} className="font-semibold">
                Delivery information
              </Heading>
              <dl>
                <dt className="text-base font-medium text-primary-900 ">
                  DHL Express
                </dt>
                <dd className="mt-1 text-base font-normal text-primary-500">
                  3454 Scott Street, San Francisco, California, United States
                </dd>
              </dl>
              <Button variant={"link"} className="px-0">
                Edit
              </Button>
            </div>
            <div className="space-y-4 border-b border-primary-200 py-4 ">
              <Heading level={6} className=" font-semibold">
                Payment method
              </Heading>
              <Text className="text-sm font-medium text-primary-900 ">
                Online with credit card
              </Text>
              <Button variant={"link"} className="px-0">
                Edit
              </Button>
            </div>
          </div>
          <div>
            <Heading level={6} className="mb-4 font-semibold">
              Products
            </Heading>
            <div>
              <Table className="table w-full text-left font-medium text-primary-900 md:max-w-full  md:table-fixed">
                <TableBody className="divide-y divide-primary-200 ">
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="whitespace-nowrap pb-4 md:w-[224px]">
                        <div className="flex items-center gap-4">
                          <Link
                            href="#"
                            className="flex aspect-square size-10 shrink-0 items-center"
                          >
                            <Image
                              className="h-auto max-h-full w-full dark:hidden"
                              src={product.imageUrl}
                              alt={product.name}
                            />
                            <Image
                              className="hidden h-auto max-h-full w-full dark:block"
                              src={product.darkImageUrl}
                              alt={product.name}
                            />
                          </Link>
                          <Link href="#" className="hover:underline">
                            {product.name}
                          </Link>
                        </div>
                      </TableCell>
                      <TableCell className="p-4 text-base font-normal text-primary-900 ">
                        x{product.quantity}
                      </TableCell>
                      <TableCell className="p-4 text-right text-base font-bold text-primary-900 ">
                        ${product.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="rounded-lg border border-primary-100 bg-primary-50 p-4">
            <Heading level={6} className="mb-4 font-semibold">
              Order amount
            </Heading>
            {orderSummaryDetails.map((detail, index) => (
              <dl
                key={`${detail.label}-${index}`}
                className="mb-2 flex items-center justify-between gap-4"
              >
                <dt className="text-sm font-normal text-primary-500 ">
                  {detail.label}
                </dt>
                <dd className={`font-medium ${detail.valueClass} text-sm`}>
                  {detail.value}
                </dd>
              </dl>
            ))}
            <dl className="mt-4 flex items-center justify-between gap-4 border-t border-primary-200 pt-2 font-bold text-primary-900  ">
              <dt>Total</dt>
              <dd>$6,290</dd>
            </dl>
          </div>
        </div>
        <div className="mt-8 gap-4 sm:flex sm:items-center sm:justify-center">
          <Button className="mb-2 w-full md:mb-0">Place your order</Button>
          <SheetClose className="w-full">
            <Button variant="outline" className="w-full">
              Cancel the order
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
