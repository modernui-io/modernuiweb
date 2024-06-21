import * as React from "react";

import { HiMiniStar } from "react-icons/hi2";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Slider } from "~/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

("use client");

const brands = {
  A: [
    { id: "apple", label: "Apple (56)" },
    { id: "asus", label: "Asus (97)", checked: true },
    { id: "acer", label: "Acer (234)" },
    { id: "allview", label: "Allview (45)" },
    { id: "atari", label: "Atari (176)", checked: true },
    { id: "amd", label: "AMD (49)" },
    { id: "aruba", label: "Aruba (16)" },
  ],
  B: [
    { id: "beats", label: "Beats (56)" },
    { id: "bose", label: "Bose (97)", checked: true },
    { id: "benq", label: "BenQ (45)" },
    { id: "bosch", label: "Bosch (176)" },
    { id: "brother", label: "Brother (176)", checked: true },
    { id: "biostar", label: "Biostar (49)" },
    { id: "braun", label: "Braun (16)" },
    { id: "blaupunkt", label: "Blaupunkt (45)" },
    { id: "benq2", label: "BenQ (23)" },
  ],
  C: [
    { id: "canon", label: "Canon (49)" },
    { id: "cisco", label: "Cisco (97)", checked: true },
    { id: "cowon", label: "Cowon (234)" },
    { id: "clevo", label: "Clevo (45)" },
    { id: "corsair", label: "Corsair (15)" },
    { id: "csl", label: "Canon (49)" },
  ],
  D: [
    { id: "dell", label: "Dell (56)" },
    { id: "dogfish", label: "Dogfish (24)" },
    { id: "dyson", label: "Dyson (234)" },
    { id: "dobe", label: "Dobe (5)" },
    { id: "digitus", label: "Digitus (1)" },
  ],
  E: [
    { id: "emetec", label: "Emetec (56)" },
    { id: "extreme", label: "Extreme (10)" },
    { id: "elgato", label: "Elgato (234)" },
    { id: "emerson", label: "Emerson (45)" },
    { id: "emi", label: "EMI (176)", checked: true },
  ],
  F: [
    { id: "fugoo", label: "Fugoo (49)" },
    { id: "fujitsu", label: "Fujitsu (97)" },
    { id: "fitbit", label: "Fitbit (56)", checked: true },
    { id: "foxconn", label: "Foxconn (234)" },
    { id: "floston", label: "Floston (45)" },
  ],
};

const ratings = [
  { name: "5", filled: 5, unfilled: 0 },
  { name: "4", filled: 4, unfilled: 1 },
  { name: "3", filled: 3, unfilled: 2 },
  { name: "2", filled: 2, unfilled: 3 },
  { name: "1", filled: 1, unfilled: 4 },
];

interface BrandItem {
  id: string;
  label: string;
  checked?: boolean;
}

