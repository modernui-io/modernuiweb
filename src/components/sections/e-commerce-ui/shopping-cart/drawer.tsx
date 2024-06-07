import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Heart, Minus, Plus, Trash, X } from "lucide-react"; // Assuming you use lucide-react for icons
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
//components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
//images
import IwatchDark from "~/lib/assets/images/apple-watch-dark.svg";
import Iwatch from "~/lib/assets/images/apple-watch-light.svg";
import IMacDark from "~/lib/assets/images/imac-front-dark.svg";
import IMac from "~/lib/assets/images/imac-front.svg";
import IphoneDark from "~/lib/assets/images/iphone-dark.svg";
import Iphone from "~/lib/assets/images/iphone-light.svg";
import PS5Dark from "~/lib/assets/images/ps5-dark.svg";
import PS5 from "~/lib/assets/images/ps5-light.svg";
import XBoxDark from "~/lib/assets/images/xbox-dark.svg";
import XBox from "~/lib/assets/images/xbox-light.svg";

const items = [
  {
    id: 1,
    name: "Apple iPhone 15, 256GB, Gold",
    quantity: 2,
    price: 1797,
    imageUrlLight: Iphone,
    imageUrlDark: IphoneDark,
  },
  {
    id: 2,
    name: "Xbox Series X, 1TB, Limited",
    quantity: 1,
    price: 599,
    imageUrlLight: XBox,
    imageUrlDark: XBoxDark,
  },
  {
    id: 3,
    name: "Sony PlayStation 5, 2 controllers",
    quantity: 1,
    price: 799,
    imageUrlLight: PS5,
    imageUrlDark: PS5Dark,
  },
  {
    id: 4,
    name: "Apple Watch SE, 38 mm",
    quantity: 1,
    price: 299,
    imageUrlLight: Iwatch,
    imageUrlDark: IwatchDark,
  },
  {
    id: 5,
    name: "Apple iMac, 5k, 256GB, Blue",
    quantity: 1,
    price: 1799,
    imageUrlLight: IMac,
    imageUrlDark: IMacDark,
  },
];

const totalPrice = items.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0,
);

const totals = [
  { label: "Subtotal", value: totalPrice, isCurrency: true },
  { label: "Savings", value: 0, isCurrency: true, isGreen: true },
  { label: "Store Pickup", value: 99, isCurrency: true },
  { label: "Tax", value: 199, isCurrency: true },
  {
    label: "Total",
    value: totalPrice + 99 + 199,
    isCurrency: true,
    isBold: true,
  },
];

const formSchema = z.object({
  voucher: z.string().optional(),
});

export const ShoppingCartDrawer = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      voucher: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <div className="m-5 text-center">
            <Button>Show shopping cart</Button>
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="max-w-[400px] overflow-y-auto sm:max-w-[470px]"
        >
          <div className="flex-1 space-y-4">
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center justify-between">
                  <Heading
                    level={5}
                    className="font-semibold uppercase leading-none text-primary-500"
                  >
                    My shopping cart
                  </Heading>
                </div>
              </SheetTitle>
              <SheetDescription>
                <div className="space-y-2">
                  <Text className="text-sm font-normal text-primary-500">
                    You can have{" "}
                    <span className="font-medium text-foreground">
                      free shipping
                    </span>{" "}
                    if you add products worth{" "}
                    <span className="font-medium text-foreground">$600</span>.
                  </Text>
                  <div className="h-1.5 w-full rounded-full bg-primary-200">
                    <div
                      className="h-1.5 rounded-full bg-primary-700"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <Link
                    href="#"
                    className="flex items-center text-sm font-medium text-primary-700 hover:underline"
                  >
                    How can I get this?
                    <ArrowRight className="ms-2 size-4" />
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>

            <div className="divide-y divide-primary-200 border-t border-primary-200">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-4 py-4">
                  <Link href="#" className="size-20 shrink-0">
                    <Image
                      className="size-full dark:hidden"
                      src={item.imageUrlLight}
                      alt={item.name}
                    />
                    <Image
                      className="hidden size-full dark:block"
                      src={item.imageUrlDark}
                      alt={item.name}
                    />
                  </Link>
                  <div className="min-w-0 flex-1 space-y-3">
                    <Link
                      href="#"
                      className="text-base font-medium text-foreground hover:underline"
                    >
                      {item.name}
                    </Link>
                    <div className="flex items-center gap-4">
                      <div className="relative flex w-32 items-center">
                        <Button className="flex h-9 items-center justify-center rounded-e-none border border-primary-300 bg-primary-100 p-3 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-100">
                          <Minus className="size-3 text-foreground" />
                        </Button>
                        <Input
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="block h-9 w-full rounded-none border-x-0 border-primary-300 bg-primary-50 py-2 text-center text-sm text-foreground focus:border-blue-500 focus:ring-blue-500"
                        />
                        <Button className="flex h-9 items-center justify-center rounded-s-none border border-primary-300 bg-primary-100 p-3 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-100">
                          <Plus className="size-3 text-foreground" />
                        </Button>
                      </div>
                      <Text className="text-base font-bold text-foreground">
                        ${item.price * item.quantity}
                      </Text>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="link"
                        className="inline-flex items-center px-0 text-sm font-medium text-primary-500 hover:underline"
                      >
                        <Heart className="size-4" />
                        Move to Favorites
                      </Button>
                      <Button
                        variant="link"
                        className="inline-flex items-center pl-1 pr-0 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        <Trash className="size-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button
                  variant="link"
                  className="peer text-sm font-medium text-primary-600 hover:underline "
                >
                  Add coupon code
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mb-4 rounded-lg border border-primary-100 bg-primary-50 p-4">
                  <Form {...form}>
                    <form
                      className="space-y-4"
                      onSubmit={form.handleSubmit(onSubmit)}
                    >
                      <Label
                        htmlFor="voucher"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Do you have a voucher or gift card?
                      </Label>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <FormField
                          control={form.control}
                          name="voucher"
                          render={({ field }) => (
                            <FormItem className="col-span-3 w-full">
                              <FormLabel className="sr-only">Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="text"
                                  id="voucher"
                                  className="my-0 block w-full rounded-lg border border-primary-300 bg-primary-100 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                                  placeholder=""
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button className="col-span-1 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                          Apply
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </CollapsibleContent>
            </Collapsible>
            {/* Total price */}
            <div className="mb-4 rounded-lg border border-primary-100 bg-primary-50 px-4">
              <div className="divide-primary-200 ">
                {totals.map((item, index) => (
                  <dl
                    key={item.label}
                    className={`flex items-center justify-between gap-4 py-3 ${item.isBold ? "text-md font-bold" : "text-base"} ${
                      item.isGreen
                        ? "text-green-500 dark:text-green-400"
                        : "text-primary-500 "
                    }`}
                  >
                    <dt className="font-normal">{item.label}</dt>
                    <dd
                      className={`font-medium ${item.isBold ? "text-foreground" : ""}`}
                    >
                      {item.isCurrency ? `$${item.value}` : item.value}
                    </dd>
                  </dl>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 gap-4 sm:flex sm:items-center sm:justify-center">
            <Button className="mb-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:my-0">
              Checkout
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-lg  border border-primary-200  px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100"
            >
              Continue Shopping
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
