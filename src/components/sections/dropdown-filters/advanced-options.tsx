import { FaChevronDown } from "react-icons/fa";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Slider } from "~/components/ui/slider";

export function AdvancedDropdownFilterOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Advanced filter <FaChevronDown className="ml-3 size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <ScrollArea className="h-[40rem] overflow-hidden">
          <form className="space-y-4 p-3">
            <p className="inline-flex items-center text-gray-500 dark:text-gray-400">
              Filter
            </p>
            <div className="mt-4">
              <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Price Range
              </span>
              <div className="grid grid-cols-2 gap-3">
                <Slider
                  defaultValue={[300]}
                  id="min-price"
                  max={7000}
                  min={0}
                  name="min-price"
                  className="dark:bg-gray-600"
                />
                <Slider
                  defaultValue={[3500]}
                  id="max-price"
                  max={7000}
                  min={0}
                  name="max-price"
                  className="dark:bg-gray-600"
                />
              </div>
              <div className="mt-4 flex items-center justify-between space-x-2 md:col-span-2">
                <div className="w-full">
                  <Label
                    htmlFor="min-price-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    From
                  </Label>
                  <Input
                    defaultValue="300"
                    id="min-price-input"
                    name="min-price-input"
                    max="7000"
                    min="0"
                    type="number"
                    className="py-2 sm:text-xs"
                  />
                </div>
                <div className="w-full">
                  <Label
                    htmlFor="max-price-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    To
                  </Label>
                  <Input
                    defaultValue="3500"
                    id="max-price-input"
                    name="max-price-input"
                    max="7000"
                    min="0"
                    type="number"
                    className="py-2 sm:text-xs"
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Sales
              </span>
              <div className="grid grid-cols-2 gap-3">
                <Slider
                  defaultValue={[300]}
                  id="min-sales"
                  max={7000}
                  min={0}
                  name="min-sales"
                  step={1}
                  className="dark:bg-gray-600"
                />
                <Slider
                  defaultValue={[3500]}
                  id="max-sales"
                  max={7000}
                  min={0}
                  name="max-sales"
                  step={1}
                  className="dark:bg-gray-600"
                />
              </div>
              <div className="mt-4 flex items-center justify-between space-x-2 md:col-span-2">
                <div className="w-full">
                  <Label
                    htmlFor="min-sales-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    From
                  </Label>
                  <Input
                    defaultValue="1"
                    id="min-sales-input"
                    max="300"
                    min="0"
                    name="min-sales-input"
                    type="number"
                    className="py-2 sm:text-xs"
                  />
                </div>
                <div className="w-full">
                  <Label
                    htmlFor="max-sales-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    To
                  </Label>
                  <Input
                    defaultValue="100"
                    id="max-sales-input"
                    max="300"
                    min="0"
                    name="max-sales-input"
                    type="number"
                    className="py-2 sm:text-xs"
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Category
              </span>
              <ul className="grid w-full grid-cols-2 gap-3">
                <li>
                  <Checkbox id="gaming" name="gaming" className="peer hidden" />
                  <Label
                    htmlFor="gaming"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white hover:bg-primary-500 hover:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:peer-checked:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white"
                  >
                    Gaming
                  </Label>
                </li>
                <li>
                  <Checkbox
                    id="electronics"
                    name="electronics"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="electronics"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white hover:bg-primary-500 hover:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:peer-checked:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white"
                  >
                    Electronics
                  </Label>
                </li>
                <li>
                  <Checkbox
                    defaultChecked
                    id="phone"
                    name="phone"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="phone"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white hover:bg-primary-500 hover:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:peer-checked:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white"
                  >
                    Phone
                  </Label>
                </li>
                <li>
                  <Checkbox
                    id="tv-monitor"
                    name="tv-monitor"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="tv-monitor"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white hover:bg-primary-500 hover:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:peer-checked:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white"
                  >
                    TV/Monitor
                  </Label>
                </li>
                <li>
                  <Checkbox id="laptop" name="laptop" className="peer hidden" />
                  <Label
                    htmlFor="laptop"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white hover:bg-primary-500 hover:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:peer-checked:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white"
                  >
                    Laptop
                  </Label>
                </li>
                <li>
                  <Checkbox
                    defaultChecked
                    id="watch"
                    name="watch"
                    className="peer hidden"
                  />
                  <Label
                    htmlFor="watch"
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-2 text-center text-sm font-medium text-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white hover:bg-primary-500 hover:text-white dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100 dark:peer-checked:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white"
                  >
                    Watch
                  </Label>
                </li>
              </ul>
            </div>
            <div>
              <span className="mb-2 block text-sm font-medium text-black dark:text-white">
                State
              </span>
              <RadioGroup defaultValue="state">
                <ul className="flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                  <li className="w-full border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <RadioGroupItem
                        defaultChecked
                        id="state-all"
                        value="all"
                      />
                      <Label
                        htmlFor="state-all"
                        className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        All
                      </Label>
                    </div>
                  </li>
                  <li className="w-full border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center pl-3">
                      <RadioGroupItem id="state-new" value="new" />
                      <Label
                        htmlFor="state-new"
                        className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        New
                      </Label>
                    </div>
                  </li>
                  <li className="w-full">
                    <div className="flex items-center pl-3">
                      <RadioGroupItem id="state-used" value="used" />
                      <Label
                        htmlFor="state-used"
                        className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Refurbished
                      </Label>
                    </div>
                  </li>
                </ul>
              </RadioGroup>
            </div>
            <div className="mt-4 flex space-x-4">
              <Button type="submit">Show 32 Results</Button>
              <Button type="reset">Reset</Button>
            </div>
          </form>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
