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

export function ReadUserDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div className="m-5 text-center">
          <Button className="mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-300 dark:text-secondary-foreground dark:focus:ring-primary-800">
            Read User
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-80">
        <ScrollArea>
          <div className="left-0 top-0 z-40 h-screen bg-background p-4 transition-transform dark:bg-muted-foreground/20">
            <div className="flex items-center justify-between">
              <DrawerTitle className="inline-flex items-center">
                <Text level={"xl"} className="font-semibold leading-none">
                  Helena Engels
                </Text>
              </DrawerTitle>
              <DrawerClose asChild>
                <Button className="right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-muted-foreground hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white">
                  <X className="size-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </DrawerClose>
            </div>
            <dl className="mt-4 sm:mt-5">
              <dt className="mb-2 font-semibold leading-none">Biography</dt>
              <dd className="mb-4 font-light text-muted-foreground sm:mb-5">
                Hello, I&apos;m Helene Engels, USA Designer, Creating things
                that stand out, Featured by Adobe, Figma, Webflow and others,
                Daily design tips & resources, Exploring Web3.
              </dd>
              <dt className="mb-2 font-semibold leading-none">Email</dt>
              <dd className="mb-4 font-light text-muted-foreground sm:mb-5">
                helene@company.com
              </dd>
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
