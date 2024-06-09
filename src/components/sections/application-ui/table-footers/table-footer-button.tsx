import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";

export function TableFooterButton() {
  return (
    <MuiLayout.Section className="flex h-screen items-center bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl overflow-x-visible px-4 lg:px-12">
        <div className="relative rounded-b-lg bg-background shadow-md dark:bg-muted-foreground/20">
          <nav className="flex flex-row items-center justify-between p-4">
            <Button className="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 dark:focus:ring-primary">
              View full report
            </Button>
            <Text level={"sm"} className="ml-3">
              <span className="font-normal text-muted-foreground">
                Total users:{" "}
              </span>
              <span className="font-semibold">1867</span>
            </Text>
          </nav>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
