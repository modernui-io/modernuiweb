import { Video } from "lucide-react";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

export function DefaultCTASection() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <Heading level={1} className="mb-4 font-extrabold tracking-tight">
            Let&#39;s find more that brings us together.
          </Heading>
          <Text className="mb-8 text-muted-foreground sm:text-lg">
            ModernUI Web helps you connect with friends, family and communities
            of people who share your interests. Connecting with your friends and
            family as well as discovering new ones is easy with features like
            Groups, Watch and Marketplace.
          </Text>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button color="info" size="lg">
              Get started
            </Button>
            <Button
              color="gray"
              variant="outline"
              size="lg"
              className="bg-muted hover:bg-muted-foreground hover:text-background [&>span]:border-gray-300"
            >
              <Video className="mr-1" />
              View more
            </Button>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
