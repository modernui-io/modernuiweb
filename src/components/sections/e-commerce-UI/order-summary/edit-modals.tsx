import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown, Info } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
//images
import WatchDark from "~/lib/assets/images/apple-watch-dark.svg";
import Watch from "~/lib/assets/images/apple-watch-light.svg";
import MacDark from "~/lib/assets/images/imac-front-dark.svg";
import Mac from "~/lib/assets/images/imac-front.svg";
import IPhoneDark from "~/lib/assets/images/iphone-dark.svg";
import IPhone from "~/lib/assets/images/iphone-light.svg";
import MasterCardDark from "~/lib/assets/images/mastercard-dark.svg";
import MasterCard from "~/lib/assets/images/mastercard.svg";
import PaypalDark from "~/lib/assets/images/paypal-dark.svg";
import Paypal from "~/lib/assets/images/paypal.svg";
import PS5Dark from "~/lib/assets/images/ps5-dark.svg";
import PS5 from "~/lib/assets/images/ps5-light.svg";
import VisaDark from "~/lib/assets/images/visa-dark.svg";
import Visa from "~/lib/assets/images/visa.svg";
import XBoxDark from "~/lib/assets/images/xbox-dark.svg";
import XBox from "~/lib/assets/images/xbox-light.svg";
import { cn } from "~/lib/utils";

// billinginformation modal start
const USFlag = () => (
  <svg
    fill="none"
    aria-hidden="true"
    className="me-2 size-4"
    viewBox="0 0 20 15"
  >
    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2"></rect>
    <mask
      id="a"
      // style="mask-type:luminance"
      width="20"
      height="15"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2"></rect>
    </mask>
    <g mask="url(#a)">
      <path
        fill="#D02F44"
        fillRule="evenodd"
        d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
        clipRule="evenodd"
      ></path>
      <path fill="#46467F" d="M0 .5h8.4v6.533H0z"></path>
      <g filter="url(#filter0_d_343_121520)">
        <path
          fill="url(#paint0_linear_343_121520)"
          fillRule="evenodd"
          d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
          clipRule="evenodd"
        ></path>
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
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#F0F0F0"></stop>
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
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="1"></feOffset>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_343_121520"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_343_121520"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

const UKFlag = () => (
  <svg className="me-2 size-4" fill="none" viewBox="0 0 20 15">
    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2"></rect>
    <mask
      id="a"
      // style="mask-type:luminance"
      width="20"
      height="15"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2"></rect>
    </mask>
    <g mask="url(#a)">
      <path fill="#0A17A7" d="M0 .5h19.6v14H0z"></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#DB1F35"
        strokeLinecap="round"
        strokeWidth=".667"
        d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"
      ></path>
      <path
        fill="#E6273E"
        fillRule="evenodd"
        d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
        clipRule="evenodd"
      ></path>
    </g>
  </svg>
);

const AusFlag = () => (
  <svg
    className="me-2 size-4"
    fill="none"
    viewBox="0 0 20 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2"></rect>
    <mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2"></rect>
    </mask>
    <g mask="url(#a)">
      <path fill="#0A17A7" d="M0 .5h19.6v14H0z"></path>
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth=".667"
        d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z"
      ></path>
      <path
        fill="url(#paint0_linear_374_135177)"
        fillRule="evenodd"
        d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="url(#paint1_linear_374_135177)"
        fillRule="evenodd"
        d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_374_135177"
        x1="0"
        x2="0"
        y1=".5"
        y2="7.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#F0F0F0"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_374_135177"
        x1="0"
        x2="0"
        y1=".5"
        y2="7.033"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF2E3B"></stop>
        <stop offset="1" stopColor="#FC0D1B"></stop>
      </linearGradient>
    </defs>
  </svg>
);

const GerFlag = () => (
  <svg className="me-2 size-4" fill="none" viewBox="0 0 20 15">
    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2"></rect>
    <mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2"></rect>
    </mask>
    <g mask="url(#a)">
      <path
        fill="#262626"
        fillRule="evenodd"
        d="M0 5.167h19.6V.5H0v4.667z"
        clipRule="evenodd"
      ></path>
      <g filter="url(#filter0_d_374_135180)">
        <path
          fill="#F01515"
          fillRule="evenodd"
          d="M0 9.833h19.6V5.167H0v4.666z"
          clipRule="evenodd"
        ></path>
      </g>
      <g filter="url(#filter1_d_374_135180)">
        <path
          fill="#FFD521"
          fillRule="evenodd"
          d="M0 14.5h19.6V9.833H0V14.5z"
          clipRule="evenodd"
        ></path>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_374_135180"
        width="19.6"
        height="4.667"
        x="0"
        y="5.167"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset></feOffset>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_374_135180"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_374_135180"
          result="shape"
        ></feBlend>
      </filter>
      <filter
        id="filter1_d_374_135180"
        width="19.6"
        height="4.667"
        x="0"
        y="9.833"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset></feOffset>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_374_135180"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_374_135180"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

const FraFlag = () => (
  <svg className="me-2 size-4" fill="none" viewBox="0 0 20 15">
    <rect
      width="19.1"
      height="13.5"
      x=".25"
      y=".75"
      fill="#fff"
      stroke="#F5F5F5"
      strokeWidth=".5"
      rx="1.75"
    ></rect>
    <mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
      <rect
        width="19.1"
        height="13.5"
        x=".25"
        y=".75"
        fill="#fff"
        stroke="#fff"
        strokeWidth=".5"
        rx="1.75"
      ></rect>
    </mask>
    <g mask="url(#a)">
      <path fill="#F44653" d="M13.067.5H19.6v14h-6.533z"></path>
      <path
        fill="#1035BB"
        fillRule="evenodd"
        d="M0 14.5h6.533V.5H0v14z"
        clipRule="evenodd"
      ></path>
    </g>
  </svg>
);

const billingInfoFormSchema = z
  .object({
    companyName: z.string().optional(),
    VATNumber: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    phoneNumber: z.string(),
    country: z.string(),
    city: z.string(),
    shippingAddress: z.string(),
    asCompany: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.asCompany) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "This field is Required",
      });
    }
  });

