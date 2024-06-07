import Image from "next/image";
import Link from "next/link";

import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { Text } from "~/components/ui/custom/text";
import Logo from "~/lib/assets/images/logo.svg";

const socialMediaLinks = [
  { href: "/#", icon: FaFacebook },
  { href: "/#", icon: FaInstagram },
  { href: "/#", icon: FaTwitter },
  { href: "/#", icon: FaGithub },
  { href: "/#", icon: FaDribbble },
];

interface LinkItem {
  href: string;
  label: string;
}

interface SectionProps {
  title: string;
  links: LinkItem[];
}

const sections: SectionProps[] = [
  {
    title: "Resources",
    links: [
      { href: "/#", label: "Company" },
      { href: "/#", label: "Tailwind CSS" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { href: "/#", label: "Github" },
      { href: "/#", label: "Discord" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/#", label: "Privacy Policy" },
      { href: "/#", label: "Terms & Conditions" },
    ],
  },
];

export function SitemapLogoSocialMedia() {
  return (
    <footer className="bg-background p-4 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/#" className="flex items-center">
              <Image
                src={Logo}
                className="mr-3 h-8 dark:invert"
                alt="Company Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            {sections.map((section, index) => (
              <div key={section.title}>
                <Text className="mb-6 text-sm font-semibold uppercase">
                  {section.title}
                </Text>
                <ul className="text-muted-foreground">
                  {section.links.map((link, index) => (
                    <li key={index} className="mb-4">
                      <Link href={link.href} className="hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-primary-300 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <Text className="text-sm text-muted-foreground sm:text-center">
            © 2022{" "}
            <Link href="/#" className="hover:underline">
              Company™
            </Link>
            . All Rights Reserved.
          </Text>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {socialMediaLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-muted-foreground/90 dark:hover:text-tremor-background-muted"
              >
                <link.icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
