import { useState } from "react";

import {
  MagnifyingGlassIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { FaChevronDown } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";

export function AdvancedDropdownFilterKeywords() {
  const [isNorthAmerica, setNorthAmerica] = useState(true);
  const [isSouthAmerica, setSouthAmerica] = useState(false);
  const [isAsia, setAsia] = useState(false);
  const [isAustralia, setAustralia] = useState(true);
  const [isEurope, setEurope] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Filter by keywords <FaChevronDown className="ml-3 size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <div className="px-3">
          <div className="flex items-center justify-between pt-2">
            <Text className="text-sm font-medium">Filters</Text>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="flex items-center text-sm font-medium text-primary-600 hover:underline"
              >
                Save view
              </a>
              <a
                href="#"
                className="flex items-center text-sm font-medium text-primary-600 hover:underline"
              >
                Clear all
              </a>
            </div>
          </div>
          <div className="pb-2 pt-3">
            <Label htmlFor="Checkbox-group-search" className="sr-only">
              Search
            </Label>
            <div className="relative flex items-center">
              <MagnifyingGlassIcon className="absolute left-3 size-4 text-gray-500" />
              <Input
                id="Checkbox-group-search"
                name="Checkbox-group-search"
                placeholder="Search keywords..."
                className="py-2 pl-8"
              />
            </div>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="category">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent className="p-1 dark:bg-transparent">
                <div className="py-2 font-light">
                  <ul className="space-y-2">
                    {[
                      { id: "apple", label: "Apple (56)" },
                      { id: "microsoft", label: "Microsoft (45)" },
                      { id: "logitech", label: "Logitech (97)" },
                      { id: "sony", label: "Sony (234)" },
                      { id: "asus", label: "Asus (97)" },
                      { id: "dell", label: "Dell (56)" },
                      { id: "msi", label: "MSI (97)" },
                      { id: "canon", label: "Canon (49)" },
                      { id: "benq", label: "BenQ (23)" },
                      { id: "razer", label: "Razer (49)" },
                    ].map((item) => (
                      <li key={item.id} className="flex items-center">
                        <Checkbox id={item.id} name={item.id} />
                        <Label
                          htmlFor={item.id}
                          className="ml-2 text-sm font-medium"
                        >
                          {item.label}
                        </Label>
                      </li>
                    ))}
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-primary-600 hover:underline"
                    >
                      View all
                    </a>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
              <AccordionTrigger>Price</AccordionTrigger>
              <AccordionContent className="p-1 dark:bg-transparent">
                <div className="grid w-full grid-cols-2 items-center gap-x-3 py-2 font-light">
                  <Select name="price-from">
                    <SelectTrigger className="py-2 sm:text-xs">
                      <SelectValue placeholder="From" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500">$500</SelectItem>
                      <SelectItem value="2500">$2500</SelectItem>
                      <SelectItem value="5000">$5000</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select name="price-to">
                    <SelectTrigger className="py-2 sm:text-xs">
                      <SelectValue placeholder="To" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500">$500</SelectItem>
                      <SelectItem value="2500">$2500</SelectItem>
                      <SelectItem value="5000">$5000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="worldwide">
              <AccordionTrigger>Worldwide Shipping</AccordionTrigger>
              <AccordionContent className="p-1 dark:bg-transparent">
                <div className="space-y-2 py-2">
                  <div className="flex gap-2">
                    <Switch
                      checked={isNorthAmerica}
                      onChange={() => setNorthAmerica(!isNorthAmerica)}
                    />
                    <Text>North America</Text>
                  </div>

                  <div className="flex gap-2">
                    <Switch
                      checked={isSouthAmerica}
                      onChange={() => setSouthAmerica(!isSouthAmerica)}
                    />
                    <Text>South America</Text>
                  </div>
                  <div className="flex gap-2">
                    <Switch
                      checked={isAsia}
                      onChange={() => setAsia(!isAsia)}
                    />
                    <Text>Asia</Text>
                  </div>
                  <div className="flex gap-2">
                    <Switch
                      checked={isAustralia}
                      onChange={() => setAustralia(!isAustralia)}
                    />
                    <Text>Australia</Text>
                  </div>
                  <div className="flex gap-2">
                    <Switch
                      checked={isEurope}
                      onChange={() => setEurope(!isEurope)}
                    />
                    <Text>Europe</Text>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="rating">
              <AccordionTrigger>Rating</AccordionTrigger>
              <AccordionContent className="space-y-2 px-1 py-3 dark:bg-transparent">
                <RadioGroup defaultValue="stars">
                  {[...Array(6)].map((_, index) => {
                    const starsCount = 5 - index;
                    const starsFilled = Array(starsCount).fill(null);
                    const starsUnfilled = Array(5 - starsCount).fill(null);

                    return (
                      <div key={index} className="flex items-center gap-2">
                        <RadioGroupItem
                          id={`${starsCount}-stars`}
                          value={`${index}`}
                        />
                        {starsFilled.map((_, i) => (
                          <StarFilledIcon
                            key={i}
                            className="size-5 text-yellow-300"
                          />
                        ))}
                        {starsUnfilled.map((_, i) => (
                          <StarIcon
                            key={i}
                            className="size-5 text-yellow-300"
                          />
                        ))}
                      </div>
                    );
                  })}
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
