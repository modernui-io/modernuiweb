import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";

// Components
import * as MuiLayout from "~/components/layouts";
import { Card } from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import RobertImage from "~/lib/assets/images/content-team-3.png";
import JosephImage from "~/lib/assets/images/content-team-4.png";
import LanaImage from "~/lib/assets/images/content-team-5.png";
import ThomImage from "~/lib/assets/images/content-team-11.png";
import ThomasImage from "~/lib/assets/images/content-team-12.png";
import NeilImage from "~/lib/assets/images/content-team-13.png";
import KarenImage from "~/lib/assets/images/content-team-14.png";
import BonnieImage from "~/lib/assets/images/member-6.png";

// Image

interface Person {
  name: string;
  designation: string;
  image: StaticImageData;
}

const persons: Person[] = [
  {
    name: "Robert Brown",
    designation: "CEO & Co Founder",
    image: RobertImage,
  },
  {
    name: "Thomas Lean",
    designation: "Senior Front-end Developer",
    image: ThomasImage,
  },
  {
    name: "Joseph Mcfall",
    designation: "Senior Front-end Developer",
    image: JosephImage,
  },
  {
    name: "Thom Belly",
    designation: "CDO",
    image: ThomImage,
  },
  {
    name: "Bonnie Green",
    designation: "CTO & Co Founder",
    image: BonnieImage,
  },
  {
    name: "Lana Byrd",
    designation: "SEO Specialist",
    image: LanaImage,
  },
  {
    name: "Karen Nelson",
    designation: "Marketing and SEO",
    image: KarenImage,
  },
  {
    name: "Neil Sims",
    designation: "Accountant",
    image: NeilImage,
  },
];

export function CardWithGridLayoutCTA() {
  return (
    <MuiLayout.Section className="bg-background antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Our people make us great
          </Heading>
          <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-xl">
            You&apos;ll interact with talented professionals, will be challenged
            to solve difficult problems and think in new and creative ways.
          </Text>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 xl:grid-cols-4">
          {persons.map((person) => (
            <Card
              key={person.name}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={person.image}
                className="h-80 w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
                alt={person.name}
              />
              <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                <div className="text-center">
                  <Text className="text-xl font-bold text-white">
                    {person.name}
                  </Text>
                  <Text className="text-base font-medium text-white/70">
                    {person.designation}
                  </Text>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-md bg-muted p-4 lg:mt-16">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-1.5">
              <MdGroups className="hidden size-5 shrink-0 md:block" />
              <span className="font-semibold">
                Want to join the team?{" "}
                <span className="text-base font-normal">
                  We are growing our community.
                </span>
              </span>
            </div>

            <Link
              href="/#"
              className="inline-flex items-center text-base font-medium text-primary hover:underline"
            >
              Join our team
              <FaArrowRightLong className="ml-1.5 size-5" />
            </Link>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
