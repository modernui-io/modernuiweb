import { HiLocationMarker, HiPencilAlt, HiTrash } from "react-icons/hi";

import { Button } from "~/components/ui/button";

export function ReadUserSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-xl font-semibold leading-none sm:mb-5 md:text-2xl">
          Helene Engels
        </h2>
        <dl>
          <dt className="mb-2 font-semibold leading-none">Biography</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
            UI/UX Designer, Creating things that stand out, Featured by Adobe,
            Figma, Webflow and others, Daily design tips & resources, Exploring
            Web3.
          </dd>
          <dt className="mb-2 font-semibold leading-none">Location</dt>
          <dd className="mb-4 flex items-center sm:mb-5">
            <HiLocationMarker className="mr-1.5 size-4 text-gray-400 dark:text-gray-500" />
            <span className="font-medium">
              California, United States of America
            </span>
          </dd>
        </dl>
        <div className="flex items-center space-x-4">
          <Button size="lg" className="[&>span]:text-sm">
            <HiPencilAlt className="-ml-1 mr-1 size-5" />
            Edit
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
