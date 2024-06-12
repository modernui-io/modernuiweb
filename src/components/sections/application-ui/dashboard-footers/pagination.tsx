import { HiChevronDown, HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "~/components/ui/pagination";

export function FooterWithPagination() {
  return (
    <footer className="rounded-lg bg-background p-4 antialiased shadow md:p-6 xl:flex xl:items-center xl:justify-between xl:p-8">
      <Text className="mb-4 text-sm text-gray-500 dark:text-gray-400 xl:mb-0 xl:text-center">
        &copy; 2022&nbsp;
        <a
          href="https://modernui.com/"
          rel="noreferrer"
          target="_blank"
          className="hover:underline"
        >
          ModernUI
        </a>
        . All rights reserved.
      </Text>
      <div className="items-center md:flex md:space-x-4 lg:space-x-6">
        <div className="mb-4 flex w-full items-center md:mb-0">
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            On every page&nbsp;
          </Text>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="px-2">
                100
                <HiChevronDown className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {["100", "200", "500", "1000"].map((item, index) => (
                <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Text className="mb-4 text-nowrap text-sm text-gray-500 dark:text-gray-400 md:mb-0 xl:text-center">
          Show&nbsp;
          <span className="font-semibold">1-15</span>
          &nbsp;of&nbsp;
          <span className="font-semibold">987</span>
        </Text>
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
            {Array.from({ length: 3 }, (_, index) => index + 1).map((page) => (
              <PaginationItem key={page}>
                <Button
                  className="flex size-auto items-center justify-center rounded-none border border-muted-foreground/10 bg-background px-3 py-1.5 text-sm leading-tight text-muted-foreground hover:bg-primary-100 hover:text-primary dark:border-muted-foreground/20 dark:bg-muted-foreground/5 dark:hover:bg-muted-foreground/20 dark:hover:text-white"
                  variant={"outline"}
                >
                  {page}
                </Button>
              </PaginationItem>
            ))}
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
    </footer>
  );
}
