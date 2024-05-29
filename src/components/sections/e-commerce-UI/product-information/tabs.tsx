import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Flag } from "lucide-react";

//component imports
import * as MuiLayout from "~/components/layouts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Ratings } from "~/components/ui/custom/ratings";
import { Text } from "~/components/ui/custom/text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
//images
import IMacBackDark from "~/lib/assets/images/imac-back-dark.svg";
import IMacBack from "~/lib/assets/images/imac-back.svg";
import IMacFrontDark from "~/lib/assets/images/imac-front-dark.svg";
import IMacFront from "~/lib/assets/images/imac-front.svg";
import IMacSideDark from "~/lib/assets/images/imac-side-dark.svg";
import IMacSide from "~/lib/assets/images/imac-side.svg";

const descriptionData = [
  'The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model features a 5-nm Apple M1 processor with 8 cores (4 performance cores and 4 efficiency cores), an 8-core GPU, a 16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard SSD.',
  'This all is housed in a wafer thin aluminum case with flat edges that includes a 23.5" 4480x2520, 218 PPI, LED-backlit, "True Tone" widescreen "Retina 4.5K" display mounted on a svelte aluminum stand. This specific model is offered in the a two-tone Blue color. It also has an integrated 1080p FaceTime HD camera, a "studio-quality three-mic array" and a "high-fidelity six-speaker system" that supports Spatial Audio with Dolby Atmos.',
  "Connectivity includes two Thunderbolt / USB 4 ports and two USB 3 ports (all with a USB-C connector), a 3.5 mm headphone jack conveniently mounted on the left edge of the display, Wi-Fi 6 (802.11ax), and Bluetooth 5.0.",
];

const additionalInfo = [
  "Brilliant 4.5K Retina display: see the big picture and all the detailsSee it all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display, the P3 wide color gamut brings what you're watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness.",
  "A larger sensor that captures more light. And the advanced image signal processor (ISP) of M1 greatly improves image quality. So from collaborating with coworkers to catching up with friends and family, you'll always look your best, and True Tone technology automatically adjusts the color temperature of your display to the ambient light of your environment, for a more natural viewing experience.",
  "So whether you're editing photos, working on presentations, or watching your favorite shows and movies, everything looks incredible on iMac.",
  "Your iMac comes with 90 days of complimentary technical support and a one‑year limited warranty. Purchase AppleCare+ for Mac to extend your coverage from your AppleCare+ purchase date and add unlimited repairs for accidental damage from handling, each subject to a service fee of $99 for screen damage or external enclosure damage, or $299 for other repairable accidental damage, plus applicable tax.",
  "Accessibility features help people with disabilities get the most out of their new iMac. With built-in support for vision, hearing, mobility, and learning, you can create and do amazing and creative things.",
];
const specsData = [
  {
    title: "Display",
    details: [
      { label: "Screen Type", value: "light" },
      { label: "Diagonal", value: "24 inches" },
      { label: "Resolution", value: "4480 x 2520" },
      { label: "Format", value: "4k" },
    ],
  },
  {
    title: "Processor",
    details: [
      { label: "Processor Type", value: "Apple M3" },
      { label: "Model", value: "M3" },
      { label: "Physical cores", value: "8" },
      { label: "Virtual Cores", value: "16" },
      { label: "Technology", value: "3nm" },
    ],
  },
  {
    title: "RAM memory",
    details: [
      { label: "Capacity", value: "8GB" },
      { label: "Maximum memory", value: "64GB" },
    ],
  },
  {
    title: "Storage",
    details: [{ label: "Capacity", value: "512GB" }],
  },
];

