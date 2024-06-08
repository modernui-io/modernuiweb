import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import { Label } from "~/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "~/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const pages = ["10", "25", "50", "100"];

export function TableFooterInputPagination() {
  return (
    <MuiLayout.Section className="flex h-screen items-center bg-background">
      <MuiLayout.Container className="mx-auto w-full max-w-screen-xl overflow-x-visible px-4 lg:px-12">
        <div className="relative rounded-b-lg bg-background shadow-md dark:bg-muted-foreground/20">
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <div className="flex items-center space-x-3">
              <Label
                htmlFor="rows"
                className="text-sm font-normal text-muted-foreground"
              >
                Rows per page
              </Label>

              <Select>
                <SelectTrigger className="w-max dark:bg-muted-foreground/20">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  {pages.map((item, index) => (
                    <SelectItem key={index} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Text level={"xs"}>
                <span className="font-semibold">1-10</span>
                &nbsp;of&nbsp;
                <span className="font-semibold">100</span>
              </Text>
            </div>

            <div>
              <Pagination>
                <PaginationContent className="inline-flex items-stretch gap-0 -space-x-px">
                  <PaginationItem>
                    <Button
                      className="flex h-auto w-20 items-center justify-center rounded-l-lg rounded-r-none border border-muted-foreground/10 bg-background px-3 py-2.5 text-sm leading-tight text-muted-foreground hover:bg-primary-100 hover:text-primary dark:border-muted-foreground/20 dark:bg-muted-foreground/5 dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                      variant={"outline"}
                    >
                      Previous
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button
                      className="flex h-auto w-20 items-center justify-center rounded-l-none rounded-r-lg border border-muted-foreground/10 bg-background px-3 py-2.5 text-sm leading-tight text-muted-foreground hover:bg-primary-100 hover:text-primary dark:border-muted-foreground/20 dark:bg-muted-foreground/5 dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                      variant={"outline"}
                    >
                      Next
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
