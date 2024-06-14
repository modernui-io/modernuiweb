import Link from "next/link";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { AvatarGroup } from "~/components/ui/custom/avatar-group";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

export function VideoEmbedWithCTAHero() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 pt-8 text-center lg:px-12 lg:py-16">
        <Heading
          level={1}
          className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"
        >
          Your Dream Vacation
        </Heading>
        <Text className="mb-8 text-secondary-foreground sm:px-16 md:text-lg lg:text-lg xl:px-48">
          Here at modernUIWeb we compare a wide range of destinations, flights
          and hotels to conjure up cheap holidays for you to enjoy, time and
          time again.
        </Text>
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
          <Button size="lg">Discover locations</Button>
          <Button variant="outline" size="lg" className="[&>span]:items-center">
            Start a trip request
            <ArrowRight className="w-4 text-foreground" />
          </Button>
        </div>
        <div className="my-8 flex items-center justify-center divide-x divide-primary-300 lg:my-16">
          <AvatarGroup limit={4} className="pr-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <Avatar key={i}>
                <AvatarImage
                  src={`https://xsgames.co/randomusers/assets/avatars/female/${i}.jpg`}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
          <Link
            href="#"
            className="flex flex-col items-start pl-5 text-muted-foreground sm:pl-5"
          >
            <div className="flex w-full ">
              <StarFilledIcon className="size-5 text-green-600" />
              <Text className="mr-2 text-foreground">Trustpilot</Text>
            </div>
            <span className="text-sm text-secondary-foreground">
              Rated Best Over&nbsp;
              <span className="font-medium text-muted-foreground">15.7k</span>
              &nbsp;Reviews
            </span>
          </Link>
        </div>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src="https://www.youtube.com/embed/mTAupMv-3t8"
          title="YouTube video player"
          className="mx-auto h-64 w-full max-w-2xl rounded-lg sm:h-96"
        />
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
