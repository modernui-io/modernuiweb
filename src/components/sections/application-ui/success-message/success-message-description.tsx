import { FaCheck } from "react-icons/fa6";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

export function SuccessMessageDescription() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="m-5 flex justify-center">
          <Button className="block rounded-lg px-5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Show success message
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="relative left-0 top-4 m-auto w-fit translate-x-0 rounded-lg bg-background p-4 text-center shadow sm:top-20 sm:mt-0 sm:translate-y-0 sm:p-5">
        <div className="flex items-center space-x-1.5">
          <div className="flex size-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <FaCheck
              className="size-4 text-green-500 dark:text-green-400"
              aria-hidden="true"
            />
            <span className="sr-only">Success icon</span>
          </div>
          <Text
            level={"lg"}
            className="font-medium text-green-500 dark:text-green-400"
          >
            User deleted!
          </Text>
        </div>
        <Text className="text-left font-light">
          User <span className="font-semibold">@bonnieGr</span> has been
          successfully removed.
        </Text>
        <DialogClose>
          <Button className="ml-0 flex justify-start rounded-lg px-3 py-2 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Continue
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
