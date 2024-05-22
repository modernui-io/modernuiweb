import { HiUserAdd } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";

export function TableHeaderWithTextAndButton() {
  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <div className="flex-row items-center justify-between space-y-3 p-4 sm:flex sm:space-x-4 sm:space-y-0">
            <div>
              <h5 className="mr-3 font-semibold">Flowbite Users</h5>
              <Text className="text-gray-500">
                Manage all your existing users or add a new one
              </Text>
            </div>
            <Button>
              <HiUserAdd className="-ml-1 mr-2 size-3.5" />
              Add new user
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
