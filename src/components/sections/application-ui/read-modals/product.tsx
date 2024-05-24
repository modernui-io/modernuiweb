import { HiLocationMarker, HiPencilAlt, HiStar, HiTrash } from "react-icons/hi";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

export function ReadProductModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Read product</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5 md:min-w-[40rem]">
        <div className="mb-4 flex justify-between rounded-t sm:mb-5">
          <div className="text-lg md:text-xl">
            <h3 className="font-semibold ">Apple iMac 27”</h3>
            <Text className="font-bold">$2999</Text>
          </div>
        </div>
        <div className="mb-4 grid grid-cols-3 gap-4 sm:mb-5 sm:grid-cols-4">
          <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:size-36">
            <img
              alt="iMac Side"
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
            />
          </div>
          <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:size-36">
            <img
              alt="iMac Front"
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
            />
          </div>
          <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:size-36">
            <img
              alt="iMac Back"
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
            />
          </div>
          <div className="rounded-lg bg-gray-100 p-2 dark:bg-gray-700 md:size-36">
            <img
              alt="iMac Back"
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
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
            <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
          </div>
          <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-700">
            <dt className="mb-2 font-semibold leading-none">Ships from</dt>
            <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
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
