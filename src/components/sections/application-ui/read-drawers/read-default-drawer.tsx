import { X } from "lucide-react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { ScrollArea } from "~/components/ui/scroll-area";

export function ReadDefaultDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div className="m-5 text-center">
          <Button className="mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Read product
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-80">
        <ScrollArea>
          <div className="left-0 top-0 z-40 h-screen overflow-auto bg-background p-4 transition-transform dark:bg-muted-foreground/20">
            <div className="flex items-center justify-between">
              <DrawerTitle className="mb-6 inline-flex items-center">
                <Text level={"xl"} className="font-semibold">
                  Apple iMac 25&ldquo;
                  <br />
                  $2999
                </Text>
              </DrawerTitle>
              <DrawerClose asChild>
                <Button className="right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-muted-foreground hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white">
                  <X className="size-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </DrawerClose>
            </div>
            <dl>
              {[
                {
                  title: "Details",
                  description:
                    "Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.",
                },
                {
                  title: "Category",
                  description: "Electronics/PC",
                },
              ].map((detail, index) => (
                <div key={index}>
                  <dt
                    key={`title-${index}`}
                    className="mb-2 font-semibold leading-none"
                  >
                    {detail.title}
                  </dt>
                  <dd
                    key={`desc-${index}`}
                    className="mb-4 font-light text-muted-foreground sm:mb-5"
                  >
                    {detail.description}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="bottom-0 left-0 flex w-full justify-start space-x-4 px-4 pb-4 md:absolute">
              <Button className="inline-flex w-max items-center justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                <FaEdit className="-ml-1 mr-1 size-5" />
                Edit
              </Button>
              <Button className="inline-flex w-max items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-primary-foreground hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-500 dark:text-secondary-foreground dark:hover:bg-red-600 dark:focus:ring-red-900">
                <RiDeleteBin6Fill className="-ml-1 mr-1.5 size-5" />
                Delete
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
