import { FaChevronDown } from "react-icons/fa";
import { HiInformationCircle, HiUpload } from "react-icons/hi";

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

export function TableHeaderWithButtonGroupFiltersAndExport() {
  return (
    <>
      <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
          <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="divide-y px-4 dark:divide-gray-700">
              <div className="flex flex-col space-y-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
                <div className="flex flex-1 items-center space-x-2">
                  <h5>
                    <span className="font-semibold dark:text-white">
                      SERP Analysis
                    </span>
                    <span className="ml-2 text-gray-500 dark:text-gray-400">
                      6,560,067 Results
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
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
                      <path
                        fillRule="evenodd"
                        d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View SERP
                  </a>
                  <Button>
                    <HiUpload className="mr-2 size-4" />
                    Export
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-stretch justify-between space-y-3 py-4 sm:flex-row sm:items-center sm:space-y-0">
                <div className="block items-center space-y-2 sm:flex sm:space-y-0">
                  <div className="shrink-0 font-semibold dark:text-white">
                    Filter by:
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 w-full px-2 lg:hidden">
                      <Select>
                        <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                          <SelectValue placeholder="Brand" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current">Current year</SelectItem>
                          <SelectItem value="past">Past month</SelectItem>
                          <SelectItem value="last">Last 30 days</SelectItem>
                          <SelectItem value="seven">Last 7 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="hidden w-full space-x-2 space-y-2 px-2 md:space-x-0 md:space-y-0 lg:flex lg:w-auto">
                      <Button className="border-r dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-r-none">
                        Positions
                      </Button>
                      <Button className="border-x dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-none md:border-l-0">
                        Estimated Traffic
                      </Button>
                      <Button className="border-x dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-none md:border-l-0">
                        Visibility
                      </Button>
                      <Button className="dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-l-none">
                        All for flowbite.com
                      </Button>
                    </div>
                    <a
                      href="#"
                      className="flex shrink-0 items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-1 size-4"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      More options
                    </a>
                  </div>
                </div>
                <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 sm:w-auto sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0">
                  <div className="flex w-full items-center space-x-3 sm:w-auto">
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
          </div>
        </div>
      </section>
    </>
  );
}
