import { HiTrash } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";

export function ConfirmDeleteWithCheckbox() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Show delete confirmation</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5">
        <h3 className="mb-2 text-lg font-semibold">Remove 15 items?</h3>
        <Text className="mb-4 text-gray-500 dark:text-gray-400">
          If you remove them, it may delete these questions account and
          activity. These questions can also no longer request info about you on
          Flowbite.
        </Text>
        <div
          className="mb-4 rounded-lg bg-gray-100 p-4 text-left text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-400 sm:mb-5"
          role="alert"
        >
          <div className="flex">
            <Checkbox
              id="confirm-checkbox"
              className="mt-1 size-4 rounded"
              required
            />
            <Label
              htmlFor="confirm-checkbox"
              className="ml-2 text-sm text-gray-500 dark:text-gray-400"
            >
              Also delete&nbsp;
              <span className="font-medium">all posts, photos and videos</span>
              &nbsp;on Flowbite that 15 questions may have published on your
              behalf.
            </Label>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
          <Button type="submit" size="sm" className="bg-red-500">
            <HiTrash className="-ml-1 mr-1.5 size-4" />
            Yes, delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
