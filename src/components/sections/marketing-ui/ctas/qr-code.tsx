import Image from "next/image";

import * as MuiLayout from "~/components/layouts";
// Components Import
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image Import
import Placeholder from "~/lib/assets/images/placeholder.jpg";

export function QRCodeCTASection() {
  return (
    <MuiLayout.Section className="bg-white dark:bg-gray-900">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Trade. Anywhere.
          </Heading>
          <Text className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8">
            Compatible with multiple devices, start trading with safety and
            convenience.
          </Text>
          <Image
            alt=""
            src={Placeholder}
            className="mx-auto w-56 dark:hidden"
          />
          <Image
            alt=""
            src={Placeholder}
            className="mx-auto hidden w-56 dark:block"
          />
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
