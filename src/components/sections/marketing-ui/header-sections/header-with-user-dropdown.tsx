"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icon
import { Menu } from "lucide-react";
import type { IconType } from "react-icons";
import { AiFillSignal } from "react-icons/ai";
import { HiCollection, HiFire, HiHeart, HiMoon, HiPhone } from "react-icons/hi";

import { Avatar } from "~/components/ui/avatar";
// Component
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
// Image
import Logo from "~/lib/assets/images/logo.svg";
import ProfilePic from "~/lib/assets/images/profile-picture-5.jpg";

interface NavigationLink {
  label: string;
  link: string;
  dropdownComponent?: React.FC;
}

interface NavigationLinkWithIcon {
  label: string;
  link?: string;
  icon?: IconType;
  divider?: boolean;
}

const menuItems: NavigationLinkWithIcon[] = [
  { label: "My Profile", link: "/#" },
  { label: "Account settings", link: "/#", divider: true },
  { label: "My likes", link: "/#", icon: HiHeart },
  { label: "Collections", link: "/#", icon: HiCollection },
  { label: "Pro version", link: "/#", icon: HiFire, divider: true },
  { label: "Sign out", link: "/#" },
];

const MenuDropDown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="inline-block">
          <Avatar className="mr-4 size-8">
            <Image
              className="w-full rounded-full object-cover"
              src={ProfilePic}
              alt="Jese Leos"
            />
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="pb-0">
            <Text className="block text-sm font-semibold">Neil sims</Text>
          </DropdownMenuItem>
          <DropdownMenuItem className="pt-0">
            <Text className="block truncate text-sm font-light text-muted-foreground">
              name@gmail.com
            </Text>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {menuItems.map((item) => (
            <React.Fragment key={item.label}>
              <DropdownMenuItem className="p-0">
                {item.link ? (
                  <Link
                    key={item.label}
                    href={item.link}
                    className="flex w-full items-center justify-start p-2 text-sm hover:bg-secondary-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white"
                  >
                    {item.icon && (
                      <span className="pr-2">
                        <item.icon className="size-6" />
                      </span>
                    )}
                    {item.label}
                  </Link>
                ) : (
                  <Text className="block px-4 py-2 text-sm hover:bg-secondary-foreground/10 dark:text-muted-foreground dark:hover:bg-muted-foreground/30 dark:hover:text-white">
                    {item.label}
                  </Text>
                )}
              </DropdownMenuItem>
              {item.divider && <DropdownMenuSeparator />}
            </React.Fragment>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface NavigationWithIcon {
  icon: IconType;
  tooltipInfo: string;
  smHide: boolean;
}

const iconMenuItems: NavigationWithIcon[] = [
  { icon: HiMoon, tooltipInfo: "Toogle dark mode", smHide: false },
  { icon: AiFillSignal, tooltipInfo: "View analytics", smHide: true },
];

const navLinks: NavigationLink[] = [
  { label: "Company", link: "/#" },
  { label: "Marketplace", link: "/#" },
  { label: "Features", link: "/#" },
  { label: "Team", link: "/#" },
  { label: "Contact", link: "/#" },
];

export function UserDropDownMenuHeader() {
  // State
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = React.useCallback(() => setToggle((prev) => !prev), []);

  return (
    <header>
      <NavigationMenu className="max-w-full justify-normal bg-background px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between">
          <Image src={Logo} alt="Logo" className="h-4 w-fit sm:h-9" />
          <div className="lg:order-2">
            <NavigationMenuList className="flex items-center">
              {iconMenuItems.map((item) => (
                <NavigationMenuItem
                  key={item.tooltipInfo}
                  className={`lg:block ${item.smHide && "hidden"}`}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="mr-2 block">
                          <item.icon className="size-6 text-muted-foreground/60" />
                          <span className="sr-only">{item.tooltipInfo}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <Text className="text-white">{item.tooltipInfo}</Text>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </NavigationMenuItem>
              ))}
              <MenuDropDown />
              <NavigationMenuItem>
                <Link href="/#" legacyBehavior passHref>
                  <NavigationMenuLink className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5">
                    Log out
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  onClick={handleToggle}
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
                  <NavigationMenuLink className="block rounded bg-primary py-2 pl-3 pr-4 text-primary-foreground lg:bg-background lg:p-0 lg:text-primary">
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
