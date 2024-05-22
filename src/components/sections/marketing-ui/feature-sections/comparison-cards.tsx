import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
//component imports
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

export function ComparisonCards() {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
          <div>
            <Heading level={2} className="mb-4 font-extrabold tracking-tight ">
              Compare Modernuiweb to other platforms on the market
            </Heading>
            <Text className="mb-4 text-muted-foreground sm:text-xl">
              Here we focus on markets where technology, innovation, and capital
              can unlock long-term value and drive economic growth.
            </Text>
            <Link
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700  sm:text-lg"
            >
              Learn what makes Modernuiweb different&nbsp;
              <svg
                className="ml-1 size-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="mb-6 flex items-center justify-between rounded-lg border-l-8 border-primary-600 bg-white p-4 shadow hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-muted-foreground ">
                  Simplicity and Affordability
                </span>
                <span className="text-xl font-semibold text-primary-600 ">
                  Modernuiweb vs Google
                </span>
              </div>
              <svg
                className="size-6 text-primary-600 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="mb-6 flex items-center justify-between rounded-lg border-l-8 border-purple-600 bg-white p-4 shadow hover:bg-gray-100 dark:border-purple-500 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-muted-foreground">
                  Built for customer support
                </span>
                <span className="text-xl font-semibold text-purple-600 dark:text-purple-500">
                  Microsoft vs Apple
                </span>
              </div>
              <svg
                className="size-6 text-purple-600 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between rounded-lg border-l-8 border-teal-600 bg-white p-4 shadow hover:bg-gray-100 dark:border-teal-500 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-muted-foreground">
                  Modern and intuitive ui
                </span>
                <span className="text-xl font-semibold text-teal-600 ">
                  Zendesk vs Meet
                </span>
              </div>
              <svg
                className="size-6 text-teal-600 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
