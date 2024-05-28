import { useState } from "react";

import { CalendarIcon } from "@radix-ui/react-icons";
import {
  HiArrowsExpand,
  HiCalendar,
  HiCode,
  HiCog,
  HiDownload,
  HiEmojiHappy,
  HiLocationMarker,
  HiPaperClip,
  HiPhotograph,
  HiPlus,
  HiTrash,
  HiViewList,
} from "react-icons/hi";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

export function UpdateEventModal() {
  const [allDay, setAllDay] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mx-auto">Update event</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5">
        <div className="mb-2 flex items-center justify-between pb-4">
          <h3 className="text-lg font-semibold">Update event</h3>
        </div>
        <form action="#">
          <div className="mb-4 grid gap-4">
            <div>
              <Label htmlFor="title" className="mb-2 block text-sm font-medium">
                Title
              </Label>
              <Input
                name="title"
                id="title"
                value="The 4th Digital Transformation"
                className="block w-full rounded-lg border p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600"
                placeholder="Ex. Meeting with James"
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
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiLocationMarker className="size-5 text-gray-500" />
                </div>
                <Input
                  type="text"
                  id="location"
                  value="California, USA"
                  className="block w-full rounded-lg border p-2.5 pl-10 text-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Ex. Florida, USA"
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="description"
                className="mb-2 block text-sm font-medium"
              >
                Description
              </Label>
              <div className="w-full rounded-lg border border-gray-200">
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
                        <HiViewList className="size-5" />

                        <span className="sr-only">Add list</span>
                      </button>
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <HiCog className="size-5" />
                        <span className="sr-only">Settings</span>
                      </button>
                      <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900">
                        <HiCalendar className="size-5" />
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
                        <button
                          data-tooltip-target="tooltip-fullscreen"
                          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 sm:ml-auto"
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
                    id="description"
                    name="description"
                    placeholder="Write event description..."
                    required
                    rows={8}
                    className="border-0 px-0 text-sm focus:ring-0"
                  >
                    The 4th Digital Transformation and Industry 4.0 Free Online
                    Conference Organized by ModernUI and Themesberg, Live on
                    Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom
                    Webinars
                  </Textarea>
                </div>
              </div>
            </div>
            <div>
              <Label
                htmlFor="event-date"
                className="mb-2 block text-sm font-medium"
              >
                Select Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("justify-start text-left font-normal")}
                  >
                    <CalendarIcon className="mr-2 size-4" />
                    <span>Pick a date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                checked={allDay}
                id="all-day"
                name="all-day"
                onCheckedChange={() => setAllDay(!allDay)}
              />
              All day
            </div>
            <div className="flex items-center gap-x-3">
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
                className="mr-3 inline-flex border-gray-200 text-xs hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-gray-100"
              >
                <HiPlus className="-ml-1 mr-1 size-4" />
                Add guests
              </Button>
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
          <div className="flex items-center space-x-4">
            <Button size="lg" type="submit" className="text-sm">
              Update event
            </Button>
            <Button
              variant={"outline"}
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
