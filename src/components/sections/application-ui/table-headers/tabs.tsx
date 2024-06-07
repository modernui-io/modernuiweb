import Link from "next/link";

import {
  FaBriefcase,
  FaClipboard,
  FaCreditCard,
  FaUserCircle,
} from "react-icons/fa";
import { FaTruckField } from "react-icons/fa6";
import { HiLocationMarker, HiPlus } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Tabs } from "~/components/ui/tabs";

export function TableHeaderWithTabs() {
  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <div className="divide-y px-4">
            <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
              <div>
                <h5 className="mb-1 font-semibold">Bonnie Green</h5>
                <div className="flex items-center text-gray-500">
                  <HiLocationMarker className="mr-1 size-4" />
                  <Text className="text-sm">New York, United States</Text>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <h5 className="mb-1 text-gray-500">Pending payments</h5>
                  <Text className="text-lg font-bold text-orange-600">
                    $832
                  </Text>
                </div>
                <div>
                  <h5 className="mb-1 text-gray-500">Received payments</h5>
                  <Text className="text-lg font-bold text-green-500">
                    $1956
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3 py-4 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0 md:py-0">
              <div className="md:hidden">
                <Select name="list-navigation">
                  <SelectTrigger>
                    <SelectValue placeholder="Overview" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      { value: "overview", label: "Overview" },
                      { value: "works", label: "Works" },
                      { value: "payments", label: "Payments" },
                      { value: "clients", label: "Clients" },
                    ].map((item, index) => (
                      <SelectItem key={index} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Tabs defaultValue={"works"} className="hidden py-4 md:flex">
                <ul className="flex bg-background">
                  {[
                    {
                      icon: <FaUserCircle className="mr-2 size-3" />,
                      text: "Overview",
                      active: false,
                    },
                    {
                      icon: <FaClipboard className="mr-2 size-3" />,
                      text: "Works",
                      active: true,
                    },
                    {
                      icon: <FaCreditCard className="mr-2 size-3" />,
                      text: "Payments",
                      active: false,
                    },
                    {
                      icon: <FaBriefcase className="mr-2 size-3" />,
                      text: "Clients",
                      active: false,
                    },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      className={`-mb-4 flex items-center border-b-2 px-3 pb-5 hover:border-primary-600 hover:text-primary-600 ${item.active ? "border-primary-600 text-primary-600" : ""}`}
                      href="#"
                    >
                      {item.icon} {item.text}
                    </Link>
                  ))}
                </ul>
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
