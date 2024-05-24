import { useState } from "react";

import { Text } from "~/components/ui/custom/text";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function FooterWithPagination() {
  const [currentPage, setCurrentPage] = useState(2);

  const onPageChange = (page: number) => setCurrentPage(page);

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
          <Select>
            <SelectTrigger className="w-20">
              <SelectValue placeholder="100" />
            </SelectTrigger>
            <SelectContent>
              {["100", "200", "500", "1000"].map((item, index) => (
                <SelectItem key={index} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Text className="mb-4 text-nowrap text-sm text-gray-500 dark:text-gray-400 md:mb-0 xl:text-center">
          Show&nbsp;
          <span className="font-semibold">1-15</span>
          &nbsp;of&nbsp;
          <span className="font-semibold">987</span>
        </Text>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious title="" onClick={() => onPageChange} />
            </PaginationItem>
            {Array.from({ length: 3 }, (_, index) => index + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  isActive={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={() => onPageChange} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </footer>
  );
}
