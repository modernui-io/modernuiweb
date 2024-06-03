import React from "react";

import * as MuiLayout from "~/components/layouts";
import { Card, CardTitle } from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface Statistic {
  value: string;
  heading: string;
  description: string;
}

const statisticsData: Statistic[] = [
  {
    value: "40%",
    heading: "Reduction",
    description: "in developer onboarding time",
  },
  {
    value: "469%",
    heading: "Return on investment ",
    description: " over 3 years",
  },
  {
    value: "60+",
    heading: "Minutes saved",
    description: "  per developer, per day",
  },
];

export const CardsWithStatistics = () => {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 xl:px-0">
        <div className="mx-auto mb-8 max-w-screen-md text-center md:mb-16">
          <Heading
            level={1}
            className="text-3xl font-extrabold tracking-tight  md:text-4xl"
          >
            Transformation by the numbers
          </Heading>
        </div>
        <div className="mb-4 space-y-4 md:mb-8 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 xl:gap-16">
          {statisticsData.map((statistic, index) => (
            <Card
              key={index}
              className="flex items-center justify-center rounded bg-muted p-6 text-center xl:p-12  "
            >
              <CardTitle>
                <Text className="mb-2 text-4xl font-extrabold md:text-5xl">
                  {statistic.value}
                </Text>
                <Text className="mb-2 text-xl font-semibold">
                  {statistic.heading}
                </Text>
                <Text className="font-light text-muted-foreground ">
                  {statistic.description}
                  {"  "}
                  <span className="font-medium text-primary">*</span>
                </Text>
              </CardTitle>
            </Card>
          ))}
        </div>
        <Text className="text-center text-sm font-light text-muted-foreground">
          <span className="font-medium text-primary">*</span> Results based on a
          composite organization of 1,800 developers using GitHub over three
          years.
        </Text>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
