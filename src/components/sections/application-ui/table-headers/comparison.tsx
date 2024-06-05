import { FaChevronDown } from "react-icons/fa";
import { HiInformationCircle, HiPlus, HiRefresh } from "react-icons/hi";

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

export function TableHeaderWithComparison() {
  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative shadow-md sm:rounded-lg">
          <div className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="flex items-center">
              <h5 className="mr-3 font-semibold">Compare Products</h5>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div>
                      <span className="sr-only">More info</span>
                      <HiInformationCircle className="size-4 text-gray-400" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-background">
                    <Text>
                      Selected Xbox Series S, PlayStation 5, and Xbox Series X
                    </Text>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex w-auto shrink-0 flex-row items-center justify-end space-x-3">
              <Button>
                <HiPlus className="mr-2 size-3.5" />
                Add new product
              </Button>
              <Button variant={"outline"}>
                <HiRefresh className="mr-2 size-4" />
                Reset all
              </Button>
            </div>
          </div>
          <div className="mx-4 border-t"></div>
          <div className="flex flex-col items-center justify-between px-4 pb-4 md:mt-4 md:flex-row md:-space-y-3 md:space-x-4 md:pb-0">
            <ul className="hidden flex-wrap text-center text-sm font-medium md:flex">
              {[
                "General Information",
                "Technical Information",
                "Delivery Information",
                "Ratings",
              ].map((label, index) => (
                <li key={index} className="mb-4 mr-2 lg:mr-4">
                  <Button variant={index === 2 ? "default" : "outline"}>
                    {label}
                  </Button>
                </li>
              ))}
            </ul>
            <div className="flex w-full items-center space-x-4 md:w-auto">
              <div className="w-full md:hidden">
                <Select name="list-navigation">
                  <SelectTrigger>
                    <SelectValue placeholder="Overview" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "general", label: "General Information" },
                      { value: "technical", label: "Technical Information" },
                      { value: "delivery", label: "Delivery Information" },
                      { value: "ratings", label: "Ratings" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"} className="flex gap-2">
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
