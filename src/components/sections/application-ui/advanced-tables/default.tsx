import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { HiChevronDown, HiFilter, HiPlus, HiSearch } from "react-icons/hi";
import { z } from "zod";

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

export function DefaultAdvancedTable() {
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
    <section className="bg-background p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-background shadow-md sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex items-center"
                >
                  <Label htmlFor="simple-search" className="sr-only">
                    Search
                  </Label>
                  <div className="relative flex items-center">
                    <HiSearch className="absolute left-2 size-5 text-gray-500 dark:text-gray-400" />
                    <Input
                      id="simple-search"
                      placeholder="Search"
                      required
                      type="search"
                      className="w-full pl-8 [&_input]:py-2"
                      {...form.register("search")}
                    />
                  </div>
                </form>
              </Form>
            </div>
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Button>
                <HiPlus className="mr-3 size-3" /> Add Product Add product
              </Button>
              <div className="flex w-full items-center space-x-3 md:w-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant={"outline"}>
                      <HiChevronDown className="mr-3 size-3" /> Actions
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
            <Table className="text-sm">
              <TableHeader className="text-xs uppercase">
                <TableRow>
                  <TableHead className="px-4 py-3">Product name</TableHead>
                  <TableHead className="px-4 py-3">Category</TableHead>
                  <TableHead className="px-4 py-3">Brand</TableHead>
                  <TableHead className="px-4 py-3">Description</TableHead>
                  <TableHead className="px-4 py-3">Price</TableHead>
                  <TableHead className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>{" "}
              </TableHeader>
              <TableBody className="min-w-full">
                <TableRow className="min-w-full">
                  <TableCell
                    width={"100%"}
                    className="whitespace-nowrap px-4 py-3 font-medium"
                  >
                    Apple iMac 27&quot;
                  </TableCell>
                  <TableCell className="px-4 py-3">PC</TableCell>
                  <TableCell className="px-4 py-3">Apple</TableCell>
                  <TableCell className="px-4 py-3">300</TableCell>
                  <TableCell className="px-4 py-3">$2999</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                    Apple iMac 20&quot;
                  </TableCell>
                  <TableCell className="px-4 py-3">PC</TableCell>
                  <TableCell className="px-4 py-3">Apple</TableCell>
                  <TableCell className="px-4 py-3">200</TableCell>
                  <TableCell className="px-4 py-3">$1499</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                    Apple iPhone 14&quot;
                  </TableCell>
                  <TableCell className="px-4 py-3">PC</TableCell>
                  <TableCell className="px-4 py-3">Apple</TableCell>
                  <TableCell className="px-4 py-3">1237</TableCell>
                  <TableCell className="px-4 py-3">$2999</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                    Apple iPad Air
                  </TableCell>
                  <TableCell className="px-4 py-3">PC</TableCell>
                  <TableCell className="px-4 py-3">Apple</TableCell>
                  <TableCell className="px-4 py-3">4578</TableCell>
                  <TableCell className="px-4 py-3">$1199</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                    Xbox Series S
                  </TableCell>
                  <TableCell className="px-4 py-3">Gaming/Console</TableCell>
                  <TableCell className="px-4 py-3">Microsoft</TableCell>
                  <TableCell className="px-4 py-3">256</TableCell>
                  <TableCell className="px-4 py-3">$299</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                    PlayStation 5
                  </TableCell>
                  <TableCell className="px-4 py-3">Gaming/Console</TableCell>
                  <TableCell className="px-4 py-3">Sony</TableCell>
                  <TableCell className="px-4 py-3">78</TableCell>
                  <TableCell className="px-4 py-3">$799</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                    Xbox Series X
                  </TableCell>
                  <TableCell className="px-4 py-3">Gaming/Console</TableCell>
                  <TableCell className="px-4 py-3">Microsoft</TableCell>
                  <TableCell className="px-4 py-3">200</TableCell>
                  <TableCell className="px-4 py-3">$699</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                    Apple Watch SE
                  </TableCell>
                  <TableCell className="px-4 py-3">Watch</TableCell>
                  <TableCell className="px-4 py-3">Apple</TableCell>
                  <TableCell className="px-4 py-3">657</TableCell>
                  <TableCell className="px-4 py-3">$399</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                    NIKON D850
                  </TableCell>
                  <TableCell className="px-4 py-3">Camera</TableCell>
                  <TableCell className="px-4 py-3">Nikon</TableCell>
                  <TableCell className="px-4 py-3">465</TableCell>
                  <TableCell className="px-4 py-3">$599</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="whitespace-nowrap px-4 py-3 font-medium">
                    Monitor BenQ EX2710Q
                  </TableCell>
                  <TableCell className="px-4 py-3">TV/Monitor</TableCell>
                  <TableCell className="px-4 py-3">BenQ</TableCell>
                  <TableCell className="px-4 py-3">354</TableCell>
                  <TableCell className="px-4 py-3">$499</TableCell>
                  <TableCell className="flex items-center justify-end px-4 py-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button>
                          <HiPlus className="mr-3 size-3" /> Add Product
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Mass Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete All</DropdownMenuItem>
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
