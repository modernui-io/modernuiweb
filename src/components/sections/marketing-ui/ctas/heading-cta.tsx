import * as MuiLayout from "~/components/layouts";
// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

export function HeadingWithCTAButtonSection() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto flex max-w-screen-sm flex-col items-center text-center">
          <Heading
            level={2}
            className="mb-4 font-extrabold leading-tight tracking-tight "
          >
            Start your free trial today
          </Heading>
          <Text className="mb-6 text-muted-foreground md:text-lg">
            Try ModernUI Web Platform for 30 days. No credit card required.
          </Text>
          <Button color="info" className="w-fit">
            Free trial for 30 days
          </Button>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
