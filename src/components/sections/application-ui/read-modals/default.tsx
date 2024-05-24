import { HiPencilAlt, HiTrash } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

export function DefaultReadModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Show read modal</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5">
        <div className="mb-4 flex justify-between rounded-t sm:mb-5">
          <div className="text-lg md:text-xl">
            <h3 className="font-semibold ">Apple iMac 27”</h3>
            <Text className="font-bold">$2999</Text>
          </div>
        </div>
        <dl>
          <dt className="mb-2 font-semibold leading-none">Details</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
            Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
          <dt className="mb-2 font-semibold leading-none">Category</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
            Electronics/PC
          </dd>
        </dl>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button size="lg" className="[&>span]:text-sm">
              <HiPencilAlt className="-ml-1 mr-1 size-5" />
              Edit
            </Button>
            <Button size="lg">Preview</Button>
          </div>
          <Button size="lg" className="inline-flex bg-red-500 [&>span]:text-sm">
            <HiTrash className="-ml-1 mr-1.5 size-5" />
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
