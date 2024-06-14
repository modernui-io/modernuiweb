import Image from "next/image";

import { FaCheckCircle } from "react-icons/fa";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

export default {};
export function SuccessMessageRepository() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="m-5 flex justify-center">
          <Button className="block rounded-lg px-5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Show success message
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="relative left-0 top-20 m-auto w-fit translate-x-0 rounded-lg bg-background p-4 text-center shadow sm:translate-y-0">
        <Text className="mt-2 text-left text-lg font-semibold leading-none">
          Awesome!
        </Text>
        <Text className="text-left text-muted-foreground">
          The following repositories have been successfully deleted:
        </Text>
        <div className="mb-4 flex items-center space-x-1.5 border-y border-green-200 bg-green-100 p-4 font-light text-green-700 dark:border-gray-600 dark:bg-gray-700 dark:text-green-300 sm:mb-5">
          <FaCheckCircle className="size-4 shrink-0" aria-hidden="true" />
          <Text className="font-medium leading-none text-green-700">
            bergside/library
          </Text>
        </div>
        <DialogClose>
          <Button className="ml-0 w-full rounded-lg px-3 py-2 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Continue
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
