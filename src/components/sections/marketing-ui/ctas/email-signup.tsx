"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import * as MuiLayout from "~/components/layouts";
// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function EmailSignUpCTASection() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <MuiLayout.Section className="bg-white dark:bg-gray-900">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-md text-center">
          <Heading
            level={2}
            className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Get started with ModernUI web today
          </Heading>
          <Text className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
            Connecting with your audience has never been easier with Flowbite
            straightforward email marketing and automation tools.
          </Text>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mb-3 mt-6 flex h-fit items-center justify-center gap-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="md:w-64"
                        placeholder="Your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
            <div className=" text-sm font-medium text-gray-500 dark:text-gray-300">
              Instant signup. No credit card required.&nbsp;
              <Link
                href="#"
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                Terms of Service
              </Link>
              &nbsp;and&nbsp;
              <Link
                className="text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Privacy Policy
              </Link>
              .
            </div>
          </Form>

          {/* <form action="#" className="mx-auto max-w-screen-sm">
            <div className="mb-3 flex items-center">
              <div className="relative mr-3 w-full">
                <Label htmlFor="member_email" className="sr-only">
                  Email address
                </Label>
                <TextInput
                  icon={EnvelopeIconSVG}
                  id="member_email"
                  name="member_email"
                  placeholder="Enter your email"
                  required
                  type="email"
                  className="[&_input]:p-3 [&_input]:pl-10 [&_input]:placeholder:text-gray-400"
                />
              </div>
              <Button
                color="info"
                type="submit"
                className="[&>span]:px-5 [&>span]:py-3"
              >
                Subscribe
              </Button>
            </div>
            <div className="text-left text-sm font-medium text-gray-500 dark:text-gray-300">
              Instant signup. No credit card required.&nbsp;
              <a
                href="#"
                className="text-primary-600 hover:underline dark:text-primary-500"
              >
                Terms of Service
              </a>
              &nbsp;and&nbsp;
              <a
                className="text-primary-600 hover:underline dark:text-primary-500"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </div>
          </form> */}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}

const EnvelopeIconSVG = () => (
  <svg
    className="size-5 text-gray-500 dark:text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);
