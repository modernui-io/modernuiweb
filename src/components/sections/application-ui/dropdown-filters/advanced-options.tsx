import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Slider } from "~/components/ui/slider";

enum CheckboxId {
  GAMING = "gaming",
  ELECTRONICS = "electronics",
  PHONE = "phone",
  TV_MONITOR = "tv-monitor",
  LAPTOP = "laptop",
  WATCH = "watch",
}

const formSchema = z.object({
  "min-price": z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0." }),
  "max-price": z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0." }),
  "min-price-input": z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0." }),
  "max-price-input": z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0." }),
  "min-sales": z
    .number()
    .min(0, { message: "Sales must be greater than or equal to 0." }),
  "max-sales": z
    .number()
    .min(0, { message: "Sales must be greater than or equal to 0." }),
  "min-sales-input": z
    .number()
    .min(0, { message: "Sales must be greater than or equal to 0." }),
  "max-sales-input": z
    .number()
    .min(0, { message: "Sales must be greater than or equal to 0." }),
  gaming: z.boolean(),
  electronics: z.boolean(),
  phone: z.boolean(),
  "tv-monitor": z.boolean(),
  laptop: z.boolean(),
  watch: z.boolean(),
  state: z.enum(["all", "new", "used"]),
});

export function AdvancedDropdownFilterOptions() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "min-price": 200,
      "max-price": 2500,
      "min-price-input": 0,
      "max-price-input": 0,
      "min-sales": 350,
      "max-sales": 2000,
      "min-sales-input": 0,
      "max-sales-input": 0,
      gaming: false,
      electronics: false,
      phone: false,
      "tv-monitor": false,
      laptop: false,
      watch: false,
      state: "all",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Advanced filter <FaChevronDown className="ml-3 size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 p-3"
          >
            <Text className="inline-flex items-center">Filter</Text>
            <div className="mt-4">
              <span className="mb-2 block text-sm font-medium">
                Price Range
              </span>
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="min-price"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Slider
                          {...field}
                          id="min-price"
                          max={7000}
                          min={0}
                          value={[field.value]}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="max-price"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Slider
                          {...field}
                          id="max-price"
                          max={7000}
                          min={0}
                          value={[field.value]}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-4 flex items-center justify-between space-x-2 md:col-span-2">
                <div className="w-full">
                  <Label
                    htmlFor="min-price-input"
                    className="mb-2 block text-sm font-medium"
                  >
                    From
                  </Label>
                  <FormField
                    control={form.control}
                    name="min-price-input"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            id="min-price-input"
                            type="number"
                            className="py-2 sm:text-xs"
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <Label
                    htmlFor="max-price-input"
                    className="mb-2 block text-sm font-medium"
                  >
                    To
                  </Label>
                  <FormField
                    control={form.control}
                    name="max-price-input"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            id="max-price-input"
                            type="number"
                            className="py-2 sm:text-xs"
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="mb-2 block text-sm font-medium">Sales</span>
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="min-sales"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Slider
                          {...field}
                          id="min-sales"
                          max={7000}
                          min={0}
                          step={1}
                          value={[field.value]}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="max-sales"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Slider
                          {...field}
                          id="max-sales"
                          max={7000}
                          min={0}
                          step={1}
                          value={[field.value]}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-4 flex items-center justify-between space-x-2 md:col-span-2">
                <div className="w-full">
                  <Label
                    htmlFor="min-sales-input"
                    className="mb-2 block text-sm font-medium"
                  >
                    From
                  </Label>
                  <FormField
                    control={form.control}
                    name="min-sales-input"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            id="min-sales-input"
                            type="number"
                            className="py-2 sm:text-xs"
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full">
                  <Label
                    htmlFor="max-sales-input"
                    className="mb-2 block text-sm font-medium"
                  >
                    To
                  </Label>
                  <FormField
                    control={form.control}
                    name="max-sales-input"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            id="max-sales-input"
                            type="number"
                            className="py-2 sm:text-xs"
                            onChange={(e) =>
                              field.onChange(e.target.valueAsNumber)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="mb-2 block text-sm font-medium">Category</span>
              <ul className="grid w-full grid-cols-2 gap-3">
                {Object.values(CheckboxId).map((id) => (
                  <li key={id} className="flex items-center">
                    <FormField
                      control={form.control}
                      name={id} // Ensure name matches enum value
                      render={() => (
                        <Label
                          htmlFor={id}
                          className={`${form.watch(id) ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-500 dark:bg-gray-600 dark:text-gray-100"} inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 p-2 text-center text-sm font-medium peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white hover:bg-primary-500 hover:text-white dark:border-gray-500 dark:peer-checked:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white`}
                          onClick={() => {
                            form.setValue(id, !form.watch(id));
                          }}
                        >
                          {id}
                        </Label>
                      )}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="mb-2 block text-sm font-medium">State</span>
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <RadioGroup value={field.value} onChange={field.onChange}>
                    <ul className="flex w-full flex-col items-center rounded-lg border border-gray-200 text-sm font-medium">
                      <li className="w-full border-b border-gray-200 dark:border-gray-600">
                        <div className="flex items-center pl-3">
                          <RadioGroupItem id="state-all" value="all" />
                          <Label
                            htmlFor="state-all"
                            className="ml-2 w-full py-3 text-sm font-medium"
                          >
                            All
                          </Label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 dark:border-gray-600">
                        <div className="flex items-center pl-3">
                          <RadioGroupItem id="state-new" value="new" />
                          <Label
                            htmlFor="state-new"
                            className="ml-2 w-full py-3 text-sm font-medium"
                          >
                            New
                          </Label>
                        </div>
                      </li>
                      <li className="w-full">
                        <div className="flex items-center pl-3">
                          <RadioGroupItem id="state-used" value="used" />
                          <Label
                            htmlFor="state-used"
                            className="ml-2 w-full py-3 text-sm font-medium"
                          >
                            Refurbished
                          </Label>
                        </div>
                      </li>
                    </ul>
                  </RadioGroup>
                )}
              />
            </div>
            <div className="mt-4 flex space-x-4">
              <Button type="submit">Show 32 Results</Button>
              <Button type="reset">Reset</Button>
            </div>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