const reviews = [
  {
    name: "Micheal Gough",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    totalReviews: 34,
    title: "Fast and reliable",
    rating: 5,
    date: "November 18 2023 at 15:08",
    content:
      "My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I’m very happy with this purchase.",
    helpful: 2,
  },
  {
    name: "Jese Leos",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    totalReviews: 4,
    title: 'Finally went back to a "desktop"',
    rating: 5,
    date: "November 10 2023 at 17:06",
    content:
      "It’s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this computer. Highly recommend!",
    helpful: 0,
  },
  {
    name: "Roberta Casas",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
    totalReviews: 2,
    title: "Excellent bit of kit",
    rating: 5,
    date: "October 05 2023 at 20:02",
    content:
      "My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I’m very happy with this purchase.",
    helpful: 13,
  },
  {
    name: "Bonnie Green",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg",
    totalReviews: 45,
    title: "The greatest computer I’ve ever had!",
    rating: 5,
    date: "October 05 2023 at 09:41",
    content:
      "I have used earlier Mac computers in my university work for a number of years and found them easy to use.The iMac 2021 is no exception. It works straight out of the box giving superb definition from the HD screen.",
    helpful: 6,
  },
  {
    name: "Lana Byrd",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
    totalReviews: 11,
    title: "Great value for money",
    rating: 5,
    date: "October 01 2023 at 14:48",
    content:
      "I replaced my 11 year old iMac with the new M1 Apple. I wanted to remain with Apple as my old one is still working perfectly and all Apple products are so reliable. Setting up was simple and fast and transferring everything from my previous iMac worked perfectly.",
    helpful: 2,
  },
];

const questions = [
  {
    id: 11,
    question: "What is an iMac, and how does it differ from other computers?",
    answer:
      "The iMac is a line of all-in-one desktop computers designed and produced by Apple Inc. It sets itself apart by integrating the display, processing unit, and other components into a single sleek enclosure, minimizing cable clutter and providing a seamless user experience.",
    author: "Flowbite Shop",
    date: "November 20 2023 • 12:45",
    helpfulYes: 9,
    helpfulNo: 0,
  },
  {
    id: 12,
    question: "What are the key features of the latest iMac models?",
    answer: [
      "Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.",
      "Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.",
      "iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.",
    ],
    author: "Flowbite Experts",
    date: "November 20 2023 • 12:45",
    helpfulYes: 16,
    helpfulNo: 3,
  },
  {
    id: 13,
    question:
      "What is the Retina display on an iMac, and why is it significant?",
    answer: [
      "Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.",
      "Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.",
      "iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.",
    ],
    author: "Flowbite Experts",
    date: "November 20 2023 • 12:45",
    helpfulYes: 16,
    helpfulNo: 3,
  },
  {
    id: 14,
    question:
      "How is the performance of an iMac for tasks like video editing, graphic design, and gaming?",
    answer: [
      "Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.",
      "Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.",
      "iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.",
    ],
    author: "Flowbite Experts",
    date: "November 20 2023 • 12:45",
    helpfulYes: 16,
    helpfulNo: 3,
  },
  {
    id: 15,
    question:
      "Can I upgrade the components of my iMac, such as RAM or storage?",
    answer: [
      "Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.",
      "Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.",
      "iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.",
    ],
    author: "Flowbite Experts",
    date: "November 20 2023 • 12:45",
    helpfulYes: 16,
    helpfulNo: 3,
  },
  {
    id: 16,
    question: "What is the role of Thunderbolt ports on an iMac?",
    answer: [
      "Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.",
      "Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.",
      "iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.",
    ],
    author: "Flowbite Experts",
    date: "November 20 2023 • 12:45",
    helpfulYes: 16,
    helpfulNo: 3,
  },
  {
    id: 17,
    question: "How does the macOS operating system differ from Windows?",
    answer: [
      "Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.",
      "Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.",
      "iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.",
    ],
    author: "Flowbite Experts",
    date: "November 20 2023 • 12:45",
    helpfulYes: 16,
    helpfulNo: 3,
  },
  {
    id: 18,
    question: "What security features does the iMac offer?",
    answer: [
      "Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.",
      "Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.",
      "iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.",
    ],
    author: "Flowbite Experts",
    date: "November 20 2023 • 12:45",
    helpfulYes: 16,
    helpfulNo: 3,
  },
  {
    id: 19,
    question:
      "Can I use my iMac with other Apple devices, such as iPhone and iPad?",
    answer: [
      "Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.",
      "Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.",
      "iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.",
    ],
    author: "Flowbite Experts",
    date: "November 20 2023 • 12:45",
    helpfulYes: 16,
    helpfulNo: 3,
  },
  {
    id: 20,
    question: "What support options are available for iMac users?",
    answer: [
      "Apple has transitioned its Mac lineup from Intel processors to custom-designed Apple Silicon chips. The latest iMac models might feature the latest iterations of these chips, offering improved performance and efficiency.",
      "Apple often focuses on making its products thinner and lighter. Recent iMac models might feature a slimmer profile compared to their predecessors.",
      "iMacs typically feature high-resolution Retina displays with vibrant colors and excellent contrast. The latest models might offer improvements in display technology for even better image quality.",
    ],
    author: "Flowbite Experts",
    date: "November 20 2023 • 12:45",
    helpfulYes: 16,
    helpfulNo: 3,
  },
];

