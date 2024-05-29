import {
  HiCalendar,
  HiLocationMarker,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

export function ReadEventModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Read event</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5">
        <div className="mb-4 flex items-center justify-between rounded-t border-b border-gray-200 pb-4 dark:border-gray-700 sm:mb-5">
          <h3 className="font-semibold">The 4th Digital Transformation</h3>
        </div>
        <dl className="mb-4 sm:mb-5">
          <dt className="sr-only">Date</dt>
          <dd className="mb-2 flex items-center text-gray-500 dark:text-gray-400">
            <HiCalendar className="mr-1.5 size-4 text-gray-400 dark:text-gray-500" />
            <span className="font-medium">26th November, 2022</span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
            <HiLocationMarker className="mr-1.5 size-4 text-gray-400 dark:text-gray-500" />
            <span className="font-medium">California, USA</span>
          </dd>
          <dt className="mb-2 font-semibold leading-none">Details</dt>
          <dd className="text-gray-500 dark:text-gray-400">
            The 4th Digital Transformation and Industry 4.0 Free Online
            Conference Organized by ModernUI and Themesberg, Live on Saturday
            26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars
          </dd>
        </dl>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button size="lg" className="[&>span]:text-sm">
              <HiPencilAlt className="-ml-1 mr-1 size-5" />
              Edit
            </Button>
            <Button
              size="lg"
              variant={"destructive"}
              className="inline-flex [&>span]:text-sm"
            >
              <HiTrash className="-ml-1 mr-1.5 size-5" />
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
