import Link from "next/link";

import {
  BriefcaseBusiness,
  ChevronRight,
  CircleDollarSign,
  GalleryVerticalEnd,
} from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface FeatureText {
  icon: JSX.Element;
  title: string;
  description: string;
}

// This icon is not available in Lucid/RadixUI
const MarketingSVG = () => (
  <svg
    className="size-5 text-tremor-brand-emphasis lg:size-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const FeatureText: FeatureText[] = [
  {
    icon: <MarketingSVG />,
    title: "Marketing",
    description:
      "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
  },
  {
    icon: (
      <BriefcaseBusiness className="size-5 text-tremor-brand-emphasis lg:size-6" />
    ),
    title: "Business Automation",
    description:
      "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
  },
  {
    icon: (
      <CircleDollarSign className="size-5 text-tremor-brand-emphasis lg:size-6" />
    ),
    title: "Finance",
    description:
      "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
  },
  {
    icon: (
      <GalleryVerticalEnd className="size-5 text-tremor-brand-emphasis lg:size-6" />
    ),
    title: "Enterprise Design",
    description:
      "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
  },
];

export function FeatureListDescriptionIcons() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center px-4 py-8 sm:py-16 lg:grid lg:gap-8 lg:px-6 xl:grid-cols-3 xl:gap-24">
        <div className="mb-8 lg:mb-0">
          <Heading level={2} className="mb-4 font-extrabold tracking-tight">
            Designed for strong teams like yours
          </Heading>
          <Text className="mb-4 text-muted-foreground sm:text-xl">
            Here we focus on markets where creativity and innovation can unlock
            long-term value and growth.
          </Text>
          <Link
            href="#"
            className="inline-flex items-center text-lg font-medium text-tremor-brand-subtle hover:text-tremor-brand"
          >
            Learn more
            <ChevronRight className="ml-1 size-6" />
          </Link>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {FeatureText.map(({ icon, title, description }) => (
            <div key={title}>
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-tremor-brand-muted lg:size-12">
                {icon}
              </div>
              <Heading level={3} className="mb-2 font-bold">
                {title}
              </Heading>
              <Text className="text-muted-foreground">{description}</Text>
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
