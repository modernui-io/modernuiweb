import { HiTrash } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

export function DefaultDeleteConfirmationModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Show delete confirmation</Button>
      </DialogTrigger>
      <DialogContent className="justify-center rounded-lg bg-background p-4 shadow sm:p-5">
        <HiTrash className="mx-auto size-11 text-gray-400 dark:text-gray-500" />
        <Text className="text-gray-500 dark:text-gray-300">
          Are you sure you want to delete this item?
        </Text>
        <div className="flex items-center justify-center space-x-4">
          <DialogClose asChild>
            <Button variant={"outline"}>No, cancel</Button>
          </DialogClose>
          <Button variant={"destructive"} type="submit">
            Yes, I&apos;m sure
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
