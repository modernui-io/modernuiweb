import Image from "next/image";
import Link from "next/link";

// Icon
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// Component
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
    title: "Download",
    links: [
      { href: "/#", text: "iOS" },
      { href: "/#", text: "Android" },
      { href: "/#", text: "Windows" },
      { href: "/#", text: "MacOS" },
    ],
  },
];

export function OriginalFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2">
            <Link
              href="/#"
              className="mb-2 flex items-center text-2xl font-semibold sm:mb-0"
            >
              <Image
                src={Logo}
                alt="Company Logo"
                className="mr-2 h-8 dark:invert "
              />
            </Link>
            <Text className="my-4 font-light text-muted-foreground">
              Company is a open-source library of over 400+ web components and
              interactive elements built with the utility classes from Tailwind
              CSS.
            </Text>
            <ul className="mt-5 flex space-x-6">
              {socialMediaLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-tremor-content-strong dark:hover:text-dark-tremor-content-strong"
                >
                  <link.icon className="size-4" />
                </Link>
              ))}
            </ul>
          </div>
          {sections.map((section, index) => (
            <div key={index} className="lg:mx-auto">
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
        <Separator className="my-6 border-primary-300 sm:mx-auto lg:my-8 " />
        <span className="block text-center text-sm text-muted-foreground">
          © 2021-2022{" "}
          <Link href="/#" className="hover:underline">
            Company™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
