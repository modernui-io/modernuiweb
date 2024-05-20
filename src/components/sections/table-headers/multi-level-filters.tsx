import { FaCog, FaFilter } from "react-icons/fa";
import { HiPlus, HiSearch, HiUpload } from "react-icons/hi";

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
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

export function MultiLevelTableHeadersWithFilters() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white px-4 shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex items-center justify-between pt-4 md:pb-4">
            <div className="flex flex-1 items-center space-x-2">
              <h5>
                <span className="dark:text-white">View all products</span>
              </h5>
            </div>
            <div className="flex items-center space-x-3">
              <Button>View JSON</Button>
              <Button>
                <HiUpload className="mr-2 size-4" />
                Export
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse items-stretch justify-between space-y-3 pb-4 md:flex-row md:items-center md:space-y-0">
            <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
              <form className="w-full flex-1 md:mr-4 md:max-w-sm">
                <Label htmlFor="default-search" className="sr-only">
                  Search
                </Label>
                <div className="relative flex w-full">
                  <HiSearch className="absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-gray-400 dark:text-gray-900" />
                  <Input
                    id="default-search"
                    name="default-search"
                    placeholder="Search..."
                    type="search"
                    className="w-full rounded-r-none py-2 pl-8 dark:bg-gray-600 dark:text-white"
                  />
                  <Button className="rounded-l-none">Search</Button>
                </div>
              </form>
              <div className="flex items-center space-x-4">
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
                    <Button>
                      <FaCog className="mr-2 size-4 text-white dark:text-gray-900" />
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
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end pb-4 md:w-auto md:flex-row md:items-center md:space-x-3 md:pb-0">
              <Button>
                <HiPlus className="-ml-1 mr-1.5 size-3.5" />
                Add new product
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap border-t pb-4 pt-1 dark:border-gray-700">
            <div className="mr-4 mt-3 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">
              Show only:
            </div>
            <RadioGroup defaultValue="show-only">
              <fieldset className="flex flex-wrap">
                <div className="mr-4 mt-3 flex items-center">
                  <RadioGroupItem value="all-products" id="all-products" />
                  <Label
                    htmlFor="all-products"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    All
                  </Label>
                </div>
                <div className="mr-4 mt-3 flex items-center">
                  <RadioGroupItem value="active" id="active" />
                  <Label
                    htmlFor="by-category"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Active products
                  </Label>
                </div>
                <div className="mr-4 mt-3 flex items-center">
                  <RadioGroupItem value="pending" id="pending" />
                  <Label
                    htmlFor="by-category"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Pending products
                  </Label>
                </div>
                <div className="mr-4 mt-3 flex items-center">
                  <RadioGroupItem value="inactive" id="inactive" />
                  <Label
                    htmlFor="by-category"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Inactive products
                  </Label>
                </div>
              </fieldset>
            </RadioGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
