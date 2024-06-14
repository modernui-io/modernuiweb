import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { z } from "zod";

import { Button } from "~/components/ui/button";
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
import { ScrollArea } from "~/components/ui/scroll-area";
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
  description: z.string().optional(),
});

export function UpdateDefaultDrawer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Apple iMac 27“",
      brand: "Apple",
      price: 2999,
      category: "EL",
      description:
        "Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US",
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
            Update product
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-fit">
        <ScrollArea>
          <div className="left-0 top-0 z-40 h-screen overflow-auto bg-white p-4 transition-transform dark:bg-muted-foreground/20">
            <div className="flex items-center justify-between">
              <DrawerTitle className="mb-6 mt-4 inline-flex items-center text-sm font-semibold uppercase text-muted-foreground">
                Update Product
              </DrawerTitle>
              <DrawerClose asChild>
                <Button className="right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-muted-foreground hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-primary-foreground">
                  <X className="size-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </DrawerClose>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} action="#">
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Type product name"
                      required
                      {...form.register("name")}
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Brand
                    </Label>
                    <Input
                      type="text"
                      id="brand"
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Product brand"
                      {...form.register("brand")}
                      required
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Price
                    </Label>
                    <Input
                      type="number"
                      id="price"
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="$2999"
                      required
                      {...form.register("price")}
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Category
                    </Label>
                    <Select {...form.register("category")}>
                      <SelectTrigger className="w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500">
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
                    <Label className="mb-2 block text-sm font-medium">
                      Description
                    </Label>
                    <Textarea
                      rows={8}
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter event description here"
                      {...form.register("description")}
                    ></Textarea>
                  </div>
                  <div className="bottom-0 left-0 flex w-full justify-start space-x-4 p-4">
                    <Button className="w-max justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                      Add product
                    </Button>
                    <DrawerClose asChild>
                      <Button
                        variant={"outline"}
                        className="inline-flex items-center rounded-lg border-red-500 px-5 py-2.5 text-center text-sm font-medium text-red-500 hover:bg-red-500 hover:text-primary-foreground dark:bg-muted-foreground/20"
                      >
                        <RiDeleteBin6Fill className="size-6" />
                        Delete
                      </Button>
                    </DrawerClose>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
