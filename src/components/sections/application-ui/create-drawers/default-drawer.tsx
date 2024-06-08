import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
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
  category: z.enum([" ", "TV", "PC", "GA", "PH"]).optional(),
  price: z.number(),
  description: z.string().optional(),
});

export function DefaultDrawer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      brand: "",
      category: " ",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div className="m-5 text-center">
          <Button className="mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Create product
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-fit">
        <div className="left-0 top-0 z-40 h-screen bg-white p-4 transition-transform dark:bg-muted-foreground/20">
          <div className="flex items-center justify-between">
            <DrawerTitle className="mb-6 inline-flex items-center text-sm font-semibold uppercase text-muted-foreground">
              New Product
            </DrawerTitle>
            <DrawerClose asChild>
              <Button className="absolute right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-muted-foreground hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white">
                <X className="size-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </DrawerClose>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} action="#">
              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block text-sm font-medium">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    className="block w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
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
                    className="block w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
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
                    className="block w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
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
                    <SelectTrigger className="w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value=" ">Select Category</SelectItem>
                      <SelectItem value="TV">TV/Monitors</SelectItem>
                      <SelectItem value="PC">PC</SelectItem>
                      <SelectItem value="GA">Gaming/Console</SelectItem>
                      <SelectItem value="PH">Phones</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Description
                  </Label>
                  <Textarea
                    className="block h-20 w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Enter event description here"
                    {...form.register("description")}
                  ></Textarea>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className="bottom-0 left-0 flex w-full justify-center space-x-4 p-4">
          <Button className="w-full justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Add product
          </Button>
          <DrawerClose asChild>
            <Button className="inline-flex w-full items-center justify-center rounded-lg border border-muted-foreground/10 bg-white px-5 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted-foreground/30 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-muted-foreground/40 dark:bg-muted dark:text-white/70 dark:hover:bg-muted-foreground/30 dark:hover:text-white dark:focus:ring-muted-foreground/30">
              <X className="-ml-1 size-5 sm:mr-1" />
              Cancel
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
