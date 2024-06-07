import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { IconType } from "react-icons";
import { HiLocationMarker, HiOfficeBuilding, HiPhone } from "react-icons/hi";
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

interface Section {
  icon: IconType;
  title: string;
  texts: string[];
  highlightedText?: string;
}

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(1, { message: "Phone Number is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

const sections: Section[] = [
  {
    icon: HiOfficeBuilding,
    title: "Company information",
    texts: ["Themesberg LLC", "Tax id: USXXXXXX"],
  },
  {
    icon: HiLocationMarker,
    title: "Address",
    texts: ["Themesberg LLC", "Tax id: USXXXXXX"],
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
];

export function AddressLocationContactForm() {
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
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm px-4 text-center lg:mb-16 lg:px-6">
          <Heading
            level={1}
            className="mb-4 text-wrap text-center font-bold tracking-tight"
          >
            Contact Us
          </Heading>
          <Text className="text-center font-light text-muted-foreground sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </Text>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 mb-8 lg:mb-0">
            <Form {...form}>
              <form
                className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 sm:grid-cols-2"
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
                          type="email"
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
                          placeholder="+1 (123) 456-7890"
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
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1">
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
                {section.texts.map((text, index) => (
                  <Text key={index} className="text-muted-foreground">
                    {text}
                  </Text>
                ))}
                {section.highlightedText && (
                  <Text className="mt-3 font-semibold text-primary">
                    {section.highlightedText}
                  </Text>
                )}
              </div>
            ))}
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
