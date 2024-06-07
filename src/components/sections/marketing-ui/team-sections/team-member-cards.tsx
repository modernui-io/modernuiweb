import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Icons
import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

// Components
import * as MuiLayout from "~/components/layouts";
import { Card, CardContent } from "~/components/ui/card";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image
import BonnieImage from "~/lib/assets/images/bonnie-green.png";
import JesseImage from "~/lib/assets/images/jese-leos.png";
import MichaelImage from "~/lib/assets/images/michael-gouch.png";
import LanaImage from "~/lib/assets/images/sofia-mcguire.png";

interface Person {
  name: string;
  designation: string;
  description: string;
  image: StaticImageData;
}

const persons: Person[] = [
  {
    name: "Bonnie Green",
    designation: "CEO & Web Developer",
    image: BonnieImage,
    description:
      "Bonnie drives the technical strategy of the platform and brand.",
  },
  {
    name: "Jese Leos",
    designation: "CTO",
    image: JesseImage,
    description:
      "Jesse drives the technical strategy of the platform and brand.",
  },
  {
    name: "Micheal Gough",
    designation: "Senior Front-end Developer",
    image: MichaelImage,
    description:
      "Micheal drives the technical strategy of the platform and brand.",
  },
  {
    name: "Lana Byrd",
    designation: "Marketing & Sale",
    image: LanaImage,
    description:
      "Lana drives the technical strategy of the platform and brand.",
  },
];

const socialMediaLinks = [
  { href: "/#", icon: FaFacebook },
  { href: "/#", icon: FaTwitter },
  { href: "/#", icon: FaGithub },
  { href: "/#", icon: FaDribbble },
];

export function TeamMemberCards() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mb-8 text-center lg:mb-16">
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
        <div className="grid gap-16 md:grid-cols-2 lg:mb-16">
          {persons.map((person, index) => (
            <Card
              key={index}
              className="items-center rounded-lg bg-muted shadow sm:flex"
            >
              <Image
                src={person.image}
                className="w-full rounded-lg object-cover sm:rounded-none sm:rounded-l-lg"
                alt={person.name}
              />
              <CardContent className="p-5 text-left">
                <Heading
                  level={3}
                  className="text-xl font-bold tracking-tight md:text-xl"
                >
                  <Link href="/#">{person.name}</Link>
                </Heading>
                <Text className="text-muted-foreground dark:text-secondary-foreground">
                  {person.designation}
                </Text>
                <Text className="mb-4 mt-3 font-light text-muted-foreground dark:text-secondary-foreground">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
