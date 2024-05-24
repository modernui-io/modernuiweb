import Link from "next/link";

import {
  BadgeCheck,
  ChevronRight,
  ClipboardList,
  Fingerprint,
} from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface ListData {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

const ListData: ListData[] = [
  {
    icon: (
      <Fingerprint className="mx-auto mb-4 size-12 text-muted-foreground" />
    ),
    title: "Secure storage",
    description:
      "We store the vast majority of the digital assets in secure offline storage.",
    link: "Learn how to keep your funds safe",
  },
  {
    icon: (
      <ClipboardList className="mx-auto mb-4 size-12 text-muted-foreground" />
    ),
    title: "Secure storage",
    description:
      "We store the vast majority of the digital assets in secure offline storage.",
    link: "Learn how to keep your funds safe",
  },
  {
    icon: <BadgeCheck className="mx-auto mb-4 size-12 text-muted-foreground" />,
    title: "Secure storage",
    description:
      "We store the vast majority of the digital assets in secure offline storage.",
    link: "Learn how to keep your funds safe",
  },
];

export function FeatureListCTA() {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
        <Heading level={2} className="mb-4 font-extrabold tracking-tight">
          The most trusted cryptocurrency platform
        </Heading>
        <Text className="text-muted-foreground sm:text-xl">
          Here are a few reasons why you should choose Modernuiweb
        </Text>
        <div className="mt-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:mt-12 lg:grid-cols-3">
          {ListData.map(({ icon, title, description, link }) => (
            <div key={title}>
              {icon}
              <Heading level={3} className="mb-2 font-bold">
                {title}
              </Heading>
              <Text className="mb-4 text-muted-foreground">{description}</Text>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800"
              >
                {link}&nbsp;
                <ChevronRight className="ml-1 size-5" />
              </Link>
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}