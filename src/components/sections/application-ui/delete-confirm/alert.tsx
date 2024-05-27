import { HiExclamation, HiTrash } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

export function ConfirmDeleteWithAlert() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Show delete confirmation</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5">
        <h3 className="mb-2 text-lg font-semibold">Confirm user removal</h3>
        <Text className="mb-4 text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this user from the ModernUI platform?
        </Text>
        <div className="mb-4 rounded-lg bg-orange-100 p-5 text-left text-orange-700 dark:bg-gray-700 dark:text-orange-300">
          <div className="mb-1 items-center">
            <HiExclamation className="mr-1 inline size-4 shrink-0" />
            <span className="sr-only">Danger</span>
            <span className="font-semibold leading-none">Warning</span>
          </div>
          <Text>
            By deleting this user 6 associated posts will also be permanently
            deleted.
          </Text>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <DialogClose asChild>
            <Button size="sm">No, cancel</Button>
          </DialogClose>
          <Button type="submit" size="sm" variant={"destructive"}>
            <HiTrash className="-ml-1 mr-1.5 size-4" />
            Yes, confirm delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
