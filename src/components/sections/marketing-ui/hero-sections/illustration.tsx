"use client";

import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import Placeholder from "~/lib/assets/images/illustration.svg";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function IllustrationWithEmailSignupHero() {
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
    <MuiLayout.Section className="bg-background">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
          <Heading
            level={"lgDisplay"}
            className="mb-4 max-w-2xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl"
          >
            Building digital products &amp; brands.
          </Heading>
          <Text className="mb-6 max-w-2xl text-primary-600 md:text-lg lg:mb-8 lg:text-lg">
            Here at modernUIWeb we focus on markets where technology,
            innovation, and capital can unlock long-term value and drive
            economic growth.
          </Text>
          <Form {...form}>
            <form
              action="#"
              className=""
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="mb-3 flex items-start">
                <div className="relative mr-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-2 top-1/4 size-5 text-foreground" />
                            <Input
                              className="pl-8 md:w-96 [&_input]:w-full [&_input]:py-3 [&_input]:md:w-80"
                              required
                              placeholder="Enter your email"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <Button type="submit" className="[&>span]:py-3">
                    Try for free
                  </Button>
                </div>
              </div>
              <div className="text-left text-sm">
                Instant signup. No credit card required.&nbsp;
                <Link href="#" className="text-primary-600  hover:underline">
                  Terms of Service
                </Link>
                &nbsp;and&nbsp;
                <Link className="text-primary-600  hover:underline" href="#">
                  Privacy Policy
                </Link>
                .
              </div>
            </form>
          </Form>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex xl:col-span-4">
          <Image src={Placeholder} alt="phone illustration" />
        </div>
      </div>
    </MuiLayout.Section>
  );
}
