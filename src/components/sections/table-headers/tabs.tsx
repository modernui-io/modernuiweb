import {
  FaBriefcase,
  FaClipboard,
  FaCreditCard,
  FaUserCircle,
} from "react-icons/fa";
import { HiLocationMarker, HiPlus } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";

export function TableHeaderWithTabs() {
  return (
    <section className="flex items-center bg-gray-50 py-6 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="divide-y px-4 dark:divide-gray-700">
            <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
              <div>
                <h5 className="mb-1 font-semibold dark:text-white">
                  Bonnie Green
                </h5>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <HiLocationMarker className="mr-1 size-4" />
                  <p className="text-sm">New York, United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <h5 className="mb-1 text-gray-500 dark:text-gray-400">
                    Pending payments
                  </h5>
                  <p className="text-lg font-bold text-orange-600">$832</p>
                </div>
                <div>
                  <h5 className="mb-1 text-gray-500 dark:text-gray-400">
                    Received payments
                  </h5>
                  <p className="text-lg font-bold text-green-500">$1956</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3 py-4 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0 md:py-0">
              <div className="md:hidden">
                <Select name="list-navigation">
                  <SelectTrigger className="dark:bg-gray-600 dark:text-white">
                    <SelectValue placeholder="Overview" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="overview">Overview</SelectItem>
                    <SelectItem value="works">Works</SelectItem>
                    <SelectItem value="payments">Payments</SelectItem>
                    <SelectItem value="clients">Clients</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Tabs
                defaultValue={"works"}
                className="-mb-2.5 hidden py-4 md:flex [&>button]:dark:focus:ring-transparent"
              >
                <TabsList className="flex gap-5 bg-white dark:bg-gray-600">
                  <TabsTrigger value="overview">
                    <FaUserCircle className="mr-2 size-3" /> Overview
                  </TabsTrigger>
                  <TabsTrigger value="works">
                    <FaClipboard className="mr-2 size-3" /> Works
                  </TabsTrigger>
                  <TabsTrigger value="payments">
                    <FaCreditCard className="mr-2 size-3" /> Payments
                  </TabsTrigger>
                  <TabsTrigger value="clients">
                    <FaBriefcase className="mr-2 size-3" /> Clients
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <Button>
                <HiPlus className="mr-2 size-3.5" />
                Add new item
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
