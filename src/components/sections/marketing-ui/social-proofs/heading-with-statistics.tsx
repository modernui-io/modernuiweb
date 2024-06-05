import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface Statistic {
  mainText: string;
  description: string;
}
const statisticsData: Statistic[] = [
  {
    mainText: "$76 billion",
    description: "24h trading volume on Modern UI exchange",
  },
  {
    mainText: "600+",
    description: "Cryptocurrencies listed on our platform",
  },
  {
    mainText: "90 million",
    description: "Registered users who trust Modern UI",
  },
  {
    mainText: "<0.10%",
    description: "Lowest transaction fees",
  },
];

export const HeadingWithStatistics = () => {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <Heading level={1} className="mb-4 text-wrap font-bold tracking-tight">
          Sign up for our newsletter
        </Heading>
        <Text className="max-w-2xl font-light text-muted-foreground sm:text-xl">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </Text>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-20">
          {statisticsData.map((statistic, index) => (
            <div key={index} className="flex flex-col">
              <Text className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl">
                {statistic.mainText}
              </Text>
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
