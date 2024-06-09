import Image from "next/image";
import Link from "next/link";

// Icons
import { ChevronRight } from "lucide-react";

// Components
import * as MuiLayout from "~/components/layouts";
import { Card, CardContent } from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image
import OfficeContent1 from "~/lib/assets/images/office-content-1.png";
import OfficeContent2 from "~/lib/assets/images/office-content-2.png";
import OfficeContent3 from "~/lib/assets/images/office-content-3.png";

const Cards = [
  {
    imgSrc: OfficeContent1,
    heading: "Build as one team",
    description:
      "Work seamlessly across your organization on a platform designed for collaboration.",
  },
  {
    imgSrc: OfficeContent2,
    heading: "Transform your culture",
    description:
      "Embrace innersource, iterate faster, and ship more frequently using best tools from open source teams.",
  },
  {
    imgSrc: OfficeContent3,
    heading: "Learn as you build",
    description:
      "Get insight into how your team builds today with community-backed KPIs.",
  },
];

export function ContentImageCard() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="text-center">
          <Heading
            level={"mdDisplay"}
            className="mb-4 text-wrap text-4xl font-bold tracking-tight md:text-5xl"
          >
            Turn collaboration into innovation
          </Heading>
          <Link
            href="#"
            className="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-500"
          >
            Learn more about inner source
            <ChevronRight className="ml-1 size-6" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-12">
          {Cards.map((card) => (
            <Card
              key={card.heading}
              className="mb-2 flex rounded-none border-none shadow-none md:mb-0 md:flex-col"
            >
              <Image
                src={card.imgSrc}
                alt={card.heading}
                className="mr-4 h-36 w-auto rounded-lg md:h-auto md:w-full"
              />
              <CardContent className="p-0">
                <Heading
                  level={3}
                  className="mb-2.5 font-bold md:mt-4 md:text-xl"
                >
                  {card.heading}
                </Heading>
                <Text className="text-muted-foreground">
                  {card.description}
                </Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
