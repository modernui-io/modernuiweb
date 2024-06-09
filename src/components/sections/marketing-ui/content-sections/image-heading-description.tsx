import Image from "next/image";

// Components
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image
import OfficePhoto1 from "~/lib/assets/images/office-long-1.png";
import OfficePhoto2 from "~/lib/assets/images/office-long-2.png";

export function ImageHeadingDescription() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 md:grid md:grid-cols-2 md:px-6 md:py-16">
        <div>
          <Heading level={1} className="mb-4 font-bold tracking-tight">
            We didn&apos;t reinvent the wheel
          </Heading>
          <Text className="mb-4 font-light text-muted-foreground sm:text-lg">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </Text>
          <Text className="font-light text-muted-foreground sm:text-lg">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick
          </Text>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Image
            src={OfficePhoto2}
            className="w-full rounded-lg"
            alt={"content-1"}
          />
          <Image
            src={OfficePhoto1}
            className="mt-4 w-full rounded-lg lg:mt-10"
            alt={"content-2"}
          />
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
