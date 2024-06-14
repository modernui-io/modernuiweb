import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HiArrowsExpand,
  HiCalendar,
  HiCode,
  HiDownload,
  HiEmojiHappy,
  HiLocationMarker,
  HiMenu,
  HiPaperClip,
  HiPhotograph,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { z } from "zod";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
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
import Avatar from "~/lib/assets/images/avatar-3.png";

const formSchema = z.object({
  file: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  permissions: z.string().optional(),
  emailStatus: z.string().optional(),
  jobTitle: z.string(),
  userRole: z.string().optional(),
  account: z.string().optional(),
  password: z.string(),
  confirmPassword: z.string(),
  biography: z.string(),
  roles: z
    .object({
      administrator: z.boolean(),
      member: z.boolean(),
      viewer: z.boolean(),
    })
    .optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  address: z.string(),
  zip: z.string(),
  timezone: z.string(),
  phoneNumber: z.number(),
  linkedIn: z.string(),
  facebook: z.string(),
  github: z.string(),
  dribble: z.string(),
  instagram: z.string(),
  website: z.string(),
});

export function AdvancedCreateUserForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: "",
      firstName: "",
      lastName: "",
      email: "",
      permissions: "OP",
      emailStatus: "V",
      jobTitle: "",
      userRole: "OW",
      account: " ",
      password: "",
      confirmPassword: "",
      biography: "",
      roles: {
        administrator: false,
        member: false,
        viewer: false,
      },
      country: "US",
      city: "SF",
      address: "",
      zip: "",
      timezone: "",
      linkedIn: "",
      facebook: "",
      github: "",
      dribble: "",
      instagram: "",
      website: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto px-4 py-8 lg:py-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} action="#">
            <Text level={"xl"} className="mb-4 font-semibold leading-none">
              General Information
            </Text>
            <div className="mb-4 grid gap-4 sm:mb-8 md:grid-cols-2 md:gap-6">
              <div className="sm:col-span-2">
                <Label
                  className="mb-2 block text-sm font-medium"
                  htmlFor="file_input"
                >
                  Upload avatar
                </Label>
                <div className="w-full items-center sm:flex">
                  <Image
                    className="mb-4 size-20 rounded-full sm:mb-0 sm:mr-4"
                    src={Avatar}
                    alt="Helene avatar"
                  />
                  <div className="w-full">
                    <Input
                      className="w-full cursor-pointer rounded-lg border border-muted-foreground/30 bg-secondary/30 text-sm focus:outline-none dark:bg-muted-foreground/35"
                      id="file_input"
                      type="file"
                      {...form.register("file")}
                    />
                    <Text
                      level={"xs"}
                      className="mt-1 font-normal text-muted-foreground"
                      id="file_input_help"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </Text>
                  </div>
                </div>
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="first-name"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="First Name"
                  required
                  {...form.register("firstName")}
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="last-name"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Last Name"
                  required
                  {...form.register("lastName")}
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">Email</Label>
                <Input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="name@company.com"
                  required
                  {...form.register("email")}
                />
              </div>
              <div>
                <Label className="mb-2 inline-flex items-center text-sm font-medium">
                  User Permissions
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HiQuestionMarkCircle className="ml-1 size-5 text-muted-foreground/70 dark:hover:text-white hover:dark:text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="w-80 rounded-lg px-3 py-2 text-xs font-normal text-white shadow-sm dark:bg-muted">
                        User permissions, part of the overall user management
                        process, are access granted to users to specific
                        resources such as files, applications, networks, or
                        devices.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Select {...form.register("permissions")}>
                  <SelectTrigger className="rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <SelectValue placeholder="Select Permission" />
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
                <Label className="mb-2 inline-flex items-center text-sm font-medium">
                  Email Status
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HiQuestionMarkCircle className="ml-1 size-5 text-muted-foreground/70 dark:hover:text-white hover:dark:text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="w-80 rounded-lg px-3 py-2 text-xs font-normal text-white shadow-sm dark:bg-muted">
                        As an administrator, you can view the status of a
                        user&apos;s email. The status indicates whether a
                        user&apos;s email is verified or not.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Select {...form.register("emailStatus")}>
                  <SelectTrigger className="rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <SelectValue placeholder="Verified" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "V", label: "Verified" },
                      { value: "NV", label: "Not Verified" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Job Title
                </Label>
                <Input
                  type="text"
                  id="job-title"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="e.g React Native Developer"
                  required
                  {...form.register("jobTitle")}
                />
              </div>
              <div>
                <Label className="mb-2 inline-flex items-center text-sm font-medium">
                  User Role
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HiQuestionMarkCircle className="ml-1 size-5 text-muted-foreground/70 dark:hover:text-white hover:dark:text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="w-80 rounded-lg px-3 py-2 text-xs font-normal text-white shadow-sm dark:bg-muted">
                        Company provides 7 predefined roles: Owner, Admin,
                        Editor, Contributor and Viewer. Assign the most suitable
                        role to each user, giving them the most appropriate
                        level of control.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Select {...form.register("userRole")}>
                  <SelectTrigger className="rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
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
              <div>
                <Label className="mb-2 inline-flex items-center text-sm font-medium">
                  Account
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HiQuestionMarkCircle className="ml-1 size-5 text-muted-foreground/70 dark:hover:text-white hover:dark:text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="w-80 rounded-lg px-3 py-2 text-xs font-normal text-white shadow-sm dark:bg-muted">
                        Choose here your account type.
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <Select {...form.register("account")}>
                  <SelectTrigger className="rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <SelectValue placeholder="Choose Account Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: " ", label: "Choose Account Type" },
                      { value: "DA", label: "Default Account" },
                      { value: "PRA", label: "PRO Account" },
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
                  type="password"
                  id="password"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="•••••••••"
                  required
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
                  type="password"
                  id="confirm-password"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="•••••••••"
                  required
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
                <div className="w-full rounded-lg border border-muted-foreground/10 bg-secondary/30 dark:bg-muted">
                  <div className="flex items-center justify-between border-b px-3 py-2">
                    <div className="flex flex-wrap items-center sm:divide-x">
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
                            icon: <HiMenu className="size-5" />,
                          },
                          {
                            icon: <IoMdSettings className="size-5" />,
                          },
                          {
                            icon: <HiCalendar className="size-5" />,
                          },
                          {
                            icon: <HiDownload className="size-5" />,
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
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant={"ghost"}
                      className="cursor-pointer rounded p-2 text-muted-foreground hover:bg-muted-foreground/10 dark:hover:text-white sm:ml-auto"
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HiArrowsExpand className="size-5" />
                          </TooltipTrigger>
                          <TooltipContent className="w-auto rounded-lg px-3 py-2 text-sm font-normal text-white shadow-sm dark:bg-muted">
                            Show Full Screen
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Button>
                  </div>

                  <Textarea
                    rows={8}
                    id="description"
                    className="block w-full rounded-lg rounded-t-none border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder="Your description here"
                    {...form.register("biography")}
                  ></Textarea>
                </div>
              </div>

              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Assign Role
                </Label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
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
              </div>
            </div>

            <Text level={"xl"} className="mb-4 font-semibold leading-none">
              Additional Information
            </Text>
            <div className="mb-4 grid gap-4 sm:mb-8 md:grid-cols-2 md:gap-6">
              <div>
                <Label className="mb-2 inline-flex items-center text-sm font-medium">
                  Country
                </Label>
                <Select {...form.register("country")}>
                  <SelectTrigger className="rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <SelectValue placeholder="United States" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "US", label: "United States" },
                      { value: "AU", label: "Australia" },
                      { value: "UK", label: "United Kingdom" },
                      { value: "IT", label: "Italy" },
                      { value: "GE", label: "Germany" },
                      { value: "GE", label: "Spain" },
                      { value: "GE", label: "France" },
                      { value: "CA", label: "Canada" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 inline-flex items-center text-sm font-medium">
                  City
                </Label>
                <Select {...form.register("city")}>
                  <SelectTrigger className="rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                    <SelectValue placeholder="San Francisco" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "SF", label: "San Francisco" },
                      { value: "WD", label: "Washington" },
                      { value: "NY", label: "New York" },
                      { value: "SC", label: "Sacramento" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Address
                </Label>
                <Input
                  type="text"
                  id="address"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Your Location"
                  required
                  {...form.register("address")}
                />
              </div>

              <div>
                <Label className="mb-2 block text-sm font-medium">ZIP</Label>
                <Input
                  type="number"
                  id="zip"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Your Location"
                  required
                  {...form.register("zip")}
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Timezone
                </Label>
                <Input
                  type="text"
                  id="timezone"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="e.g GMT -6"
                  required
                  {...form.register("timezone")}
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Phone Number
                </Label>
                <Input
                  type="number"
                  id="phone-number"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Add a phone number"
                  required
                  {...form.register("phoneNumber")}
                />
              </div>

              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Linkedin URL
                </Label>
                <Input
                  type="url"
                  id="linkedin"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Linkedin URL"
                  required
                  {...form.register("linkedIn")}
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Facebook
                </Label>
                <Input
                  type="url"
                  id="facebook"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Facebook Profile"
                  required
                  {...form.register("facebook")}
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">Github</Label>
                <Input
                  type="url"
                  id="github"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Github Username"
                  required
                  {...form.register("github")}
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Dribbble
                </Label>
                <Input
                  type="url"
                  id="dribbble"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Dribbble Username"
                  required
                  {...form.register("dribble")}
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Instagram
                </Label>
                <Input
                  type="url"
                  id="instagram"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Instagram Username"
                  required
                  {...form.register("instagram")}
                />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-medium">
                  Personal Website
                </Label>
                <Input
                  type="url"
                  id="personal-website"
                  className="block w-full rounded-lg border border-muted-foreground/30 bg-secondary/30 p-2.5 text-sm focus:border-primary-600 focus:ring-primary-600 dark:bg-muted-foreground/35 dark:placeholder:text-muted-foreground/90 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="http://www.example.com"
                  required
                  {...form.register("website")}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-primary-foreground focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900"
            >
              Add user
            </Button>
          </form>
        </Form>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
