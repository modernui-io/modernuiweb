import React from "react";
import Image from "next/image";
import Link from "next/link";

//component imports
import * as MuiLayout from "~/components/layouts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
//images
import IMacBackDark from "~/lib/assets/images/imac-back-dark.svg";
import IMacBack from "~/lib/assets/images/imac-back.svg";
import IMacFrontDark from "~/lib/assets/images/imac-front-dark.svg";
import IMacFront from "~/lib/assets/images/imac-front.svg";
import IMacSideDark from "~/lib/assets/images/imac-side-dark.svg";
import IMacSide from "~/lib/assets/images/imac-side.svg";

const featureList = [
  {
    paragraphs: [
      'The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021) model features a 5-nm Apple M1 processor with 8 cores (4 performance cores and 4 efficiency cores), an 8-core GPU, a 16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard SSD.',
      'This all is housed in a wafer thin aluminum case with flat edges that includes a 23.5" 4480x2520, 218 PPI, LED-backlit, "True Tone" widescreen "Retina 4.5K" display mounted on a svelte aluminum stand. This specific model is offered in the a two-tone Blue color. It also has an integrated 1080p FaceTime HD camera, a "studio-quality three-mic array" and a "high-fidelity six-speaker system" that supports Spatial Audio with Dolby Atmos.',
      "Connectivity includes two Thunderbolt / USB 4 ports and two USB 3 ports (all with a USB-C connector), a 3.5 mm headphone jack conveniently mounted on the left edge of the display, Wi-Fi 6 (802.11ax), and Bluetooth 5.0.",
    ],
    image: {
      dark: IMacBackDark,
      light: IMacBack,
    },
    imagePosition: "end",
  },
  {
    highlight: "Brilliant 4.5K Retina display:",
    paragraphs: [
      "see the big picture and all the detailsSee it all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display, the P3 wide color gamut brings what you're watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness.",
      "A larger sensor that captures more light. And the advanced image signal processor (ISP) of M1 greatly improves image quality. So from collaborating with coworkers to catching up with friends and family, you'll always look your best.",
      "And True Tone technology automatically adjusts the color temperature of your display to the ambient light of your environment, for a more natural viewing experience.",
      "So whether you're editing photos, working on presentations, or watching your favorite shows and movies, everything looks incredible on iMac.",
    ],
    image: {
      dark: IMacFrontDark,
      light: IMacFront,
    },
    imagePosition: "start",
  },
  {
    highlight: "Studio-quality mics for high-quality conversations:",
    paragraphs: [
      "whether you're on a video call with a friend, cutting a track, or recording a podcast, the microphones on iMac make sure you come through loud, crisp, and clear.",
      "The studio-quality three-mic array is designed to reduce feedback, so conversations flow more naturally and you interrupt each other less. And beamforming technology helps the mics ignore background noise. Which means everyone hears you - not what's going on around you.",
      "The sound system on iMac brings incredible, room-filling audio to any space. Two pairs of force-canceling woofers create rich, deep bass without unwanted vibrations and each pair is balanced with a high-performance tweeter. The result is a massive, detailed soundstage that takes your movies, music, and more to the next level.",
    ],
    image: {
      dark: IMacSideDark,
      light: IMacSide,
    },
    imagePosition: "end",
  },
];

const technicalDetails = [
  {
    name: "Display",
    description:
      "24-inch 4.5K Retina display, 4480x2520 resolution at 218 pixels per inch with support for 1 billion colours, 500 nits brightness, Wide colour (P3), True Tone technology",
  },
  {
    name: "Processor",
    description:
      "Apple M1 chip, 8-core CPU with 4 performance cores and 4 efficiency cores, 7-core GPU",
  },
  {
    name: "Video Support and Camera",
    description:
      "1080p FaceTime HD camera with M1 image signal processor, Thunderbolt 3 digital video output",
  },
  {
    name: "Connections and Expansion",
    description:
      "Two Thunderbolt / USB 4 ports with support for: DisplayPort, Thunderbolt 3 (up to 40Gb/s), USB 4 (up to 40Gb/s), USB 3.1 Gen 2 (up to 10Gb/s), Thunderbolt 2, HDMI, DVI and VGA supported using adapters (sold separately), 3.5mm headphone jack, Configurable with Gigabit Ethernet",
  },
  {
    name: "Wireless",
    description:
      "Wi‑Fi, 802.11ax Wi‑Fi 6 wireless networking, IEEE 802.11a/b/g/n/ac compatible, Bluetooth, Bluetooth 5.0 wireless technology",
  },
  {
    name: "In the Box",
    description:
      "iMac, Magic Keyboard, Magic Mouse, 143W power adapter, Power lead (2m), USB‑C to Lightning Cable",
  },
  { name: "Height", description: "46.1 cm (18.1 inches)" },
  { name: "Width", description: "54.7 cm (21.5 inches)" },
  { name: "Depth", description: "14.7 cm (5.8 inches)" },
  { name: "Weight", description: "4.46 kg (9.83 pounds)" },
];

