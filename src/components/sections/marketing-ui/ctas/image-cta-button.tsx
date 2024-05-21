import Image from "next/image";

import * as MuiLayout from "~/components/layouts";
// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image Import
import Placeholder from "~/lib/assets/images/placeholder.jpg";

export function ImageWithCTAButtonSection() {
  return (
    <MuiLayout.Section className="bg-white dark:bg-gray-900">
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <Image
          alt=""
          src={Placeholder}
          className="size-full rounded-tl-3xl object-cover dark:hidden"
        />
        <Image
          alt=""
          src={Placeholder}
          className="hidden size-full rounded-tl-3xl object-cover dark:block"
        />
        <div className="mt-4 md:mt-0">
          <Heading
            level={2}
            className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Let's create more tools and ideas that brings us together.
          </Heading>
          <Text className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
            ModernUi Web helps you connect with friends and communities of
            people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups.
          </Text>
          <Button
            color="info"
            size="lg"
            className="w-fit [&>span]:items-center"
          >
            Get started
            <svg
              className="-mr-1 ml-2 size-4"
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
          </Button>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
