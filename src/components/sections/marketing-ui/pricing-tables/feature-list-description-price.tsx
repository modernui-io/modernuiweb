import Link from "next/link";

// Icons
import { FaCheckCircle, FaMobile } from "react-icons/fa";
import { HiOfficeBuilding, HiPresentationChartBar } from "react-icons/hi";
import { MdPeople } from "react-icons/md";

// Components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

const analysisLinks = [
  {
    heading: "Industry analysis",
    description:
      "Benchmark your company against the industry to inform your growth strategy and analyze market trends.",
    icon: HiPresentationChartBar,
  },
  {
    heading: "Company analysis",
    description:
      "Uncover competitor digital strategies and deep dive into any company's digital footprint.",
    icon: HiOfficeBuilding,
  },
  {
    heading: "App analysis",
    description:
      "Analyze app industry trends and discover audience interests to learn which apps are gaining traction in the app ecosystem.",
    icon: FaMobile,
  },
  {
    heading: "Audience analysis",
    description:
      "Benchmark your company against the industry to inform your growth strategy and analyze market trends.",
    icon: MdPeople,
  },
];

const featureListsForProPlan = [
  [
    "A/B Testing",
    "24/7 Email & Chat Support",
    "Custom Branding",
    "Creative Assistant",
    "Website Builder",
  ],
  [
    "Advanced Segmentation",
    "Multivariate Testing",
    "Comparative Reporting",
    "Custom Templates",
    "Dynamic Content",
  ],
];

export function FeatureListDescriptionPricingCard() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16 xl:gap-16">
        <div className="text-muted-foreground sm:text-lg">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Why you should upgrade to Modern UI Pro
          </Heading>
          <Text className="mb-8 font-light text-muted-foreground lg:text-xl">
            Here we focus on markets where technology, innovation, and capital
            can unlock long-term value.
          </Text>
          <div className="grid gap-8 border-t py-8  sm:grid-cols-2 lg:grid-cols-1">
            {analysisLinks.map((link, index) => (
              <div key={index} className="flex">
                <div className="mr-4 flex size-12 shrink-0 items-center justify-center rounded border-muted shadow dark:bg-muted">
                  <Link key={index} href="/#">
                    <link.icon className="size-7 text-muted-foreground" />
                  </Link>
                </div>
                <div>
                  <Heading
                    level={3}
                    className="mb-1 text-xl font-bold tracking-normal text-secondary-foreground"
                  >
                    {link.heading}
                  </Heading>
                  <Text className="font-light text-muted-foreground md:text-lg">
                    {link.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col rounded-lg border-muted bg-background p-6 shadow dark:bg-secondary xl:p-8">
          <div className="items-center justify-between md:flex">
            <div>
              <div className="mb-2 flex justify-between">
                <Heading
                  level={3}
                  className="text-2xl font-bold text-secondary-foreground"
                >
                  Pro Plan
                </Heading>
                <div className="flex items-center md:hidden">
                  <div className="mr-1 text-xl font-extrabold lg:text-5xl">
                    $599
                  </div>
                  <Text className="text-muted-foreground">/month</Text>
                </div>
              </div>
              <Text className="text-lg font-light text-muted-foreground md:mr-2">
                Best for large scale uses and extended redistribution rights.
              </Text>
            </div>
            <div className="hidden md:block">
              <Text className="text-2xl font-extrabold lg:text-5xl">$599</Text>
              <Text className="text-muted-foreground">per month</Text>
            </div>
          </div>

          <Button className="my-8 h-auto w-full px-5 py-2.5">
            <Link
              href="/#"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-center text-sm font-medium focus:outline-none focus:ring-4"
            >
              Upgrade Now
            </Link>
          </Button>

          <div className="justify-between space-y-4 sm:flex sm:space-y-0">
            {featureListsForProPlan.map((featureList, index) => (
              <ul key={index} className="space-y-4">
                {featureList.map((feature, index) => (
                  <li key={index} className="flex space-x-2.5">
                    <FaCheckCircle className="size-5 shrink-0 text-green-500" />

                    <Text className="font-light leading-tight text-muted-foreground">
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
