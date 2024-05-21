import { FaChevronDown } from "react-icons/fa";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

export function DropdownFilterCategory() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Filter by categories <FaChevronDown className="ml-3 size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <div className="p-3">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Columns
          </p>
          <ul className="mb-4 mt-2 space-y-2 text-sm">
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
              <Checkbox id="intent" name="intent" />
              <Label htmlFor="intent">Intent</Label>
            </li>
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
              <Checkbox id="serp" name="serp" />
              <Label htmlFor="serp">SERP</Label>
            </li>
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
              <Checkbox id="serp_features" name="serp_features" />
              <Label htmlFor="serp_features">SERP features</Label>
            </li>
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
              <Checkbox id="position" name="position" />
              <Label htmlFor="position">Position on the start date</Label>
            </li>
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
              <Checkbox defaultChecked id="volume" name="volume" />
              <Label htmlFor="volume">Volume</Label>
            </li>
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
              <Checkbox id="cpc" name="cpc" />
              <Label htmlFor="cpc">CPC</Label>
            </li>
          </ul>
          <p className="text-sm text-gray-900 dark:text-white">
            Additional settings
          </p>
          <ul className="mb-4 mt-2 space-y-2 text-sm">
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
              <Checkbox defaultChecked id="show_tags" name="show_tags" />
              <Label htmlFor="show_tags">Show tags in keywords</Label>
            </li>
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
              <Checkbox defaultChecked id="show_serp" name="show_serp" />
              <Label htmlFor="show_serp">Show SERP feature icons</Label>
            </li>
          </ul>
          <p className="text-sm text-gray-900 dark:text-white">
            Positions chart
          </p>
          <ul className="mb-4 mt-2 space-y-2 text-sm">
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
              <Checkbox id="smart_zoom" name="smart_zoom" />
              <Label htmlFor="smart_zoom">Smart zoom</Label>
            </li>
          </ul>
          <p className="text-sm text-gray-900 dark:text-white">Row height</p>
          <RadioGroup defaultValue="row_height">
            <ul className="mb-4 mt-2 space-y-2 text-sm">
              <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                <RadioGroupItem
                  defaultChecked
                  id="row_height_show_tags"
                  value="tags"
                />
                <Label htmlFor="row_height_show_tags">
                  Show tags in keywords
                </Label>
              </li>
              <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                <RadioGroupItem id="row_height_show_serp" value="serp" />
                <Label htmlFor="row_height_show_serp">
                  Show SERP feature icons
                </Label>
              </li>
            </ul>
          </RadioGroup>
          <a
            href="#"
            className="ml-1.5 mt-4 flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Apply to all projects
          </a>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
