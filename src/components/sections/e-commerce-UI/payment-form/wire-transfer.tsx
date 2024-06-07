import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown, Mail } from "lucide-react";
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
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Textarea } from "~/components/ui/textarea";
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

const AmountIcon = () => (
  <svg
    className="size-4 text-primary-500 "
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
      clipRule="evenodd"
    />
    <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
);

const USFlag = () => (
  <svg
    fill="none"
    aria-hidden="true"
    className="me-2 size-4"
    viewBox="0 0 20 15"
  >
    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
    <mask
      id="a"
      // style="mask-type:luminance"
      width="20"
      height="15"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#D02F44"
        fillRule="evenodd"
        d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933H19.6v-.933z"
        clipRule="evenodd"
      />
      <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
      <g filter="url(#filter0_d_343_121520)">
        <path
          fill="url(#paint0_linear_343_121520)"
          fillRule="evenodd"
          d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_343_121520"
        x1=".933"
        x2=".933"
        y1="1.433"
        y2="6.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#F0F0F0" />
      </linearGradient>
      <filter
        id="filter0_d_343_121520"
        width="6.533"
        height="5.667"
        x=".933"
        y="1.433"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_343_121520"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_343_121520"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const EURFlag = () => (
  <svg
    fill="none"
    aria-hidden="true"
    className="me-2 size-4"
    viewBox="0 0 20 15"
  >
    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
    <mask
      id="a"
      // style="mask-type:luminance"
      width="20"
      height="15"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
    </mask>
    <g mask="url(#a)">
      <path fill="#043CAE" d="M0 .5h19.6v14H0z" />
      <path
        fill="#FFD429"
        fillRule="evenodd"
        d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const CADFlag = () => (
  <svg
    fill="none"
    aria-hidden="true"
    className="me-2 size-4"
    viewBox="0 0 20 15"
  >
    <rect
      width="19.1"
      height="13.5"
      x=".25"
      y=".75"
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth=".5"
      rx="1.75"
    />
    <mask
      id="a"
      // style="mask-type:luminance"
      width="20"
      height="15"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <rect
        width="19.1"
        height="13.5"
        x=".25"
        y=".75"
        fill="#fff"
        stroke="#fff"
        strokeWidth=".5"
        rx="1.75"
      />
    </mask>
    <g fill="#FF3131" mask="url(#a)">
      <path d="M14 .5h5.6v14H14z" />
      <path
        fillRule="evenodd"
        d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const GBPFlag = () => (
  <svg
    fill="none"
    aria-hidden="true"
    className="me-2 size-4"
    viewBox="0 0 20 15"
  >
    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
    <mask
      id="a"
      // style="mask-type:luminance"
      width="20"
      height="15"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
    </mask>
    <g mask="url(#a)">
      <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z"
        clipRule="evenodd"
      />
      <path
        stroke="#DB1F35"
        strokeLinecap="round"
        strokeWidth=".667"
        d="M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093"
      />
      <path
        fill="#E6273E"
        fillRule="evenodd"
        d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const formSchema = z.object({
  beneficiary: z.string(),
  accountNo: z.string(),
  address: z.string(),
  postalCode: z.string(),
  amount: z.number(),
  bic: z.string(),
  paymentPurpose: z.string().optional(),
  fees: z.string().optional(),
  sendOn: z.date(),
  emailConfirmation: z.string().email().optional(),
  urgentInstant: z.string(),
});

export const PaymentFormWireTransfer = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [currency, setCurrency] = useState("USD");

  return (
    <MuiLayout.Section className="bg-background py-8 antialiased  md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <Heading level={3} className="mb-4 font-semibold  sm:text-2xl md:mb-8">
          Wire transfer instructions
        </Heading>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto">
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="beneficiary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> To* </FormLabel>
                      <FormControl>
                        <Input
                          id="beneficiary"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm  focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="mordernUiWeb LLC"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="accountNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Account Number* </FormLabel>
                      <FormControl>
                        <Input
                          id="accountNo"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm  focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="e.g FB00 1234 5678 91011"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Address (optional) </FormLabel>
                      <FormControl>
                        <Input
                          id="address"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm  focus:border-primary-500 focus:ring-primary-500    "
                          placeholder=""
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Postal code (optional) </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          id="postal_code"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm  focus:border-primary-500 focus:ring-primary-500    "
                          placeholder=""
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="postalCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Amount </FormLabel>
                      <FormControl>
                        <div className="flex items-center -space-x-1">
                          <div className="relative w-full">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                              <AmountIcon />
                            </div>
                            <Input
                              type="number"
                              id="amount"
                              className="z-20 block w-full rounded-s-lg border border-e-2 border-primary-300 border-e-primary-50 bg-primary-50 p-2.5 ps-10 text-sm  focus:border-primary-500 focus:ring-primary-500"
                              placeholder="199"
                              {...field}
                            />
                          </div>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                id="dropdown-currency-button"
                                data-dropdown-toggle="dropdown-currency"
                                className="z-10 inline-flex shrink-0 items-center rounded-e-lg rounded-s-none border border-primary-300 bg-primary-100 px-4 py-2.5 text-center text-sm font-medium text-foreground hover:bg-primary-200 focus:outline-none focus:ring-4 focus:ring-primary-100"
                                type="button"
                              >
                                <USFlag /> {currency}
                                <ChevronDown className="-me-0.5 ms-2 size-4" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-32 p-0">
                              <ul
                                className="p-2 text-sm font-medium text-primary-500"
                                aria-labelledby="dropdown-currency-button"
                              >
                                {[
                                  { currency: "USD", icon: <USFlag /> },
                                  { currency: "EUR", icon: <EURFlag /> },
                                  { currency: "CAD", icon: <CADFlag /> },
                                  { currency: "GBP", icon: <GBPFlag /> },
                                ].map((currencyOption) => (
                                  <li key={currencyOption.currency}>
                                    <div
                                      className="hover: inline-flex w-full rounded-md px-3 py-2 text-sm text-primary-500 hover:bg-primary-100"
                                      onClick={() =>
                                        setCurrency(currencyOption.currency)
                                      }
                                    >
                                      <div className="inline-flex items-center">
                                        {currencyOption.icon}
                                        {currencyOption.currency}
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="bic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> BIC/SWIFT </FormLabel>
                      <FormControl>
                        <Input
                          id="bic_swift"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm  focus:border-primary-500 focus:ring-primary-500    "
                          placeholder=""
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="paymentPurpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment purpose</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id="paymentPurpose"
                          rows={5}
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm  focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="e.g. Payment for professional consulting services provided"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="paymentPurpose"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fees (optional)</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          id="fees"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm  focus:border-primary-500 focus:ring-primary-500    "
                        >
                          <option>
                            SHA-Fees are splitted between sender and receipt
                          </option>
                          <option value="option-1">
                            Fees are paid by sender
                          </option>
                          <option value="option-2">
                            Fees are paid by beneficiary
                          </option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <FormField
                  control={form.control}
                  name="sendOn"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="mt-2"> Send on* </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "relative block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 pl-3 ps-9 text-left text-sm font-normal text-primary-900 focus:border-blue-500 focus:ring-blue-500",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              <div className="pointer-events-none absolute start-0 flex items-center ps-3.5">
                                {" "}
                                <CalendarIcon className="ml-auto size-4 text-foreground opacity-50 " />
                              </div>
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>12/06/2024</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2  sm:col-span-1">
                <FormField
                  control={form.control}
                  name="emailConfirmation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="emailConfirmation">
                        Email confirmation (optional)
                      </FormLabel>
                      <FormControl>
                        <div className="relative mb-6">
                          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                            <Mail className="size-4 text-primary-500" />
                          </div>
                          <Input
                            type="text"
                            id="emailConfirmationl"
                            className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 ps-10 text-sm  focus:border-primary-500 focus:ring-primary-500     "
                            placeholder="name@mordernUiWeb.com"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="my-4 flex items-center gap-4 md:mb-6">
              <FormField
                control={form.control}
                name="urgentInstant"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {" "}
                            Urgent (within 24 hours){" "}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="today" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {" "}
                            Instant (today){" "}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="flex w-full items-center justify-center">
              Continue
            </Button>
            <Text className="mt-6 text-center text-base font-normal text-primary-500  sm:mt-8 lg:text-left">
              Payment processed by{" "}
              <Link
                href="#"
                title=""
                className="font-medium text-primary-700 underline hover:no-underline "
              >
                Paddle
              </Link>{" "}
              for{" "}
              <Link
                href="#"
                title=""
                className="font-medium text-primary-700 underline hover:no-underline "
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
