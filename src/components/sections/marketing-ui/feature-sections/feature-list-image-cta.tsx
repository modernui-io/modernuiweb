import Image from "next/image";
import Link from "next/link";

import { ChevronRight, CodeXml, Lock } from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
//Image import
import OfficeImage from "~/lib/assets/images/feature-office-long.png";

interface ListData {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

// This icon is not available on Lucid/RadixUI
const DependencyIcon = () => (
  <svg
    className="size-5 "
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
    icon: <Lock className="size-5 text-muted-foreground" />,
    title: "Private repos",
    description: `Host code that you don't want to share with the world in private GitHub repos only accessible to you and people you share them with.`,
    color: "text-muted-foreground",
  },
  {
    icon: <DependencyIcon />,
    title: "Dependency graph",
    description: `See the packages your project depends on, the repositories that depend on them, and any vulnerabilities detected.`,
    color: "text-purple-600",
  },
  {
    icon: <CodeXml />,
    title: "Code scanning",
    description: `Find vulnerabilities in custom code using static analysis. Prevent new vulnerabilities from being introduced by scanning every pull request.`,
    color: "text-teal-600",
  },
];

export function FeatureListImageCTA() {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 lg:grid lg:grid-cols-2 lg:px-6 xl:gap-16">
        <Image
          alt=""
          src={OfficeImage}
          className="mb-4 w-full rounded-lg lg:mb-0"
        />
        <div className="text-muted-foreground sm:text-lg">
          <Heading level={2} className="mb-4 font-extrabold tracking-tight">
            Designed for business teams
          </Heading>
          <Text className="mb-8 text-primary-800 lg:text-lg">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </Text>
          <div className="my-6 border-y pb-8">
            {ListData.map(({ icon, title, description, color }) => (
              <div className="flex pt-8" key={title}>
                <div
                  className={`mr-4 flex size-8 shrink-0 items-center justify-center rounded-full bg-muted ${color}`}
                >
                  {icon}
                </div>
                <div>
                  <Heading level={4} className="mb-2 font-bold">
                    {title}
                  </Heading>
                  <Text className="mb-2 text-muted-foreground">
                    {description}
                  </Text>
                  <Link
                    href="#"
                    className={`inline-flex items-center text-lg hover:text-primary-800 ${color}`}
                  >
                    Learn more
                    <ChevronRight className="ml-1 size-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Text className="text-sm">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </Text>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
