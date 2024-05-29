import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HiCalendar, HiCloudUpload, HiX } from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
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
  description: z.string(),
  price: z.string(),
  category: z.enum(["EL", "AL", "PC", "GA", "PH"]),
  weight: z.string(),
  length: z.string(),
  breadth: z.string(),
  width: z.string(),
  instore: z.boolean(),
  online: z.boolean(),
  both: z.boolean(),
  file: z.string(),
});

export function CreateProductModal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      brand: "",
      description: "",
      price: "",
      category: "AL",
      weight: "",
      length: "",
      breadth: "",
      width: "",
      instore: false,
      online: false,
      both: false,
      file: "",
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
        <ScrollArea className="h-[40rem] overflow-hidden">
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
                    Product Name
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
                    required
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
                    required
                    type="number"
                    {...form.register("price")}
                  />
                </div>
                <div className="grid gap-4 sm:col-span-2 sm:grid-cols-4 md:gap-6">
                  <div>
                    <Label
                      htmlFor="weight"
                      className="mb-2 block text-sm font-medium"
                    >
                      Weight (kg)
                    </Label>
                    <Input
                      id="weight"
                      placeholder="12"
                      required
                      type="number"
                      {...form.register("weight")}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="length"
                      className="mb-2 block text-sm font-medium"
                    >
                      Lenght (cm)
                    </Label>
                    <Input
                      id="length"
                      placeholder="105"
                      required
                      type="number"
                      {...form.register("length")}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="breadth"
                      className="mb-2 block text-sm font-medium"
                    >
                      Breadth (cm)
                    </Label>
                    <Input
                      id="breadth"
                      placeholder="15"
                      required
                      type="number"
                      {...form.register("breadth")}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="width"
                      className="mb-2 block text-sm font-medium"
                    >
                      Width (cm)
                    </Label>
                    <Input
                      id="width"
                      placeholder="23"
                      required
                      type="number"
                      {...form.register("width")}
                    />
                  </div>
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
                    required
                    rows={4}
                    {...form.register("description")}
                  />
                </div>
              </div>
              <div className="mb-4 space-y-4 sm:flex sm:space-y-0">
                <div className="mr-4 flex items-center">
                  <Checkbox
                    {...form.register("instore")}
                    id="inline-checkbox"
                  />
                  <Label
                    htmlFor="inline-checkbox"
                    className="ml-2 text-sm font-medium"
                  >
                    In-store only
                  </Label>
                </div>
                <div className="mr-4 flex items-center">
                  <Checkbox
                    {...form.register("online")}
                    id="inline-2-checkbox"
                    required
                  />
                  <Label
                    htmlFor="inline-2-checkbox"
                    className="ml-2 text-sm font-medium"
                  >
                    Online selling only
                  </Label>
                </div>
                <div className="mr-4 flex items-center">
                  <Checkbox
                    defaultChecked
                    id="inline-checked-checkbox"
                    {...form.register("both")}
                  />
                  <Label
                    htmlFor="inline-checked-checkbox"
                    className="ml-2 text-sm font-medium"
                  >
                    Both in-store and online
                  </Label>
                </div>
              </div>
              <div className="mb-4">
                <span className="mb-2 block text-sm font-medium">
                  Product Images
                </span>
                <div className="flex w-full items-center justify-center">
                  <Label
                    htmlFor="dropzone-file"
                    className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <HiCloudUpload className="mb-3 size-10 text-gray-400" />
                      <Text className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </Text>
                      <Text className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </Text>
                    </div>
                    <Input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      {...form.register("file")}
                    />
                  </Label>
                </div>
              </div>
              <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                <Button type="submit" className="w-full text-sm md:w-fit">
                  Add product
                </Button>
                <Button className="w-full text-sm md:w-fit">
                  <HiCalendar className="-ml-1 mr-1 size-5" />
                  Schedule
                </Button>
                <DialogClose asChild>
                  <Button
                    className="w-full text-sm sm:w-auto"
                    variant={"outline"}
                  >
                    <HiX className="-ml-1 mr-1 size-5" />
                    Discard
                  </Button>
                </DialogClose>
              </div>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
