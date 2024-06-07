import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  MagnifyingGlassIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import {
  HiCalendar,
  HiChevronDown,
  HiCloudUpload,
  HiFilter,
  HiLocationMarker,
  HiPencilAlt,
  HiSearch,
  HiShoppingCart,
  HiStar,
  HiTrash,
  HiX,
} from "react-icons/hi";
import { z } from "zod";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
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
import { Drawer, DrawerContent } from "~/components/ui/drawer";
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
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
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

export function CRUDLayoutForProductManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isNorthAmerica, setNorthAmerica] = useState(true);
  const [isSouthAmerica, setSouthAmerica] = useState(false);
  const [isAsia, setAsia] = useState(false);
  const [isAustralia, setAustralia] = useState(true);
  const [isEurope, setEurope] = useState(false);
  const [isShowCreateModal, setShowCreateModal] = useState(false);
  const [isShowReadModal, setShowReadModal] = useState(false);
  const [isShowUpdateModal, setShowUpdateModal] = useState(false);
  const [isShowDeleteModal, setShowDeleteModal] = useState(false);

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

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <section className="bg-background p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <Label htmlFor="simple-search" className="sr-only">
                Search
              </Label>
              <div className="relative flex w-full items-center">
                <HiSearch className="absolute left-3" />
                <Input
                  id="simple-search"
                  name="simple-search"
                  placeholder="Search"
                  required
                  type="search"
                  className="w-full pl-8 [&_input]:py-2"
                />
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Create product</Button>
                </DialogTrigger>
                <DialogContent className="min-w-[40rem] rounded-lg p-4 shadow sm:p-5 md:min-w-[50rem]">
                  <ScrollArea className="h-[40rem] overflow-hidden">
                    <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
                      <h3 className="text-lg font-semibold">Add Product</h3>
                    </div>
                    <Form
                      {...form}
                      key={form.formState.isSubmitting ? "submitting" : "idle"}
                    >
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
              <div className="flex w-full items-center space-x-3 md:w-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                      <HiFilter className="mr-2 size-4" />
                      <span>Filter options</span>
                      <HiChevronDown className="ml-1 size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80">
                    <div className="px-3">
                      <div className="flex items-center justify-between pt-2">
                        <Text className="text-sm font-medium">Filters</Text>
                        <div className="flex items-center space-x-3">
                          <Link
                            href="#"
                            className="flex items-center text-sm font-medium text-primary-600 hover:underline"
                          >
                            Save view
                          </Link>
                          <Link
                            href="#"
                            className="flex items-center text-sm font-medium text-primary-600 hover:underline"
                          >
                            Clear all
                          </Link>
                        </div>
                      </div>
                      <div className="pb-2 pt-3">
                        <Label
                          htmlFor="Checkbox-group-search"
                          className="sr-only"
                        >
                          Search
                        </Label>
                        <div className="relative flex items-center">
                          <MagnifyingGlassIcon className="absolute left-3 size-4 text-gray-500" />
                          <Input
                            id="Checkbox-group-search"
                            name="Checkbox-group-search"
                            placeholder="Search keywords..."
                            className="py-2 pl-8"
                          />
                        </div>
                      </div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="category">
                          <AccordionTrigger>Category</AccordionTrigger>
                          <AccordionContent className="dark:bg-transparent">
                            <div className="py-2 font-light">
                              <ul className="space-y-2">
                                {[
                                  { id: "apple", label: "Apple (56)" },
                                  { id: "microsoft", label: "Microsoft (45)" },
                                  { id: "logitech", label: "Logitech (97)" },
                                  { id: "sony", label: "Sony (234)" },
                                  { id: "asus", label: "Asus (97)" },
                                  { id: "dell", label: "Dell (56)" },
                                  { id: "msi", label: "MSI (97)" },
                                  { id: "canon", label: "Canon (49)" },
                                  { id: "benq", label: "BenQ (23)" },
                                  { id: "razer", label: "Razer (49)" },
                                ].map((item) => (
                                  <li
                                    key={item.id}
                                    className="flex items-center"
                                  >
                                    <Checkbox id={item.id} name={item.id} />
                                    <Label
                                      htmlFor={item.id}
                                      className="ml-2 text-sm font-medium"
                                    >
                                      {item.label}
                                    </Label>
                                  </li>
                                ))}
                                <Link
                                  href="#"
                                  className="flex items-center text-sm font-medium text-primary-600 hover:underline"
                                >
                                  View all
                                </Link>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="price">
                          <AccordionTrigger>Price</AccordionTrigger>
                          <AccordionContent className="p-1 py-3 dark:bg-transparent">
                            <div className="grid w-full grid-cols-2 items-center gap-x-3 py-2 font-light">
                              <Select name="price-from">
                                <SelectTrigger className="py-2 sm:text-xs">
                                  <SelectValue placeholder="From" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="500">$500</SelectItem>
                                  <SelectItem value="2500">$2500</SelectItem>
                                  <SelectItem value="5000">$5000</SelectItem>
                                </SelectContent>
                              </Select>

                              <Select name="price-to">
                                <SelectTrigger className="py-2 sm:text-xs">
                                  <SelectValue placeholder="To" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="500">$500</SelectItem>
                                  <SelectItem value="2500">$2500</SelectItem>
                                  <SelectItem value="5000">$5000</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="worldwide">
                          <AccordionTrigger>
                            Worldwide Shipping
                          </AccordionTrigger>
                          <AccordionContent className="p-1 py-3 dark:bg-transparent">
                            <div className="space-y-2 py-2">
                              <div className="flex gap-2">
                                <Switch
                                  checked={isNorthAmerica}
                                  onChange={() =>
                                    setNorthAmerica(!isNorthAmerica)
                                  }
                                />
                                <Text>North America</Text>
                              </div>

                              <div className="flex gap-2">
                                <Switch
                                  checked={isSouthAmerica}
                                  onChange={() =>
                                    setSouthAmerica(!isSouthAmerica)
                                  }
                                />
                                <Text>South America</Text>
                              </div>
                              <div className="flex gap-2">
                                <Switch
                                  checked={isAsia}
                                  onChange={() => setAsia(!isAsia)}
                                />
                                <Text>Asia</Text>
                              </div>
                              <div className="flex gap-2">
                                <Switch
                                  checked={isAustralia}
                                  onChange={() => setAustralia(!isAustralia)}
                                />
                                <Text>Australia</Text>
                              </div>
                              <div className="flex gap-2">
                                <Switch
                                  checked={isEurope}
                                  onChange={() => setEurope(!isEurope)}
                                />
                                <Text>Europe</Text>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="rating">
                          <AccordionTrigger>Rating</AccordionTrigger>
                          <AccordionContent className="space-y-2 px-1 py-3 dark:bg-transparent">
                            <RadioGroup defaultValue="stars">
                              {[...Array(5)].map((_, index) => {
                                const starsCount = 5 - index;
                                const starsFilled =
                                  Array(starsCount).fill(null);
                                const starsUnfilled = Array(
                                  5 - starsCount,
                                ).fill(null);

                                return (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2"
                                  >
                                    <RadioGroupItem
                                      id={`${starsCount}-stars`}
                                      value={`${index}`}
                                    />
                                    {starsFilled.map((_, i) => (
                                      <StarFilledIcon
                                        key={i}
                                        className="size-5 text-yellow-300"
                                      />
                                    ))}
                                    {starsUnfilled.map((_, i) => (
                                      <StarIcon
                                        key={i}
                                        className="size-5 text-yellow-300"
                                      />
                                    ))}
                                  </div>
                                );
                              })}
                            </RadioGroup>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                      Actions
                      <HiChevronDown className="ml-1 size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete All</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="[&_*]:whitespace-nowrap">
              <TableHeader>
                <TableRow>
                  <TableHead className="p-4 group-first/head:first:rounded-tl-none">
                    <div className="flex items-center">
                      <Checkbox id="checkbox-all" name="checkbox-all" />
                      <Label htmlFor="checkbox-all" className="sr-only">
                        Select all
                      </Label>
                    </div>
                  </TableHead>
                  <TableHead className="px-4 py-3">Product</TableHead>
                  <TableHead className="px-4 py-3">Category</TableHead>
                  <TableHead className="px-4 py-3">Stock</TableHead>
                  <TableHead className="px-4 py-3">Sales/Day</TableHead>
                  <TableHead className="px-4 py-3">Sales/Month</TableHead>
                  <TableHead className="px-4 py-3">Rating</TableHead>
                  <TableHead className="px-4 py-3">Sales</TableHead>
                  <TableHead className="px-4 py-3">Revenue</TableHead>
                  <TableHead className="p-4 group-first/head:last:rounded-tr-none">
                    Last Update
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-64 items-center whitespace-nowrap px-4 py-2 font-medium"
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
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Desktop PC</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-red-700"></div>
                      95
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.47
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.47
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      1.6M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $3.2M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-2 font-medium"
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
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Desktop PC</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-red-700"></div>
                      108
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.15
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.32
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      6M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $785K
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-2 font-medium"
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
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Phone</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-green-400"></div>
                      24
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.00
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.99
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      1.2M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $3.2M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-2 font-medium"
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
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Tablet</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-red-700"></div>
                      287
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.47
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.00
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      298K
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $425K
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://pngimg.com/uploads/xbox/xbox_PNG101375.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series S
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Gaming/Console</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-yellow-300"></div>
                      450
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.61
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.30
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      99
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $345K
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/900px-PlayStation_5_and_DualSense_with_transparent_background.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    PlayStation 5
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Gaming/Console</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-green-400"></div>
                      2435
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    1.41
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.11
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      2.1M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $4.2M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="https://pngimg.com/uploads/xbox/xbox_PNG101375.png"
                      alt=""
                      className="mr-3 h-8 w-auto"
                    />
                    Xbox Series X
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Gaming/Console</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-orange-400"></div>
                      235
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    7.09
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    3.32
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      989K
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $2.27M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-2 font-medium"
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
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Watch</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-yellow-300"></div>
                      433
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    4.96
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.74
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      102
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $45K
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-2 font-medium"
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
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">Photo/Video</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-orange-400"></div>
                      351
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.20
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.74
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      1.2M
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $1.52M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                        className="size-4 rounded"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this product
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="flex min-w-72 items-center whitespace-nowrap px-4 py-2 font-medium"
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
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">TV/Monitor</Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 inline-block size-4 rounded-full bg-green-400"></div>
                      1242
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    4.12
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    0.30
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarFilledIcon
                          key={index}
                          className="size-5 text-yellow-300"
                        />
                      ))}

                      <Text className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        5.0
                      </Text>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiShoppingCart className="mr-2 size-5 text-gray-400" />
                      211K
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    $1.2M
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => setShowUpdateModal(true)}
                      >
                        <HiPencilAlt className="-ml-1 mr-1 size-5" />
                        Edit
                      </Button>
                      <Button
                        onClick={() => setShowReadModal(true)}
                        size="sm"
                        variant={"outline"}
                      >
                        Preview
                      </Button>
                      <Button
                        onClick={() => setShowDeleteModal(true)}
                        variant={"destructive"}
                        size="sm"
                      >
                        <HiTrash className="-ml-1 mr-1.5 size-5" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing&nbsp;
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>
              &nbsp;of&nbsp;
              <span className="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            <div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious title="" onClick={() => onPageChange} />
                  </PaginationItem>
                  {Array.from({ length: 3 }, (_, index) => index + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          isActive={currentPage === page}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                  )}
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext onClick={() => onPageChange} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </nav>
        </div>
      </div>

      <Drawer
        direction="left"
        open={isShowUpdateModal}
        onOpenChange={setShowUpdateModal}
      >
        <DrawerContent className="left-0 h-screen w-1/2 rounded-lg bg-background p-4 shadow sm:p-5">
          <ScrollArea className="overflow-hidden">
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
                    <Input id="brand" placeholder="Product brand" required />
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
        </DrawerContent>
      </Drawer>

      <Drawer
        direction="left"
        open={isShowReadModal}
        onOpenChange={setShowReadModal}
      >
        <DrawerContent className="left-0 h-screen w-1/2 rounded-lg bg-background p-4 shadow sm:p-5">
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
              <dt className="mb-2 font-semibold leading-none">
                Dimensions (cm)
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                105 x 15 x 23
              </dd>
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
        </DrawerContent>
      </Drawer>

      <Dialog open={isShowDeleteModal} onOpenChange={setShowDeleteModal}>
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

      <Drawer
        direction="left"
        open={isShowCreateModal}
        onOpenChange={setShowCreateModal}
      >
        <DrawerContent className="left-0 h-screen w-1/2 rounded-lg bg-background p-4 shadow sm:p-5">
          <ScrollArea className="overflow-hidden">
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
                    <Input id="brand" placeholder="Product brand" required />
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
        </DrawerContent>
      </Drawer>
    </section>
  );
}
