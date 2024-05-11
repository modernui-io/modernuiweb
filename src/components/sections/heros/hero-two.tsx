import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { Camera } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import Logo from "~/lib/assets/images/logo.svg";

const Hero = () => {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="flex flex-col items-center gap-6 text-center">
        <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-12"
        />
        <Heading level={1} className="!mb-0 text-balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
        <Heading className="!my-0 text-balance opacity-75">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Heading>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button asChild>
            <Link href="/">
              <Camera className="mr-2" />
              Lorem Ipsum
            </Link>
          </Button>
          <Button variant={"ghost"} asChild>
            <Link href={"/posts" as Route<"string">}>
              Dolor Sit Amet -{">"}
            </Link>
          </Button>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default Hero;
