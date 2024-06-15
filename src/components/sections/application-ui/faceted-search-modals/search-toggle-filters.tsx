import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";

const filterOptions = [
  {
    id: "last-rate",
    label: "The last rate",
    selectId: "last-rate-select",
    selectOption: "Min",
    defaultChecked: false,
  },
  {
    id: "vehicles",
    label: "Number of vehicles",
    selectId: "vehicles-select",
    selectOption: "Min",
    defaultChecked: true,
  },
  {
    id: "trips",
    label: "Number of trips with us",
    selectId: "trips-select",
    selectOption: "Max",
    defaultChecked: false,
  },
  {
    id: "cars",
    label: "Number of cars",
    selectId: "cars-select",
    selectOption: "Min",
    defaultChecked: false,
  },
];

const FormSchema = z.object({
  filters: z.array(
    z.object({
      id: z.string().optional(),
      label: z.string().optional(),
      selectId: z.string().optional(),
      selectOption: z.string().optional(),
      options: z.array(z.string()).optional(),
      checked: z.boolean().default(false),
    }),
  ),
});

export function SearchToggleFilters() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      filters: filterOptions.map((filter) => ({
        id: filter.id,
        label: filter.label,
        selectId: filter.selectId,
        selectOption: filter.selectOption,
        checked: filter.defaultChecked,
      })),
      security_emails: true,
    },
  });

  return (
    <div className="m-5 flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="block rounded-lg px-5 text-center text-sm font-medium text-primary-foreground focus:outline-none">
            Toggle modal
          </Button>
        </DialogTrigger>
        <DialogContent className="relative z-50 max-w-md translate-y-0 rounded-lg bg-background">
          <Form {...form}>
            <form className="relative w-full max-w-md md:h-auto">
              <div className="flex items-start justify-between rounded-t pb-4">
                <Text
                  level={"lg"}
                  className="font-normal text-muted-foreground"
                >
                  Show carriers first by:
                </Text>
                <DialogClose asChild>
                  <Button className="sr-only">Close modal</Button>
                </DialogClose>
              </div>
              <div className="space-y-4">
                {form.watch("filters").map((filter, index) => {
                  const filterOption = filterOptions.find(
                    (opt) => opt.id === filter.id,
                  );
                  return (
                    <FormField
                      key={filter.id}
                      control={form.control}
                      name={`filters.${index}.checked`}
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <span className="ml-3 text-sm font-medium text-black dark:text-white/70">
                              {filter.label}
                            </span>
                          </div>
                          <div className="px-2 sm:w-1/4">
                            {filterOption && (
                              <Select
                                {...form.register(
                                  `filters.${index}.selectOption`,
                                )}
                              >
                                <SelectTrigger
                                  id={filterOption.selectId}
                                  className="w-full rounded-lg border border-muted-foreground/20 bg-background p-2.5 text-xs text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/40 dark:bg-muted-foreground/30 dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
                                >
                                  <SelectValue
                                    placeholder={filterOption.selectOption}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  {["Min", "Max"].map((range, index) => (
                                    <SelectItem key={index} value={range}>
                                      {range}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          </div>
                        </FormItem>
                      )}
                    />
                  );
                })}
              </div>
              <div className="flex justify-start space-x-4 rounded-b pt-6">
                <Button className="rounded-lg py-2.5 text-center text-sm font-medium text-primary-foreground hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                  Apply
                </Button>
                <Button className="rounded-lg border border-muted-foreground/10 bg-background py-2.5 text-sm font-medium text-black hover:bg-muted-foreground/80 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-muted-foreground/10 dark:border-muted-foreground/30 dark:text-muted-foreground dark:hover:bg-muted-foreground/20 dark:hover:text-white dark:focus:ring-muted-foreground/20">
                  Reset
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
