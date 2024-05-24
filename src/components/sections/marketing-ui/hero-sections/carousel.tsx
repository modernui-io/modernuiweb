import Image from "next/image";

import { Video } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
//components
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import Placeholder from "~/lib/assets/images/placeholder.jpg";

export function HeroSectionWithCarouselSlider() {
  return (
    <MuiLayout.Section className="bg-background antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:max-w-xl xl:shrink-0">
            <div>
              <Heading
                level={2}
                className="font-extrabold leading-none tracking-tight"
              >
                Making earth cooler for people, nature, climate
              </Heading>
              <Text className="mt-5 text-base font-normal text-secondary-foreground sm:text-xl md:max-w-3xl">
                Protecting the planet and its natural resources for future
                generations, by reducing pollution, promoting sustainability,
                and conserving energy and resources.
              </Text>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button>Donate now</Button>
              <Button className="[&>span]:items-center" variant="outline">
                <Video className="w-4 text-foreground" />
                Learn more
              </Button>
            </div>
            <div className="mt-4 sm:mt-8 sm:border-t sm:border-gray-100 sm:pt-8">
              <Text className="hidden text-base font-medium text-secondary-foreground sm:block">
                Partners and backers:
              </Text>
              <div className="mt-3 flex max-w-md items-center">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Image
                    key={index}
                    className="mr-4 h-8 w-auto md:h-12"
                    src={Placeholder}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
          <Carousel className="w-96 md:h-96">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Image src={Placeholder} className="h-72 rounded-lg" alt="" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
