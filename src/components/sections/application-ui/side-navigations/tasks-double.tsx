import {
  HiCalendar,
  HiClipboardList,
  HiDotsHorizontal,
  HiInboxIn,
  HiPlus,
  HiSelector,
  HiShoppingBag,
  HiX,
} from "react-icons/hi";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";

export function TasksDoubleSideNavigation() {
  return (
    <>
      <aside
        id="sidebar-contacts"
        className="fixed right-0 top-0 z-40 h-full w-16 bg-background transition-transform sm:w-64"
        aria-label="Sidebar"
      >
        <div className="block h-full w-16 overflow-y-auto px-3 py-4 sm:hidden">
          <ul className="mb-4 space-y-2 border-b border-gray-200 pb-4 dark:border-gray-700">
            {[
              { icon: <HiCalendar className="size-6" />, label: "Calendar" },
              { icon: <HiClipboardList className="size-6" />, label: "Tasks" },
              { icon: <HiShoppingBag className="size-6" />, label: "Products" },
              { icon: <HiInboxIn className="size-6" />, label: "Inbox" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center rounded-lg p-2 text-gray-500 transition duration-75 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="flex items-center rounded-lg p-2 text-gray-500 transition duration-75 group-hover:text-white hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <HiDotsHorizontal className="size-5" />
            <span className="sr-only">Add new item</span>
          </a>
        </div>
        <div className="hidden h-full w-64 overflow-y-auto border-r border-gray-200 px-3 py-4 dark:border-gray-700 sm:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"ghost"}
                className="flex w-full items-center justify-between rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open user menu</span>
                <div className="flex items-center">
                  <img
                    src="https://github.com/shadcn.png"
                    className="mr-3 size-8 rounded-full"
                    alt="Bonnie avatar"
                  />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                      Tasks
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Bonnie Green
                    </div>
                  </div>
                </div>
                <HiSelector className="size-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div
                id="dropdownUserName"
                className="z-10 w-60 divide-y divide-gray-100 rounded shadow dark:divide-gray-600"
                data-popper-placement="bottom"
              >
                <a
                  href="#"
                  className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <HiCalendar className="mr-3 size-8 text-gray-400" />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                      Calendar
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      My calendar
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <HiClipboardList className="mr-3 size-8 text-gray-400" />
                  <div className="text-left">
                    <div className="mb-0.5 font-semibold leading-none text-gray-900 dark:text-white">
                      Collections
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      My collections
                    </div>
                  </div>
                </a>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="my-4 flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              <HiPlus className="mr-1 size-5" />
              Add a task
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <HiDotsHorizontal className="size-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div
                  id="dropdown"
                  className="z-10 w-44 divide-y divide-gray-100 rounded shadow"
                >
                  <ul
                    className="py-1 text-sm"
                    aria-labelledby="dropdownDefault"
                  >
                    {[
                      "Mark all as done",
                      "Remove all items",
                      "Add to my day",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ul className="space-y-4">
            {[
              "Message from Payoneer’s Account Approval Department",
              "Develop and update Bergside Management System",
              "Talk with newcomers about our main office",
              "Design and code new charts for ModernUI library",
            ].map((task, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <Checkbox id={`task-${index + 1}`} />
                  <Label className="ml-2 text-sm text-gray-500 dark:text-gray-300">
                    {task}
                  </Label>
                </div>
              </li>
            ))}
          </ul>
          <div className="my-4 flex items-center justify-between border-t border-gray-200 pt-4 text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
            Completed
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="inline-flex rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <HiDotsHorizontal className="size-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div
                  id="dropdownCompleted"
                  className="z-10 w-44 divide-y divide-gray-100 rounded shadow"
                >
                  <ul
                    className="py-1 text-sm"
                    aria-labelledby="dropdownDefaultCompleted"
                  >
                    {[
                      "Mark all as done",
                      "Remove all items",
                      "Add to my day",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ul className="space-y-4">
            <li>
              <div className="flex items-center">
                <Checkbox id="completed-task-1" value="" checked />
                <Label className="ml-2 text-sm text-gray-500 line-through dark:text-gray-300">
                  Message from Payoneer’s Account Approval Department
                </Label>
              </div>
            </li>
          </ul>
          <div className="absolute bottom-0 z-20 mr-3.5 justify-center">
            <div
              id="alert-update"
              className="mb-3 rounded-lg border border-gray-200 bg-green-50 p-4 dark:border-gray-600 dark:bg-green-900"
              role="alert"
            >
              <div className="mb-3 flex items-center justify-between">
                <Badge className="mr-2 bg-green-100 text-green-800 dark:bg-green-200">
                  Task completed
                </Badge>
                <Button variant={"ghost"} className="px-0">
                  <span className="sr-only">Dismiss</span>
                  <HiX className="size-4" />
                </Button>
              </div>
              <Text className="mb-3 text-sm text-green-700 dark:text-white">
                You have successfully completed your task.
              </Text>
              <Button className="px-0" variant={"ghost"}>
                Undo
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
