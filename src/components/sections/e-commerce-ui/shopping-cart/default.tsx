import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Heart, Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
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

interface CartItem {
  id: number;
  imageLight: StaticImageData;
  imageDark: StaticImageData;
  title: string;
  price: string;
  quantity: number;
}

interface AlsoBoughtItems {
  id: number;
  imageLight: StaticImageData;
  imageDark: StaticImageData;
  title: string;
  description: string;
  oldPrice: string;
  newPrice: string;
}
[];

const cartItems: CartItem[] = [
  {
    id: 1,
    imageLight: IMac,
    imageDark: IMacDark,
    title:
      'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT',
    price: "$1,499",
    quantity: 2,
  },
  {
    id: 2,
    imageLight: Iwatch,
    imageDark: IwatchDark,
    title:
      "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
    price: "$598",
    quantity: 1,
  },
  {
    id: 3,
    imageLight: IMac,
    imageDark: IMacDark,
    title:
      'Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black',
    price: "$1,799",
    quantity: 1,
  },
  {
    id: 4,
    imageLight: IPad,
    imageDark: IPadDark,
    title: 'Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold',
    price: "$699",
    quantity: 1,
  },
  {
    id: 5,
    imageLight: Iphone,
    imageDark: IphoneDark,
    title: "APPLE iPhone 15 5G phone, 256GB, Gold",
    price: "$2,997",
    quantity: 3,
  },
];

const alsoBoughtItems: AlsoBoughtItems[] = [
  {
    id: 1,
    imageLight: IMac,
    imageDark: IMacDark,
    title: "iMac 27”",
    description:
      "This generation has some improvements, including a longer continuous battery life.",
    oldPrice: "$399.99",
    newPrice: "$299",
  },
  {
    id: 2,
    imageLight: PS5,
    imageDark: PS5Dark,
    title: "Playstation 5",
    description:
      "This generation has some improvements, including a longer continuous battery life.",
    oldPrice: "$799.99",
    newPrice: "$499",
  },
  {
    id: 3,
    imageLight: Iwatch,
    imageDark: IwatchDark,
    title: "Apple Watch Series 8",
    description:
      "This generation has some improvements, including a longer continuous battery life.",
    oldPrice: "$1799.99",
    newPrice: "$1199",
  },
];

const ShoppingCartItem = ({ item }: { item: CartItem }) => (
  <div className="rounded-lg border border-primary-200 bg-background p-4 shadow-sm md:p-6">
    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
      <Link href="#" className="shrink-0 md:order-1">
        <Image
          className="size-20 dark:hidden"
          src={item.imageLight}
          alt={item.title}
        />
        <Image
          className="hidden size-20 dark:block"
          src={item.imageDark}
          alt={item.title}
        />
      </Link>
      <Label htmlFor={`counter-input-${item.id}`} className="sr-only">
        Choose quantity:
      </Label>
      <div className="flex items-center justify-between md:order-3 md:justify-end">
        <div className="flex items-center">
          <Button className="inline-flex size-5 shrink-0 items-center justify-center rounded-md border border-primary-300 bg-primary-200 px-0 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 ">
            <Minus className="size-3 text-foreground" />
          </Button>
          <input
            type="text"
            id={`counter-input-${item.id}`}
            className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-foreground focus:outline-none focus:ring-0"
            value={item.quantity}
            readOnly
          />
          <Button className="inline-flex size-5 shrink-0 items-center justify-center rounded-md border border-primary-300 bg-primary-200 px-0 hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100">
            <Plus className="size-3 text-foreground" />
          </Button>
        </div>
        <div className="text-end md:order-4 md:w-32">
          <Text className="text-base font-bold text-foreground">
            {item.price}
          </Text>
        </div>
      </div>

      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
        <Link
          href="#"
          className="text-base font-medium text-foreground hover:underline"
        >
          {item.title}
        </Link>
        <div className="flex items-center">
          <Button
            variant="link"
            className="inline-flex items-center pr-0 text-sm font-medium text-primary-500 hover:text-primary-900 hover:underline"
          >
            <Heart className="size-5 text-primary-500" />
            Add to Favorites
          </Button>
          <Button
            variant="link"
            className="inline-flex items-center text-sm font-medium text-destructive hover:underline"
          >
            <X className="size-5" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const AlsoBoughtItem = ({ item }: { item: AlsoBoughtItems }) => (
  <div className="space-y-6 overflow-hidden rounded-lg border border-primary-200 bg-background p-6 shadow-sm">
    <Link href="#" className="overflow-hidden rounded">
      <Image
        className="mx-auto size-44 dark:hidden"
        src={item.imageLight}
        alt={item.title}
      />
      <Image
        className="mx-auto hidden size-44 dark:block"
        src={item.imageDark}
        alt={item.title}
      />
    </Link>
    <div>
      <Link
        href="#"
        className="text-lg font-semibold leading-tight text-foreground hover:underline"
      >
        {item.title}
      </Link>
      <Text className="mt-2 text-base font-normal text-primary-500">
        {item.description}
      </Text>
    </div>
    <div>
      <Text className="text-lg font-bold text-foreground">
        <span className="line-through">{item.oldPrice}</span>
      </Text>
      <Text className="text-lg font-bold leading-tight text-destructive">
        {item.newPrice}
      </Text>
    </div>
    <div className="mt-6 flex items-center gap-2.5">
      <Button className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-200 bg-background p-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100">
        <Heart className="size-5" />
      </Button>
      <Button className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
        <ShoppingCart className="size-5" />
        Add to cart
      </Button>
    </div>
  </div>
);

const formSchema = z.object({
  voucher: z.string().optional(),
});

export const ShoppingCartDefault = () => {
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
    <MuiLayout.Section className="bg-background py-8 antialiased md:py-16">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <Heading level={"xsDisplay"} className="font-semibold sm:text-2xl">
          Shopping Cart
        </Heading>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <ShoppingCartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="hidden xl:mt-8 xl:block"></div>
            <Heading level={"smDisplay"} className="text-foreground">
              People also bought
            </Heading>
            <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
              {alsoBoughtItems.map((item) => (
                <AlsoBoughtItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-primary-200 bg-background p-4 shadow-sm sm:p-6">
              <Text className="text-xl font-semibold text-foreground">
                Order summary
              </Text>
              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-primary-500">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-foreground">
                      $7,592.00
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-primary-500">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -$299.00
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-primary-500">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-foreground">
                      $99
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-primary-500">
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
                    $8,191.00
                  </dd>
                </dl>
              </div>
              <Link
                href="#"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Proceed to Checkout
              </Link>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-primary-500">
                  {" "}
                  or{" "}
                </span>
                <Link
                  href="#"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
                >
                  Continue Shopping
                  <ArrowRight className="size-4 text-foreground" />
                </Link>
              </div>
            </div>
            <div className="space-y-4 rounded-lg border border-primary-200 bg-background p-4 shadow-sm sm:p-6">
              <Form {...form}>
                <form
                  className="space-y-4"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div>
                    <Label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </Label>
                    <FormField
                      control={form.control}
                      name="voucher"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Email</FormLabel>
                          <FormControl>
                            <Input
                              className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                              placeholder=""
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  >
                    Apply Code
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
