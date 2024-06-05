import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Icons
import { FaChevronRight } from "react-icons/fa";

// Components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image
import LanaImage from "~/lib/assets/images/lana-byrd.png";
import RobertBrown from "~/lib/assets/images/member-1.png";
import ThomasImage from "~/lib/assets/images/member-2.png";
import JosephImage from "~/lib/assets/images/member-3.png";
import BonnieImage from "~/lib/assets/images/member-6.png";
import ThomImage from "~/lib/assets/images/thom-belly.png";

interface Person {
  name: string;
  designation: string;
  image: StaticImageData;
}

const persons: Person[] = [
  {
    name: "Robert Brown",
    designation: "CEO & Co Founder",
    image: RobertBrown,
  },
  {
    name: "Leslie Livington",
    designation: "CTO & Co Founder",
    image: ThomasImage,
  },
  {
    name: "Joseph Mcfall",
    designation: "Front-end Developer",
    image: JosephImage,
  },
  {
    name: "Thom Belly",
    designation: "Front-end Developer",
    image: ThomImage,
  },
  {
    name: "Bonnie Green",
    designation: "React Developer",
    image: BonnieImage,
  },
  {
    name: "Lana Byrd",
    designation: "Marketing",
    image: LanaImage,
  },
];

export function OverlayCardsWithZoomEffect() {
  return (
    <MuiLayout.Section className="bg-background antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row xl:items-start xl:gap-16">
          <div>
            <Heading
              level={1}
              className="mb-4 text-wrap font-bold tracking-tight"
            >
              Our people make us great
            </Heading>
            <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-xl">
              Here we focus on markets where technology, innovation, can unlock
              long-term value.
            </Text>
            <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-xl">
              You&apos;ll interact with talented professionals, will be
              challenged to solve difficult problems and think in new and
              creative ways.
            </Text>
            <Button className="mt-4 bg-primary py-2.5">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg text-center text-sm font-medium focus:outline-none focus:ring-4"
              >
                View more
                <FaChevronRight className="-mr-1 ml-2 size-5" />
              </Link>
            </Button>
          </div>

          <div className="grid w-full shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-3xl">
            {persons.map((person, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={person.image}
                  className="h-80 w-full scale-100 rounded-lg object-cover duration-300 ease-in group-hover:scale-125 sm:rounded-none sm:rounded-l-lg lg:h-auto"
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
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
