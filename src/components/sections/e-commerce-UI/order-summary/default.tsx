import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Info } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Heading } from "~/components/ui/custom/headings";
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
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
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

const USFlag = () => (
  <svg
    fill="none"
    aria-hidden="true"
    className="me-2 size-4"
    viewBox="0 0 20 15"
  >
    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2"></rect>
    <mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
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
    <mask id="a" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
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
    address: z.string(),
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
        <DialogHeader className="border-b pb-4">
          <Heading level={5} className="font-semibold">
            Billing Information
          </Heading>
        </DialogHeader>
        <Form {...form}>
          <form>
            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="peer flex items-center gap-4 sm:col-span-2">
                <Checkbox id="company_address_billing_modal" />
                <Label
                  htmlFor="company_address_billing_modal"
                  className="text-sm font-medium"
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
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
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
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
                          placeholder="DE42313253"
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
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <div className="mb-2 flex items-center gap-1">
                        <Label
                          htmlFor="saved-address-modal"
                          className="block text-sm font-medium"
                        >
                          Saved Address
                        </Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="size-4 text-primary-400 hover:text-primary-900" />
                            </TooltipTrigger>
                            <TooltipContent>
                              Choose one of your saved addresses
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <select
                          {...field}
                          id="saved-address-modal"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
                        >
                          <option selected>
                            Choose one of your saved address
                          </option>
                          <option value="address-1">
                            San Francisco, California, United States, 3454,
                            Scott Street
                          </option>
                          <option value="address-2">
                            New York, United States, Broadway 10012
                          </option>
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
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
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
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
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
                              <ul className="text-sm font-medium text-primary-700">
                                {countries.map((country, index) => (
                                  <li key={index}>
                                    <button
                                      type="button"
                                      className="inline-flex w-full rounded-md py-2 text-sm text-primary-500 hover:bg-primary-100 hover:text-primary-900"
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
                              className="z-20 block w-full rounded-e-lg rounded-s-none border border-s-0 border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
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
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
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
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
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
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-primary-900 focus:border-primary-500 focus:ring-primary-500"
                          placeholder="Enter here your address"
                        ></Textarea>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="flex border-t border-primary-200 pt-4 md:justify-start md:pt-5">
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

const billingFormSchema = z.object({
  termsAccepted: z.string({
    message: "Please accept the terms and conditions",
  }),
});

export const OrderSummaryDefault = () => {
  const orderItems = [
    {
      id: 1,
      name: "Apple iMac 27”",
      quantity: 1,
      price: "$1,499",
      lightImg: Mac,
      darkImg: MacDark,
    },
    {
      id: 2,
      name: "Apple iPhone 14",
      quantity: 2,
      price: "$1,998",
      lightImg: IPhone,
      darkImg: IPhoneDark,
    },
    {
      id: 3,
      name: "Apple iPad Air",
      quantity: 1,
      price: "$898",
      lightImg: IPad,
      darkImg: IPadDark,
    },
    {
      id: 4,
      name: "Xbox Series X",
      quantity: 4,
      price: "$4,499",
      lightImg: XBox,
      darkImg: XBoxDark,
    },
    {
      id: 5,
      name: "PlayStation 5",
      quantity: 1,
      price: "$499",
      lightImg: PS5,
      darkImg: PS5Dark,
    },
    {
      id: 6,
      name: 'MacBook Pro 16"',
      quantity: 1,
      price: "$499",
      lightImg: MacBook,
      darkImg: MacBookDark,
    },
    {
      id: 7,
      name: "Apple Watch SE",
      quantity: 2,
      price: "$799",
      lightImg: Watch,
      darkImg: WatchDark,
    },
  ];

  const data = [
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

  // 1. Define your form.
  const form = useForm<z.infer<typeof billingFormSchema>>({
    resolver: zodResolver(billingFormSchema),
    defaultValues: {
      termsAccepted: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof billingFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background py-8 antialiased">
      <Dialog>
        <Form {...form}>
          <form
            className="mx-auto max-w-screen-xl px-4 2xl:px-0"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="mx-auto max-w-3xl">
              <Heading level={4} className="font-bold sm:text-2xl">
                Order summary
              </Heading>
              <div className="mt-6 space-y-4 border-y border-primary-200 py-8 sm:mt-8">
                <Heading level={5} className="font-semibold">
                  Billing & Delivery information
                </Heading>
                <dl>
                  <dt className="text-md font-medium text-primary-900">
                    Individual
                  </dt>
                  <dd className="mt-1 text-md font-normal text-primary-500">
                    Bonnie Green - +1 234 567 890, San Francisco, California,
                    United States, 3454, Scott Street
                  </dd>
                </dl>
                <BillingInfoDialog />
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="relative overflow-x-auto border-b border-primary-200">
                  <Table className="table w-full max-w-full text-left font-medium md:table-fixed">
                    <TableBody className="divide-y divide-primary-200 ">
                      {orderItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="whitespace-nowrap py-4 md:w-[384px]">
                            <div className="flex items-center gap-4">
                              <Link
                                href="#"
                                className="flex aspect-square size-10 shrink-0 items-center"
                              >
                                <Image
                                  className="h-auto max-h-full w-full dark:hidden"
                                  src={item.lightImg}
                                  alt={`${item.name} image`}
                                />
                                <Image
                                  className="hidden h-auto max-h-full w-full dark:block"
                                  src={item.darkImg}
                                  alt={`${item.name} image`}
                                />
                              </Link>
                              <Link href="#" className="hover:underline">
                                {item.name}
                              </Link>
                            </div>
                          </TableCell>
                          <TableCell className="p-4 text-base font-normal text-primary-900">
                            x{item.quantity}
                          </TableCell>
                          <TableCell className="p-4 text-right text-base font-bold text-primary-900">
                            {item.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-4 space-y-6">
                  <Heading level={5} className="font-semibold text-primary-900">
                    Order summary
                  </Heading>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {data.map((item, index) => (
                        <dl
                          key={index}
                          className="flex items-center justify-between gap-4"
                        >
                          <dt className="text-primary-500 ">{item.label}</dt>
                          <dd
                            className={`text-base font-medium ${item.valueClass}`}
                          >
                            {item.value}
                          </dd>
                        </dl>
                      ))}
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-primary-200 pt-2">
                      <dt className="text-lg font-bold text-primary-900 ">
                        Total
                      </dt>
                      <dd className="text-lg font-bold text-primary-900 ">
                        $7,191.00
                      </dd>
                    </dl>
                  </div>

                  <div className="flex items-start sm:items-center">
                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Checkbox
                              {...field}
                              id="terms-checkbox-2"
                              className="size-4 rounded border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                            />
                          </FormControl>
                          <Label
                            htmlFor="terms-checkbox-2"
                            className="ms-2 text-sm font-medium text-primary-900 "
                          >
                            I agree with the{" "}
                            <Link
                              href="#"
                              className="text-primary-700 underline hover:no-underline "
                            >
                              Terms and Conditions
                            </Link>{" "}
                            of use of the mordernUiWeb marketplace
                          </Label>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="gap-4 sm:flex sm:items-center">
                    <Button
                      type="button"
                      variant={"outline"}
                      className="w-full"
                    >
                      Return to Shopping
                    </Button>
                    <Button type="submit" className="w-full">
                      Send the order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </Dialog>
    </MuiLayout.Section>
  );
};
