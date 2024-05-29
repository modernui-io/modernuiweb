import { HiPencilAlt, HiTrash } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";

export function DefaultReadSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-2 text-xl font-semibold leading-none md:text-2xl">
          Apple iMac 25&quot;
        </h2>
        <Text className="mb-4 text-xl font-extrabold leading-none md:text-2xl">
          $2999
        </Text>
        <dl>
          <dt className="mb-2 font-semibold leading-none">Details</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
            Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
            processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
            Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
            Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
          </dd>
        </dl>
        <dl className="flex items-center space-x-6">
          <div>
            <dt className="mb-2 font-semibold leading-none">Category</dt>
            <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
              Electronics/PC
            </dd>
          </div>
          <div>
            <dt className="mb-2 font-semibold leading-none">Item weight</dt>
            <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
              12kg
            </dd>
          </div>
        </dl>
        <div className="flex items-center space-x-4">
          <Button size="lg" className="[&>span]:text-sm">
            <HiPencilAlt className="-ml-1 mr-1 size-5" />
            Edit
          </Button>
          <Button size="lg" className="bg-red-500 [&>span]:text-sm">
            <HiTrash className="-ml-1 mr-1.5 size-5" />
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
}
