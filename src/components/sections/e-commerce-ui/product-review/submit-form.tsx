import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Flag } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Ratings } from "~/components/ui/custom/ratings";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Textarea } from "~/components/ui/textarea";
import BMW from "~/lib/assets/images/bmw.svg";
import Ford from "~/lib/assets/images/ford.svg";
import Visa from "~/lib/assets/images/visa.svg";

const reviews = [
  {
    name: "Micheal Gough",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    totalReviews: 34,
    title: "Fast and reliable",
    rating: 5,
    date: "November 18 2023 at 15:08",
    content:
      "My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I&apos;m very happy with this purchase.",
    helpful: 2,
  },
  {
    name: "Jese Leos",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    totalReviews: 4,
    title: 'Finally went back to a "desktop"',
    rating: 5,
    date: "November 10 2023 at 17:06",
    content:
      "It&apos;s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this computer. Highly recommend!",
    helpful: 0,
  },
  {
    name: "Roberta Casas",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
    totalReviews: 2,
    title: "Excellent bit of kit",
    rating: 5,
    date: "October 05 2023 at 20:02",
    content:
      "My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I&apos;m very happy with this purchase.",
    helpful: 13,
  },
  {
    name: "Bonnie Green",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg",
    totalReviews: 45,
    title: "The greatest computer I&apos;ve ever had!",
    rating: 5,
    date: "October 05 2023 at 09:41",
    content:
      "I have used earlier Mac computers in my university work for a number of years and found them easy to use.The iMac 2021 is no exception. It works straight out of the box giving superb definition from the HD screen.",
    helpful: 6,
  },
  {
    name: "Lana Byrd",
    avatar: "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
    totalReviews: 11,
    title: "Great value for money",
    rating: 5,
    date: "October 01 2023 at 14:48",
    content:
      "I replaced my 11 year old iMac with the new M1 Apple. I wanted to remain with Apple as my old one is still working perfectly and all Apple products are so reliable. Setting up was simple and fast and transferring everything from my previous iMac worked perfectly.",
    helpful: 2,
  },
];

const reportSchema = z.object({
  type: z.enum(["abuse", "violation"], {
    required_error: "You need to select one report type",
  }),
  title: z.string(),
  description: z.string(),
  file: z.any().optional(),
  terms: z.boolean(),
});

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  file: z.any().optional(),
  terms: z.boolean(),
});

