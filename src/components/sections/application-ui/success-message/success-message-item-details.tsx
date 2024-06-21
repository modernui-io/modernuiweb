import Image from "next/image";

import { FaCheck } from "react-icons/fa6";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import iMacSideImage from "~/lib/assets/images/imac-side-image.png";

export function SuccessMessageItemDetails() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="m-5 flex justify-center">
          <Button className="block rounded-lg px-5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Show success message
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-lg bg-background p-4 text-center shadow">
        <div className="mx-auto mb-4">
          <FaCheck className="size-8 text-green-500" />
          <span className="sr-only">Success</span>
        </div>
        <Card className="flex items-center justify-center space-x-3 rounded-lg bg-muted-foreground/10 p-2 dark:bg-muted-foreground/40">
          <Image
            src={iMacSideImage}
            alt="imac"
            className="size-11"
            width={44}
            height={44}
          />
          <div className="text-left">
            <Text className="font-semibold">Apple iMac 27&ldquo;</Text>
            <Text className="text-sm text-muted-foreground">
              256GB SSD, Apple M1
            </Text>
          </div>
        </Card>
        <Text level="lg" className="font-light text-muted-foreground">
          This product was successfully deleted.
        </Text>

        <DialogClose>
          <Button className="rounded-lg px-3 py-2 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Continue
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
