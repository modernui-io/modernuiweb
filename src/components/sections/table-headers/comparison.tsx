import { FaChevronDown } from "react-icons/fa";
import { HiInformationCircle, HiPlus, HiRefresh } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
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

export function TableHeaderWithComparison() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-start justify-between space-y-3 p-4 dark:bg-gray-800 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="flex items-center">
              <h5 className="mr-3 font-semibold dark:text-white">
                Compare Products
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
                    <p>
                      Selected Xbox Series S, PlayStation 5, and Xbox Series X
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex w-auto shrink-0 flex-row items-center justify-end space-x-3">
              <Button>
                <HiPlus className="mr-2 size-3.5" />
                Add new product
              </Button>
              <Button>
                <HiRefresh className="mr-2 size-4 text-white dark:text-gray-900" />
                Reset all
              </Button>
            </div>
          </div>
          <div className="mx-4 border-t dark:mx-0 dark:border-gray-700 dark:bg-gray-800"></div>
          <div className="flex flex-col items-center justify-between space-y-3 px-4 pb-4 dark:bg-gray-800 md:mt-4 md:flex-row md:space-x-4 md:space-y-0 md:pb-0">
            <ul className="hidden flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400 md:flex">
              <li className="mb-4 mr-2 lg:mr-4">
                <Button>General Information</Button>
              </li>
              <li className="mb-4 mr-2 lg:mr-4">
                <Button>Technical Information</Button>
              </li>
              <li className="mb-4 mr-2 lg:mr-4">
                <Button>Delivery Information</Button>
              </li>
              <li className="mb-4 mr-2 lg:mr-4">
                <Button>Ratings</Button>
              </li>
            </ul>
            <div className="flex w-full items-center space-x-4 md:w-auto">
              <div className="w-full md:hidden [&_select]:py-2">
                <Select name="list-navigation">
                  <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                    <SelectValue placeholder="Overview" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Information</SelectItem>
                    <SelectItem value="technical">
                      Technical Information
                    </SelectItem>
                    <SelectItem value="delivery">
                      Delivery Information
                    </SelectItem>
                    <SelectItem value="ratings">Ratings</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex gap-2">
                    Actions <FaChevronDown className="size-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete All</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
