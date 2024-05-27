import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ChevronRight, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//components
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
import SearchDark from "~/lib/assets/images/search-dark.png";
import SearchLight from "~/lib/assets/images/search-light.png";

const ToolIcon = () => (
  <svg
    className="mr-3 size-6 shrink-0 text-primary-600"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
      clipRule="evenodd"
    />
  </svg>
);

const TrackingChart = () => (
  <svg
    className="mr-3 size-6 shrink-0 text-primary-600"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
      clipRule="evenodd"
    />
  </svg>
);

const searchBarList = [
  {
    icon: <ToolIcon />,
    heading: "Customizable Categories",
    caption:
      "Host code that you don't want to share with the world in private.",
  },
  {
    icon: <Lock className="mr-3 size-6 shrink-0 text-primary-600" />,
    heading: "Private repos",
    caption:
      "Host code that you don't want to share with the world in private.",
  },
  {
    icon: <TrackingChart />,
    heading: "Tracking Saving Rate",
    caption:
      "Host code that you don't want to share with the world in private.",
  },
];

const formSchema = z.object({
  search: z.string().optional(),
});

export function HeroSectionWithSearchBar() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated
    console.log(values);
  }
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="mb-8 grid items-center gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-6 text-center sm:mb-6 lg:mb-0 lg:text-left">
            <Link
              href="#"
              className="mb-6 inline-flex items-center justify-between rounded-full bg-primary-200 p-1 pr-4 text-sm text-primary-700 hover:bg-primary-300 "
            >
              <span className="mr-3 rounded-full bg-primary px-3 py-1 text-xs text-white">
                New
              </span>
              &nbsp;
              <span className="text-sm font-medium">
                Flowbite is out! See what's new
              </span>{" "}
              <ChevronRight className="ml-1 size-4 text-foreground" />
            </Link>
            <Heading
              level={"lgDisplay"}
              className="mb-4 font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl"
            >
              We invest in the world’s potential
            </Heading>
            <Text className="mx-auto mb-6 max-w-xl text-primary-600 md:text-lg lg:mx-0 xl:mb-8 xl:text-xl">
              Here at Flowbite we focus on markets where innovation can unlock
              long-term value and drive economic growth.
            </Text>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto max-w-lg lg:ml-0"
                action="#"
              >
                <div className="relative flex items-center">
                  <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Search</FormLabel>
                        <FormControl>
                          <Input
                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 md:w-96"
                            placeholder="Search Mockups, Logos..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="ml-2 [&>span]:items-center">
                    <MagnifyingGlassIcon className="size-4 text-background" />
                    Search
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="col-span-6">
            <Image
              src={SearchLight}
              className="h-[473px] w-[600px] dark:hidden"
              alt="mockup"
            />
            <Image
              src={SearchDark}
              className="hidden h-[473px] w-[600px] dark:block"
              alt="mockup"
            />
          </div>
        </div>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          {searchBarList.map(({ caption, heading, icon }) => (
            <div key={heading} className="flex justify-center">
              {icon}
              <div>
                <Heading level={4} className="mb-1 font-semibold leading-tight">
                  {heading}
                </Heading>
                <Text className="text-primary-600">{caption}</Text>
              </div>
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
