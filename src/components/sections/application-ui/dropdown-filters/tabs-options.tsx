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
                    className="mb-2 block text-sm font-medium"
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
                    className="mb-2 block text-sm font-medium"
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
                {[
                  { id: "worldwide", label: "Worldwide", defaultChecked: true },
                  { id: "america", label: "America", defaultChecked: true },
                  { id: "europe", label: "Europe" },
                  { id: "asia", label: "Asia", defaultChecked: true },
                  { id: "australia", label: "Australia/Oceania" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Checkbox
                      id={item.id}
                      name={item.id}
                      defaultChecked={item.defaultChecked}
                    />
                    <Label
                      htmlFor={item.id}
                      className="ml-2 text-sm font-medium"
                    >
                      {item.label}
                    </Label>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="brands">
              <ul className="space-y-2">
                {[
                  { id: "apple", label: "Apple (56)" },
                  { id: "dell", label: "Dell (56)" },
                  { id: "asus", label: "Asus (97)", defaultChecked: true },
                  { id: "logitech", label: "Logitech (97)" },
                  { id: "msi", label: "MSI (97)", defaultChecked: true },
                  { id: "sony", label: "Sony (234)" },
                  { id: "canon", label: "Canon (49)" },
                  {
                    id: "microsoft",
                    label: "Microsoft (45)",
                    defaultChecked: true,
                  },
                  { id: "razer", label: "Razer (49)" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Checkbox
                      id={item.id}
                      name={item.id}
                      defaultChecked={item.defaultChecked}
                    />
                    <Label
                      htmlFor={item.id}
                      className="ml-2 text-sm font-medium"
                    >
                      {item.label}
                    </Label>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
