import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaFilter } from "react-icons/fa";
import { HiCog, HiInformationCircle, HiPlus, HiSearch } from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const formSchema = z.object({
  search: z.string(),
});

export function TableHeaderWithSearchInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative shadow-md sm:rounded-lg">
          <div className="divide-y px-4">
            <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
              <div className="flex flex-1 items-center space-x-2">
                <h5>
                  <span>Rankings Overview</span>
                  <span className="ml-1 text-gray-500">1-100 (436)</span>
                </h5>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div>
                        <span className="sr-only">More info</span>
                        <HiInformationCircle className="size-4 text-gray-400" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Text>Showing 1-100 of 436 results</Text>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
                <Button color="gray" className="text-xs">
                  <HiCog className="mr-2 size-4" />
                  Table settings
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between space-y-3 py-4 md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <div className="w-full md:w-1/2">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex items-center"
                  >
                    <Label htmlFor="simple-search" className="sr-only">
                      Search
                    </Label>
                    <HiSearch className="absolute left-6 z-10 size-5 text-gray-500" />
                    <Input
                      id="simple-search"
                      placeholder="Search for products"
                      type="search"
                      className="w-full py-2 pl-8"
                      {...form.register("search")}
                    />
                  </form>
                </Form>
              </div>
              <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
                <Button>
                  <HiPlus className="-ml-1 mr-1.5 size-3.5" />
                  <span className="whitespace-nowrap">Add product</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>
                      <FaFilter className="mr-3 size-3" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <span className="mb-3 text-sm font-medium">Category</span>
                    <ul className="space-y-2 pt-2">
                      {[
                        { id: "apple", name: "apple", label: "Apple (56)" },
                        { id: "fitbit", name: "fitbit", label: "Fitbit (56)" },
                        { id: "dell", name: "dell", label: "Dell (56)" },
                        {
                          id: "asus",
                          name: "asus",
                          label: "Asus (97)",
                          defaultChecked: true,
                        },
                      ].map((checkbox, index) => (
                        <li key={index} className="flex items-center">
                          <Checkbox
                            id={checkbox.id}
                            name={checkbox.name}
                            defaultChecked={checkbox.defaultChecked}
                          />
                          <Label
                            htmlFor={checkbox.id}
                            className="ml-2 text-sm font-medium"
                          >
                            {checkbox.label}
                          </Label>
                        </li>
                      ))}
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>Actions</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>By Category</DropdownMenuItem>
                    <DropdownMenuItem>By Brand</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Reset</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}