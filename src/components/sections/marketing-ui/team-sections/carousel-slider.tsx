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
import JeseImage from "~/lib/assets/images/jese-leos.png";
import JosephImage from "~/lib/assets/images/joseph-mcfall.png";
import MichaelImage from "~/lib/assets/images/michael-gouch.png";

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
    name: "Jese Leos",
    designation: "CTO/Co-founder",
    image: JeseImage,
  },
  {
    name: "Joseph Mcfall",
    designation: "Web Developer",
    image: JosephImage,
  },
  {
    name: "Micheal Gough",
    designation: "Web Designer",
    image: MichaelImage,
  },
];

const socialMediaLinks = [
  { href: "/#", icon: FaFacebook },
  { href: "/#", icon: FaTwitter },
  { href: "/#", icon: FaGithub },
  { href: "/#", icon: FaDribbble },
];

export function CarouselSlider() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-sm md:mb-24 lg:mb-16">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Our Team
          </Heading>
          <Text className="font-light text-muted-foreground sm:text-xl">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </Text>
        </div>

        <div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {persons.map((person, index) => (
            <div key={index} className="text-center text-muted-foreground">
              <Image
                src={person.image}
                className="mx-auto mb-4 size-36 rounded-lg"
                alt={person.name}
              />
              <Heading
                level={5}
                className="mb-1 text-2xl font-bold tracking-tight md:text-2xl"
              >
                <Link href="#">{person.name}</Link>
              </Heading>
              <Text className="text-muted-foreground">
                {person.designation}
              </Text>
              <div className="mt-4 flex justify-center space-x-4">
                {socialMediaLinks.map((link) => (
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
