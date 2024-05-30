import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, Flag } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Textarea } from "~/components/ui/textarea";
import BMW from "~/lib/assets/images/bmw.svg";
import Ford from "~/lib/assets/images/ford.svg";
import Visa from "~/lib/assets/images/visa.svg";

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
    author: "modernUIWeb Shop",
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
    author: "modernUIWeb Experts",
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
    author: "modernUIWeb Experts",
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
    author: "modernUIWeb Experts",
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
    author: "modernUIWeb Experts",
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
    author: "modernUIWeb Experts",
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
    author: "modernUIWeb Experts",
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
    author: "modernUIWeb Experts",
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
    author: "modernUIWeb Experts",
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
    author: "modernUIWeb Experts",
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

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  file: z.any().optional(),
  terms: z.boolean(),
});

const ReviewDialog = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      terms: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="block rounded-lg bg-primary-700 px-5 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
          Write a customer review
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {" "}
            <Heading level={3} className="mb-1 text-lg font-semibold">
              Add a review for:
            </Heading>
          </DialogTitle>
          <DialogDescription>
            {" "}
            <Link
              href="#"
              className="font-medium text-primary-700 hover:underline"
            >
              Apple iMac 24&quot; All-In-One Computer, Apple M1, 8GB RAM, 256GB
              SSD
            </Link>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="p-4 md:p-5" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <div className="flex items-center">
                  <Ratings rating={3} totalStars={5} variant="yellow" />
                  <span className="ms-2 text-lg font-bold">3.0 out of 5</span>
                </div>
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium"
                >
                  Review title
                </Label>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">title</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="title"
                          {...field}
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-600 focus:ring-primary-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Review description
                </Label>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id="description"
                          rows={6}
                          className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        />
                      </FormControl>
                      <FormMessage>
                        <Text className="ms-auto text-xs text-primary-500">
                          Problems with the product or delivery?{" "}
                          <Link
                            href="#"
                            className="text-primary-600 hover:underline"
                          >
                            Send a report
                          </Link>
                          .
                        </Text>
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="dropzone-file"
                  className="mb-2 block text-sm font-medium"
                >
                  Add real photos of the product to help other customers{" "}
                  <span className="text-primary-500">(Optional)</span>
                </Label>
                <div className="flex w-full items-center justify-center">
                  <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="sr-only">Email</FormLabel>
                        <FormControl>
                          <Label
                            htmlFor="dropzone-file"
                            className=" flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary-300 bg-primary-50 hover:bg-primary-100"
                          >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                              <svg
                                className="mb-4 size-8 text-primary-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                              </svg>
                              <Text className="mb-2 text-sm text-primary-500 ">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </Text>
                              <Text className="text-xs text-primary-500">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </Text>
                            </div>
                            <Input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              {...field}
                            />
                          </Label>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center">
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="review-checkbox"
                            type="checkbox"
                            value=""
                            className="size-4 rounded border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Label
                    htmlFor="review-checkbox"
                    className="ms-2 text-sm font-medium text-primary-500"
                  >
                    By publishing this review you agree with the{" "}
                    <Link href="#" className="text-primary-600 hover:underline">
                      terms and conditions
                    </Link>
                    .
                  </Label>
                </div>
              </div>
            </div>
            <div className="border-t border-primary-200 pt-4  md:pt-5">
              <Button
                type="submit"
                className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Add review
              </Button>
              <Button
                data-modal-toggle="review-modal"
                className="me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export const ProductInfoTabs = () => {
  return (
    <MuiLayout.Section className="bg-background py-8 antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="border-primary-200 text-center text-sm font-medium text-primary-500 sm:block sm:border-b">
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
                  <div className="grid grid-cols-1 py-4 sm:py-8 lg:grid-cols-5 lg:gap-8">
                    <div className="col-span-3 flex w-full flex-col items-start space-y-6 ">
                      <div className="space-y-6 text-left">
                        {descriptionData.map((text, index) => (
                          <Text key={index} className="text-primary-500">
                            {text}
                          </Text>
                        ))}
                      </div>
                      <div className="space-y-6 text-left">
                        {additionalInfo.map((text, index) => (
                          <Text key={index} className="text-primary-500">
                            {index === 0 && (
                              <span className="font-semibold text-foreground">
                                {text.split(":")[0]}:
                              </span>
                            )}
                            {index === 0 ? text.split(":")[1] : text}
                          </Text>
                        ))}
                      </div>
                      <Button
                        variant="link"
                        className="inline-flex items-center pl-0 text-base font-medium text-primary hover:underline"
                      >
                        Show more
                        <ArrowRight className="ms-1.5 size-4" />
                      </Button>
                    </div>
                    <div className="col-span-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0 lg:block lg:space-y-8">
                      {specsData.map((spec, index) => (
                        <Card
                          key={index}
                          className="max-h-full rounded-lg border border-primary-100 bg-primary-50 p-4 md:p-6"
                        >
                          <Heading
                            level={3}
                            className="text-left font-semibold text-foreground"
                          >
                            {spec.title}
                          </Heading>
                          <div className="mt-2 divide-y divide-primary-200 ">
                            {spec.details.map((detail, idx) => (
                              <dl
                                key={idx}
                                className="flex items-center justify-between gap-4 py-2"
                              >
                                <dt className="text-sm font-medium text-foreground">
                                  {detail.label}
                                </dt>
                                <dd className="text-sm font-normal text-primary-500">
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
                  <div className="mt-6 flex flex-wrap gap-4 rounded-lg border border-primary-200 bg-background p-4 shadow-sm sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
                    <div className="flex flex-1 flex-col justify-start space-y-3">
                      <Text className="self-start text-3xl font-bold leading-none text-foreground">
                        5/5
                      </Text>
                      <Text className="self-start text-base font-normal leading-none text-primary-500">
                        Average rating
                      </Text>
                      <div className="space-y-1 self-start">
                        <div className="flex items-start">
                          <Ratings rating={4} variant="yellow" totalStars={5} />
                        </div>
                        <Text className="text-sm font-normal leading-none text-primary-500">
                          (3,657 reviews)
                        </Text>
                      </div>
                    </div>

                    <div className="hidden min-h-full w-px shrink-0 bg-primary-200  lg:block"></div>

                    <div className="flex flex-1 flex-col items-start space-y-3">
                      <Text className="text-3xl font-bold leading-none text-foreground">
                        100M+
                      </Text>
                      <Text className="text-base font-normal leading-none text-primary-500">
                        Worldwide Clients
                      </Text>
                      <div className="flex items-center gap-4">
                        <Image
                          className="h-6"
                          src={Ford}
                          width={40}
                          height={40}
                          alt="Ford logo"
                        />
                        <Image
                          className="h-6"
                          src={Visa}
                          alt="Visa logo"
                          width={40}
                          height={40}
                        />
                        <Image
                          className="h-8"
                          src={BMW}
                          alt="BMW logo"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>

                    <div className="hidden min-h-full w-px shrink-0 bg-primary-200  lg:block"></div>

                    <div className="h-px w-full shrink-0 bg-primary-200  lg:hidden"></div>

                    <div className="w-full max-w-md">
                      <div className="mb-4 flex flex-col items-start space-y-3">
                        <Text className="text-xl font-semibold leading-none text-foreground">
                          Do you own or have you used the product?
                        </Text>
                        <Text className="text-base font-normal leading-none text-primary-500">
                          Give your opinion by rating the product
                        </Text>
                        <div className="flex items-center">
                          <Ratings rating={0} variant="yellow" totalStars={5} />
                          <Button
                            variant="link"
                            className="ms-1.5 pl-2 text-sm font-medium leading-none text-foreground hover:underline"
                          >
                            Give a note
                          </Button>
                        </div>
                      </div>

                      <ReviewDialog />
                    </div>
                  </div>

                  <div className="mt-6 sm:flex sm:items-end sm:justify-between">
                    <Text className="text-sm font-normal leading-tight text-foreground">
                      Showing <span className="font-semibold">5,768</span>{" "}
                      Customer Reviews
                    </Text>

                    <div className="mt-4 shrink-0 space-y-4 sm:mt-0 sm:flex sm:max-w-sm sm:items-center sm:gap-4 sm:space-y-0">
                      <div>
                        <Label
                          htmlFor="reviews"
                          className="sr-only mb-2 block text-sm font-medium text-foreground"
                        >
                          Select review type
                        </Label>
                        <select
                          id="reviews"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
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
                        <Label
                          htmlFor="time"
                          className="sr-only mb-2 block text-sm font-medium text-foreground"
                        >
                          Select time
                        </Label>
                        <select
                          id="time"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 py-2.5 pl-2.5 pr-10 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        >
                          <option selected>Recently Added</option>
                          <option value="oldest">Oldest</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 divide-y divide-primary-200 border-t border-primary-200">
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
                          <div className="font-medium">
                            <Text>{review.name}</Text>
                            <Text className="text-sm font-normal text-primary-500">
                              Total Reviews:
                              <span className="font-medium text-foreground">
                                {review.totalReviews}
                              </span>
                            </Text>
                          </div>
                        </div>

                        <Heading
                          level={4}
                          className="mb-1 font-semibold text-foreground"
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
                          <Text className="ms-2 text-sm font-normal text-primary-500">
                            {review.date}
                          </Text>
                        </div>

                        <Text className="mb-3 text-start text-base font-normal text-primary-500">
                          {review.content}
                        </Text>

                        <aside>
                          <div className="mt-3 flex items-center">
                            <Link
                              href="#"
                              className="rounded-lg border border-primary-200 bg-background px-2 py-1.5 text-xs font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100"
                            >
                              Helpful ({review.helpful})
                            </Link>

                            <Button
                              variant="link"
                              className="ms-4 inline-flex items-center gap-1.5 pl-2 text-sm font-medium text-foreground hover:underline"
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
                    <span className="text-sm text-primary-700">
                      Showing{" "}
                      <span className="font-semibold text-foreground">1</span>{" "}
                      to{" "}
                      <span className="font-semibold text-foreground">5</span>{" "}
                      of{" "}
                      <span className="font-semibold text-foreground">53 </span>
                      Customer Reviews
                    </span>
                    <div className="xs:mt-0 mt-2 inline-flex">
                      <Button className="flex h-8 items-center justify-center rounded-s bg-primary-800 px-3 text-sm font-medium text-background hover:bg-primary-900">
                        Previous
                      </Button>
                      <Button className="flex h-8 items-center justify-center rounded-e border-0 border-s border-primary-700 bg-primary-800 px-3 text-sm font-medium text-background hover:bg-primary-900">
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
                        <div className="space-y-4 border-b border-primary-200 py-5">
                          <div className="flex items-center gap-3">
                            <Text className="text-base font-semibold text-foreground">
                              {question.author}
                            </Text>
                            <Text className="text-sm font-normal text-primary-500">
                              {question.date}
                            </Text>
                          </div>
                          {Array.isArray(question.answer) ? (
                            question.answer.map((answerPart, index) => (
                              <Text
                                key={index}
                                className="text-start text-base font-normal text-primary-500"
                              >
                                <span className="font-semibold text-foreground">
                                  {index === 0
                                    ? "Apple Silicon:"
                                    : index === 1
                                      ? "Slimmer Design:"
                                      : "Vivid Retina Display:"}
                                </span>{" "}
                                {answerPart}
                              </Text>
                            ))
                          ) : (
                            <Text className="text-start text-base font-normal text-primary-500">
                              {question.answer}
                            </Text>
                          )}
                          <div className="flex items-center gap-4">
                            <Text className="text-sm font-medium text-primary-500">
                              Was it helpful to you?
                            </Text>
                            <div className="flex items-center">
                              <Input
                                id={`default-radio-yes-${question.id}`}
                                type="radio"
                                name={`default-radio-${question.id}`}
                                className="size-4 border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                              />
                              <Label
                                htmlFor={`default-radio-yes-${question.id}`}
                                className="ms-2 text-sm font-medium text-foreground"
                              >
                                Yes: {question.helpfulYes}
                              </Label>
                            </div>
                            <div className="flex items-center">
                              <Input
                                id={`default-radio-no-${question.id}`}
                                type="radio"
                                name={`default-radio-${question.id}`}
                                className="size-4 border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                              />
                              <Label
                                htmlFor={`default-radio-no-${question.id}`}
                                className="ms-2 text-sm font-medium text-foreground"
                              >
                                No: {question.helpfulNo}
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-6 sm:mt-8">
                <Text className="text-lg font-normal text-primary-500">
                  Didn&apos;t find the answer?
                  <Link
                    href="#"
                    title=""
                    className="font-medium text-primary-700 underline hover:no-underline"
                  >
                    Ask a question
                  </Link>
                </Text>
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
                      <Card
                        key={index}
                        className="rounded-lg border border-primary-100 bg-primary-50 p-4 text-start"
                      >
                        <span className="text-primary-500">{title}</span>
                        <Heading
                          level={3}
                          className="mt-1 text-lg font-bold text-foreground"
                        >
                          {subtitle}
                        </Heading>
                        <ul className="my-4 space-y-1 text-left text-primary-500">
                          {features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <Check className="size-5 shrink-0 font-semibold text-green-600 " />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={linkHref}
                          className="font-medium text-primary-700 hover:underline"
                        >
                          {linkText}
                        </Link>
                      </Card>
                    ),
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
