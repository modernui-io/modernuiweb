"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { CalendarIcon, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Component Imports
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Form, FormControl, FormField, FormLabel } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const formSchema = z.object({
  location: z.string().optional(),
  checkIn: z.date().optional(),
  checkOut: z.date().optional(),
  guest: z.number().optional(),
});

export function SearchBarDatepickerHeroSection() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      guest: 2,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-gray-700 bg-[url('https://modernUIWeb.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <MuiLayout.Container className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-white lg:py-16">
        <div className="mb-6 max-w-screen-md lg:mb-0">
          <Heading
            level={"lgDisplay"}
            className="mb-4 text-nowrap font-extrabold leading-tight tracking-tight text-slate-50"
          >
            Every home is a destination
          </Heading>
          <Text className="mb-6 text-slate-300 md:text-lg lg:mb-8 lg:text-xl">
            The best of Luxury Retreats is now modernUIWeb Luxe—offering the
            world&apos;s most extraordinary homes with the highest standard of
            service.
          </Text>
          <Link
            href="#"
            className="inline-flex items-center rounded-lg bg-gray-800 px-5 py-3 text-center font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-900"
          >
            Sign In / Register
          </Link>
        </div>
        <Form {...form}>
          <form
            action="#"
            className="mt-8 grid w-full gap-y-4 rounded bg-primary-50 p-4 lg:mt-12 lg:grid-cols-9 lg:gap-x-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <div className="relative lg:col-span-3">
                  <FormLabel htmlFor="location" className="sr-only">
                    Location
                  </FormLabel>
                  <Input
                    {...field}
                    id="location"
                    placeholder="Search destinations"
                    className="bg-background pl-8 text-primary-900"
                  />
                  <MapPin className="absolute left-2 top-1.5 size-5 text-primary-900" />
                </div>
              )}
            />

            <div className="grid grid-cols-2 gap-x-4 lg:col-span-3">
              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="justify-start text-left font-normal text-primary-900"
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <>
                            <CalendarIcon className="mr-2 size-4" />
                            <span>Check in</span>
                          </>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto bg-popover p-0 text-primary-900">
                      <Calendar
                        selected={field.value}
                        onSelect={field.onChange}
                        mode="single"
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="justify-start text-left font-normal text-foreground"
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <>
                            <CalendarIcon className="mr-2 size-4" />
                            <span>Check out</span>
                          </>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className=" w-auto bg-popover p-0 text-foreground">
                      <Calendar
                        selected={field.value}
                        onSelect={field.onChange}
                        mode="single"
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
            </div>
            <div className="text-foreground lg:col-span-1">
              <FormField
                control={form.control}
                name="guest"
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Add guests" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 4 }).map((_, index) => (
                        <SelectItem key={index} value={`${index + 1}`}>
                          {index + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <Button type="submit" className="lg:col-span-2">
              {" "}
              <MagnifyingGlassIcon className="-ml-1 mr-2 size-5 text-background" />
              Search
            </Button>
          </form>
        </Form>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
