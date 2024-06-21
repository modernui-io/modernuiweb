import { FaCheck } from "react-icons/fa6";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

export function DefaultSuccessMessage() {
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
        <div className="mx-auto mb-3.5 flex size-12 items-center justify-center rounded-full bg-green-100 p-2 dark:bg-green-900">
          <FaCheck className="size-8 text-green-500" />
          <span className="sr-only">Success</span>
        </div>
        <Text level={"lg"} className="mb-4 font-semibold">
          Successfully removed product.
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