export function FiltersWithTabs() {
  const isChecked = (item: BrandItem) => item.checked ?? false;
  const [minPrice, setMinPrice] = React.useState(300);
  const [maxPrice, setMaxPrice] = React.useState(3350);
  const [minDeliveryTime, setMinDeliveryTime] = React.useState(30);

  return (
    <div className="m-5 flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="block rounded-lg px-5 text-center text-sm font-medium text-primary-foreground">
            Toggle modal
          </Button>
        </DialogTrigger>
        <DialogContent className="relative h-[400px] translate-y-0 overflow-auto p-4 sm:h-[570px]">
          <ScrollArea>
            <DialogTitle>Filters with tabs</DialogTitle>
            <DialogClose asChild>
              <span className="sr-only">Close modal</span>
            </DialogClose>

            <div className="mt-4 space-y-4 overflow-auto">
              <Tabs defaultValue="brand">
                <TabsList>
                  <TabsTrigger value="brand">Brand</TabsTrigger>
                  <TabsTrigger value="advanced-filters">
                    Advanced Filters
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="brand">
                  <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                    {Object.entries(brands).map(([letter, items]) => (
                      <div key={letter} className="space-y-2">
                        <Text
                          level={"lg"}
                          className="font-medium uppercase text-black dark:text-white"
                        >
                          {letter}
                        </Text>
                        {items.map((item) => (
                          <div key={item.id} className="flex items-center">
                            <Checkbox
                              id={item.id}
                              defaultChecked={isChecked(item)}
                              aria-label={item.label}
                            />
                            <Label
                              htmlFor={item.id}
                              className="ml-2 text-sm font-medium text-black dark:text-muted-foreground"
                            >
                              {item.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="advanced-filters">
                  <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="min-price">Min Price</Label>
                        <Slider
                          value={[minPrice]}
                          step={1}
                          max={7000}
                          min={1}
                          aria-label="Minimum Price"
                          onValueChange={(value) => setMinPrice(value[0])}
                        />
                      </div>
                      <div>
                        <Label htmlFor="max-price">Max Price</Label>
                        <Slider
                          value={[maxPrice]}
                          step={1}
                          max={7000}
                          min={1}
                          aria-label="Maximum Price"
                          onValueChange={(value) => setMaxPrice(value[0])}
                        />
                      </div>
                      <div className="col-span-2 flex items-center justify-between space-x-2">
                        <Input
                          type="number"
                          id="min-price-input"
                          defaultValue="300"
                          min="0"
                          onChange={(e) => setMinPrice(Number(e.target.value))}
                          max="7000"
                        />
                        <div className="shrink-0 text-sm font-medium text-black dark:text-muted-foreground">
                          to
                        </div>
                        <Input
                          type="number"
                          id="max-price-input"
                          defaultValue="3500"
                          min="0"
                          max="7000"
                          onChange={(e) => setMaxPrice(Number(e.target.value))}
                          className="block w-full rounded-lg border border-muted-foreground/60 bg-secondary/30 p-2.5 text-sm text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="min-delivery-time">
                          Min Delivery Time (Days)
                        </Label>
                        <Slider
                          value={[minDeliveryTime]}
                          step={1}
                          max={50}
                          min={3}
                          aria-label="Minimum Delivery Time"
                          onValueChange={(value) =>
                            setMinDeliveryTime(value[0])
                          }
                        />
                      </div>
                      <Input
                        type="number"
                        id="min-delivery-time-input"
                        defaultValue="30"
                        min="3"
                        max="50"
                        onChange={(e) =>
                          setMinDeliveryTime(Number(e.target.value))
                        }
                        className="block w-full rounded-lg border border-muted-foreground/60 bg-secondary/30 p-2.5 text-sm text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Text
                      level={"sm"}
                      className="mb-2 font-medium text-black dark:text-white"
                    >
                      Condition
                    </Text>
                    <RadioGroup>
                      <ul className="flex w-full items-center rounded-lg border border-muted-foreground/70 bg-white text-sm font-medium text-black dark:border-muted-foreground/30 dark:bg-muted dark:text-white">
                        {["All", "New", "Used"].map((condition, index) => (
                          <li
                            key={condition}
                            className={`w-full ${
                              index < 2
                                ? "border-r border-muted-foreground/70 dark:border-muted-foreground/30"
                                : ""
                            }`}
                          >
                            <div className="flex items-center pl-3">
                              <RadioGroupItem
                                id={`condition-${condition.toLowerCase()}`}
                                value={condition}
                                defaultChecked={condition === "All"}
                                className="size-4 border-muted-foreground/60 bg-muted-foreground/80 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted-foreground/40 dark:bg-muted-foreground/30 dark:ring-offset-muted-foreground/20 dark:focus:ring-primary-600"
                              />
                              <Label
                                htmlFor={`condition-${condition.toLowerCase()}`}
                                className="ml-2 w-full py-3 text-sm font-medium text-black dark:text-muted-foreground"
                              >
                                {condition}
                              </Label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </RadioGroup>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div>
                      <Text
                        level={"sm"}
                        className="mb-2 text-sm font-medium text-black dark:text-white"
                      >
                        Colour
                      </Text>
                      <div className="space-y-2">
                        {[
                          {
                            id: "blue",
                            label: "Blue",
                            color: "bg-primary-600",
                          },
                          { id: "gray", label: "Gray", color: "bg-gray-400" },
                          {
                            id: "green",
                            label: "Green",
                            color: "bg-green-400",
                            checked: true,
                          },
                          { id: "pink", label: "Pink", color: "bg-pink-400" },
                          {
                            id: "red",
                            label: "Red",
                            color: "bg-red-500",
                            checked: true,
                          },
                        ].map((color) => (
                          <div key={color.id} className="flex items-center">
                            <Checkbox
                              id={color.id}
                              defaultChecked={color.checked}
                            />
                            <Label
                              htmlFor={color.id}
                              className="ml-2 flex items-center text-sm font-medium text-black dark:text-muted-foreground"
                            >
                              <div
                                className={`size-3.5 ${color.color} mr-2 rounded-full`}
                              ></div>
                              {color.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Text
                        level={"sm"}
                        className="mb-2 font-medium text-black dark:text-white"
                      >
                        Rating
                      </Text>
                      <RadioGroup defaultValue="3">
                        {ratings.map((rating, index) => (
                          <div key={index} className="flex items-center">
                            <RadioGroupItem value={rating.name} />
                            <Label className="ml-2 flex items-center">
                              {Array.from({ length: rating.filled }).map(
                                (_, i) => (
                                  <HiMiniStar
                                    key={`filled-${i}`}
                                    className="size-5 text-yellow-400"
                                  />
                                ),
                              )}
                              {Array.from({
                                length: rating.unfilled,
                              }).map((_, i) => (
                                <HiMiniStar
                                  key={`unfilled-${i}`}
                                  className="size-5 text-muted-foreground/30 dark:text-muted-foreground/60"
                                />
                              ))}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    <div>
                      <Text
                        level={"sm"}
                        className="mb-2 font-medium text-black dark:text-white"
                      >
                        Weight
                      </Text>
                      <div className="space-y-2">
                        {[
                          { id: "under-1-kg", label: "Under 1 kg" },
                          {
                            id: "1-1-5-kg",
                            label: "1-1,5 kg",
                            checked: true,
                          },
                          {
                            id: "1-5-2-kg",
                            label: "1,5-2 kg",
                            checked: false,
                          },
                          {
                            id: "2-5-3-kg",
                            label: "2,5-3 kg",
                            checked: false,
                          },
                          {
                            id: "over-3-kg",
                            label: "Over 3 kg",
                            checked: false,
                          },
                        ].map((weight) => (
                          <div key={weight.id} className="flex items-center">
                            <Checkbox
                              id={weight.id}
                              defaultChecked={weight.checked}
                            />
                            <Label
                              htmlFor={weight.id}
                              className="ml-2 text-sm font-medium text-black dark:text-muted-foreground"
                            >
                              {weight.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 ">
                    <Text
                      level={"sm"}
                      className="mb-2 font-medium text-black dark:text-white"
                    >
                      Delivery
                    </Text>

                    <ToggleGroup
                      type="single"
                      className="grid gap-4 sm:grid-cols-2"
                      defaultValue="delivery-asia"
                    >
                      {[
                        {
                          value: "delivery-usa",
                          heading: "USA",
                          description: "Delivery only for USA",
                        },
                        {
                          value: "delivery-europe",
                          heading: "Europe",
                          description: "Delivery only for Europe",
                        },
                        {
                          value: "delivery-asia",
                          heading: "Asia",
                          description: "Delivery only for Asia",
                        },
                        {
                          value: "delivery-australia",
                          heading: "Australia",
                          description: "Delivery only for Australia",
                        },
                      ].map((toggle, index) => (
                        <ToggleGroupItem
                          key={index}
                          id={toggle.value}
                          value={toggle.value}
                          className="border border-white bg-background py-12"
                        >
                          <div className="block">
                            <div className="w-full text-base font-semibold">
                              {toggle.heading}
                            </div>
                            <div className="w-full text-sm">
                              {toggle.description}
                            </div>
                          </div>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex w-full justify-start">
              <Button type="submit">Show 50 results</Button>
              <Button type="reset" variant="outline">
                Reset
              </Button>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
