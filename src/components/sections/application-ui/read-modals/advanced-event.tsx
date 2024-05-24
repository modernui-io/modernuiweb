import {
  HiCalendar,
  HiLocationMarker,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

export function AdvancedReadEventModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Read event</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5">
        <div className="mb-4 flex items-center justify-between rounded-t border-b border-gray-200 pb-4 dark:border-gray-700 sm:mb-5">
          <h3 className="font-semibold">The 4th Digital Transformation</h3>
        </div>
        <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
          <dl className="rounded-lg border p-4">
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
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Participants
            </dt>
            <div className="mb-2 flex space-x-[-20px] [&_img]:ring-white dark:[&_img]:ring-0">
              <Avatar className="size-8">
                <AvatarImage
                  alt="Helene Engels"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                />
                <AvatarFallback>HE</AvatarFallback>
              </Avatar>
              <Avatar className="size-8">
                <AvatarImage
                  alt="Robert Brown"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <Avatar className="size-8">
                <AvatarImage
                  alt="Bonnie Green"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                />
                <AvatarFallback>BG</AvatarFallback>
              </Avatar>
              <Avatar className="size-8">
                <AvatarFallback>+9</AvatarFallback>
              </Avatar>
            </div>
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Online
            </dt>
            <dd className="mb-4 font-medium sm:mb-5">Google Meet</dd>
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Duration
            </dt>
            <dd className="font-medium">All day</dd>
          </dl>
          <dl>
            <dt className="mb-2 font-semibold leading-none">Details</dt>
            <dd className="text-gray-500 dark:text-gray-400">
              The 4th Digital Transformation and Industry 4.0 Free Online
              Conference Organized by Flowbite and Themesberg, Live on Saturday
              26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars
            </dd>
          </dl>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button size="lg" className="[&>span]:text-sm">
              <HiPencilAlt className="-ml-1 mr-1 size-5" />
              Edit
            </Button>
            <Button size="lg" className="[&>span]:text-sm">
              Preview
            </Button>
          </div>
          <Button size="lg" className="inline-flex bg-red-500 [&>span]:text-sm">
            <HiTrash className="-ml-1 mr-1.5 size-5" />
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
