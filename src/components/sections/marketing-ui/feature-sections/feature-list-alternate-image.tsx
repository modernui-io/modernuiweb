import Image from "next/image";

import { CircleCheck } from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
//Image imports
import FeatureOffice1 from "~/lib/assets/images/feature-office-1.png";
import FeatureOffice2 from "~/lib/assets/images/feature-office-2.png";

const FeatureList1: string[] = [
  "Continuous integration and deployment",
  "Development workflow",
  "Knowledge management",
];

const FeatureList2: string[] = [
  "Dynamic reports and dashboards",
  "Templates for everyone",
  "Development workflow",
  "Limitless business automation",
  "Knowledge management",
];

export function FeatureListAlternateImage() {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 sm:py-16 lg:space-y-20 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-muted-foreground sm:text-lg">
            <Heading level={2} className="mb-4 font-extrabold tracking-tight">
              Work with tools you already use
            </Heading>
            <Text className="mb-8 lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </Text>
            <ul className="my-7 space-y-5 border-t border-border pt-8">
              {FeatureList1.map((feature, index) => (
                <li className="flex space-x-3" key={index}>
                  <CircleCheck className="size-5 shrink-0 text-tremor-brand-subtle" />
                  <span className="text-base font-medium leading-tight text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
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
            src={FeatureOffice1}
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
          />
        </div>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <Image
            height={507}
            width={584}
            alt=""
            src={FeatureOffice2}
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
          />
          <div className="text-muted-foreground sm:text-lg">
            <Heading
              level={2}
              className="mb-4 text-4xl font-extrabold tracking-tight"
            >
              We invest in the world’s potential
            </Heading>
            <Text className="mb-8 lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </Text>
            <ul className="my-7 space-y-5 border-t border-border pt-8">
              {FeatureList2.map((feature, index) => (
                <li className="flex space-x-3" key={index}>
                  <CircleCheck className="size-5 shrink-0 text-tremor-brand-subtle" />
                  <span className="text-base font-medium leading-tight text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
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
