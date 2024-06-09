import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "~/components/ui/pagination";

export function DefaultFooterPagination() {
  return (
    <MuiLayout.Section className="flex h-screen items-center bg-background">
      <MuiLayout.Container className="mx-auto w-full max-w-screen-xl overflow-x-visible px-4 lg:px-12">
        <div className="relative rounded-b-lg bg-background shadow-md dark:bg-muted-foreground/20">
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <Text className="text-sm font-normal text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-secondary-foreground">
                1-10
              </span>{" "}
              of{" "}
              <span className="font-semibold text-secondary-foreground">
                1000
              </span>
            </Text>
            <div>
              <Pagination>
                <PaginationContent className="inline-flex items-stretch gap-0 -space-x-px">
                  <PaginationItem>
                    <Button
                      className="flex h-full w-10 items-center justify-center rounded-l-lg rounded-r-none border border-muted-foreground/10 bg-background px-3 py-1.5 text-sm leading-tight text-muted-foreground hover:bg-primary-100 hover:text-primary dark:border-muted-foreground/20 dark:bg-muted-foreground/5 dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                      variant={"outline"}
                    >
                      <HiChevronLeft />
                    </Button>
                  </PaginationItem>
                  {Array.from({ length: 3 }, (_, index) => index + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <Button
                          className="flex size-auto items-center justify-center rounded-none border border-muted-foreground/10 bg-background px-3 py-1.5 text-sm leading-tight text-muted-foreground hover:bg-primary-100 hover:text-primary dark:border-muted-foreground/20 dark:bg-muted-foreground/5 dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                          variant={"outline"}
                        >
                          {page}
                        </Button>
                      </PaginationItem>
                    ),
                  )}
                  <PaginationItem>
                    <Button
                      variant={"outline"}
                      className="flex size-auto items-center justify-center rounded-none border border-muted-foreground/10 bg-background px-3 py-1.5 text-sm leading-tight text-muted-foreground shadow-sm hover:bg-primary-100 hover:text-primary dark:border-muted-foreground/20 dark:bg-muted-foreground/5 dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                    >
                      ...
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button
                      className="flex size-auto items-center justify-center rounded-none border border-muted-foreground/10 bg-background px-3 py-1.5 text-sm leading-tight text-muted-foreground hover:bg-primary-100 hover:text-primary dark:border-muted-foreground/20 dark:bg-muted-foreground/5 dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                      variant={"outline"}
                    >
                      100
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button
                      className="flex h-full w-10 items-center justify-center rounded-l-none rounded-r-lg border border-muted-foreground/10 bg-background px-3 py-1.5 text-sm leading-tight text-muted-foreground hover:bg-primary-100 hover:text-primary dark:border-muted-foreground/20 dark:bg-muted-foreground/5 dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                      variant={"outline"}
                    >
                      <HiChevronRight />
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </nav>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
