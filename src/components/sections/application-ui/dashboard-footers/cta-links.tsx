import Link from "next/link";

import { HiExternalLink } from "react-icons/hi";

import { Text } from "~/components/ui/custom/text";

export function FooterWithCTAAndLinks() {
  return (
    <footer className="rounded-lg bg-background p-4 antialiased shadow md:p-6 xl:flex xl:items-center xl:justify-between xl:p-8">
      <div className="mb-3 flex items-center font-light text-gray-500 dark:text-gray-400 xl:mb-0">
        <Text>Looking for language selection?</Text>
        <Link
          href="#"
          className="ml-1 flex items-center font-medium hover:underline"
        >
          Unified Settings
          <HiExternalLink className="ml-1 size-3.5" />
        </Link>
      </div>
      <div className="space-y-4 sm:flex sm:items-center sm:justify-between sm:space-y-0">
        <ul className="flex flex-wrap items-center">
          <li>
            <Link
              href="#"
              className="mr-4 underline hover:no-underline md:mr-6"
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="mr-4 underline hover:no-underline md:mr-6"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="mr-4 underline hover:no-underline md:mr-6"
            >
              Cookies
            </Link>
          </li>
        </ul>
        <Text className="text-sm text-gray-500 dark:text-gray-400">
          Copyright &copy; 2022{" "}
          <Link
            href="https://modernui.com/"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            ModernUI
          </Link>
          . All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
