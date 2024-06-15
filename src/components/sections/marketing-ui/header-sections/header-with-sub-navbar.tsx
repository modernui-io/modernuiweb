import Image from "next/image";
import Link from "next/link";

import { HiDotsHorizontal } from "react-icons/hi";

// Component
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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

const navLinks = [
  { label: "Home", link: "/#", mobileHidden: false },
  { label: "Company", link: "/#", mobileHidden: false },
  { label: "Team", link: "/#", mobileHidden: false },
  { label: "Features", link: "/#", mobileHidden: false },
  { label: "Marketplace", link: "/#", mobileHidden: true },
  { label: "Resources", link: "/#", mobileHidden: true },
  { label: "Forum", link: "/#", mobileHidden: true },
  { label: "Support", link: "/#", mobileHidden: true },
];

export function HeaderWithSubNavbar() {
  return (
    <header>
      <NavigationMenu className="block max-w-none border-muted-foreground/10 bg-background dark:bg-muted/50">
        <NavigationMenuList className="mx-auto flex flex-wrap items-center justify-between px-4 py-2.5">
          <Link href="/#" className="flex items-center">
            <Image
              src={Logo}
              className="mr-1 h-6 w-fit sm:mr-3 sm:h-9"
              alt="Company Logo"
            />
            <span className="self-center whitespace-nowrap font-semibold dark:text-white sm:text-xl">
              Company
            </span>
          </Link>
          <div className="flex items-center">
            <Link
              href="/#"
              className="mr-6 hidden text-sm font-medium hover:underline sm:inline"
            >
              (555) 412-1234
            </Link>
            <Link
              href="/#"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 sm:mr-6"
            >
              Contact us
            </Link>
            <Link
              href="/#"
              className="mr-2 hidden text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 sm:inline"
            >
              Login
            </Link>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="max-w-none bg-secondary/30 dark:bg-muted">
        <div className="mx-auto ml-0 px-4 py-3 md:px-6">
          <div className="items-center">
            <NavigationMenuList className="mt-0 flex flex-row space-x-8 text-xs font-medium sm:mr-6 sm:text-sm">
              {navLinks.map((nav) => (
                <NavigationMenuItem
                  key={nav.label}
                  className={`${nav.mobileHidden ? "hidden md:inline" : ""}`}
                >
                  <Link href={nav.link} legacyBehavior passHref>
                    <NavigationMenuLink className="hover:underline">
                      {nav.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full bg-secondary/30 p-1.5 text-sm text-muted-foreground hover:bg-muted-foreground/30 focus:outline-none focus:ring-4 focus:ring-muted-foreground/10 dark:bg-muted-foreground/20 dark:hover:bg-muted-foreground/30 dark:focus:ring-muted-foreground/20 md:hidden">
                    <HiDotsHorizontal className="size-5 text-muted-foreground/20 dark:text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="py-1 text-sm text-muted-foreground/20 dark:text-muted-foreground/10 md:hidden"
                  align="end"
                >
                  {[
                    "Marketplace",
                    "Dashboard",
                    "Resources",
                    "Forum",
                    "Support",
                  ].map((menulink, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="block px-4 py-2 hover:bg-muted-foreground/30 dark:hover:bg-muted-foreground/30 dark:hover:text-white"
                    >
                      {menulink}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuList>
          </div>
        </div>
      </NavigationMenu>
    </header>
  );
}
