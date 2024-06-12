import Image from "next/image";
import Link from "next/link";

import { RotateCw, ShoppingCart, Sliders, Star, Truck } from "lucide-react";

import { Button } from "~/components/ui/button";
//component imports
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import PSCoverDark from "~/lib/assets/images/playstation-cover-dark.png";
import PSCover from "~/lib/assets/images/playstation-cover.png";
import Playstation from "~/lib/assets/images/playstation.png";

export const ProductDetailBackgroundCover = () => {
  const reviews = [1, 2, 3, 4, 5];
  const quickDescription = [
    "The PS5® console* unleashes new gaming possibilities that you never anticipated.",
    "Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio**, and an all-new generation of incredible PlayStation® games.",
    "Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, the PS5 is offered in two models: with and without a 4K Blu-ray drive. Supporting a 120Hz video refresh, the PS5 is more powerful than the PS4 Pro. Rather than GDDR5 memory, GDDR6 is supported with capacity doubled from 8 to 16GB. Storage is an NVMe 825GB SSD rather than a hard drive.",
  ];
  const notes = [
    "Due to high demand, there is a limit of 1 console per order.",
    "Only 1 DualSense included.",
    "PS5 consoles will ship separately.",
    "A signature will be required upon delivery for this product.",
  ];
  return (
    <section className="bg-background py-8 antialiased  md:pb-16 lg:pt-0 ">
      <div className="hidden h-[448px] overflow-hidden lg:block">
        <Image
          className="size-full object-cover dark:hidden"
          src={PSCover}
          alt=""
        />
        <Image
          className="hidden size-full object-cover dark:block"
          src={PSCoverDark}
          alt=""
        />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 lg:-mt-48">
        <div className="border-primary-200 bg-background shadow-sm   lg:rounded-lg lg:rounded-b-none lg:border lg:p-8">
          <div className="gap-12 lg:flex">
            <div className="min-w-0 flex-1 gap-8 sm:flex sm:items-start">
              <div className="shrink-0">
                <div className="w-36 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    className="size-full object-cover"
                    src={Playstation}
                    alt=""
                  />
                </div>
                <Button
                  variant={"link"}
                  className="mt-2 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-primary-700 hover:bg-primary-100   lg:w-full"
                >
                  <RotateCw className="size-5" />
                  Open gallery
                </Button>
              </div>

              <div className="mt-4 min-w-0 flex-1 sm:mt-0">
                <span className="me-2 rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                  {" "}
                  Save $50.00{" "}
                </span>

                <Heading
                  level={"xsDisplay"}
                  className="mt-4 font-semibold text-primary-900 "
                >
                  PlayStation®5 Console
                </Heading>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {reviews.map((_, index) => (
                        <Star key={index} className="size-4 text-yellow-300" />
                      ))}
                    </div>
                    <Text className="text-sm font-medium leading-none text-primary-500 ">
                      (5.0)
                    </Text>
                    <Link
                      href="#"
                      className="cursor-pointer text-sm font-medium leading-none text-primary-900 underline hover:no-underline "
                    >
                      34.5k Reviews
                    </Link>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Truck className="size-5 text-primary-700 " />
                    <Text className="text-sm font-medium text-primary-700 ">
                      Free delivery
                    </Text>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <RotateCw className="size-5 text-primary-500 " />
                    <Text className="text-sm font-normal text-primary-500 ">
                      Free returns
                    </Text>
                  </div>
                </div>

                <div className="mt-4 hidden space-y-2 sm:block">
                  <Text className="text-base font-semibold text-primary-900 ">
                    Quick description:
                  </Text>
                  <div className="space-y-4">
                    {quickDescription.map((desc, index) => (
                      <Text
                        key={index}
                        className="text-base font-normal text-primary-500 "
                      >
                        {desc}
                      </Text>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <hr className="hidden border-primary-200  sm:mt-8 sm:block lg:hidden" />

            <div className="mt-6 shrink-0 space-y-8 sm:mt-8 lg:mt-0 lg:w-full lg:max-w-xs">
              <div>
                <Text className="text-2xl font-medium leading-none text-primary-900 ">
                  Starting from <span className="font-extrabold">$499</span>
                </Text>
                <Text className="mt-2 text-base font-normal text-primary-500 ">
                  Flexible payments available with PayPal and VISA or
                  Mastercard.
                </Text>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
                <div className="space-y-4">
                  <Link
                    href="#"
                    title=""
                    className="flex items-center justify-center rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100 sm:w-full"
                    role="button"
                  >
                    <Sliders className="-ms-2 me-2 size-5" />
                    Customize your device
                  </Link>

                  <Link
                    href="#"
                    title=""
                    className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:mt-0"
                    role="button"
                  >
                    <ShoppingCart className="-ms-2 me-2 size-5" />
                    Buy now
                  </Link>

                  <Text className="text-sm font-normal text-primary-500 ">
                    Available at a lower price from{" "}
                    <Link
                      href="#"
                      title=""
                      className="font-medium text-primary-700 underline hover:no-underline "
                    >
                      other sellers
                    </Link>
                    .
                  </Text>
                </div>

                <div className="sm:hidden">
                  <Text className="text-base font-semibold text-primary-900  lg:mt-4">
                    Quick description:
                  </Text>
                  <div className="mt-2 space-y-4">
                    {quickDescription.map((desc, index) => (
                      <Text
                        key={index}
                        className="text-base font-normal text-primary-500 "
                      >
                        {desc}
                      </Text>
                    ))}
                  </div>
                </div>

                <hr className="hidden border-primary-200  lg:block" />

                <ul className="hidden list-outside list-disc space-y-2 pl-4 text-sm font-normal text-primary-500  sm:block">
                  {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
