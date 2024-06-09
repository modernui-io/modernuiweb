import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, CircleCheck, Info } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import * as MuiLayout from "~/components/layouts";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import GoogleSymbol from "~/lib/assets/images/google-symbol.svg";
import PaypalSymbol from "~/lib/assets/images/paypal-symbol.svg";
import { cn } from "~/lib/utils";

const formSchema = z.object({
  fullName: z.string(),
  cardNumber: z.string(),
  cardExpiration: z.date(),
  cvv: z.string(),
});

export const PaymentFormStepper = () => {
  const steps = [
    { label: "Cart" },
    { label: "Checkout" },
    { label: "Order summary" },
    { label: "Payment" },
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
    <MuiLayout.Section className=" bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            action="#"
            className="mx-auto max-w-3xl space-y-8"
          >
            <ol className="flex w-full items-center text-center text-sm font-medium text-primary-500 sm:text-base">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-center text-primary-600 after:mx-4 after:hidden after:h-1 after:w-full after:border-b after:border-primary-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-4"
                >
                  <span className="flex items-center whitespace-nowrap after:mx-2 after:text-primary-200 after:content-['/']  sm:after:hidden">
                    <CircleCheck className="me-2.5 size-4 sm:size-4" />
                    {step.label}
                  </span>
                </li>
              ))}
            </ol>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <Heading level={"sub"} className="font-normal text-primary-500">
                  Pay with your Credit Card
                </Heading>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
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

                  <div className="col-span-2 sm:col-span-1">
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
              </div>

              <div className="flex items-center">
                <div className="h-px w-full bg-primary-200 "></div>
                <div className="px-5 text-center text-primary-500">or</div>
                <div className="h-px w-full bg-primary-200 "></div>
              </div>

              <div className="flex items-center gap-4">
                <Button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                  <Image className="size-4" src={GoogleSymbol} alt="" />
                  Google Pay
                </Button>

                <Button className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-200">
                  <Image className="size-4" src={PaypalSymbol} alt="" />
                  Paypal
                </Button>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-primary-100 bg-primary-50 p-6 shadow-sm ">
              <div className="space-y-2">
                {pricingDetails.slice(0, 4).map((detail, index) => (
                  <dl
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <dt className="text-base font-normal text-primary-500">
                      {detail.label}
                    </dt>
                    <dd
                      className={`text-base font-medium ${detail.valueClass}`}
                    >
                      {detail.value}
                    </dd>
                  </dl>
                ))}
              </div>

              <dl className="flex items-center justify-between gap-4 border-t border-primary-200 pt-2">
                <dt className="text-base font-bold text-primary-900 ">Total</dt>
                <dd className="text-base font-bold text-primary-900 ">
                  $7,191.00
                </dd>
              </dl>

              <Button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 "
              >
                Pay now
              </Button>
            </div>

            <Text className="mt-6 text-center text-base font-normal text-primary-500 sm:mt-8 lg:text-left">
              Payment processed by{" "}
              <Link
                href="#"
                title=""
                className="font-medium text-primary-700 underline hover:no-underline"
              >
                Paddle
              </Link>{" "}
              for{" "}
              <Link
                href="#"
                title=""
                className="font-medium text-primary-700 underline hover:no-underline"
              >
                mordernUiWeb LLC
              </Link>{" "}
              - United States Of America
            </Text>
          </form>
        </Form>
      </div>
    </MuiLayout.Section>
  );
};
