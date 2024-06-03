import Image from "next/image";
import Link from "next/link";

import Autoplay from "embla-carousel-autoplay";
import { MdKeyboardArrowRight } from "react-icons/md";

import * as MuiLayout from "~/components/layouts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import Conference from "~/lib/assets/images/conference.png";
import GirlWithPhone from "~/lib/assets/images/girl-with-phone.png";
import ManAtOffice from "~/lib/assets/images/man-at-office.png";
import Meeting from "~/lib/assets/images/meeting.png";
import OfficeWork from "~/lib/assets/images/office-work.png";
import Office from "~/lib/assets/images/office.png";
import WorkFromHome from "~/lib/assets/images/work-from-home.png";
import WorkSpace from "~/lib/assets/images/workspace.png";

interface Statistic {
  count: string;
  label: string;
}

const imagePairs = [
  [OfficeWork, Office],
  [Conference, GirlWithPhone],
  [ManAtOffice, Meeting],
  [WorkFromHome, WorkSpace],
];

const statisticsData: Statistic[] = [
  { count: "73M+", label: "Developers" },
  { count: "100M+", label: "Public repositories" },
  { count: "1000s", label: "Open source projects" },
  { count: "1B+", label: "Contributors" },
  { count: "90+", label: "Top Forbes companies" },
  { count: "4M+", label: "Organizations" },
];

export const CarouselSlider = () => {
  return (
    <MuiLayout.Section className="bg-background">
      <div className="mx-auto mb-8 max-w-screen-md px-4 text-center md:mb-16 lg:px-0">
        <Heading
          level={2}
          className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl"
        >
          Unwavering in our commitment to trust
        </Heading>
        <div>
          <Link
            href="#"
            className="inline-flex items-center justify-center font-medium text-primary hover:text-primary/90"
          >
            Learn more about us
            <MdKeyboardArrowRight className="ml-1 size-5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl">
        <Carousel
          className="relative mx-10 sm:px-24"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className=" rounded-lg ">
            {imagePairs.map((image, index) => (
              <CarouselItem key={index} className="grid gap-8 lg:grid-cols-2">
                <Image
                  src={image[0]}
                  className="block size-full rounded-lg"
                  alt="..."
                />
                <Image
                  src={image[1]}
                  className="hidden size-full rounded-lg lg:block"
                  alt="..."
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="mx-auto mt-8 grid max-w-screen-xl grid-cols-2 gap-8  sm:grid-cols-3 lg:mt-14 xl:grid-cols-6">
        {statisticsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Text className="mb-2 text-3xl font-extrabold md:text-4xl">
              {item.count}
            </Text>
            <Text className="font-light text-muted-foreground">
              {item.label}
            </Text>
          </div>
        ))}
      </div>
    </MuiLayout.Section>
  );
};
