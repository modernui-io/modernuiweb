import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Video } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Component Imports
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
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

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string(),
  remember: z.boolean().optional(),
});

const footerList = [
  {
    highlightText: "42k",
    subText1: "Our Active",
    subText2: "Users",
  },
  {
    highlightText: "3k",
    subText1: "Professional",
    subText2: "Creators",
  },
  {
    highlightText: "560k",
    subText1: "Weekly",
    subText2: "Downloads",
  },
];

export function SignUpFormWithCTAHero() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-primary-50">
      <MuiLayout.Container className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 xl:gap-0">
        <div className="mb-10 mr-auto place-self-center lg:col-span-7 xl:col-span-8 xl:mb-0">
          <Heading
            level={"lgDisplay"}
            className="mb-4 max-w-2xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl"
          >
            Discover new product and best possibilities
          </Heading>
          <Text className="mb-6 max-w-2xl text-secondary-foreground md:text-lg lg:mb-8 lg:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </Text>
          <Button className="w-fit [&>span]:items-center" size="lg">
            <Video className="-ml-1 mr-2 size-5" />
            Watch video
          </Button>
          <ul className="mx-auto mt-14 hidden justify-between border-t border-primary-300 pt-12 xl:flex">
            {footerList.map(({ highlightText, subText1, subText2 }) => (
              <li className="flex" key={highlightText}>
                <span className="text-4xl font-extrabold lg:text-5xl">
                  {highlightText}
                </span>
                <div className="block pl-4 text-xl text-secondary-foreground">
                  <div>{subText1}</div>
                  <div>{subText2}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-screen-sm justify-center rounded-lg border border-primary-200 bg-background p-4 shadow sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 xl:col-span-4">
          <Form {...form}>
            <form
              className="space-y-6"
              action="#"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Heading level={"xsDisplay"} className="font-medium">
                Join over 3,000 creators
              </Heading>
              <div className="flex items-center space-x-4">
                <Button className="w-full bg-[#4284F4] hover:bg-[#3372df] focus:outline-none focus:ring-[#0f53c9] ">
                  Google
                </Button>
                <Button className="w-full bg-[#EA4C89] hover:bg-[#d8437c] focus:outline-none focus:ring-[#f39cbe]">
                  Dribbble
                </Button>
              </div>
              <div className="flex items-center">
                <div className="h-0.5 w-full bg-primary-200"></div>
                <div className="px-5 text-center text-secondary-foreground">
                  or
                </div>
                <div className="h-0.5 w-full bg-primary-200"></div>
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Your email
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          className="w-full"
                          placeholder="name@flowbite.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="password"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Your password
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          className="w-full"
                          placeholder="••••••••"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-start">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start">
                        <FormLabel className="sr-only">Email</FormLabel>
                        <FormControl>
                          <div className="flex h-5 items-center">
                            <Checkbox id="remember" />
                          </div>
                        </FormControl>
                        <Label
                          htmlFor="remember"
                          className=" ml-3 text-sm text-foreground"
                        >
                          Remember me
                        </Label>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <Link
                  href="#"
                  className="ml-auto text-sm text-primary-600 hover:underline "
                >
                  Lost Password?
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              <div className="text-sm font-medium text-foreground">
                Not registered?&nbsp;
                <Link href="#" className="text-primary-700 hover:underline">
                  Create account
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
