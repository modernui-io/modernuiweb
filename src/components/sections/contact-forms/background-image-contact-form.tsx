import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { IconType } from "react-icons";
import { HiPhone, HiSupport } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
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
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

interface Section {
  icon: IconType;
  title: string;
  texts: string[];
  highlightedText?: string;
  highlightedBtn?: { label: string; link: string };
  highlightedLink?: { label: string; link: string };
}

const sections: Section[] = [
  {
    icon: MdEmail,
    title: "Email us",
    texts: [
      "Email us for general queries, including marketing",
      "and partnership opportunities.",
    ],
    highlightedLink: { label: "hello@modernui.com", link: "/#" },
  },
  {
    icon: HiPhone,
    title: "Call us",
    texts: [
      "Call us to speak to a member of our team. We are",
      "always happy to help",
    ],
    highlightedText: "+1 (646) 786-5060",
  },
  {
    icon: HiSupport,
    title: "Address",
    texts: [
      "Email us for general queries, including marketing",
      "and partnership opportunities.",
    ],
    highlightedBtn: { label: "Support center", link: "/#" },
  },
];

export function BackgroundImageContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background">
      <div className="bg-primary-600 bg-[url('https://images.unsplash.com/photo-1716033712290-0a9bc8bdc796?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat bg-blend-multiply dark:bg-primary-300">
        <div className="mx-auto max-w-screen-sm px-4 pb-72 pt-8 text-center lg:px-6 lg:pb-80 lg:pt-24">
          <Heading
            level={1}
            className="mb-4 text-wrap text-center font-bold tracking-tight text-white"
          >
            Contact Us
          </Heading>
          <Text className="mb-16 text-center font-light text-primary-300 dark:text-primary-600 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </Text>
        </div>
      </div>
      <div className="mx-auto -mt-96 max-w-screen-xl px-4 py-16 sm:py-24 lg:px-6">
        <Form {...form}>
          <form
            className="mx-auto mb-16 grid max-w-screen-md grid-cols-1 gap-8 rounded-lg border bg-background p-6 shadow-sm dark:bg-muted md:grid-cols-2 lg:mb-28"
            onSubmit={form.handleSubmit(onSubmit)}
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
        <div className="space-y-8 text-center md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-lg bg-primary-200 lg:size-16">
                <section.icon className="size-5 lg:size-8" />
              </div>
              <Heading
                level={4}
                className="mb-2 text-xl font-bold tracking-normal"
              >
                {section.title}
              </Heading>
              <div className="mb-3">
                {section.texts.map((text, index) => (
                  <Text key={index} className="text-muted-foreground">
                    {text}
                  </Text>
                ))}
              </div>
              {section.highlightedText && (
                <Text className="font-semibold text-primary">
                  {section.highlightedText}
                </Text>
              )}
              {section.highlightedLink && (
                <Link
                  href={section.highlightedLink.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {section.highlightedLink.label}
                </Link>
              )}
              {section.highlightedBtn && (
                <Button
                  variant={"ghost"}
                  className="h-auto border border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link href={section.highlightedBtn.link}>
                    {section.highlightedBtn.label}
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </MuiLayout.Section>
  );
}
