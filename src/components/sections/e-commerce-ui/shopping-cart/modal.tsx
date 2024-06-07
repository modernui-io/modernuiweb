import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Minus, Plus, Trash } from "lucide-react"; // Assuming you use lucide-react for icons
import { useForm } from "react-hook-form";
import * as z from "zod";

//components
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
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
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
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
import XBox from "~/lib/assets/images/xbox-dark.svg";
import XBoxDark from "~/lib/assets/images/xbox-light.svg";

const items = [
  {
    id: 1,
    name: "Apple iMac 27”",
    quantity: 1,
    price: 1499,
    imageUrlLight: IMac,
    imageUrlDark: IMacDark,
  },
  {
    id: 2,
    name: "Apple iPhone 14",
    quantity: 2,
    price: 999,
    imageUrlLight: Iphone,
    imageUrlDark: IphoneDark,
  },
  {
    id: 3,
    name: "Apple iPad Air",
    quantity: 1,
    price: 898,
    imageUrlLight: IPad,
    imageUrlDark: IPadDark,
  },
  {
    id: 4,
    name: 'MacBook Pro 16"',
    quantity: 4,
    price: 1124.75,
    imageUrlLight: IMac,
    imageUrlDark: IMacDark,
  },
  {
    id: 5,
    name: "PlayStation 5",
    quantity: 1,
    price: 499,
    imageUrlLight: PS5,
    imageUrlDark: PS5Dark,
  },
  {
    id: 6,
    name: "Xbox Series X",
    quantity: 1,
    price: 499,
    imageUrlLight: XBox,
    imageUrlDark: XBoxDark,
  },
  {
    id: 7,
    name: "Apple Watch SE",
    quantity: 2,
    price: 399.5,
    imageUrlLight: Iwatch,
    imageUrlDark: IwatchDark,
  },
];

const details = [
  {
    label: "Original price",
    value: "$10,691.00",
    valueClass: "text-foreground",
  },
  {
    label: "Savings",
    value: "-$299.00",
    valueClass: "text-green-500",
  },
  {
    label: "Store Pickup",
    value: "$99",
    valueClass: "text-foreground",
  },
  {
    label: "Tax",
    value: "$799",
    valueClass: "text-foreground",
  },
];

const formSchema = z.object({
  voucher: z.string().optional(),
});

export const ShoppingCartModal = () => {
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
    <Dialog>
      <div className="m-5 flex w-screen justify-center">
        <DialogTrigger>
          <Button>Show shopping cart</Button>
        </DialogTrigger>
      </div>
      <DialogContent className="max-h-[90%] max-w-[626px] overflow-y-auto p-4">
        <DialogHeader>
          <DialogTitle className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-3">
            <Heading level={4} className="font-semibold">
              Shopping Cart
            </Heading>
          </DialogTitle>
        </DialogHeader>

        <Table className="w-full text-left text-base text-foreground md:table-fixed">
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index} className="border-b border-primary-200">
                <TableCell className="w-72 min-w-56 whitespace-nowrap py-4">
                  <Link
                    href="#"
                    className="flex items-center gap-4 font-medium hover:underline"
                  >
                    <div className="aspect-square size-10 shrink-0">
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
                    </div>
                    {item.name}
                  </Link>
                </TableCell>

                <TableCell className="p-4">
                  <Label
                    htmlFor={`counter-input-${item.id}`}
                    className="sr-only"
                  >
                    Choose quantity:
                  </Label>
                  <div className="flex items-center">
                    <Button className="inline-flex size-5 shrink-0 items-center justify-center rounded-md border border-primary-300 bg-primary-100 px-0 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-100 ">
                      <Minus className="size-2.5 text-foreground" />
                    </Button>
                    <input
                      type="text"
                      id={`counter-input-${item.id}`}
                      value={item.quantity}
                      readOnly
                      className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-foreground focus:outline-none focus:ring-0"
                    />
                    <Button className="inline-flex size-5 shrink-0 items-center justify-center rounded-md border border-primary-300 bg-primary-100 px-0 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-100">
                      <Plus className="size-2.5 text-foreground" />
                    </Button>
                  </div>
                </TableCell>

                <TableCell className="p-4 text-end text-base font-bold text-foreground">
                  ${item.price * item.quantity}
                </TableCell>

                <Table className="py-4 text-end">
                  <Button
                    variant={"link"}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    <Trash className="size-4" />
                    Remove
                  </Button>
                </Table>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="peer my-1 flex items-center md:mb-1">
          <Input
            type="checkbox"
            id="inline-checkbox"
            className="peer size-4 rounded border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
          />
          <Label
            htmlFor="inline-checkbox"
            className="ml-2 text-sm text-primary-500"
          >
            Add coupon
          </Label>
        </div>
        <Form {...form}>
          <form
            className=" mb-4 hidden peer-has-[:checked]:block md:mb-1"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex items-center gap-4">
              <div className="w-full max-w-xs">
                <Label htmlFor="voucher" className="sr-only">
                  Do you have a voucher or gift card?
                </Label>
                <FormField
                  control={form.control}
                  name="voucher"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="voucher"
                          className="block w-full max-w-xs space-y-0 rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                          placeholder="Enter your coupon code"
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
            </div>
          </form>
        </Form>
        <div className="my-4 rounded-lg border border-primary-100 bg-primary-50 p-4 sm:my-5">
          <Text className="text-xl font-semibold text-foreground">
            Order summary
          </Text>
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              {details.map((detail, index) => (
                <dl
                  key={index}
                  className="flex items-center justify-between gap-4"
                >
                  <dt className="text-base font-normal text-primary-500">
                    {detail.label}
                  </dt>
                  <dd className={`text-base font-medium ${detail.valueClass}`}>
                    {detail.value}
                  </dd>
                </dl>
              ))}
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-primary-200 pt-2 text-lg font-bold text-foreground">
              <dt>Total</dt>
              <dd>$11,888.00</dd>
            </dl>
          </div>
        </div>

        <DialogFooter>
          <div className="items-center space-x-0 space-y-4 border-t border-primary-200 pt-4 sm:flex sm:space-x-4 sm:space-y-0 md:pt-5">
            <Button className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:mt-0 sm:w-auto">
              Proceed to Checkout
            </Button>
            <Button className="w-full rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100 sm:w-auto">
              Continue Shopping
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
