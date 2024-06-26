import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import {
  HiCalendar,
  HiChevronDown,
  HiCloudUpload,
  HiEye,
  HiInformationCircle,
  HiLocationMarker,
  HiPencilAlt,
  HiPlus,
  HiSelector,
  HiStar,
  HiTrash,
  HiX,
} from "react-icons/hi";
import { z } from "zod";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const formSchema = z.object({
  name: z.string(),
  brand: z.string(),
  description: z.string(),
  price: z.number().nonnegative(),
  category: z.enum(["EL", "AL", "PC", "GA", "PH"]).default("AL"),
  weight: z.number().nonnegative(),
  length: z.number().nonnegative(),
  breadth: z.number().nonnegative(),
  width: z.number().nonnegative(),
  instore: z.boolean(),
  online: z.boolean(),
  both: z.boolean(),
  file: z.instanceof(File).nullable(),
});

export function CRUDLayoutWithExpandableRows() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      brand: "",
      description: "",
      price: 0,
      category: "AL",
      weight: 0,
      length: 0,
      breadth: 0,
      width: 0,
      instore: false,
      online: false,
      both: false,
      file: null,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="bg-background py-3 sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-background shadow-md sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 border-b p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex w-full items-center space-x-3">
              <h5 className="font-semibold">ModernUI Products</h5>
              <div className="font-medium text-gray-400">6,560 results</div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <HiInformationCircle className="size-4 text-gray-400" />
                      <span className="sr-only">More info</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-background">
                    <Text>Showing 1-10 of 6,560 results</Text>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex w-full flex-row items-center justify-end space-x-3 md:w-fit">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full whitespace-nowrap">
                    <HiPlus className="mr-2 size-3.5" />
                    Add new product
                  </Button>
                </DialogTrigger>
                <DialogContent className="min-w-[40rem] rounded-lg p-4 shadow sm:p-5">
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
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
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
                          <Button
                            type="submit"
                            className="w-full text-sm md:w-fit"
                          >
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="w-full whitespace-nowrap"
                  >
                    Table Settings
                    <HiChevronDown className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2" align="center">
                  <Text className="text-sm font-medium">Columns</Text>
                  <ul className="mb-4 mt-2 space-y-2 text-sm">
                    {[
                      { id: "product", label: "Product" },
                      { id: "category", label: "Category" },
                      { id: "brand", label: "Brand" },
                      { id: "price", label: "Price" },
                      { id: "stock", label: "Stock" },
                      { id: "status", label: "Status" },
                    ].map((item) => (
                      <li
                        key={item.id}
                        className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium"
                      >
                        <Checkbox id={item.id} name={item.id} />
                        <Label htmlFor={item.id}>{item.label}</Label>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm">Additional settings</p>
                  <ul className="mb-4 mt-2 space-y-2 text-sm">
                    <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
                      <Checkbox
                        defaultChecked
                        id="show_tags"
                        name="show_tags"
                      />
                      <Label htmlFor="show_tags">Show additional info</Label>
                    </li>
                    <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
                      <Checkbox
                        defaultChecked
                        id="show_serp"
                        name="show_serp"
                      />
                      <Label htmlFor="show_serp">Show images</Label>
                    </li>
                  </ul>
                  <p className="text-sm">Positions chart</p>
                  <ul className="mb-4 mt-2 space-y-2 text-sm">
                    <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
                      <Checkbox id="smart_zoom" name="smart_zoom" />
                      <Label htmlFor="smart_zoom">Export CSV</Label>
                    </li>
                  </ul>
                  <p className="text-sm">Row height</p>
                  <RadioGroup defaultValue="row_height">
                    <ul className="mb-4 mt-2 space-y-2 text-sm">
                      <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
                        <RadioGroupItem
                          defaultChecked
                          id="row_height_show_tags"
                          value="tags"
                        />
                        <Label htmlFor="row_height_show_tags">Normal</Label>
                      </li>
                      <li className="flex w-full items-center gap-x-2 rounded-md px-1.5 py-1 text-sm font-medium">
                        <RadioGroupItem
                          id="row_height_show_serp"
                          value="serp"
                        />
                        <Label htmlFor="row_height_show_serp">Compact</Label>
                      </li>
                    </ul>
                  </RadioGroup>
                  <Link
                    href="#"
                    className="ml-1.5 mt-4 flex items-center text-sm font-medium text-primary-600 hover:underline"
                  >
                    Apply to all
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex flex-col-reverse items-start justify-between border-b p-4 md:flex-row md:items-center md:space-x-4">
            <div className="mt-3 md:mt-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"}>
                    <HiChevronDown className="mr-1 size-4" /> Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                  <DropdownMenuItem>
                    <HiPencilAlt className="mr-2 size-4" /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HiEye className="mr-2 size-4" />
                    Preview
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-500">
                    <HiTrash className="mr-2 size-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-4 md:gap-4 lg:w-2/3">
              <div className="w-full">
                <Label htmlFor="brand" className="sr-only">
                  Brand
                </Label>
                <Select name="brand">
                  <SelectTrigger>
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "samsung", label: "Samsung" },
                      { value: "apple", label: "Apple" },
                      { value: "nokia", label: "Nokia" },
                      { value: "sony", label: "Sony" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="price" className="sr-only">
                  Price
                </Label>
                <Select name="price">
                  <SelectTrigger>
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "bellow-100", label: "$ 1-100" },
                      { value: "below-500", label: "$ 101-500" },
                      { value: "below-1000", label: "$ 501-1000" },
                      { value: "over-1000", label: "$ 1001+" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="category" className="sr-only">
                  Category
                </Label>
                <Select name="category">
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "pc", label: "PC" },
                      { value: "phone", label: "Phone" },
                      { value: "tablet", label: "Tablet" },
                      { value: "console", label: "Gaming/Console" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label htmlFor="color" className="sr-only">
                  Color
                </Label>
                <Select name="color">
                  <SelectTrigger>
                    <SelectValue placeholder="Color" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "purple", label: "Purple" },
                      { value: "primary", label: "Primary" },
                      { value: "pink", label: "Pink" },
                      { value: "green", label: "Green" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="text-sm">
              <TableHeader className="text-xs uppercase">
                <TableRow>
                  <TableHead className="p-4">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-all"
                        name="checkbox-all"
                        className="size-4 rounded"
                      />
                      <Label htmlFor="checkbox-all" className="sr-only">
                        Select all products
                      </Label>
                    </div>
                  </TableHead>
                  <TableHead className="px-4 py-3">
                    <span className="sr-only">Expand/Collapse Row</span>
                  </TableHead>
                  <TableHead className="px-4 py-3">Product</TableHead>
                  <TableHead className="px-4 py-3">
                    Category
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="px-4 py-3">
                    Brand
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="px-4 py-3">
                    Price
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="px-4 py-3">
                    Stock
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="px-4 py-3">
                    Total Sales
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                  <TableHead className="px-4 py-3">
                    Status
                    <HiSelector className="ml-1 inline-block size-4" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-0"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-0")
                      ?.classList.toggle("hidden")
                  }
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 27&#34;
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    PC
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $2999
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    200
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    245
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-0"
                  aria-labelledby="table-column-header-0"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-1"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-1")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-1"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iMac 20&quot;
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    PC
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $1499
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    1237
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    2000
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-1"
                  aria-labelledby="table-column-header-1"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-2"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-2")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-2"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPhone 14
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Phone
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $999
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    300
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    466
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-2"
                  aria-labelledby="table-column-header-2"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-3"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-3")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-3"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple iPad Air
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Tablet
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $1199
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    4576
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    90
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-3"
                  aria-labelledby="table-column-header-3"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-4"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-4")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-4"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series S
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Gaming/Console
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Microsoft
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $299
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    56
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    3087
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-4"
                  aria-labelledby="table-column-header-4"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-5"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-5")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-5"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    PlayStation 5
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Gaming/Console
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Sony
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $799
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    78
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    2999
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-5"
                  aria-labelledby="table-column-header-5"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-6"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-6")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-6"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series X
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Gaming/Console
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Microsoft
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $699
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    200
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    1870
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-6"
                  aria-labelledby="table-column-header-6"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-7"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-7")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-7"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Apple Watch SE
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Watch
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $399
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    657
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    5067
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-7"
                  aria-labelledby="table-column-header-7"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-8"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-8")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-8"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    NIKON D850
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    Photo
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Nikon
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $599
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    465
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    1870
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-8"
                  aria-labelledby="table-column-header-8"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="cursor-pointer border-b transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  id="table-column-header-9"
                  onClick={() =>
                    document
                      .querySelector("#table-column-body-9")
                      ?.classList.toggle("hidden")
                  }
                  aria-controls="table-column-body-9"
                >
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        onClick={(event) => event.stopPropagation()}
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="w-4 p-3">
                    <FaChevronDown className="size-4 shrink-0" />
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="flex items-center whitespace-nowrap px-4 py-3 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Monitor BenQ EX2710Q
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-3">
                    TV/Monitor
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    BenQ
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    $499
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    354
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    76
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3"
                  >
                    <Badge className="w-fit bg-green-500">Active</Badge>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="hidden w-full flex-1 overflow-x-auto"
                  id="table-column-body-9"
                  aria-labelledby="table-column-header-9"
                >
                  <TableCell
                    width={"100%"}
                    className="border-b p-4"
                    colSpan={9}
                  >
                    <div className="mb-4 grid grid-cols-4 gap-4">
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Front"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                          alt="iMac Side"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                      <div className="relative flex h-32 items-center justify-center rounded-lg bg-gray-50 p-2 dark:bg-transparent sm:h-36 sm:w-full">
                        <Image
                          width={100}
                          height={100}
                          src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                          alt="iMac Back"
                          className="h-full w-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <h6 className="mb-2 text-base font-medium leading-none">
                        Details
                      </h6>
                      <div className="max-w-screen-md text-wrap text-base text-gray-500 dark:text-gray-400">
                        Standard glass, 3.8GHz 8-core 10th-generation Intel Core
                        i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz
                        DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6
                        memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse
                        2, Magic Keyboard - US.
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="relative flex flex-col items-start justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Product State
                        </h6>
                        <Badge className="flex">
                          <HiStar className="-mt-0.5 mr-1 size-3.5" />
                          New
                        </Badge>
                      </div>
                      <div className="relative flex flex-col justify-between rounded-lg p-3">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Shipping
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <HiLocationMarker className="mr-1 size-3.5" />
                          Worldwide
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Colors
                        </h6>
                        <div className="flex items-center space-x-2">
                          <div className="size-6 rounded-full bg-purple-600"></div>
                          <div className="size-6 rounded-full bg-indigo-400"></div>
                          <div className="size-6 rounded-full bg-primary-600"></div>
                          <div className="size-6 rounded-full bg-pink-400"></div>
                          <div className="size-6 rounded-full bg-teal-300"></div>
                          <div className="size-6 rounded-full bg-green-300"></div>
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Brand
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          Apple
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Sold by
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Ships from
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          ModernUI
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Dimensions (cm)
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          105 x 15 x 23
                        </div>
                      </div>
                      <div className="relative rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                        <h6 className="mb-2 text-base font-medium leading-none">
                          Item weight
                        </h6>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          12kg
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center space-x-3">
                      <EditProductModal />
                      <PreviewProductModal />
                      <DeleteProductModal />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div
            className="flex flex-col items-start justify-between space-y-3 px-4 pb-4 pt-3 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <div className="flex items-center space-x-5 text-xs">
              <div>
                <div className="mb-1 text-gray-500 dark:text-gray-400">
                  Purchase price
                </div>
                <div className="font-medium dark:text-white">$ 3,567,890</div>
              </div>
              <div>
                <div className="mb-1 text-gray-500 dark:text-gray-400">
                  Total selling price
                </div>
                <div className="font-medium dark:text-white">$ 8,489,400</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium text-primary-700 hover:text-primary-800">
                Print barcodes
              </button>
              <button className="flex items-center rounded-lg py-1.5 text-center text-sm font-medium text-primary-700 hover:text-primary-800">
                Duplicate
              </button>
              <Button size="sm" className="[&_span]:text-xs">
                Export CSV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeleteProductModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>
          <HiTrash className="mr-1 size-4" /> Delete
        </Button>
      </DialogTrigger>
      <DialogContent className="justify-center rounded-lg bg-background p-4 shadow sm:p-5">
        <HiTrash className="mx-auto mb-3.5 size-11 text-gray-400 dark:text-gray-500" />
        <Text className="mb-4 text-gray-500 dark:text-gray-300">
          Are you sure you want to delete this item?
        </Text>
        <div className="flex items-center justify-center space-x-4">
          <DialogClose asChild>
            <Button>No, cancel</Button>
          </DialogClose>
          <Button variant={"destructive"} type="submit">
            Yes, I&apos;m sure
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function EditProductModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="whitespace-nowrap">
          <HiPencilAlt className="mr-1 size-4" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[40rem] rounded-lg p-4 shadow sm:p-5">
        <ScrollArea className="h-[40rem] overflow-hidden">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
            <h3 className="text-lg font-semibold">Add Product</h3>
          </div>
          <form>
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
                  defaultValue="Apple iPad 5th Gen Wi-Fi"
                />
              </div>
              <div>
                <Label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium"
                >
                  Category
                </Label>
                <Select>
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
                  defaultValue="Tesla"
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
                  defaultValue="259"
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
                    defaultValue="32"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="length"
                    className="mb-2 block text-sm font-medium"
                  >
                    Length (cm)
                  </Label>
                  <Input
                    id="length"
                    placeholder="105"
                    required
                    type="number"
                    defaultValue="126"
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
                    defaultValue="121"
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
                    defaultValue="953"
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
                  defaultValue="Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US"
                />
              </div>
            </div>
            <div className="mb-4 space-y-4 sm:flex sm:space-y-0">
              <div className="mr-4 flex items-center">
                <Checkbox id="inline-checkbox" />
                <Label
                  htmlFor="inline-checkbox"
                  className="ml-2 text-sm font-medium"
                >
                  In-store only
                </Label>
              </div>
              <div className="mr-4 flex items-center">
                <Checkbox id="inline-2-checkbox" required />
                <Label
                  htmlFor="inline-2-checkbox"
                  className="ml-2 text-sm font-medium"
                >
                  Online selling only
                </Label>
              </div>
              <div className="mr-4 flex items-center">
                <Checkbox defaultChecked id="inline-checked-checkbox" />
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
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </Text>
                    <Text className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </Text>
                  </div>
                  <Input id="dropzone-file" type="file" className="hidden" />
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

function PreviewProductModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Preview</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5 md:min-w-[40rem]">
        <div className="mb-4 flex justify-between rounded-t sm:mb-5">
          <div className="text-lg md:text-xl">
            <h3 className="font-semibold ">Apple iMac 27”</h3>
            <Text className="font-bold">$2999</Text>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-4 sm:mb-5 sm:grid-cols-4">
          <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <Image
              className="w-auto md:h-36"
              width={200}
              height={200}
              alt="iMac Side"
              src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
            />
          </div>
          <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <Image
              className="w-auto md:h-36"
              width={200}
              height={200}
              alt="iMac Front"
              src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
            />
          </div>
          <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <Image
              className="w-auto md:h-36"
              width={200}
              height={200}
              alt="iMac Back"
              src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
            />
          </div>
          <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
            <Image
              className="w-auto md:h-36"
              width={200}
              height={200}
              alt="iMac Back"
              src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
            />
          </div>
        </div>
        <dl className="sm:mb-5">
          <dt className="mb-2 font-semibold leading-none">Details</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
            Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
          <dt className="mb-2 font-semibold leading-none">Colors</dt>
          <dd className="mb-4 flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <div className="size-6 rounded-full bg-purple-600"></div>
            <div className="size-6 rounded-full bg-indigo-400"></div>
            <div className="size-6 rounded-full bg-primary-600"></div>
            <div className="size-6 rounded-full bg-pink-400"></div>
            <div className="size-6 rounded-full bg-teal-300"></div>
            <div className="size-6 rounded-full bg-green-300"></div>
          </dd>
        </dl>
        <dl className="mb-4 grid grid-cols-2 gap-4 sm:mb-5 sm:grid-cols-3">
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
            <dt className="mb-2 font-semibold leading-none">Sold by</dt>
            <dd className="text-gray-500 dark:text-gray-400">ModernUI</dd>
          </div>
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
            <dt className="mb-2 font-semibold leading-none">Ships from</dt>
            <dd className="text-gray-500 dark:text-gray-400">ModernUI</dd>
          </div>
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
            <dt className="mb-2 font-semibold leading-none">Product State</dt>
            <dd className="text-gray-500 dark:text-gray-400">
              <Badge className="inline-flex [&>span]:flex [&>span]:items-center">
                <HiStar className="mr-1 size-3" />
                New
              </Badge>
            </dd>
          </div>
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
            <dt className="mb-2 font-semibold leading-none">Shipping</dt>
            <dd className="flex items-center text-gray-500 dark:text-gray-400">
              <HiLocationMarker className="mr-1.5 size-4" />
              Worldwide
            </dd>
          </div>
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
            <dt className="mb-2 font-semibold leading-none">Dimensions (cm)</dt>
            <dd className="text-gray-500 dark:text-gray-400">105 x 15 x 23</dd>
          </div>
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
            <dt className="mb-2 font-semibold leading-none">Item weight</dt>
            <dd className="text-gray-500 dark:text-gray-400">12kg</dd>
          </div>
        </dl>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button size="lg" className="[&>span]:text-sm">
              <HiPencilAlt className="-ml-1 mr-1 size-5" />
              Edit
            </Button>
            <Button size="lg" variant={"outline"}>
              Preview
            </Button>
          </div>
          <Button
            variant={"destructive"}
            size="lg"
            className="inline-flex [&>span]:text-sm"
          >
            <HiTrash className="-ml-1 mr-1.5 size-5" />
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
