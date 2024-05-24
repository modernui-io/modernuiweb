import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
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
  HiViewList,
} from "react-icons/hi";
import { z } from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Form } from "~/components/ui/form";
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

const formSchema = z.object({
  title: z.string(),
  location: z.string(),
  description: z.string(),
  date: z.string(),
  allDay: z.boolean(),
  category: z.enum(["EL", "AL", "PC", "GA", "PH"]),
});

export function CreateEventModal() {
  const [allDay, setAllDay] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      description: "",
      date: "",
      allDay: false,
      category: "AL",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create event</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg p-4 shadow sm:p-5">
        <div className="mb-2 flex items-center justify-between pb-4">
          <h3 className="text-lg font-semibold">Add new event</h3>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 grid gap-4">
              <div>
                <Label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium"
                >
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Add title here"
                  required
                  {...form.register("title")}
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
                    id="location"
                    placeholder="Enter location"
                    required
                    className="pl-8"
                    {...form.register("location")}
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
                    <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                      <div className="flex items-center space-x-1 sm:pr-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiPaperClip className="size-5" />
                          <span className="sr-only">Attach file</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiLocationMarker className="size-5" />
                          <span className="sr-only">Embed map</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiPhotograph className="size-5" />
                          <span className="sr-only">Upload image</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCode className="size-5" />
                          <span className="sr-only">Format code</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiEmojiHappy className="size-5" />
                          <span className="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiViewList className="size-5" />
                          <span className="sr-only">Add list</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCog className="size-5" />
                          <span className="sr-only">Settings</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCalendar className="size-5" />
                          <span className="sr-only">Timeline</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiDownload className="size-5" />
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            data-tooltip-target="tooltip-fullscreen"
                            className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto"
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
                      placeholder="Write a description here"
                      required
                      rows={8}
                      className="border-0 px-0 text-sm focus:ring-0"
                      {...form.register("description")}
                    />
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
                    <Calendar
                      {...form.register("date")}
                      mode="single"
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex items-center gap-3">
                <Switch
                  checked={allDay}
                  id="all-day"
                  onCheckedChange={() => setAllDay(!allDay)}
                  {...form.register("allDay")}
                />
                <Text>All day</Text>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="mb-4 flex space-x-[-20px] sm:mb-0 [&_img]:ring-white">
                  <Avatar>
                    <AvatarImage
                      alt="Helene Engels"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                    />
                    <AvatarFallback>HE</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage
                      alt="Robert Brown"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                    />
                    <AvatarFallback>RB</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage
                      alt="Bonnie Green"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    />
                    <AvatarFallback>BG</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>+9</AvatarFallback>
                  </Avatar>
                </div>
                <Button variant={"outline"} className="inline-flex text-xs">
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
              <Button type="submit" className="inline-flex w-full text-sm">
                <HiPlus className="mr-2 size-4" />
                Add event
              </Button>
              <DialogClose asChild>
                <Button
                  variant={"outline"}
                  className="inline-flex w-full text-sm"
                >
                  Discard
                </Button>
              </DialogClose>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
