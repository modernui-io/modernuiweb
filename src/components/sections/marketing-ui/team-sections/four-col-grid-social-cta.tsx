import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Icons
import { FaDribbble, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";

// Components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image
import BonnieImage from "~/lib/assets/images/bonnie-green.png";
import ThomasImage from "~/lib/assets/images/content-team-12.png";
import KarenImage from "~/lib/assets/images/content-team-14.png";
import JeseImage from "~/lib/assets/images/jese-leos.png";
import JosephImage from "~/lib/assets/images/joseph-mcfall.png";
import NeilImage from "~/lib/assets/images/neil-sims.png";
import RobertImage from "~/lib/assets/images/roberta-casas.png";
import RobertaImage from "~/lib/assets/images/roberta-casas.png";
import LanaImage from "~/lib/assets/images/sofia-mcguire.png";
import ThomImage from "~/lib/assets/images/thomas-lean.png";

interface Person {
  name: string;
  designation: string;
  description: string;
  image: StaticImageData;
}

const persons: Person[] = [
  {
    name: "Robert Brown",
    designation: "CEO & Co Founder",
    description:
      "Robert drives the technical strategy of the platform and brand.",
    image: RobertImage,
  },
  {
    name: "Thomas Lean",
    designation: "Senior Front-end Developer",
    description:
      "Thomas drives the technical strategy of the platform and brand.",
    image: ThomasImage,
  },
  {
    name: "Joseph Mcfall",
    designation: "Senior Front-end Developer",
    description:
      "Joseph drives the technical strategy of the platform and brand.",
    image: JosephImage,
  },
  {
    name: "Thom Belly",
    designation: "CDO",
    description:
      "Thom drives the technical strategy of the platform and brand.",
    image: ThomImage,
  },
  {
    name: "Bonnie Green",
    designation: "CTO & Co Founder",
    description:
      "Bonnie drives the technical strategy of the platform and brand.",
    image: BonnieImage,
  },
  {
    name: "Lana Byrd",
    designation: "SEO Specialist",
    description:
      "Lana drives the technical strategy of the platform and brand.",
    image: LanaImage,
  },
  {
    name: "Karen Nelson",
    designation: "Marketing and SEO",
    description:
      "Karen drives the technical strategy of the platform and brand.",
    image: KarenImage,
  },
  {
    name: "Neil Sims",
    designation: "Accountant",
    description:
      "Neil drives the technical strategy of the platform and brand.",
    image: NeilImage,
  },
  {
    name: "Roberta Casas",
    designation: "Accountant",
    description:
      "Roberta drives the technical strategy of the platform and brand.",
    image: RobertaImage,
  },
  {
    name: "Jese Leos",
    designation: "SEO Specialist",
    description:
      "Jese drives the technical strategy of the platform and brand.",
    image: JeseImage,
  },
];

const socialMediaLinks = [
  { href: "/#", icon: FaFacebookF },
  { href: "/#", icon: FaTwitter },
  { href: "/#", icon: FaDribbble },
  { href: "/#", icon: FaGithub },
];

export function FourColGridSocialCTA() {
  return (
    <MuiLayout.Section className=" antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="max-w-5xl">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Our people make us great
          </Heading>
          <Text className="mt-4 text-base font-normal text-muted-foreground sm:text-xl">
            Empower Developers, Designers, IT Ops, and business teams to
            collaborate at high velocity. Respond to changes and deliver great
            customer and employee service experiences fast.
          </Text>
          <Button className="mt-4 py-2.5">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-center text-sm font-medium focus:outline-none focus:ring-4 "
            >
              See the entire team
              <FaArrowRightLong className="-mr-1 ml-2 size-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {persons.map((person, index) => (
            <div key={index}>
              <Image
                src={person.image}
                className="h-64 w-full rounded-lg object-cover object-top lg:h-48"
                alt={person.name}
              />
              <div className="mt-4 space-y-2">
                <div>
                  <Heading
                    level={3}
                    className="text-xl font-bold tracking-tight md:text-xl"
                  >
                    {person.name}
                  </Heading>
                  <Text className="text-base font-medium text-muted-foreground">
                    {person.designation}
                  </Text>
                </div>
                <Text className="text-base font-normal text-muted-foreground">
                  {person.description}
                </Text>
                <div className="flex items-center gap-3">
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
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-md bg-muted p-4 lg:mt-12">
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
