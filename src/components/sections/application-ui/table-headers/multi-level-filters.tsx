import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaCog, FaFilter } from "react-icons/fa";
import { HiPlus, HiSearch, HiUpload } from "react-icons/hi";
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
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function MultiLevelTableHeadersWithFilters() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative px-4 shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between pt-4 md:pb-4">
            <div className="flex flex-1 items-center space-x-2">
              <h5>
                <span>View all products</span>
              </h5>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant={"outline"}>View JSON</Button>
              <Button variant={"outline"}>
                <HiUpload className="mr-2 size-4" />
                Export
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse items-stretch justify-between space-y-3 pb-4 md:flex-row md:items-center md:space-y-0">
            <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full flex-1 md:mr-4 md:max-w-sm"
                >
                  <Label htmlFor="default-search" className="sr-only">
                    Search
                  </Label>
                  <div className="relative flex w-full">
                    <HiSearch className="absolute left-3 top-1/2 z-10 size-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      id="default-search"
                      name="default-search"
                      placeholder="Search..."
                      type="search"
                      className="w-full rounded-r-none py-2 pl-8"
                    />
                    <Button className="rounded-l-none">Search</Button>
                  </div>
                </form>
              </Form>
              <div className="flex items-center space-x-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                      <FaFilter className="mr-1 size-3 text-gray-400" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 p-3">
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

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                      <FaCog className="mr-1 size-4 text-gray-400" />
                      Configurations
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44">
                    <DropdownMenuItem>By Category</DropdownMenuItem>
                    <DropdownMenuItem>By Brand</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Reset</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end pb-4 md:w-auto md:flex-row md:items-center md:space-x-3 md:pb-0">
              <Button>
                <HiPlus className="-ml-1 mr-1.5 size-3.5" />
                Add new product
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap border-t pb-4 pt-1">
            <div className="mr-4 mt-3 hidden items-center text-sm font-medium md:flex">
              Show only:
            </div>
            <RadioGroup defaultValue="show-only">
              <fieldset className="flex flex-wrap">
                {[
                  { value: "all-products", label: "All" },
                  { value: "active", label: "Active products" },
                  { value: "pending", label: "Pending products" },
                  { value: "inactive", label: "Inactive products" },
                ].map((item, index) => (
                  <div key={index} className="mr-4 mt-3 flex items-center">
                    <RadioGroupItem value={item.value} id={item.value} />
                    <Label
                      htmlFor={item.value}
                      className="ml-2 text-sm font-medium"
                    >
                      {item.label}
                    </Label>
                  </div>
                ))}
              </fieldset>
            </RadioGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
