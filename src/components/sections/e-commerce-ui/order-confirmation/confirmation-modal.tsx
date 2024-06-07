import React from "react";
import Link from "next/link";

import { Check } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "~/components/ui/dialog";

export const OrderConfirmationModal = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="m-5 flex justify-center">
            <Button>Show order confirmation modal</Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[440px]  text-center sm:max-w-[480px]">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 sm:size-16">
            <Check className="size-7 text-green-700 dark:text-green-300 sm:size-12" />
          </div>
          <Heading level={4} className="font-semibold">
            Your order is confirmed!
          </Heading>
          <Text className="text-primary-500 ">
            Your order{" "}
            <Link
              href="#"
              className="font-semibold text-primary-900 hover:underline"
            >
              #7564804
            </Link>{" "}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </Text>
          <DialogFooter className="mt-2 gap-4 border-t pt-4 sm:flex sm:items-center sm:justify-center">
            <Link
              href="#"
              className="mb-4 flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:my-0"
            >
              Track your order
            </Link>
            <Button className="inline-flex  justify-center rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-primary-900 hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100">
              Return to shopping
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
