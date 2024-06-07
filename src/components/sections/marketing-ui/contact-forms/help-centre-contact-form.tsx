import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// Icon
import { FaClipboardList } from "react-icons/fa6";
import { z } from "zod";

// Component
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

interface Card {
  title: string;
  features: { text: string; url: string }[];
}

const cards: Card[] = [
  {
    title: "Billing & Plans",
    features: [
      { text: "Modern UI plans & prices", url: "/#" },
      { text: "Switch plans and add-ons", url: "#" },
      { text: "I can't log in to Modern UI", url: "#" },
      { text: "The Disney Bundle", url: "#" },
      { text: "Student Discount on Modern UI", url: "#" },
    ],
  },
  {
    title: "Using Modern UI",
    features: [
      { text: "Parental Controls", url: "#" },
      { text: "Devices to watch Modern UI", url: "#" },
      { text: "Home location for Live TV", url: "#" },
      { text: "Live TV Guide", url: "#" },
      { text: "Fix buffering issues", url: "#" },
    ],
  },
  {
    title: "What’s on Modern UI",
    features: [
      { text: "NEW this month!", url: "#" },
      { text: "Sports Add-on for Live TV", url: "#" },
      { text: "Watch live sports", url: "#" },
      { text: "FX shows & movies", url: "#" },
      { text: "Super Bowl 2022", url: "#" },
    ],
  },
];

const contacts = [
  {
    title: "Information & Sales",
    contact: "sales@modernui.com",
    link: "#",
  },
  {
    title: "Support",
    contact: "support@modernui.com",
    link: "#",
  },
  {
    title: "Verification of Employment",
    contact: "hr@modernui.com",
    link: "#",
  },
];

const addresses = [
  {
    title: "Canada",
    address1: "5333 Avenue Casgrain #1201,",
    address2: "Montréal, QC H2T 1X3",
  },
  {
    title: "Germany",
    address1: "Neue Schönhauser Str. 3-5,",
    address2: "10178 Berlin",
  },
  {
    title: "France",
    address1: "266 Place Ernest Granier,",
    address2: "34000 Montpellier",
  },
];

const topics = [
  { value: "US", label: "Switch plans and add-ons" },
  { value: "CA", label: "Billing & Invoice" },
  { value: "FR", label: "I can't log in to Modern UI" },
  { value: "DE", label: "Parental controls" },
];

const formSchema = z.object({
  email: z.string().email("This is not a valid email."),
  topic: z
    .string()
    .refine((val) => topics.some((topic) => topic.value === val), {
      message: "Invalid topic selected",
    }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

export function HelpCentreContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      topic: "",
      subject: "",
      message: "",
      acceptedTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight lg:mb-8"
          >
            How can we help you?
          </Heading>
          <div className="relative h-auto">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FaClipboardList className="size-5 text-primary-500" />
            </div>
            <Input
              type="text"
              id="search-faq"
              className="block w-full rounded-lg border bg-muted py-7 pl-12 text-base focus:border-primary focus:ring-primary-500 "
              placeholder="Type keywords to find answers"
            />
          </div>
        </div>
        <div className="my-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:gap-16">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="rounded-lg border p-4 shadow dark:bg-muted lg:p-8"
            >
              <Heading
                level={3}
                className="mb-4 font-extrabold tracking-normal md:text-xl"
              >
                {card.title}
              </Heading>
              <ul className="mb-4 space-y-3 ">
                {card.features.map((feature, index) => (
                  <li key={index}>
                    <Link
                      href={feature.url}
                      className="text-primary hover:underline"
                    >
                      {feature.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mb-8 items-center justify-between sm:mb-24 sm:flex">
          <div className="mb-4 sm:mb-0">
            <Heading
              level={3}
              className="mb-2 text-2xl font-extrabold tracking-normal"
            >
              Not what you were looking for?
            </Heading>
            <Text className="font-light text-muted-foreground sm:text-xl">
              Browse through all of our Help Center articles
            </Text>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-center text-base font-medium text-white hover:bg-primary/90 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </Link>
        </div>
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="hidden lg:block">
            <Heading
              level={5}
              className="mb-4 text-lg font-semibold tracking-normal"
            >
              Points of contact
            </Heading>
            <Heading level={6} className="mb-1 text-base tracking-normal">
              U.S. Modern UI
            </Heading>
            <address className="text-sm font-normal text-muted-foreground">
              11350 McCormick Rd, EP III, Suite 200,
              <br />
              Hunt Valley, MD 21031
            </address>
            {contacts.map((contact) => (
              <div key={contact.title}>
                <Heading
                  level={6}
                  className="mb-2 mt-4 text-base tracking-normal"
                >
                  {contact.title}
                </Heading>
                <Text
                  level={"sm"}
                  className="font-medium text-primary hover:underline"
                >
                  <Link href={contact.link}>{contact.contact}</Link>
                </Text>
              </div>
            ))}
            <Heading
              level={5}
              className=" mb-4 mt-5 text-lg font-semibold tracking-normal"
            >
              Our offices around the world
            </Heading>
            {addresses.map((address) => (
              <div key={address.title}>
                <Heading level={6} className="mb-1 mt-4 text-base font-medium">
                  {address.title}
                </Heading>
                <address className="text-sm font-normal text-muted-foreground">
                  {address.address1}
                  <br />
                  {address.address2}
                </address>
              </div>
            ))}
          </div>
          <div className="col-span-2">
            <Heading
              level={2}
              className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:mb-8"
            >
              Still need help?
            </Heading>
            <Form {...form}>
              <form
                className="space-y-8"
                onSubmit={form.handleSubmit(onSubmit)}
                noValidate
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Your email address{" "}
                        <span className="text-xs text-muted-foreground">
                          (So we can reply to you)
                        </span>
                      </FormLabel>
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
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Topic</FormLabel>
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
                              <SelectLabel>Select a topic</SelectLabel>
                              {topics.map((topic) => (
                                <SelectItem
                                  key={topic.value}
                                  value={topic.value}
                                >
                                  {topic.label}
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          className="h-auto bg-primary-200 p-2.5"
                          placeholder="Let us know how we can help you"
                          {...field}
                        />
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
                  <FormField
                    control={form.control}
                    name="acceptedTerms"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="mt-4 flex items-center space-x-2">
                            <Checkbox
                              id="terms"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                            <Label
                              htmlFor="terms"
                              className="text-sm font-light text-muted-foreground"
                            >
                              By submitting this form, you confirm that you have
                              read and agree to our{" "}
                              <Link
                                href={"/#"}
                                className="font-normal text-secondary-foreground underline hover:no-underline"
                              >
                                Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link
                                href={"/#"}
                                className="font-normal text-secondary-foreground underline hover:no-underline"
                              >
                                Privacy Statement
                              </Link>
                              .
                            </Label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="h-auto px-5 py-3 dark:text-dark-tremor-content-strong"
                >
                  Send message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
