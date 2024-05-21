import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
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
      <DialogContent className="rounded-lg bg-white p-5 shadow dark:bg-gray-800 md:min-w-[40rem]">
        <ScrollArea className="h-[40rem] overflow-hidden">
          <div className="flex items-center justify-between rounded-t">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update user
            </h3>
          </div>
          <form action="#">
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
                          />
                          <p
                            className="mb-3 mt-1 text-xs font-normal text-gray-500 dark:text-gray-300"
                            id="file_input_help"
                          >
                            SVG, PNG, JPG or GIF (MAX. 800x400px).
                          </p>
                          <div className="flex items-center space-x-2.5">
                            <Button size="sm" className="inline-flex text-xs">
                              <svg
                                className="-ml-1 mr-1 size-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Upload new picture
                            </Button>
                            <Button
                              color="gray"
                              variant={"outline"}
                              size="sm"
                              className="inline-flex text-xs dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
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
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                                management process, are access granted to users
                                to specific resources such as files,
                                applications, networks, or devices.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Select name="user-permissions">
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
                        defaultValue="Back-end software engineer"
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                                <svg
                                  aria-hidden
                                  className="size-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="sr-only">Account details</span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Choose here your account type.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Select name="account">
                        <SelectTrigger className="dark:bg-gray-600 dark:text-white">
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
                                <svg
                                  aria-hidden
                                  className="ml-1 size-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="sr-only">
                                  User role details
                                </span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                Flowbite provides 7 predefined roles: Owner,
                                Admin, Editor, Contributor and Viewer. Assign
                                the most suitable role to each user, giving them
                                the most appropriate level of control.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Select name="user-role">
                        <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                          <SelectValue placeholder="Owner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="OW">Owner</SelectItem>
                          <SelectItem value="AD">Admin</SelectItem>
                          <SelectItem value="ED">Editor</SelectItem>
                          <SelectItem value="CO">Contributor</SelectItem>
                          <SelectItem value="VI">Viewer</SelectItem>
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
                                <svg
                                  aria-hidden
                                  className="ml-1 size-4 text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="sr-only">
                                  Email status details
                                </span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                As an administrator, you can view the status of
                                a user's email. The status indicates whether a
                                user's email is verified or not.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Label>
                      <Select name="email-status">
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
                        name="password"
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                        <div className="mr-4 flex items-center">
                          <Checkbox id="inline-checkbox" name="role" />
                          <Label
                            htmlFor="inline-checkbox"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Administrator
                          </Label>
                        </div>
                        <div className="mr-4 flex items-center">
                          <Checkbox id="inline-2-checkbox" name="role" />
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
                            name="role"
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
                      <div className="mb-2 text-sm dark:text-white">Status</div>
                      <div className="flex items-center gap-3">
                        <Switch
                          checked={userStatus}
                          id="status"
                          className="dark:border-gray-500"
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
                <AccordionContent className="dark:bg-gray-800">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="col-span-2">
                      <Label htmlFor="skills" className="mb-2 block">
                        Skills
                      </Label>
                      <Input
                        defaultValue="Tailwind CSS, ModernUI, React"
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                        <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                          <SelectValue placeholder="United States" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">United States</SelectItem>
                          <SelectItem value="AU">Australia</SelectItem>
                          <SelectItem value="UK">United Kingdom</SelectItem>
                          <SelectItem value="IT">Italy</SelectItem>
                          <SelectItem value="DE">Germany</SelectItem>
                          <SelectItem value="ES">Spain</SelectItem>
                          <SelectItem value="FR">France</SelectItem>
                          <SelectItem value="CA">Canada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <Label htmlFor="address" className="mb-2 block">
                        Address
                      </Label>
                      <Input
                        defaultValue="92 Milles Drive, Newark, NJ 07123"
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
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
                        className="dark:border-gray-500"
                        id="biography"
                        name="biography"
                        placeholder="Write your biography..."
                        rows={4}
                      >
                        Hello, I'm Helene Engels, USA Designer, Creating things
                        that stand out, Featured by Adobe, Figma, Webflow and
                        others, Daily design tips & resources, Exploring Web3.
                      </Textarea>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex items-center space-x-4 px-4 py-6">
              <Button size="lg" type="submit" className="text-sm">
                Update product
              </Button>
              <Button
                color="failure"
                variant={"outline"}
                className="border-red-600 px-5 py-2.5"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-ml-1 mr-1 size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Delete
              </Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
