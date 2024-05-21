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

export function DefaultUpdateModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mx-auto">Update product</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Update Product
          </h3>
        </div>
        <form action="#">
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" className="mb-2 block">
                Name
              </Label>
              <Input
                defaultValue="iPad Air Gen 5th Wi-Fi"
                className="dark:border-gray-500"
                id="name"
                name="name"
                placeholder="Ex. Apple iMac 27&ldquo;"
              />
            </div>
            <div>
              <Label htmlFor="brand" className="mb-2 block">
                Brand
              </Label>
              <Input
                defaultValue="Google"
                className="dark:border-gray-500"
                id="brand"
                name="brand"
                placeholder="Ex. Apple"
              />
            </div>
            <div>
              <Label htmlFor="price" className="mb-2 block">
                Price
              </Label>
              <Input
                defaultValue="399"
                className="dark:border-gray-500"
                id="price"
                name="price"
                placeholder="$299"
                type="number"
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
                  <SelectItem value="AL">TV/Monitors</SelectItem>
                  <SelectItem value="PC">PC</SelectItem>
                  <SelectItem value="GA">Gaming/Console</SelectItem>
                  <SelectItem value="PH">Phones</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="description" className="mb-2 block">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Write a description..."
                className="dark:border-gray-500"
                rows={5}
              >
                Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US
              </Textarea>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="lg" type="submit" className="text-sm">
              Update product
            </Button>
            <Button variant={"outline"} className="border-red-600 px-5 py-2.5">
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
      </DialogContent>
    </Dialog>
  );
}
