import Image from "next/image";

import { ArrowRight } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image Import
import Placeholder from "~/lib/assets/images/placeholder.jpg";

export function ImageWithCTAButtonSection() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <Image
          alt=""
          src={Placeholder}
          className="size-full rounded-tl-3xl object-cover dark:hidden"
        />
        <Image
          alt=""
          src={Placeholder}
          className="hidden size-full rounded-tl-3xl object-cover dark:block"
        />
        <div className="mt-4 md:mt-0">
          <Heading level={2} className="mb-4 font-extrabold tracking-tight ">
            Let's create more tools and ideas that brings us together.
          </Heading>
          <Text className="mb-6 text-muted-foreground md:text-lg">
            ModernUi Web helps you connect with friends and communities of
            people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups.
          </Text>
          <Button
            color="info"
            size="lg"
            className="w-fit [&>span]:items-center"
          >
            Get started
            <ArrowRight />
          </Button>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
