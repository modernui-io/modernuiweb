import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { HiCalendar, HiLocationMarker, HiPlus } from "react-icons/hi";
import { z } from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Textarea } from "~/components/ui/textarea";

const formSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  location: z.string().optional(),
  guests: z.array(z.string()),
  permissions: z
    .object({
      modifyEvent: z.boolean(),
      inviteOthers: z.boolean(),
      seeGuestList: z.boolean(),
    })
    .optional(),
});

export function CreateEventDrawer() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      location: "",
      guests: [],
      permissions: {
        modifyEvent: false,
        inviteOthers: false,
        seeGuestList: true,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <div className="m-5 text-center">
          <Button className="mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
            Create event
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-fit">
        <ScrollArea>
          <div className="left-0 top-0 z-40 h-screen overflow-auto bg-white p-4 transition-transform dark:bg-muted-foreground/20">
            <div className="flex items-center justify-between">
              <DrawerTitle className="mb-6 inline-flex items-center text-sm font-semibold uppercase text-muted-foreground">
                New Event
              </DrawerTitle>
              <DrawerClose asChild>
                <Button className="right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-muted-foreground hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/30 dark:hover:text-white">
                  <X className="size-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </DrawerClose>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} action="#">
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Title
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      className="block w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Add title here"
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Description
                    </Label>
                    <Textarea
                      className="block h-20 w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 text-sm placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Enter event description here"
                      {...form.register("description")}
                    ></Textarea>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Start Date
                    </Label>
                    <div className="items-center space-y-4 md:flex md:space-y-0">
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className="relative w-full">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <HiCalendar className="size-5 text-muted-foreground" />
                            </div>
                            <Input
                              type="text"
                              className="block w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 pl-10 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
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
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      End Date
                    </Label>
                    <div className="items-center space-y-4 md:flex md:space-y-0">
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className="relative w-full">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <HiCalendar className="size-5 text-muted-foreground" />
                            </div>
                            <Input
                              type="text"
                              className="block w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 pl-10 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
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

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Location
                    </Label>
                    <div className="items-center space-y-4 md:flex md:space-y-0">
                      <div className="relative w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <HiLocationMarker className="size-5 text-muted-foreground" />
                        </div>
                        <Input
                          type="text"
                          className="block w-full rounded-lg border border-white/70 bg-secondary/30 p-2.5 pl-10 text-sm placeholder:text-muted-foreground focus:border-primary-600 focus:ring-primary-600 dark:border-muted-foreground/30 dark:bg-muted dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="Enter Location"
                          {...form.register("location")}
                        />
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
                          className="block w-full rounded-lg border border-white/70 bg-secondary/30 p-3 pl-4 text-sm focus:border-primary-500 focus:ring-primary-500 dark:border-muted dark:bg-muted dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="Add guest email"
                          required
                          {...form.register("guests")}
                        />
                        <Button className="absolute bottom-2.5 right-2.5 inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                          <HiPlus className="-ml-0.5 mr-0.5 size-4" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="items-center md:flex">
                    <div className="mb-4 flex shrink-0 md:mb-0">
                      <Avatar className="relative size-8 rounded-full border-2 border-white dark:border-muted-foreground/20">
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
                      <Avatar className="size-8 rounded-full border-2 border-white dark:border-muted-foreground/20">
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://github.com/shadcn.png"
                        />
                        <AvatarFallback>BG</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback className="flex size-8 items-center justify-center rounded-full border-2 border-white text-xs font-medium text-white dark:border-muted-foreground/20 dark:bg-muted dark:hover:bg-muted-foreground/70">
                          +7
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block text-sm font-medium">
                      Tag Color
                    </Label>
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
              </form>
            </Form>
          </div>
          <div className="bottom-0 left-0 flex w-full justify-center space-x-4 p-4">
            <Button className="w-full justify-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
              Add Event
            </Button>
            <DrawerClose asChild>
              <Button className="inline-flex w-full items-center justify-center rounded-lg border border-muted-foreground/10 bg-white px-5 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted-foreground/30 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:border-muted-foreground/40 dark:bg-muted dark:text-white/70 dark:hover:bg-muted-foreground/30 dark:hover:text-white dark:focus:ring-muted-foreground/30">
                <X className="-ml-1 size-5 sm:mr-1" />
                Close
              </Button>
            </DrawerClose>
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
