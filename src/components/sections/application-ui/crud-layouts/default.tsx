import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  HiChevronDown,
  HiDotsHorizontal,
  HiEye,
  HiFilter,
  HiPencilAlt,
  HiPlus,
  HiSearch,
  HiTrash,
} from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Textarea } from "~/components/ui/textarea";

const products = [
  { value: "EL", label: "Electronics" },
  { value: "AL", label: "TV/Monitors" },
  { value: "PC", label: "PC" },
  { value: "GA", label: "Gaming/Console" },
  { value: "PH", label: "Phones" },
];

const formSchema = z.object({
  name: z.string(),
  brand: z.string(),
  price: z.string(),
  description: z.string(),
  category: z.enum(["EL", "AL", "PC", "GA", "PH"]),
});

export function DefaultCRUDLayout() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowReadModal, setShowReadModal] = useState(false);
  const [isShowUpdateModal, setShowUpdateModal] = useState(false);
  const [isShowDeleteModal, setShowDeleteModal] = useState(false);

  const onPageChange = (page: number) => setCurrentPage(page);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      brand: "",
      price: "",
      description: "",
      category: "AL",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="bg-background p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <Label htmlFor="simple-search" className="sr-only">
                Search
              </Label>
              <div className="relative flex w-full items-center">
                <HiSearch className="absolute left-3" />
                <Input
                  id="simple-search"
                  name="simple-search"
                  placeholder="Search"
                  required
                  type="search"
                  className="w-full pl-8 [&_input]:py-2"
                />
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <HiPlus className="size-4" /> Add product
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-lg p-4 shadow sm:p-5">
                  <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
                    <h3 className="text-lg font-semibold">Add Product</h3>
                  </div>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <div className="mb-4 grid gap-4 sm:grid-cols-2">
                        <div>
                          <Label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium"
                          >
                            Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Type product name"
                            required
                            {...form.register("name")}
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="brand"
                            className="mb-2 block text-sm font-medium"
                          >
                            Brand
                          </Label>
                          <Input
                            id="brand"
                            placeholder="Product brand"
                            {...form.register("brand")}
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="price"
                            className="mb-2 block text-sm font-medium"
                          >
                            Price
                          </Label>
                          <Input
                            id="price"
                            placeholder="$2999"
                            type="number"
                            {...form.register("price")}
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="category"
                            className="mb-2 block text-sm font-medium"
                          >
                            Category
                          </Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Electronics" />
                            </SelectTrigger>
                            <SelectContent>
                              {products.map((item, index) => (
                                <SelectItem key={index} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="sm:col-span-2">
                          <Label
                            htmlFor="description"
                            className="mb-2 block text-sm font-medium"
                          >
                            Description
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Write product description here"
                            rows={4}
                            {...form.register("description")}
                          />
                        </div>
                      </div>
                      <Button type="submit" className="text-sm">
                        <HiPlus className="-ml-1 mr-2 size-4" />
                        Add new product
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
              <div className="flex w-full items-center space-x-3 md:w-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                      <HiChevronDown className="mr-1 size-5" /> Actions
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete All</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                      <HiFilter className="mr-2 size-4" />
                      <span>Filter</span>
                      <HiChevronDown className="ml-1 size-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-3">
                    <h6 className="mb-3 text-sm font-medium">Choose brand</h6>
                    <ul className="space-y-2 text-sm">
                      {[
                        { id: "apple", name: "Apple (56)" },
                        { id: "fitbit", name: "Microsoft (16)" },
                        { id: "razer", name: "Razer (49)" },
                        { id: "nikon", name: "Nikon (12)" },
                        { id: "benq", name: "BenQ (74)" },
                      ].map((brand) => (
                        <DropdownMenuItem
                          key={brand.id}
                          className="flex items-center"
                        >
                          <Checkbox id={brand.id} name={brand.id} />
                          <Label
                            htmlFor={brand.id}
                            className="ml-2 text-sm font-medium"
                          >
                            {brand.name}
                          </Label>
                        </DropdownMenuItem>
                      ))}
                    </ul>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <TableHeader className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <TableRow>
                  <TableHead scope="col" className="px-5 py-4">
                    Product name
                  </TableHead>
                  <TableHead scope="col" className="px-5 py-4">
                    Category
                  </TableHead>
                  <TableHead scope="col" className="px-5 py-4">
                    Brand
                  </TableHead>
                  <TableHead scope="col" className="px-5 py-4">
                    Description
                  </TableHead>
                  <TableHead scope="col" className="px-5 py-4">
                    Price
                  </TableHead>
                  <TableHead scope="col" className="px-5 py-4">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap p-5 font-medium"
                  >
                    Apple iMac 27&quot;
                  </TableCell>
                  <TableCell className="p-5">PC</TableCell>
                  <TableCell className="p-5">Apple</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$2999</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell className="whitespace-nowrap p-5 font-medium">
                    Apple iMac 20&quot;
                  </TableCell>
                  <TableCell className="p-5">PC</TableCell>
                  <TableCell className="p-5">Apple</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$1499</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell className="whitespace-nowrap p-5 font-medium">
                    Apple iPhone 14&quot;
                  </TableCell>
                  <TableCell className="p-5">PC</TableCell>
                  <TableCell className="p-5">Apple</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$2999</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell className="whitespace-nowrap p-5 font-medium">
                    Apple iPad Air
                  </TableCell>
                  <TableCell className="p-5">PC</TableCell>
                  <TableCell className="p-5">Apple</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$1199</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell className="whitespace-nowrap p-5 font-medium">
                    Xbox Series S
                  </TableCell>
                  <TableCell className="p-5">Gaming/Console</TableCell>
                  <TableCell className="p-5">Microsoft</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$299</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell className="whitespace-nowrap p-5 font-medium">
                    PlayStation 5
                  </TableCell>
                  <TableCell className="p-5">Gaming/Console</TableCell>
                  <TableCell className="p-5">Sony</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$799</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell className="whitespace-nowrap p-5 font-medium">
                    Xbox Series X
                  </TableCell>
                  <TableCell className="p-5">Gaming/Console</TableCell>
                  <TableCell className="p-5">Microsoft</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$699</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell className="whitespace-nowrap p-5 font-medium">
                    Apple Watch SE
                  </TableCell>
                  <TableCell className="p-5">Watch</TableCell>
                  <TableCell className="p-5">Apple</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$399</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell className="whitespace-nowrap p-5 font-medium">
                    NIKON D850
                  </TableCell>
                  <TableCell className="p-5">Camera</TableCell>
                  <TableCell className="p-5">Nikon</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$599</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b dark:border-gray-700">
                  <TableCell className="whitespace-nowrap p-5 font-medium">
                    Monitor BenQ EX2710Q
                  </TableCell>
                  <TableCell className="p-5">TV/Monitor</TableCell>
                  <TableCell className="p-5">BenQ</TableCell>
                  <TableCell className="p-5">
                    What is a product description?
                  </TableCell>
                  <TableCell className="p-5">$499</TableCell>
                  <TableCell className="flex items-center justify-end p-5">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant={"ghost"}>
                          <span className="sr-only">Manage entry</span>
                          <HiDotsHorizontal className="size-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          onClick={() => setShowUpdateModal(true)}
                        >
                          <HiPencilAlt className="mr-2 size-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setShowReadModal(true)}
                        >
                          <HiEye className="mr-2 size-4" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => setShowDeleteModal(true)}
                        >
                          <HiTrash className="mr-2 size-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-5 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-nowrap text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing&nbsp;
              <span className="font-semibold">1-10</span>
              &nbsp;of&nbsp;
              <span className="font-semibold">1000</span>
            </span>
            <div>
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
            </div>
          </nav>
        </div>
      </div>

      <Dialog open={isShowUpdateModal} onOpenChange={setShowUpdateModal}>
        <DialogContent className="rounded-lg p-4 shadow sm:p-5">
          <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 sm:mb-5">
            <h3 className="text-lg font-semibold">Update Product</h3>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="iPad Air Gen 5th Wi-Fi"
                    placeholder="Type product name"
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="brand"
                    className="mb-2 block text-sm font-medium"
                  >
                    Brand
                  </Label>
                  <Input
                    id="brand"
                    placeholder="Product brand"
                    defaultValue="Google"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="price"
                    className="mb-2 block text-sm font-medium"
                  >
                    Price
                  </Label>
                  <Input
                    id="price"
                    placeholder="$2999"
                    type="number"
                    defaultValue="399"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="category"
                    className="mb-2 block text-sm font-medium"
                  >
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Electronics" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((item, index) => (
                        <SelectItem key={index} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium"
                  >
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Write product description here"
                    rows={4}
                    defaultValue="Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
                    Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD
                    storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US"
                  />
                </div>
              </div>
              <Button type="submit" className="text-sm">
                <HiPlus className="-ml-1 mr-2 size-4" />
                Add new product
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={isShowReadModal} onOpenChange={setShowReadModal}>
        <DialogContent className="rounded-lg bg-background p-4 shadow sm:p-5">
          <div className="mb-4 flex justify-between rounded-t sm:mb-5">
            <div className="text-lg md:text-xl">
              <h3 className="font-semibold ">Apple iMac 27”</h3>
              <Text className="font-bold">$2999</Text>
            </div>
          </div>
          <dl>
            <dt className="mb-2 font-semibold leading-none">Details</dt>
            <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
              Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
              processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
              Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
              Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </dd>
            <dt className="mb-2 font-semibold leading-none">Category</dt>
            <dd className="mb-4 text-gray-500 dark:text-gray-400 sm:mb-5">
              Electronics/PC
            </dd>
          </dl>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Button size="lg" className="[&>span]:text-sm">
                <HiPencilAlt className="-ml-1 mr-1 size-5" />
                Edit
              </Button>
              <Button size="lg" variant={"outline"}>
                Preview
              </Button>
            </div>
            <Button
              variant={"destructive"}
              size="lg"
              className="inline-flex [&>span]:text-sm"
            >
              <HiTrash className="-ml-1 mr-1.5 size-5" />
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isShowDeleteModal} onOpenChange={setShowDeleteModal}>
        <DialogContent className="justify-center rounded-lg bg-background p-4 shadow sm:p-5">
          <HiTrash className="mx-auto mb-3.5 size-11 text-gray-400 dark:text-gray-500" />
          <Text className="mb-4 text-gray-500 dark:text-gray-300">
            Are you sure you want to delete this item?
          </Text>
          <div className="flex items-center justify-center space-x-4">
            <DialogClose asChild>
              <Button>No, cancel</Button>
            </DialogClose>
            <Button variant={"destructive"} type="submit">
              Yes, I&apos;m sure
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
