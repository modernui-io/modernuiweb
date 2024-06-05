import Image from "next/image";

import { HiPencilAlt, HiStar, HiTrash } from "react-icons/hi";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Text } from "~/components/ui/custom/text";

export function ReadProductSectionWithCarousel() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:py-16">
        <h2 className="mb-2 text-xl font-semibold leading-none md:text-2xl">
          Apple iMac 25&quot;
        </h2>
        <Text className="mb-4 text-xl font-extrabold leading-none md:text-2xl">
          $2999
        </Text>
        <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
          <div className="px-10 sm:col-span-2">
            <Carousel className="mb-4 h-64">
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <Image
                      className="h-60 w-auto"
                      width={100}
                      height={100}
                      alt="iMac side"
                      src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <Image
                      className="h-60 w-auto"
                      width={100}
                      height={100}
                      alt="iMac front"
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <Image
                      className="h-60 w-auto"
                      width={100}
                      height={100}
                      alt="iMac back"
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <Text className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
              See it all in sharp, glorious detail on the immersive 24‑inch 4.5K
              Retina display.2 The P3 wide color gamut brings what you’re
              watching to life in over a billion colors. Images shine with a
              brilliant 500 nits of brightness. Industry-leading anti‑reflective
              coating delivers greater comfort and readability.
            </Text>
            <dl>
              <dt className="mb-2 font-semibold leading-none">Details</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
              </dd>
              <dt className="mb-2 font-semibold leading-none">Colors</dt>
              <dd className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <div className="size-6 rounded-full bg-purple-600"></div>
                <div className="size-6 rounded-full bg-indigo-400"></div>
                <div className="size-6 rounded-full bg-primary-600"></div>
                <div className="size-6 rounded-full bg-pink-400"></div>
                <div className="size-6 rounded-full bg-teal-300"></div>
                <div className="size-6 rounded-full bg-green-300"></div>
              </dd>
            </dl>
          </div>
          <div className="pl-10 lg:pl-3">
            <dl>
              <dt className="mb-2 font-semibold leading-none">Product State</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                <Badge color="info" className="w-fit px-3">
                  <HiStar className="mr-1 size-3" />
                  New
                </Badge>
              </dd>
              <dt className="mb-2 font-semibold leading-none">Sold by</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                ModernUI
              </dd>
              <dt className="mb-2 font-semibold leading-none">Ships from</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                ModernUI
              </dd>
              <dt className="mb-2 font-semibold leading-none">Brand</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Apple
              </dd>
              <dt className="mb-2 font-semibold leading-none">
                Dimensions (cm)
              </dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                105 x 15 x 23
              </dd>
              <dt className="mb-2 font-semibold leading-none">Item weight</dt>
              <dd className="text-gray-500 dark:text-gray-400">12kg</dd>
            </dl>
          </div>
        </div>
        <div className="flex items-center space-x-4 pl-10">
          <Button size="lg" className="[&>span]:text-sm">
            <HiPencilAlt className="-ml-1 mr-1 size-5" />
            Edit
          </Button>
          <Button size="lg" className="[&>span]:text-sm" variant={"outline"}>
            Preview
          </Button>
          <Button
            size="lg"
            className="[&>span]:text-sm"
            variant={"destructive"}
          >
            <HiTrash className="-ml-1 mr-1.5 size-5" />
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
}
