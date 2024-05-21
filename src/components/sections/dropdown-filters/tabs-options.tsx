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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export function DropdownFilterTabsOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Filter by tabs <FaChevronDown className="ml-3 size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <div className="p-2">
          <Tabs defaultValue="price">
            <TabsList>
              <TabsTrigger value="price">Price</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
              <TabsTrigger value="brands">Brands</TabsTrigger>
            </TabsList>
            <TabsContent value="price">
              <div className="col-span-2 flex items-center justify-between space-x-3">
                <div className="w-full">
                  <Label
                    htmlFor="min-experience-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    From
                  </Label>
                  <Input
                    defaultValue="300"
                    id="price-from"
                    name="price-from"
                    max="10000"
                    min="1"
                    required
                    type="number"
                    className="[&_input]:py-2 [&_input]:sm:text-xs"
                  />
                </div>
                <div className="w-full">
                  <Label
                    htmlFor="price-to"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    To
                  </Label>
                  <Input
                    defaultValue="3500"
                    id="max-experience-input"
                    max="10000"
                    min="1"
                    name="max-experience-input"
                    required
                    type="number"
                    className="[&_input]:py-2 [&_input]:sm:text-xs"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Checkbox id="worldwide" name="worldwide" />
                  <Label
                    htmlFor="worldwide"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Worldwide
                  </Label>
                </li>
                <li className="flex items-center">
                  <Checkbox defaultChecked id="america" name="america" />
                  <Label
                    htmlFor="america"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    America
                  </Label>
                </li>
                <li className="flex items-center">
                  <Checkbox id="europe" name="europe" />
                  <Label
                    htmlFor="europe"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Europe
                  </Label>
                </li>
                <li className="flex items-center">
                  <Checkbox defaultChecked id="asia" name="asia" />
                  <Label
                    htmlFor="asia"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Asia
                  </Label>
                </li>
                <li className="flex items-center">
                  <Checkbox id="australia" name="australia" />
                  <Label
                    htmlFor="australia"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Australia/Oceania
                  </Label>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="brands">
              <ul className="space-y-2">
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
                <li className="flex items-center">
                  <Checkbox id="logitech" name="logitech" />
                  <Label
                    htmlFor="logitech"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Logitech (97)
                  </Label>
                </li>
                <li className="flex items-center">
                  <Checkbox defaultChecked id="msi" name="msi" />
                  <Label
                    htmlFor="msi"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    MSI (97)
                  </Label>
                </li>
                <li className="flex items-center">
                  <Checkbox id="sony" name="sony" />
                  <Label
                    htmlFor="sony"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Sony (234)
                  </Label>
                </li>
                <li className="flex items-center">
                  <Checkbox id="canon" name="canon" />
                  <Label
                    htmlFor="canon"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Canon (49)
                  </Label>
                </li>
                <li className="flex items-center">
                  <Checkbox defaultChecked id="microsoft" name="microsoft" />
                  <Label
                    htmlFor="microsoft"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Microsoft (45)
                  </Label>
                </li>
                <li className="flex items-center">
                  <Checkbox id="razer" name="razer" />
                  <Label
                    htmlFor="razer"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Razer (49)
                  </Label>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
