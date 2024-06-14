import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { BiSolidDollarCircle } from "react-icons/bi";
import {
  HiArrowsExpand,
  HiCalendar,
  HiCode,
  HiDownload,
  HiEmojiHappy,
  HiLocationMarker,
  HiOutlineCloudUpload,
  HiPaperClip,
  HiPhotograph,
} from "react-icons/hi";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { z } from "zod";

import * as MuiLayout from "~/components/layouts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import iMacBackImage from "~/lib/assets/images/imac-back-image.png";
import iMacFrontImage from "~/lib/assets/images/imac-front-image.png";
import iMacSideImage from "~/lib/assets/images/imac-side-image.png";

const images = [iMacSideImage, iMacFrontImage, iMacBackImage, iMacSideImage];

const formSchema = z.object({
  name: z.string(),
  brand: z.string(),
  price: z.number(),
  category: z.string().optional(),
  returnPolicy: z.string().optional(),
  shipsFrom: z.string(),
  soldBy: z.string(),
  importFees: z.number(),
  productState: z.string().optional(),
  description: z.string(),
  productOptions: z.boolean().optional(),
  tags: z.string(),
  itemWeight: z.number(),
  length: z.number(),
  breadth: z.number(),
  width: z.number(),
  files: z.array(z.string()).optional(),
  discountType: z.string().optional(),
  minimumAmount: z.number().optional(),
  discountWorth: z.number().optional(),
  offerStart: z.string().optional(),
  offerEnd: z.string().optional(),
});

