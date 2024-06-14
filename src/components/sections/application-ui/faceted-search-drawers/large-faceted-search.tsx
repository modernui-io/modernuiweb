import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Form } from "~/components/ui/form";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

const skills = [
  "HTML/CSS",
  "UI Design",
  "Figma",
  "React",
  "Modern UI",
  "JS",
  "PHP",
  "UX",
  "Logo Design",
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

export function LargeFacetedSearch() {
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
      <DrawerContent className="w-fit sm:w-96">
        <ScrollArea>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} action="#">
              <div className="left-0 top-0 z-40 h-screen overflow-auto p-4 transition-transform">
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
                    <div>
                      <Text level={"sm"} className="mb-4 block font-medium">
                        Status
                      </Text>
                      <RadioGroup {...form.register("condition")}>
                        <ul className="flex items-center rounded-lg border border-muted-foreground/10 bg-white text-sm font-medium dark:border-muted-foreground/40 dark:bg-muted-foreground/20">
                          <li className="w-1/3 border-r border-muted-foreground/10 dark:border-muted-foreground/40">
                            <div className="flex items-center pl-3">
                              <RadioGroupItem id="status-all" value="all" />
                              <Label
                                htmlFor="status-all"
                                className="ml-2 py-3 text-sm font-medium"
                              >
                                All
                              </Label>
                            </div>
                          </li>
                          <li className="w-1/3 border-r border-muted-foreground/10 dark:border-muted-foreground/40">
                            <div className="flex items-center pl-3">
                              <RadioGroupItem
                                id="status-active"
                                value="active"
                              />
                              <Label
                                htmlFor="status-active"
                                className="ml-2 py-3 text-sm font-medium"
                              >
                                Active
                              </Label>
                            </div>
                          </li>
                          <li className="w-1/3">
                            <div className="flex items-center pl-3">
                              <RadioGroupItem
                                id="status-inactive"
                                value="inactive"
                              />
                              <Label
                                htmlFor="status-inactive"
                                className="ml-2 py-3 text-sm font-medium"
                              >
                                Inactive
                              </Label>
                            </div>
                          </li>
                        </ul>
                      </RadioGroup>
                    </div>

                    <div>
                      <Text level={"sm"} className="mb-4 font-medium">
                        Skills
                      </Text>

                      <ToggleGroup
                        type="multiple"
                        className="grid grid-cols-2 gap-2 sm:grid-cols-3"
                      >
                        {skills.map((item, index) => (
                          <ToggleGroupItem
                            key={index}
                            id={item}
                            value={item}
                            className="border-2 border-primary bg-background data-[state=on]:bg-primary-500 data-[state=on]:text-white dark:border-white"
                          >
                            <div className="block">
                              <div className="w-fit text-sm font-semibold sm:text-xs">
                                {item}
                              </div>
                            </div>
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </div>

                    <div>
                      <Text level={"sm"} className="mb-4 font-medium">
                        Technologies
                      </Text>

                      <ToggleGroup
                        type="multiple"
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          {
                            value: "react-option",
                            icon: (
                              <FaReact className="mb-2 size-7 text-sky-600" />
                            ),
                            heading: "React JS",
                            description:
                              "A JavaScript library for building user interfaces.",
                          },
                          {
                            value: "vue-option",
                            icon: (
                              <FaVuejs className="mb-2 size-7 text-green-400" />
                            ),
                            heading: "Vue JS",
                            description:
                              "A model view front end JavaScript framework..",
                          },
                          {
                            value: "angular-option",
                            icon: (
                              <FaAngular className="mb-2 size-7 text-red-600" />
                            ),
                            heading: "Angular",
                            description:
                              "A TypeScript-based web application framework.",
                          },
                        ].map((toggle, index) => (
                          <ToggleGroupItem
                            key={index}
                            id={toggle.value}
                            value={toggle.value}
                            className="h-48 border-2 bg-background data-[state=on]:border-primary data-[state=on]:bg-primary-400 data-[state=on]:text-white dark:data-[state=on]:border-white"
                          >
                            <div className="block">
                              {toggle.icon}
                              <div className="w-fit text-lg font-semibold">
                                {toggle.heading}
                              </div>
                              <div className="w-fit text-sm">
                                {toggle.description}
                              </div>
                            </div>
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="ml-3 text-sm font-medium">
                            <Switch
                              id="projects"
                              name="projects"
                              defaultChecked={false}
                              className="mr-2"
                            />
                            <Label className="relative inline-flex cursor-pointer items-center">
                              Projects Completed
                            </Label>
                          </span>
                        </div>

                        <div>
                          <Select>
                            <SelectTrigger className="w-full rounded-lg border bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                              <SelectValue placeholder="Min" />
                            </SelectTrigger>
                            <SelectContent>
                              {[
                                { value: "min", label: "Min" },
                                { value: "max", label: "Max" },
                              ].map((item, index) => (
                                <SelectItem key={index} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="ml-3 text-sm font-medium">
                            <Switch
                              id="technologies_used"
                              name="technologies_used"
                              defaultChecked={true}
                              className="mr-2"
                            />

                            <Label className="relative inline-flex cursor-pointer items-center">
                              Technologies Used
                            </Label>
                          </span>
                        </div>

                        <div>
                          <Select>
                            <SelectTrigger className="w-full rounded-lg border bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                              <SelectValue placeholder="Min" />
                            </SelectTrigger>
                            <SelectContent>
                              {[
                                { value: "min", label: "Min" },
                                { value: "max", label: "Max" },
                              ].map((item, index) => (
                                <SelectItem key={index} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="ml-3 text-sm font-medium">
                            <Switch
                              id="reviews"
                              name="reviews"
                              defaultChecked={false}
                              className="mr-2"
                            />

                            <Label className="relative inline-flex cursor-pointer items-center">
                              Number of reviews
                            </Label>
                          </span>
                        </div>
                        <div>
                          <Select>
                            <SelectTrigger className="w-full rounded-lg border bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                              <SelectValue placeholder="Max" />
                            </SelectTrigger>
                            <SelectContent>
                              {[
                                { value: "min", label: "Min" },
                                { value: "max", label: "Max" },
                              ].map((item, index) => (
                                <SelectItem key={index} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bottom-0 left-0 mt-4 flex w-fit justify-start space-x-4 sm:mt-24">
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
