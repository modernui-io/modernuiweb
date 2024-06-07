import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { IconType } from "react-icons";
import {
  HiChevronRight,
  HiInformationCircle,
  HiLocationMarker,
  HiOfficeBuilding,
  HiPhone,
} from "react-icons/hi";
import { z } from "zod";

// Component
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

interface Section {
  icon: IconType;
  title: string;
  texts: string[];
  highlightedText?: string;
}

const countries = [
  { value: "US", label: "United States" },
  { value: "GE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "UK", label: "United Kingdom" },
  { value: "ES", label: "Spain" },
  { value: "CA", label: "Canada" },
  { value: "JP", label: "Japan" },
  { value: "CN", label: "China" },
];

const languages = [
  { value: "EN", label: "English (US)" },
  { value: "GE", label: "German" },
  { value: "FR", label: "French" },
  { value: "ES", label: "Spanish" },
  { value: "JP", label: "Japanese" },
  { value: "DU", label: "Dutch" },
];

const sections: Section[] = [
  {
    icon: HiOfficeBuilding,
    title: "Company information",
    texts: ["Themesberg LLC", "Tax id: USXXXXXX"],
  },
  {
    icon: HiLocationMarker,
    title: "Address",
    texts: [
      "SILVER LAKE, United States",
      "1941 Late Avenue",
      "Zip Code/Postal code: 03875",
    ],
  },
  {
    icon: HiPhone,
    title: "Call us",
    texts: [
      "Email us for general queries, including marketing",
      "and partnership opportunities.",
    ],
    highlightedText: "hello@modernui.com",
  },
];

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
  country: z
    .string()
    .refine((val) => countries.some((country) => country.value === val), {
      message: "Invalid country selected",
    }),
  language: z
    .string()
    .refine((val) => languages.some((language) => language.value === val), {
      message: "Invalid language selected",
    }),
  message: z.string().min(1, { message: "Message is required" }),
});

export function CompanyInfoContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      language: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="last:hidden last:md:block">
              <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-lg bg-primary-200 lg:size-16">
                <section.icon className="size-5 lg:size-8" />
              </div>
              <Heading
                level={4}
                className="mb-2 text-xl font-bold tracking-normal"
              >
                {section.title}
              </Heading>
              {section.texts.map((text, index) => (
                <Text key={index} className="text-muted-foreground">
                  {text}
                </Text>
              ))}
              {section.highlightedText && (
                <Text className="mt-3 font-semibold hover:underline">
                  {section.highlightedText}
                </Text>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl lg:mt-24">
          <Form {...form}>
            <form
              className="mx-auto grid max-w-screen-md grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input
                        className="h-auto bg-primary-200 p-2.5"
                        placeholder="Bonnie"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className="h-auto bg-primary-200 p-2.5"
                        placeholder="Green"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email</FormLabel>
                    <FormControl>
                      <Input
                        className="h-auto bg-primary-200 p-2.5"
                        placeholder="name@modernui.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="h-auto bg-primary-200 p-2.5"
                        placeholder="+ 12 345 6789"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex flex-row items-center gap-1.5">
                        Country
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <div>
                              <HiInformationCircle className="size-4 cursor-pointer text-muted-foreground hover:text-black dark:hover:text-white" />
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-72">
                            <div className="w-fit space-y-2">
                              <div>
                                <Heading className="text-sm font-semibold tracking-normal text-tremor-content-strong dark:text-dark-tremor-content-strong md:text-sm">
                                  Country based on fiscal residency
                                </Heading>
                                <Text className="text-sm text-muted-foreground md:text-sm">
                                  Report helps navigate cumulative growth of
                                  community activities. Ideally, the chart
                                  should have a growing trend, as stagnating
                                  chart signifies a significant decrease of
                                  community activity.
                                </Text>
                              </div>
                              <div>
                                <Heading className="text-sm font-semibold tracking-normal text-tremor-content-strong dark:text-dark-tremor-content-strong md:text-sm">
                                  Double citizenship
                                </Heading>
                                <Text className="text-sm text-muted-foreground md:text-sm">
                                  For each date bucket, the all-time volume of
                                  activities is calculated. This means that
                                  activities in period n contain all activities
                                  up to period n, plus the activities generated
                                  by your community in period.
                                </Text>
                              </div>
                              <Link
                                href="#"
                                className="flex items-center font-medium text-primary hover:text-primary/90"
                              >
                                Read more <HiChevronRight className="size-3" />
                              </Link>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <SelectTrigger className="h-auto bg-primary-200 py-2.5">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select a Country</SelectLabel>
                            {countries.map((country) => (
                              <SelectItem
                                key={country.value}
                                value={country.value}
                              >
                                {country.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <div className="flex flex-row items-center gap-1.5">
                        Language
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <div>
                              <HiInformationCircle className="size-4 cursor-pointer text-muted-foreground hover:text-black dark:hover:text-white" />
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-72">
                            <div className="w-fit space-y-2">
                              <div>
                                <Heading className="text-sm font-semibold tracking-normal text-tremor-content-strong dark:text-dark-tremor-content-strong md:text-sm">
                                  Choosing an international language
                                </Heading>
                                <Text className="text-sm text-muted-foreground md:text-sm">
                                  Report helps navigate cumulative growth of
                                  community activities. Ideally, the chart
                                  should have a growing trend, as stagnating
                                  chart signifies a significant decrease of
                                  community activity.
                                </Text>
                              </div>
                              <Link
                                href="#"
                                className="flex items-center font-medium text-primary hover:text-primary/90"
                              >
                                Read more <HiChevronRight className="size-3" />
                              </Link>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        value={field.value}
                      >
                        <SelectTrigger className="h-auto bg-primary-200 py-2.5">
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select a Language</SelectLabel>
                            {languages.map((language) => (
                              <SelectItem
                                key={language.value}
                                value={language.value}
                              >
                                {language.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          className="bg-primary-200 p-2.5"
                          placeholder="Leave a comment..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Text className="mt-4 text-sm text-muted-foreground">
                  By submitting this form you agree to our{" "}
                  <Link href="#" className="text-primary hover:underline">
                    terms and conditions
                  </Link>{" "}
                  and our{" "}
                  <Link href="#" className="text-primary hover:underline ">
                    privacy policy
                  </Link>{" "}
                  which explains how we may collect, use and disclose your
                  personal information including to third parties.
                </Text>
              </div>
              <Button
                type="submit"
                className="h-auto px-5 py-3 dark:text-dark-tremor-content-strong sm:w-fit"
              >
                Send message
              </Button>
            </form>
          </Form>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
