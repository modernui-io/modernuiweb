import React, { useState } from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ClipboardList } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const formSchema = z.object({
  amount: z.string(),
  currency: z.string(),
  beneficiary: z.string(),
  accountNumber: z.string(),
  bic: z.string(),
  bankAddress: z.string(),
});

type PaymentDetailId =
  | "currency"
  | "beneficiary"
  | "accountNumber"
  | "bic"
  | "bankAddress"
  | "amount";

interface PaymentDetail {
  id: PaymentDetailId;
  label: string;
  value: string;
}

export const PaymentFormClipboard = () => {
  const paymentDetails: PaymentDetail[] = [
    { id: "currency", label: "Currency", value: "USD" },
    { id: "beneficiary", label: "Beneficiary", value: "mordernUiWeb LLC" },
    {
      id: "accountNumber",
      label: "Account number",
      value: "FB00 1234 5678 91011",
    },
    { id: "bic", label: "SWIFT/BIC code", value: "FBU345SS" },
    {
      id: "bankAddress",
      label: "Bank address",
      value: "62 Miles Drive St, Newark, NJ 07103, California",
    },
  ];

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "$149",
      currency: "USD",
      beneficiary: "mordernUiWeb LLC",
      accountNumber: "FB00 1234 5678 91011",
      bic: "FBU345SS",
      bankAddress: "62 Miles Drive St, Newark, NJ 07103, California",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const fieldNames = [
    "currency",
    "beneficiary",
    "accountNumber",
    "bic",
    "bankAddress",
    "amount",
  ] as const;

  const [copied, setCopied] = useState({ amount: "" });

  const handleCopy = (id: string, value: string) => {
    void navigator.clipboard.writeText(value);
    setCopied({ ...copied, [id]: true });
    setTimeout(() => setCopied({ ...copied, [id]: false }), 2000);
  };

  return (
    <section className="bg-background py-8 antialiased  md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <Heading
          level={3}
          className="mb-4 font-semibold tracking-normal md:mb-8"
        >
          Payment details
        </Heading>
        <Form {...form}>
          <form className="mx-auto space-y-6">
            <div className="space-y-4">
              <div className="items-end sm:flex sm:space-x-4">
                <div className="mb-4 w-full sm:mb-0 sm:w-64">
                  <label
                    htmlFor="amount"
                    className="mb-2 block text-sm font-medium"
                  >
                    Amount due
                  </label>
                  <div className="relative">
                    <input
                      id="amount"
                      type="text"
                      className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm font-medium text-primary-900 focus:border-primary-500 focus:ring-primary-500"
                      value="$149"
                      disabled
                      readOnly
                    />
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={(e) => {
                              handleCopy("amount", "");
                              e.stopPropagation();
                              e.preventDefault();
                            }}
                            className="absolute end-2 top-1/2 -translate-y-1/2 bg-transparent px-1 shadow-none hover:bg-primary-300"
                          >
                            {copied.amount ? (
                              <Check className="size-4 text-primary-700" />
                            ) : (
                              <ClipboardList className="size-4 text-primary-500" />
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <Text>
                            {copied.amount ? "Copied!" : "Copy to clipboard"}
                          </Text>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <div className="flex w-full items-center space-x-4">
                  <Button className="flex w-full items-center justify-center rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100">
                    <svg
                      className="-ms-2 me-2 size-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m2.665 9H6.647A1.647 1.647 0 0 1 5 15.353v-1.706A1.647 1.647 0 0 1 6.647 12h1.018M16 12l1.443 4.773L19 12m-6.057-.152-.943-.02a1.34 1.34 0 0 0-1.359 1.22 1.32 1.32 0 0 0 1.172 1.421l.536.059a1.273 1.273 0 0 1 1.226 1.718c-.2.571-.636.754-1.337.754h-1.13"
                      />
                    </svg>
                    Download CSV
                  </Button>
                  <Button className="flex w-full items-center justify-center rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100">
                    <svg
                      className="-ms-2 me-2 size-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                      />
                    </svg>
                    Download PDF
                  </Button>
                </div>
              </div>

              {paymentDetails.map(({ id, label }, index) => (
                <div key={id} className="relative">
                  <FormField
                    control={form.control}
                    name={id}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="card-number-Input">
                          {label}
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              id={id}
                              type="text"
                              className="col-span-6 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm font-medium text-primary-900 focus:border-primary-500 focus:ring-primary-500 "
                              value={field.value}
                              disabled
                              readOnly
                            />
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    onClick={(e) => {
                                      handleCopy(id, field.value);
                                      e.stopPropagation();
                                      e.preventDefault();
                                    }}
                                    className="absolute end-2 top-1/2 -translate-y-1/2 bg-transparent px-1 shadow-none hover:bg-primary-300"
                                  >
                                    {copied[id as keyof typeof copied] ? (
                                      <Check className="size-4 text-primary-700" />
                                    ) : (
                                      <ClipboardList className="size-4 text-primary-500 " />
                                    )}
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>
                                    {copied[id as keyof typeof copied]
                                      ? "Copied!"
                                      : "Copy to clipboard"}
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
            <Button className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-500 focus:outline-none focus:ring-4  focus:ring-primary-300">
              Confirm payment
            </Button>
            <Text className="mt-6 text-center text-base font-normal text-primary-500  sm:mt-8 lg:text-left">
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
    </section>
  );
};
