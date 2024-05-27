import { useState } from "react";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { HiPlus, HiRefresh, HiShoppingCart, HiUpload } from "react-icons/hi";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import { Label } from "~/components/ui/label";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export function AdvancedTableWithProducts() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <section className="bg-background py-3 sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <div className="flex flex-col space-y-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0">
            <div className="flex flex-1 items-center space-x-4">
              <h5>
                <span className="text-gray-500">All Products:&nbsp;</span>
                <span>123456</span>
              </h5>
              <h5>
                <span className="text-gray-500">Total sales:&nbsp;</span>
                <span>$88.4k</span>
              </h5>
            </div>
            <div className="flex shrink-0 flex-col space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
              <Button>
                <HiPlus className="mr-2 size-3.5" />
                Add new product
              </Button>
              <Button color="gray">
                <HiRefresh className="mr-2 size-4" />
                Update stocks 1/250
              </Button>
              <Button color="gray">
                <HiUpload className="mr-2 size-4" />
                Export
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="[&_*]:whitespace-nowrap">
              <TableHeader>
                <TableRow>
                  <TableHead className="p-4 group-first/head:first:rounded-tl-none">
                    <div className="flex items-center">
                      <Checkbox id="checkbox-all" name="checkbox-all" />
                      <Label htmlFor="checkbox-all" className="sr-only">
                        Select all
                      </Label>
                    </div>
                  </TableHead>
                  <TableHead className="px-4 py-3">Product</TableHead>
                  <TableHead className="px-4 py-3">Category</TableHead>
                  <TableHead className="px-4 py-3">Stock</TableHead>
                  <TableHead className="px-4 py-3">Sales/Day</TableHead>
                  <TableHead className="px-4 py-3">Sales/Month</TableHead>
                  <TableHead className="px-4 py-3">Rating</TableHead>
                  <TableHead className="px-4 py-3">Sales</TableHead>
                  <TableHead className="px-4 py-3">Revenue</TableHead>
                  <TableHead className="p-4 group-first/head:last:rounded-tr-none">
                    Last Update
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 27&#34;
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Desktop PC</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-red-700"></div>
                      95
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.47
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.47
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      1.6M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $3.2M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    Just now
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 20&quot;
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Desktop PC</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-red-700"></div>
                      108
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.15
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.32
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      6M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $785K
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    This week
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPhone 14
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Phone</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-green-400"></div>
                      24
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.00
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.99
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      1.2M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $3.2M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    Just now
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPad Air
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Tablet</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-red-700"></div>
                      287
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.47
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.00
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      298K
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $425K
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    Just now
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://pngimg.com/uploads/xbox/xbox_PNG101375.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series S
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Gaming/Console</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-yellow-300"></div>
                      450
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.61
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.30
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      99
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $345K
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    This week
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/900px-PlayStation_5_and_DualSense_with_transparent_background.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    PlayStation 5
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Gaming/Console</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-green-400"></div>
                      2435
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.41
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.11
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      2.1M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $4.2M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    This week
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://pngimg.com/uploads/xbox/xbox_PNG101375.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series X
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Gaming/Console</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-orange-400"></div>
                      235
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    7.09
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    3.32
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      989K
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $2.27M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    Just now
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple Watch SE
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Watch</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-yellow-300"></div>
                      433
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    4.96
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.74
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      102
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $45K
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    2 weeks ago
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    NIKON D850
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Photo/Video</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-orange-400"></div>
                      351
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.20
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.74
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      1.2M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $1.52M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    3 weeks ago
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Monitor BenQ EX2710Q
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">TV/Monitor</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-green-400"></div>
                      1242
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    4.12
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.30
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      211K
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $1.2M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    Just now
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-nowrap text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing&nbsp;
              <span className="font-semibold">1-10</span>
              &nbsp;of&nbsp;
              <span className="font-semibold">1000</span>
            </span>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious title="" onClick={() => onPageChange} />
                </PaginationItem>
                {Array.from({ length: 3 }, (_, index) => index + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext onClick={() => onPageChange} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </nav>
        </div>
      </div>
    </section>
  );
}
