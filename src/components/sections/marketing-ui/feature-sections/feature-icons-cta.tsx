import Link from "next/link";

import { ChevronRight, PieChart } from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface FeatureData {
  icon: JSX.Element;
  title: string;
  description: string;
  bgcolor: string;
}

const CubeIcon = () => (
  <svg
    className="mx-auto size-16 text-purple-600"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
      clipRule="evenodd"
    />
  </svg>
);

const FeatureData: FeatureData[] = [
  {
    icon: <PieChart className="mx-auto size-16 text-muted-foreground" />,
    title: "Just the right balance for growth",
    description:
      "Enterprise tools cost more, are difficult to use, and take longer to implement. According to G2, Modernuiweb is the easiest-to-use tool, with the fastest time to ROI.",
    bgcolor: "bg-muted",
  },
  {
    icon: <CubeIcon />,
    title: "Just the right balance for growth",
    description:
      "Enterprise tools cost more, are difficult to use, and take longer to implement. According to G2, Modernuiweb is the easiest-to-use tool, with the fastest time to ROI.",
    bgcolor: "bg-purple-100",
  },
];

export function FeatureIconsCta() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
        <Heading level={2} className="mb-4 font-extrabold tracking-tight">
          Designed for business teams like yours
        </Heading>
        <Text className="text-muted-foreground sm:text-xl lg:px-48">
          Here we focus on markets where technology, innovation, and capital can
          unlock long-term value and drive economic growth.
        </Text>
        <div className="my-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:mt-16">
          {FeatureData.map(({ icon, title, description, bgcolor }, index) => (
            <div key={index}>
              <div
                className={`mb-6 inline-flex size-24 items-center justify-center ${bgcolor} rounded-lg`}
              >
                {icon}
              </div>
              <Heading level={3} className="mb-4  font-bold">
                {title}
              </Heading>
              <Text className="mb-4 text-muted-foreground">{description}</Text>
            </div>
          ))}
        </div>
        <Text className="text-center">
          <Link
            href="#"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800"
          >
            Learn what makes Modernuiweb different&nbsp;
            <ChevronRight className="ml-1 size-5" />
          </Link>
        </Text>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
