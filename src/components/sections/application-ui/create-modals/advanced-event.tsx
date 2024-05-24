import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import {
  HiArrowsExpand,
  HiCalendar,
  HiClock,
  HiCode,
  HiDownload,
  HiEmojiHappy,
  HiLocationMarker,
  HiPaperClip,
  HiPhotograph,
  HiPlus,
} from "react-icons/hi";
import { z } from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
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
import { cn } from "~/lib/utils";

const formSchema = z.object({
  title: z.string().optional(),
  location: z.string().optional(),
  date: z.string().optional(),
  guests: z.array(z.string()).optional(),
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
  reminderType: z.string().optional(),
  reminderCounter: z.number().optional(),
  reminderLengthType: z.string().optional(),
});

export function AdvancedCreateEventModal() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      location: "",
      date: new Date().toString(),
      guests: [],
      permissions: {
        modifyEvent: false,
        inviteOthers: false,
        seeGuestList: true,
      },
      googleMeetLink: "",
      tagColor: "",
      description: "",
      reminderType: "",
      reminderCounter: 1,
      reminderLengthType: "Days",
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
      <DialogContent className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5 md:min-w-[55rem] lg:min-w-[60rem]">
        <div className="mb-2 flex items-center justify-between pb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add new event
          </h3>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 grid gap-4 sm:mb-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="title"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </Label>
                  <Input
                    className="dark:border-gray-500"
                    id="title"
                    placeholder="Add title here"
                    required
                    {...form.register("title")}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </Label>
                  <div className="relative flex items-center">
                    <HiLocationMarker className="absolute left-2 size-5 text-gray-500 dark:text-gray-400" />
                    <Input
                      className="pl-7 dark:border-gray-500"
                      id="location"
                      placeholder="Enter location"
                      {...form.register("location")}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="location"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "justify-start text-left font-normal dark:bg-gray-600 dark:text-white",
                        )}
                      >
                        <CalendarIcon className="mr-2 size-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        initialFocus
                        {...form.register("date")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <time
                  dateTime="2022-04-22 04:30"
                  className="flex text-sm text-gray-500 dark:text-gray-400"
                >
                  Thursday, April 22
                  <span className="ml-2 font-semibold text-gray-900 dark:text-white">
                    04:30 - 05:30
                  </span>
                </time>
                <div className="items-center sm:flex sm:space-x-4">
                  <div className="mb-4 flex space-x-[-20px] sm:mb-0 [&_img]:ring-white dark:[&_img]:ring-0">
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
                  <Button
                    variant={"outline"}
                    className="mr-3 inline-flex text-xs text-gray-400 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:enabled:hover:bg-gray-700 sm:mr-0"
                  >
                    <HiPlus className="-ml-1 mr-1 size-4" />
                    Add member
                  </Button>
                  <Button
                    variant={"outline"}
                    className="mr-3 inline-flex text-xs text-gray-400 hover:text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:enabled:hover:bg-gray-700 sm:mr-0"
                  >
                    <HiClock className="-ml-1 mr-1 size-4" />
                    Find a time
                  </Button>
                </div>
                <div>
                  <Label
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="guest-permission-checkbox"
                  >
                    Guest Permissions
                  </Label>
                  <div className="space-y-4 sm:flex sm:space-y-0">
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        id="inline-checkbox"
                        {...form.register("permissions.modifyEvent")}
                      />
                      <Label
                        htmlFor="inline-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Modify event
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        id="inline-2-checkbox"
                        {...form.register("permissions.inviteOthers")}
                      />
                      <Label
                        htmlFor="inline-2-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Invite others
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        defaultChecked
                        {...form.register("permissions.seeGuestList")}
                      />
                      <Label
                        htmlFor="inline-checked-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        See guest list
                      </Label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center">
                    <button className="rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50">
                      Add Google Meet video conference
                    </button>
                  </div>
                </div>
                <div>
                  <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Tag Color
                  </div>
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
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </Label>
                <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-gray-600">
                  <div className="flex items-center justify-between border-b px-3 py-2 dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
                      <div className="flex items-center space-x-1 sm:pr-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiPaperClip className="size-5" />
                          <span className="sr-only">Attach file</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiLocationMarker className="size-5" />
                          <span className="sr-only">Embed map</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiPhotograph className="size-5" />
                          <span className="sr-only">Upload image</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCode className="size-5" />
                          <span className="sr-only">Format code</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiEmojiHappy className="size-5" />
                          <span className="sr-only">Add emoji</span>
                        </button>
                      </div>
                      <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiCalendar className="size-5" />
                          <span className="sr-only">Timeline</span>
                        </button>
                        <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                          <HiDownload className="size-5" />
                          <span className="sr-only">Download</span>
                        </button>
                      </div>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto">
                            <HiArrowsExpand className="size-5" />
                            <span className="sr-only">Full screen</span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Show full screen</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="rounded-b-lg bg-gray-50 px-4 py-2 dark:bg-gray-700">
                    <Textarea
                      id="description"
                      placeholder="Write a description here"
                      required
                      rows={8}
                      className="block w-full border-0 bg-gray-50 px-0 text-sm text-gray-800 focus:ring-0 dark:border-gray-500 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                      {...form.register("description")}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Reminder
                  </div>
                  <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                    <div className="w-full">
                      <Label htmlFor="reminder-type" className="sr-only">
                        Reminder type
                      </Label>
                      <Select {...form.register("reminderType")}>
                        <SelectTrigger className="dark:bg-gray-600 dark:text-white">
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
                      <FormField
                        control={form.control}
                        name="reminderCounter"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                className="dark:border-gray-500"
                                id="reminder-counter-days"
                                placeholder="1"
                                required
                                type="number"
                                onChange={(e) =>
                                  field.onChange(e.target.valueAsNumber)
                                }
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-full">
                      <Label htmlFor="reminder-length-type" className="sr-only">
                        Length
                      </Label>
                      <Select {...form.register("reminderLengthType")}>
                        <SelectTrigger className="dark:bg-gray-600 dark:text-white">
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
              <Button size="lg" type="submit" className="text-sm">
                <HiPlus className="mr-2 size-4" />
                Add event
              </Button>
              <DialogClose asChild>
                <Button variant={"outline"} className="text-sm">
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
