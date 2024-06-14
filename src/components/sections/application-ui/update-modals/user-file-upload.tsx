import { useState } from "react";
import Image from "next/image";

import {
  HiArrowsExpand,
  HiCalendar,
  HiCode,
  HiCog,
  HiDownload,
  HiEmojiHappy,
  HiLocationMarker,
  HiPaperClip,
  HiTrash,
  HiUpload,
  HiViewList,
} from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function UpdateUserModalFileUpload() {
  const [userStatus, setUserStatus] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mx-auto">Update user</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5 md:min-w-[40rem]">
        <ScrollArea className="h-[40rem] overflow-hidden">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
            <h3 className="text-lg font-semibold">Update user</h3>
          </div>
          <form action="#">
            <div className="mb-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName" className="mb-2 block">
                  First Name
                </Label>
                <Input
                  defaultValue="Leslie"
                  id="firstName"
                  name="firstName"
                  placeholder="Leslie"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="mb-2 block">
                  Last Name
                </Label>
                <Input
                  defaultValue="Livingston"
                  id="lastName"
                  name="lastName"
                  placeholder="Livingston"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Email
                </Label>
                <Input
                  defaultValue="leslie@company.com"
                  id="email"
                  name="email"
                  placeholder="bonnie@company.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <Label
                  htmlFor="user-permissions"
                  className="mb-2 inline-flex items-center"
                >
                  User Permissions
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <button className="ml-1">
                          <svg
                            aria-hidden
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 cursor-pointer text-gray-400 hover:text-gray-900"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Details</span>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <Text>
                          User permissions, part of the overall user management
                          process, are access granted to users to specific
                          resources such as files, applications, networks, or
                          devices.
                        </Text>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Select name="user-permissions">
                  <SelectTrigger>
                    <SelectValue placeholder="Operational" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "OP", label: "Operational" },
                      { value: "NOP", label: "Non Operational" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="password" className="mb-2 block">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="•••••••••"
                  required
                  type="password"
                />
              </div>
              <div>
                <Label htmlFor="confirm-password" className="mb-2 block">
                  Confirm password
                </Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="•••••••••"
                  required
                  type="password"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="biography" className="mb-2 block">
                  Biography
                </Label>
                <div className="w-full rounded-lg border">
                  <div className="flex items-center justify-between border-b px-3 py-2">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x">
                      <div className="flex items-center space-x-1 sm:pr-4">
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <HiPaperClip className="size-5" />
                          <span className="sr-only">Attach file</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <HiLocationMarker className="size-5" />
                          <span className="sr-only">Embed map</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <HiUpload className="size-5" />
                          <span className="sr-only">Upload image</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <HiCode className="size-5" />
                          <span className="sr-only">Format code</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <HiEmojiHappy className="size-5" />
                          <span className="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <HiViewList className="size-5" />
                          <span className="sr-only">Add list</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <HiCog className="size-5" />
                          <span className="sr-only">Settings</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <HiCalendar className="size-5" />
                          <span className="sr-only">Timeline</span>
                        </button>
                        <button
                          type="button"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <HiDownload className="size-5" />
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <button
                            type="button"
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto"
                          >
                            <HiArrowsExpand className="size-5" />
                            <span className="sr-only">Full screen</span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <Text>Show full screen</Text>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="rounded-b-lg px-4 py-2">
                    <Textarea
                      id="biography"
                      placeholder="Write your biography..."
                      required
                      rows={8}
                      className="border-0 px-0 text-sm focus:ring-0"
                    >
                      👨‍💻Full-stack web developer. Open-source contributor.
                    </Textarea>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label className="mb-2 block" htmlFor="file_input">
                  Upload avatar
                </Label>
                <div className="w-full items-center sm:flex">
                  <Image
                    width={100}
                    height={100}
                    alt="Helene avatar"
                    src="https://github.com/shadcn.png"
                    className="mb-4 size-20 rounded-full sm:mb-0 sm:mr-4"
                  />
                  <div className="w-full">
                    <Input
                      className="w-full cursor-pointer text-sm focus:outline-none"
                      aria-describedby="file_input_help"
                      id="file_input"
                      type="file"
                    />
                    <Text
                      className="mb-3 mt-1 text-xs font-normal"
                      id="file_input_help"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </Text>
                    <div className="flex items-center space-x-2.5">
                      <Button className="inline-flex text-xs">
                        <HiUpload className="-ml-1 mr-1 size-4" />
                        Upload new picture
                      </Button>
                      <Button
                        variant={"outline"}
                        className="inline-flex text-xs"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Label className="mb-2 block" htmlFor="role">
                  Assign Role
                </Label>
                <div className="space-y-4 sm:flex sm:space-y-0">
                  <div className="mr-4 flex items-center">
                    <Checkbox id="inline-checkbox" name="role" />
                    <Label
                      htmlFor="inline-checkbox"
                      className="ml-2 text-sm font-medium"
                    >
                      Administrator
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox id="inline-2-checkbox" name="role" />
                    <Label
                      htmlFor="inline-2-checkbox"
                      className="ml-2 text-sm font-medium"
                    >
                      Member
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox
                      defaultChecked
                      id="inline-checked-checkbox"
                      name="role"
                    />
                    <Label
                      htmlFor="inline-checked-checkbox"
                      className="ml-2 text-sm font-medium"
                    >
                      Viewer
                    </Label>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2">Status</div>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={userStatus}
                    id="status"
                    name="status"
                    onCheckedChange={() => setUserStatus(!userStatus)}
                  />
                  {userStatus ? "Active" : "Inactive"}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DialogClose asChild>
                <Button type="submit" className="text-sm">
                  Update user
                </Button>
              </DialogClose>
              <Button
                variant={"outline"}
                className="border-red-600 px-5 py-2.5 text-red-500 hover:bg-red-600 hover:text-white"
              >
                <HiTrash className="-ml-1 mr-1 size-5" />
                Delete
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
