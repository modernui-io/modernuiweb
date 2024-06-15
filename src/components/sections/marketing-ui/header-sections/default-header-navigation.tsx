"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icon
import { Menu } from "lucide-react";

// Component
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
// Image
import Logo from "~/lib/assets/images/logo.svg";

interface NavigationLink {
  label: string;
  link: string;
}

const navLinks: NavigationLink[] = [
  { label: "Company", link: "/#" },
  { label: "Marketplace", link: "/#" },
  { label: "Features", link: "/#" },
  { label: "Team", link: "/#" },
  { label: "Contact", link: "/#" },
];

export function DefaultHeaderNavigation() {
  // State
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header>
      <NavigationMenu className="max-w-full justify-normal bg-background px-1 py-2.5 lg:px-6">
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between">
          <Image src={Logo} alt="Logo" className="h-4 w-fit sm:h-9" />
          <div className="lg:order-2">
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
          </div>
          <div
            className={`${toggle ? "" : "hidden"} w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
          >
            <NavigationMenuList className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <NavigationMenuItem className="w-full">
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink className="block  rounded bg-primary py-2 pl-3 pr-4 text-primary-foreground lg:bg-background lg:p-0 lg:text-primary">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {navLinks.map((nav) => (
                <NavigationMenuItem key={nav.label} className="w-full">
                  <Link href={nav.link} legacyBehavior passHref>
                    <NavigationMenuLink className=" block border-b py-2 pl-3 pr-4 text-muted-foreground hover:bg-secondary dark:hover:text-white lg:border-0  lg:p-0 lg:hover:bg-background lg:hover:text-primary lg:dark:hover:text-white">
                      {nav.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>
        </div>
      </NavigationMenu>
    </header>
  );
}
