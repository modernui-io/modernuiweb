import Image from "next/image";

import { X } from "lucide-react";
import { FaEdit, FaStar } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
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

import iMacBackImage from "/src/lib/assets/images/imac-back-image.png";
import iMacFrontImage from "/src/lib/assets/images/imac-front-image.png";
import iMacSideImage from "/src/lib/assets/images/imac-side-image.png";

const images = [
  iMacSideImage,
  iMacFrontImage,
  iMacBackImage,
  iMacSideImage,
  iMacBackImage,
  iMacSideImage,
];

export function ReadProductDrawerImages() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div className="m-5 text-center">
          <Button className="mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Read product
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-96">
        <ScrollArea>
          <div className="left-0 top-0 z-40 h-screen overflow-auto bg-white p-4 transition-transform dark:bg-muted-foreground/20">
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
            <div className="mb-4 grid w-fit grid-cols-3 gap-4 sm:mb-5">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-fit rounded-lg bg-muted-foreground/10 p-2 dark:bg-muted-foreground/20"
                >
                  <Image src={image} alt="iMac Image" />
                </div>
              ))}
            </div>
            <dl className="sm:mb-5">
              <dt className="mb-2 font-semibold leading-none">Details</dt>
              <dd className="mb-4 w-fit font-light text-muted-foreground sm:mb-5">
                Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
                processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
                Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
              </dd>
            </dl>

            <dl className="mb-4 grid w-fit grid-cols-2 gap-4">
              <div className="col-span-2 rounded-lg border border-muted-foreground/10 bg-muted-foreground/10 p-3 dark:border-muted-foreground/20 dark:bg-muted-foreground/20 sm:col-span-1">
                <dt className="mb-2 font-semibold leading-none">Shipping</dt>
                <dd className="flex items-center text-muted-foreground">
                  <HiLocationMarker className="mr-1.5 size-4" />
                  United States, Europe
                </dd>
              </div>
              <div className="col-span-2 rounded-lg border border-muted-foreground/10 bg-muted-foreground/10 p-3 dark:border-muted-foreground/20 dark:bg-muted-foreground/20 sm:col-span-1">
                <dt className="mb-2 font-semibold leading-none">Colors</dt>
                <dd className="flex items-center space-x-2 font-light text-muted-foreground">
                  {[
                    "bg-purple-600",
                    "bg-indigo-400",
                    "bg-primary-600",
                    "bg-pink-400",
                    "bg-teal-300",
                    "bg-green-300",
                  ].map((color, index) => (
                    <div
                      key={index}
                      className={`size-4 shrink-0 rounded-full ${color}`}
                    ></div>
                  ))}
                </dd>
              </div>
              <div className="rounded-lg border border-muted-foreground/10 bg-muted-foreground/10 p-3 dark:border-muted-foreground/20 dark:bg-muted-foreground/20">
                <dt className="mb-2 font-semibold leading-none">
                  Product State
                </dt>
                <dd className="text-muted-foreground">
                  <span className="inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-200 dark:text-primary-800">
                    <FaStar className="mr-1 size-2.5" />
                    New
                  </span>
                </dd>
              </div>
              {[
                { title: "Sold by", description: "Company" },
                { title: "Ships from", description: "Company" },
                { title: "Brand", description: "Apple" },
                { title: "Dimensions (cm)", description: "105 x 15 x 23" },
                { title: "Item Weight", description: "12kg" },
              ].map((card, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-muted-foreground/10 bg-muted-foreground/10 p-3 dark:border-muted-foreground/20 dark:bg-muted-foreground/20"
                >
                  <dt className="mb-2 font-semibold leading-none">
                    {card.title}
                  </dt>
                  <dd className="text-muted-foreground">{card.description}</dd>
                </div>
              ))}
            </dl>
            <div className="bottom-0 left-0 flex w-full justify-start space-x-4 px-4 pb-4">
              <Button className="inline-flex w-max items-center justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                <FaEdit className="-ml-1 mr-1 size-5" />
                Edit
              </Button>
              <Button
                variant={"outline"}
                className="w-max rounded-lg border border-muted-foreground/10 bg-background px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-muted-foreground/10 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-muted-foreground/10 dark:border-muted-foreground/20 dark:bg-muted-foreground/20 dark:text-muted-foreground dark:hover:bg-muted-foreground/20 dark:hover:text-white dark:focus:ring-muted-foreground/20"
              >
                Preview
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
