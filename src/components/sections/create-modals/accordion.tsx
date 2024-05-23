import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HiInformationCircle, HiPlus } from "react-icons/hi";
import { z } from "zod";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
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
  account: z.enum(["PR", "DF"]),
  jobTitle: z.string(),
  languages: z.string(),
  userRole: z.enum(["OW", "AD", "ED", "CO", "VI"]),
  emailStatus: z.enum(["VF", "NV"]),
  password: z.string(),
  confirmPassword: z.string(),
  admin: z.boolean(),
  member: z.boolean(),
  viewer: z.boolean(),
  status: z.boolean(),
  skills: z.string(),
  phone: z.string(),
  linkedin: z.string(),
  facebook: z.string(),
  website: z.string(),
  country: z.enum(["US", "AU", "UK", "IT", "DE", "ES", "FR", "CA"]),
  address: z.string(),
  timezone: z.string(),
});

export function CreateModalWithAccordion() {
  const [userStatus, setUserStatus] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      file: "",
      firstName: "",
      lastName: "",
      email: "",
      permissions: "no",
      jobTitle: "",
      languages: "",
      account: "DF",
      userRole: "OW",
      emailStatus: "NV",
      password: "",
      confirmPassword: "",
      admin: false,
      member: true,
      viewer: false,
      status: false,
      skills: "",
      phone: "",
      linkedin: "",
      facebook: "",
      website: "",
      country: "US",
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
      <DialogContent className="rounded-lg bg-white p-5 shadow dark:bg-gray-800 md:min-w-[40rem]">
        <ScrollArea className="h-[40rem] overflow-hidden">
          <div className="flex items-center justify-between rounded-t p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Add new user
            </h3>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Accordion type="single" collapsible defaultValue="general">
                <AccordionItem value="general">
                  <AccordionTrigger>General Information</AccordionTrigger>
                  <AccordionContent className="dark:bg-gray-800">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <Label className="mb-2 block" htmlFor="file_input">
                          Upload avatar
                        </Label>
                        <div className="w-full items-center sm:flex">
                          <img
                            alt="Helene avatar"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
                            className="mb-4 size-20 rounded-full sm:mb-0 sm:mr-4"
                          />
                          <div className="w-full">
                            <input
                              className="w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder:text-gray-400"
                              aria-describedby="file_input_help"
                              id="file_input"
                              type="file"
                              {...form.register("file")}
                            />
                            <p
                              className="mb-3 mt-1 text-xs font-normal text-gray-500 dark:text-gray-300"
                              id="file_input_help"
                            >
                              SVG, PNG, JPG or GIF (MAX. 800x400px).
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="first-name" className="mb-2 block">
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
                        <Label htmlFor="last-name" className="mb-2 block">
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
                        <Label htmlFor="email" className="mb-2 block">
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
                          className="mb-2 inline-flex items-center"
                        >
                          User Permissions
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="ml-1">
                                  <svg
                                    aria-hidden
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="sr-only">
                                    User permission details
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  User permissions, part of the overall user
                                  management process, are access granted to
                                  users to specific resources such as files,
                                  applications, networks, or devices.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Select {...form.register("permissions")}>
                          <SelectTrigger className="dark:bg-gray-600 dark:text-white">
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
                          id="job-title"
                          placeholder="e.g. React Native Developer"
                          required
                          {...form.register("jobTitle")}
                        />
                      </div>
                      <div>
                        <Label htmlFor="languages" className="mb-2 block">
                          Languages
                        </Label>
                        <Input
                          id="languages"
                          placeholder="e.g. English"
                          required
                          {...form.register("languages")}
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
                              <TooltipTrigger asChild>
                                <button className="ml-1">
                                  <HiInformationCircle className="ml-1 size-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                                  <span className="sr-only">
                                    Account details
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Choose here your account type.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Select {...form.register("account")}>
                          <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                            <SelectValue placeholder="Choose account type" />
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
                              <TooltipTrigger asChild>
                                <button className="ml-1">
                                  <HiInformationCircle className="ml-1 size-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                                  <span className="sr-only">
                                    User role details
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  Flowbite provides 7 predefined roles: Owner,
                                  Admin, Editor, Contributor and Viewer. Assign
                                  the most suitable role to each user, giving
                                  them the most appropriate level of control.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Select {...form.register("userRole")}>
                          <SelectTrigger className="dark:bg-gray-600 dark:text-white">
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
                              <TooltipTrigger asChild>
                                <button className="ml-1">
                                  <HiInformationCircle className="ml-1 size-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
                                  <span className="sr-only">
                                    Email status details
                                  </span>
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  As an administrator, you can view the status
                                  of a user's email. The status indicates
                                  whether a user's email is verified or not.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Label>
                        <Select {...form.register("emailStatus")}>
                          <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                            <SelectValue placeholder="Verified" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="VF">Verified</SelectItem>
                            <SelectItem value="NV">Not verified</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="password" className="mb-2 block">
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
                          className="mb-2 block"
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
                        <Label className="mb-2 block" htmlFor="role">
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
                              className="ml-2 text-sm font-medium"
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
                              className="ml-2 text-sm font-medium"
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
                              className="ml-2 text-sm font-medium"
                            >
                              Viewer
                            </Label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 text-sm dark:text-white">
                          Status
                        </div>
                        <div className="flex items-center gap-3">
                          <Switch
                            checked={userStatus}
                            id="status"
                            onCheckedChange={() => setUserStatus(!userStatus)}
                            {...form.register("status")}
                          />
                          {userStatus ? "Active" : "Inactive"}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="additional">
                  <AccordionTrigger>Additional Information</AccordionTrigger>
                  <AccordionContent className="dark:bg-gray-800">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="col-span-2">
                        <Label htmlFor="skills" className="mb-2 block">
                          Skills
                        </Label>
                        <Input
                          id="skills"
                          placeholder="e.g. Figma, HTML, Javascript"
                          required
                          {...form.register("skills")}
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="phone-number" className="mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone-number"
                          placeholder="Add a phone number"
                          required
                          {...form.register("phone")}
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="linkedin" className="mb-2 block">
                          Linkedin URL
                        </Label>
                        <Input
                          id="linkedin"
                          placeholder="Linkedin Profile"
                          required
                          type="url"
                          {...form.register("linkedin")}
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="facebook" className="mb-2 block">
                          Facebook
                        </Label>
                        <Input
                          id="facebook"
                          placeholder="Facebook Profile"
                          required
                          type="url"
                          {...form.register("facebook")}
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="twitter" className="mb-2 block">
                          Twitter
                        </Label>
                        <Input
                          id="instagram"
                          name="instagram"
                          placeholder="Instagram Username"
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
                          id="personal-website"
                          placeholder="www.example.com"
                          required
                          type="url"
                          {...form.register("website")}
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="country" className="mb-2 block">
                          Country
                        </Label>
                        <Select {...form.register("country")}>
                          <SelectTrigger>
                            <SelectValue placeholder="United States" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              {
                                value: "US",
                                label: "United States",
                                selected: true,
                              },
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
                          id="address"
                          placeholder="Your Location"
                          required
                          {...form.register("address")}
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label htmlFor="timezone" className="mb-2 block">
                          Timezone
                        </Label>
                        <Input
                          id="timezone"
                          placeholder="e.g. GMT-6"
                          required
                          {...form.register("timezone")}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex items-center space-x-4 px-4 py-6">
                <Button
                  size="lg"
                  type="submit"
                  className="inline-flex w-full [&>span]:text-sm"
                >
                  <HiPlus className="mr-2 size-4" />
                  Add new user
                </Button>
                <DialogClose asChild>
                  <Button
                    variant={"outline"}
                    className="inline-flex w-full [&>span]:text-sm [&>span]:text-gray-500 hover:[&>span]:text-gray-900 [&>span]:dark:bg-gray-700 dark:[&>span]:enabled:hover:bg-gray-600"
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
