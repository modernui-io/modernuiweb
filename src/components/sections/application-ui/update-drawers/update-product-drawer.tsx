import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
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
import { RiDeleteBin6Fill } from "react-icons/ri";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { ScrollArea } from "~/components/ui/scroll-area";
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
  category: z.string().optional(),
  description: z.string(),
  productOptions: z.boolean().optional(),
  itemWeight: z.number(),
  length: z.number(),
  breadth: z.number(),
  width: z.number(),
  files: z.array(z.string()).optional(),
  date: z.string().optional(),
});

export function UpdateProductDrawer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Apple iMac 27“",
      brand: "Apple",
      category: "EL",
      description:
        "Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US",
      productOptions: false,
      itemWeight: 12,
      length: 105,
      breadth: 15,
      width: 23,
      files: [],
      date: "03/08/2023",
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
              <DrawerTitle className="mb-6 inline-flex items-center text-sm font-semibold uppercase text-muted-foreground">
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
                <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 ">
                  <div className="space-y-4 sm:col-span-2 sm:space-y-6">
                    <div>
                      <div>
                        <Label className="mb-2 block text-sm font-medium">
                          Product Name
                        </Label>
                        <Input
                          type="text"
                          id="name"
                          className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="Type product name"
                          required
                          {...form.register("name")}
                        />
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
                                  icon: <HiLocationMarker className="size-5" />,
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
                            className="cursor-pointer rounded p-2 text-muted-foreground hover:bg-muted-foreground/10 dark:hover:text-primary-foreground sm:ml-auto"
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
                          className="block h-40 w-full rounded-lg rounded-t-none border bg-background p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="Write a description here"
                          required
                          {...form.register("description")}
                        ></Textarea>
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
                            className="relative size-auto rounded-lg bg-muted-foreground/30 p-2 dark:bg-muted"
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
                        <Label className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-secondary/30 hover:bg-muted-foreground/30 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:hover:border-muted-foreground dark:hover:bg-muted-foreground/80">
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
                              className="rounded-lg bg-primary-700 px-3 py-2 text-center text-xs font-medium text-primary-foreground hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
                    <div className="mb-4 flex items-center">
                      <Checkbox
                        className="size-4 rounded border-muted-foreground/30 bg-muted-foreground/30 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:ring-offset-muted-foreground/20 dark:focus:ring-primary-600"
                        {...form.register("productOptions")}
                      />
                      <Label className="ml-2 text-sm text-muted-foreground">
                        Product has multiple options, like different colors or
                        sizes
                      </Label>
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <HiCalendar className="size-5 text-muted-foreground" />
                          </div>
                          <Input
                            type="text"
                            className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:placeholder:text-muted-foreground/80 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="Select date start"
                            {...form.register("date")}
                          />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          initialFocus
                          {...form.register("date")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <Label className="mb-2 block text-sm font-medium">
                        Brand
                      </Label>
                      <Input
                        type="text"
                        id="brand"
                        className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:placeholder:text-muted-foreground/80 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Product brand"
                        required
                        {...form.register("brand")}
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block text-sm font-medium">
                        Category
                      </Label>
                      <Select {...form.register("category")}>
                        <SelectTrigger className="w-full rounded-lg border bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:focus:border-primary-500 dark:focus:ring-primary-500">
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
                        Item Weight (kg)
                      </Label>
                      <Input
                        type="number"
                        id="item-weight"
                        className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:placeholder:text-muted-foreground/80 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="12"
                        required
                        {...form.register("itemWeight")}
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block text-sm font-medium">
                        Length (cm)
                      </Label>
                      <Input
                        type="number"
                        id="length"
                        className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:placeholder:text-muted-foreground/80 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="105"
                        required
                        {...form.register("length")}
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block text-sm font-medium">
                        Breadth (cm)
                      </Label>
                      <Input
                        type="number"
                        id="breadth"
                        className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:placeholder:text-muted-foreground/80 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="15"
                        required
                        {...form.register("breadth")}
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block text-sm font-medium">
                        Width (cm)
                      </Label>

                      <Input
                        type="number"
                        id="width"
                        className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted-foreground/10 dark:placeholder:text-muted-foreground/80 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="23"
                        required
                        {...form.register("width")}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </Form>
            <div className="bottom-0 left-0 flex w-full justify-start space-x-4 p-4">
              <Button className="w-max justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                Update product
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
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
