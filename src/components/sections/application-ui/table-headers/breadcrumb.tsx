import { FaChevronDown } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function TableHeaderWithBreadcrumb() {
  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden px-4 shadow-md sm:rounded-lg">
          <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
            <div>
              <Breadcrumb className="rounded-lg border bg-gray-50 p-2 dark:bg-gray-800">
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
                    <BreadcrumbPage>All Products</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h5 className="pt-1">
                <span>View list of products</span>
              </h5>
            </div>
            <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
              <Button>
                <HiPlus className="-ml-1 mr-1.5 size-3.5" />
                Add new product
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 pb-4 md:grid-cols-3 lg:grid-cols-6">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "samsung", label: "Samsung" },
                  { value: "apple", label: "Apple" },
                  { value: "nokia", label: "Nokia" },
                  { value: "sony", label: "Sony" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "tablet", label: "Tablet" },
                  { value: "phone", label: "Phone" },
                  { value: "tv", label: "TV" },
                  { value: "console", label: "Console" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Color" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "black", label: "Black" },
                  { value: "white", label: "White" },
                  { value: "silver", label: "Silver" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "tablet", label: "Tablet" },
                  { value: "phone", label: "Phone" },
                  { value: "tv", label: "TV" },
                  { value: "console", label: "Console" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sold by" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "samsung", label: "Samsung" },
                  { value: "apple", label: "Apple" },
                  { value: "nokia", label: "Nokia" },
                  { value: "modernui", label: "ModernUI" },
                ].map((item, index) => (
                  <SelectItem key={index} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Return Policy" />
              </SelectTrigger>
              <SelectContent>
                {[
                  { value: "30-days", label: "30 days" },
                  { value: "14-days", label: "14 days" },
                  { value: "no-returns", label: "No returns" },
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
                    { value: "by-category", label: "By Category" },
                    { value: "by-price", label: "By Price" },
                    { value: "by-state", label: "By State" },
                    { value: "by-brand", label: "By Brand" },
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
                <DropdownMenuContent side={"top"} className="w-36">
                  <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete All</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
