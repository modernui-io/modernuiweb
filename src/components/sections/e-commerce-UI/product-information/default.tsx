import React from "react";
import Image from "next/image";
import Link from "next/link";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import MacFrontDark from "~/lib/assets/images/imac-showcase-dark.svg";
import MacFront from "~/lib/assets/images/imac-showcase.svg";

const keyFeatures = [
  {
    title: "Brilliant 4.5K Retina display:",
    description:
      "see the big picture and all the detailsSee it all in sharp, glorious detail on the immersive 24-inch 4.5K Retina display. The P3 wide color gamut brings what you're watching to life in over a billion colors. Images shine with a brilliant 500 nits of brightness. Industry-leading anti-reflective coating delivers greater comfort and readability. And True Tone technology automatically adjusts the color temperature of your display to the ambient light of your environment, for a more natural viewing experience. So whether you're editing photos, working on presentations, or watching your favorite shows and movies, everything looks incredible on iMac.",
  },
  {
    title: "1080p FaceTime HD camera:",
    description:
      "ready for your close-upIt's the best camera system ever in a Mac. Double the resolution for higher-quality video calls. A larger sensor that captures more light. And the advanced image signal processor (ISP) of M1 greatly improves image quality. So from collaborating with coworkers to catching up with friends and family, you'll always look your best.",
  },
  {
    title: "Studio-quality mics for high-quality conversations:",
    description:
      "whether you're on a video call with a friend, cutting a track, or recording a podcast, the microphones on iMac make sure you come through loud, crisp, and clear. The studio-quality three-mic array is designed to reduce feedback, so conversations flow more naturally and you interrupt each other less. And beamforming technology helps the mics ignore background noise. Which means everyone hears you - not what's going on around you.",
  },
  {
    title: "Six-speaker sound system: audio that really fills a room:",
    description:
      "the sound system on iMac brings incredible, room-filling audio to any space. Two pairs of force-canceling woofers create rich, deep bass without unwanted vibrations. And each pair is balanced with a high-performance tweeter. The result is a massive, detailed soundstage that takes your movies, music, and more to the next level.",
  },
  {
    title: "M1 chip: with great power comes great capability:",
    description:
      "M1 is the most powerful chip Apple has ever made. macOS Big Sur is an advanced desktop operating system. Combined, they take iMac to entirely new levels of performance, efficiency, and security. iMac wakes from sleep almost instantly, apps launch in a flash, and the whole system feels fluid, smooth, and snappy. With up to 85 percent faster CPU performance and up to two times faster graphics performance than standard 21.5-inch iMac models, you can use apps like Xcode and Affinity Photo to compile code in a fraction of the time or edit photos in real time. And it runs cool and quiet even while tackling these intense workloads. That's the power of hardware, software, and silicon - all designed together.",
  },
];

export const ProductInformationDefault = () => {
  return (
    <MuiLayout.Section className="bg-primary-50 py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <Heading level={"xsDisplay"} className="font-semibold sm:text-2xl">
            Product description
          </Heading>
          <div className="my-8 xl:mb-16 xl:mt-12">
            <Image className="w-full dark:hidden" src={MacFront} alt="" />
            <Image
              className="hidden w-full dark:block"
              src={MacFrontDark}
              alt=""
            />
          </div>
          <div className="mx-auto max-w-2xl space-y-6">
            <Text className="text-base font-normal text-primary-500 ">
              The iMac &quot;M1&quot; 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports
              (2021) model features a 5-nm Apple M1 processor with 8 cores (4
              performance cores and 4 efficiency cores), an 8-core GPU, a
              16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard
              SSD.
            </Text>
            <Text className="text-base font-normal text-primary-500 ">
              This all is housed in a wafer thin aluminum case with flat edges
              that includes a 23.5&quot; 4480x2520, 218 PPI, LED-backlit,
              &quot;True Tone&quot; widescreen &quot;Retina 4.5K&quot; display
              mounted on a svelte aluminum stand. This specific model is offered
              in the a two-tone Blue color. It also has an integrated 1080p
              FaceTime HD camera, a &quot;studio-quality three-mic array&quot;
              and a &quot;high-fidelity six-speaker system&quot; that supports
              Spatial Audio with Dolby Atmos.
            </Text>
            <Text className="text-base font-semibold text-foreground">
              Key Features and Benefits:
            </Text>
            <ul className="list-outside list-disc space-y-4 pl-4 text-base font-normal text-primary-500 ">
              {keyFeatures.map((feature, index) => (
                <li key={index}>
                  <span className="font-semibold text-foreground">
                    {feature.title}{" "}
                  </span>
                  {feature.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-6 md:my-12">
            <iframe
              className="h-[260px] w-full rounded-lg md:h-[540px]"
              src="https://www.youtube.com/embed/KaLxCiilHns"
              title="Crash Course in 20 mins | Introduction to UI components using Tailwind CSS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12">
            <Text className="text-base font-normal text-primary-500 ">
              Connectivity includes two Thunderbolt / USB 4 ports and two USB 3
              ports (all with a USB-C connector), a 3.5 mm headphone jack
              conveniently mounted on the left edge of the display, Wi-Fi 6
              (802.11ax), and Bluetooth 5.0.
            </Text>
            <Text className="text-base font-normal text-primary-500 ">
              A-Grade/CR: iMacs are in 9/10 Cosmetic Condition and are 100%
              Fully Functional. iMacs will be shipped in generic packaging and
              will contain generic accessories. 90 Days Seller Warranty
              Included. iMacs may show signs of wear like scratches, scuffs and
              minor dents.
            </Text>
          </div>
          <div className="text-center">
            <Link
              href="#"
              className="mb-2 mr-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100 "
            >
              Show more...
            </Link>
          </div>
        </div>
      </div>
    </MuiLayout.Section>
  );
};
