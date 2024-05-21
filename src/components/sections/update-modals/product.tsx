import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
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
      <DialogContent className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:min-w-[40rem] sm:p-5">
        <ScrollArea className="h-[40rem] overflow-hidden">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update Product
            </h3>
          </div>
          <form action="#">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className="mb-2 block">
                  Product Name
                </Label>
                <Input
                  className="dark:border-gray-500"
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
                  <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                    <SelectValue placeholder="Electronics" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EL">Electronics</SelectItem>
                    <SelectItem value="TV">TV/Monitors</SelectItem>
                    <SelectItem value="PC">PC</SelectItem>
                    <SelectItem value="GA">Gaming/Console</SelectItem>
                    <SelectItem value="PH">Phones</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="brand" className="mb-2 block">
                  Brand
                </Label>
                <Input
                  className="dark:border-gray-500"
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
                  className="dark:border-gray-500"
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
                    className="dark:border-gray-500"
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
                    className="dark:border-gray-500"
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
                    className="dark:border-gray-500"
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
                    className="dark:border-gray-500"
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
                  className="dark:border-gray-500"
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
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  In-store only
                </Label>
              </div>
              <div className="mr-4 flex items-center">
                <Checkbox
                  id="inline-2-checkbox"
                  name="sellingType"
                  className="size-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                />
                <Label
                  htmlFor="inline-2-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Both in-store and online
                </Label>
              </div>
            </div>
            <div className="mb-4">
              <span className="mb-2 block dark:text-white">Product Images</span>
              <div className="mb-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:size-36">
                  <img
                    alt="iMac Side"
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                  />
                  <button
                    type="button"
                    className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <svg
                      aria-hidden
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:size-36">
                  <img
                    alt="iMac Front"
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  />
                  <button
                    type="button"
                    className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <svg
                      aria-hidden
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:size-36">
                  <img
                    alt="iMac Back"
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                  />
                  <button
                    type="button"
                    className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <svg
                      aria-hidden
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Delete image</span>
                  </button>
                </div>
                <div className="relative rounded-lg bg-gray-100 p-2 dark:bg-gray-700 sm:size-36">
                  <img
                    alt="iMac Back"
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                  />
                  <button
                    type="button"
                    className="absolute bottom-1 left-1 text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-400"
                  >
                    <svg
                      aria-hidden
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
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
                    <svg
                      aria-hidden
                      className="mb-3 size-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </Label>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" type="submit" className="[&>span]:text-sm">
                Update product
              </Button>
              <Button
                color="failure"
                outline
                theme={{
                  color: {
                    failure:
                      "border border-transparent bg-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-600 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-600",
                  },
                  outline: {
                    on: "flex w-full justify-center bg-white text-red-600 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-800 dark:text-red-500",
                  },
                }}
                className="[&>span]:border-red-600 [&>span]:px-5 [&>span]:py-2.5"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-1 size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Delete
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
