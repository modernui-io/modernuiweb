import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { HiMiniStar } from "react-icons/hi2";
import { z } from "zod";

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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Slider } from "~/components/ui/slider";

const categories = [
  { name: "TV, Audio-Video", checked: false },
  { name: "Desktop PC", checked: true },
  { name: "Gaming", checked: false },
  { name: "Monitors", checked: false },
  { name: "Laptops", checked: false },
  { name: "Console", checked: true },
  { name: "Tablets", checked: false },
  { name: "Foto", checked: false },
  { name: "Tablets", checked: false },
  { name: "Books", checked: false },
];

const locations = [
  "Washington D.C.",
  "New York",
  "San Francisco",
  "Chicago",
  "Los Angeles",
  "Boston",
  "Dallas",
  "Miami",
  "Austin",
  "Las Vegas",
];

const brands = [
  { name: "Apple (56)", checked: false },
  { name: "Fitbit (56)", checked: false },
  { name: "Dell (56)", checked: false },
  { name: "Asus (97)", checked: true },
  { name: "Logitech (97)", checked: true },
  { name: "MSI (97)", checked: true },
  { name: "Bosch (176)", checked: true },
  { name: "Sony (234)", checked: false },
  { name: "Samsung (76)", checked: true },
  { name: "Canon (49)", checked: false },
  { name: "Microsoft (45)", checked: false },
  { name: "Razor (49)", checked: false },
];

const ratings = [
  { name: "5", filled: 5, unfilled: 0 },
  { name: "4", filled: 4, unfilled: 1 },
  { name: "3", filled: 3, unfilled: 2 },
  { name: "2", filled: 2, unfilled: 3 },
  { name: "1", filled: 1, unfilled: 4 },
];

const formSchema = z.object({
  brands: z
    .object({
      brand_0: z.boolean(),
      brand_1: z.boolean(),
      brand_2: z.boolean(),
      brand_3: z.boolean(),
      brand_4: z.boolean(),
      brand_5: z.boolean(),
      brand_6: z.boolean(),
      brand_7: z.boolean(),
      brand_8: z.boolean(),
      brand_9: z.boolean(),
      brand_10: z.boolean(),
      brand_11: z.boolean(),
    })
    .optional(),
  ratings: z.string().optional(),
  categories: z
    .object({
      category_0: z.boolean(),
      category_1: z.boolean(),
      category_2: z.boolean(),
      category_3: z.boolean(),
      category_4: z.boolean(),
      category_5: z.boolean(),
      category_6: z.boolean(),
      category_7: z.boolean(),
      category_8: z.boolean(),
      category_9: z.boolean(),
    })
    .optional(),
  locations: z
    .object({
      location_0: z.boolean(),
      location_1: z.boolean(),
      location_2: z.boolean(),
      location_3: z.boolean(),
      location_4: z.boolean(),
      location_5: z.boolean(),
      location_6: z.boolean(),
      location_7: z.boolean(),
      location_8: z.boolean(),
      location_9: z.boolean(),
    })
    .optional(),
  colors: z
    .object({
      red: z.boolean(),
      blue: z.boolean(),
      pink: z.boolean(),
      green: z.boolean(),
      gray: z.boolean(),
    })
    .optional(),
  price_from: z.number().optional(),
  price_to: z.number().optional(),

  discount: z
    .object({
      yes: z.boolean(),
      no: z.boolean(),
    })
    .optional(),
});

type BrandKeys =
  | "brands.brand_0"
  | "brands.brand_1"
  | "brands.brand_2"
  | "brands.brand_3"
  | "brands.brand_4"
  | "brands.brand_5"
  | "brands.brand_6"
  | "brands.brand_7"
  | "brands.brand_8"
  | "brands.brand_9";

type CategoryKeys =
  | "categories.category_0"
  | "categories.category_1"
  | "categories.category_2"
  | "categories.category_3"
  | "categories.category_4"
  | "categories.category_5"
  | "categories.category_6"
  | "categories.category_7"
  | "categories.category_8"
  | "categories.category_9";

type LocationKeys =
  | "locations.location_0"
  | "locations.location_1"
  | "locations.location_2"
  | "locations.location_3"
  | "locations.location_4"
  | "locations.location_5"
  | "locations.location_6"
  | "locations.location_7"
  | "locations.location_8"
  | "locations.location_9";

