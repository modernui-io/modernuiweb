import Link from "next/link";

import { ArrowRight } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
//components
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

const footerList = [
  {
    heading: "Fourth quarter 2021",
    caption: "We announced fourth quarter 2021 results",
  },
  {
    heading: "Zero emissions",
    caption: "Flowbite aims to achieve net-zero emissions",
  },
  {
    heading: "New York",
    caption: "Plans for net zero emissions in New York",
  },
  {
    heading: "2022 plans",
    caption: "Investing in the future of Africa",
  },
];

export function BackgroundCoverImageWithCTAsHero() {
  return (
    <MuiLayout.Section className="bg-slate-700 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply ">
      <MuiLayout.Container className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="mb-6 max-w-screen-lg lg:mb-0">
          <Heading
            level={"lgDisplay"}
            className="mb-4 font-extrabold leading-none tracking-tight text-white"
          >
            We invest in the world’s potential
          </Heading>
          <Text className="mb-6 text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            The need for energy is universal. That's why Flowbite scientists and
            engineers are pioneering new research and pursuing new technologies
            to reduce emissions while creating more efficient fuels. We're
            committed to responsibly meeting the world's energy needs.
          </Text>
          <Button size="lg" className="text-white [&>span]:items-center">
            Learn more about the plan
            <ArrowRight className="w-5" />
          </Button>
        </div>
        <div className="mt-8 grid gap-8 border-t border-gray-600 pt-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:pt-12">
          {footerList.map(({ caption, heading }) => (
            <div key={heading}>
              <Heading level={4} className="mb-1 font-bold text-white">
                {heading}
              </Heading>
              <Text className="mb-1 text-sm text-gray-400">{caption}</Text>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Read more
                <ArrowRight className="w-4" />
              </Link>
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