const highlightsData = [
  {
    title: "Processor Model",
    subtitle: "Apple M3",
    features: [
      "Mid-grade processor",
      "Great for most tasks",
      "Multitasks well",
    ],
    linkText: "Why is the processor important?",
    linkHref: "#",
  },
  {
    title: "Graphics",
    subtitle: "Apple M3 8-core",
    features: ["Budget friendly", "Basic gaming", "Ideal for casual gamers"],
    linkText: "Choose the best graphic card",
    linkHref: "#",
  },
  {
    title: "System Memory (RAM)",
    subtitle: "8 gigabytes",
    features: [
      "Excellent multitasking",
      "Advanced photo/video editing",
      "Mid-range gaming",
    ],
    linkText: "How much RAM do I need?",
    linkHref: "#",
  },
  {
    title: "Display Type",
    subtitle: "OLED",
    features: [
      "Superior brightness",
      "High color contrast",
      "Best viewing angle is center",
    ],
    linkText: "What’s the difference between display types?",
    linkHref: "#",
  },
  {
    title: "Total Storage Capacity",
    subtitle: "256 gigabytes",
    features: [
      "Great for most uses",
      "Ideal for casual gaming",
      "Some photo/video editing",
    ],
    linkText: "How much storage do I need?",
    linkHref: "#",
  },
  {
    title: "Screen Resolution",
    subtitle: "4480 x 2520",
    features: [
      "Lifelike images and graphics",
      "Up to 4x the pixels of Full HD",
      "Brings 4K content to life",
    ],
    linkText: "Compare screen resolutions",
    linkHref: "#",
  },
];

