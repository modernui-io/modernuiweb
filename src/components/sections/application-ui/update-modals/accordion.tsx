import { useState } from "react";
import Image from "next/image";

import { QuestionMarkCircledIcon, UploadIcon } from "@radix-ui/react-icons";
import { HiTrash } from "react-icons/hi";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
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

export function UpdateModalAccordion() {
  const [userStatus, setUserStatus] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Update user</Button>
      </DialogTrigger>
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
                            <TooltipContent>
                              <Text>
                                User permissions, part of the overall user
                                management process, are access granted to users
                                to specific resources such as files,
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
                                <span className="sr-only">Account details</span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
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
                            <TooltipContent>
                              <Text>
                                ModernUI provides 7 predefined roles: Owner,
                                Admin, Editor, Contributor and Viewer. Assign
                                the most suitable role to each user, giving them
                                the most appropriate level of control.
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
                            <TooltipContent>
                              <Text>
                                As an administrator, you can view the status of
                                a user&apos;s email. The status indicates
                                whether a user&apos;s email is verified or not.
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
                      <Label htmlFor="confirm-password" className="mb-2 block">
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
                      <Label htmlFor="personal-website" className="mb-2 block">
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
                        things that stand out, Featured by Adobe, Figma, Webflow
                        and others, Daily design tips & resources, Exploring
                        Web3.
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
  );
}
