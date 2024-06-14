import Image from "next/image";

import { ArrowRight } from "lucide-react";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import DashBoardDark from "~/lib/assets/images/cta-dashboard-mockup-dark.svg";
// Image Import
import DashBoard from "~/lib/assets/images/cta-dashboard-mockup.svg";

export function ImageWithCTAButtonSection() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        <Image
          alt=""
          src={DashBoard}
          className="size-full object-cover dark:hidden"
        />
        <Image
          alt=""
          src={DashBoardDark}
          className="hidden size-full object-cover dark:block"
        />
        <div className="mt-4 md:mt-0">
          <Heading
            level={2}
            className="mb-4 text-wrap font-extrabold tracking-tight"
          >
            Let&#39;s create more tools and ideas that brings us together.
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
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
