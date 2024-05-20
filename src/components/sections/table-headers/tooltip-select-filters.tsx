import { FaChevronDown } from "react-icons/fa";
import { HiInformationCircle, HiPlus } from "react-icons/hi";

import { Button } from "~/components/ui/button";
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function TableHeaderWithTooltipAndSelectFilters() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="mx-4 flex flex-col items-center justify-between space-y-3 border-b py-4 dark:border-gray-700 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex w-full items-center space-x-3">
              <h5 className="font-semibold dark:text-white">
                Flowbite Products
              </h5>
              <div className="font-medium text-gray-500 dark:text-gray-400">
                6,560 results
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div>
                      <span className="sr-only">More info</span>
                      <HiInformationCircle className="size-4 text-gray-500 dark:text-gray-400" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Showing 1-10 of 6,560 results</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex w-full flex-col items-center justify-end space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
              <Button className="flex-1 md:flex-none">
                <HiPlus className="mr-2 size-3.5" />
                Add new product
              </Button>
              <Button color="gray" className="flex-1 md:flex-none">
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  stroke="currentColor"
                  viewBox="0 0 12 13"
                  className="mr-2 size-3"
                >
                  <path d="M1 2V1h10v3H1V2Zm0 4h5v6H1V6Zm8 0h2v6H9V6Z" />
                </svg>
                Manage Columns
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse items-start justify-between p-4 dark:border-gray-700 md:flex-row md:items-center md:space-x-4">
            <div className="mt-3 md:mt-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    <FaChevronDown className="mr-3 size-3" /> Actions
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
                  <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="samsung">Samsung</SelectItem>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="nokia">Nokia</SelectItem>
                    <SelectItem value="sony">Sony</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="price" className="sr-only">
                  Price
                </Label>
                <Select name="price">
                  <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bellow-100">$ 1-100</SelectItem>
                    <SelectItem value="below-500">$ 101-500</SelectItem>
                    <SelectItem value="below-1000">$ 501-1000</SelectItem>
                    <SelectItem value="over-1000">$ 1001+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="category" className="sr-only">
                  Category
                </Label>
                <Select name="category">
                  <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pc">PC</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="tablet">Tablet</SelectItem>
                    <SelectItem value="console">Gaming/Console</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="color" className="sr-only">
                  Color
                </Label>
                <Select name="color">
                  <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                    <SelectValue placeholder="Color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="purple">Purple</SelectItem>
                    <SelectItem value="primary">Primary</SelectItem>
                    <SelectItem value="pink">Pink</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
