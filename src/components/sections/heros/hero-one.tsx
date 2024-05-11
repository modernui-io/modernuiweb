import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import Placeholder from "~/lib/assets/images/placeholder.jpg";

const Hero = () => {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container>
        <div className="not-prose flex flex-col gap-6">
          <Button asChild className="w-fit" size={"sm"} variant={"outline"}>
            <Link href="https://9d8.dev">
              Lorem ipsum dolor sit amet <ArrowRight className="w-4" />
            </Link>
          </Button>
          <Heading level={1} className="text-4xl text-primary-500 md:text-6xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Heading>
          <Heading level={2} className="text-xl font-light md:text-3xl">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Heading>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default Hero;
