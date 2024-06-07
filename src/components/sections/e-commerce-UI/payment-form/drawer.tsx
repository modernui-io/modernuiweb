import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  ArrowRight,
  BadgePercent,
  CalendarIcon,
  Info,
  Truck,
} from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import MasterCardDark from "~/lib/assets/images/mastercard-dark.svg";
import MasterCard from "~/lib/assets/images/mastercard.svg";
import PaypalDark from "~/lib/assets/images/paypal-dark.svg";
import Paypal from "~/lib/assets/images/paypal.svg";
import VisaDark from "~/lib/assets/images/visa-dark.svg";
import Visa from "~/lib/assets/images/visa.svg";
import { cn } from "~/lib/utils";

const formSchema = z.object({
  fullName: z.string(),
  cardNumber: z.string(),
  cardExpiration: z.date(),
  cvv: z.string(),
});

export const PaymentFormDrawer = () => {
  const paymentMethods = [
    {
      id: "visa",
      label: "Visa ending in 7658",
      expiry: "Expiry 10/2024",
      logo: {
        light: Visa,
        dark: VisaDark,
      },
    },
    {
      id: "mastercard",
      label: "Mastercard ending in 8429",
      expiry: "Expiry 04/2026",
      logo: {
        light: MasterCard,
        dark: MasterCardDark,
      },
    },
    {
      id: "paypal",
      label: "Paypal account",
      expiry: null,
      logo: {
        light: Paypal,
        dark: PaypalDark,
      },
    },
  ];

  const pricingDetails = [
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
    {
      label: "Total",
      value: "$7,191.00",
      valueClass: "text-primary-900 ",
      isBold: true,
    },
  ];

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      cardNumber: "",
      cvv: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="m-5 text-center">
          <Button>Show drawer payment</Button>
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="max-w-[400px] overflow-y-auto p-4 sm:max-w-[470px]"
      >
        <SheetHeader className="flex-1">
          <SheetTitle className="text-base font-semibold uppercase leading-none text-primary-500">
            PAYMENT DETAILS
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4 rounded-lg border border-primary-100 bg-primary-50 p-6">
          <div className="space-y-2">
            {pricingDetails.slice(0, 4).map((detail, index) => (
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

          <dl className="flex items-center justify-between gap-4 border-t border-primary-200 pt-2">
            <dt className="text-base font-bold text-primary-900 ">Total</dt>
            <dd className="text-base font-bold text-primary-900 ">$7,191.00</dd>
          </dl>
        </div>

        <div className="mt-6 sm:mt-8">
          <Form {...form}>
            <form
              action="#"
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 lg:max-w-xl"
            >
              <RadioGroup className="space-y-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between rounded-lg border border-primary-200 bg-primary-50 p-4 ps-4  "
                  >
                    <div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <RadioGroupItem
                            id={method.id}
                            aria-describedby={`${method.id}-text`}
                            value={method.id}
                            className="size-4 border-primary-300 bg-background text-primary-600 focus:ring-2 focus:ring-primary-500 "
                          />
                        </div>
                        <div className="ms-4 text-sm">
                          <Label
                            htmlFor={method.id}
                            className="font-medium text-primary-900 "
                          >
                            {method.label}
                          </Label>
                          {method.expiry && (
                            <Text
                              id={`${method.id}-text`}
                              className="text-xs font-normal text-primary-500"
                            >
                              {method.expiry}
                            </Text>
                          )}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <Button
                          variant={"link"}
                          className="px-0 text-sm font-medium text-primary-500 hover:text-primary-900"
                        >
                          Delete
                        </Button>
                        <div className="h-3 w-px shrink-0 bg-primary-200 "></div>
                        <Button
                          variant={"link"}
                          className="px-0 text-sm font-medium text-primary-500 hover:text-primary-900"
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Image
                        className="h-8 w-auto dark:hidden"
                        src={method.logo.light}
                        alt={`${method.label} logo`}
                      />
                      <Image
                        className="hidden h-8 w-auto dark:flex"
                        src={method.logo.dark}
                        alt={`${method.label} logo`}
                      />
                    </div>
                  </div>
                ))}
              </RadioGroup>

              <Text className=" text-sm text-primary-500">
                Add a new payment method
              </Text>

              <div className="mb-2 grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="full_name">
                          {" "}
                          Full name (as displayed on card)*{" "}
                        </FormLabel>

                        <FormControl>
                          <Input
                            type="text"
                            id="full_name"
                            className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500 "
                            placeholder="Bonnie Green"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="card-number-Input">
                          {" "}
                          Card number*{" "}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="card-number-Input"
                            className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 pe-10 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500  "
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                            pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <div className="relative">
                    <FormField
                      control={form.control}
                      name="cardExpiration"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Card expiration* </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 pl-3 ps-9 text-left text-sm font-normal text-primary-900 focus:border-blue-500 focus:ring-blue-500",
                                    !field.value && "text-muted-foreground",
                                  )}
                                >
                                  <div className="pointer-events-none absolute start-0 flex items-center ps-3.5">
                                    {" "}
                                    <CalendarIcon className="ml-auto size-4 opacity-50" />
                                  </div>
                                  {field.value ? (
                                    format(field.value, "MM/dd")
                                  ) : (
                                    <span>12/23</span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mb-1 flex">
                          {" "}
                          CVV*{" "}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info className="ml-1 size-3 text-primary-400 hover:text-primary-900" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="rounded-lg bg-primary-900 text-xs font-medium text-background shadow-sm ">
                                  The last 3 digits on back of card
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            id="cvv-Input"
                            aria-describedby="helper-text-explanation"
                            className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500 "
                            placeholder="•••"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mt-6 gap-4 space-y-4 sm:flex sm:items-center sm:justify-center sm:space-y-0">
                <Button type="submit" className="flex w-full">
                  Pay now
                </Button>
                <Button variant={"outline"} className="block w-full">
                  Continue Shopping
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
