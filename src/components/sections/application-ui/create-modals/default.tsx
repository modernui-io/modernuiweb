import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { HiPlus } from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
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
  price: z.string(),
  description: z.string(),
  category: z.enum(["EL", "AL", "PC", "GA", "PH"]),
});

export function DefaultCreateModal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      brand: "",
      price: "",
      description: "",
      category: "AL",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create product</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg p-4 shadow sm:p-5">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
          <h3 className="text-lg font-semibold">Add Product</h3>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Type product name"
                  required
                  {...form.register("name")}
                />
              </div>
              <div>
                <Label
                  htmlFor="brand"
                  className="mb-2 block text-sm font-medium"
                >
                  Brand
                </Label>
                <Input
                  id="brand"
                  placeholder="Product brand"
                  {...form.register("brand")}
                />
              </div>
              <div>
                <Label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium"
                >
                  Price
                </Label>
                <Input
                  id="price"
                  placeholder="$2999"
                  type="number"
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
                  <SelectTrigger>
                    <SelectValue placeholder="Electronics" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "EL", label: "Electronics" },
                      { value: "AL", label: "TV/Monitors" },
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
              <div className="sm:col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Write product description here"
                  rows={4}
                  {...form.register("description")}
                />
              </div>
            </div>
            <Button type="submit" className="text-sm">
              <HiPlus className="-ml-1 mr-2 size-4" />
              Add new product
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
