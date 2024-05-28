import Image from "next/image";

import { FaChevronDown } from "react-icons/fa";
import {
  HiChevronDown,
  HiInformationCircle,
  HiLocationMarker,
  HiSelector,
  HiStar,
} from "react-icons/hi";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
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

export function AdvancedTableWithExpandableRows() {
  return (
    <section className="bg-background py-3 sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-background shadow-md sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 border-b p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex w-full items-center space-x-3">
              <h5 className="font-semibold">ModernUI Products</h5>
              <div className="font-medium text-gray-400">6,560 results</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <>
                      <HiInformationCircle className="size-4 text-gray-400" />
                      <span className="sr-only">More info</span>
                    </>
                  </TooltipTrigger>
                  <TooltipContent>
                    <Text>Showing 1-10 of 6,560 results </Text>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex w-full flex-row items-center justify-end space-x-3 md:w-fit">
              <Button className="w-full whitespace-nowrap">
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
              <Button className="w-full whitespace-nowrap">
                <svg
                  className="mr-2 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 12 13"
                  aria-hidden
                >
                  <path d="M1 2V1h10v3H1V2Zm0 4h5v6H1V6Zm8 0h2v6H9V6Z" />
                </svg>
                Manage Columns
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse items-start justify-between border-b p-4 md:flex-row md:items-center md:space-x-4">
            <div className="mt-3 md:mt-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"}>
                    <HiChevronDown className="mr-3 size-3" /> Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete All</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-4 md:gap-4 lg:w-2/3">
              <div className="w-full">
                <Label htmlFor="brand" className="sr-only">
                  Brand
                </Label>
                <Select name="brand">
                  <SelectTrigger>
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "samsung", label: "Samsung" },
                      { value: "apple", label: "Apple" },
                      { value: "nokia", label: "Nokia" },
                      { value: "sony", label: "Sony" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="price" className="sr-only">
                  Price
                </Label>
                <Select name="price">
                  <SelectTrigger>
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "bellow-100", label: "$ 1-100" },
                      { value: "below-500", label: "$ 101-500" },
                      { value: "below-1000", label: "$ 501-1000" },
                      { value: "over-1000", label: "$ 1001+" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="category" className="sr-only">
                  Category
                </Label>
                <Select name="category">
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "pc", label: "PC" },
                      { value: "phone", label: "Phone" },
                      { value: "tablet", label: "Tablet" },
                      { value: "console", label: "Gaming/Console" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="color" className="sr-only">
                  Color
                </Label>
                <Select name="color">
                  <SelectTrigger>
                    <SelectValue placeholder="Color" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "purple", label: "Purple" },
                      { value: "primary", label: "Primary" },
                      { value: "pink", label: "Pink" },
                      { value: "green", label: "Green" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="text-sm">
              <TableHeader className="text-xs uppercase">
                <TableRow>
                  <TableHead className="p-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-all"
                        name="checkbox-all"
                        className="size-4 rounded"
                      />
                      <Label htmlFor="checkbox-all" className="sr-only">
                        Select all products
                      </Label>
                    </div>
                  </TableHead>
                  <TableHead className="px-4 py-3">
                    <span className="sr-only">Expand/Collapse Row</span>
                  </TableHead>
                  <TableHead className="min-w-56 px-4 py-3">Product</TableHead>
                  <TableHead className="min-w-40 px-4 py-3">
                    Category
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="min-w-24 px-4 py-3">
                    Brand
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="min-w-24 px-4 py-3">
                    Price
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="min-w-24 px-4 py-3">
                    Stock
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="min-w-48 px-4 py-3">
                    Total Sales
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="min-w-28 px-4 py-3">
                    Status
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="w-full">
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-0"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-0")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-0"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 27&#34;
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    PC
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $2999
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    200
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    245
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-0"
                  aria-labelledby="table-column-header-0"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-1"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-1")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-1"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 20&quot;
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    PC
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $1499
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    1237
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    2000
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-1"
                  aria-labelledby="table-column-header-1"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-2"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-2")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-2"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPhone 14
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Phone
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $999
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    300
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    466
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-2"
                  aria-labelledby="table-column-header-2"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-3"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-3")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-3"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPad Air
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Tablet
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $1199
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    4576
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    90
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-3"
                  aria-labelledby="table-column-header-3"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-4"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-4")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-4"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series S
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Gaming/Console
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Microsoft
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $299
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    56
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    3087
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-4"
                  aria-labelledby="table-column-header-4"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-5"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-5")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-5"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    PlayStation 5
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Gaming/Console
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Sony
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $799
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    78
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    2999
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-5"
                  aria-labelledby="table-column-header-5"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-6"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-6")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-6"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series X
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Gaming/Console
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Microsoft
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $699
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    200
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    1870
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-6"
                  aria-labelledby="table-column-header-6"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-7"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-7")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-7"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple Watch SE
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Watch
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $399
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    657
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    5067
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-7"
                  aria-labelledby="table-column-header-7"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-8"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-8")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-8"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    NIKON D850
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Photo
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Nikon
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $599
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    465
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    1870
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-8"
                  aria-labelledby="table-column-header-8"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-9"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-9")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-9"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Monitor BenQ EX2710Q
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    TV/Monitor
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    BenQ
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $499
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    354
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    76
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-9"
                  aria-labelledby="table-column-header-9"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg p-2 sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Edit
                      </Button>
                      <Button>Preview</Button>
                      <Button color="failure">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div
            className="flex flex-col items-start justify-between space-y-3 px-4 pb-4 pt-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <div className="flex items-center space-x-5 text-xs">
              <div>
                <div className="mb-1 text-gray-500 dark:text-gray-400">
                  Purchase price
                </div>
                <div className="font-medium">$ 3,567,890</div>
              </div>
              <div>
                <div className="mb-1 text-gray-500 dark:text-gray-400">
                  Total selling price
                </div>
                <div className="font-medium">$ 8,489,400</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium text-primary-700 hover:text-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">
                Print barcodes
              </button>
              <button className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium text-primary-700 hover:text-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800">
                Duplicate
              </button>
              <Button size="sm" className="[&_span]:text-xs">
                Export CSV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
