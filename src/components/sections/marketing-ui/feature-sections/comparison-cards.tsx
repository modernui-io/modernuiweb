import Link from "next/link";

import { ArrowRight, ChevronRight } from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface ListData {
  title: string;
  subtitle: string;
  color: string;
  borderColor: string;
}

const ListData: ListData[] = [
  {
    title: "Modernuiweb vs Google",
    subtitle: "Simplicity and Affordability",
    color: "text-primary-600",
    borderColor: "border-primary-600",
  },
  {
    title: " Microsoft vs Apple",
    subtitle: "Built for customer support",
    color: "text-purple-600",
    borderColor: "border-purple-600",
  },
  {
    title: "Zendesk vs Meet",
    subtitle: "Modern and intuitive ui",
    color: "text-teal-600",
    borderColor: "border-teal-600",
  },
];

export function ComparisonCards() {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
          <div>
            <Heading level={1} className="mb-4 font-extrabold tracking-tight">
              Compare Modernuiweb to other platforms on the market
            </Heading>
            <Text className="mb-4 text-muted-foreground sm:text-lg">
              Here we focus on markets where technology, innovation, and capital
              can unlock long-term value and drive economic growth.
            </Text>
            <Link
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 sm:text-lg"
            >
              Learn what makes Modernuiweb different&nbsp;
              <ChevronRight className="ml-1 size-5" />
            </Link>
          </div>
          <div>
            {ListData.map(({ subtitle, title, color, borderColor }) => (
              <Link
                key={title}
                href="#"
                className={`mb-6 flex items-center justify-between rounded-lg border-l-8 ${borderColor} bg-primary-50 p-4 shadow hover:bg-muted`}
              >
                <div>
                  <span className="mb-1 block text-xs font-medium uppercase text-muted-foreground">
                    {subtitle}
                  </span>
                  <span className={`text-xl font-semibold ${color}`}>
                    {title}
                  </span>
                </div>
                <ArrowRight className={`size-6 ${color}`} />
              </Link>
            ))}
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
