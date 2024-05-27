import { HiCog, HiDotsHorizontal, HiFilter, HiSearch } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export function AdvancedTableWithSortableRows() {
  return (
    <section className="bg-background py-3 sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <div className="mx-4 border-b">
            <div className="flex items-center justify-between space-x-4 pt-3">
              <div className="flex flex-1 items-center space-x-3">
                <h5 className="font-semibold">All products</h5>
              </div>
              <div className="flex shrink-0 flex-row items-center justify-end space-x-3">
                <Button>View JSON</Button>
                <Button>
                  <svg
                    className="mr-2 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  Export
                </Button>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center justify-between py-3 md:flex-row md:space-x-4">
              <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
                <form className="w-full flex-1 md:mr-4 md:max-w-sm">
                  <Label
                    htmlFor="default-search"
                    className="sr-only text-sm font-medium"
                  >
                    Search
                  </Label>
                  <div className="relative flex items-center">
                    <HiSearch className="absolute left-3 size-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      id="default-search"
                      name="default-search"
                      placeholder="Search..."
                      required
                      type="search"
                      className="pl-7 [&_input]:py-2"
                    />
                    <Button
                      type="submit"
                      className="absolute inset-y-0 right-0 rounded-l-none rounded-r-lg"
                    >
                      Search
                    </Button>
                  </div>
                </form>
                <div className="flex items-center space-x-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>
                        <HiFilter className="mr-2 size-4" />
                        Filter
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <div className="p-3">
                        <h6 className="mb-3 text-sm font-medium">
                          Choose brand
                        </h6>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Checkbox id="apple" name="apple" />
                            <Label
                              htmlFor="apple"
                              className="ml-2 text-sm font-medium"
                            >
                              Apple (56)
                            </Label>
                          </li>
                          <li className="flex items-center">
                            <Checkbox id="fitbit" name="fitbit" />
                            <Label
                              htmlFor="fitbit"
                              className="ml-2 text-sm font-medium"
                            >
                              Microsoft (16)
                            </Label>
                          </li>
                          <li className="flex items-center">
                            <Checkbox id="razer" name="razer" />
                            <Label
                              htmlFor="razer"
                              className="ml-2 text-sm font-medium"
                            >
                              Razer (49)
                            </Label>
                          </li>
                          <li className="flex items-center">
                            <Checkbox id="nikon" name="nikon" />
                            <Label
                              htmlFor="nikon"
                              className="ml-2 text-sm font-medium"
                            >
                              Nikon (12)
                            </Label>
                          </li>
                          <li className="flex items-center">
                            <Checkbox id="benq" name="benq" />
                            <Label
                              htmlFor="benq"
                              className="ml-2 text-sm font-medium"
                            >
                              BenQ (74)
                            </Label>
                          </li>
                        </ul>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>
                        <HiCog className="mr-2 size-4" />
                        Configurations
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>By Category</DropdownMenuItem>
                      <DropdownMenuItem>By Brand</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Reset</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="mb-3 flex w-full shrink-0 flex-col items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3">
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
              </div>
            </div>
          </div>
          <div className="mx-4 flex flex-wrap pb-3">
            <div className="mr-4 mt-3 hidden items-center text-sm font-medium md:flex">
              Show only:
            </div>
            <div className="flex flex-wrap">
              <div className="mr-4 mt-3 flex items-center">
                <Checkbox id="inline-radio" name="inline-radio-group" />
                <Label
                  htmlFor="inline-radio"
                  className="ml-2 text-sm font-medium"
                >
                  All
                </Label>
              </div>
              <div className="mr-4 mt-3 flex items-center">
                <Checkbox id="inline-2-radio" name="inline-radio-group" />
                <Label
                  htmlFor="inline-2-radio"
                  className="ml-2 text-sm font-medium"
                >
                  Active products
                </Label>
              </div>
              <div className="mr-4 mt-3 flex items-center">
                <Checkbox id="inline-3-radio" name="inline-radio-group" />
                <Label
                  htmlFor="inline-3-radio"
                  className="ml-2 text-sm font-medium"
                >
                  Pending products
                </Label>
              </div>
              <div className="mr-4 mt-3 flex items-center">
                <Checkbox id="inline-4-radio" name="inline-radio-group" />
                <Label
                  htmlFor="inline-4-radio"
                  className="ml-2 text-sm font-medium"
                >
                  Inactive products
                </Label>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full text-left text-sm">
              <TableHeader className="text-xs uppercase">
                <TableRow>
                  <TableHead scope="col" className="p-4">
                    <div className="flex items-center">
                      <Checkbox id="checkbox-all" name="checkbox-all" />
                      <Label htmlFor="checkbox-all" className="sr-only">
                        Select all
                      </Label>
                    </div>
                  </TableHead>
                  <TableHead scope="col" className="min-w-56 px-4 py-3">
                    Product
                  </TableHead>
                  <TableHead scope="col" className="min-w-40 px-4 py-3">
                    Category
                    <svg
                      className="ml-1 inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </TableHead>
                  <TableHead scope="col" className="min-w-28 px-4 py-3">
                    Brand
                    <svg
                      className="ml-1 inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </TableHead>
                  <TableHead scope="col" className="min-w-24 px-4 py-3">
                    Price
                    <svg
                      className="ml-1 inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </TableHead>
                  <TableHead scope="col" className="min-w-28 px-4 py-3">
                    Stock
                    <svg
                      className="ml-1 inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </TableHead>
                  <TableHead scope="col" className="min-w-48 px-4 py-3">
                    Total Sales
                    <svg
                      className="ml-1 inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </TableHead>
                  <TableHead scope="col" className="min-w-28 px-4 py-3">
                    Status
                    <svg
                      className="ml-1 inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      />
                    </svg>
                  </TableHead>
                  <TableHead scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt="iMac Front"
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
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt="iMac Front"
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
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt="iMac Front"
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
                    <Badge className="w-fit">Inactive</Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt="iMac Front"
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
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://pngimg.com/uploads/xbox/xbox_PNG101375.png"
                      alt="iMac Front"
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
                    <Badge color="warning" className="w-fit">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/900px-PlayStation_5_and_DualSense_with_transparent_background.png"
                      alt="iMac Front"
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
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://pngimg.com/uploads/xbox/xbox_PNG101375.png"
                      alt="iMac Front"
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
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt="iMac Front"
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
                    <Badge className="w-fit">Inactive</Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt="iMac Front"
                      className="mr-3 h-8 w-auto"
                    />
                    NIKON 2850
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
                    <Badge color="warning" className="w-fit">
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
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
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <img
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt="iMac Front"
                      className="mr-3 h-8 w-auto"
                    />
                    BenQ EX2710Q
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
                    <Badge color="success" className="w-fit">
                      Active
                    </Badge>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
              <Button
                variant={"ghost"}
                className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium"
              >
                Print barcodes
              </Button>
              <Button
                variant={"ghost"}
                className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium"
              >
                Duplicate
              </Button>
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
