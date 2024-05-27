import {
  HiCalendar,
  HiLocationMarker,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";

export function AdvancedReadEventSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl py-8 lg:py-16">
        <div className="mb-4 grid gap-4 px-4 sm:mb-5 sm:grid-cols-3 sm:gap-6 md:gap-12">
          <div className="sm:col-span-2">
            <h2 className="mb-4 flex items-center text-xl font-bold leading-none sm:mb-5 sm:text-2xl">
              The 4th Digital Transformation
            </h2>
            <dl className="mb-4 flex items-center space-x-4 sm:mb-5">
              <div>
                <dt className="sr-only">Date</dt>
                <dd className="flex items-center">
                  <HiCalendar className="mr-1.5 size-4 text-gray-400 dark:text-gray-500" />
                  <span className="font-semibold">26th of November, 2022</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="flex items-center">
                  <HiLocationMarker className="mr-1.5 size-4 text-gray-400 dark:text-gray-500" />
                  <span className="font-semibold">California, USA</span>
                </dd>
              </div>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none">Details:</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                USA enterprises and governments have committed to a
                technology-driven future, making USA one of the fastest-growing
                markets for digital technologies. This has also increased the
                exposure to the risk of cyber-attacks as businesses continue to
                progress toward being more digital in areas such as the
                workplace, which requires more security measures.
              </dd>
            </dl>
          </div>
          <dl className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Participants
            </dt>
            <dd className="mb-4 flex -space-x-4 sm:mb-5">
              <div className="mb-4 flex space-x-[-20px] sm:mb-0 [&_img]:ring-white">
                <Avatar className="size-8">
                  <AvatarImage
                    alt="Helene Engels"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>HE</AvatarFallback>
                </Avatar>
                <Avatar className="size-8">
                  <AvatarImage
                    alt="Robert Brown"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>RB</AvatarFallback>
                </Avatar>
                <Avatar className="size-8">
                  <AvatarImage
                    alt="Bonnie Green"
                    src="https://github.com/shadcn.png"
                  />
                  <AvatarFallback>BG</AvatarFallback>
                </Avatar>
                <Avatar className="size-8">
                  <AvatarFallback>+9</AvatarFallback>
                </Avatar>
              </div>
            </dd>
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Online
            </dt>
            <dd className="mb-4 font-medium sm:mb-5">Google Meet</dd>
            <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
              Duration
            </dt>
            <dd className="font-medium">All day</dd>
          </dl>
        </div>
        <div className="flex items-center space-x-4 px-4">
          <Button size="lg" className="[&>span]:text-sm">
            <HiPencilAlt className="-ml-1 mr-1 size-5" />
            Edit
          </Button>
          <Button size="lg" className="&>span]:text-sm">
            Preview
          </Button>
          <Button size="lg" className="bg-red-500 [&>span]:text-sm">
            <HiTrash className="-ml-1 mr-1.5 size-5" />
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
}
