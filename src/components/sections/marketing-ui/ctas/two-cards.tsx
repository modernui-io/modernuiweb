import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { ArrowRight, Share2 } from "lucide-react";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Progress } from "~/components/ui/progress";
// Image Import
import Fundraising1 from "~/lib/assets/images/fundraising-1.png";
import Fundraising2 from "~/lib/assets/images/fundraising-2.png";

interface CardDetail {
  achievedAmount: string;
  target: string;
  donar: string;
  title: string;
  description: string;
  image: StaticImageData;
}

const CardDetail: CardDetail[] = [
  {
    achievedAmount: "376,856",
    image: Fundraising1,
    target: "400K",
    donar: "2,756",
    title: "Thank you for supporting in planting trees work.",
    description:
      "Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.",
  },
  {
    achievedAmount: "75,856",
    image: Fundraising2,
    target: "150K",
    donar: "568",
    title: "Thank you for supporting lifesaving work.",
    description:
      "Our fundraisers are a creative bunch when it comes to taking on challenges, from beard shaves and bake sales to stand-up comedy and streaming marathons. There is something for everyone.",
  },
];

export function TwoCardsAndImagesCTASection() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Heading
            level={2}
            className=" font-extrabold leading-tight tracking-tight sm:text-4xl"
          >
            Fundraising events
          </Heading>
          <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-xl">
            ModernUI Web helps you connect with friends, family and communities
            of people who share your interests.
          </Text>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-12">
          {CardDetail.map(
            ({ achievedAmount, target, description, donar, title, image }) => (
              <Card key={title}>
                <CardHeader>
                  <Image
                    alt=""
                    src={image}
                    className="w-full rounded-lg object-cover shadow-lg"
                  />
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-secondary-foreground">
                        ${achievedAmount}
                      </span>
                      <span className="text-sm font-normal text-muted-foreground">
                        of {target} goal
                      </span>
                    </div>
                    <span className="text-right text-xs font-normal text-muted-foreground">
                      {donar} donors
                    </span>
                  </div>
                  <Progress value={85} className="mt-1" />
                </CardHeader>
                <CardContent>
                  <CardTitle>
                    <Heading level={4} className=" font-bold leading-tight">
                      {title}
                    </Heading>
                  </CardTitle>
                  <CardDescription>
                    <Text className="text-base font-normal text-muted-foreground">
                      {description}
                    </Text>
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
                    <Button
                      color="info"
                      className="[&>span]:px-5 [&>span]:py-2.5"
                    >
                      Donate now
                    </Button>
                    <Button
                      color="info"
                      className="[&>span]:px-5 [&>span]:py-2.5"
                    >
                      <Share2 />
                      Share this Fundraiser
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ),
          )}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="#"
            title=""
            className="inline-flex items-center text-lg font-medium text-muted-foreground hover:underline"
          >
            View all fundraising events
            <ArrowRight />
          </Link>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
