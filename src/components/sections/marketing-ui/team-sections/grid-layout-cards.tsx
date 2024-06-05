import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Icons
import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

// Components
import * as MuiLayout from "~/components/layouts";
import { Card } from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image
import BonnieImage from "~/lib/assets/images/bonnie-green.png";
import JeseImage from "~/lib/assets/images/jese-leos.png";
import JosephImage from "~/lib/assets/images/joseph-mcfall.png";
import MichaelImage from "~/lib/assets/images/michael-gouch.png";
import NeilImage from "~/lib/assets/images/neil-sims.png";
import RobertaImage from "~/lib/assets/images/roberta-casas.png";
import LanaImage from "~/lib/assets/images/sofia-mcguire.png";
import LeslieImage from "~/lib/assets/images/thomas-lean.png";

interface Person {
  name: string;
  designation: string;
  description: string;
  image: StaticImageData;
}

const persons: Person[] = [
  {
    name: "Jese Leos",
    designation: "CEO & Co Founder",
    description:
      "Jese drives the technical strategy of the platform and brand.",
    image: JeseImage,
  },
  {
    name: "Bonnie Green",
    designation: "CTO & Co Founder",
    description:
      "Bonnie drives the technical strategy of the platform and brand.",
    image: BonnieImage,
  },
  {
    name: "Micheal Gough",
    designation: "CDO",
    description:
      "Michael drives the technical strategy of the platform and brand.",
    image: MichaelImage,
  },

  {
    name: "Roberta Casas",
    designation: "Web Designer",
    description:
      "Roberta drives the technical strategy of the platform and brand.",
    image: RobertaImage,
  },
  {
    name: "Neil Sims",
    designation: "React Developer",
    description:
      "Neil drives the technical strategy of the platform and brand.",
    image: NeilImage,
  },
  {
    name: "Joseph Mcfall",
    designation: "Senior Front-end Developer",
    description:
      "Joseph drives the technical strategy of the platform and brand.",
    image: JosephImage,
  },
  {
    name: "Leslie Livingston",
    designation: "Senior Front-end Developer",
    description:
      "Leslie drives the technical strategy of the platform and brand.",
    image: LeslieImage,
  },
  {
    name: "Lana Byrd",
    designation: "SEO Specialist",
    description:
      "Lana drives the technical strategy of the platform and brand.",
    image: LanaImage,
  },
];

const socialMediaLinks = [
  { href: "/#", icon: FaFacebook },
  { href: "/#", icon: FaTwitter },
  { href: "/#", icon: FaGithub },
  { href: "/#", icon: FaDribbble },
];

export function GridLayoutCards() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Our Team
          </Heading>
          <Text className="font-light text-muted-foreground sm:text-xl lg:mb-16">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </Text>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {persons.map((person, index) => (
            <Card
              key={index}
              className="rounded-lg border shadow-sm dark:bg-muted"
            >
              <Image
                src={person.image}
                className="w-full rounded-lg p-4"
                alt={person.name}
              />
              <div className="px-5 pb-5">
                <Heading
                  level={3}
                  className="text-xl font-bold tracking-tight md:text-xl"
                >
                  <Link href="/#">{person.name}</Link>
                </Heading>
                <Text className="text-muted-foreground">
                  {person.designation}
                </Text>
                <Text className="mb-4 mt-3 font-light text-muted-foreground">
                  {person.description}
                </Text>

                <div className="flex space-x-4 sm:mt-0">
                  {socialMediaLinks.map((link) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-secondary-foreground/90"
                    >
                      <link.icon className="size-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
