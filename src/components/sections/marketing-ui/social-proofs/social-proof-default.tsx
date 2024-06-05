import React from "react";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

interface SocialProofItem {
  number: string;
  text: string;
}

const socialProofData: SocialProofItem[] = [
  { number: "73M+", text: "developers" },
  { number: "1B+", text: "contributors" },
  { number: "4M+", text: "organizations" },
];

export const SocialProofDefault = () => {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div className="mx-auto grid max-w-screen-md gap-8 sm:grid-cols-3">
          {socialProofData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Heading
                level={1}
                className="mb-4 text-wrap font-bold tracking-tight"
              >
                {item.number}
              </Heading>
              <Text className="font-light text-muted-foreground">
                {item.text}
              </Text>
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
