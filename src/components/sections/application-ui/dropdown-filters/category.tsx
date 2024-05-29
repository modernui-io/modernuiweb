import Link from "next/link";

import { FaChevronDown } from "react-icons/fa";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
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
          <Text className="text-sm font-medium">Columns</Text>
          <ul className="mb-4 mt-2 space-y-2 text-sm">
            {[
              { id: "intent", label: "Intent" },
              { id: "serp", label: "SERP" },
              { id: "serp_features", label: "SERP features" },
              { id: "position", label: "Position on the start date" },
              { id: "volume", label: "Volume" },
              { id: "cpc", label: "CPC" },
            ].map((item) => (
              <li
                key={item.id}
                className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium"
              >
                <Checkbox id={item.id} name={item.id} />
                <Label htmlFor={item.id}>{item.label}</Label>
              </li>
            ))}
          </ul>
          <p className="text-sm">Additional settings</p>
          <ul className="mb-4 mt-2 space-y-2 text-sm">
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
              <Checkbox defaultChecked id="show_tags" name="show_tags" />
              <Label htmlFor="show_tags">Show tags in keywords</Label>
            </li>
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
              <Checkbox defaultChecked id="show_serp" name="show_serp" />
              <Label htmlFor="show_serp">Show SERP feature icons</Label>
            </li>
          </ul>
          <p className="text-sm">Positions chart</p>
          <ul className="mb-4 mt-2 space-y-2 text-sm">
            <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
              <Checkbox id="smart_zoom" name="smart_zoom" />
              <Label htmlFor="smart_zoom">Smart zoom</Label>
            </li>
          </ul>
          <p className="text-sm">Row height</p>
          <RadioGroup defaultValue="row_height">
            <ul className="mb-4 mt-2 space-y-2 text-sm">
              <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
                <RadioGroupItem
                  defaultChecked
                  id="row_height_show_tags"
                  value="tags"
                />
                <Label htmlFor="row_height_show_tags">
                  Show tags in keywords
                </Label>
              </li>
              <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
                <RadioGroupItem id="row_height_show_serp" value="serp" />
                <Label htmlFor="row_height_show_serp">
                  Show SERP feature icons
                </Label>
              </li>
            </ul>
          </RadioGroup>
          <Link
            href="#"
            className="ml-1.5 mt-4 flex items-center text-sm font-medium text-primary-600 hover:underline"
          >
            Apply to all projects
          </Link>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
