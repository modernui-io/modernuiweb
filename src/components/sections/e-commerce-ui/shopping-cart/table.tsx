import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Minus, Plus, Trash2 } from "lucide-react";

//components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
//images
import IwatchDark from "~/lib/assets/images/apple-watch-dark.svg";
import Iwatch from "~/lib/assets/images/apple-watch-light.svg";
import IMacDark from "~/lib/assets/images/imac-front-dark.svg";
import IMac from "~/lib/assets/images/imac-front.svg";
import IPadDark from "~/lib/assets/images/ipad-dark.svg";
import IPad from "~/lib/assets/images/ipad-light.svg";
import IphoneDark from "~/lib/assets/images/iphone-dark.svg";
import Iphone from "~/lib/assets/images/iphone-light.svg";
import PS5Dark from "~/lib/assets/images/ps5-dark.svg";
import PS5 from "~/lib/assets/images/ps5-light.svg";
import XboxDark from "~/lib/assets/images/xbox-dark.svg";
import Xbox from "~/lib/assets/images/xbox-light.svg";

const products = [
  {
    id: 1,
    name: "Apple iMac 27”",
    imageLight: IMac,
    imageDark: IMacDark,
    price: 1499,
    quantity: 1,
  },
  {
    id: 2,
    name: "Apple iPhone 14",
    imageLight: Iphone,
    imageDark: IphoneDark,
    price: 1998,
    quantity: 2,
  },
  {
    id: 3,
    name: "Apple iPad Air",
    imageLight: IPad,
    imageDark: IPadDark,
    price: 898,
    quantity: 1,
  },
  {
    id: 4,
    name: 'MacBook Pro 16"',
    imageLight: IMac,
    imageDark: IMacDark,
    price: 4499,
    quantity: 4,
  },
  {
    id: 5,
    name: "PlayStation 5",
    imageLight: PS5,
    imageDark: PS5Dark,
    price: 499,
    quantity: 1,
  },
  {
    id: 6,
    name: "Xbox Series X",
    imageLight: Xbox,
    imageDark: XboxDark,
    price: 499,
    quantity: 1,
  },
  {
    id: 7,
    name: "Apple Watch SE",
    imageLight: Iwatch,
    imageDark: IwatchDark,
    price: 799,
    quantity: 2,
  },
];

export const ShoppingCartTable = () => {
  return (
    <MuiLayout.Section className="bg-background py-4 antialiased md:py-16">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-3xl">
          <Heading level={"xsDisplay"} className="font-semibold sm:text-2xl">
            Shopping Cart
          </Heading>
          <div className="mt-6 border-b border-primary-200 sm:mt-8">
            <Table className="h-[504px] w-full text-left text-base text-foreground">
              <TableBody className="divide-y divide-primary-200">
                {products.map((product) => (
                  <TableRow key={product.id} className="hover:bg-inherit">
                    <TableCell className="w-96 min-w-56 whitespace-nowrap py-2">
                      <Link
                        href="#"
                        className="flex items-center gap-4 font-medium hover:underline"
                      >
                        <div className="aspect-square size-10 shrink-0">
                          <Image
                            className="size-full dark:hidden"
                            src={product.imageLight}
                            alt={product.name}
                          />
                          <Image
                            className="hidden size-full dark:block"
                            src={product.imageDark}
                            alt={product.name}
                          />
                        </div>
                        {product.name}
                      </Link>
                    </TableCell>
                    <TableCell className="p-4 md:min-w-32">
                      <Label
                        htmlFor={`counter-input-${product.id}`}
                        className="sr-only"
                      >
                        Choose quantity:
                      </Label>
                      <div className="flex items-center">
                        <Button className="inline-flex size-5 shrink-0 items-center justify-center rounded-md border border-primary-300 bg-primary-100 px-0 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-100">
                          <Minus className="size-3 text-foreground" />
                        </Button>
                        <Input
                          type="text"
                          id={`counter-input-${product.id}`}
                          data-input-counter
                          className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-foreground shadow-none focus:outline-none focus-visible:ring-0"
                          placeholder=""
                          value={product.quantity}
                          required
                        />
                        <Button className="inline-flex size-5 shrink-0 items-center justify-center rounded-md border border-primary-300 bg-primary-100 px-0 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-100">
                          <Plus className="size-3  text-foreground" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="p-4 text-end text-base font-bold text-foreground md:min-w-32">
                      ${product.price}
                    </TableCell>
                    <TableCell className="py-4 md:min-w-32">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button className="ml-auto block  bg-background p-2 text-primary-500 shadow-none hover:bg-primary-100 hover:text-primary-900">
                              <span className="sr-only"> Remove </span>
                              <Trash2 className="size-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>Remove</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4">
            <Text className="text-xl font-semibold">Order summary</Text>
            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-primary-500">
                    Original price
                  </dt>
                  <dd className="text-base font-medium text-foreground ">
                    $6,592.00
                  </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-primary-500">
                    Savings
                  </dt>
                  <dd className="text-base font-medium text-green-500">
                    -$299.00
                  </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-primary-500">
                    Store Pickup
                  </dt>
                  <dd className="text-base font-medium text-foreground">$99</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-primary-500 ">
                    Tax
                  </dt>
                  <dd className="text-base font-medium text-foreground">
                    $799
                  </dd>
                </dl>
              </div>
              <dl className="flex items-center justify-between gap-4 border-t border-primary-200 pt-2">
                <dt className="text-base font-bold text-foreground">Total</dt>
                <dd className="text-base font-bold text-foreground">
                  $7,191.00
                </dd>
              </dl>
            </div>
          </div>
          <div className="mt-6 gap-4 sm:flex sm:items-center sm:justify-center">
            <Link
              href="#"
              className="flex w-full justify-center rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100"
            >
              Continue Shopping
            </Link>
            <Link
              href="#"
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:mt-0"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
