import { CalendarIcon, ClockIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  HiArrowsExpand,
  HiCode,
  HiCog,
  HiDocumentDuplicate,
  HiDownload,
  HiEmojiHappy,
  HiLocationMarker,
  HiPaperClip,
  HiPhotograph,
  HiTrash,
  HiX,
} from "react-icons/hi";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

export function AdvancedUpdateEventModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mx-auto">Update event</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5 md:min-w-[55rem] lg:min-w-[60rem]">
        <div className="mb-2 flex items-center justify-between pb-4">
          <h3 className="text-lg font-semibold">Update event</h3>
        </div>
        <form action="#">
          <div className="mb-4 grid gap-4 sm:mb-6 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium"
                >
                  Title
                </Label>
                <Input
                  defaultValue="The 4th Digital Tranformation"
                  id="title"
                  name="title"
                  placeholder="Ex. Meeting with Adam"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium"
                >
                  Location
                </Label>
                <div className="relative flex items-center">
                  <HiLocationMarker className="absolute left-2 size-5 text-gray-500" />
                  <Input
                    defaultValue="New York, USA"
                    className="pl-8"
                    id="location"
                    name="location"
                    placeholder="Ex. Florida, USA"
                  />
                </div>
              </div>
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="relative flex items-center">
                      <CalendarIcon className="absolute left-3 size-4" />
                      <Input className="pl-8" placeholder="26/11/22" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <time
                dateTime="2022-04-22 04:30"
                className="flex text-sm text-gray-500"
              >
                Thursday, April 22
                <span className="ml-2 font-semibold">04:30 - 05:30</span>
              </time>
              <div className="items-center sm:flex sm:space-x-4">
                <div className="mb-4 flex space-x-[-20px] sm:mb-0 [&_img]:ring-white">
                  <Avatar>
                    <AvatarImage
                      alt="Helene Engels"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>HE</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage
                      alt="Robert Brown"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>RB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage
                      alt="Bonnie Green"
                      src="https://github.com/shadcn.png"
                    />
                    <AvatarFallback>BG</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>+9</AvatarFallback>
                  </Avatar>
                </div>
                <Button
                  variant={"outline"}
                  className="mr-3 inline-flex text-xs hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-gray-100"
                >
                  <PlusIcon className="-ml-1 mr-1 size-4" />
                  Add member
                </Button>
                <Button
                  variant={"outline"}
                  className="mr-3 inline-flex text-xs hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-gray-100"
                >
                  <ClockIcon className="-ml-1 mr-1 size-4" />
                  Find a time
                </Button>
              </div>
              <div>
                <Label
                  className="mb-2 block text-sm font-medium"
                  htmlFor="guest-permission-checkbox"
                >
                  Guest Permissions
                </Label>
                <div className="space-y-4 sm:flex sm:space-y-0">
                  <div className="mr-4 flex items-center">
                    <Checkbox
                      id="inline-checkbox"
                      name="guest-permission-checkbox"
                    />
                    <Label
                      htmlFor="inline-checkbox"
                      className="ml-2 text-sm font-medium"
                    >
                      Modify event
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox
                      id="inline-2-checkbox"
                      name="guest-permission-checkbox"
                    />
                    <Label
                      htmlFor="inline-2-checkbox"
                      className="ml-2 text-sm font-medium"
                    >
                      Invite others
                    </Label>
                  </div>
                  <div className="mr-4 flex items-center">
                    <Checkbox
                      defaultChecked
                      id="inline-checked-checkbox"
                      name="guest-permission-checkbox"
                    />
                    <Label
                      htmlFor="inline-checked-checkbox"
                      className="ml-2 text-sm font-medium"
                    >
                      See guest list
                    </Label>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center">
                  <button className="rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50">
                    Join with Google Meet
                  </button>
                  <div className="ml-3 flex">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <button className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-900">
                            <HiCog className="size-5" />
                            <span className="sr-only">Call options</span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <Text>Video call options</Text>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <button className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-900">
                            <HiDocumentDuplicate className="size-5" />
                            <span className="sr-only">
                              Copy conference info
                            </span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <Text>Copy conference info</Text>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <button className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-900">
                            <HiX className="size-5" />
                            <span className="sr-only">Remove conference</span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <Text>Remove conference</Text>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <Text className="text-xs text-gray-500">
                  meet.google.com/asd-fgh-jfgu
                </Text>
                <Text className="text-xs text-gray-500">
                  Up to 100 guest connections
                </Text>
              </div>
              <div>
                <div className="mb-2 block text-sm font-medium">Tag Color</div>
                <div className="flex items-center space-x-2">
                  <button className="size-6 rounded-sm bg-purple-500"></button>
                  <button className="size-6 rounded-sm bg-indigo-500"></button>
                  <button className="size-6 rounded-sm bg-primary-600"></button>
                  <button className="size-6 rounded-sm bg-pink-500"></button>
                  <button className="size-6 rounded-sm bg-teal-400"></button>
                  <button className="size-6 rounded-sm bg-green-400"></button>
                  <button className="size-6 rounded-sm bg-yellow-300"></button>
                  <button className="size-6 rounded-sm bg-orange-400"></button>
                  <button className="size-6 rounded-sm bg-red-500"></button>
                </div>
              </div>
            </div>
            <div>
              <Label
                htmlFor="description"
                className="mb-2 block text-sm font-medium"
              >
                Description
              </Label>
              <div className="mb-4 w-full rounded-lg border">
                <div className="flex items-center justify-between border-b px-3 py-2">
                  <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x">
                    <div className="flex items-center space-x-1 sm:pr-4">
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <HiPaperClip className="size-5" />

                        <span className="sr-only">Attach file</span>
                      </button>
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <HiLocationMarker className="size-5" />
                        <span className="sr-only">Embed map</span>
                      </button>
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <HiPhotograph className="size-5" />
                        <span className="sr-only">Upload image</span>
                      </button>
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <HiCode className="size-5" />
                        <span className="sr-only">Format code</span>
                      </button>
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <HiEmojiHappy className="size-5" />

                        <span className="sr-only">Add emoji</span>
                      </button>
                    </div>
                    <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <CalendarIcon className="size-5" />
                        <span className="sr-only">Timeline</span>
                      </button>
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <HiDownload className="size-5" />
                        <span className="sr-only">Download</span>
                      </button>
                    </div>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 sm:ml-auto">
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
                    id="description"
                    name="description"
                    placeholder="Write event description..."
                    required
                    rows={8}
                    className="block w-full border-0 px-0 text-sm focus:ring-0"
                  >
                    The 4th Digital Transformation and Industry 4.0 Free Online
                    Conference Organized by ModernUI and Themesberg, Live on
                    Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom
                    Webinars
                  </Textarea>
                </div>
              </div>
              <div>
                <div className="mb-2 block text-sm font-medium">Reminder</div>
                <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                  <div className="w-full">
                    <Label htmlFor="reminder-type" className="sr-only">
                      Reminder type
                    </Label>
                    <Select name="reminder-type">
                      <SelectTrigger>
                        <SelectValue placeholder="Notification" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          { value: "NT", label: "Notification" },
                          { value: "AL", label: "Alarm" },
                          { value: "EM", label: "Email" },
                          { value: "SM", label: "SMS" },
                        ].map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full">
                    <Label htmlFor="reminder-counter" className="sr-only">
                      Counter
                    </Label>
                    <Input
                      defaultValue="4"
                      id="reminder-counter-days"
                      name="reminder-counter"
                      placeholder="Ex. 12"
                      required
                      type="number"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="reminder-length-type" className="sr-only">
                      Length
                    </Label>
                    <Select name="reminder-length-type">
                      <SelectTrigger>
                        <SelectValue placeholder="Days" />
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          { value: "DY", label: "Days" },
                          { value: "WE", label: "Weeks" },
                          { value: "MO", label: "Months" },
                        ].map((item, index) => (
                          <SelectItem key={index} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size={"lg"} type="submit" className="text-sm">
              Update event
            </Button>
            <Button
              variant={"outline"}
              size={"lg"}
              className="border-red-600 px-5 py-2.5 hover:bg-red-600 hover:text-white"
            >
              <HiTrash className="-ml-1 mr-1 size-5" />
              Delete
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