export function FacetedSearchAccordion() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price_from: 300,
      price_to: 3500,
      categories: {
        category_0: false,
        category_1: false,
        category_2: false,
        category_3: false,
        category_4: false,
        category_5: false,
        category_6: false,
        category_7: false,
        category_8: false,
        category_9: false,
      },
      brands: {
        brand_0: false,
        brand_1: false,
        brand_2: false,
        brand_3: false,
        brand_4: false,
        brand_5: false,
        brand_6: false,
        brand_7: false,
        brand_8: false,
        brand_9: false,
        brand_10: false,
        brand_11: false,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div className="m-5 text-center">
          <Button className="mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Show Drawer
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-fit">
        <ScrollArea>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} action="#">
              <div className="left-0 top-0 z-40 h-screen overflow-auto bg-background p-4 transition-transform dark:bg-muted-foreground/20">
                <div className="flex justify-between">
                  <DrawerTitle className="flex items-center">
                    <div>
                      <Text
                        level={"base"}
                        id="drawer-label"
                        className="inline-flex items-center font-semibold uppercase text-muted-foreground"
                      >
                        Apply filters
                      </Text>
                    </div>
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <Button className="right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent text-sm text-muted-foreground hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white">
                      <X className="size-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </DrawerClose>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="category">
                          <AccordionTrigger className="flex w-full items-center justify-between border-b border-muted-foreground/30 px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-secondary-foreground/10 dark:border-muted-foreground/20">
                            Category
                          </AccordionTrigger>
                          <AccordionContent className="mt-4">
                            {categories.map((category, index) => (
                              <div key={index} className="flex items-center">
                                <Checkbox
                                  defaultChecked={category.checked}
                                  {...form.register(
                                    `categories.category_${index}` as CategoryKeys,
                                  )}
                                />
                                <Label className="ml-2 text-sm font-medium">
                                  {category.name}
                                </Label>
                              </div>
                            ))}

                            <Link
                              href="/#"
                              className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                              View all
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="brand">
                          <AccordionTrigger className="flex w-full items-center justify-between border-b border-muted-foreground/30 px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-secondary-foreground/10 dark:border-muted-foreground/20">
                            Brand
                          </AccordionTrigger>
                          <AccordionContent className="mt-4">
                            {brands.map((brand, index) => (
                              <div key={index} className="flex items-center">
                                <Checkbox
                                  defaultChecked={brand.checked}
                                  {...form.register(
                                    `brands.brand_${index}` as BrandKeys,
                                  )}
                                />
                                <Label className="ml-2 text-sm font-medium">
                                  {brand.name}
                                </Label>
                              </div>
                            ))}

                            <Link
                              href="/#"
                              className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                              View all
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="color">
                          <AccordionTrigger className="flex w-full items-center justify-between border-b border-muted-foreground/30 px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-secondary-foreground/10 dark:border-muted-foreground/20">
                            Color
                          </AccordionTrigger>
                          <AccordionContent className="mt-4">
                            <div className="flex items-center">
                              <Checkbox {...form.register("colors.blue")} />
                              <Label className="ml-2 flex items-center text-sm font-medium">
                                <div className="mr-2 size-3.5 rounded-full bg-blue-600"></div>
                                Blue
                              </Label>
                            </div>
                            <div className="flex items-center">
                              <Checkbox {...form.register("colors.gray")} />
                              <Label className="ml-2 flex items-center text-sm font-medium">
                                <div className="mr-2 size-3.5 rounded-full bg-gray-400"></div>
                                Gray
                              </Label>
                            </div>
                            <div className="flex items-center">
                              <Checkbox {...form.register("colors.green")} />
                              <Label className="ml-2 flex items-center text-sm font-medium">
                                <div className="mr-2 size-3.5 rounded-full bg-green-400"></div>
                                Green
                              </Label>
                            </div>
                            <div className="flex items-center">
                              <Checkbox {...form.register("colors.pink")} />
                              <Label className="ml-2 flex items-center text-sm font-medium">
                                <div className="mr-2 size-3.5 rounded-full bg-pink-400"></div>
                                Pink
                              </Label>
                            </div>
                            <div className="flex items-center">
                              <Checkbox
                                defaultChecked={true}
                                {...form.register("colors.red")}
                              />
                              <Label className="ml-2 flex items-center text-sm font-medium">
                                <div className="mr-2 size-3.5 rounded-full bg-red-500"></div>
                                Red
                              </Label>
                            </div>

                            <Link
                              href="/#"
                              className="flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                            >
                              View all
                            </Link>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="price">
                          <AccordionTrigger className="flex w-full items-center justify-between border-b border-muted-foreground/30 px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-secondary-foreground/10 dark:border-muted-foreground/20">
                            Price
                          </AccordionTrigger>
                          <AccordionContent className="mt-4">
                            <div className="col-span-2 flex items-center justify-between space-x-3">
                              <div className="flex w-full flex-col">
                                <Slider
                                  defaultValue={[300]}
                                  step={1}
                                  {...form.register("price_from")}
                                  max={10000}
                                  min={1}
                                />
                                <Label className="mb-2 block text-sm font-medium">
                                  From
                                </Label>
                                <Input
                                  type="number"
                                  id="price-from"
                                  min="1"
                                  max="10000"
                                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/20 dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                  placeholder="0"
                                  required
                                  {...form.register("price_from")}
                                />
                              </div>

                              <div className="flex w-full flex-col">
                                <Slider
                                  defaultValue={[3500]}
                                  step={1}
                                  {...form.register("price_to")}
                                  max={10000}
                                  min={1}
                                />
                                <Label className="mb-2 block text-sm font-medium">
                                  To
                                </Label>
                                <Input
                                  type="number"
                                  id="max-experience-input"
                                  min="1"
                                  max="10000"
                                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/20 dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                  placeholder="0"
                                  required
                                  {...form.register("price_to")}
                                />
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="ratings">
                          <AccordionTrigger className="flex w-full items-center justify-between border-b border-muted-foreground/30 px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-secondary-foreground/10 dark:border-muted-foreground/20">
                            Ratings
                          </AccordionTrigger>
                          <AccordionContent className="mt-4">
                            <RadioGroup
                              defaultValue="3"
                              {...form.register("ratings")}
                            >
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
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="discount">
                          <AccordionTrigger className="flex w-full items-center justify-between border-b border-muted-foreground/30 px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-secondary-foreground/10 dark:border-muted-foreground/20">
                            Discount
                          </AccordionTrigger>
                          <AccordionContent className="mt-4">
                            <RadioGroup defaultValue="yes">
                              <div className="flex items-center">
                                <RadioGroupItem
                                  value="yes"
                                  {...form.register("discount.yes")}
                                />
                                <Label className="ml-2 flex items-center">
                                  Yes
                                </Label>
                              </div>
                              <div className="flex items-center">
                                <RadioGroupItem
                                  value="no"
                                  {...form.register("discount.no")}
                                />
                                <Label className="ml-2 flex items-center">
                                  No
                                </Label>
                              </div>
                            </RadioGroup>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="delivery_location">
                          <AccordionTrigger className="flex w-full items-center justify-between border-b border-muted-foreground/30 px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-secondary-foreground/10 dark:border-muted-foreground/20">
                            Delivery Location
                          </AccordionTrigger>
                          <AccordionContent className="mt-4">
                            <div className="relative">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="size-5 text-muted-foreground" />
                              </div>
                              <Input
                                type="search"
                                id="city-search"
                                className="block w-full rounded-lg border border-muted-foreground/30 bg-transparent p-2 pl-10 text-sm focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/30 dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                placeholder="Search for city"
                              />
                            </div>

                            <RadioGroup defaultValue="0" className="mt-4">
                              {locations.map((location, index) => (
                                <div key={index} className="flex items-center">
                                  <RadioGroupItem
                                    value={`${index}`}
                                    {...form.register(
                                      `locations.location_${index}` as LocationKeys,
                                    )}
                                  />
                                  <Label className="ml-2 flex items-center">
                                    {location}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
                <div className="bottom-0 left-0 mt-4 flex w-full justify-start space-x-4 sm:mt-24">
                  <Button className="inline-flex w-max items-center justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                    Apply Filters
                  </Button>
                  <Button
                    variant={"outline"}
                    className="inline-flex w-max items-center justify-center rounded-lg border border-muted-foreground/30 bg-background px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-muted-foreground/30 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-muted-foreground/30 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:text-muted-foreground dark:hover:bg-muted-foreground/25 dark:hover:text-white dark:focus:ring-muted-foreground/25"
                  >
                    Clear All
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
