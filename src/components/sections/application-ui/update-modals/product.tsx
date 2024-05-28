import Image from "next/image";

import { HiCloudUpload, HiTrash, HiUpload } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
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

export function UpdateProductModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mx-auto">Update product</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:min-w-[40rem] sm:p-5">
        <ScrollArea className="h-[40rem] overflow-hidden">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold">Update Product</h3>
          </div>
          <form action="#">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className="mb-2 block">
                  Product Name
                </Label>
                <Input
                  defaultValue="Apple iPad 5th Gen Wi-Fi"
                  id="name"
                  name="name"
                  placeholder="Ex. Apple iMac 27&ldquo;"
                  required
                />
              </div>
              <div>
                <Label htmlFor="category" className="mb-2 block">
                  Category
                </Label>
                <Select name="category">
                  <SelectTrigger>
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
                <Label htmlFor="brand" className="mb-2 block">
                  Brand
                </Label>
                <Input
                  defaultValue="Tesla"
                  id="brand"
                  name="brand"
                  placeholder="Ex. Apple"
                  required
                />
              </div>
              <div>
                <Label htmlFor="price" className="mb-2 block">
                  Price
                </Label>
                <Input
                  defaultValue="259"
                  id="price"
                  name="price"
                  placeholder="$2999"
                  required
                  type="number"
                />
              </div>
              <div className="grid gap-4 sm:col-span-2 sm:grid-cols-4 md:gap-6">
                <div>
                  <Label htmlFor="weight" className="mb-2 block">
                    Item weight (kg)
                  </Label>
                  <Input
                    defaultValue="32"
                    id="weight"
                    name="weight"
                    placeholder="Ex. 12"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="length" className="mb-2 block">
                    Lenght (cm)
                  </Label>
                  <Input
                    defaultValue="126"
                    id="length"
                    name="length"
                    placeholder="Ex. 105"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="breadth" className="mb-2 block">
                    Breadth (cm)
                  </Label>
                  <Input
                    defaultValue="121"
                    id="breadth"
                    name="breadth"
                    placeholder="Ex. 15"
                    required
                    type="number"
                  />
                </div>
                <div>
                  <Label htmlFor="width" className="mb-2 block">
                    Width (cm)
                  </Label>
                  <Input
                    defaultValue="953"
                    id="width"
                    name="width"
                    placeholder="Ex. 23"
                    required
                    type="number"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="description" className="mb-2 block">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Write your description..."
                >
                  Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                  processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                  Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD
                  storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US
                </Textarea>
              </div>
            </div>
            <div className="mb-4 space-y-4 sm:flex sm:space-y-0">
              <div className="mr-4 flex items-center">
                <Checkbox id="inline-checkbox" name="sellingType" />
                <Label
                  htmlFor="inline-checkbox"
                  className="ml-2 text-sm font-medium"
                >
                  In-store only
                </Label>
              </div>
              <div className="mr-4 flex items-center">
                <Checkbox
                  id="inline-2-checkbox"
                  name="sellingType"
                  className="size-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
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
                  name="sellingType"
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
              <span className="mb-2 block">Product Images</span>
              <div className="mb-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                  <Image
                    className="w-auto sm:h-36"
                    width={100}
                    height={100}
                    alt="iMac Side"
                    src="https://png.pngtree.com/png-vector/20231223/ourmid/pngtree-imac-computer-on-white-background-mockup-background-png-image_11201386.png"
                  />
                  <button
                    type="button"
                    className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <HiTrash className="size-5" />
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                  <Image
                    className="w-auto sm:h-36"
                    width={100}
                    height={100}
                    alt="iMac Front"
                    src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                  />
                  <button
                    type="button"
                    className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <HiTrash className="size-5" />
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                  <Image
                    className="w-auto sm:h-36"
                    width={100}
                    height={100}
                    alt="iMac Back"
                    src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                  />
                  <button
                    type="button"
                    className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <HiTrash className="size-5" />
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
                  <Image
                    className="w-auto sm:h-36"
                    width={100}
                    height={100}
                    alt="iMac Back"
                    src="https://png.pngtree.com/png-vector/20240229/ourmid/pngtree-imac-computer-black-front-png-image_11793344.png"
                  />
                  <button
                    type="button"
                    className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <HiTrash className="size-5" />
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <Label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <HiCloudUpload className="mb-3 size-10 text-gray-400" />
                    <Text className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </Text>
                    <Text className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </Text>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button type="submit" className="text-sm">
                Update product
              </Button>
              <Button
                variant={"outline"}
                className="border-red-600 px-5 py-2.5 hover:bg-red-600 hover:text-white"
              >
                <HiTrash className="-ml-1 mr-1 size-5" />
                Delete
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
