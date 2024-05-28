import { HiPencilAlt, HiTrash } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

export function ReadUserModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Read user</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5">
        <div className="mb-4 flex justify-between rounded-t sm:mb-5">
          <div className="text-lg md:text-xl">
            <h3 className="text-lg font-bold md:text-xl">Helene Engels</h3>
            <Text className="text-base text-gray-500 dark:text-gray-400">
              Moderator
            </Text>
          </div>
        </div>
        <dl>
          <dt className="mb-2 font-semibold leading-none">Email</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
            helene@company.com
          </dd>
          <dt className="mb-2 font-semibold leading-none">Biography</dt>
          <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
            Hello, I&apos;m Helene Engels, USA Designer, Creating things that
            stand out, Featured by Adobe, Figma, Webflow and others, Daily
            design tips & resources, Exploring Web3.
          </dd>
        </dl>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button size="lg" className="[&>span]:text-sm">
              <HiPencilAlt className="-ml-1 mr-1 size-5" />
              Edit
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
