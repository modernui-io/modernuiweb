import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HiChevronDown } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { LuAlignJustify } from "react-icons/lu";
import { z } from "zod";

// Component
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
// Image
import Logo from "~/lib/assets/images/logo.svg";

function USFlagIcon() {
  return (
    <svg
      aria-hidden
      className="mr-2 size-3.5 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-us"
      viewBox="0 0 512 512"
    >
      <g fillRule="evenodd">
        <g strokeWidth="1pt">
          <path
            fill="#bd3d44"
            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
            transform="scale(3.9385)"
          />
          <path
            fill="#fff"
            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
            transform="scale(3.9385)"
          />
        </g>
        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
        <path
          fill="#fff"
          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
          transform="scale(3.9385)"
        />
      </g>
    </svg>
  );
}

function ChinaFlagIcon() {
  return (
    <svg
      aria-hidden
      className="mr-2 size-3.5 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      id="flag-icon-css-cn"
      viewBox="0 0 512 512"
    >
      <defs>
        <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
      </defs>
      <path fill="#de2910" d="M0 0h512v512H0z" />
      <use
        width="30"
        height="20"
        transform="matrix(76.8 0 0 76.8 128 128)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="rotate(-121 142.6 -47) scale(25.5827)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="rotate(-98.1 198 -82) scale(25.6)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="rotate(-74 272.4 -114) scale(25.6137)"
        xlinkHref="#a"
      />
      <use
        width="30"
        height="20"
        transform="matrix(16 -19.968 19.968 16 256 230.4)"
        xlinkHref="#a"
      />
    </svg>
  );
}

function ItalyFlagIcon() {
  return (
    <svg
      aria-hidden
      className="mr-2 size-3.5 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-it"
      viewBox="0 0 512 512"
    >
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#009246" d="M0 0h170.7v512H0z" />
        <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
      </g>
    </svg>
  );
}

function GermanyFlagIcon() {
  return (
    <svg
      aria-hidden
      className="mr-2 size-3.5 rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      id="flag-icon-css-de"
      viewBox="0 0 512 512"
    >
      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
      <path d="M0 0h512v170.7H0z" />
      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
    </svg>
  );
}

const formSchema = z.object({
  search: z.string(),
});

const navLinks = [
  { label: "Home", link: "/#" },
  { label: "Company", link: "/#" },
  { label: "Features", link: "/#" },
  { label: "Team", link: "/#" },
  { label: "Contacts", link: "/#" },
];

export function HeaderWithSearchbar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header>
      <NavigationMenu className="block max-w-none border-muted-foreground/10 bg-background px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <Link href="/#" className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              className="mr-1 h-6 w-fit sm:mr-3 sm:h-9"
            />
            <span className="self-center whitespace-nowrap font-semibold sm:text-xl">
              Company
            </span>
          </Link>

          <div className="flex items-center lg:order-2 lg:w-auto">
            <Button
              onClick={() => {
                setToggle(!toggle);
              }}
              className="mr-2 inline-flex items-center rounded-lg bg-background p-2.5 text-sm font-medium text-muted-foreground/60 hover:bg-secondary/30 focus:outline-none focus:ring-4 focus:ring-muted-foreground/60 dark:bg-muted-foreground/30 dark:text-muted-foreground dark:focus:ring-muted-foreground/10 lg:mr-0 lg:hidden lg:px-5"
            >
              <IoSearchOutline className="size-5 lg:mr-2" />
            </Button>

            <div className="flex items-center lg:order-2">
              <Form {...form}>
                <form
                  id="search-form"
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mr-3 hidden w-full lg:inline-block"
                >
                  <Label className="sr-only mb-2 text-sm font-medium dark:text-muted-foreground/60">
                    Search
                  </Label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <IoSearchOutline className="size-5 text-muted-foreground" />
                    </div>
                    <Input
                      type="search"
                      id="search-bar"
                      className="block w-full rounded-lg border border-muted-foreground/60 bg-secondary/30 px-4 py-2 pl-10 text-sm focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/30 dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Search"
                      required
                      {...form.register("search")}
                    />
                  </div>
                </form>
              </Form>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="mr-2 inline-flex items-center rounded-lg bg-secondary/30 p-2.5 text-sm font-medium text-muted-foreground/60 hover:bg-secondary/30 focus:outline-none focus:ring-4 focus:ring-muted-foreground/60 dark:bg-muted-foreground/30 dark:text-muted-foreground/60 dark:focus:ring-muted-foreground/10 lg:px-5">
                    <USFlagIcon />
                    English
                    <HiChevronDown className="ml-1 size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="z-50 my-4 w-48 list-none divide-y divide-muted-foreground/30 rounded bg-background py-1 text-base shadow dark:bg-muted-foreground/30"
                  id="language-dropdown"
                >
                  {[
                    {
                      icon: <USFlagIcon />,
                      name: "English (US)",
                    },
                    {
                      icon: <GermanyFlagIcon />,
                      name: "Deutsch",
                    },
                    {
                      icon: <ItalyFlagIcon />,
                      name: "Italiano",
                    },
                    {
                      icon: <ChinaFlagIcon />,
                      name: "中文 (繁體)",
                    },
                  ].map((language, index) => (
                    <DropdownMenuItem key={index}>
                      <Link
                        href="/#"
                        className="block w-full bg-background px-4 py-2 text-sm text-muted-foreground/60 hover:bg-muted-foreground/30 dark:bg-muted-foreground/30 dark:text-muted-foreground"
                      >
                        <div className="inline-flex items-center">
                          {language.icon}
                          {language.name}
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button
              onClick={() => {
                setToggle(!toggle);
              }}
              className="mr-2 inline-flex items-center rounded-lg bg-background p-2.5 text-sm font-medium text-muted-foreground/60 hover:bg-secondary/30 focus:outline-none focus:ring-4 focus:ring-muted-foreground/60 dark:bg-muted-foreground/30 dark:text-muted-foreground dark:focus:ring-muted-foreground/10 lg:mr-0 lg:hidden lg:px-5"
            >
              <LuAlignJustify className="size-5 lg:mr-2" />
            </Button>
          </div>

          <div
            className={`${toggle ? "block" : "hidden"} w-full items-center justify-between lg:order-1 lg:flex lg:w-auto `}
            id="mobile-menu-search"
          >
            <Form {...form}>
              <form
                className="mt-4 flex items-center lg:hidden"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <Label htmlFor="search-mobile" className="sr-only">
                  Search
                </Label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiChevronDown className="size-5 text-muted-foreground" />
                  </div>
                  <Input
                    type="search"
                    id="search-mobile"
                    className="block w-full rounded-lg border border-muted-foreground/60 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-500 focus:ring-primary-500  dark:border-muted-foreground/30 dark:bg-muted-foreground/30 dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Search for anything..."
                    required
                  />
                </div>
                <Button className="ml-2 inline-flex items-center rounded-lg border border-primary-700 bg-primary-700 p-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  <IoSearchOutline className="mr-2 size-5" /> Search
                </Button>
              </form>
            </Form>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col font-medium lg:flex-row lg:space-x-8">
                <div className="w-full gap-3 lg:flex lg:w-auto">
                  {["Home", "Company", "Features", "Team", "Contact"].map(
                    (nav, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <Link href="/#" legacyBehavior passHref>
                          <NavigationMenuLink className="block w-full border-b py-2 pl-3 pr-4 text-muted-foreground hover:bg-secondary lg:border-0  lg:p-0 lg:hover:bg-background lg:hover:text-primary">
                            {nav}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ),
                  )}
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </NavigationMenu>
    </header>
  );
}
