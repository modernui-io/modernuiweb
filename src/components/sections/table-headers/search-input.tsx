import { FaFilter } from "react-icons/fa";
import { HiCog, HiInformationCircle, HiPlus, HiSearch } from "react-icons/hi";

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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function TableHeaderWithSearchInput() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="divide-y px-4 dark:divide-gray-700">
            <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
              <div className="flex flex-1 items-center space-x-2">
                <h5>
                  <span className="dark:text-white">Rankings Overview</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">
                    1-100 (436)
                  </span>
                </h5>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div>
                        <span className="sr-only">More info</span>
                        <HiInformationCircle className="size-4 text-gray-400" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Showing 1-100 of 436 results</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
                <Button color="gray" className="[&>span]:text-xs">
                  <HiCog className="mr-2 size-4" />
                  Table settings
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between space-y-3 py-4 md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <Label htmlFor="simple-search" className="sr-only">
                    Search
                  </Label>
                  <HiSearch className="absolute left-6 z-10 size-5 text-gray-500 dark:text-gray-400" />
                  <Input
                    id="simple-search"
                    name="simple-search"
                    placeholder="Search for products"
                    type="search"
                    className="w-full py-2 pl-8 dark:bg-gray-600 dark:text-white"
                  />
                </form>
              </div>
              <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
                <Button>
                  <HiPlus className="-ml-1 mr-1.5 size-3.5" />
                  <span className="whitespace-nowrap">Add product</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>
                      <FaFilter className="mr-3 size-3 text-white dark:text-gray-900" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <span className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                      Category
                    </span>
                    <ul className="space-y-2 pt-2">
                      <li className="flex items-center">
                        <Checkbox id="apple" name="apple" />
                        <Label
                          htmlFor="apple"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Apple (56)
                        </Label>
                      </li>
                      <li className="flex items-center">
                        <Checkbox id="fitbit" name="fitbit" />
                        <Label
                          htmlFor="fitbit"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Fitbit (56)
                        </Label>
                      </li>
                      <li className="flex items-center">
                        <Checkbox id="dell" name="dell" />
                        <Label
                          htmlFor="dell"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Dell (56)
                        </Label>
                      </li>
                      <li className="flex items-center">
                        <Checkbox defaultChecked id="asus" name="asus" />
                        <Label
                          htmlFor="asus"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          Asus (97)
                        </Label>
                      </li>
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>Actions</Button>
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
          </div>
        </div>
      </div>
    </section>
  );
}
