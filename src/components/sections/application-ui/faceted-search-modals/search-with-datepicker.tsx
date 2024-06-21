import * as React from "react";
import { useState } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Switch } from "~/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { cn } from "~/lib/utils";

("use client");

const durations = [
  { id: "hours-1", label: "1 hour", checked: false },
  { id: "hours-2", label: "2 hours", checked: false },
  { id: "hours-3", label: "3 hours", checked: true },
  { id: "hours-4", label: "4 hours", checked: false },
  { id: "hours-57", label: "5-7 hours", checked: true },
  { id: "hours-all", label: "All day", checked: false },
];

const eventTypes = [
  { id: "industry-conferences", label: "Industry Conferences", checked: false },
  { id: "webinars", label: "Webinars", checked: false },
  { id: "sales-kick-offs", label: "Sales Kick-Offs", checked: true },
  { id: "user-conferences", label: "User Conferences", checked: false },
  { id: "private-events", label: "Private Events", checked: true },
  {
    id: "field-marketing-events",
    label: "Field Marketing Events",
    checked: false,
  },
];

export function SearchWithDatepicker() {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  return (
    <div className="m-5 flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="block rounded-lg px-5 text-center text-sm font-medium text-primary-foreground">
            Toggle modal
          </Button>
        </DialogTrigger>
        <DialogContent className="relative h-fit w-full translate-y-0 overflow-auto p-4">
          <DialogHeader>
            <DialogTitle>Filter by date</DialogTitle>
            <DialogClose asChild>
              <span className="sr-only">Close modal</span>
            </DialogClose>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="start">Date</Label>
              <div className="max-w-56 items-center sm:flex sm:space-x-4 ">
                <div className="relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !startDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 size-4" />
                        {startDate ? (
                          format(startDate, "PPP")
                        ) : (
                          <span>Select start date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <span className="mx-2">to</span>
                <div className="relative">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !endDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 size-4" />
                        {endDate ? (
                          format(endDate, "PPP")
                        ) : (
                          <span>Select end date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            <div>
              <Label>Duration</Label>
              <ToggleGroup
                type="multiple"
                className="grid grid-cols-3 gap-3 p-2 md:w-full"
              >
                {durations.map((duration, index) => (
                  <ToggleGroupItem
                    key={duration.id}
                    value={duration.label}
                    className="border-2 border-primary bg-background data-[state=on]:bg-primary-500 data-[state=on]:text-white dark:border-white"
                  >
                    <div className="block">
                      <div className="w-fit text-sm font-semibold sm:text-xs">
                        {duration.label}
                      </div>
                    </div>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
              <div className="mt-4">
                <Switch id="google-meet" />
                <Label htmlFor="google-meet" className="ml-3">
                  Google Meet
                </Label>
              </div>
            </div>
            <div>
              <Label>Event type</Label>
              <div className="space-y-2">
                {eventTypes.map((eventType) => (
                  <div className="mt-3 flex items-center" key={eventType.id}>
                    <Checkbox
                      id={eventType.id}
                      defaultChecked={eventType.checked}
                    />
                    <Label htmlFor={eventType.id} className="ml-2">
                      {eventType.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <div className="flex w-full justify-start">
              <Button className="rounded-lg px-5 py-2.5 text-sm">
                Apply filters
              </Button>
              <Button
                variant="outline"
                className="mx-2 rounded-lg border border-muted-foreground/70 bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-muted-foreground/90 focus:outline-none focus:ring-4 focus:ring-muted-foreground/70"
              >
                Reset
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
