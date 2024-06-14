import { FaCheckCircle } from "react-icons/fa";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

const products = ['Apple Mac 27"', "Magic Keyboard", "Xbox Series X"];

export function SuccessMessageList() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="m-5 flex justify-center">
          <Button className="block rounded-lg px-5 text-center text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Show success message
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="relative left-0 top-20 m-auto w-fit translate-x-0 rounded-lg bg-background p-4 text-center sm:translate-y-0 md:w-[400px]">
        <Text level={"lg"} className="text-left font-semibold">
          Products successfully deleted
        </Text>
        <Text className="text-left font-light text-muted-foreground">
          The following products have been successfully remove from the
          database:
        </Text>
        <ul className="mb-4 space-y-2 text-left text-muted-foreground sm:mb-5">
          {products.map((product, index) => (
            <li key={index} className="flex items-center space-x-2">
              <FaCheckCircle className="size-4 shrink-0 text-green-500 dark:text-green-400" />
              <span>{product}</span>
            </li>
          ))}
        </ul>

        <DialogClose>
          <Button className="flex justify-start rounded-lg px-3 py-2 text-sm font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Continue
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
