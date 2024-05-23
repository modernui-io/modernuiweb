import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { z } from "zod";

import { Button } from "~/components/ui/button";
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

const formSchema = z.object({
  priceFrom: z
    .number()
    .min(1, { message: "Minimum value is 1" })
    .max(10000, { message: "Maximum value is 10000" })
    .optional(),
  maxExperienceInput: z
    .number()
    .min(1, { message: "Minimum value is 1" })
    .max(10000, { message: "Maximum value is 10000" })
    .optional(),
});

const rangeOptions = [
  {
    text: "100,001+",
    values: { priceFrom: 100001, maxExperienceInput: 100001 },
  },
  {
    text: "10,001-100,000",
    values: { priceFrom: 10001, maxExperienceInput: 100000 },
  },
  {
    text: "1001-10,000",
    values: { priceFrom: 1001, maxExperienceInput: 10000 },
  },
  { text: "101-1,000", values: { priceFrom: 101, maxExperienceInput: 1000 } },
  { text: "11-100", values: { priceFrom: 11, maxExperienceInput: 100 } },
  { text: "1-10", values: { priceFrom: 1, maxExperienceInput: 10 } },
];

export function DropdownFilterRange() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      priceFrom: 0,
      maxExperienceInput: 1000,
    },
  });

  const setRangeValues = (values: {
    priceFrom: number;
    maxExperienceInput: number;
  }) => {
    form.setValue("priceFrom", values.priceFrom);
    form.setValue("maxExperienceInput", values.maxExperienceInput);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted", values);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Filter by range <FaChevronDown className="ml-3 size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-10 w-56 divide-y divide-gray-100 rounded-lg shadow focus:outline-none">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-3">
            <ul className="space-y-2 text-sm">
              {rangeOptions.map(({ text, values }, index) => (
                <li key={index} className="flex items-center">
                  <button
                    type="button"
                    className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
                    onClick={() => setRangeValues(values)}
                  >
                    {text}
                  </button>
                </li>
              ))}
            </ul>
            <div className="my-2 border-t border-gray-200 py-2">
              <span className="mb-2 block text-sm font-medium">
                Custom range
              </span>
              <div className="flex items-center space-x-3">
                <FormField
                  control={form.control}
                  name="priceFrom"
                  render={({ field }) => (
                    <FormItem className="w-1/2 [&_input]:py-2 [&_input]:sm:text-xs">
                      <FormControl>
                        <Input
                          id="price-from"
                          max="100000"
                          min="1"
                          required
                          type="number"
                          value={field.value ?? ""}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="maxExperienceInput"
                  render={({ field }) => (
                    <FormItem className="w-1/2 [&_input]:py-2 [&_input]:sm:text-xs">
                      <FormControl>
                        <Input
                          id="max-experience-input"
                          max="100000"
                          min="1"
                          required
                          type="number"
                          value={field.value ?? ""}
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
            <Button type="submit" className="w-full">
              Apply
            </Button>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
