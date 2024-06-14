import { BriefcaseBusiness, CircleCheck, GraduationCap } from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface ListData {
  icon: JSX.Element;
  title: string;
  featurelist: string[];
  bgcolor: string;
  color: string;
}

// This icon is not available in Lucid/RadixUI
const MarketingSVG = () => (
  <svg
    className="size-5 text-primary-600 lg:size-8"
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

const ListData: ListData[] = [
  {
    icon: <MarketingSVG />,
    title: "Project Management",
    featurelist: [
      "Unified Contribution Graph",
      "Org activity graph",
      "Org dependency insights",
      "Milestones",
      "Repo insights",
    ],
    bgcolor: "bg-primary-200",
    color: "text-primary-600",
  },
  {
    icon: <GraduationCap className="size-5 text-purple-600 lg:size-8" />,
    title: "Collaborative Coding",
    featurelist: [
      "Dynamic reports and dashboards",
      "Code review assignments",
      "Team discussions",
      "Protected branches",
      "Draft pull requests",
    ],
    bgcolor: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    icon: <BriefcaseBusiness className="size-5 text-teal-600 lg:size-8" />,
    title: "Enterprise Security",
    featurelist: [
      "Required reviews",
      "Dependabot security and",
      "Dependency graph",
      "GitHub Advisory Database",
      "GPG commit signing verification",
    ],
    bgcolor: "bg-teal-100",
    color: "text-teal-600",
  },
];

export function FeatureListIcons() {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <Heading level={2} className="mb-4 font-extrabold tracking-tight">
            Secure platform, secure data
          </Heading>
          <Text className="text-muted-foreground sm:text-lg">
            Here at Modernuiweb we focus on markets where technology,
            innovation, and capital can unlock long-term value and drive
            economic growth.
          </Text>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 xl:gap-12">
          {ListData.map(({ icon, title, featurelist, bgcolor, color }) => (
            <div key={title}>
              <div
                className={`mb-4 flex size-10 items-center justify-center rounded ${bgcolor} lg:size-16`}
              >
                {icon}
              </div>
              <Heading level={4} className="mb-2 font-bold">
                {title}
              </Heading>
              <ul className="my-6 space-y-4 lg:mb-0">
                {featurelist.map((feature, index) => (
                  <li className="flex space-x-2.5" key={index}>
                    <CircleCheck className={`size-5 shrink-0 ${color}`} />
                    <span className="leading-tight text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