const BillingInfoDialog = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof billingInfoFormSchema>>({
    resolver: zodResolver(billingInfoFormSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof billingInfoFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const countries = [
    { name: "United States", code: "+1", FlagComponent: USFlag },
    { name: "United Kingdom", code: "+44", FlagComponent: UKFlag },
    { name: "Australia", code: "+61", FlagComponent: AusFlag },
    { name: "Germany", code: "+49", FlagComponent: GerFlag },
    { name: "France", code: "+33", FlagComponent: FraFlag },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="px-0">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Heading level={5} className=" font-semibold ">
            Billing Information
          </Heading>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="peer flex items-center gap-4 sm:col-span-2">
                <Checkbox id="company_address_billing_modal" />
                <Label
                  htmlFor="company_address_billing_modal"
                  className="text-sm font-medium text-primary-900 "
                >
                  Order as a company
                </Label>
              </div>

              <div
                className="hidden grid-cols-2 gap-4 peer-has-[input:checked]:grid sm:col-span-2"
                id="company-info-container-modal"
              >
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Company name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="company_name"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="ModernUI web LLC"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="VATNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>VAT number</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="vat_number"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="DE42313253"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> First Name*</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="first_name_billing_modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="Enter your first name"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name*</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="last_name_billing_modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="Enter your last name"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number*</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <Popover>
                            <PopoverTrigger>
                              <button
                                id="dropdown_phone_input__button_billing_modal"
                                data-dropdown-toggle="dropdown_phone_input_billing_modal"
                                className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-primary-300 bg-primary-100 px-4 py-2 text-center text-sm font-medium text-primary-900 hover:bg-primary-200 focus:outline-none focus:ring-4 focus:ring-primary-100"
                              >
                                <USFlag />
                                +1
                                <ChevronDown className="-me-0.5 ms-2 size-4" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="max-w-56 p-2">
                              <ul className="text-sm font-medium text-primary-700 ">
                                {countries.map((country, index) => (
                                  <li key={index}>
                                    <button
                                      type="button"
                                      className="inline-flex w-full rounded-md py-2 text-sm text-primary-500 hover:bg-primary-100 hover:text-primary-900 "
                                      role="menuitem"
                                    >
                                      <span className="inline-flex items-center text-xs">
                                        <country.FlagComponent />
                                        {country.name} ({country.code})
                                      </span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </PopoverContent>
                          </Popover>
                          <div className="relative w-full">
                            <Input
                              type="text"
                              id="phone-input"
                              className="z-20 block w-full rounded-e-lg rounded-s-none border border-s-0 border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500 "
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              placeholder="123-456-7890"
                              {...field}
                            />
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel> Country*</FormLabel>
                      <FormControl className="w-full">
                        <select
                          {...field}
                          id="select_country_input_billing_modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                        >
                          {[
                            {
                              name: "United States",
                              value: "US",
                              selected: true,
                            },
                            { name: "Australia", value: "AS" },
                            { name: "France", value: "FR" },
                            { name: "Spain", value: "ES" },
                            { name: "United Kingdom", value: "UK" },
                          ].map((country, index) => (
                            <option
                              key={index}
                              value={country.value}
                              selected={!!country.selected}
                            >
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>City*</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          id="select_city_input_billing_modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                        >
                          {[
                            {
                              name: "San Francisco",
                              value: "SF",
                              selected: true,
                            },
                            { name: "New York", value: "NY" },
                            { name: "Los Angeles", value: "LA" },
                            { name: "Chicago", value: "CH" },
                            { name: "Houston", value: "HU" },
                          ].map((city, index) => (
                            <option
                              key={index}
                              value={city.value}
                              selected={!!city.selected}
                            >
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="shippingAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Shipping Address*</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id="address_billing_modal"
                          rows={4}
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="Enter here your address"
                        ></Textarea>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="flex justify-start border-t border-primary-200 pt-4  md:pt-5">
              <Button>Save information</Button>
              <DialogClose>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
// billing information modal end

// delivery information modal start

const deliveryInfoFormSchema = z
  .object({
    companyName: z.string().optional(),
    VATNumber: z.string().optional(),
    deliveryMethod: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phoneNumber: z.string(),
    country: z.string(),
    city: z.string(),
    shippingAddress: z.string(),
    asCompany: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.asCompany) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "This field is Required",
      });
    }
  });

const DeliveryInfoDialog = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof deliveryInfoFormSchema>>({
    resolver: zodResolver(deliveryInfoFormSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof deliveryInfoFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const countries = [
    { name: "United States", code: "+1", FlagComponent: USFlag },
    { name: "United Kingdom", code: "+44", FlagComponent: UKFlag },
    { name: "Australia", code: "+61", FlagComponent: AusFlag },
    { name: "Germany", code: "+49", FlagComponent: GerFlag },
    { name: "France", code: "+33", FlagComponent: FraFlag },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="px-0">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Heading level={5} className="font-semibold">
            Delivery Information
          </Heading>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="deliveryMethod"
                  render={({ field }) => (
                    <FormItem>
                      <div className="mb-2 flex items-center gap-1">
                        <Label
                          htmlFor="saved-address-modal"
                          className="block text-sm font-medium text-primary-900 "
                        >
                          Delivery Methods
                        </Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="size-4 text-primary-400 hover:text-primary-900" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Choose the preferred way of delivery
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <select
                          {...field}
                          id="saved-address-modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                        >
                          <option selected value="method-2">
                            DHL Express - $15
                          </option>
                          <option value="method-2">
                            Royal Post Office - $6
                          </option>
                          <option value="method-3">USP Standard - $20</option>
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> First Name*</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="first_name_billing_modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="Enter your first name"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name*</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="last_name_billing_modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="Enter your last name"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number*</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <Popover>
                            <PopoverTrigger>
                              <button
                                id="dropdown_phone_input__button_billing_modal"
                                data-dropdown-toggle="dropdown_phone_input_billing_modal"
                                className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-primary-300 bg-primary-100 px-4 py-2 text-center text-sm font-medium text-primary-900 hover:bg-primary-200 focus:outline-none focus:ring-4 focus:ring-primary-100"
                              >
                                <USFlag />
                                +1
                                <ChevronDown className="-me-0.5 ms-2 size-4" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="max-w-56 p-2">
                              <ul className="text-sm font-medium text-primary-700 ">
                                {countries.map((country, index) => (
                                  <li key={index}>
                                    <button
                                      type="button"
                                      className="inline-flex w-full rounded-md py-2 text-sm text-primary-500 hover:bg-primary-100 hover:text-primary-900 "
                                      role="menuitem"
                                    >
                                      <span className="inline-flex items-center text-xs">
                                        <country.FlagComponent />
                                        {country.name} ({country.code})
                                      </span>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </PopoverContent>
                          </Popover>
                          <div className="relative w-full">
                            <Input
                              type="text"
                              id="phone-input"
                              className="z-20 block w-full rounded-e-lg rounded-s-none border border-s-0 border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500 "
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              placeholder="123-456-7890"
                              {...field}
                            />
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel> Country*</FormLabel>
                      <FormControl className="w-full">
                        <select
                          {...field}
                          id="select_country_input_billing_modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                        >
                          {[
                            {
                              name: "United States",
                              value: "US",
                              selected: true,
                            },
                            { name: "Australia", value: "AS" },
                            { name: "France", value: "FR" },
                            { name: "Spain", value: "ES" },
                            { name: "United Kingdom", value: "UK" },
                          ].map((country, index) => (
                            <option
                              key={index}
                              value={country.value}
                              selected={!!country.selected}
                            >
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>City*</FormLabel>
                      <FormControl>
                        <select
                          {...field}
                          id="select_city_input_billing_modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                        >
                          {[
                            {
                              name: "San Francisco",
                              value: "SF",
                              selected: true,
                            },
                            { name: "New York", value: "NY" },
                            { name: "Los Angeles", value: "LA" },
                            { name: "Chicago", value: "CH" },
                            { name: "Houston", value: "HU" },
                          ].map((city, index) => (
                            <option
                              key={index}
                              value={city.value}
                              selected={!!city.selected}
                            >
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="shippingAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Shipping Address*</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id="address_billing_modal"
                          rows={4}
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500    "
                          placeholder="Enter here your address"
                        ></Textarea>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="flex justify-start border-t border-primary-200 pt-4  md:pt-5">
              <Button>Save information</Button>
              <DialogClose>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
// delivery information modal end

// payment methods modal start

const paymentMethodFormSchema = z
  .object({
    newMethod: z.boolean(),
    cardOrPaypal: z.string(),
    fullName: z.string().optional(),
    cardNumber: z.string().optional(),
    cardExpiration: z.date().optional(),
    securityCode: z.string().optional(),
    payementMethod: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.newMethod) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "This field is Required",
      });
    }
  });

const PaymentMethodDialog = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof paymentMethodFormSchema>>({
    resolver: zodResolver(paymentMethodFormSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof paymentMethodFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"} className="px-0">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Heading level={5} className="font-semibold">
            Payment Methods
          </Heading>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 md:p-5">
            <div className="mb-5">
              <div className="space-y-4">
                <RadioGroup>
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
                        <div className="mt-4 flex items-center gap-2">
                          <button
                            type="button"
                            className="text-sm font-medium text-primary-500 hover:text-primary-900"
                          >
                            Delete
                          </button>
                          <div className="h-3 w-px shrink-0 bg-primary-200 "></div>
                          <button
                            type="button"
                            className="text-sm font-medium text-primary-500 hover:text-primary-900"
                          >
                            Edit
                          </button>
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
                <div className="peer flex items-center gap-4 sm:col-span-2">
                  <Checkbox
                    id="payment_method_new_modal"
                    value=""
                    className="size-4 rounded border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500   "
                  />
                  <Label
                    htmlFor="payment_method_new_modal"
                    className="ms-2 text-sm font-medium text-primary-900 "
                  >
                    {" "}
                    Add new payment method{" "}
                  </Label>
                </div>

                <div className="hidden peer-has-[input:checked]:block">
                  <FormField
                    control={form.control}
                    name="cardOrPaypal"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup className="mb-5 flex items-center gap-4 sm:col-span-2">
                            <div className="flex items-center">
                              <RadioGroupItem
                                value="creditCard"
                                id="credit-card-payment-modal"
                                className="size-4 border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500 "
                              />
                              <Label
                                htmlFor="credit-card-payment-modal"
                                className="ms-2 text-sm font-medium text-primary-900 "
                              >
                                {" "}
                                Credit Card{" "}
                              </Label>
                            </div>
                            <div className="flex items-center">
                              <RadioGroupItem
                                id="paypal-payment-modal"
                                value="paypal"
                                className="size-4 border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500 "
                              />
                              <Label
                                htmlFor="paypal-payment-modal"
                                className="ms-2 text-sm font-medium text-primary-900 "
                              >
                                {" "}
                                PayPal{" "}
                              </Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 md:grid-cols-4">
                    <div className="relative col-span-2">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel> Full name*</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                id="card-name"
                                className="rk:focus:ring-blue-500 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 pe-10 text-sm text-primary-900 focus:border-blue-500  focus:ring-blue-500"
                                placeholder="Name on card"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="relative col-span-2">
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel> Card number*</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                id="card-number-input"
                                className="rk:focus:ring-blue-500 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 pe-10 text-sm text-primary-900 focus:border-blue-500  focus:ring-blue-500"
                                placeholder="xxxx xxxx xxxx xxxx"
                                pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="my-4 grid grid-cols-5 gap-4">
                    <div className="col-span-3">
                      <FormField
                        control={form.control}
                        name="cardExpiration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card expiration*</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-[240px] bg-primary-50 pl-3 text-left font-normal",
                                          !field.value &&
                                            "text-muted-foreground",
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "MM/dd")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto size-4 opacity-50" />
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
                                </Popover>{" "}
                              </div>
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
                            <FormLabel>Security code*</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                id="cvv-input"
                                className="rk:focus:ring-blue-500 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="xxx"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter className="border-t border-primary-200 pt-4  md:pt-5">
              <Button>Save information</Button>

              <DialogClose>
                <Button variant={"outline"}>Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export const OrderSummaryWithEditModals = () => {
  const products = [
    {
      id: 1,
      name: 'PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, macOS Sonoma, Blue, Keyboard layout INT',
      quantity: 1,
      price: 1499,
      imageUrl: Mac,
      darkImageUrl: MacDark,
    },
    {
      id: 2,
      name: "Restored Apple Watch Series 8 (GPS) 41mm Midnight Aluminum Case with Midnight Sport Band",
      quantity: 2,
      price: 598,
      imageUrl: Watch,
      darkImageUrl: WatchDark,
    },
    {
      id: 3,
      name: "Sony Playstation 5 Digital Edition Console with Extra Blue Controller, White PULSE 3D Headset and Surge Dual Controller, 2 games",
      quantity: 1,
      price: 799,
      imageUrl: PS5,
      darkImageUrl: PS5Dark,
    },
    {
      id: 4,
      name: "Xbox Series X Diablo IV Bundle + Xbox Wireless Controller Carbon Black",
      quantity: 1,
      price: 699,
      imageUrl: XBox,
      darkImageUrl: XBoxDark,
    },
    {
      id: 5,
      name: "APPLE iPhone 15 5G phone, 256GB, Gold",
      quantity: 3,
      price: 2997,
      imageUrl: IPhone,
      darkImageUrl: IPhoneDark,
    },
  ];

  const orderSummaryDetails = [
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
  ];

  return (
    <>
      <section className="bg-background py-8 antialiased md:py-16">
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <Heading level={5} className="font-semibold sm:text-2xl">
            Order summary
          </Heading>
          <div className="mt-8 space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
              <div className="space-y-4 rounded-lg border border-primary-200 bg-background p-6 shadow-sm ">
                <Heading level={5} className="font-semibold">
                  Billing information
                </Heading>
                <dl>
                  <dt className="text-base font-medium text-primary-900 ">
                    Company
                  </dt>
                  <dd className="mt-1 text-base font-normal text-primary-500">
                    Bergside LLC, VAT 123456, (+1) 234 567 890
                  </dd>
                </dl>
                <BillingInfoDialog />
              </div>

              <div className="space-y-4 rounded-lg border border-primary-200 bg-background p-6 shadow-sm ">
                <Heading level={5} className="text-lg font-semibold">
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
                <DeliveryInfoDialog />
              </div>

              <div className="space-y-4 rounded-lg border border-primary-200 bg-background p-6 shadow-sm ">
                <Heading level={5} className="text-lg font-semibold">
                  Payment method
                </Heading>
                <Text className="text-base font-medium text-primary-900 ">
                  Online with credit card
                </Text>
                <PaymentMethodDialog />
              </div>
            </div>

            <div className="divide-y divide-primary-200 rounded-lg border border-primary-200 bg-background shadow-sm  ">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-wrap items-center space-y-4 p-6 sm:gap-6 sm:space-y-0 md:justify-between"
                >
                  <div className="w-full items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 md:max-w-md lg:max-w-lg">
                    <Link
                      href="#"
                      className="block aspect-square w-20 shrink-0"
                    >
                      <Image
                        className="size-full dark:hidden"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                      <Image
                        className="hidden size-full dark:block"
                        src={product.darkImageUrl}
                        alt={product.name}
                      />
                    </Link>
                    <div className="w-full md:max-w-sm lg:max-w-md">
                      <Link
                        href="#"
                        className="font-medium text-primary-900 hover:underline "
                      >
                        {product.name}
                      </Link>
                    </div>
                  </div>
                  <div className="w-8 shrink-0">
                    <Text className="text-base font-normal text-primary-900 ">
                      x{product.quantity}
                    </Text>
                  </div>
                  <div className="md:w-24 md:text-right">
                    <Text className="text-base font-bold text-primary-900 ">
                      ${product.price}
                    </Text>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-lg border border-primary-200 bg-background p-6 shadow-sm ">
              <div className="space-y-2">
                {orderSummaryDetails.map((detail, index) => (
                  <dl
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <dt className="text-primary-500">{detail.label}</dt>
                    <dd
                      className={`text-base font-medium ${detail.valueClass}`}
                    >
                      {detail.value}
                    </dd>
                  </dl>
                ))}
              </div>
              <dl className="flex items-center justify-between gap-4 border-t border-primary-200 pt-2 ">
                <dt className="text-lg font-bold text-primary-900 ">Total</dt>
                <dd className="text-lg font-bold text-primary-900 ">
                  $7,191.00
                </dd>
              </dl>
            </div>

            <div className="flex items-start sm:items-center">
              <input
                id="terms-checkbox"
                type="checkbox"
                value=""
                className="size-4 rounded border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500 "
              />
              <label
                htmlFor="terms-checkbox"
                className="ms-2 text-sm font-medium text-primary-900 "
              >
                I agree with the{" "}
                <Link
                  href="#"
                  title=""
                  className="text-primary-700 underline hover:no-underline"
                >
                  Terms and Conditions
                </Link>{" "}
                of use of the mordernUiWeb marketplace
              </label>
            </div>

            <div className="gap-4 sm:flex sm:items-center">
              <button className="w-full rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 sm:w-auto">
                Return to Shopping
              </button>
              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  sm:mt-0 sm:w-auto"
              >
                Send the order
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
