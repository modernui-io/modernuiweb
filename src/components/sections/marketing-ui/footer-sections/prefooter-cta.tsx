import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HiChevronDown } from "react-icons/hi";

import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Logo from "~/lib/assets/images/logo.svg";

interface LinkItem {
  href: string;
  text: string;
}

interface SectionProps {
  title: string;
  links: LinkItem[];
}

const languages = ["English", "German", "Spanish", "French"];
const sections: SectionProps[] = [
  {
    title: "Company",
    links: [
      { href: "/#", text: "About" },
      { href: "/#", text: "Careers" },
      { href: "/#", text: "Brand Center" },
      { href: "/#", text: "Blog" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { href: "/#", text: "Discord Server" },
      { href: "/#", text: "Twitter" },
      { href: "/#", text: "Facebook" },
      { href: "/#", text: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/#", text: "Privacy Policy" },
      { href: "/#", text: "Licensing" },
      { href: "/#", text: "Terms" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#", text: "About" },
      { href: "/#", text: "Careers" },
      { href: "/#", text: "Brand Center" },
      { href: "/#", text: "Blog" },
    ],
  },
  {
    title: "Download",
    links: [
      { href: "/#", text: "iOS" },
      { href: "/#", text: "Android" },
      { href: "/#", text: "Windows" },
      { href: "/#", text: "MacOS" },
    ],
  },
];

const Section: React.FC<SectionProps> = ({ title, links }) => (
  <div>
    <Text className="mb-6 text-sm font-semibold uppercase">{title}</Text>
    <ul className="text-muted-foreground dark:text-white/60">
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <Link href={link.href} className="hover:underline">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export function PreFooterCTA() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-screen-xl p-4 sm:p-8 lg:p-10">
        <Text className="text-center text-3xl font-bold leading-tight">
          Feel connected anytime, anywhere.
        </Text>
        <div className="my-6 flex items-center justify-center">
          <Link
            href="#"
            className="mb-2 mr-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 dark:text-dark-tremor-content-strong dark:focus:ring-primary/85"
          >
            Recieve News
          </Link>
          <Link
            href="#"
            className="mb-2 mr-2 rounded-lg border border-primary-300 bg-background px-5 py-2.5 text-sm font-medium text-tremor-content-strong hover:bg-tremor-background-subtle hover:text-primary focus:z-10 focus:outline-none focus:ring-4 focus:ring-tremor-background-subtle dark:text-muted-foreground dark:hover:bg-background dark:hover:text-dark-tremor-content-strong dark:focus:ring-background/50"
          >
            Contact us
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:mt-16 sm:grid-cols-3 sm:space-y-0 lg:grid-cols-5">
          {sections.map((section, index) => (
            <div key={index}>
              <Text className="mb-6 text-sm font-semibold uppercase">
                {section.title}
              </Text>
              <ul className="text-muted-foreground dark:text-white/60">
                {section.links.map((link, index) => (
                  <li key={index} className="mb-4">
                    <Link href={link.href} className="hover:underline">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-primary/20 sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center justify-between text-center lg:flex-row">
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
          <Text className="mb-6 block text-sm text-muted-foreground lg:mb-0">
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
