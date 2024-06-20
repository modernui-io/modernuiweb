import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { z } from "zod";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

const formSchema = z.object({
  name: z.string(),
  brand: z.string(),
  category: z.string().optional(),
  price: z.number(),
  weight: z.string(),
  description: z.string().optional(),
});

export function DefaultForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Apple iMac 27“",
      brand: "Apple",
      price: 2999,
      category: "EL",
      weight: "15",
      description:
        "Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto px-4 py-8 lg:py-16">
        <Text className="mb-4 text-xl font-bold">Add a new product</Text>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            action="#"
            className="mt-4 flex max-w-full"
          >
            <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <Label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Product Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  className="block h-auto w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Type product name"
                  required
                  {...form.register("name")}
                />
              </div>
              <div className="w-full">
                <Label
                  htmlFor="brand"
                  className="mb-2 block text-sm font-medium"
                >
                  Brand
                </Label>
                <Input
                  type="text"
                  id="brand"
                  className="block h-auto w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Product brand"
                  required
                  {...form.register("brand")}
                />
              </div>
              <div className="w-full">
                <Label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium"
                >
                  Price
                </Label>
                <Input
                  type="number"
                  id="price"
                  className="block h-auto w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="$2999"
                  required
                  {...form.register("price")}
                />
              </div>
              <div>
                <Label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium"
                >
                  Category
                </Label>
                <Select {...form.register("category")}>
                  <SelectTrigger className="h-11 rounded-lg bg-secondary/30 dark:bg-muted-foreground/35">
                    <SelectValue placeholder="Electronics" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "EL", label: "Electronics" },
                      { value: "TV", label: "TV/Monitors" },
                      { value: "PC", label: "PC" },
                      { value: "GA", label: "Gaming/Console" },
                      { value: "PH", label: "Phones" },
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
                  htmlFor="item-weight"
                  className="mb-2 block text-sm font-medium"
                >
                  Item Weight (kg)
                </Label>
                <Input
                  type="number"
                  id="item-weight"
                  className="block h-auto w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="12"
                  required
                  {...form.register("weight")}
                />
              </div>
              <div className="sm:col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Description
                </Label>
                <Textarea
                  rows={8}
                  id="description"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Your description here"
                  {...form.register("description")}
                ></Textarea>
              </div>
              <div className="flex w-72  items-center">
                <Button
                  aria-label="Update product"
                  type="submit"
                  className="mx-auto ml-0 mt-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
                >
                  Update product
                </Button>

                <Button
                  aria-label="Delete product"
                  variant={"outline"}
                  className="mx-auto ml-0 mt-2 inline-flex items-center rounded-lg border-red-500 px-5 py-2.5 text-center text-sm font-medium text-red-500 hover:bg-red-500 hover:text-white"
                >
                  <RiDeleteBin6Fill className="size-6" />
                  Delete
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
