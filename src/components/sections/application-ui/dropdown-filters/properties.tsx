import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Cross1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { HiTrash } from "react-icons/hi";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const countries = [
  { value: "all", label: "All" },
  { value: "canada", label: "Canada" },
  { value: "france", label: "France" },
  { value: "germany", label: "Germany" },
];

const domains = [
  { value: "modernui", label: "Modernui.com" },
  { value: "facebook", label: "Facebook.com" },
  { value: "twitter", label: "Twitter.com" },
  { value: "google", label: "Google.com" },
];

const formSchema = z.object({
  include: z.string(),
  include2: z.string(),
  referringDomain: z.string(),
  referringDomain2: z.string(),
  match: z.string(),
  match2: z.string(),
  domain: z.string(),
  domain2: z.string(),
});

export function DropdownFilterProperties() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      include: "",
      include2: "",
      referringDomain: "",
      referringDomain2: "",
      match: "",
      match2: "",
      domain: "",
      domain2: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Filter by properties <FaChevronDown className="ml-3 size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 p-2"
          >
            <div className="flex items-center space-x-3 rounded-lg">
              <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                <FormField
                  control={form.control}
                  name="include"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger className="sm:text-xs">
                            <SelectValue placeholder="Include" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="referringDomain"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger className="sm:text-xs">
                            <SelectValue placeholder="Referring domain" />
                          </SelectTrigger>
                          <SelectContent>
                            {domains.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="match"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          id="match"
                          placeholder="Exactly matching"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="domain"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          id="domain"
                          placeholder="Enter domain"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="button" variant={"ghost"} className="px-0">
                <HiTrash className="size-5" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
            <div className="flex items-center space-x-3 rounded-lg">
              <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                <FormField
                  control={form.control}
                  name="include2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger className="sm:text-xs">
                            <SelectValue placeholder="Include" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="referringDomain2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select {...field}>
                          <SelectTrigger className="sm:text-xs">
                            <SelectValue placeholder="Referring domain" />
                          </SelectTrigger>
                          <SelectContent>
                            {domains.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="match2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          id="match2"
                          placeholder="Exactly matching"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="domain2"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          id="domain2"
                          placeholder="Enter domain"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="button" variant={"ghost"} className="px-0">
                <HiTrash className="size-5" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
            <Link
              href="#"
              className="flex items-center border-b pb-2 text-sm font-medium text-primary-600 hover:underline"
            >
              <PlusIcon className="mr-2 size-4" />
              Add Property
            </Link>
            <div className="flex items-center justify-between">
              <Button type="submit" className="[&>span]:px-5 [&>span]:py-2.5">
                Apply
              </Button>
              <Button
                variant={"ghost"}
                className="flex items-center rounded-lg px-5 py-2.5 text-sm font-medium"
              >
                <Cross1Icon className="mr-1 size-3.5" />
                Clear all
              </Button>
            </div>
          </form>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
