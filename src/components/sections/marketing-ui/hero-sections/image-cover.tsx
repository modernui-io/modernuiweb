import Image from "next/image";

import { ListBulletIcon } from "@radix-ui/react-icons";
import { ArrowRight, Calendar } from "lucide-react";

//components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import Placeholder from "~/lib/assets/images/image-cover.jpeg";

const AnnouncementIcon = () => (
  <svg
    className="mb-3 size-7"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
      clipRule="evenodd"
    />
  </svg>
);

export function CoverImageWithCTAsHero() {
  return (
    <MuiLayout.Section className="relative overflow-hidden bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl gap-8 px-4 py-8 lg:py-16 xl:grid xl:grid-cols-12">
        <div className="col-span-8">
          <Heading
            level={"lgDisplay"}
            className="mb-4 text-wrap font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl"
          >
            Discover new product and best possibilities
          </Heading>
          <Text className="mb-6 text-primary-700 md:text-lg lg:mb-8 lg:text-lg">
            Here at modernUIWeb we focus on markets where technology,
            innovation, and capital can unlock long-term value and drive
            economic growth.
          </Text>
          <div className="items-center gap-16 sm:flex">
            <div className="mb-8 text-secondary-foreground sm:mb-0">
              <Calendar className="mb-3 size-7" />
              <Heading
                level={4}
                className="mb-3 font-semibold tracking-tight text-primary-700"
              >
                28 November 2021
              </Heading>
              <Text className="mb-4 font-light text-primary-600">
                Join us at modernUIWeb 2021 to understand what’s next as the
                global tech and startup ecosystem, rethinks the future of
                everything.
              </Text>
              <Button className="w-fit">
                Conference
                <ArrowRight className="size-5 text-background" />
              </Button>
            </div>
            <div className="text-secondary-foreground">
              <AnnouncementIcon />
              <Heading
                level={4}
                className="mb-3 font-semibold tracking-tight text-primary-700"
              >
                25+ top notch speakers
              </Heading>
              <Text className="mb-4 font-light text-primary-600">
                Here you will find keynote speakers, who all are able to talk
                about Recruiting. Click on the individual keynote speakers and
                read more about them and their keynotes.
              </Text>
              <Button variant="outline" className="w-fit">
                <ListBulletIcon className="size-4 text-foreground" />
                View list
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 hidden h-full w-1/3 xl:block">
          <Image
            className="size-full object-cover"
            src={Placeholder}
            alt="Conference speaker"
          />
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
