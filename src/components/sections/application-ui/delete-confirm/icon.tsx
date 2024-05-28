import { HiExclamation } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

export function DeleteConfirmationWithIcon() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Show delete confirmation</Button>
      </DialogTrigger>
      <DialogContent className="justify-center rounded-lg bg-background p-4 shadow sm:p-5">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-gray-100 p-2 dark:bg-gray-700">
          <HiExclamation className="size-8 text-gray-500 dark:text-gray-400" />
        </div>
        <Text className="mb-3.5 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-500">@bonniegr</span>,
          are you sure you want to delete this product from platform?
        </Text>
        <Text className="mb-4 text-gray-500 dark:text-gray-300">
          This action cannot be undone.
        </Text>
        <div className="flex items-center justify-center space-x-4">
          <DialogClose asChild>
            <Button className="hover:text-gray-900 focus:ring-blue-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600 [&>span]:text-gray-500 dark:[&>span]:bg-gray-700 dark:[&>span]:text-gray-300">
              No, cancel
            </Button>
          </DialogClose>
          <Button variant={"destructive"} type="submit">
            Yes, delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
