import Link from "next/link";

import { BiWorld } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiServer, HiShoppingCart, HiUsers } from "react-icons/hi";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface Statistic {
  icon: JSX.Element;
  title: string;
  description: string;
}

const statisticsData: Statistic[] = [
  {
    icon: <HiServer className="mb-2 size-10 text-primary md:size-12" />,
    title: "99.99% uptime",
    description: "For Modern UI, with zero maintenance downtime",
  },
  {
    icon: <HiUsers className="mb-2 size-10 text-primary md:size-12" />,
    title: "600M+ Users",
    description: "Trusted by over 600 million users around the world",
  },
  {
    icon: <BiWorld className="mb-2 size-10  text-primary md:size-12" />,
    title: "100+ countries",
    description: "Have used Modern UI to create functional websites",
  },
  {
    icon: <HiShoppingCart className="mb-2 size-10 text-primary md:size-12" />,
    title: "5+ Million",
    description: "Transactions per day",
  },
];

export const StatisticsWithIconsAndCta = () => {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center px-4 py-8 lg:grid lg:grid-cols-4 lg:gap-16 lg:px-6 lg:py-16 xl:gap-24">
        <div className="col-span-2 mb-8">
          <Text className="text-lg font-medium text-primary">
            Trusted Worldwide
          </Text>
          <Heading
            level={2}
            className="mb-4 mt-3 text-3xl font-extrabold tracking-tight  md:text-4xl"
          >
            Trusted by over 600 million users and 10,000 teams
          </Heading>
          <Text className="font-light text-muted-foreground sm:text-xl">
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to protect you and your customers.
          </Text>
          <div className="mt-6 space-y-4 border-t pt-6 dark:border-primary-300">
            <div>
              <Link
                href="#"
                className="inline-flex items-center font-medium text-primary hover:text-foreground/80 "
              >
                Explore Legality Guide
                <FaArrowRightLong className="ml-1" />
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="inline-flex items-center font-medium text-primary hover:text-foreground/80"
              >
                Visit the Trust Center
                <FaArrowRightLong className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {statisticsData.map((statistic, index) => (
            <div key={index}>
              {statistic.icon}
              <Heading
                level={3}
                className="mb-2 text-2xl font-bold tracking-normal text-primary"
              >
                {statistic.title}
              </Heading>
              <Text className="font-light text-muted-foreground">
                {statistic.description}
              </Text>
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