export function UpdateFormAccordion() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'Apple iMac 27"',
      brand: "Apple",
      price: 2999,
      category: "EL",
      returnPolicy: "30",
      shipsFrom: "Bergside Inc.",
      soldBy: "Company LLC",
      productState: "NE",
      importFees: 10,
      itemWeight: 12,
      length: 105,
      breadth: 15,
      width: 23,
      description:
        "Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US",
      productOptions: true,
      tags: "react, tailwind",
      files: [],
      discountType: "PO",
      minimumAmount: 400,
      offerStart: "08/11/2023",
      offerEnd: "03/11/2024",
      discountWorth: 15,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto px-4 py-8 lg:py-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} action="#">
            <Accordion type="single" collapsible>
              <AccordionItem value="general">
                <AccordionTrigger className="flex w-full items-center justify-between bg-secondary/30 p-4 text-left font-medium leading-none hover:bg-muted-foreground/30 focus:ring-4 focus:ring-muted-foreground/10  dark:border-muted dark:bg-muted-foreground/35 dark:hover:bg-muted-foreground/80 dark:focus:ring-muted-foreground/20 sm:px-5">
                  General Information
                </AccordionTrigger>
                <AccordionContent>
                  <div className="border-muted-foreground/10  px-1 py-4 dark:border-muted sm:py-5">
                    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <Label className="mb-2 block text-sm font-medium">
                            Product Name
                          </Label>
                          <Input
                            type="text"
                            id="name"
                            className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="Type product name"
                            required
                            {...form.register("name")}
                          />
                        </div>
                        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Brand
                            </Label>
                            <Input
                              type="text"
                              id="brand"
                              className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="Product brand"
                              required
                              {...form.register("brand")}
                            />
                          </div>
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Price
                            </Label>
                            <Input
                              type="number"
                              id="price"
                              className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="$2999"
                              required
                              {...form.register("price")}
                            />
                          </div>
                        </div>
                        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Category
                            </Label>
                            <Select {...form.register("category")}>
                              <SelectTrigger className="w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                <SelectValue placeholder="Select Category" />
                              </SelectTrigger>
                              <SelectContent>
                                {[
                                  { value: " ", label: "Select Category" },
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
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Return Policy
                            </Label>
                            <Select {...form.register("returnPolicy")}>
                              <SelectTrigger className="w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                <SelectValue placeholder="30 days" />
                              </SelectTrigger>
                              <SelectContent>
                                {[
                                  { value: "30", label: "30 days" },
                                  { value: "10", label: "10 days" },
                                  { value: "NO", label: "None" },
                                ].map((item, index) => (
                                  <SelectItem key={index} value={item.value}>
                                    {item.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Ships From
                            </Label>
                            <Input
                              type="text"
                              id="shipping"
                              className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="Bergside Inc."
                              required
                              {...form.register("shipsFrom")}
                            />
                          </div>
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Sold By
                            </Label>
                            <Input
                              type="text"
                              id="sold-by"
                              className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="Company LLC"
                              required
                              {...form.register("soldBy")}
                            />
                          </div>
                        </div>
                        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Import Fees
                            </Label>
                            <Input
                              type="number"
                              id="import-fees"
                              className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="0"
                              required
                              {...form.register("importFees")}
                            />
                          </div>
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Product State
                            </Label>
                            <Select {...form.register("productState")}>
                              <SelectTrigger className="w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                <SelectValue placeholder="New" />
                              </SelectTrigger>
                              <SelectContent>
                                {[
                                  { value: "NE", label: "New" },
                                  { value: "RE", label: "Refurbished" },
                                ].map((item, index) => (
                                  <SelectItem key={index} value={item.value}>
                                    {item.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label
                            htmlFor="description"
                            className="mb-2 block text-sm font-medium"
                          >
                            Description
                          </Label>

                          <div className="mb-4 w-full rounded-lg border border-muted-foreground/10 bg-secondary/30 dark:bg-muted-foreground/10">
                            <div className="flex items-center justify-between border-b px-3 py-2 ">
                              <div className="flex flex-wrap items-center divide-muted-foreground/10 dark:divide-muted sm:divide-x">
                                <div className="flex items-center space-x-1 sm:pr-4">
                                  {[
                                    {
                                      icon: <HiPaperClip className="size-5" />,
                                      label: "Attach File",
                                    },
                                    {
                                      icon: (
                                        <HiLocationMarker className="size-5" />
                                      ),
                                      label: "Embed File",
                                    },
                                    {
                                      icon: <HiPhotograph className="size-5" />,
                                      label: "Upload Image",
                                    },
                                    {
                                      icon: <HiCode className="size-5" />,
                                      label: "Format Code",
                                    },
                                    {
                                      icon: <HiEmojiHappy className="size-5" />,
                                      label: "Add Emoji",
                                    },
                                  ].map((item, index) => (
                                    <Link key={index} href="#">
                                      <Button
                                        variant={"ghost"}
                                        className="cursor-pointer rounded p-2
                                    text-muted-foreground
                                    hover:bg-muted-foreground/10
                                    dark:hover:text-primary-foreground"
                                      >
                                        {item.icon}
                                        <span className="sr-only">
                                          {item.label}
                                        </span>
                                      </Button>
                                    </Link>
                                  ))}
                                </div>
                                <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                                  {[
                                    {
                                      icon: <HiCalendar className="size-5" />,
                                      label: "Timeline",
                                    },
                                    {
                                      icon: <HiDownload className="size-5" />,
                                      label: "Download",
                                    },
                                  ].map((item, index) => (
                                    <Link key={index} href="#">
                                      <Button
                                        variant={"ghost"}
                                        className="cursor-pointer rounded p-2
                                    text-muted-foreground
                                    hover:bg-muted-foreground/10
                                    dark:hover:text-primary-foreground"
                                      >
                                        {item.icon}
                                        <span className="sr-only">
                                          {item.label}
                                        </span>
                                      </Button>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <Button
                                variant={"ghost"}
                                data-tooltip-target="tooltip-fullscreen"
                                className="cursor-pointer rounded p-2 text-muted-foreground hover:bg-muted-foreground/10 dark:hover:text-white sm:ml-auto"
                              >
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <HiArrowsExpand className="size-5" />
                                    </TooltipTrigger>
                                    <TooltipContent className="w-auto rounded-lg px-3 py-2 text-sm font-normal text-primary-foreground shadow-sm dark:bg-muted">
                                      Show Full Screen
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>

                                <span className="sr-only">Full screen</span>
                              </Button>
                            </div>
                            <Textarea
                              rows={8}
                              id="description"
                              className="block w-full rounded-lg rounded-t-none border bg-background p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="Write a description here"
                              required
                              {...form.register("description")}
                            ></Textarea>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            className="size-4 rounded border-white/70 bg-muted-foreground/30 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:ring-offset-muted-foreground/20 dark:focus:ring-primary-600"
                            {...form.register("productOptions")}
                            defaultChecked={true}
                          />
                          <Label className="ml-2 text-sm text-muted-foreground">
                            Product has multiple options, like different colors
                            or sizes
                          </Label>
                        </div>
                      </div>

                      <div className="space-y-4 sm:space-y-6">
                        <div>
                          <Label className="mb-2 block text-sm font-medium">
                            Tags
                          </Label>
                          <Input
                            type="text"
                            id="tags"
                            className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="e.g computer, pc"
                            required
                            {...form.register("tags")}
                          />
                        </div>
                        <div>
                          <Label className="mb-2 block text-sm font-medium">
                            Item Weight (kg)
                          </Label>
                          <Input
                            type="number"
                            id="item-weight"
                            className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="12"
                            required
                            {...form.register("itemWeight")}
                          />
                        </div>
                        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Length (cm)
                            </Label>
                            <Input
                              type="number"
                              id="length"
                              className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="105"
                              required
                              {...form.register("length")}
                            />
                          </div>
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Breadth (cm)
                            </Label>
                            <Input
                              type="number"
                              id="breadth"
                              className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="15"
                              required
                              {...form.register("breadth")}
                            />
                          </div>
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Width (cm)
                            </Label>
                            <Input
                              type="number"
                              id="width"
                              className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="23"
                              required
                              {...form.register("width")}
                            />
                          </div>
                        </div>
                        <div>
                          <Label className="mb-2 block text-sm font-medium">
                            Product Images
                          </Label>
                          <div className="mb-4 grid grid-cols-3 gap-4 xl:grid-cols-4">
                            {images.map((image, index) => (
                              <div
                                key={index}
                                className="relative rounded-lg bg-muted-foreground/30 p-2 dark:bg-muted xl:size-36"
                              >
                                <Image
                                  src={image}
                                  width={128}
                                  height={131}
                                  alt="imac image"
                                />
                                <Button
                                  variant={"outline"}
                                  className="absolute bottom-1 left-1 border-none bg-transparent p-0 text-red-600 shadow-none hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                                >
                                  <RiDeleteBin6Fill className="size-5" />
                                  <span className="sr-only">Remove image</span>
                                </Button>
                              </div>
                            ))}
                          </div>

                          <div className="flex w-full items-center justify-center">
                            <Label className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-white/70 bg-secondary/30 hover:bg-muted-foreground/30 dark:border-muted-foreground/30 dark:bg-muted-foreground/35 dark:hover:border-muted-foreground dark:hover:bg-muted-foreground/80">
                              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                <HiOutlineCloudUpload className="mb-3 size-10 text-muted-foreground" />

                                <Text
                                  level={"sm"}
                                  className="mb-2 text-muted-foreground"
                                >
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </Text>
                                <Text
                                  level={"xs"}
                                  className="mb-4 text-muted-foreground"
                                >
                                  Max. File Size: 30MB
                                </Text>
                                <Button
                                  type="button"
                                  className="rounded-lg bg-primary-700 px-3 py-2 text-center text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                  Extra small
                                </Button>
                              </div>
                              <Input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                {...form.register("files")}
                              />
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="discount">
                <AccordionTrigger className="flex w-full items-center justify-between bg-secondary/30 p-4 text-left font-medium leading-none hover:bg-muted-foreground/30 focus:ring-4 focus:ring-muted-foreground/10  dark:border-muted dark:bg-muted-foreground/35 dark:hover:bg-muted-foreground/80 dark:focus:ring-muted-foreground/20 sm:px-5">
                  Discount
                </AccordionTrigger>
                <AccordionContent>
                  <div className="border-muted-foreground/10  px-1 pt-4 dark:border-muted sm:pt-5">
                    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                      <div className="space-y-4 sm:space-y-6">
                        <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Discount Type
                            </Label>
                            <Select {...form.register("discountType")}>
                              <SelectTrigger className="w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                                <SelectValue placeholder="Percent Off" />
                              </SelectTrigger>
                              <SelectContent>
                                {[
                                  { value: "PO", label: "Percent Off" },
                                  { value: "SU", label: "Sum" },
                                ].map((item, index) => (
                                  <SelectItem key={index} value={item.value}>
                                    {item.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="w-full">
                            <Label className="mb-2 block text-sm font-medium">
                              Minimum Order Amount
                            </Label>
                            <div className="relative">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <BiSolidDollarCircle className="size-5 text-muted-foreground" />
                              </div>
                              <Input
                                type="number"
                                id="minimum-order"
                                className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                placeholder="400"
                                {...form.register("minimumAmount")}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-full">
                          <Label className="mb-2 block text-sm font-medium">
                            Discount worth
                          </Label>
                          <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <HiMiniReceiptPercent className="size-5 text-muted-foreground" />
                            </div>
                            <Input
                              type="number"
                              id="discount-worth"
                              className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="10"
                              {...form.register("discountWorth")}
                            />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Checkbox
                            className="size-4 rounded border-white/70 bg-muted-foreground/30 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:ring-offset-muted-foreground/20 dark:focus:ring-primary-600"
                            defaultChecked={true}
                          />
                          <Label className="ml-2 text-sm text-muted-foreground">
                            I understand that the discount given in this offer
                            will be borne by me
                          </Label>
                        </div>
                      </div>

                      <div>
                        <Label className="mb-2 block text-sm font-medium">
                          Offer Validity Period
                        </Label>
                        <div className="w-full items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                          <Popover>
                            <PopoverTrigger asChild>
                              <div className="relative w-full">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <HiCalendar className="size-5 text-muted-foreground" />
                                </div>
                                <Input
                                  type="text"
                                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                  placeholder="Select date start"
                                  {...form.register("offerStart")}
                                />
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                initialFocus
                                {...form.register("offerStart")}
                              />
                            </PopoverContent>
                          </Popover>
                          <Popover>
                            <PopoverTrigger asChild>
                              <div className="relative w-full">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <HiCalendar className="size-5 text-muted-foreground" />
                                </div>
                                <Input
                                  type="text"
                                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                  placeholder="Select date end"
                                  {...form.register("offerEnd")}
                                />
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                initialFocus
                                {...form.register("offerEnd")}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex items-center space-x-5">
              <Button className="mt-4 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 sm:mt-6">
                Update Product
              </Button>

              <Button
                variant={"outline"}
                className="mt-4 inline-flex items-center rounded-lg border-red-500 px-5 py-2.5 text-center text-sm font-medium text-red-500 hover:bg-red-500 hover:text-white sm:mt-6"
              >
                <RiDeleteBin6Fill className="size-6" />
                Delete
              </Button>
            </div>
          </form>
        </Form>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
