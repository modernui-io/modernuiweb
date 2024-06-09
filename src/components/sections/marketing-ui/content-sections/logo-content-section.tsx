import Image from "next/image";
import Link from "next/link";

// Icons
import { ChevronRight, CircleCheck, ExternalLink } from "lucide-react";

// Components
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image
import ComputerDark from "~/lib/assets/images/computer-dark.png";
import Logo from "~/lib/assets/images/logo.svg";

const items = [
  "A/B Testing",
  "UX/UI design",
  "Brand development",
  "Front-end development",
  "Craft CMS development",
  "Copywriting",
  "Graphic design",
  "SEO",
];

const paras = [
  {
    heading: "Background",
    description:
      "Come 2021, Modern UI had expanded to over 40 locations. The brand’s digital presence existed, but it lacked strategy. Although its target market of 21-30 year-olds was as engaged (and as loyal) as ever, the brand had outgrown its amateur look of the early '00s and the family-owned business vibes. It needed to show it was a strong brand moving in a new direction - and it was heading there fast.",
  },
  {
    heading: "The challenge",
    description:
      "Modern UI's new website would set the tone for all future marketing initiatives, so the brand needed something to showcase its new identity as soon as possible. A tight timeline, paired with the fact that the new management team were still exploring how to shift the brand from what it used to be to what it needed to be, meant that working collaboratively was a must.",
  },
];

export function LogoContentSection() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="text-center">
          <Image
            src={Logo}
            alt="logo"
            className="mx-auto w-auto object-contain"
          />
          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:mt-5 sm:flex-row sm:gap-8">
            <Link
              href="#"
              className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
            >
              Visit the website
              <ExternalLink className="ml-1.5 size-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center text-base font-semibold leading-tight text-primary-600 hover:underline dark:text-primary-500"
            >
              Let&apos;s work together
              <ChevronRight className="ml-1.5 size-4" />
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-5xl md:mt-16">
          <Image
            src={ComputerDark}
            alt="computer-dark"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-16">
          <div>
            <div>
              <Heading level={2} className="font-extrabold md:text-2xl">
                Overview
              </Heading>
              <Text className="mb-4 font-light text-muted-foreground sm:text-lg">
                Since 1984, Modern UI has been serving up grab-and-go frozen
                daiquiris from its stores across the U.S. Its signature drinks,
                souvenir cups, and discounted refills have made Modern UI
                synonymous with great music, good vibes, and starting the best
                party in town.
              </Text>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CircleCheck className="size-5 text-green-500" />
                  <Text
                    level={"base"}
                    className="font-normal text-muted-foreground"
                  >
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            {paras.map((para) => (
              <div key={para.heading}>
                <Heading level={2} className="font-extrabold md:text-2xl">
                  {para.heading}
                </Heading>
                <Text className="mb-4 font-light text-muted-foreground sm:text-lg">
                  {para.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
