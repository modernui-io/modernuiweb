import Link from "next/link";

import { HiChevronDown, HiChevronRight } from "react-icons/hi";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const timeRanges = [
  "Yesterday",
  "Today",
  "Last 7 days",
  "Last 30 days",
  "Last 90 days",
];
export function TableFooterDropdownLink() {
  return (
    <MuiLayout.Section className="flex h-screen items-center bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl overflow-x-visible px-4 lg:px-12">
        <div className="relative rounded-b-lg bg-background shadow-md dark:bg-muted-foreground/20">
          <nav
            className="flex flex-row items-center justify-between p-4"
            aria-label="Table navigation"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-3 inline-flex cursor-pointer items-center rounded-lg text-center text-sm font-medium text-muted-foreground"
                >
                  Last 7 days
                  <HiChevronDown className="ml-1 size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-0" align="end">
                <div>
                  <DropdownMenuItem className="block px-4 py-2 text-sm font-medium text-secondary-foreground dark:bg-muted-foreground/30">
                    Sep 16, 2021 - Sep 22, 2021
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-0 bg-white/30" />
                  {timeRanges.map((timeRange, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted-foreground/80 dark:bg-muted-foreground/30 dark:hover:bg-muted-foreground/50 dark:hover:text-white"
                    >
                      {timeRange}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="my-0 bg-white/30" />
                  <DropdownMenuItem className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted-foreground/80 dark:bg-muted-foreground/30 dark:hover:bg-muted-foreground/50 dark:hover:text-white">
                    Custom...
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/#"
              className="inline-flex items-center rounded-lg p-2 font-medium uppercase hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/20 sm:mt-0"
            >
              <Text className="text-xs text-primary sm:text-md">
                Transactions Report
              </Text>
              <HiChevronRight className="ml-2 size-5 text-primary" />
            </Link>
          </nav>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
