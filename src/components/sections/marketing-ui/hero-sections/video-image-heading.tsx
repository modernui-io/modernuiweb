import Image from "next/image";

import { ArrowRight } from "lucide-react";

// Component Imports
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import Placeholder from "~/lib/assets/images/placeholder.jpg";

export function VisualImageWithHeadingHero() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <Heading
            level={"lgDisplay"}
            className="mb-4 max-w-2xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl"
          >
            Payments tool for software companies
          </Heading>
          <Text className="mb-6 max-w-2xl text-muted-foreground md:text-lg lg:mb-8 lg:text-xl">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </Text>
          <div className="flex w-fit items-center gap-5">
            <Button className="[&>span]:items-center">
              Get started
              <ArrowRight className="w-5 text-background" />
            </Button>
            <Button variant="outline">Speak to Sales</Button>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <Image src={Placeholder} alt="mockup" />
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
