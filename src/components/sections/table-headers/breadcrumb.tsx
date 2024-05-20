import { FaChevronDown } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function TableHeaderWithBreadcrumb() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white px-4 shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">2022</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>All Products</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h5>
                <span className="dark:text-white">View list of products</span>
              </h5>
            </div>
            <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
              <Button>
                <HiPlus className="-ml-1 mr-1.5 size-3.5" />
                Add new product
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-6">
            <Select>
              <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="samsung">Samsung</SelectItem>
                <SelectItem value="apple">Aplle</SelectItem>
                <SelectItem value="nokia">Nokia</SelectItem>
                <SelectItem value="sony">Sony</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tablet">Tablet</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="tv">TV</SelectItem>
                <SelectItem value="console">Console</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="silver">Silver</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tablet">Tablet</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="tv">TV</SelectItem>
                <SelectItem value="console">Console</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                <SelectValue placeholder="Sold by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="samsung">Samsung</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="nokia">Nokia</SelectItem>
                <SelectItem value="flowbite">Flowbite</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                <SelectValue placeholder="Return Policy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30-days">30 days</SelectItem>
                <SelectItem value="14-days">14 days</SelectItem>
                <SelectItem value="no-returns">No returns</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="block w-full items-center justify-between border-t py-3 dark:border-gray-700 md:flex">
            <div className="mb-4 flex flex-wrap md:mb-0">
              <div className="mb-2 mr-4 flex w-full items-center text-sm font-medium text-gray-900 dark:text-white md:mb-0 md:w-auto">
                Show by:
              </div>
              <RadioGroup defaultValue="show-by">
                <fieldset className="flex flex-wrap">
                  <div className="mr-4 flex items-center">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all-products" id="all-products" />
                      <Label
                        htmlFor="all-products"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        All
                      </Label>
                    </div>
                  </div>
                  <div className="mr-4 flex items-center">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="by-category" id="by-category" />
                      <Label
                        htmlFor="by-category"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        By Category
                      </Label>
                    </div>
                  </div>
                  <div className="mr-4 flex items-center">
                    <RadioGroupItem value="by-price" id="by-price" />
                    <Label
                      htmlFor="by-price"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      By Price
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <RadioGroupItem value="by-state" id="by-state" />
                    <Label
                      htmlFor="by-state"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      By State
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <RadioGroupItem value="by-brand" id="by-brand" />
                    <Label
                      htmlFor="by-brand"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      By Brand
                    </Label>
                  </div>
                </fieldset>
              </RadioGroup>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    <FaChevronDown className="mr-3 size-3" /> Open
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
