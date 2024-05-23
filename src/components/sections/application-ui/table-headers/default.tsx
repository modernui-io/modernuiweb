import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaChevronDown, FaFilter } from "react-icons/fa";
import { HiPlus, HiSearch } from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
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

const formSchema = z.object({
  search: z.string(),
});

export function DefaultTableHeader() {
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
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="relative w-full md:w-1/2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex items-center"
                >
                  <Label htmlFor="simple-search" className="sr-only">
                    Search
                  </Label>
                  <HiSearch className="absolute left-2 z-10 size-5" />
                  <Input
                    id="search"
                    placeholder="Search"
                    required
                    type="search"
                    className="w-full pl-8"
                    {...form.register("search")}
                  />
                </form>
              </Form>
            </div>
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Button>
                <HiPlus className="mr-2 size-4" />
                Add product
              </Button>
              <div className="flex items-center justify-center gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>
                      <FaChevronDown className="mr-3 size-3" /> Open
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete All</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

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
                        { id: "apple", name: "Apple (56)" },
                        { id: "fitbit", name: "Fitbit (56)" },
                        { id: "dell", name: "Dell (56)" },
                        { id: "asus", name: "Asus (97)", defaultChecked: true },
                      ].map((item, index) => (
                        <li className="flex items-center" key={index}>
                          <Checkbox
                            id={item.id}
                            name={item.id}
                            defaultChecked={item.defaultChecked}
                          />
                          <Label
                            htmlFor={item.id}
                            className="ml-2 text-sm font-medium"
                          >
                            {item.name}
                          </Label>
                        </li>
                      ))}
                    </ul>
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
