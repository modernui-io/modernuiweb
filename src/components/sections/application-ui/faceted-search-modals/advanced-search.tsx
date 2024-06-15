import * as React from "react";
import Link from "next/link";

import { HiPlus } from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
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
import { Slider } from "~/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

const accountTypes = [
  { id: "account-all", label: "All" },
  { id: "account-administrator", label: "Administrator" },
  { id: "account-moderator", label: "Moderator" },
  { id: "account-viewer", label: "Viewer" },
];

const jobTitles = [
  { id: "frontend-developer", label: "Frontend Developer" },
  { id: "ui-ux-designer", label: "UI/UX Designer" },
  { id: "react-developer", label: "React Developer" },
  { id: "php-developer", label: "PHP Developer" },
  { id: "engineer", label: "Engineer" },
  { id: "marketing", label: "Marketing" },
];

export function AdvancedSearch() {
  return (
    <div className="m-5 flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="block rounded-lg px-5 text-center text-sm font-medium">
            Toggle modal
          </Button>
        </DialogTrigger>
        <DialogContent className="relative h-[400px] max-w-xl translate-y-0 overflow-auto p-4 sm:h-[570px]">
          <ScrollArea>
            <DialogHeader>
              <DialogTitle>Advanced filters</DialogTitle>
              <DialogClose asChild>
                <span className="sr-only">Close modal</span>
              </DialogClose>
            </DialogHeader>
            <form action="#" method="get" id="defaultModal">
              <div className="space-y-4">
                <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label
                        htmlFor="min-age"
                        className="text-black dark:text-white"
                      >
                        Min Age
                      </Label>
                      <Slider
                        value={[18]}
                        step={1}
                        max={100}
                        min={1}
                        className="h-2 w-full cursor-pointer rounded-lg bg-muted-foreground/10 dark:bg-muted-foreground/20"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="max-age"
                        className="text-black dark:text-white"
                      >
                        Max Age
                      </Label>
                      <Slider
                        value={[45]}
                        step={1}
                        max={100}
                        min={1}
                        className="h-2 w-full cursor-pointer rounded-lg bg-muted-foreground/10 dark:bg-muted-foreground/20"
                      />
                    </div>
                    <div className="col-span-2 flex items-center justify-between space-x-3">
                      <div className="w-full">
                        <Label
                          htmlFor="min-age-input"
                          className="text-black dark:text-white"
                        >
                          From
                        </Label>
                        <Input
                          type="number"
                          id="min-age-input"
                          value={18}
                          min="1"
                          max="100"
                          className="block w-full rounded-lg border border-muted-foreground/20 bg-secondary/30 p-2.5 text-sm text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="max-age-input"
                          className="text-black dark:text-white"
                        >
                          To
                        </Label>
                        <Input
                          type="number"
                          id="max-age-input"
                          value={45}
                          min="1"
                          max="100"
                          className="block w-full rounded-lg border border-muted-foreground/20 bg-secondary/30 p-2.5 text-sm text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label
                        htmlFor="min-experience"
                        className="text-black dark:text-white"
                      >
                        Min Experience
                      </Label>
                      <Slider
                        value={[18]}
                        step={1}
                        max={30}
                        min={0}
                        className="h-2 w-full cursor-pointer rounded-lg bg-muted-foreground/10 dark:bg-muted-foreground/20"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="max-experience"
                        className="text-black dark:text-white"
                      >
                        Max Experience
                      </Label>
                      <Slider
                        value={[45]}
                        step={1}
                        max={100}
                        min={0}
                        className="h-2 w-full cursor-pointer rounded-lg bg-muted-foreground/10 dark:bg-muted-foreground/20"
                      />
                    </div>
                    <div className="col-span-2 flex items-center justify-between space-x-3">
                      <div className="w-full">
                        <Label
                          htmlFor="min-experience-input"
                          className="text-black dark:text-white"
                        >
                          From
                        </Label>
                        <Input
                          type="number"
                          id="min-experience-input"
                          value={18}
                          min="0"
                          max="30"
                          className="block w-full rounded-lg border border-muted-foreground/20 bg-secondary/30 p-2.5 text-sm text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <Label
                          htmlFor="max-experience-input"
                          className="text-black dark:text-white"
                        >
                          To
                        </Label>
                        <Input
                          type="number"
                          id="max-experience-input"
                          value={45}
                          min="0"
                          max="30"
                          className="block w-full rounded-lg border border-muted-foreground/20 bg-secondary/30 p-2.5 text-sm text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Text
                    level={"sm"}
                    className="mb-2 font-medium text-black dark:text-white"
                  >
                    Account type
                  </Text>
                  <RadioGroup>
                    <ul className="flex w-full flex-col items-center rounded-lg border border-muted-foreground/10 bg-white text-sm font-medium text-black dark:border-muted-foreground/30 dark:bg-muted-foreground/20 dark:text-white md:flex-row">
                      {accountTypes.map((type, index) => (
                        <li
                          key={type.id}
                          className={`w-full ${index < accountTypes.length - 1 ? "border-b border-muted-foreground/10 dark:border-muted-foreground/30 md:border-b-0 md:border-r" : ""}`}
                        >
                          <div className="flex items-center pl-3">
                            <RadioGroupItem
                              id={type.id}
                              value={type.label}
                              defaultChecked={index === 0}
                              className="size-4 border-muted-foreground/20 bg-muted-foreground/10 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-muted-foreground/40 dark:bg-muted-foreground/30 dark:ring-offset-muted-foreground/20 dark:focus:ring-primary-600"
                            />
                            <Label
                              htmlFor={type.id}
                              className="ml-2 w-full py-3 text-sm font-medium text-black dark:text-muted-foreground"
                            >
                              {type.label}
                            </Label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-medium text-black dark:text-white">
                    Job title
                  </Label>
                  <ToggleGroup
                    type="multiple"
                    className="grid w-full grid-cols-2 gap-3 md:grid-cols-3"
                  >
                    {jobTitles.map((job) => (
                      <ToggleGroupItem
                        key={job.id}
                        id={job.id}
                        value={job.label}
                        className="border border-white bg-background py-6"
                      >
                        <div className="block">
                          <div className="w-full text-sm">{job.label}</div>
                        </div>
                      </ToggleGroupItem>
                    ))}
                  </ToggleGroup>
                </div>

                <div className="space-y-2">
                  <Label className="block text-sm font-medium text-black dark:text-white">
                    Properties
                  </Label>
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 rounded-lg bg-muted-foreground/10 p-4 dark:bg-muted-foreground/20"
                    >
                      <div className="grid w-full gap-3 md:grid-cols-3">
                        <Select>
                          <SelectTrigger
                            id={`country-${i}`}
                            className="w-full rounded-lg border border-muted-foreground/20 bg-white p-2.5 text-sm text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/40 dark:bg-muted-foreground/30 dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          >
                            <SelectValue
                              placeholder={`${i === 0 ? "United States" : "Country"}`}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              { label: "US", value: "United States" },
                              { label: "CA", value: "Canada" },
                              { label: "FR", value: "France" },
                              { label: "GE", value: "Germany" },
                            ].map((country, index) => (
                              <SelectItem key={index} value={country.label}>
                                {country.value}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger
                            id={`state-${i}`}
                            className="w-full rounded-lg border border-muted-foreground/20 bg-white p-2.5 text-sm text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/40 dark:bg-muted-foreground/30 dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          >
                            <SelectValue
                              placeholder={`${i === 0 ? "California" : "State"}`}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              { label: "CA", value: "California" },
                              { label: "OR", value: "Oregon" },
                              { label: "NY", value: "New York" },
                              { label: "FL", value: "Florida" },
                            ].map((state, index) => (
                              <SelectItem key={index} value={state.label}>
                                {state.value}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger
                            id={`city-${i}`}
                            className="w-full rounded-lg border border-muted-foreground/20 bg-white p-2.5 text-sm text-black focus:border-primary-500 focus:ring-primary-500 dark:border-muted-foreground/40 dark:bg-muted-foreground/30 dark:text-white dark:placeholder:text-muted-foreground dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          >
                            <SelectValue
                              placeholder={`${i === 0 ? "Sacramento" : "City"}`}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              { label: "SO", value: "Sacramento" },
                              { label: "LA", value: "Los Angeles" },
                              { label: "SF", value: "San Francisco" },
                              { label: "SD", value: "San Diego" },
                            ].map((state, index) => (
                              <SelectItem key={index} value={state.label}>
                                {state.value}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button variant="outline" className="bg-transparent">
                        <RiDeleteBin6Fill className="size-5 text-muted-foreground hover:text-muted-foreground/20" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  ))}
                  <Link
                    href="/#"
                    className="flex items-center text-sm font-medium text-primary"
                  >
                    <HiPlus className="mr-2 size-4" />
                    Add Property
                  </Link>
                </div>
              </div>
              <DialogFooter>
                <div className="my-4 flex w-full justify-start space-x-2">
                  <Button>Show 32 Results</Button>
                  <Button variant="outline">Reset</Button>
                </div>
              </DialogFooter>
            </form>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
