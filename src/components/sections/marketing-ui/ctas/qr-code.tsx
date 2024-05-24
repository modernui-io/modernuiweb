import Image from "next/image";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image Import
import QRcodeDark from "~/lib/assets/images/qr-code-dark.png";
import QRcode from "~/lib/assets/images/qr-code.png";

export function QRCodeCTASection() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading className="mb-4 font-extrabold tracking-tight">
            Trade. Anywhere.
          </Heading>
          <Text className="mb-6 text-muted-foreground md:text-lg lg:mb-8">
            Compatible with multiple devices, start trading with safety and
            convenience.
          </Text>
          <Image alt="" src={QRcode} className="mx-auto w-56 dark:hidden" />
          <Image
            alt=""
            src={QRcodeDark}
            className="mx-auto hidden w-56 dark:block"
          />
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
