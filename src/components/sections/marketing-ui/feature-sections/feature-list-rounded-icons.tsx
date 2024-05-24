import { ArrowRight, Bell, Calculator, Cloud, Settings } from "lucide-react";

//component imports
import { Button } from "~/components/ui/button";
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface CardText {
  icon: JSX.Element;
  title: string;
  description: string;
}

//This Icon is not available in Lucid/RadixUI
const BudgetIcon = () => (
  <svg
    aria-hidden="true"
    className="size-10 text-muted-foreground lg:size-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

//This Icon is not available in Lucid/RadixUI
const ReportIcon = () => (
  <svg
    aria-hidden="true"
    className="size-10 text-muted-foreground lg:size-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
    />
  </svg>
);

const CardData: CardText[] = [
  {
    icon: <Settings className="size-10 lg:size-12" />,
    title: "Automatic categorization",
    description:
      "Flow Budget automatically categorizes your income and expenses, making it easy to track where your money is going.",
  },
  {
    icon: <Calculator className="size-10 lg:size-12" />,
    title: "Budgeting methods",
    description:
      "The app offers a variety of budgeting methods, such as 50/30/20 rule, to help users find the approach that works best for them.",
  },
  {
    icon: <BudgetIcon />,
    title: "Budget goals",
    description:
      "Set budget goals for each category and get real-time updates on how close you are to reaching them.",
  },
  {
    icon: <ReportIcon />,
    title: "Reports and Analytics",
    description:
      "We provide detailed reports and analytics that help users understand their spending habits, and make more informed financial decisions.",
  },
  {
    icon: <Cloud className="size-10 lg:size-12" />,
    title: "Cloud synchronization",
    description:
      "Synch your data across multiple devices, so you can access your budget and expenses from anywhere, at any time, and on any device.",
  },
  {
    icon: <Bell className="size-10 lg:size-12" />,
    title: "Alerts and notifications",
    description:
      "Flow budget will alert you if you are over-budgeting, and remind you of upcoming bills, so you'll never miss a payment again.",
  },
];

export function FeatureSectionsRoundedIcons() {
  return (
    <MuiLayout.Section className="bg-background antialiased ">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            level={2}
            className=" font-extrabold leading-tight tracking-tight sm:text-4xl"
          >
            Designed for business teams like yours
          </Heading>
          <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-xl">
            Here we focus on markets where technology, innovation, and capital
            can unlock long-term value and drive economic growth.
          </Text>
        </div>
        <div className="mt-8 rounded-lg bg-primary-50 p-4 sm:p-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
            {CardData.map(({ icon, title, description }) => (
              <div
                className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5"
                key={title}
              >
                <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground lg:size-24 ">
                  {icon}
                </div>
                <div>
                  <Heading
                    level={3}
                    className="text-xl font-bold text-secondary-foreground sm:text-2xl"
                  >
                    {title}
                  </Heading>
                  <Text className="mt-2 text-base font-normal text-muted-foreground sm:text-lg">
                    {description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center text-center lg:mt-16">
          <Button className="w-fit">
            Get a demo
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
