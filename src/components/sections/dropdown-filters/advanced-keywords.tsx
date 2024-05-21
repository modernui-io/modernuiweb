import { useState } from "react";

import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { FaChevronDown } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
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

  function check(id: string) {
    document.querySelector(id)!.checked = true;
  }

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
            <p className="text-sm font-medium text-black dark:text-white">
              Filters
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Save view
              </a>
              <a
                href="#"
                className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Clear all
              </a>
            </div>
          </div>
          <div className="pb-2 pt-3">
            <Label htmlFor="Checkbox-group-search" className="sr-only">
              Search
            </Label>
            <Input
              icon={() => (
                <svg
                  className="size-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              id="Checkbox-group-search"
              name="Checkbox-group-search"
              placeholder="Search keywords..."
              className="[&_input]:py-2"
            />
          </div>
          <Accordion type="single" className="dark:divide-gray-600" collapsible>
            <AccordionItem value="category">
              <AccordionTrigger>Category</AccordionTrigger>
              <AccordionContent className="p-1 dark:bg-transparent">
                <div className="py-2 font-light">
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
                      <Checkbox id="microsoft" name="microsoft" />
                      <Label
                        htmlFor="microsoft"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Microsoft (45)
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
                      <Checkbox id="sony" name="sony" />
                      <Label
                        htmlFor="sony"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Sony (234)
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
                      <Checkbox id="dell" name="dell" />
                      <Label
                        htmlFor="dell"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Dell (56)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="msi" name="msi" />
                      <Label
                        htmlFor="msi"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        MSI (97)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox defaultChecked id="canon" name="canon" />
                      <Label
                        htmlFor="canon"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Canon (49)
                      </Label>
                    </li>
                    <li className="flex items-center">
                      <Checkbox id="benq" name="benq" />
                      <Label
                        htmlFor="benq"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        BenQ (23)
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
                    <a
                      href="#"
                      className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
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
                    <SelectTrigger className="py-2 dark:bg-gray-600 dark:text-white sm:text-xs">
                      <SelectValue placeholder="From" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="500">$500</SelectItem>
                      <SelectItem value="2500">$2500</SelectItem>
                      <SelectItem value="5000">$5000</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select name="price-to">
                    <SelectTrigger className="py-2 dark:bg-gray-600 dark:text-white sm:text-xs">
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
                    <p>North America</p>
                  </div>

                  <div className="flex gap-2">
                    <Switch
                      checked={isSouthAmerica}
                      onChange={() => setSouthAmerica(!isSouthAmerica)}
                    />
                    <p>South America</p>
                  </div>
                  <div className="flex gap-2">
                    <Switch
                      checked={isAsia}
                      onChange={() => setAsia(!isAsia)}
                    />
                    <p>Asia</p>
                  </div>
                  <div className="flex gap-2">
                    <Switch
                      checked={isAustralia}
                      onChange={() => setAustralia(!isAustralia)}
                    />
                    <p>Australia</p>
                  </div>
                  <div className="flex gap-2">
                    <Switch
                      checked={isEurope}
                      onChange={() => setEurope(!isEurope)}
                    />
                    <p>Europe</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="rating">
              <AccordionTrigger>Rating</AccordionTrigger>
              <AccordionContent className="space-y-2 px-1 py-3 dark:bg-transparent">
                <RadioGroup defaultValue="stars">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      id="five-stars"
                      value="zero"
                      onClick={() => check("#five-stars")}
                    />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      id="four-stars"
                      value="one"
                      onClick={() => check("#four-stars")}
                    />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      id="three-stars"
                      value="two"
                      onClick={() => check("#three-stars")}
                    />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      id="two-stars"
                      value="three"
                      onClick={() => check("#two-stars")}
                    />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      id="one-stars"
                      value="four"
                      onClick={() => check("#one-stars")}
                    />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarIcon className="size-5 text-yellow-300" />
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      id="zero-stars"
                      value="five"
                      onClick={() => check("#zero-stars")}
                    />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                    <StarFilledIcon className="size-5 text-yellow-300" />
                  </div>
                </RadioGroup>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
