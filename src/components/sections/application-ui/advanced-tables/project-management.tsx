import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HiClock,
  HiCog,
  HiDotsHorizontal,
  HiExternalLink,
  HiFilter,
  HiPlay,
  HiPlus,
  HiSearch,
} from "react-icons/hi";
import { z } from "zod";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Form } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { Progress } from "~/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const formSchema = z.object({
  search: z.string(),
});

export function AdvancedProjectManagementTableForUserTasks() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="bg-background py-3 sm:py-5">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <div className="mx-4 border-b">
            <div className="flex items-center justify-between space-x-4 pt-3">
              <div className="flex flex-1 items-center space-x-3">
                <h5 className="font-semibold dark:text-white">All Tasks</h5>
              </div>
            </div>
            <div className="flex flex-col-reverse items-center justify-between py-3 md:flex-row md:space-x-4">
              <div className="flex w-full flex-col space-y-3 md:flex-row md:items-center md:space-y-0 lg:w-2/3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full flex-1 md:mr-4 md:max-w-sm"
                  >
                    <Label
                      htmlFor="default-search"
                      className="sr-only text-sm font-medium"
                    >
                      Search
                    </Label>
                    <div className="relative flex items-center">
                      <HiSearch className="absolute left-3 size-4 text-gray-500 dark:text-gray-400" />
                      <Input
                        id="default-search"
                        name="default-search"
                        placeholder="Search..."
                        required
                        type="search"
                        className="pl-7 [&_input]:py-2"
                      />
                      <Button
                        type="submit"
                        className="absolute inset-y-0 right-0 rounded-l-none rounded-r-lg"
                      >
                        Search
                      </Button>
                    </div>
                  </form>
                </Form>
                <div className="flex items-center space-x-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>
                        <HiFilter className="mr-2 size-4" />
                        Filter
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <div className="p-3">
                        <h6 className="mb-2 text-sm font-medium">By status</h6>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Label className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                              <Checkbox
                                id="in-progress"
                                name="in-progress"
                                className="mr-2"
                              />
                              In progress
                            </Label>
                          </li>
                          <li>
                            <Label className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                              <Checkbox
                                id="in-review"
                                name="in-review"
                                className="mr-2"
                              />
                              In review
                            </Label>
                          </li>
                          <li>
                            <Label className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                              <Checkbox
                                id="completed"
                                name="completed"
                                className="mr-2"
                              />
                              Completed
                            </Label>
                          </li>
                          <li>
                            <Label className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                              <Checkbox
                                id="cancelled"
                                name="cancelled"
                                className="mr-2"
                              />
                              Cancelled
                            </Label>
                          </li>
                        </ul>
                        <h6 className="mb-2 mt-4 text-sm font-medium">
                          By number of users
                        </h6>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Label className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                              <Checkbox
                                id="people-1"
                                name="people-1"
                                className="mr-2"
                              />
                              5-10 people
                            </Label>
                          </li>
                          <li>
                            <Label className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                              <Checkbox
                                id="people-2"
                                name="people-2"
                                className="mr-2"
                              />
                              10+ people
                            </Label>
                          </li>
                          <li>
                            <Label className="flex w-full items-center rounded-md px-1.5 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600">
                              <Checkbox
                                id="people-3"
                                name="people-3"
                                className="mr-2"
                              />
                              More than 10 people
                            </Label>
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="ml-1.5 mt-4 flex items-center text-sm font-medium hover:underline"
                        >
                          Apply to all projects
                        </a>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>
                        <HiCog className="mr-2 size-4" />
                        Configurations
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>By Category</DropdownMenuItem>
                      <DropdownMenuItem>By Brand</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Reset</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="mb-3 flex w-full shrink-0 flex-col items-stretch justify-end md:mb-0 md:w-auto md:flex-row md:items-center md:space-x-3">
                <Button className="flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium">
                  <HiPlus className="mr-2 size-3.5" />
                  Add new task
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-4 flex flex-wrap pb-3">
            <div className="mr-4 mt-3 hidden items-center text-sm font-medium md:flex">
              Show only:
            </div>
            <div className="flex flex-wrap">
              <div className="mr-4 mt-3 flex items-center">
                <Checkbox id="all-tasks" name="show-only" />
                <Label htmlFor="all-tasks" className="ml-2 text-sm font-medium">
                  All
                </Label>
              </div>
              <div className="mr-4 mt-3 flex items-center">
                <Checkbox id="completed" name="show-only" />
                <Label htmlFor="completed" className="ml-2 text-sm font-medium">
                  Completed tasks
                </Label>
              </div>
              <div className="mr-4 mt-3 flex items-center">
                <Checkbox id="in-progress" name="show-only" />
                <Label
                  htmlFor="in-progress"
                  className="ml-2 text-sm font-medium"
                >
                  Tasks in progress
                </Label>
              </div>
              <div className="mr-4 mt-3 flex items-center">
                <Checkbox id="in-review" name="show-only" />
                <Label htmlFor="in-review" className="ml-2 text-sm font-medium">
                  Tasks in review
                </Label>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full text-left text-sm">
              <TableHeader className="text-xs uppercase">
                <TableRow>
                  <TableHead className="p-4">
                    <div className="flex items-center">
                      <Checkbox id="checkbox-all" name="checkbox-all" />
                      <Label htmlFor="checkbox-all" className="sr-only">
                        Check all
                      </Label>
                    </div>
                  </TableHead>
                  <TableHead className="px-4 py-3">Task</TableHead>
                  <TableHead className="px-4 py-3">Status</TableHead>
                  <TableHead className="px-4 py-3">Users</TableHead>
                  <TableHead className="min-w-56 px-4 py-3">Progress</TableHead>
                  <TableHead className="px-4 py-3">Preview</TableHead>
                  <TableHead className="px-4 py-3">Time Tracking</TableHead>
                  <TableHead className="px-4 py-3">Due Date</TableHead>
                  <TableHead className="px-4 py-3">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    Upload feed and Reels in Instagram
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge className="w-fit">In progress</Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>+5</AvatarFallback>
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        75%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress value={75} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      <span className="text-green-500">6:47</span>
                      /8:00
                      <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                        <HiClock className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    23 Nov 2022
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    Crossplatform analysis
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge className="w-fit bg-green-500">Completed</Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>+5</AvatarFallback>
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress color="green" value={100} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      7:00
                      <button className="ml-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <HiPlay className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    03 Nov 2022
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    Product features analysis
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge className="w-fit">In progress</Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>+5</AvatarFallback>
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        50%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress value={50} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      <span className="text-green-500">3:25</span>
                      /8:00
                      <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                        <HiClock className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    Yesterday
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    Create use story
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge className="w-fit bg-green-500">Completed</Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>+5</AvatarFallback>
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress color="green" value={75} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      8:00
                      <button className="ml-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <HiPlay className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    23 Nov 2022
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    Users profile update
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge className="w-fit">In progress</Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>+5</AvatarFallback>
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        20%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress value={20} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      <span className="text-green-500">4:21</span>
                      /8:00
                      <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                        <HiClock className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    Yesterday
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    User flow update
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge className="w-fit bg-green-500">Completed</Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>+5</AvatarFallback>
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress color="green" value={100} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      7:00
                      <button className="ml-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <HiPlay className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    23 Oct 2022
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    Update design system
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge color="warning" className="w-fit">
                      In review
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>+5</AvatarFallback>
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress color="yellow" value={100} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      7:00
                      <button className="ml-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <HiPlay className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    02 Nov 2022
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    Create a new logo
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge className="w-fit bg-green-500">Completed</Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>+5</AvatarFallback>
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress color="green" value={100} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      5:00
                      <button className="ml-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <HiPlay className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    30 Oct 2022
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    Screen structure
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge color="warning" className="w-fit">
                      In review
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        100%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress color="yellow" value={100} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      2:00
                      <button className="ml-3 rounded-md bg-green-500 p-1 text-white hover:bg-green-700">
                        <HiPlay className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    23 Nov 2022
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
                  <TableCell className="w-4 px-4 py-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="checkbox-table-search-1"
                        name="checkbox-table-search-1"
                      />
                      <Label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        Select this project
                      </Label>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    Implement GPT 3
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <Badge className="w-fit">In progress</Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="flex w-28 -space-x-4">
                      <Avatar>
                        <AvatarImage
                          alt="Helene Engels"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-10.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Robert Brown"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-1.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          alt="Bonnie Green"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-3.png"
                        />
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>+5</AvatarFallback>
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <div className="mb-1 flex justify-end">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        25%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full">
                      <Progress value={25} />
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 font-medium">
                    <a
                      href="#"
                      className="inline-flex items-center font-medium hover:underline"
                    >
                      <HiExternalLink className="mr-1 size-4" />
                      Website
                    </a>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2">
                    <div className="inline-flex items-center rounded-lg border px-2 py-1 text-xs font-medium">
                      <HiClock className="mr-1 size-4 text-gray-400" />
                      <span className="text-green-500">3:11</span>
                      /8:00
                      <button className="ml-3 rounded-md bg-orange-500 p-1 text-white hover:bg-orange-700">
                        <HiClock className="size-4" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-xs font-medium">
                    Today
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Edit project</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Show</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-nowrap text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing&nbsp;
              <span className="font-semibold">1-10</span>
              &nbsp;of&nbsp;
              <span className="font-semibold">1000</span>
            </span>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious title="" onClick={() => onPageChange} />
                </PaginationItem>
                {Array.from({ length: 3 }, (_, index) => index + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext onClick={() => onPageChange} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </nav>
        </div>
      </div>
    </section>
  );
}
