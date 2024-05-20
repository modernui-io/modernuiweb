import { HiPlus } from "react-icons/hi";

import { Button } from "~/components/ui/button";

export function TableHeaderWithCTAAndButtonGroup() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 md:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <Button className="w-full md:w-fit">
              <HiPlus className="-ml-1 mr-2 size-3.5" />
              Add product
            </Button>
            <div className="w-full flex-col space-x-2 space-y-2 md:w-auto md:flex-row md:space-x-0 md:space-y-0">
              <Button className="border-r dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-r-none">
                Positions
              </Button>
              <Button className="border-x dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-none md:border-l-0">
                Estimated Traffic
              </Button>
              <Button className="border-x dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-none md:border-l-0">
                Visibility
              </Button>
              <Button className="dark:bg-gray-700 dark:text-white dark:enabled:hover:bg-gray-600 md:rounded-l-none">
                All for flowbite.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
