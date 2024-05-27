import { CrossCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { FaChevronDown } from "react-icons/fa";
import {
  HiDocumentSearch,
  HiInformationCircle,
  HiUpload,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
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
      <section className="flex items-center bg-background py-6">
        <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
          <div className="relative shadow-md sm:rounded-lg">
            <div className="divide-y px-4">
              <div className="flex flex-col space-y-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0">
                <div className="flex flex-1 items-center space-x-2">
                  <h5>
                    <span className="font-semibold">SERP Analysis</span>
                    <span className="ml-2">6,560,067 Results</span>
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
                        <Text>Showing 1-100 of 436 results</Text>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-primary-600 hover:underline"
                  >
                    <HiDocumentSearch className="mr-1 size-5" />
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
                  <div className="shrink-0 font-semibold">Filter by:</div>
                  <div className="flex items-center">
                    <div className="mr-4 w-full px-2 lg:hidden">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            { value: "current", label: "Current year" },
                            { value: "past", label: "Past month" },
                            { value: "last", label: "Last 30 days" },
                            { value: "seven", label: "Last 7 days" },
                          ].map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="hidden w-full space-x-2 space-y-2 px-2 md:space-x-0 md:space-y-0 lg:flex lg:w-auto">
                      <Button className="border-r md:rounded-r-none">
                        Positions
                      </Button>
                      <Button className="border-x md:rounded-none md:border-l-0">
                        Estimated Traffic
                      </Button>
                      <Button className="border-x md:rounded-none md:border-l-0">
                        Visibility
                      </Button>
                      <Button className="md:rounded-l-none">
                        All for modernui.com
                      </Button>
                    </div>
                    <a
                      href="#"
                      className="flex shrink-0 items-center text-sm font-medium text-primary-600 hover:underline"
                    >
                      <PlusCircledIcon className="mr-1 size-4" />
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
