import { FaChevronDown, FaFilter } from "react-icons/fa";
import { HiPlus, HiSearch } from "react-icons/hi";

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

export function DefaultTableHeader() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="relative w-full md:w-1/2">
              <form className="flex items-center">
                <Label htmlFor="simple-search" className="sr-only">
                  Search
                </Label>
                <HiSearch className="absolute left-2 z-10 size-5 text-gray-500" />
                <Input
                  id="search"
                  name="search"
                  placeholder="Search"
                  required
                  type="search"
                  className="w-full pl-8 dark:bg-gray-600 dark:text-white"
                />
              </form>
            </div>
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Button>
                <HiPlus className="mr-2 size-4" />
                Add product
              </Button>
              <div className="flex items-center justify-center gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
