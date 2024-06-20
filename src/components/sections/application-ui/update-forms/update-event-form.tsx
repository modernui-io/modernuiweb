import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import {
  HiArrowsExpand,
  HiCalendar,
  HiClock,
  HiCode,
  HiCog,
  HiDocumentDuplicate,
  HiDownload,
  HiEmojiHappy,
  HiLocationMarker,
  HiPaperClip,
  HiPhotograph,
  HiPlus,
  HiX,
} from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { z } from "zod";

import * as MuiLayout from "~/components/layouts";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import { Form, FormControl, FormField, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
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

const formSchema = z.object({
  title: z.string().optional(),
  location: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  guests: z.array(z.string()).optional(),
  allDay: z.boolean(),
  permissions: z
    .object({
      modifyEvent: z.boolean(),
      inviteOthers: z.boolean(),
      seeGuestList: z.boolean(),
    })
    .optional(),
  googleMeetLink: z
    .string()
    .url({
      message: "Please enter a valid URL for the Google Meet link.",
    })
    .optional(),
  tagColor: z.string().optional(),
  description: z
    .string()
    .min(10, {
      message: "Please enter a description.",
    })
    .optional(),
  time: z.enum(["DNR", "D", "WW", "EW", "CU"]).optional(),
  reminderType: z.enum(["NO", "AL", "EM", "SM"]),
  reminderCounter: z.number().optional(),
  reminderLengthType: z.enum(["DA", "WE", "MO"]).optional(),
});

export function UpdateEventForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "The 4th Digital Transformation",
      startDate: "10/11/2023",
      endDate: "06/11/2024",
      guests: [],
      allDay: true,
      time: "D",
      permissions: {
        modifyEvent: false,
        inviteOthers: false,
        seeGuestList: true,
      },
      googleMeetLink: "",
      tagColor: "",
      description:
        "The 4th Digital Transformation and Industry 4.0 Free Online Conference Organized by Themesberg, Live on Saturday 26th Nov at 02:00 pm GMT | 04:00 pm EET on Zoom Webinars",
      reminderType: "NO",
      reminderCounter: 4,
      reminderLengthType: "DA",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto px-4 py-8 lg:py-16">
        <Text level={"xl"} className="mb-4 font-bold">
          Update event
        </Text>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} action="#">
            <div className="gap-4 sm:mb-2 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
              <div className="mb-4 space-y-4 xl:col-span-2">
                <div>
                  <Label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium"
                  >
                    Title
                  </Label>
                  <Input
                    type="text"
                    id="title"
                    className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Add title here"
                    required
                    {...form.register("title")}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="date_start"
                    className="mb-2 block text-sm font-medium"
                  >
                    Select Date
                  </Label>
                  <div className="items-center space-y-4 md:flex md:space-y-0">
                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="relative w-full">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <HiCalendar className="size-5 text-muted-foreground" />
                          </div>
                          <Input
                            id="date_start"
                            type="text"
                            className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="Select date start"
                            {...form.register("startDate")}
                          />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          initialFocus
                          {...form.register("startDate")}
                        />
                      </PopoverContent>
                    </Popover>
                    <span className="hidden text-muted-foreground md:mx-4 md:flex">
                      to
                    </span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="relative w-full">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <HiCalendar className="size-5 text-muted-foreground" />
                          </div>
                          <Input
                            id="date_end"
                            type="text"
                            className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 pl-10 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="Select date end"
                            {...form.register("endDate")}
                          />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          initialFocus
                          {...form.register("endDate")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex w-20 items-center">
                    <Checkbox
                      id="event-duration-checkbox"
                      className="size-4 rounded border-white/70 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted dark:ring-offset-muted-foreground/20 dark:focus:ring-primary-600"
                      {...form.register("allDay")}
                      defaultChecked={true}
                    />
                    <Label
                      htmlFor="event-duration-checkbox"
                      className="ml-2 text-sm font-medium dark:text-white/70"
                    >
                      All day
                    </Label>
                  </div>
                  <Label htmlFor="time" className="sr-only">
                    Select an option
                  </Label>
                  <Select {...form.register("time")}>
                    <SelectTrigger className="w-48 rounded-lg border border-white/70 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:border-muted dark:bg-muted dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500">
                      <SelectValue placeholder="Does not Repeat" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        { value: "DNR", label: "Does not Repeat" },
                        { value: "D", label: "Daily" },
                        { value: "WW", label: "Weekly on Wednesday" },
                        { value: "EW", label: "Every weekday" },
                        { value: "CU", label: "Custom" },
                      ].map((item, index) => (
                        <SelectItem key={index} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="mb-2 flex items-center">
                    <Button className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-4">
                      Join with Google Meet
                    </Button>
                    <div className="ml-3 flex">
                      {[
                        {
                          icon: <HiCog className="size-5" />,
                          text: "Video call options",
                          span: "Call options",
                        },
                        {
                          icon: <HiDocumentDuplicate className="size-5" />,
                          text: "Copy conference info",
                          span: "Copy conference info",
                        },
                        {
                          icon: <HiX className="size-5" />,
                          text: "Remove conference",
                          span: "Remove conference",
                        },
                      ].map((tooltip, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link href="#">
                                <Button className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-muted-foreground hover:bg-gray-200 hover:text-gray-900">
                                  {tooltip.icon}
                                  <span className="sr-only">
                                    {tooltip.span}
                                  </span>
                                </Button>
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <Text className="text-primary-foreground">
                                {tooltip.text}
                              </Text>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>
                  <Text level={"xs"} className="text-muted-foreground">
                    meet.google.com/asd-fgh-jfgu
                  </Text>
                  <Text level={"xs"} className="text-muted-foreground">
                    Up to 100 guest connections
                  </Text>
                </div>

                <div>
                  <div className="mb-2 block text-sm font-medium">
                    Tag Color
                  </div>
                  <div className="flex items-center space-x-2">
                    {[
                      "bg-purple-500",
                      "bg-indigo-500",
                      "bg-primary-500",
                      "bg-pink-500",
                      "bg-teal-500",
                      "bg-green-400",
                      "bg-yellow-300",
                      "bg-orange-400",
                      "bg-red-500",
                    ].map((color, index) => (
                      <button
                        key={index}
                        className={`size-6 rounded-sm ${color}`}
                      ></button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium"
                  >
                    Description
                  </Label>
                  <div className="mb-4 w-full rounded-lg border border-muted-foreground/10 bg-secondary/30 dark:bg-muted-foreground/10">
                    <div className="flex items-center justify-between border-b px-3 py-2 ">
                      <div className="flex flex-wrap items-center divide-muted-foreground/10 dark:divide-muted sm:divide-x">
                        <div className="flex items-center space-x-1 sm:pr-4">
                          {[
                            {
                              icon: <HiPaperClip className="size-5" />,
                              label: "Attach File",
                            },
                            {
                              icon: <HiLocationMarker className="size-5" />,
                              label: "Embed File",
                            },
                            {
                              icon: <HiPhotograph className="size-5" />,
                              label: "Upload Image",
                            },
                            {
                              icon: <HiCode className="size-5" />,
                              label: "Format Code",
                            },
                            {
                              icon: <HiEmojiHappy className="size-5" />,
                              label: "Add Emoji",
                            },
                          ].map((item, index) => (
                            <Link key={index} href="#">
                              <Button
                                variant={"ghost"}
                                className="cursor-pointer rounded p-2
                                  text-muted-foreground
                                  hover:bg-muted-foreground/10
                                  dark:hover:text-primary-foreground"
                              >
                                {item.icon}
                                <span className="sr-only">{item.label}</span>
                              </Button>
                            </Link>
                          ))}
                        </div>
                        <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                          {[
                            {
                              icon: <HiCalendar className="size-5" />,
                              label: "Timeline",
                            },
                            {
                              icon: <HiDownload className="size-5" />,
                              label: "Download",
                            },
                          ].map((item, index) => (
                            <Link key={index} href="#">
                              <Button
                                variant={"ghost"}
                                className="cursor-pointer rounded p-2
                                  text-muted-foreground
                                  hover:bg-muted-foreground/10
                                  dark:hover:text-primary-foreground"
                              >
                                {item.icon}
                                <span className="sr-only">{item.label}</span>
                              </Button>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <Button
                        variant={"ghost"}
                        data-tooltip-target="tooltip-fullscreen"
                        className="cursor-pointer rounded p-2 text-muted-foreground hover:bg-muted-foreground/10 dark:hover:text-white sm:ml-auto"
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HiArrowsExpand className="size-5" />
                            </TooltipTrigger>
                            <TooltipContent className="w-auto rounded-lg px-3 py-2 text-sm font-normal text-primary-foreground shadow-sm dark:bg-muted">
                              Show Full Screen
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <span className="sr-only">Full screen</span>
                      </Button>
                    </div>
                    <Textarea
                      rows={8}
                      id="description"
                      className="block w-full rounded-lg rounded-t-none border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Write a description here"
                      required
                      {...form.register("description")}
                    ></Textarea>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block text-sm font-medium">Reminder</div>
                  <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
                    <div className="w-full">
                      <Label htmlFor="reminder-type" className="sr-only">
                        Reminder type
                      </Label>

                      <Select {...form.register("reminderType")}>
                        <SelectTrigger className="w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                          <SelectValue placeholder="Notification" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            { value: "NO", label: "Notification" },
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
                        type="number"
                        id="reminder-counter-days"
                        className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="1"
                        required
                        {...form.register("reminderCounter")}
                      />
                    </div>
                    <div className="w-full">
                      <Label htmlFor="reminder-length-type" className="sr-only">
                        Length
                      </Label>
                      <Select {...form.register("reminderLengthType")}>
                        <SelectTrigger className="w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                          <SelectValue placeholder="Days" />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            { value: "DA", label: "Days" },
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
              <div className="mb-4 space-y-4">
                <div>
                  <Label
                    htmlFor="add-guests"
                    className="mb-2 block text-sm font-medium"
                  >
                    Add guests
                  </Label>
                  <div className="relative">
                    <Input
                      type="text"
                      id="add-guests"
                      className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-3 pl-4 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Add guest email"
                      required
                      {...form.register("guests")}
                    />
                    <Button
                      type="button"
                      className="absolute bottom-0 right-2.5 mb-1 inline-flex h-7 items-center rounded-lg px-3 py-1.5 text-xs font-medium text-primary-foreground focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800"
                    >
                      <HiPlus className="-ml-0.5 mr-0.5 size-4" />
                      Add
                    </Button>
                  </div>
                </div>
                <div className="items-center md:flex md:space-x-4">
                  <div className="mb-4 flex shrink-0 -space-x-4 md:mb-0">
                    <Avatar className="size-8 rounded-full border-2 border-white dark:border-muted-foreground/20">
                      <AvatarImage
                        alt="Robert Brown"
                        src="https://github.com/shadcn.png"
                      />
                      <AvatarFallback>RB</AvatarFallback>
                    </Avatar>
                    <Avatar className="size-8 rounded-full border-2 border-white dark:border-muted-foreground/20">
                      <AvatarImage
                        alt="Helene Engels"
                        src="https://github.com/shadcn.png"
                      />
                      <AvatarFallback>HE</AvatarFallback>
                    </Avatar>
                    <Avatar className="size-8 rounded-full border-2 border-white dark:border-muted-foreground/20">
                      <AvatarImage
                        alt="Bonnie Green"
                        src="https://github.com/shadcn.png"
                      />
                      <AvatarFallback>BG</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback className="flex size-8 items-center justify-center rounded-full border-2 border-white text-xs font-medium text-primary-foreground dark:border-muted-foreground/20 dark:bg-muted dark:hover:bg-muted-foreground/70">
                        +9
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <Button className="inline-flex items-center rounded-lg border border-muted-foreground/10 bg-white px-3 py-2 text-xs font-medium text-black hover:bg-muted-foreground/10 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-muted-foreground/10 dark:border-muted dark:bg-muted-foreground/20 dark:text-muted-foreground dark:hover:bg-muted-foreground/70 dark:hover:text-white dark:focus:ring-muted-foreground/70">
                    <HiPlus className="-ml-0.5 mr-0.5 size-4" />
                    Add member
                  </Button>
                  <Button className="ml-2 inline-flex items-center rounded-lg border border-muted-foreground/10 bg-white px-3 py-2 text-xs font-medium text-black hover:bg-muted-foreground/10 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-muted-foreground/10 dark:border-muted dark:bg-muted-foreground/20 dark:text-muted-foreground dark:hover:bg-muted-foreground/70 dark:hover:text-white dark:focus:ring-muted-foreground/70 sm:ml-0">
                    <HiClock className="-ml-1 mr-1 size-4" />
                    Find a time
                  </Button>
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-medium">
                    Guest Permissions
                  </Label>
                  <div className="space-y-3">
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        id="guest-permission-1-checkbox"
                        className="size-4 rounded border-white/70 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted dark:ring-offset-muted-foreground/20 dark:focus:ring-primary-600"
                        {...form.register("permissions.modifyEvent")}
                      />
                      <Label className="ml-2 text-sm font-medium dark:text-white/70">
                        Modify event
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        id="guest-permission-2-checkbox"
                        className="size-4 rounded border-white/70 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted dark:ring-offset-muted-foreground/20 dark:focus:ring-primary-600"
                        {...form.register("permissions.inviteOthers")}
                      />
                      <Label className="ml-2 text-sm font-medium dark:text-white/70">
                        Invite others
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        id="guest-permission-3-checkbox"
                        defaultChecked={true}
                        className="size-4 rounded border-white/70 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted dark:ring-offset-muted-foreground/20 dark:focus:ring-primary-600"
                        {...form.register("permissions.seeGuestList")}
                      />
                      <Label className="ml-2 text-sm font-medium dark:text-white/70">
                        See guest list
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-72 items-center">
              <Button className="mx-auto ml-0 mt-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground">
                Update Event
              </Button>

              <Button
                variant={"outline"}
                className="mx-auto ml-0 mt-2 inline-flex items-center rounded-lg border-red-500 px-5 py-2.5 text-center text-sm font-medium text-red-500 hover:bg-red-500 hover:text-white"
              >
                <RiDeleteBin6Fill className="size-6" />
                Delete
              </Button>
            </div>
          </form>
        </Form>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
