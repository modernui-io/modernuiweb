import { CalendarIcon } from "@radix-ui/react-icons";
import { HiUpload } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
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
import { cn } from "~/lib/utils";

export function TableHeaderWithDateRangePickerFilter() {
  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative shadow-md sm:rounded-lg">
          <div className="divide-y px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex flex-1 items-center space-x-2">
                <h5 className="font-semibold">Total data used</h5>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <Button>View JSON</Button>
                <Button>
                  <HiUpload className="mr-2 size-4" />
                  Export
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-stretch py-4 md:flex-row md:items-center">
              <div className="flex flex-col space-y-3 md:w-2/3 md:flex-row md:items-center md:space-y-0">
                <div className="flex flex-col space-y-1 md:mr-5 md:flex-row md:items-center md:space-y-0">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn("justify-start text-left font-normal")}
                      >
                        <CalendarIcon className="mr-2 size-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" initialFocus />
                    </PopoverContent>
                  </Popover>

                  <span className="px-3 text-center">&nbsp;to&nbsp;</span>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn("justify-start text-left font-normal")}
                      >
                        <CalendarIcon className="mr-2 size-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="min-w-40 md:mr-4">
                  <Select name="compare">
                    <SelectTrigger>
                      <SelectValue placeholder="Compare to" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        { value: "last_year", label: "Last Year" },
                        { value: "last_month", label: "Last Month" },
                        { value: "yesterday", label: "Yesterday" },
                      ].map((item, index) => (
                        <SelectItem key={index} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button className="whitespace-nowrap [&>span]:py-2">
                  Run report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
