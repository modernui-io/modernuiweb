import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Icons
import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

// Components
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image
import BonnieImage from "~/lib/assets/images/bonnie-green.png";
import HelenaImage from "~/lib/assets/images/helene-engels.png";
import JeseImage from "~/lib/assets/images/jese-leos.png";
import JosephImage from "~/lib/assets/images/joseph-mcfall.png";
import MichaelImage from "~/lib/assets/images/michael-gouch.png";
import NeilImage from "~/lib/assets/images/neil-sims.png";
import LanaImage from "~/lib/assets/images/sofia-mcguire.png";
import LeslieImage from "~/lib/assets/images/thomas-lean.png";

interface Person {
  name: string;
  designation: string;
  image: StaticImageData;
}

const persons: Person[] = [
  {
    name: "Bonnie Green",
    designation: "CEO/Co-founder",
    image: BonnieImage,
  },
  {
    name: "Helena Engles",
    designation: "CTO/Co-founder",
    image: HelenaImage,
  },
  {
    name: "Jese Leos",
    designation: "SEO and Marketing",
    image: JeseImage,
  },
  {
    name: "Joseph Mcfall",
    designation: "Sales",
    image: JosephImage,
  },
  {
    name: "Lana Byrd",
    designation: "Web Developer",
    image: LanaImage,
  },
  {
    name: "Leslie Livingston",
    designation: "Graphic Designer",
    image: LeslieImage,
  },
  {
    name: "Micheal Gough",
    designation: "React Developer",
    image: MichaelImage,
  },
  {
    name: "Neil Sims",
    designation: "Vue.js Developer",
    image: NeilImage,
  },
];

const socialMediaLinks = [
  { href: "/#", icon: FaFacebook },
  { href: "/#", icon: FaTwitter },
  { href: "/#", icon: FaGithub },
  { href: "/#", icon: FaDribbble },
];

export function GridLayoutClean() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
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
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16">
          {persons.map((person, index) => (
            <div key={index} className="text-center">
              <Image
                src={person.image}
                className="mx-auto mb-4 size-36 rounded-full"
                alt={person.name}
              />
              <Heading
                level={3}
                className="mb-1 text-2xl font-bold tracking-tight"
              >
                <Link href="/#">{person.name}</Link>
              </Heading>
              <Text className="text-muted-foreground">
                {person.designation}
              </Text>
              <div className="mt-4 flex justify-center space-x-4">
                {socialMediaLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary-foreground/90"
                  >
                    <link.icon className="size-5" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