const questionsData = [
  {
    id: 1,
    answers: 1,
    question:
      "“The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?”",
    answer:
      "It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.",
    answeredBy: "Bonnie Green",
    daysAgo: "1 day ago",
  },
  {
    id: 2,
    answers: 3,
    question: "“Is this just the monitor?”",
    answer:
      "It's an all-in-one (AIO). Which means everything in one structure. So it's not just a monitor it uses Apple's operating System, macOS and it has storage, CPU, GPU etc.",
    answeredBy: "Jese Leos",
    daysAgo: "1 day ago",
  },
  {
    id: 3,
    answers: 12,
    question:
      '“For an inexpert 85-year-old general user with a ten-year old iMac (OSX Yosemite version 10.10.5), is this latest model 24" iMac with Retina 4.5K display Apple M1 8GB memory - 256GB SSD a decent upgrade?”',
    answer:
      "It's basically the same system as your older machine, but bigger, lighter and faster. There is no disc drive and it has fewer ports.",
    answeredBy: "Bonnie Green",
    daysAgo: "2 days ago",
  },
  {
    id: 4,
    answers: 5,
    question:
      '“I just brought home the Imac24". It says the mouse and Keyboard are wireless. Where do I install the power for them?”',
    answer:
      "You can charge the mouse and keyboard with a lightning charger. Once charged, they last months before having to charge again.",
    answeredBy: "Roberta Casas",
    daysAgo: "2 days ago",
  },
  {
    id: 5,
    answers: 2,
    question: "“Does this include the keyboard and mouse?”",
    answer:
      "Yes it does, color matched to the Mac. And the keyboard has Touch ID.",
    answeredBy: "Joseph McFallen",
    daysAgo: "1 week ago",
  },
];

export const ProductInformationAccordion = () => {
  return (
    <MuiLayout.Section className="bg-background py-8 antialiased md:py-16">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <Heading
          level={"xsDisplay"}
          className="mb-6 font-semibold text-foreground sm:mb-8 sm:text-2xl lg:mb-8"
        >
          Product description
        </Heading>
        {featureList.map(
          ({ image, imagePosition, paragraphs, highlight }, index) => (
            <div
              key={index}
              className="mb-6 space-y-6 sm:mb-8 lg:mb-8 lg:space-y-16"
            >
              <div className="grid lg:grid-cols-2 lg:gap-16">
                {imagePosition === "start" && (
                  <div className="mx-auto hidden max-w-md shrink-0 lg:flex lg:max-w-lg">
                    <Image
                      className="w-full dark:hidden"
                      src={image.light}
                      alt=""
                    />
                    <Image
                      className="hidden w-full dark:block"
                      src={image.dark}
                      alt=""
                    />
                  </div>
                )}
                <div className="space-y-6">
                  {paragraphs.map((para, index) => (
                    <Text
                      key={para + index}
                      className="text-base font-normal text-primary-500 "
                    >
                      {highlight && index === 0 && (
                        <span className="font-semibold text-foreground">
                          {highlight}
                        </span>
                      )}{" "}
                      {para}
                    </Text>
                  ))}
                </div>
                {imagePosition === "end" && (
                  <div className="mx-auto hidden max-w-md shrink-0 lg:flex lg:max-w-lg">
                    <Image
                      className="w-full dark:hidden"
                      src={image.light}
                      alt=""
                    />
                    <Image
                      className="hidden w-full dark:block"
                      src={image.dark}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          ),
        )}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="2">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 py-5 text-xl font-semibold leading-none text-foreground sm:text-2xl rtl:text-right">
              Technical details
            </AccordionTrigger>
            <AccordionContent>
              <div className="border-b border-primary-200 py-6 lg:py-8">
                <div className="overflow-x-auto">
                  <Table className="w-full text-left text-primary-500 ">
                    <TableHeader>
                      <TableRow>
                        <TableHead scope="col" className="min-w-72">
                          <span className="sr-only">Name</span>
                        </TableHead>
                        <TableHead
                          scope="col"
                          className="min-w-[36rem] whitespace-nowrap"
                        >
                          <span className="sr-only">Description</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {technicalDetails.map((detail, index) => (
                        <TableRow
                          key={detail.name}
                          className={index % 2 === 0 ? "bg-primary-100" : ""}
                        >
                          <TableCell
                            scope="row"
                            className="whitespace-nowrap p-4 font-medium text-foreground"
                          >
                            {detail.name}
                          </TableCell>
                          <TableCell className="whitespace-break-spaces p-4 text-primary-600">
                            {detail.description}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 py-5 text-xl font-semibold leading-none text-foreground sm:text-2xl rtl:text-right">
              Questions
            </AccordionTrigger>
            <AccordionContent>
              <div className="border-b border-primary-200 py-6  lg:py-8">
                <div className="flow-root">
                  <div className="divide-y divide-primary-200">
                    {questionsData.map(
                      ({
                        id,
                        answers,
                        question,
                        answer,
                        answeredBy,
                        daysAgo,
                      }) => (
                        <div
                          key={id}
                          className={`space-y-4 ${id !== 1 ? "py-8" : "pb-8"}`}
                        >
                          <div className="md:flex md:flex-row-reverse md:items-center md:justify-end md:gap-4">
                            <span className="me-2 shrink-0 rounded bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800">
                              {answers} answer{answers > 1 ? "s" : ""}
                            </span>
                            <Text className="mt-4 text-xl font-semibold text-foreground sm:mt-0">
                              {question}
                            </Text>
                          </div>
                          <Text className="text-base font-normal text-primary-500 ">
                            {answer}
                          </Text>
                          <Text className="text-sm font-medium text-primary-500">
                            Answered {daysAgo} by{" "}
                            <Link
                              href="#"
                              className="text-foreground hover:underline"
                            >
                              {answeredBy}
                            </Link>
                          </Text>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger className="flex w-full items-center justify-between gap-3 py-5 text-xl font-semibold leading-none text-foreground sm:text-2xl rtl:text-right">
              Warranty
            </AccordionTrigger>
            <AccordionContent>
              {" "}
              <div className="py-6 lg:py-8">
                <Text className="mb-2 text-primary-500">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione.
                </Text>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
