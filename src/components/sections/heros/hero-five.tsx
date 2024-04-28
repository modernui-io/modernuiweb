"use client";

import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import Placeholder from "@/public/images/mocks/placeholder.jpg";

import * as MuiLayout from "~/components/layouts";
// Component Imports
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import {
  Form,
  FormControl,
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

export default function Hero() {
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
    <MuiLayout.Section>
      <MuiLayout.Container>
        <div className="not-prose flex flex-col items-center gap-6 text-center">
          <Button asChild className="w-fit" size={"sm"} variant={"outline"}>
            <Link href="https://9d8.dev">
              Lorem ipsum dolor sit amet <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <Heading level={2} className="text-4xl text-primary-500 md:text-6xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Heading>
          <Heading level={3} className="text-xl font-light md:text-3xl">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Heading>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 text-left"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="md:w-96"
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </Form>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
