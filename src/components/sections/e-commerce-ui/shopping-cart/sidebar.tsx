import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, Truck, X } from "lucide-react";
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

const cartItems = [
  {
    id: 1,
    name: 'PC system All in One APPLE iMac (2024) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT',
    price: 1499,
    quantity: 1,
    imageLight: IMac,
    imageDark: IMacDark,
    deliveryDate: "18 Nov 2024",
    warrantyOptions: [],
  },
  {
    id: 2,
    name: "APPLE iPhone 15 5G phone, 256GB, Gold",
    price: 1998,
    quantity: 1,
    imageLight: Iphone,
    imageDark: IphoneDark,
    deliveryDate: "03 Dec 2024",
    warrantyOptions: [
      { id: "1YearGuarantee", text: "Guarantee Plus 1 Year - $99", value: 99 },
      {
        id: "2YearsGuarantee",
        text: "Guarantee Plus 2 Years - $199",
        value: 199,
      },
    ],
  },
  {
    id: 3,
    name: 'Tablet APPLE iPad Pro 12.9" 6th Gen, 128GB, Wi-Fi, Gold',
    price: 3299,
    quantity: 5,
    imageLight: IPad,
    imageDark: IPadDark,
    deliveryDate: "14 Nov 2024",
    warrantyOptions: [],
  },
  {
    id: 4,
    name: 'Apple - MacBook Pro 16" Laptop, M3 Pro chip, 36GB Memory, 18-core GPU, 512GB SSD, Space Black',
    price: 799,
    quantity: 1,
    imageLight: IMac,
    imageDark: IMacDark,
    deliveryDate: "09 Dec 2024",
    warrantyOptions: [],
  },
  {
    id: 5,
    name: "Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
    price: 499,
    quantity: 1,
    imageLight: Iwatch,
    imageDark: IwatchDark,
    deliveryDate: "14 Nov 2024",
    warrantyOptions: [],
  },
];

const formSchema = z.object({
  voucher: z.string().optional(),
});

export const ShoppingCartSideBar = () => {
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
        <ol className="flex w-full max-w-2xl items-center text-center text-sm font-medium text-primary-500 sm:text-base">
          <li className="flex items-center text-primary-600 after:mx-6 after:hidden after:w-full after:border after:border-primary-200 md:w-full md:after:inline-block md:after:content-[''] xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-primary-200 after:content-['/'] md:after:hidden">
              <CircleCheck className="me-2 size-4 text-primary sm:size-5" />
              Cart
            </span>
          </li>

          <li className="flex items-center after:mx-6 after:hidden after:w-full after:border after:border-primary-200 after:content-[''] md:w-full md:after:inline-block xl:after:mx-10">
            <span className="flex items-center after:mx-2 after:text-primary-200 after:content-['/'] md:after:hidden">
              <CircleCheck className="me-2 size-4 sm:size-5" />
              Payment
            </span>
          </li>

          <li className="flex shrink-0 items-center">
            <CircleCheck className="me-2 size-4 sm:size-5" />
            Order summary
          </li>
        </ol>

        <Heading
          level={2}
          className="mt-6 text-xl font-semibold  sm:mt-8 sm:text-2xl"
        >
          Your Cart
        </Heading>

        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 divide-y divide-primary-200 border-b border-primary-200">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4 py-4">
                <Link href="#" className="size-10 shrink-0">
                  <Image
                    className="size-full dark:hidden"
                    src={item.imageLight}
                    alt={item.name}
                  />
                  <Image
                    className="hidden size-full dark:block"
                    src={item.imageDark}
                    alt={item.name}
                  />
                </Link>

                <div className="min-w-0 flex-1 space-y-3">
                  <Link
                    href="#"
                    className="text-base font-medium hover:underline"
                  >
                    {item.name}
                  </Link>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <Label
                          htmlFor={`quantity-${item.id}`}
                          className="sr-only mb-2 block text-sm font-medium "
                        >
                          Select quantity
                        </Label>
                        <select
                          id={`quantity-${item.id}`}
                          value={item.quantity}
                          className="block w-16 rounded-lg border border-primary-300 bg-primary-50 p-2 text-sm focus:border-primary-500 focus:ring-primary-500"
                        >
                          {[...Array(10).keys()].map((i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      <Button
                        variant="link"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                      >
                        <X className="size-5" />
                        Remove
                      </Button>
                    </div>

                    <Text className="w-24 shrink-0 text-end text-base font-bold  sm:hidden">
                      ${item.price}
                    </Text>
                  </div>

                  <div className="flex items-center gap-2">
                    <Truck className="size-5 text-primary-500" />
                    <Text className="text-sm font-normal text-primary-500">
                      Delivery on {item.deliveryDate}
                    </Text>
                  </div>

                  {item.warrantyOptions.length > 0 && (
                    <div className="space-y-3">
                      <Text className="text-sm font-medium ">
                        Extend the standard warranty:
                      </Text>
                      <div className="space-y-2">
                        {item.warrantyOptions.map((option) => (
                          <div key={option.id} className="flex items-center">
                            <Input
                              id={option.id}
                              type="radio"
                              name={`GuaranteeInput-${item.id}`}
                              className="size-4 border-primary-300 bg-primary-100"
                            />
                            <Label
                              htmlFor={option.id}
                              className="ms-2 text-sm font-medium text-primary-500 "
                            >
                              {option.text}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Text className="hidden w-24 shrink-0 text-end text-base font-bold  sm:block">
                  ${item.price}
                </Text>
              </div>
            ))}
          </div>

          <div className="ml-auto mt-6 w-full space-y-6 rounded-lg border border-primary-100 bg-primary-50 p-4 sm:mt-8 md:p-6 lg:mt-0 lg:max-w-sm xl:max-w-md">
            <div className="flow-root">
              <div className="-my-3 divide-y divide-primary-200">
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-primary-500">
                    Subtotal
                  </dt>
                  <dd className="text-base font-medium ">
                    $
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0,
                    )}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-primary-500 ">
                    Savings
                  </dt>
                  <dd className="text-base font-medium text-green-500">0</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-primary-500">
                    Store Pickup
                  </dt>
                  <dd className="text-base font-medium ">$99</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-primary-500">
                    Tax
                  </dt>
                  <dd className="text-base font-medium ">$199</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-bold ">Total</dt>
                  <dd className="text-base font-bold ">
                    $
                    {cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0,
                    ) +
                      99 +
                      199}
                  </dd>
                </dl>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300">
                Proceed to Checkout
              </Button>
              <Text className="text-sm font-normal text-primary-500">
                One or more items in your cart require an account.{" "}
                <Link
                  href="#"
                  title=""
                  className="font-medium text-primary-500 underline hover:no-underline"
                >
                  Sign in or create an account now
                </Link>
                .
              </Text>
            </div>
            <Form {...form}>
              <form
                className="flex items-end gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="flex-1">
                  <Label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium "
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </Label>
                  <FormField
                    control={form.control}
                    name="voucher"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Voucher</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="voucher"
                            className="block w-full rounded-lg border border-primary-300 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500"
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
                  className="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                >
                  Apply
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
