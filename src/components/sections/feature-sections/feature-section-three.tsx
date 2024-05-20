import Image from "next/image";

import * as MuiLayout from "~/components/layouts";
//component imports
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

export function FeatureSection() {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 sm:py-16 lg:space-y-20 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <Heading
              level={2}
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              Work with tools you already use
            </Heading>
            <Text className="mb-8 lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </Text>
            <ul className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700">
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Continuous integration and deployment
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Development workflow
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Knowledge management
                </span>
              </li>
            </ul>
            <Text className="mb-8 lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </Text>
          </div>
          <Image
            height={507}
            width={584}
            alt=""
            src=""
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
          />
        </div>

        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            height={507}
            width={584}
            alt=""
            src=""
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
          />
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <Heading
              level={2}
              className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
            >
              We invest in the world’s potential
            </Heading>
            <Text className="mb-8 lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </Text>

            <ul className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700">
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Dynamic reports and dashboards
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Templates for everyone
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Development workflow
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Limitless business automation
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="size-5 shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Knowledge management
                </span>
              </li>
            </ul>
            <Text className="lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </Text>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
