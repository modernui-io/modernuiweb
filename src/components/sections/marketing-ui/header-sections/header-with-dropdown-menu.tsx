"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icon
import { Menu } from "lucide-react";
import type { IconType } from "react-icons";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  HiChevronDown,
  HiPhone,
  HiPresentationChartLine,
} from "react-icons/hi";
import { RiBox3Fill, RiPieChartFill, RiSettings5Fill } from "react-icons/ri";

// Component
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
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
  dropdownComponent?: React.FC;
}

interface NavigationLinkWithIcon extends NavigationLink {
  icon: IconType;
}

const subMenuItems: NavigationLink[] = [
  { label: "Marketing CRM", link: "/#" },
  { label: "Sign up forms", link: "/#" },
  { label: "Segmentation", link: "/#" },
  { label: "Dynamic content", link: "/#" },
  { label: "A/B Testing", link: "/#" },
  { label: "Behavioural targeting", link: "/#" },
  { label: "Integrations", link: "/#" },
];

const SubMenuDropDown: React.FC = () => {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <DropdownMenuItem className="py-0.5">
          <Link
            href={"/#"}
            className="flex w-full items-center justify-start text-sm hover:bg-secondary-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white"
          >
            <span className="pr-2">
              <RiSettings5Fill />
            </span>
            Creative Tools
          </Link>
        </DropdownMenuItem>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {subMenuItems.map((item) => (
            <DropdownMenuItem className="py-0.5" key={item.label}>
              <Link
                href={item.link}
                className="flex w-full items-center justify-start p-2 text-sm hover:bg-secondary-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white"
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

const menuItems: NavigationLinkWithIcon[] = [
  { label: "Audience", link: "/#", icon: HiPresentationChartLine },
  {
    label: "Marketing Automation",
    link: "/#",
    icon: RiBox3Fill,
  },
  {
    label: "Creative Tools",
    link: "/#",
    dropdownComponent: SubMenuDropDown,
    icon: RiSettings5Fill,
  },
  {
    label: "Insights & Analytics",
    link: "/#",
    icon: FaArrowTrendUp,
  },
  { label: "Demographics", link: "/#", icon: RiPieChartFill },
  { label: "Contact Profiles", link: "/#", icon: HiPhone },
];

const MenuDropDown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="inline-block">
          <Link href="/#" legacyBehavior passHref>
            <NavigationMenuLink className="flex items-center border-b py-2 pl-3 pr-4 text-muted-foreground hover:bg-secondary dark:hover:text-white lg:border-0  lg:p-0 lg:hover:bg-background lg:hover:text-primary lg:dark:hover:text-white">
              Company
              <HiChevronDown className="ml-1 size-5" />
            </NavigationMenuLink>
          </Link>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {menuItems.map((item) =>
            item.dropdownComponent ? (
              <item.dropdownComponent key={item.label} />
            ) : (
              <DropdownMenuItem className="py-0" key={item.label}>
                <Link
                  key={item.label}
                  href={item.link}
                  className="flex w-full items-center justify-start p-2 text-sm hover:bg-secondary-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white"
                >
                  <span className="pr-2">
                    <item.icon />
                  </span>
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const navLinks: NavigationLink[] = [
  { label: "Features", link: "/#" },
  { label: "Marketplace", link: "/#" },
  { label: "Company", link: "/#", dropdownComponent: MenuDropDown },
  { label: "Team", link: "/#" },
  { label: "Contact", link: "/#" },
];

export function DropDownMenuHeader() {
  // State
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header>
      <NavigationMenu className="max-w-full justify-normal bg-background px-4 py-2.5 lg:px-6">
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
                <NavigationMenuItem key={nav.label} className="relative w-full">
                  {nav.dropdownComponent ? (
                    <nav.dropdownComponent />
                  ) : (
                    <Link href={nav.link} legacyBehavior passHref>
                      <NavigationMenuLink className="block border-b py-2 pl-3 pr-4 text-muted-foreground hover:bg-secondary dark:hover:text-white lg:border-0  lg:p-0 lg:hover:bg-background lg:hover:text-primary lg:dark:hover:text-white">
                        {nav.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>
        </div>
      </NavigationMenu>
    </header>
  );
}