export const SubmitForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      terms: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const report = useForm<z.infer<typeof reportSchema>>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      title: "",
      description: "",
      terms: false,
    },
  });

  function onReportSubmit(values: z.infer<typeof reportSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <MuiLayout.Section className="bg-background py-8 antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <Heading level={4} className="mb-2 font-bold leading-tight">
          Reviews
        </Heading>
        <div>
          <div className="mx-auto max-w-screen-xl">
            <div className="mt-6 flex flex-wrap gap-4 rounded-lg border border-primary-200 bg-background p-4 shadow-sm sm:gap-6 sm:p-6 lg:gap-8 lg:p-8">
              <div className="flex flex-1 flex-col justify-start space-y-3">
                <Text className="self-start text-3xl font-bold leading-none text-foreground">
                  5/5
                </Text>
                <Text className="self-start text-base font-normal leading-none text-primary-500">
                  Average rating
                </Text>
                <div className="space-y-1 self-start">
                  <div className="flex items-start">
                    <Ratings rating={4} variant="yellow" totalStars={5} />
                  </div>
                  <Text className="text-sm font-normal leading-none text-primary-500">
                    (3,657 reviews)
                  </Text>
                </div>
              </div>

              <div className="hidden min-h-full w-px shrink-0 bg-primary-200  lg:block"></div>

              <div className="flex flex-1 flex-col items-start space-y-3">
                <Text className="text-3xl font-bold leading-none text-foreground">
                  100M+
                </Text>
                <Text className="text-base font-normal leading-none text-primary-500">
                  Worldwide Clients
                </Text>
                <div className="flex items-center gap-4">
                  <Image
                    className="h-6"
                    src={Ford}
                    width={40}
                    height={40}
                    alt="Ford logo"
                  />
                  <Image
                    className="h-6"
                    src={Visa}
                    alt="Visa logo"
                    width={40}
                    height={40}
                  />
                  <Image
                    className="h-8"
                    src={BMW}
                    alt="BMW logo"
                    width={40}
                    height={40}
                  />
                </div>
              </div>

              <div className="hidden min-h-full w-px shrink-0 bg-primary-200  lg:block"></div>

              <div className="h-px w-full shrink-0 bg-primary-200  lg:hidden"></div>

              <div className="w-full max-w-md">
                <div className="mb-4 flex flex-col items-start space-y-3">
                  <Text className="text-xl font-semibold leading-none text-foreground">
                    Do you own or have you used the product?
                  </Text>
                  <Text className="text-base font-normal leading-none text-primary-500">
                    Give your opinion by rating the product
                  </Text>
                  <div className="flex items-center">
                    <Ratings rating={0} variant="yellow" totalStars={5} />
                    <Button
                      variant="link"
                      className="ms-1.5 pl-2 text-sm font-medium leading-none text-foreground hover:underline"
                    >
                      Give a note
                    </Button>
                  </div>
                </div>

                <Button className="block rounded-lg bg-primary-700 px-5 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                  Write a customer review
                </Button>
              </div>
            </div>

            <div className="mt-6 sm:flex sm:items-end sm:justify-between">
              <Text className="text-sm font-normal leading-tight text-foreground">
                Showing <span className="font-semibold">5,768</span> Customer
                Reviews
              </Text>

              <div className="mt-4 shrink-0 space-y-4 sm:mt-0 sm:flex sm:max-w-sm sm:items-center sm:gap-4 sm:space-y-0">
                <div>
                  <Label
                    htmlFor="reviews"
                    className="sr-only mb-2 block text-sm font-medium text-foreground"
                  >
                    Select review type
                  </Label>
                  <select
                    id="reviews"
                    className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 pr-2 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option selected>All Reviews</option>
                    <option value="5 stars">5 stars</option>
                    <option value="4 stars">4 stars</option>
                    <option value="3 stars">3 stars</option>
                    <option value="2 stars">2 stars</option>
                    <option value="1 star">1 star</option>
                  </select>
                </div>

                <div>
                  <Label
                    htmlFor="time"
                    className="sr-only mb-2 block text-sm font-medium text-foreground"
                  >
                    Select time
                  </Label>
                  <select
                    id="time"
                    className="block w-full rounded-lg border border-primary-300 bg-primary-50 py-2.5 pl-2.5 pr-10 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option selected>Recently Added</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6 divide-y divide-primary-200 border-t border-primary-200">
              {reviews.map((review, index) => (
                <article key={index} className="flex flex-col items-start py-6">
                  <div className="mb-3 flex items-center">
                    <Image
                      className="mr-4 size-10 rounded-lg"
                      width={40}
                      height={40}
                      src={review.avatar}
                      alt={`${review.name} avatar`}
                    />
                    <div className="font-medium">
                      <Text>{review.name}</Text>
                      <Text className="text-sm font-normal text-primary-500">
                        Total Reviews:
                        <span className="font-medium text-foreground">
                          {review.totalReviews}
                        </span>
                      </Text>
                    </div>
                  </div>

                  <Heading level={4} className="mb-1 font-semibold">
                    {review.title}
                  </Heading>

                  <div className="mb-3 flex items-center space-x-2">
                    <div className="flex items-center space-x-0.5 rtl:space-x-reverse">
                      <Ratings
                        rating={review.rating}
                        variant="yellow"
                        totalStars={5}
                        size={18}
                      />
                    </div>
                    <Text className="ms-2 text-sm font-normal text-primary-500">
                      {review.date}
                    </Text>
                  </div>

                  <Text className="mb-3 text-start text-base font-normal text-primary-500">
                    {review.content}
                  </Text>

                  <aside>
                    <div className="mt-3 flex items-center">
                      <Link
                        href="#"
                        className="rounded-lg border border-primary-200 bg-background px-2 py-1.5 text-xs font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-100"
                      >
                        Helpful ({review.helpful})
                      </Link>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="link"
                            className="ms-4 inline-flex items-center gap-1.5 pl-2 text-sm font-medium text-foreground hover:underline"
                          >
                            <Flag className="size-5 text-foreground" />
                            Report
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader className="border-b border-primary-200">
                            <Heading level={4} className="mb-4 font-semibold">
                              File a report
                            </Heading>
                          </DialogHeader>
                          <Form {...report}>
                            <form
                              className="p-4 pt-2 md:p-5"
                              onSubmit={report.handleSubmit(onReportSubmit)}
                            >
                              <div className="mb-4 grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                  <Label
                                    htmlFor="issue-radio"
                                    className="mb-2 block text-sm font-medium text-secondary-foreground"
                                  >
                                    What kind of issue you&apos;re having?
                                  </Label>
                                  <FormField
                                    control={report.control}
                                    name="type"
                                    render={({ field }) => (
                                      <FormItem className="space-y-3">
                                        <FormControl>
                                          <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col space-y-1"
                                          >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                              <FormControl>
                                                <RadioGroupItem value="abuse" />
                                              </FormControl>
                                              <FormLabel className="font-normal">
                                                Report listing abuse
                                              </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                              <FormControl>
                                                <RadioGroupItem value="violation" />
                                              </FormControl>
                                              <FormLabel className="font-normal">
                                                Report a violation
                                              </FormLabel>
                                            </FormItem>
                                          </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                <div className="col-span-2">
                                  <Label
                                    htmlFor="reason"
                                    className="mb-2 block text-sm font-medium text-secondary-foreground"
                                  >
                                    Report reason
                                  </Label>
                                  <FormField
                                    control={report.control}
                                    name="title"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel className="sr-only">
                                          title
                                        </FormLabel>
                                        <FormControl>
                                          <Input
                                            type="text"
                                            id="title"
                                            {...field}
                                            className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-600 focus:ring-primary-600"
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                <div className="col-span-2">
                                  <Label
                                    htmlFor="description"
                                    className="mb-2 block text-sm font-medium text-secondary-foreground"
                                  >
                                    Describe your issue
                                  </Label>
                                  <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel className="sr-only">
                                          Description
                                        </FormLabel>
                                        <FormControl>
                                          <Textarea
                                            {...field}
                                            id="description"
                                            rows={6}
                                            className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                                          />
                                        </FormControl>
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                <div className="col-span-2">
                                  <Label
                                    className="mb-2 block text-sm font-medium text-secondary-foreground"
                                    htmlFor="file_input"
                                  >
                                    Add an attachment
                                  </Label>
                                  <FormField
                                    control={report.control}
                                    name="file"
                                    render={() => (
                                      <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Input id="picture" type="file" />
                                      </div>
                                    )}
                                  />
                                </div>
                                <div className="col-span-2">
                                  <div className="flex items-center">
                                    <FormField
                                      control={form.control}
                                      name="terms"
                                      render={({ field }) => (
                                        <FormItem>
                                          <FormLabel className="sr-only">
                                            Email
                                          </FormLabel>
                                          <FormControl>
                                            <Input
                                              {...field}
                                              id="review-checkbox"
                                              type="checkbox"
                                              value=""
                                              className="size-4 rounded border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                                            />
                                          </FormControl>
                                          <FormMessage />
                                        </FormItem>
                                      )}
                                    />
                                    <Label
                                      htmlFor="link-checkbox"
                                      className="ms-2 text-sm font-medium text-secondary-foreground"
                                    >
                                      I have read and agree with the{" "}
                                      <Link
                                        href="#"
                                        className="text-muted-foreground hover:underline"
                                      >
                                        terms and conditions
                                      </Link>
                                      .
                                    </Label>
                                  </div>
                                </div>
                              </div>
                              <div className="border-t border-primary-200 pt-4 md:pt-5">
                                <Button className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                                  Send report
                                </Button>
                                <Button className="me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4">
                                  Cancel
                                </Button>
                              </div>
                            </form>
                          </Form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </aside>
                </article>
              ))}
            </div>

            <div className="flex justify-between border-y border-primary-200 py-4">
              <span className="text-sm text-primary-700">
                Showing <span className="font-semibold text-foreground">1</span>{" "}
                to <span className="font-semibold text-foreground">5</span> of{" "}
                <span className="font-semibold text-foreground">53 </span>
                Customer Reviews
              </span>
              <div className="inline-flex">
                <Button className="mr-2 flex h-8 items-center justify-center rounded-s bg-primary-800 px-3 text-sm font-medium text-background hover:bg-primary-900">
                  Previous
                </Button>
                <Button className="flex h-8 items-center justify-center rounded-e border-0 border-s border-primary-700 bg-primary-800 px-3 text-sm font-medium text-background hover:bg-primary-900">
                  Next
                </Button>
              </div>
            </div>
            <div className="mt-4 bg-muted p-6">
              <Heading level={4} className="mb-2 font-bold leading-tight">
                Add a review
              </Heading>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="mb-4 grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                      <div className="flex items-center">
                        <Ratings rating={3} totalStars={5} variant="yellow" />
                        <span className="ms-2 text-lg font-bold">
                          3.0 out of 5
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <Label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium"
                      >
                        Review title
                      </Label>
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only">title</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                id="title"
                                {...field}
                                className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-600 focus:ring-primary-600"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium"
                      >
                        Review description
                      </Label>
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only">Email</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                id="description"
                                rows={6}
                                className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                              />
                            </FormControl>
                            <FormMessage>
                              <Text className="ms-auto text-xs text-primary-500">
                                Problems with the product or delivery?{" "}
                                <Link
                                  href="#"
                                  className="text-primary-600 hover:underline"
                                >
                                  Send a report
                                </Link>
                                .
                              </Text>
                            </FormMessage>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label
                        htmlFor="dropzone-file"
                        className="mb-2 block text-sm font-medium"
                      >
                        Add real photos of the product to help other customers{" "}
                        <span className="text-primary-500">(Optional)</span>
                      </Label>
                      <div className="flex w-full items-center justify-center">
                        <FormField
                          control={form.control}
                          name="file"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel className="sr-only">Email</FormLabel>
                              <FormControl>
                                <Label
                                  htmlFor="dropzone-file"
                                  className=" flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary-300 bg-primary-50 hover:bg-primary-100"
                                >
                                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                    <svg
                                      className="mb-4 size-8 text-primary-500"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 20 16"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                      />
                                    </svg>
                                    <Text className="mb-2 text-sm text-primary-500 ">
                                      <span className="font-semibold">
                                        Click to upload
                                      </span>{" "}
                                      or drag and drop
                                    </Text>
                                    <Text className="text-xs text-primary-500">
                                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                                    </Text>
                                  </div>
                                  <Input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                    {...field}
                                  />
                                </Label>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center">
                        <FormField
                          control={form.control}
                          name="terms"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="sr-only">Email</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  id="review-checkbox"
                                  type="checkbox"
                                  value=""
                                  className="size-4 rounded border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Label
                          htmlFor="review-checkbox"
                          className="ms-2 text-sm font-medium text-primary-500"
                        >
                          By publishing this review you agree with the{" "}
                          <Link
                            href="#"
                            className="text-primary-600 hover:underline"
                          >
                            terms and conditions
                          </Link>
                          .
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-primary-200 pt-4  md:pt-5">
                    <Button
                      type="submit"
                      className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                    >
                      Submit review
                    </Button>
                    <Button className="me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4">
                      Reset
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
