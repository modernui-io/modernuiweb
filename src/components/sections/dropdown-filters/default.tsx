import { FaChevronDown } from "react-icons/fa";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";

export function DefaultDropdownFilter() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Filter by category <FaChevronDown className="ml-3 size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <div className="px-3 py-1">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Category
          </p>
          <ul className="mt-3 space-y-2 text-sm">
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
            <li className="flex items-center">
              <Checkbox defaultChecked id="logitech" name="logitech" />
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
              <Checkbox defaultChecked id="bosch" name="bosch" />
              <Label
                htmlFor="bosch"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Bosch (176)
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
              <Checkbox id="samsung" name="samsung" />
              <Label
                htmlFor="samsung"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Samsung (76)
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
              <Checkbox id="microsoft" name="microsoft" />
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
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
