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
          <Text className="text-sm font-medium">Category</Text>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              { id: "apple", label: "Apple (56)" },
              { id: "fitbit", label: "Fitbit (56)" },
              { id: "dell", label: "Dell (56)" },
              { id: "asus", label: "Asus (97)", defaultChecked: true },
              { id: "logitech", label: "Logitech (97)", defaultChecked: true },
              { id: "msi", label: "MSI (97)", defaultChecked: true },
              { id: "bosch", label: "Bosch (176)", defaultChecked: true },
              { id: "sony", label: "Sony (234)" },
              { id: "samsung", label: "Samsung (76)" },
              { id: "canon", label: "Canon (49)" },
              { id: "microsoft", label: "Microsoft (45)" },
              { id: "razer", label: "Razer (49)" },
            ].map((item) => (
              <li key={item.id} className="flex items-center">
                <Checkbox
                  id={item.id}
                  name={item.id}
                  defaultChecked={item.defaultChecked}
                />
                <Label htmlFor={item.id} className="ml-2 text-sm font-medium">
                  {item.label}
                </Label>
              </li>
            ))}
          </ul>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
