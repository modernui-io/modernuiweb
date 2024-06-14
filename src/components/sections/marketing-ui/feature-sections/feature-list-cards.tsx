import {
  BriefcaseBusiness,
  CircleDollarSign,
  GalleryVerticalEnd,
  GraduationCap,
  Settings,
} from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
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
      <GraduationCap className="size-5 text-tremor-brand-emphasis lg:size-6" />
    ),
    title: "Legal",
    description:
      "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
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
  {
    icon: <Settings className="size-5 text-tremor-brand-emphasis lg:size-6" />,
    title: "Operations",
    description:
      "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
  },
  {
    icon: (
      <GalleryVerticalEnd className="size-5 text-tremor-brand-emphasis lg:size-6" />
    ),
    title: "Enterprise Design",
    description:
      "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
  },
  {
    icon: <Settings className="size-5 text-tremor-brand-emphasis lg:size-6" />,
    title: "Operations",
    description:
      "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
  },
];

export function FeatureListCards() {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
          <Heading level={1} className="mb-4 font-extrabold tracking-tight">
            Secure platform, secure data
          </Heading>
          <Text className="text-muted-foreground sm:text-lg">
            Here at Modernuiweb we focus on markets where technology,
            innovation, and capital can unlock long-term value and drive
            economic growth.
          </Text>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {FeatureText.map(({ icon, title, description }, index) => (
            <Card key={index} className="rounded bg-muted p-5">
              <CardHeader className="p-0 pb-2">
                <div className="mb-1 flex size-10 items-center justify-center rounded bg-tremor-brand-muted lg:size-12">
                  {icon}
                </div>
                <Heading level={5} className="font-bold tracking-tight">
                  {title}
                </Heading>
              </CardHeader>
              <CardContent className="p-0">
                <Text className="text-wrap text-lg text-muted-foreground">
                  {description}
                </Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
