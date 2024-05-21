import * as MuiLayout from "~/components/layouts";
// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

export function HeadingWithCTAButtonSection() {
  return (
    <MuiLayout.Section className="bg-white dark:bg-gray-900">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto flex max-w-screen-sm flex-col items-center text-center">
          <Heading
            level={2}
            className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
          >
            Start your free trial today
          </Heading>
          <Text className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
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
