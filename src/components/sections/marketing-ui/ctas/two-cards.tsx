import Image from "next/image";
import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
// Components Import
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
import Placeholder from "~/lib/assets/images/placeholder.jpg";

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
          <Card>
            <CardHeader>
              <Image
                alt=""
                src={Placeholder}
                className="w-full rounded-lg object-cover shadow-lg"
              />
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-secondary-foreground">
                    $376,856
                  </span>
                  <span className="text-sm font-normal text-muted-foreground">
                    of 400k goal
                  </span>
                </div>
                <span className="text-right text-xs font-normal text-muted-foreground">
                  2,756 donors
                </span>
              </div>
              <Progress value={85} className="mt-1" />
            </CardHeader>
            <CardContent>
              <CardTitle>
                <Heading level={4} className=" font-bold leading-tight ">
                  Thank you for supporting in planting trees work.
                </Heading>
              </CardTitle>
              <CardDescription>
                <Text className="text-base font-normal text-muted-foreground">
                  Our fundraisers are a creative bunch when it comes to taking
                  on challenges, from beard shaves and bake sales to stand-up
                  comedy and streaming marathons. There is something for
                  everyone.
                </Text>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
                <Button color="info" className="[&>span]:px-5 [&>span]:py-2.5">
                  Donate now
                </Button>
                <Button
                  color="gray"
                  className="border-gray-300 hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-white [&>span]:px-5 [&>span]:py-2.5"
                >
                  <svg
                    aria-hidden="true"
                    className="-ml-1 mr-2 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share this Fundraiser
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                className="w-full rounded-lg object-cover shadow-lg"
                src={Placeholder}
                alt=""
              />
              <div>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-secondary-foreground">
                      $75,856
                    </span>
                    <span className="text-sm font-normal text-muted-foreground">
                      of 150k goal
                    </span>
                  </div>
                  <span className="text-right text-xs font-normal text-muted-foreground">
                    568 donors
                  </span>
                </div>
                <Progress value={50} className="mt-1" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>
                <Heading level={4} className=" font-bold leading-tight">
                  Thank you for supporting lifesaving work.
                </Heading>
              </CardTitle>
              <CardDescription>
                <Text className="text-base font-normal text-muted-foreground">
                  Our fundraisers are a creative bunch when it comes to taking
                  on challenges, from beard shaves and bake sales to stand-up
                  comedy and streaming marathons. There is something for
                  everyone.
                </Text>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col gap-4 sm:flex-row md:flex-col lg:flex-row lg:items-center">
                <Button color="info" className="[&>span]:px-5 [&>span]:py-2.5">
                  Donate now
                </Button>
                <Button
                  color="gray"
                  className="border-gray-300 hover:bg-gray-100 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-white [&>span]:px-5 [&>span]:py-2.5"
                >
                  <svg
                    aria-hidden="true"
                    className="-ml-1 mr-2 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share this Fundraiser
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="#"
            title=""
            className="inline-flex items-center text-lg font-medium text-muted-foreground hover:underline "
          >
            View all fundraising events
            <svg
              aria-hidden="true"
              className="ml-2 size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
