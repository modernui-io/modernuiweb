import { HiExclamation, HiTrash } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

export function DeleteConfirmationWithItemsList() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Show delete confirmation</Button>
      </DialogTrigger>
      <DialogContent className="justify-center rounded-lg bg-background p-4 shadow sm:p-5">
        <h3 className="mb-1 text-lg font-semibold">Are you sure?</h3>
        <Text className="mb-4 text-gray-500 dark:text-gray-400">
          You are about to delete the following 3 products, this cannot be
          undone:
        </Text>
        <ul className="mb-4 space-y-2 text-left text-gray-500 dark:text-gray-400 sm:mb-5">
          <li className="flex items-center space-x-2">
            <HiExclamation className="size-4 shrink-0 text-gray-400 dark:text-gray-500" />
            <span>Apple iMac 27”</span>
          </li>
          <li className="flex items-center space-x-2">
            <HiExclamation className="size-4 shrink-0 text-gray-400 dark:text-gray-500" />
            <span>Magic Keyboard</span>
          </li>
          <li className="flex items-center space-x-2">
            <HiExclamation className="size-4 shrink-0 text-gray-400 dark:text-gray-500" />
            <span>Xbox Series X</span>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <DialogClose asChild>
            <Button variant={"outline"}>No, cancel</Button>
          </DialogClose>
          <Button
            type="submit"
            variant={"destructive"}
            className="[&>span]:items-center"
          >
            <HiTrash className="-ml-1 mr-1.5 size-4" />
            Yes, delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
