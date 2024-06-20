import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { HiCalendar } from "react-icons/hi";
import { HiMiniStar } from "react-icons/hi2";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Slider } from "~/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

const ratings = [
  { name: "5", filled: 5, unfilled: 0 },
  { name: "4", filled: 4, unfilled: 1 },
  { name: "3", filled: 3, unfilled: 2 },
  { name: "2", filled: 2, unfilled: 3 },
  { name: "1", filled: 1, unfilled: 4 },
];

const formSchema = z.object({
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  brand: z.enum(["apple", "lg", "samsung", "logitech", "lenovo"]).optional(),
  model: z
    .enum(["imac-27", "imac-24", "macbook-pro-16", "macbook-pro-14"])
    .optional(),
  ratings: z.string().optional(),
  colors: z
    .object({
      red: z.boolean(),
      blue: z.boolean(),
      pink: z.boolean(),
      green: z.boolean(),
      gray: z.boolean(),
    })
    .optional(),
  condition: z.enum(["all", "new", "used"]).optional(),
  price_from: z.number(),
  price_to: z.number(),
  delivery: z.string().optional(),
});

export function AdvancedFacetedDatepicker() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price_from: 300,
      price_to: 3500,
      brand: "apple",
      model: "imac-27",
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
              <div className="left-0 top-0 z-40 h-screen overflow-auto bg-background p-4 transition-transform">
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

                <div className="mt-4 flex flex-1 flex-col justify-between">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="product-brand"
                          className="mb-2 block text-sm font-medium"
                        >
                          Product Brand
                        </Label>
                        <Select {...form.register("brand")}>
                          <SelectTrigger className="w-full rounded-lg border bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                            <SelectValue placeholder="Apple" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              { value: "apple", label: "Apple" },
                              { value: "lg", label: "LG" },
                              { value: "samsung", label: "Samsung" },
                              { value: "logitech", label: "Logitech" },
                              { value: "lenovo", label: "Lenovo" },
                            ].map((item, index) => (
                              <SelectItem key={index} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label
                          htmlFor="product-model"
                          className="mb-2 block text-sm font-medium"
                        >
                          Product Model
                        </Label>
                        <Select {...form.register("model")}>
                          <SelectTrigger className="w-full rounded-lg border bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                            <SelectValue placeholder='iMac 27"' />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              { value: "imac-27", label: 'iMac 27"' },
                              { value: "imac-24", label: 'iMac 24"' },
                              {
                                value: "macbook-pro-16",
                                label: 'Macbook Pro 16"',
                              },
                              {
                                value: "macbook-pro-14",
                                label: 'Macbook Pro 14"',
                              },
                            ].map((item, index) => (
                              <SelectItem key={index} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="manufacture-year"
                        className="mb-2 block text-sm font-medium"
                      >
                        Manufacture Year
                      </label>

                      <div className="flex w-full items-center">
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="relative flex-1">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <HiCalendar className="size-5 text-muted-foreground" />
                              </div>
                              <Input
                                type="text"
                                className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:placeholder:text-muted-foreground/80 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                placeholder="Select date start"
                                {...form.register("startDate")}
                              />
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              initialFocus
                              {...form.register("startDate")}
                            />
                          </PopoverContent>
                        </Popover>
                        <span className="mx-4 font-medium text-black dark:text-white">
                          to
                        </span>
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className="relative flex-1">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <HiCalendar className="size-5 text-muted-foreground" />
                              </div>
                              <Input
                                type="text"
                                className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:placeholder:text-muted-foreground/80 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                placeholder="Select date end"
                                {...form.register("endDate")}
                              />
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              initialFocus
                              {...form.register("endDate")}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div>
                      <Text level={"sm"} className="my-4 block font-medium">
                        Price Range
                      </Text>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 flex items-center justify-between space-x-3">
                          <div className="flex w-full flex-col">
                            <Slider
                              defaultValue={[300]}
                              step={1}
                              {...form.register("price_from")}
                              max={10000}
                              min={1}
                            />
                            <Label className="my-4 ml-0 block text-sm font-medium">
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
                            <Label className="my-4 block text-sm font-medium">
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
                      </div>
                    </div>

                    <div>
                      <Text level={"sm"} className="mb-2 block font-medium">
                        Condition
                      </Text>
                      <RadioGroup {...form.register("condition")}>
                        <ul className="flex w-full items-center rounded-lg border border-muted-foreground/10 bg-white text-sm font-medium dark:border-muted-foreground/40 dark:bg-muted-foreground/20">
                          <li className="w-full border-r border-muted-foreground/10 dark:border-muted-foreground/40">
                            <div className="flex items-center pl-3">
                              <RadioGroupItem id="condition-all" value="all" />
                              <Label
                                htmlFor="condition-all"
                                className="ml-2 w-full py-3 text-sm font-medium"
                              >
                                All
                              </Label>
                            </div>
                          </li>
                          <li className="w-full border-r border-muted-foreground/10 dark:border-muted-foreground/40">
                            <div className="flex items-center pl-3">
                              <RadioGroupItem id="condition-new" value="new" />
                              <Label
                                htmlFor="condition-new"
                                className="ml-2 w-full py-3 text-sm font-medium"
                              >
                                New
                              </Label>
                            </div>
                          </li>
                          <li className="w-full">
                            <div className="flex items-center pl-3">
                              <RadioGroupItem
                                id="condition-used"
                                value="used"
                              />
                              <Label
                                htmlFor="condition-used"
                                className="ml-2 w-full py-3 text-sm font-medium"
                              >
                                Used
                              </Label>
                            </div>
                          </li>
                        </ul>
                      </RadioGroup>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="w-full">
                        <Text
                          level={"sm"}
                          className="mb-2 font-medium text-black dark:text-white"
                        >
                          Colour
                        </Text>
                        <div className="space-y-2">
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
                        </div>
                      </div>

                      <div className="w-full">
                        <Text
                          level={"sm"}
                          className="mb-2 font-medium text-black dark:text-white"
                        >
                          Rating
                        </Text>

                        <div className="space-y-2">
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
                        </div>
                      </div>
                    </div>

                    <div>
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
                        {...form.register("delivery")}
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
