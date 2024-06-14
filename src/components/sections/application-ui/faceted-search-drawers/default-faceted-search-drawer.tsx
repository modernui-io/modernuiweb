import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { HiMiniStar } from "react-icons/hi2";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Heading } from "~/components/ui/custom/headings";
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

const ratings = [
  { name: "5", filled: 5, unfilled: 0 },
  { name: "4", filled: 4, unfilled: 1 },
  { name: "3", filled: 3, unfilled: 2 },
  { name: "2", filled: 2, unfilled: 3 },
  { name: "1", filled: 1, unfilled: 4 },
];

const formSchema = z.object({
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
  price_from: z.number(),
  price_to: z.number(),
});

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

export function DefaultFacetedSearchDrawer() {
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
                      <Heading level={6} className="font-medium">
                        Categories
                      </Heading>

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
                    </div>

                    <div className="space-y-2">
                      <Heading level={6} className="font-medium">
                        Prices
                      </Heading>

                      <div className="col-span-2 flex items-center justify-between space-x-3">
                        <div className="w-full">
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

                        <div className="w-full">
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
                    </div>

                    <div className="space-y-2">
                      <Heading level={6} className="font-medium">
                        Rating
                      </Heading>

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
                              {Array.from({ length: rating.unfilled }).map(
                                (_, i) => (
                                  <HiMiniStar
                                    key={`unfilled-${i}`}
                                    className="size-5 text-muted-foreground/30 dark:text-muted-foreground/60"
                                  />
                                ),
                              )}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
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
