import Image from "next/image";
import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import { Text } from "~/components/ui/custom/text";
import Logo from "~/lib/assets/images/logo.svg";

const links = [
  "About",
  "Premium",
  "Campaigns",
  "Blog",
  "Affiliate Program",
  "FAQs",
  "Contact",
];

export function DefaultFooterSection() {
  return (
    <footer className="bg-background p-4 md:p-8 lg:p-10">
      <MuiLayout.Container className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/#"
          className="flex items-center justify-center text-2xl font-semibold"
        >
          <Image
            src={Logo}
            alt="Company Logo"
            className="mr-2 h-8 dark:invert "
          />
        </Link>
        <Text className="my-6 text-muted-foreground">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </Text>
        <div className="mb-6 flex flex-wrap items-center justify-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href="/#"
              className="mr-4 hover:underline md:mr-6 "
            >
              {link}
            </Link>
          ))}
        </div>
        <Text className="text-sm text-muted-foreground sm:text-center">
          © 2021-2022{" "}
          <Link href="/#" className="hover:underline">
            Company™
          </Link>
          . All Rights Reserved.
        </Text>
      </MuiLayout.Container>
    </footer>
  );
}
