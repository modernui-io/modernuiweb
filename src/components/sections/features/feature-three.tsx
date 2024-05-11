import Image from "next/image";
import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import Placeholder from "~/lib/assets/images/placeholder.jpg";

const Feature = () => {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <Heading className="!my-0">Lorem ipsum dolor sit</Heading>
          <Text className="font-light leading-[1.4] opacity-70">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Text>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default Feature;
