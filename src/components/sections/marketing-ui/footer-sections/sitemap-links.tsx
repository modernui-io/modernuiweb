import Image from "next/image";
import Link from "next/link";

// Icons
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// Component
import * as MuiLayout from "~/components/layouts";
import { Text } from "~/components/ui/custom/text";
import { Separator } from "~/components/ui/separator";
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
  text: string;
}

interface SectionProps {
  title: string;
  links: LinkItem[];
}

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

export function SitemapLinks() {
  return (
    <footer className="bg-background p-4 sm:p-6">
      <MuiLayout.Container className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {sections.map((section, index) => (
            <div key={`${section.title}-${index}`}>
              <Text className="mb-6 text-sm font-semibold uppercase">
                {section.title}
              </Text>
              <ul className="text-muted-foreground">
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
        <Separator className="my-6 sm:mx-auto lg:my-8" />
        <div className="text-center">
          <Link
            href="/#"
            className="mb-5 flex items-center justify-center text-2xl font-semibold"
          >
            <Image
              src={Logo}
              className="mr-2 h-8 dark:invert"
              alt="Company Logo"
            />
          </Link>
          <Text className="block text-center text-sm text-muted-foreground">
            © 2021-2022{" "}
            <Link href="/#" className="hover:underline">
              Company™
            </Link>
            . All Rights Reserved.
          </Text>
          <ul className="mt-5 flex justify-center space-x-5">
            {socialMediaLinks.map((link, index) => (
              <Link
                key={`${link.href}-${index}`}
                href={link.href}
                className="text-muted-foreground hover:text-tremor-content-strong dark:hover:text-dark-tremor-content-strong"
              >
                <link.icon className="size-4" />
              </Link>
            ))}
          </ul>
        </div>
      </MuiLayout.Container>
    </footer>
  );
}
