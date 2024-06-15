"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icon
import { Menu } from "lucide-react";

// Component
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
// Image
import Logo from "~/lib/assets/images/logo.svg";

const dropdownData: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const navLinks1 = [
  { label: "Features", link: "/#" },
  { label: "Marketplace", link: "/#" },
];

const navLinks2 = [
  { label: "Team", link: "/#" },
  { label: "Contact", link: "/#" },
];

export function MegaDropdownHeader() {
  // State
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header>
      <div className="max-w-full justify-normal bg-background px-1 py-2.5 lg:px-6">
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between">
          <Image src={Logo} alt="Logo" className="h-4 w-fit sm:h-9" />
          <NavigationMenu className="lg:order-2">
            <NavigationMenuList className="flex items-center">
              <NavigationMenuItem>
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5">
                    Log in
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink className="mr-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5">
                    Get started
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="ml-1 inline-flex items-center rounded-lg bg-background p-2 text-sm text-secondary-foreground shadow-none hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary-300 lg:hidden"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu />
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu
            className={`${toggle ? "" : "hidden"} w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
          >
            <NavigationMenuList className="mt-4 flex w-full flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <NavigationMenuItem className="w-full">
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink className="mx-2 block w-80 rounded bg-primary py-2 pl-3 pr-4 text-primary-foreground sm:w-full lg:bg-background lg:p-0 lg:text-primary ">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {navLinks1.map((nav) => (
                <NavigationMenuItem key={nav.label} className="w-full">
                  <Link href={nav.link} legacyBehavior passHref>
                    <NavigationMenuLink className=" block border-b py-2 pl-3 pr-4 text-muted-foreground hover:bg-secondary dark:hover:text-white lg:border-0  lg:p-0 lg:hover:bg-background lg:hover:text-primary lg:dark:hover:text-white">
                      {nav.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="mx-2 w-80 justify-start border-b py-2 pl-3 pr-4 text-base text-muted-foreground hover:bg-secondary dark:hover:text-white sm:w-full lg:border-0 lg:p-0 lg:hover:bg-background lg:hover:text-primary lg:dark:hover:text-white">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[340px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {dropdownData.map((data) => (
                      <>
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            {data.title}
                          </div>
                          <p
                            key={data.title}
                            className="line-clamp-2 text-sm leading-snug text-muted-foreground"
                          >
                            {data.description}
                          </p>
                        </div>
                      </>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks2.map((nav) => (
                <NavigationMenuItem key={nav.label} className="w-full">
                  <Link href={nav.link} legacyBehavior passHref>
                    <NavigationMenuLink className=" block border-b py-2 pl-3 pr-4 text-muted-foreground hover:bg-secondary dark:hover:text-white lg:border-0  lg:p-0 lg:hover:bg-background lg:hover:text-primary lg:dark:hover:text-white">
                      {nav.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}
