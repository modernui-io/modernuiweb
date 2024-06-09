// Components
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

const highlights = [
  { heading: "73M+", subHeading: "developers" },
  { heading: "1B+", subHeading: "contributors" },
  { heading: "4M+", subHeading: "organizations" },
];

export function SocialContent() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <Heading
          level={"mdDisplay"}
          className="mb-4 text-wrap text-4xl font-bold tracking-tight md:text-5xl"
        >
          Home to the software teams
        </Heading>
        <Text className="mb-4 font-light text-muted-foreground sm:text-lg md:px-20 lg:px-36 xl:px-48">
          Meet your developers where they already are. GitHub is home to over 40
          million developers and the world’s largest open source community.
        </Text>
        <dl className="mx-auto mt-8 grid max-w-screen-md grid-cols-2 gap-8 sm:grid-cols-3 lg:mt-14">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="mb-4 flex flex-col items-center justify-center"
            >
              <Heading
                level={1}
                className="mb-2 text-4xl font-bold tracking-tight"
              >
                {highlight.heading}
              </Heading>
              <Text
                level="xlTall"
                className="text-center font-normal text-muted-foreground"
              >
                {highlight.subHeading}
              </Text>
            </div>
          ))}
        </dl>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