export const ProductInfoTabs = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400 sm:block sm:border-b">
          <Tabs defaultValue="Description">
            <TabsList className="-mb-px flex flex-wrap justify-start gap-x-4 bg-background">
              {["Description", "Reviews", "Questions", "Highlights"].map(
                (value, index) => (
                  <TabsTrigger
                    className="rounded-none pb-2 data-[state=active]:border-b-2 data-[state=active]:shadow-none"
                    value={value}
                    key={value + index}
                  >
                    {value}
                  </TabsTrigger>
                ),
              )}
            </TabsList>
            <TabsContent value="Description">
              <div className="w-full">
                <div className="col-span-3">
                  <div
                    id="description"
                    className="grid grid-cols-1 py-4 sm:py-8 lg:grid-cols-5 lg:gap-8"
                    role="tabpanel"
                    aria-labelledby="description-tab"
                  >
                    <div className="col-span-3 w-full space-y-6">
                      <div className="space-y-6">
                        {descriptionData.map((text, index) => (
                          <Text
                            key={index}
                            className="text-gray-500 dark:text-gray-400"
                          >
                            {text}
                          </Text>
                        ))}
                      </div>
                      <div className="space-y-6">
                        {additionalInfo.map((text, index) => (
                          <Text
                            key={index}
                            className="text-gray-500 dark:text-gray-400"
                          >
                            {index === 0 && (
                              <span className="font-semibold text-gray-900 dark:text-white">
                                {text.split(":")[0]}:
                              </span>
                            )}
                            {index === 0 ? text.split(":")[1] : text}
                          </Text>
                        ))}
                      </div>
                      <div id="more-info" className="hidden">
                        <div className="space-y-6">
                          {additionalInfo.map((text, index) => (
                            <Text
                              key={index}
                              className="text-gray-500 dark:text-gray-400"
                            >
                              {index === 0 && (
                                <span className="font-semibold text-gray-900 dark:text-white">
                                  {text.split(":")[0]}:
                                </span>
                              )}
                              {index === 0 ? text.split(":")[1] : text}
                            </Text>
                          ))}
                        </div>
                      </div>
                      <Button
                        id="show-more"
                        type="button"
                        data-collapse-toggle="more-info"
                        data-dismiss-target="#show-more"
                        className="inline-flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
                      >
                        Show more
                        <ArrowRight className="ms-1.5 size-4" />
                      </Button>
                    </div>
                    <div className="col-span-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0 lg:block lg:space-y-8">
                      {specsData.map((spec, index) => (
                        <Card
                          key={index}
                          className="max-h-full rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:p-6"
                        >
                          <Heading
                            level={"xsDisplay"}
                            className="text-xl font-semibold text-gray-900 dark:text-white"
                          >
                            {spec.title}
                          </Heading>
                          <div className="mt-2 divide-y divide-gray-200 dark:divide-gray-700 dark:border-gray-800">
                            {spec.details.map((detail, idx) => (
                              <dl
                                key={idx}
                                className="flex items-center justify-between gap-4 py-2"
                              >
                                <dt className="text-sm font-medium text-gray-900 dark:text-white">
                                  {detail.label}
                                </dt>
                                <dd className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                  {detail.value}
                                </dd>
                              </dl>
                            ))}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Reviews">
              <div
                className=""
                id="reviews"
                role="tabpanel"
                aria-labelledby="reviews-tab"
              >
                <div className="mx-auto max-w-screen-xl">
                  <div className="mt-6 flex flex-wrap gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
                    <div className="flex flex-1 flex-col justify-start space-y-3">
                      <Text className="self-start text-3xl font-bold leading-none text-gray-900 dark:text-white">
                        5/5
                      </Text>
                      <Text className="self-start text-base font-normal leading-none text-gray-500 dark:text-gray-400">
                        Average rating
                      </Text>
                      <div className="space-y-1 self-start">
                        <div className="flex items-start">
                          <Ratings rating={4} variant="yellow" totalStars={5} />
                        </div>
                        <Text className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                          (3,657 reviews)
                        </Text>
                      </div>
                    </div>

                    <div className="hidden min-h-full w-px shrink-0 bg-gray-200 dark:bg-gray-700 lg:block"></div>

                    <div className="flex flex-1 flex-col items-start space-y-3">
                      <Text className="text-3xl font-bold leading-none text-gray-900 dark:text-white">
                        100M+
                      </Text>
                      <Text className="text-base font-normal leading-none text-gray-500 dark:text-gray-400">
                        Worldwide Clients
                      </Text>
                      <div className="flex items-center gap-4">
                        <Image
                          className="h-6"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/ford.svg"
                          width={40}
                          height={40}
                          alt="Ford logo"
                        />
                        <Image
                          className="h-6"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
                          alt="Visa logo"
                          width={40}
                          height={40}
                        />
                        <Image
                          className="h-8"
                          src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/bmw.svg"
                          alt="BMW logo"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>

                    <div className="hidden min-h-full w-px shrink-0 bg-gray-200 dark:bg-gray-700 lg:block"></div>

                    <div className="h-px w-full shrink-0 bg-gray-200 dark:bg-gray-700 lg:hidden"></div>

                    <div className="w-full max-w-md">
                      <div className="mb-4 flex flex-col items-start space-y-3">
                        <Text className="text-xl font-semibold leading-none text-gray-900 dark:text-white">
                          Do you own or have you used the product?
                        </Text>
                        <Text className="text-base font-normal leading-none text-gray-500 dark:text-gray-400">
                          Give your opinion by rating the product
                        </Text>
                        <div className="flex items-center">
                          <Ratings rating={0} variant="yellow" totalStars={5} />
                          <Button
                            type="button"
                            className="ms-1.5 text-sm font-medium leading-none text-gray-900 hover:underline dark:text-white"
                          >
                            Give a note
                          </Button>
                        </div>
                      </div>

                      <Button
                        type="button"
                        data-modal-target="review-modal"
                        data-modal-toggle="review-modal"
                        className="block rounded-lg bg-primary-700 px-5 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Write a customer review
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 sm:flex sm:items-end sm:justify-between">
                    <Text className="text-sm font-normal leading-tight text-gray-900 dark:text-white">
                      Showing <span className="font-semibold">5,768</span>{" "}
                      Customer Reviews
                    </Text>

                    <div className="mt-4 shrink-0 space-y-4 sm:mt-0 sm:flex sm:max-w-sm sm:items-center sm:gap-4 sm:space-y-0">
                      <div>
                        <label
                          htmlFor="reviews"
                          className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Select review type
                        </label>
                        <select
                          id="reviews"
                          className="pr-2. block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        >
                          <option selected>All Reviews</option>
                          <option value="5 stars">5 stars</option>
                          <option value="4 stars">4 stars</option>
                          <option value="3 stars">3 stars</option>
                          <option value="2 stars">2 stars</option>
                          <option value="1 star">1 star</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="time"
                          className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Select time
                        </label>
                        <select
                          id="time"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2.5 pl-2.5 pr-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        >
                          <option selected>Recently Added</option>
                          <option value="oldest">Oldest</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 divide-y divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
                    {reviews.map((review, index) => (
                      <article
                        key={index}
                        className="flex flex-col items-start py-6"
                      >
                        <div className="mb-3 flex items-center">
                          <Image
                            className="mr-4 size-10 rounded-lg"
                            width={40}
                            height={40}
                            src={review.avatar}
                            alt={`${review.name} avatar`}
                          />
                          <div className="font-medium dark:text-white">
                            <Text>{review.name}</Text>
                            <Text className="text-sm font-normal text-gray-500 dark:text-gray-400">
                              Total Reviews:
                              <span className="font-medium text-gray-900 dark:text-white">
                                {review.totalReviews}
                              </span>
                            </Text>
                          </div>
                        </div>

                        <Heading
                          level={"xsDisplay"}
                          className="mb-1 text-xl font-semibold text-gray-900 dark:text-white"
                        >
                          {review.title}
                        </Heading>

                        <div className="mb-3 flex items-center space-x-2">
                          <div className="flex items-center space-x-0.5 rtl:space-x-reverse">
                            <Ratings
                              rating={review.rating}
                              variant="yellow"
                              totalStars={5}
                              size={18}
                            />
                          </div>
                          <Text className="ms-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                            {review.date}
                          </Text>
                        </div>

                        <Text className="mb-3 text-start text-base font-normal text-gray-500 dark:text-gray-400">
                          {review.content}
                        </Text>

                        <aside>
                          <div className="mt-3 flex items-center">
                            <Link
                              href="#"
                              className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                            >
                              Helpful ({review.helpful})
                            </Link>

                            <Button
                              type="button"
                              data-modal-toggle="report-modal"
                              className="ms-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline dark:text-white"
                            >
                              <Flag className="size-5 text-foreground" />
                              Report
                            </Button>
                          </div>
                        </aside>
                      </article>
                    ))}
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                      Showing
                      <span className="font-semibold text-gray-900 dark:text-white">
                        1
                      </span>{" "}
                      to{" "}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        5
                      </span>{" "}
                      of
                      <span className="font-semibold text-gray-900 dark:text-white">
                        53
                      </span>
                      Customer Reviews
                    </span>
                    <div className="xs:mt-0 mt-2 inline-flex">
                      <Button className="flex h-8 items-center justify-center rounded-s bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Previous
                      </Button>
                      <Button className="flex h-8 items-center justify-center rounded-e border-0 border-s border-gray-700 bg-gray-800 px-3 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Questions">
              <Accordion type="single" collapsible className="w-full">
                {questions.map((question) => (
                  <AccordionItem value={question.question} key={question.id}>
                    <AccordionTrigger className="flex w-full items-center justify-between gap-3 py-5 text-xl leading-none text-foreground sm:text-2xl rtl:text-right">
                      <span>{question.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div
                        id={`accordion-product-body-${question.id}`}
                        // className={activeQuestion === question.id ? "" : "hidden"}
                        aria-labelledby={`accordion-product-heading-${question.id}`}
                      >
                        <div className="space-y-4 border-b border-gray-200 py-5 dark:border-gray-700">
                          <div className="flex items-center gap-3">
                            <p className="text-base font-semibold text-gray-900 dark:text-white">
                              {question.author}
                            </p>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                              {question.date}
                            </p>
                          </div>
                          {Array.isArray(question.answer) ? (
                            question.answer.map((answerPart, index) => (
                              <p
                                key={index}
                                className="text-start text-base font-normal text-gray-500 dark:text-gray-400"
                              >
                                <span className="font-semibold text-gray-900 dark:text-white">
                                  {index === 0
                                    ? "Apple Silicon:"
                                    : index === 1
                                      ? "Slimmer Design:"
                                      : "Vivid Retina Display:"}
                                </span>{" "}
                                {answerPart}
                              </p>
                            ))
                          ) : (
                            <p className="text-start text-base font-normal text-gray-500 dark:text-gray-400">
                              {question.answer}
                            </p>
                          )}
                          <div className="flex items-center gap-4">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Was it helpful to you?
                            </p>
                            <div className="flex items-center">
                              <input
                                id={`default-radio-yes-${question.id}`}
                                type="radio"
                                name={`default-radio-${question.id}`}
                                className="size-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                              />
                              <label
                                htmlFor={`default-radio-yes-${question.id}`}
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Yes: {question.helpfulYes}
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id={`default-radio-no-${question.id}`}
                                type="radio"
                                name={`default-radio-${question.id}`}
                                className="size-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                              />
                              <label
                                htmlFor={`default-radio-no-${question.id}`}
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                No: {question.helpfulNo}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-6 sm:mt-8">
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  Didn't find the answer?
                  <a
                    href="#"
                    title=""
                    className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Ask a question
                  </a>
                </p>
              </div>
            </TabsContent>
            <TabsContent value="Highlights">
              <div
                id="highlights"
                role="tabpanel"
                aria-labelledby="highlights-tab"
              >
                <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
                  {highlightsData.map(
                    (
                      { title, features, linkHref, linkText, subtitle },
                      index,
                    ) => (
                      <div
                        key={index}
                        className="rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800"
                      >
                        <span className="text-gray-500 dark:text-gray-400">
                          {title}
                        </span>
                        <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                          {subtitle}
                        </h3>
                        <ul
                          role="list"
                          className="my-4 space-y-1 text-left text-gray-500 dark:text-gray-400"
                        >
                          {features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <svg
                                className="size-5 shrink-0 text-green-600 dark:text-green-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 11.917 9.724 16.5 19 7.5"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href={linkHref}
                          className="font-medium text-primary-700 hover:underline dark:text-primary-500"
                        >
                          {linkText}
                        </a>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
