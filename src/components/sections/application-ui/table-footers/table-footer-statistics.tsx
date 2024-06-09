import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";

export function TableFooterStatistics() {
  return (
    <MuiLayout.Section className="flex h-screen items-center bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl overflow-x-visible px-4 lg:px-12">
        <div className="relative rounded-b-lg bg-background shadow-md dark:bg-muted-foreground/20">
          <nav className="flex flex-col items-start justify-between space-y-3 px-4 pb-4 pt-3 md:flex-row md:items-center md:space-y-0">
            <div className="flex items-center space-x-5 text-sm">
              <div>
                <Text level={"md"} className="mb-2 text-muted-foreground">
                  Purchase price
                </Text>
                <Text level={"md"} className="font-medium dark:text-white">
                  $ 3,567,890
                </Text>
              </div>
              <div>
                <Text level={"md"} className="mb-2 text-muted-foreground">
                  Total selling price
                </Text>
                <Text level={"md"} className="font-medium dark:text-white">
                  $ 8,489,400
                </Text>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/#"
                className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium text-primary hover:text-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 dark:focus:ring-primary"
              >
                Print barcodes
              </Link>
              <Link
                href="/#"
                className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium text-primary hover:text-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 dark:focus:ring-primary"
              >
                Duplicate
              </Link>
              <Button className="flex items-center rounded-lg bg-primary px-3 py-2 text-center text-xs font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/40 dark:focus:ring-primary">
                Export CSV
              </Button>
            </div>
          </nav>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
