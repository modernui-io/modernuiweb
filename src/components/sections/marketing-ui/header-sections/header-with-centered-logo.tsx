"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icon
import { Menu } from "lucide-react";
import { LuGlobe } from "react-icons/lu";
import { MdCall } from "react-icons/md";

//component imports
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import Logo from "~/lib/assets/images/logo.svg";

interface NavigationLink {
  label: string;
  link: string;
}

const navLinks: NavigationLink[] = [
  { label: "Resources", link: "/#" },
  { label: "Features", link: "/#" },
  { label: "Pricing", link: "/#" },
];

export function HeaderWithCenteredLogo() {
  // State
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header>
      <NavigationMenu className="max-w-full justify-end md:hidden">
        <NavigationMenuList className="w-full">
          <div className="flex w-full items-center justify-end">
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="mr-2 p-0 text-muted-foreground hover:underline"
                >
                  Talk to sales
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="p-2"
                  aria-label="Language"
                >
                  <LuGlobe />
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="p-2"
                  aria-label="Call"
                >
                  <MdCall />
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="max-w-full justify-normal bg-background px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between">
          <div className="hidden gap-0 md:flex lg:order-2">
            <Image src={Logo} alt="Company Logo" className="mx-5 h-6 sm:h-9" />
          </div>

          <div className="lg:order-3">
            <NavigationMenuList>
              <div className="items-center gap-0 lg:flex">
                <div className="hidden md:flex">
                  <NavigationMenuItem>
                    <NavigationMenuLink>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        className="mr-2 p-0 text-muted-foreground hover:underline"
                      >
                        Talk to sales
                      </Button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="">
                      <Button variant={"ghost"} size={"sm"} className="p-2">
                        <LuGlobe />
                      </Button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="">
                      <Button variant={"ghost"} size={"sm"} className="p-2">
                        <MdCall />
                      </Button>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </div>
                <div className="flex items-center justify-between gap-6 lg:flex-none">
                  <div className="flex justify-start md:hidden">
                    <Image src={Logo} alt="Logo" className="h-5" />
                  </div>
                  <div className="flex items-center">
                    <NavigationMenuItem className="flex">
                      <NavigationMenuLink className="p-2 lg:px-2">
                        <Button
                          variant={"ghost"}
                          size={"sm"}
                          className="lg:px-2"
                        >
                          Login
                        </Button>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="p-2">
                        <Button
                          variant={"default"}
                          size={"sm"}
                          className="bg-primary hover:bg-primary/90"
                        >
                          Sign Up
                        </Button>
                      </NavigationMenuLink>
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
                  </div>
                </div>
              </div>
            </NavigationMenuList>
          </div>

          <div
            className={`${toggle ? "" : "hidden"} w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
          >
            <NavigationMenuList className="flex flex-col font-medium lg:flex-row lg:space-x-8">
              <div className="gap-3 lg:flex lg:w-auto">
                <NavigationMenuItem>
                  <Link href="/#" legacyBehavior passHref>
                    <NavigationMenuLink className="block rounded  border-b py-2 pl-3 pr-4 text-primary lg:border-0  lg:bg-background lg:p-0">
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
              </div>
            </NavigationMenuList>
          </div>
        </div>
      </NavigationMenu>
    </header>
  );
}
