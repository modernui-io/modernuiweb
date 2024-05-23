import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HiArrowsExpand,
  HiCalendar,
  HiCode,
  HiCog,
  HiDownload,
  HiEmojiHappy,
  HiInformationCircle,
  HiLocationMarker,
  HiPaperClip,
  HiPhotograph,
  HiPlus,
  HiViewList,
} from "react-icons/hi";
import { z } from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
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

const formSchema = z.object({
  file: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  permissions: z.enum(["yes", "no"]),
  biography: z.string(),
  languages: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  admin: z.boolean(),
  member: z.boolean(),
  viewer: z.boolean(),
  status: z.boolean(),
});

export function AdvancedCreateUserModal() {
  const [isUserStatus, setUserStatus] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: "",
      firstName: "",
      lastName: "",
      email: "",
      permissions: "no",
      biography: "",
      languages: "",
      password: "",
      confirmPassword: "",
      admin: false,
      member: true,
      viewer: false,
      status: false,
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
        <Button>Create user</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg p-4 shadow sm:p-5 md:min-w-[55rem] lg:min-w-[60rem]">
        <ScrollArea className="h-[40rem] overflow-hidden">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
            <h3 className="text-lg font-semibold">Add new user</h3>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="first-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    First Name
                  </Label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    required
                    {...form.register("firstName")}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="last-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    required
                    {...form.register("lastName")}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@company.com"
                    required
                    type="email"
                    {...form.register("email")}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="user-permissions"
                    className="mb-2 inline-flex items-center text-sm font-medium"
                  >
                    User Permissions&nbsp;
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <>
                            <HiInformationCircle className="size-4 cursor-pointer text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                            <span className="sr-only">Details</span>
                          </>
                        </TooltipTrigger>
                        <TooltipContent>
                          <Text>
                            User permissions, part of the overall user
                            management process, are access granted to users to
                            specific resources such as files, applications,
                            networks, or devices.
                          </Text>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Select {...form.register("permissions")}>
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
                  <Label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium"
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="•••••••••"
                    required
                    type="password"
                    {...form.register("password")}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="confirm-password"
                    className="mb-2 block text-sm font-medium"
                  >
                    Confirm password
                  </Label>
                  <Input
                    id="confirm-password"
                    placeholder="•••••••••"
                    required
                    type="password"
                    {...form.register("confirmPassword")}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="biography"
                    className="mb-2 block text-sm font-medium"
                  >
                    Biography
                  </Label>
                  <div className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:bg-gray-700">
                    <div className="flex items-center justify-between border-b px-3 py-2">
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
                            <HiViewList className="size-5" />
                            <span className="sr-only">Add list</span>
                          </button>
                          <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            <HiCog className="size-5" />
                            <span className="sr-only">Settings</span>
                          </button>
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
                            <Text>Show full screen</Text>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="rounded-b-lg px-4 py-2">
                      <Textarea
                        id="biography"
                        placeholder="Write a message here"
                        required
                        rows={8}
                        className="block w-full border-0 px-0 text-sm focus:ring-0"
                        {...form.register("biography")}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="file_input"
                  >
                    Upload avatar
                  </Label>
                  <div className="w-full items-center sm:flex">
                    <Avatar>
                      <AvatarImage
                        alt="Helene Engels"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                      />
                      <AvatarFallback>HE</AvatarFallback>
                    </Avatar>

                    <div className="w-full">
                      <input
                        aria-describedby="file_input_help"
                        id="file_input"
                        type="file"
                        className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                        {...form.register("file")}
                      />
                      <Text
                        className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-300"
                        id="file_input_help"
                      >
                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="role"
                  >
                    Assign Role
                  </Label>
                  <div className="space-y-4 sm:flex sm:space-y-0">
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        id="inline-checkbox"
                        {...form.register("admin")}
                      />
                      <Label
                        htmlFor="inline-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Administrator
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        id="inline-2-checkbox"
                        {...form.register("member")}
                      />
                      <Label
                        htmlFor="inline-2-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Member
                      </Label>
                    </div>
                    <div className="mr-4 flex items-center">
                      <Checkbox
                        defaultChecked
                        id="inline-checked-checkbox"
                        {...form.register("viewer")}
                      />
                      <Label
                        htmlFor="inline-checked-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Viewer
                      </Label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium">Status</div>
                  <div className="flex items-center gap-3">
                    <Switch
                      checked={isUserStatus}
                      onCheckedChange={() => setUserStatus(!isUserStatus)}
                      {...form.register("status")}
                    />
                    {isUserStatus ? "Active" : "Inactive"}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button type="submit" className="inline-flex w-full text-sm">
                  <HiPlus className="size-4 sm:mr-2" />
                  Add new user
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
