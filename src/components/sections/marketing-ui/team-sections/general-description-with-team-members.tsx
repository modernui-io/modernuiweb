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
import RobertaImage from "~/lib/assets/images/roberta-casas.png";
import JeseImage from "~/lib/assets/images/thomas-lean.png";

const socialMediaLinks = [
  { href: "/#", icon: FaFacebook },
  { href: "/#", icon: FaTwitter },
  { href: "/#", icon: FaGithub },
  { href: "/#", icon: FaDribbble },
];

interface Person {
  name: string;
  designation: string;
  description: string;
  image: StaticImageData;
}

const persons: Person[] = [
  {
    name: "Bonnie Green",
    designation: "CEO/Co-founder",
    description:
      "Bonnie drives the technical strategy of the platform and brand.",
    image: BonnieImage,
  },
  {
    name: "Roberta Casas",
    designation: "CTO/Co-founder",
    description:
      "Roberta drives the technical strategy of the platform and brand.",
    image: RobertaImage,
  },
  {
    name: "Jese Leos",
    designation: "Designer",
    description:
      "Jese drives the technical strategy of the platform and brand.",
    image: JeseImage,
  },
];

export function GeneralDescriptionWithTeamMembers() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto grid max-w-screen-xl gap-16 px-4 py-8 md:grid-cols-2 md:px-6 md:py-16">
        <div>
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Our people make us great
          </Heading>
          <Text className="mb-2 text-muted-foreground md:text-lg">
            Here at Modern UI we focus on markets where technology, innovation,
            and capital can unlock long-term value.
          </Text>
          <Text className="font-light text-muted-foreground md:text-lg">
            Working here means you&apos;ll interact with talented professionals,
            will be challenged to solve difficult problems and think in new and
            creative ways. Along the way, you may also make some new friends,
            have a lot of fun and enjoy opportunities.
          </Text>
        </div>
        <div className="divide-y divide-muted">
          {persons.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-8 first:pt-0 md:flex-row"
            >
              <Image
                src={person.image}
                className="mx-auto mb-4 size-36 rounded-full sm:ml-0 sm:mr-6"
                alt={person.name}
              />
              <div className="text-center md:text-left">
                <Heading
                  level={3}
                  className="text-xl font-bold tracking-tight md:text-xl"
                >
                  <Link href="/#">{person.name}</Link>
                </Heading>
                <Text className="text-muted-foreground">
                  {person.designation}
                </Text>
                <Text className="mb-4 mt-3 max-w-sm font-light text-muted-foreground">
                  {person.description}
                </Text>
                <div className="flex justify-center space-x-4 md:justify-start">
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
            </div>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
