import Image from "next/image";

import { ArrowRight } from "lucide-react";

//components
import * as MuiLayout from "~/components/layouts";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { AvatarGroup } from "~/components/ui/custom/avatar-group";
import { Heading } from "~/components/ui/custom/headings";
import { Ratings } from "~/components/ui/custom/ratings";
import { Text } from "~/components/ui/custom/text";
import Placeholder from "~/lib/assets/images/book-cover.png";

export function HeroSectionWithBookCover() {
  return (
    <MuiLayout.Section className="bg-background antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col items-center gap-8 lg:flex-row xl:gap-16">
          <div className="text-center md:max-w-3xl lg:text-left xl:shrink-0">
            <div>
              <Heading
                level={2}
                className="font-extrabold leading-none tracking-tight text-secondary-foreground"
              >
                Designing Interfaces:
                <span className="lg:block">A User-Centered Approach</span>
              </Heading>
              <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-xl md:mx-auto md:max-w-3xl">
                This book covers the latest design principles and techniques,
                including responsive design, mobile interface design, and user
                research methodologies.
              </Text>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              <Button size="lg">Buy now for $99</Button>
              <Button
                size="lg"
                color="gray"
                className="[&>span]:items-center"
                variant="outline"
              >
                Free preview
                <ArrowRight className="ml-2 size-4 text-foreground " />
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-5 sm:gap-6 lg:justify-start">
              <AvatarGroup>
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
              <div className="h-8 w-px "></div>
              <div>
                <Ratings rating={5} variant="yellow" totalStars={5}>
                  <Text className="ml-2 text-base font-medium text-muted-foreground">
                    5.0
                  </Text>
                </Ratings>
                <Text className="mt-1 text-sm font-normal text-muted-foreground">
                  Rated Best Over&nbsp;
                  <span className="font-semibold text-secondary-foreground">
                    15.7k
                  </span>
                  &nbsp;Reviews
                </Text>
              </div>
            </div>
          </div>
          <div className="max-w-md">
            <Image
              className="w-auto rounded-2xl object-contain shadow-2xl"
              src={Placeholder}
              alt="Book cover"
            />
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
