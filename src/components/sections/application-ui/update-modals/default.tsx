import { HiTrash } from "react-icons/hi";

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
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5 lg:min-w-[40rem]">
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
          <h3 className="text-lg font-semibold">Update Product</h3>
        </div>
        <form action="#">
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name" className="mb-2 block">
                Name
              </Label>
              <Input
                defaultValue="iPad Air Gen 5th Wi-Fi"
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
              <Label htmlFor="description" className="mb-2 block">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Write a description..."
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
            <Button size={"lg"} type="submit" className="text-sm">
              Update product
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="border-red-600 px-5 py-2.5"
            >
              <HiTrash className="-ml-1 mr-1 size-5" />
              Delete
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
