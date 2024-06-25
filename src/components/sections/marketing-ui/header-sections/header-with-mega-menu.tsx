import Image from "next/image";
import Link from "next/link";

import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { HiChevronDown, HiChevronRight, HiSearch } from "react-icons/hi";

// Component
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { Separator } from "~/components/ui/separator";
// Image
import Logo from "~/lib/assets/images/logo.svg";

interface TopNavigation {
  label: string;
  link: string;
  mobileHidden: boolean;
  dropdown?: React.FC;
}

const companyMenuItems = [
  {
    label: "Online Stores",
    description: "Connect with third-party tools that you're already using.",
    link: "/#",
  },
  {
    label: "Audience Management",
    description: "Connect with third-party tools that you're already using.",
    link: "/#",
  },
  {
    label: "Dynamic Content",
    description: "Connect with third-party tools that you're already using.",
    link: "/#",
  },
  {
    label: "Segmentation",
    description: "Connect with third-party tools that you're already using.",
    link: "/#",
  },
  {
    label: "Creative Tools",
    description: "Connect with third-party tools that you're already using.",
    link: "/#",
  },
  {
    label: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    link: "/#",
  },
  {
    label: "Marketing CRM",
    description: "Connect with third-party tools that you're already using.",
    link: "/#",
  },
  {
    label: "Marketing Automation",
    description: "Connect with third-party tools that you're already using.",
    link: "/#",
  },
  {
    label: "Careers",
    description: "Connect with third-party tools that you're already using.",
    link: "/#",
  },
];

const brandsSection = {
  label: "Our brands",
  description:
    "At JBS Foods, we pride ourselves on a portfolio of brands that cater to a variety of preferences.",
  link: "/#",
};

const CompanyDropDown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="items-center bg-transparent">
          Company
          <HiChevronDown className="ml-1 size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-auto flex w-full max-w-none bg-background p-4 px-10 dark:bg-muted/50">
        <div className=" grid w-3/5 grid-cols-3 gap-4">
          {companyMenuItems.map((item, index) => (
            <div className="flex p-4" key={index}>
              <div>
                <HiChevronRight className="size-4" />
              </div>
              <div className="flex flex-col space-y-1">
                <Link href={item.link} legacyBehavior passHref>
                  <Text level={"sm"} className=" font-semibold">
                    {item.label}
                  </Text>
                </Link>
                <Text level={"xs"} className="text-muted-foreground">
                  {item.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-1/4 flex-col space-y-1">
          <Text level={"sm"} className="font-semibold">
            {brandsSection.label}
          </Text>
          <Text level={"xs"} className="w-3/5 text-muted-foreground">
            {brandsSection.description}
          </Text>
          <Link href={brandsSection.link} legacyBehavior passHref>
            <Text level={"xs"} className="text-xs font-medium text-blue-600">
              Explore our brands &rarr;
            </Text>
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const navLinks: TopNavigation[] = [
  { label: "Home", link: "/#", mobileHidden: false },
  {
    label: "Company",
    link: "/#",
    mobileHidden: false,
    dropdown: CompanyDropDown,
  },
  { label: "Marketplace", link: "/#", mobileHidden: false },
  { label: "Resources", link: "/#", mobileHidden: true },
  { label: "Contact", link: "/#", mobileHidden: true },
];

interface menuItemsWithIcon {
  label: string;
  icon: IconType;
}

interface socialIcons {
  icon: IconType;
  label: string;
}

const socialIcons: socialIcons[] = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaTiktok, label: "Tiktok" },
  { icon: FaTwitter, label: "Twitter" },
];

const productCategories = [
  { label: "Mockups" },
  { label: "Templates" },
  { label: "Design" },
  { label: "Logos" },
];

export function HeaderWithMegaMenu() {
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="mr-2 inline-flex items-center rounded-lg bg-secondary/30 p-2.5 text-sm font-medium text-muted-foreground/60 hover:bg-secondary/30 focus:outline-none focus:ring-4 focus:ring-muted-foreground/60 dark:bg-muted-foreground/30 dark:text-muted-foreground/60 dark:focus:ring-muted-foreground/10 lg:px-5">
                  <USFlagIcon />
                  English
                  <HiChevronDown className="ml-1 size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="z-50 my-4 w-48 list-none divide-y divide-secondary-foreground/10 rounded bg-white py-1 text-base shadow dark:bg-muted-foreground/20"
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
            <Link
              href="/#"
              className="mr-2 hidden text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 sm:inline"
            >
              Login
            </Link>
            <Separator className="ml-2 mr-0 h-5 w-px bg-muted-foreground/70 dark:bg-muted-foreground/30 lg:ml-5 lg:mr-3 lg:inline" />
            {socialIcons.map((item) => (
              <Link
                key={item.label}
                href="/#"
                className="inline-flex items-center rounded-lg p-2 text-sm font-medium text-muted-foreground hover:bg-secondary/30 dark:hover:bg-muted-foreground/30"
              >
                <item.icon />
              </Link>
            ))}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="max-w-none bg-secondary/30 dark:bg-muted">
        <div className="ml-0 flex w-full items-center justify-between px-4 py-3 md:px-6">
          <NavigationMenuList className="mt-0 flex flex-row space-x-8 text-xs font-medium sm:mr-6 sm:text-sm">
            {navLinks.map((nav) => (
              <NavigationMenuItem
                key={nav.label}
                className={`${nav.mobileHidden ? "hidden md:inline" : ""}`}
              >
                {nav.dropdown ? (
                  <nav.dropdown />
                ) : (
                  <Link href={nav.link} legacyBehavior passHref>
                    <NavigationMenuLink className="hover:underline">
                      {nav.label}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <div className="flex w-1/2 items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="hidden w-44 shrink-0 items-center rounded-l-lg rounded-r-none border border-muted-foreground/20 bg-transparent px-4 py-2.5 text-center text-sm font-medium text-black hover:bg-muted-foreground/70 focus:outline-none focus:ring-4 focus:ring-secondary-foreground/10 dark:border-muted-foreground/30 dark:text-white dark:focus:ring-muted-foreground/20 lg:inline-flex">
                  All Categories
                  <HiChevronDown className="ml-1 size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="py-1 text-sm text-muted-foreground/20">
                {productCategories.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="block px-4 py-2 text-black hover:bg-muted-foreground/30 dark:text-white"
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative flex w-full">
              <Input
                type="search"
                id="search-dropdown"
                placeholder="Search Anything"
                required
                className="block w-full rounded-r-none border border-muted-foreground/30  bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:placeholder:text-muted-foreground dark:focus:border-primary-500"
              />
              <Button className="flex items-center justify-center rounded-l-none rounded-r-lg bg-primary p-2.5 text-sm font-medium text-primary-foreground">
                <HiSearch className="size-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </NavigationMenu>
    </header>
  );
}

function USFlagIcon() {
  return (
    <svg
      aria-hidden
      className="size-4 rounded-full"
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
      className="size-4 rounded-full"
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
      className="size-4 rounded-full"
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
      className="size-4 rounded-full"
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
