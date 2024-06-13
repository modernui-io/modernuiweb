import Image from "next/image";

import {
  HiCheckCircle,
  HiInformationCircle,
  HiOutlineRefresh,
  HiShoppingCart,
  HiXCircle,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function AdvancedComparisonTable() {
  return (
    <section className="bg-background py-3 sm:py-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="overflow-hidden shadow-md sm:rounded-lg">
          <div className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="flex items-center">
              <h5 className="mr-3 font-semibold">Compare Products</h5>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <>
                      <HiInformationCircle className="size-4 text-gray-400" />
                      <span className="sr-only">More info</span>
                    </>
                  </TooltipTrigger>
                  <TooltipContent>
                    <Text>
                      Selected Xbox Series S, PlayStation 5, and Xbox Series X
                    </Text>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex shrink-0 flex-row items-center justify-end space-x-3">
              <Button>
                <svg
                  className="mr-2 size-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add new product
              </Button>
              <Button variant={"outline"}>
                <HiOutlineRefresh className="mr-2 size-4" />
                Reset all
              </Button>
            </div>
          </div>
          <div className="mx-4 border-t"></div>
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <ul className="hidden flex-wrap gap-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400 md:flex">
              <li className="mr-4">
                <Button variant={"outline"} className="rounded-full">
                  General Information
                </Button>
              </li>
              <li className="mr-4">
                <Button className="rounded-full">Technical Information</Button>
              </li>
              <li className="mr-4">
                <Button variant={"outline"} className="rounded-full">
                  Delivery Information
                </Button>
              </li>
              <li className="mr-4">
                <Button variant={"outline"} className="rounded-full">
                  Ratings
                </Button>
              </li>
            </ul>
          </div>

          <Table className="w-full text-sm text-gray-500 dark:text-gray-400">
            <TableHeader>
              <TableHead></TableHead>
              <TableHead>
                <div className="text-lg">
                  <Image
                    width={100}
                    height={100}
                    src="https://pngimg.com/uploads/xbox/xbox_PNG101375.png"
                    alt="iMac Front"
                    className="h-32 w-auto"
                  />
                  <div className="mt-4">Xbox Series S</div>
                </div>
              </TableHead>
              <TableHead>
                <div className="text-lg">
                  <Image
                    width={100}
                    height={100}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/900px-PlayStation_5_and_DualSense_with_transparent_background.png"
                    alt="iMac Front"
                    className="h-32 w-auto"
                  />
                  <div className="mt-4">PlayStation 5</div>
                </div>
              </TableHead>
              <TableHead>
                <div className="text-lg">
                  <Image
                    width={100}
                    height={100}
                    src="https://pngimg.com/uploads/xbox/xbox_PNG101375.png"
                    alt="iMac Front"
                    className="h-32 w-auto"
                  />
                  <div className="mt-4">Xbox Series X</div>
                </div>
              </TableHead>
            </TableHeader>
            <TableBody className="w-full">
              <TableRow className="bg-gray-50 dark:bg-gray-800">
                <TableCell
                  width={"100%"}
                  className="whitespace-nowrap px-4 py-3 font-medium"
                >
                  General Information
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Brand
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Microsoft
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Sony
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Microsoft
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Product Name
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Xbox Series S
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  PlayStation 5
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Xbox Series X
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Colors
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  White
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  White/Black
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Black
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Category
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Gaming/Console
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Gaming/Console
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Gaming/Console
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Price
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  $499
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  $599
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  $299
                </TableCell>
              </TableRow>
              <TableRow className="w-full bg-gray-50 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Technical Information
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Platform
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Xbox Series S
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  PlayStation 5 Digital Edition
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Xbox Series X
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  RAM
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  16GB GDDR6
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  16GB GDDR6
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  16GB GDDR
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  CPU
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  8-core, 3.6 GHz AMD Zen 2
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  8-core 3.5 GHz AMD Zen 2
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  8-core 3.8 GHz AMD Zen 2
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  GPU
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  4 teraflop AMD RDNA 2
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  10.3 teraflop AMD RDNA 2
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  12 teraflop AMD RDNA 2
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Storage
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  512 GB custom NVMe SSD
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  825 GB custom SSD
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  1 TB custom SSD
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Resolution
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Up to 2K
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Up to 8K
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Up to 8K
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Frame Rate
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Up to 120 fps
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Up to 120 fps
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Up to 120 fps
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Optical Drive
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 text-red-500">
                  <HiXCircle className="size-4" />
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium text-green-500">
                  <HiCheckCircle className="size-4" />
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium text-green-500">
                  <HiCheckCircle className="size-4" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  ConTableRowoller
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  1
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  1
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  1
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Web Connection
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Ethernet/Wi-Fi
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Ethernet/Wi-Fi
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Ethernet/Wi-Fi
                </TableCell>
              </TableRow>
              <TableRow className="w-full bg-gray-50 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Delivery
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  CounTableRowy
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Worldwide
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Worldwide
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  Worldwide
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Duration
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  5-10 Days
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  30 Days
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  30 Days
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Tax
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  2.5%
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  2.5%
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  2.5%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="whitespace-nowrap px-4 py-3 font-normal">
                  Tax
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  2.5%
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  2.5%
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  2.5%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-4 py-3" />
                <TableCell className="whitespace-nowrap px-4 py-6 font-medium">
                  <Button>
                    <HiShoppingCart className="mr-2 size-5" />
                    Add to cart
                  </Button>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  <Button>
                    <HiShoppingCart className="mr-2 size-5" />
                    Add to cart
                  </Button>
                </TableCell>
                <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                  <Button>
                    <HiShoppingCart className="mr-2 size-5" />
                    Add to cart
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
