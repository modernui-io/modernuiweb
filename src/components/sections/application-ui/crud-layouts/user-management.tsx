import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionMarkCircledIcon, UploadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import {
  FaChevronDown,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import {
  HiArrowDown,
  HiArrowsExpand,
  HiArrowUp,
  HiBriefcase,
  HiCalendar,
  HiClipboardList,
  HiCode,
  HiCog,
  HiCursorClick,
  HiDotsHorizontal,
  HiDownload,
  HiEmojiHappy,
  HiEye,
  HiInformationCircle,
  HiLocationMarker,
  HiPaperClip,
  HiPencilAlt,
  HiPhotograph,
  HiPlus,
  HiTrash,
  HiViewList,
  HiX,
} from "react-icons/hi";
import { z } from "zod";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
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

export function CRUDLayoutForUserManagement() {
  const [isShowUpdateUserModal, setShowUpdateUserModal] = useState(false);
  const [isShowReadUserModal, setShowReadUserModal] = useState(false);
  const [isShowDeleteUserModal, setShowDeleteUserModal] = useState(false);
  const [userStatus, setUserStatus] = useState(false);

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
    <section className="bg-background py-3 sm:py-5">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden px-4 shadow-md sm:rounded-lg">
          <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
            <div>
              <Breadcrumb className="rounded-lg border p-2">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">2022</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>All Users</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h5 className="pt-1">
                <span>All Users</span>
              </h5>
            </div>
            <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <HiPlus className="-ml-1 mr-1.5 size-3.5" />
                    Add new user
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-lg p-4 shadow sm:p-5 md:min-w-[40rem]">
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
                                      management process, are access granted to
                                      users to specific resources such as files,
                                      applications, networks, or devices.
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
                                      <span className="sr-only">
                                        Attach file
                                      </span>
                                    </button>
                                    <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                      <HiLocationMarker className="size-5" />
                                      <span className="sr-only">Embed map</span>
                                    </button>
                                    <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                      <HiPhotograph className="size-5" />
                                      <span className="sr-only">
                                        Upload image
                                      </span>
                                    </button>
                                    <button className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                      <HiCode className="size-5" />
                                      <span className="sr-only">
                                        Format code
                                      </span>
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
                                        <span className="sr-only">
                                          Full screen
                                        </span>
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
                            <div className="w-full items-center gap-5 sm:flex">
                              <Avatar className="size-20">
                                <AvatarImage
                                  alt="Helene Engels"
                                  src="https://github.com/shadcn.png"
                                />
                                <AvatarFallback>HE</AvatarFallback>
                              </Avatar>

                              <div className="w-full">
                                <Input
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
                            <div className="mb-2 text-sm font-medium">
                              Status
                            </div>
                            <div className="flex items-center gap-3">
                              <Switch
                                checked={userStatus}
                                onCheckedChange={() =>
                                  setUserStatus(!userStatus)
                                }
                                {...form.register("status")}
                              />
                              {userStatus ? "Active" : "Inactive"}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Button
                            type="submit"
                            className="inline-flex w-full text-sm"
                          >
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
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-5">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="User role" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "viewer", label: "Viewer" },
                  { value: "moderator", label: "Moderator" },
                  { value: "administrator", label: "Administrator" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Account type" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "pro", label: "PRO" },
                  { value: "basic", label: "Basic" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "5", label: "5" },
                  { value: "4", label: "4+" },
                  { value: "3", label: "3+" },
                  { value: "2", label: "2+" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "us", label: "United States" },
                  { value: "de", label: "Germany" },
                  { value: "fr", label: "France" },
                  { value: "ca", label: "Canada" },
                  { value: "en", label: "England" },
                  { value: "au", label: "Australia" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="block w-full items-center justify-between border-t py-3 md:flex">
            <div className="mb-4 flex flex-wrap md:mb-0">
              <div className="mb-2 mr-4 flex w-full items-center text-sm font-medium md:mb-0 md:w-auto">
                Show by:
              </div>
              <RadioGroup defaultValue="show-by">
                <fieldset className="flex flex-wrap">
                  {[
                    { value: "all-products", label: "All" },
                    { value: "user-role", label: "User Role" },
                    { value: "account-type", label: "Account Type" },
                    { value: "status", label: "Status" },
                    { value: "rating", label: "Rating" },
                  ].map((item, index) => (
                    <div key={index} className="mr-4 flex items-center">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={item.value} id={item.value} />
                        <Label
                          htmlFor={item.value}
                          className="ml-2 text-sm font-medium"
                        >
                          {item.label}
                        </Label>
                      </div>
                    </div>
                  ))}
                </fieldset>
              </RadioGroup>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"outline"}>
                    <FaChevronDown className="mr-1 size-3" /> Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete All</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full text-left text-sm">
              <TableHeader className="text-xs uppercase">
                <TableRow>
                  <TableHead scope="col" className="p-4">
                    <div className="flex items-center">
                      <Checkbox id="checkbox-all" name="checkbox-all" />
                      <Label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </Label>
                    </div>
                  </TableHead>
                  <TableHead scope="col" className="px-4 py-3">
                    User
                  </TableHead>
                  <TableHead scope="col" className="px-4 py-3">
                    User Role
                  </TableHead>
                  <TableHead scope="col" className="px-4 py-3">
                    Status
                  </TableHead>
                  <TableHead
                    scope="col"
                    className="whitespace-nowrap px-4 py-3"
                  >
                    Social profile
                  </TableHead>
                  <TableHead scope="col" className="px-4 py-3">
                    Promote
                  </TableHead>
                  <TableHead scope="col" className="px-4 py-3">
                    Rating
                  </TableHead>
                  <TableHead
                    scope="col"
                    className="whitespace-nowrap px-4 py-3"
                  >
                    Last Login
                  </TableHead>
                  <TableHead scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Jese Leos
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit whitespace-nowrap">
                      <HiClipboardList className="mr-1 size-3.5" />
                      Administrator
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-green-500"></div>
                      Active
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaDribbble className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaTwitter className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGoogle className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" checked={true} />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowUp className="mr-1 size-4 text-green-500" />
                      4.7
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    20 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Bonnie Green
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">
                      <HiEye className="mr-1 size-3.5" />
                      Viewer
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-green-500"></div>
                      Active
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaDribbble className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaTwitter className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGoogle className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowDown className="mr-1 size-4 text-red-500" />
                      3.9
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    23 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Leslie Livingston
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">
                      <HiCursorClick className="mr-1 size-3.5" />
                      Moderator
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-red-500" />
                      Inactive
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaDribbble className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowUp className="mr-1 size-4 text-green-500" />
                      4.8
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    19 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Michael Gough
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">
                      <HiCursorClick className="mr-1 size-3.5" />
                      Moderator
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-green-500"></div>
                      Active
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaDribbble className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaTwitter className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGoogle className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowUp className="mr-1 size-4 text-green-500" />5
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    27 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Joseph McFall
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">
                      <HiEye className="mr-1 size-3.5" />
                      Viewer
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-green-500"></div>
                      Active
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaDribbble className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaTwitter className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGoogle className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowDown className="mr-1 size-4 text-red-500" />
                      4.2
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    20 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Robert Brown
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">
                      <HiEye className="mr-1 size-3.5" />
                      Viewer
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-red-500" />
                      Inactive
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaDribbble className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaTwitter className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" checked={true} />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowUp className="mr-1 size-4 text-green-500" />
                      4.5
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    20 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Karen Nelson
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">
                      <HiEye className="mr-1 size-3.5" />
                      Viewer
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-green-500"></div>
                      Inactive
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaDribbble className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaTwitter className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGoogle className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowDown className="mr-1 size-4 text-red-500" />
                      4.1
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    18 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Helene Engels
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">
                      <HiCursorClick className="mr-1 size-3.5" />
                      Moderator
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-green-500"></div>
                      Active
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaDribbble className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaTwitter className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGoogle className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" checked={true} />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowDown className="mr-1 size-4 text-red-500" />
                      3.8
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    27 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Lana Byrd
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">
                      <HiEye className="mr-1 size-3.5" />
                      Viewer
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-green-500"></div>
                      Active
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowUp className="mr-1 size-4 text-green-500" />
                      4.8
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    20 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell width={"100%"} className="w-4 px-4 py-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select user
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    scope="row"
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <Image
                        width={100}
                        height={100}
                        src="https://github.com/shadcn.png"
                        alt=""
                        className="mr-3 h-8 w-auto rounded-full"
                      />
                      Neil Sims
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    <Badge className="w-fit">
                      <HiCursorClick className="mr-1 size-3.5" />
                      Moderator
                    </Badge>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <div className="mr-2 size-3 rounded-full border bg-red-500" />
                      Inactive
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2"
                  >
                    <div className="flex items-center space-x-1.5">
                      <Link className="transition" href="#">
                        <FaFacebook className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGithub className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaDribbble className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaTwitter className="size-3" />
                      </Link>
                      <Link className="transition" href="#">
                        <FaGoogle className="size-3" />
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <Switch id="promote" name="promote" />
                      Promote
                    </div>
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <div className="flex items-center">
                      <HiArrowUp className="mr-1 size-4 text-green-500" />5
                    </div>
                  </TableCell>
                  <TableCell width={"100%"} className="px-4 py-2">
                    20 Nov 2022
                  </TableCell>
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-2 font-medium"
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateUserModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadUserModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteUserModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between p-4 md:space-y-0">
            <Button>Download CSV</Button>
            <span className="text-sm dark:text-gray-400">
              Total users:&nbsp;
              <span className="font-medium dark:text-white">1867</span>
            </span>
          </div>
        </div>
      </div>

      <Dialog open={isShowReadUserModal} onOpenChange={setShowReadUserModal}>
        <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5 lg:min-w-[50rem]">
          <div className="mb-4 flex justify-between rounded-t sm:mb-5">
            <div className="text-lg md:text-xl">
              <div className="flex items-center">
                <Image
                  width={100}
                  height={100}
                  alt="Helene avatar"
                  src="https://github.com/shadcn.png"
                  className="mr-2 size-12 rounded-full sm:mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold md:text-xl">
                    Helene Engels
                  </h3>
                  <Text className="text-base text-gray-500 dark:text-gray-400">
                    Moderator
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 grid gap-4 sm:mb-5 sm:grid-cols-2 sm:gap-6">
            <dl>
              <dt className="sr-only">Role</dt>
              <dd className="mb-2 flex items-center text-gray-500 dark:text-gray-400">
                <HiBriefcase className="mr-1.5 size-4 text-gray-400 dark:text-gray-500" />
                Frontend Developer
              </dd>
              <dt className="sr-only">Location</dt>
              <dd className="mb-4 flex items-center text-gray-500 dark:text-gray-400 sm:mb-5">
                <HiLocationMarker className="mr-1.5 size-4 text-gray-400 dark:text-gray-500" />
                United States of America
              </dd>
              <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                Email Adress
              </dt>
              <dd className="mb-4 font-medium sm:mb-5">helene@company.com</dd>
              <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                Home Adress
              </dt>
              <dd className="mb-4 font-medium sm:mb-5">
                92 Miles Drive, Newark, NJ 07103, California, United States of
                America
              </dd>
              <dt className="mb-2 leading-none text-gray-500 dark:text-gray-400">
                Phone Number
              </dt>
              <dd className="font-medium">+1234 567 890 / +12 345 678 </dd>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none">Biography</dt>
              <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
                Hello, I&apos;m Helene Engels, USA Designer, Creating things
                that stand out, Featured by Adobe, Figma, Webflow and others,
                Daily design tips & resources, Exploring Web3.
              </dd>
              <dt className="mb-2 font-semibold leading-none">Social</dt>
              <dd className="inline-flex items-center space-x-1">
                <Link
                  href="#"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <FaFacebook className="size-5" />
                </Link>
                <Link
                  href="#"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <FaInstagram className="size-5" />
                </Link>
                <Link
                  href="#"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <FaGithub className="size-5" />
                </Link>
                <Link
                  href="#"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <FaDribbble className="size-5" />
                </Link>
              </dd>
            </dl>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <HiPencilAlt className="-ml-1 mr-1 size-5" />
                Edit
              </Button>
              <Button size="lg" variant={"outline"}>
                Preview
              </Button>
            </div>
            <Button
              variant={"destructive"}
              size="lg"
              className="inline-flex [&>span]:text-sm"
            >
              <HiTrash className="-ml-1 mr-1.5 size-5" />
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isShowUpdateUserModal}
        onOpenChange={setShowUpdateUserModal}
      >
        <DialogContent className="rounded-lg bg-background p-5 shadow md:min-w-[40rem]">
          <ScrollArea className="h-[40rem] overflow-hidden">
            <div className="flex items-center justify-between rounded-t">
              <h3 className="text-lg font-semibold">Update user</h3>
            </div>
            <form action="#">
              <Accordion type="single" collapsible defaultValue="general">
                <AccordionItem value="general">
                  <AccordionTrigger>General Information</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4 sm:grid-cols-2">
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
                            <input
                              className="w-full cursor-pointer rounded-lg border text-sm focus:outline-none"
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
                              <Button size="sm" className="inline-flex text-xs">
                                <UploadIcon className="-ml-1 mr-1 size-4" />
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
                      <div>
                        <Label htmlFor="first-name" className="mb-2 block">
                          First Name
                        </Label>
                        <Input
                          defaultValue="Bonnie"
                          id="first-name"
                          name="first-name"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="last-name" className="mb-2 block">
                          Last Name
                        </Label>
                        <Input
                          defaultValue="Green"
                          id="last-name"
                          name="last-name"
                          placeholder="Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-2 block">
                          Email
                        </Label>
                        <Input
                          defaultValue="bonnie.green@company.com"
                          id="email"
                          name="email"
                          placeholder="john@company.com"
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
                                  <QuestionMarkCircledIcon className="size-4 text-gray-400 hover:text-gray-500" />
                                  <span className="sr-only">
                                    User permission details
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-background">
                                <Text>
                                  User permissions, part of the overall user
                                  management process, are access granted to
                                  users to specific resources such as files,
                                  applications, networks, or devices.
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
                            <SelectItem value="yes">Operational</SelectItem>
                            <SelectItem value="no">Non Operational</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="job-title" className="mb-2 block">
                          Job Title
                        </Label>
                        <Input
                          defaultValue="Back-end software engineer"
                          id="job-title"
                          name="job-title"
                          placeholder="Ex. React Developer"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="languages" className="mb-2 block">
                          Languages
                        </Label>
                        <Input
                          defaultValue="English, German"
                          id="languages"
                          name="languages"
                          placeholder="Ex. English, Spanish"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="account"
                          className="mb-2 inline-flex items-center"
                        >
                          Account
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <button className="ml-1">
                                  <QuestionMarkCircledIcon className="size-4 text-gray-400 hover:text-gray-500" />
                                  <span className="sr-only">
                                    Account details
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-background">
                                <Text>Choose here your account type.</Text>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Select name="account">
                          <SelectTrigger>
                            <SelectValue placeholder="PRO Account" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PR">PRO Account</SelectItem>
                            <SelectItem value="DF">Default Account</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label
                          htmlFor="user-role"
                          className="mb-2 inline-flex items-center"
                        >
                          User Role
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <button className="ml-1">
                                  <QuestionMarkCircledIcon className="size-4 text-gray-400 hover:text-gray-500" />
                                  <span className="sr-only">
                                    User role details
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-background">
                                <Text>
                                  ModernUI provides 7 predefined roles: Owner,
                                  Admin, Editor, Contributor and Viewer. Assign
                                  the most suitable role to each user, giving
                                  them the most appropriate level of control.
                                </Text>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Select name="user-role">
                          <SelectTrigger>
                            <SelectValue placeholder="Owner" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              { value: "OW", label: "Owner" },
                              { value: "AD", label: "Admin" },
                              { value: "ED", label: "Editor" },
                              { value: "CO", label: "Contributor" },
                              { value: "VI", label: "Viewer" },
                            ].map((item, index) => (
                              <SelectItem key={index} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="sm:col-span-2">
                        <Label
                          htmlFor="email-status"
                          className="mb-2 inline-flex items-center"
                        >
                          Email Status
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <button className="ml-1">
                                  <QuestionMarkCircledIcon className="size-4 text-gray-400 hover:text-gray-500" />
                                  <span className="sr-only">
                                    Email status details
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-background">
                                <Text>
                                  As an administrator, you can view the status
                                  of a user&apos;s email. The status indicates
                                  whether a user&apos;s email is verified or
                                  not.
                                </Text>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Select name="email-status">
                          <SelectTrigger>
                            <SelectValue placeholder="Verified" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              { value: "VF", label: "Verified" },
                              { value: "NV", label: "Not verified" },
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
                        <Label
                          htmlFor="confirm-password"
                          className="mb-2 block"
                        >
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
                        <Label className="mb-2 block" htmlFor="role">
                          Assign Role
                        </Label>
                        <div className="space-y-4 sm:flex sm:space-y-0">
                          {[
                            { id: "inline-checkbox", label: "Administrator" },
                            { id: "inline-2-checkbox", label: "Member" },
                            {
                              id: "inline-checked-checkbox",
                              label: "Viewer",
                              defaultChecked: true,
                            },
                          ].map((item, index) => (
                            <div key={index} className="mr-4 flex items-center">
                              <Checkbox
                                id={item.id}
                                name="role"
                                defaultChecked={item.defaultChecked}
                              />
                              <Label
                                htmlFor={item.id}
                                className="ml-2 text-sm font-medium"
                              >
                                {item.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 text-sm">Status</div>
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
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="additional">
                  <AccordionTrigger>Additional Information</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="col-span-2">
                        <Label htmlFor="skills" className="mb-2 block">
                          Skills
                        </Label>
                        <Input
                          defaultValue="Tailwind CSS, ModernUI, React"
                          id="skills"
                          name="skills"
                          placeholder="Ex. Figma, HTML, Javascript"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="phone-number" className="mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          defaultValue="+1631 442 978"
                          id="phone-number"
                          name="phone-number"
                          placeholder="Ex. +1234 567 890"
                          required
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="linkedin" className="mb-2 block">
                          Linkedin URL
                        </Label>
                        <Input
                          defaultValue="https://www.linkedin.com/in/bonniegreen/"
                          id="linkedin"
                          name="linkedin"
                          placeholder="Ex. https://www.linkedin.com/in/example/"
                          required
                          type="url"
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="facebook" className="mb-2 block">
                          Facebook
                        </Label>
                        <Input
                          defaultValue="https://www.facebook.com/bonniegreen"
                          id="facebook"
                          name="facebook"
                          placeholder="Ex. https://www.facebook.com/example"
                          required
                          type="url"
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="twitter" className="mb-2 block">
                          Twitter
                        </Label>
                        <Input
                          defaultValue="https://twitter.com/bonniegreen"
                          id="twitter"
                          name="twitter"
                          placeholder="Ex. https://twitter.com/example"
                          required
                          type="url"
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label
                          htmlFor="personal-website"
                          className="mb-2 block"
                        >
                          Personal Website
                        </Label>
                        <Input
                          defaultValue="https://modernui.com"
                          id="personal-website"
                          name="personal-website"
                          placeholder="Ex. https://website.com"
                          required
                          type="url"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="country" className="mb-2 block">
                          Country
                        </Label>
                        <Select name="country">
                          <SelectTrigger>
                            <SelectValue placeholder="United States" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              { value: "US", label: "United States" },
                              { value: "AU", label: "Australia" },
                              { value: "UK", label: "United Kingdom" },
                              { value: "IT", label: "Italy" },
                              { value: "DE", label: "Germany" },
                              { value: "ES", label: "Spain" },
                              { value: "FR", label: "France" },
                              { value: "CA", label: "Canada" },
                            ].map((item, index) => (
                              <SelectItem key={index} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="address" className="mb-2 block">
                          Address
                        </Label>
                        <Input
                          defaultValue="92 Milles Drive, Newark, NJ 07123"
                          id="address"
                          name="address"
                          placeholder="Ex. 92 Milles Drive, Newark, NJ 07123"
                          required
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="timezone" className="mb-2 block">
                          Timezone
                        </Label>
                        <Input
                          defaultValue="GMT+3"
                          id="timezone"
                          name="timezone"
                          placeholder="Ex. GMT+2"
                          required
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="biography" className="mb-2 block">
                          Biography
                        </Label>
                        <Textarea
                          id="biography"
                          name="biography"
                          placeholder="Write your biography..."
                          rows={4}
                        >
                          Hello, I&apos;m Helene Engels, USA Designer, Creating
                          things that stand out, Featured by Adobe, Figma,
                          Webflow and others, Daily design tips & resources,
                          Exploring Web3.
                        </Textarea>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex items-center space-x-4 px-4 py-6">
                <Button size={"lg"} type="submit" className="text-sm">
                  Update product
                </Button>
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="border-red-600 px-5 py-2.5 hover:bg-red-600 hover:text-white"
                >
                  <HiTrash className="-ml-1 mr-1 size-5" />
                  Delete
                </Button>
              </div>
            </form>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isShowDeleteUserModal}
        onOpenChange={setShowDeleteUserModal}
      >
        <DialogContent className="justify-center rounded-lg bg-background p-4 shadow sm:p-5">
          <HiTrash className="mx-auto mb-3.5 size-11 text-gray-400 dark:text-gray-500" />
          <Text className="mb-4 text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this item?
          </Text>
          <div className="flex items-center justify-center space-x-4">
            <DialogClose asChild>
              <Button>No, cancel</Button>
            </DialogClose>
            <Button variant={"destructive"} type="submit">
              Yes, I&apos;m sure
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
