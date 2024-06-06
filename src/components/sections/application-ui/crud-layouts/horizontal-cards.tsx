import { useState } from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import {
  HiCalendar,
  HiCloudUpload,
  HiDotsHorizontal,
  HiEye,
  HiLocationMarker,
  HiMenu,
  HiPencilAlt,
  HiPlus,
  HiSearch,
  HiStar,
  HiTrash,
  HiViewGrid,
  HiX,
} from "react-icons/hi";
import { z } from "zod";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogClose, DialogContent } from "~/components/ui/dialog";
import { Drawer, DrawerContent } from "~/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
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
import { Slider } from "~/components/ui/slider";
import { Textarea } from "~/components/ui/textarea";

enum CheckboxId {
  GAMING = "gaming",
  ELECTRONICS = "electronics",
  PHONE = "phone",
  TV_MONITOR = "tv-monitor",
  LAPTOP = "laptop",
  WATCH = "watch",
}

const formSchema = z.object({
  "min-price": z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0." }),
  "max-price": z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0." }),
  "min-price-input": z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0." }),
  "max-price-input": z
    .number()
    .min(0, { message: "Price must be greater than or equal to 0." }),
  "min-sales": z
    .number()
    .min(0, { message: "Sales must be greater than or equal to 0." }),
  "max-sales": z
    .number()
    .min(0, { message: "Sales must be greater than or equal to 0." }),
  "min-sales-input": z
    .number()
    .min(0, { message: "Sales must be greater than or equal to 0." }),
  "max-sales-input": z
    .number()
    .min(0, { message: "Sales must be greater than or equal to 0." }),
  gaming: z.boolean(),
  electronics: z.boolean(),
  phone: z.boolean(),
  "tv-monitor": z.boolean(),
  laptop: z.boolean(),
  watch: z.boolean(),
  state: z.enum(["all", "new", "used"]),
});

const products = [
  { value: "EL", label: "Electronics" },
  { value: "AL", label: "TV/Monitors" },
  { value: "PC", label: "PC" },
  { value: "GA", label: "Gaming/Console" },
  { value: "PH", label: "Phones" },
];

export function CRUDLayoutWithHorizontalCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowCreateModal, setShowCreateModal] = useState(false);
  const [isShowReadModal, setShowReadModal] = useState(false);
  const [isShowUpdateModal, setShowUpdateModal] = useState(false);
  const [isShowDeleteModal, setShowDeleteModal] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      "min-price": 200,
      "max-price": 2500,
      "min-price-input": 0,
      "max-price-input": 0,
      "min-sales": 350,
      "max-sales": 2000,
      "min-sales-input": 0,
      "max-sales-input": 0,
      gaming: false,
      electronics: false,
      phone: false,
      "tv-monitor": false,
      laptop: false,
      watch: false,
      state: "all",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted", values);
  };

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <section className="bg-background py-3 antialiased sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative shadow-md sm:rounded-lg">
          <div className="flex flex-col justify-between space-y-3 p-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <Label htmlFor="simple-search" className="sr-only">
                  Search
                </Label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiSearch className="size-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    id="simple-search"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex shrink-0 flex-row items-center justify-between md:justify-end md:space-x-3">
              <div className="flex items-center space-x-3">
                <Button
                  onClick={() => setShowCreateModal(true)}
                  className="whitespace-nowrap"
                >
                  <HiPlus className="mr-2 hidden size-3.5 shrink-0 md:inline" />
                  Add product
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button>
                      Filter <FaChevronDown className="ml-3 size-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4 p-3"
                      >
                        <Text className="inline-flex items-center">Filter</Text>
                        <div className="mt-4">
                          <span className="mb-2 block text-sm font-medium">
                            Price Range
                          </span>
                          <div className="grid grid-cols-2 gap-3">
                            <FormField
                              control={form.control}
                              name="min-price"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Slider
                                      {...field}
                                      id="min-price"
                                      max={7000}
                                      min={0}
                                      value={[field.value]}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="max-price"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Slider
                                      {...field}
                                      id="max-price"
                                      max={7000}
                                      min={0}
                                      value={[field.value]}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="mt-4 flex items-center justify-between space-x-2 md:col-span-2">
                            <div className="w-full">
                              <Label
                                htmlFor="min-price-input"
                                className="mb-2 block text-sm font-medium"
                              >
                                From
                              </Label>
                              <FormField
                                control={form.control}
                                name="min-price-input"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        id="min-price-input"
                                        type="number"
                                        className="py-2 sm:text-xs"
                                        onChange={(e) =>
                                          field.onChange(e.target.valueAsNumber)
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="w-full">
                              <Label
                                htmlFor="max-price-input"
                                className="mb-2 block text-sm font-medium"
                              >
                                To
                              </Label>
                              <FormField
                                control={form.control}
                                name="max-price-input"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        id="max-price-input"
                                        type="number"
                                        className="py-2 sm:text-xs"
                                        onChange={(e) =>
                                          field.onChange(e.target.valueAsNumber)
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <span className="mb-2 block text-sm font-medium">
                            Sales
                          </span>
                          <div className="grid grid-cols-2 gap-3">
                            <FormField
                              control={form.control}
                              name="min-sales"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Slider
                                      {...field}
                                      id="min-sales"
                                      max={7000}
                                      min={0}
                                      step={1}
                                      value={[field.value]}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="max-sales"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Slider
                                      {...field}
                                      id="max-sales"
                                      max={7000}
                                      min={0}
                                      step={1}
                                      value={[field.value]}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="mt-4 flex items-center justify-between space-x-2 md:col-span-2">
                            <div className="w-full">
                              <Label
                                htmlFor="min-sales-input"
                                className="mb-2 block text-sm font-medium"
                              >
                                From
                              </Label>
                              <FormField
                                control={form.control}
                                name="min-sales-input"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        id="min-sales-input"
                                        type="number"
                                        className="py-2 sm:text-xs"
                                        onChange={(e) =>
                                          field.onChange(e.target.valueAsNumber)
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <div className="w-full">
                              <Label
                                htmlFor="max-sales-input"
                                className="mb-2 block text-sm font-medium"
                              >
                                To
                              </Label>
                              <FormField
                                control={form.control}
                                name="max-sales-input"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormControl>
                                      <Input
                                        {...field}
                                        id="max-sales-input"
                                        type="number"
                                        className="py-2 sm:text-xs"
                                        onChange={(e) =>
                                          field.onChange(e.target.valueAsNumber)
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <span className="mb-2 block text-sm font-medium">
                            Category
                          </span>
                          <ul className="grid w-full grid-cols-2 gap-3">
                            {Object.values(CheckboxId).map((id) => (
                              <li key={id} className="flex items-center">
                                <FormField
                                  control={form.control}
                                  name={id} // Ensure name matches enum value
                                  render={() => (
                                    <Label
                                      htmlFor={id}
                                      className={`${form.watch(id) ? "bg-primary-500 text-white" : "bg-gray-100 text-gray-500 dark:bg-gray-600 dark:text-gray-100"} inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-300 p-2 text-center text-sm font-medium peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white hover:bg-primary-500 hover:text-white dark:border-gray-500 dark:peer-checked:bg-primary-600 dark:hover:border-primary-600 dark:hover:bg-primary-600 dark:hover:text-white`}
                                      onClick={() => {
                                        form.setValue(id, !form.watch(id));
                                      }}
                                    >
                                      {id}
                                    </Label>
                                  )}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="mb-2 block text-sm font-medium">
                            State
                          </span>
                          <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                              <RadioGroup
                                value={field.value}
                                onChange={field.onChange}
                              >
                                <ul className="flex w-full flex-col items-center rounded-lg border border-gray-200 text-sm font-medium">
                                  <li className="w-full border-b border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <RadioGroupItem
                                        id="state-all"
                                        value="all"
                                      />
                                      <Label
                                        htmlFor="state-all"
                                        className="ml-2 w-full py-3 text-sm font-medium"
                                      >
                                        All
                                      </Label>
                                    </div>
                                  </li>
                                  <li className="w-full border-b border-gray-200 dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <RadioGroupItem
                                        id="state-new"
                                        value="new"
                                      />
                                      <Label
                                        htmlFor="state-new"
                                        className="ml-2 w-full py-3 text-sm font-medium"
                                      >
                                        New
                                      </Label>
                                    </div>
                                  </li>
                                  <li className="w-full">
                                    <div className="flex items-center pl-3">
                                      <RadioGroupItem
                                        id="state-used"
                                        value="used"
                                      />
                                      <Label
                                        htmlFor="state-used"
                                        className="ml-2 w-full py-3 text-sm font-medium"
                                      >
                                        Refurbished
                                      </Label>
                                    </div>
                                  </li>
                                </ul>
                              </RadioGroup>
                            )}
                          />
                        </div>
                        <div className="mt-4 flex space-x-4">
                          <Button type="submit">Show 32 Results</Button>
                          <Button type="reset">Reset</Button>
                        </div>
                      </form>
                    </Form>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center gap-1">
                <Button variant={"ghost"} className="px-1">
                  <HiMenu className="size-5 text-gray-500 dark:text-gray-400" />
                </Button>
                <Button variant={"ghost"} className="px-1">
                  <HiViewGrid className="size-5 text-gray-500 dark:text-gray-400" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-4 space-y-4 overflow-x-auto">
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <Image
                src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                alt=""
                className="h-20 w-auto"
                width={100}
                height={100}
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      Apple iMac 27&#34;
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <Text className="text-sm font-semibold">
                        PC/Desktop PC
                      </Text>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <Text className="text-sm font-semibold">$2999</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <Text className="text-sm font-semibold">300</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <Text className="text-sm font-semibold">466</Text>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant={"ghost"}>
                      <span className="sr-only">Manage entry</span>
                      <HiDotsHorizontal className="size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowUpdateModal(true)}>
                      <HiPencilAlt className="mr-2 size-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowReadModal(true)}>
                      <HiEye className="mr-2 size-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setShowDeleteModal(true)}>
                      <HiTrash className="mr-2 size-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <Image
                src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                alt=""
                className="h-20 w-auto"
                width={100}
                height={100}
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      Xbox Series S
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <Text className="text-sm font-semibold">
                        Gaming/Console
                      </Text>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <Text className="text-sm font-semibold">$299</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <Text className="text-sm font-semibold">56</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <Text className="text-sm font-semibold">3040</Text>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant={"ghost"}>
                      <span className="sr-only">Manage entry</span>
                      <HiDotsHorizontal className="size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowUpdateModal(true)}>
                      <HiPencilAlt className="mr-2 size-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowReadModal(true)}>
                      <HiEye className="mr-2 size-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setShowDeleteModal(true)}>
                      <HiTrash className="mr-2 size-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <Image
                src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                alt=""
                className="h-20 w-auto"
                width={100}
                height={100}
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      PlayStation 5
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <Text className="text-sm font-semibold">
                        Gaming/Console
                      </Text>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <Text className="text-sm font-semibold">$799</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <Text className="text-sm font-semibold">78</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <Text className="text-sm font-semibold">2999</Text>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant={"ghost"}>
                      <span className="sr-only">Manage entry</span>
                      <HiDotsHorizontal className="size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowUpdateModal(true)}>
                      <HiPencilAlt className="mr-2 size-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowReadModal(true)}>
                      <HiEye className="mr-2 size-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setShowDeleteModal(true)}>
                      <HiTrash className="mr-2 size-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <Image
                src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                alt=""
                className="h-20 w-auto"
                width={100}
                height={100}
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      Monitor BenQ EX2710Q
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <Text className="text-sm font-semibold">TV/Monitor</Text>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <Text className="text-sm font-semibold">$499</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <Text className="text-sm font-semibold">354</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <Text className="text-sm font-semibold">76</Text>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant={"ghost"}>
                      <span className="sr-only">Manage entry</span>
                      <HiDotsHorizontal className="size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowUpdateModal(true)}>
                      <HiPencilAlt className="mr-2 size-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowReadModal(true)}>
                      <HiEye className="mr-2 size-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setShowDeleteModal(true)}>
                      <HiTrash className="mr-2 size-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 md:flex-row md:items-center md:space-x-6">
              <Image
                src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                alt=""
                className="h-20 w-auto"
                width={100}
                height={100}
              />
              <div className="flex flex-col md:justify-between">
                <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-6">
                  <div className="col-span-3 flex h-full flex-col justify-between">
                    <h3 className="mb-2 text-lg font-semibold text-gray-700 dark:text-white md:mb-3">
                      Apple iPhone 14
                    </h3>
                    <div>
                      <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Category
                      </h6>
                      <Text className="text-sm font-semibold">Phone</Text>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Price
                    </h6>
                    <Text className="text-sm font-semibold">$999</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Stock
                    </h6>
                    <Text className="text-sm font-semibold">1237</Text>
                  </div>
                  <div className="col-span-1">
                    <h6 className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Total Sales
                    </h6>
                    <Text className="text-sm font-semibold">2000</Text>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 top-3 dark:text-gray-400">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button variant={"ghost"}>
                      <span className="sr-only">Manage entry</span>
                      <HiDotsHorizontal className="size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowUpdateModal(true)}>
                      <HiPencilAlt className="mr-2 size-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setShowReadModal(true)}>
                      <HiEye className="mr-2 size-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setShowDeleteModal(true)}>
                      <HiTrash className="mr-2 size-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex items-center justify-center py-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious title="" onClick={() => onPageChange} />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext onClick={() => onPageChange} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
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
                    <Input id="name" placeholder="Type product name" required />
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
                    <Input id="name" placeholder="Type product name" required />
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
