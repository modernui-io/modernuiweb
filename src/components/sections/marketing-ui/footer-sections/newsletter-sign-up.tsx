import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaMobile } from "react-icons/fa";
import { HiChevronDown, HiMail } from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import Logo from "~/lib/assets/images/logo.svg";

const languages = ["English", "German", "Spanish", "French"];

const formSchema = z.object({
  email: z.string(),
});

const locations = [
  {
    name: "New York",
    addrLine1: "Huntersville,",
    addrLine2: "957 Hill Hills Suite 491, United States",
    office: "+12(3) 456 7890 1234",
    email: "company@name.com",
  },
  {
    name: "Rome",
    addrLine1: "Piazza di Spagna,",
    addrLine2: "00187 Roma RM, Italy",
    office: "+12(3) 456 7890 1234",
    email: "company@name.it",
  },
  {
    name: "London",
    addrLine1: "Fulham Rd,",
    addrLine2: "London SW6 1HS, United Kingdom",
    office: "+12(3) 456 7890 1234",
    email: "company@name.co.uk",
  },
];
export function NewsLetterSignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10">
        <div className="gap-8 space-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {locations.map((location, index) => (
            <address key={index} className="not-italic">
              <Text className="mb-6 text-sm font-semibold uppercase">
                {location.name}
              </Text>
              <div className="mb-3 ">
                <Text className="text-muted-foreground">
                  {location.addrLine1}
                </Text>
                <Text className="text-muted-foreground">
                  {location.addrLine2}
                </Text>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <FaMobile className="mr-2 size-5" />
                  Office: {location.office}
                </li>
                <li className="flex items-center">
                  <HiMail className="mr-2 size-5" />
                  Support:{" "}
                  <Link
                    href={`mailto:${location.email}`}
                    className="ml-2 hover:underline"
                  >
                    {location.email}
                  </Link>
                </li>
              </ul>
            </address>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-screen-md items-center justify-between rounded-lg bg-background p-4 dark:bg-muted sm:flex lg:mt-16">
          <Text className="text-sm font-medium text-muted-foreground">
            Sign up to our newsletter
          </Text>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              action="#"
              className="ml-0 mt-4 flex w-full sm:ml-5 sm:mt-0"
            >
              <div className="relative w-full">
                <Label
                  htmlFor="email-subscribe"
                  className="mb-2 hidden text-sm font-medium"
                >
                  Email address
                </Label>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiMail className="size-5 text-muted-foreground" />
                </div>
                <Input
                  type="email"
                  id="email-subscribe"
                  className="block h-auto w-full rounded-l-lg rounded-r-none border border-muted-foreground/30 bg-background p-3 pl-10 text-sm focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground dark:bg-primary-200 dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Your email"
                  required
                  {...form.register("email")}
                />
              </div>
              <Button
                type="submit"
                className="h-auto cursor-pointer rounded-l-none rounded-r-lg px-5 text-center text-sm focus:ring-4 focus:ring-primary-300 dark:text-dark-tremor-content-strong dark:focus:ring-primary-800"
              >
                Subscribe
              </Button>
            </form>
          </Form>
        </div>

        <hr className="my-6 border-primary/20 sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <Link
            href="/#"
            className="mb-6 flex items-center text-2xl font-semibold lg:mb-0"
          >
            <Image
              src={Logo}
              alt="Company Logo"
              className="mr-2 h-8 dark:invert "
            />
          </Link>

          <Text className="mb-4 block text-sm text-muted-foreground lg:mb-0">
            © 2021-2022{" "}
            <Link href="/#" className="hover:underline">
              Company™
            </Link>
            . All Rights Reserved.
          </Text>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link
                href="/#"
                className="mt-3 inline-flex items-center text-center text-sm font-medium text-muted-foreground hover:text-tremor-content-strong dark:hover:text-dark-tremor-content-strong sm:mt-0"
              >
                English (US)
                <HiChevronDown className="ml-2 size-4" />
              </Link>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-44 rounded-none p-0">
              {languages.map((language, index) => (
                <DropdownMenuItem
                  key={index}
                  className="block bg-background px-4 py-2 hover:bg-white/40 dark:bg-muted dark:hover:bg-muted/20"
                >
                  <Link href="/#">{language}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </footer>
  );
}
