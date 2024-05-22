import { FaChevronDown } from "react-icons/fa";
import { HiInformationCircle, HiPlus, HiTemplate } from "react-icons/hi";

import { Button } from "~/components/ui/button";
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function TableHeaderWithTooltipAndSelectFilters() {
  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative shadow-md sm:rounded-lg">
          <div className="mx-4 flex flex-col items-center justify-between space-y-3 border-b py-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex w-full items-center space-x-3">
              <h5 className="font-semibold">Flowbite Products</h5>
              <div className="font-medium text-gray-500">6,560 results</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div>
                      <span className="sr-only">More info</span>
                      <HiInformationCircle className="size-4 text-gray-500" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <Text>Showing 1-10 of 6,560 results</Text>
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
                <HiTemplate className="mr-2 size-3" />
                Manage Columns
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse items-start justify-between p-4 md:flex-row md:items-center md:space-x-4">
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
        </div>
      </div>
    </section>
  );
}
