import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CalendarRange,
  Check,
  CloudUpload,
  CodeIcon,
  DownloadIcon,
  Flag,
  ImageIcon,
  ListIcon,
  MapPin,
  Paperclip,
  Plus,
  Reply,
  SettingsIcon,
  Smile,
  X,
} from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Badge } from "~/components/ui/badge";
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Textarea } from "~/components/ui/textarea";

interface ReviewData {
  name: string;
  date: string;
  rating: number;
  comments: string[];
  loved?: string[];
  disliked?: string[];
  isReply: boolean;
}

interface ReviewDataProps {
  review: ReviewData;
}

const reviewsData = [
  { rating: 5, percentage: 60, count: 239, color: "bg-green-600" },
  { rating: 4, percentage: 20, count: 75, color: "bg-green-500" },
  { rating: 3, percentage: 30, count: 106, color: "bg-yellow-300" },
  { rating: 2, percentage: 15, count: 40, color: "bg-orange-600" },
  { rating: 1, percentage: 10, count: 20, color: "bg-red-600" },
];

const buttonIcons = [
  { icon: <Paperclip className="size-4" />, label: "Attach file" },
  { icon: <MapPin className="size-4" />, label: "Embed map" },
  { icon: <ImageIcon className="size-4" />, label: "Upload image" },
  { icon: <CodeIcon className="size-4" />, label: "Format code" },
  { icon: <Smile className="size-4" />, label: "Add emoji" },
];

const additionalButtons = [
  { icon: <ListIcon className="size-4" />, label: "Add list" },
  { icon: <SettingsIcon className="size-4" />, label: "Settings" },
  { icon: <CalendarRange className="size-4" />, label: "Timeline" },
  { icon: <DownloadIcon className="size-4" />, label: "Download" },
];

const reviews = [
  {
    name: "Michael Gough",
    date: "November 18 2023 at 15:35",
    rating: 5,
    comments: [
      "My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly.",
      "The display is out of this world and I&apos;m very happy with this purchase.",
    ],
    loved: [
      "Great customer support",
      "Fair offer",
      "Premium product",
      "Shipping Cost",
    ],
    isReply: true,
  },
  {
    name: "Michael Gough",
    date: "November 18 2023 at 15:35",
    rating: 5,
    comments: [
      "It&apos;s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this computer. Highly recommend!",
    ],
    loved: ["Top-notch peripherals", "Fair offer", "Extended warranty"],
    isReply: false,
  },
  {
    name: "Bonnie Green",
    date: "November 18 2023 at 15:35",
    rating: 3,
    comments: [
      "I would have expected it to have more premium materials, considering the costs, there is also a problem with delivery times when you place the order, it says it will be delivered in 2-3 working days, but I received it after 1 week half.",
    ],
    disliked: [
      "Shipping time",
      "Lack of premium materials",
      "Does not come with OS installed",
    ],
    isReply: false,
  },
  {
    name: "Michael Gough",
    date: "November 18 2023 at 15:35",
    rating: 2,
    comments: [
      "I actually waited 2 weeks for my order to arrive, no one answered the phone, the product is ok but the waiting times are huge.",
    ],
    disliked: ["Waiting times for delivery", "Non-existent customer support"],
    isReply: false,
  },
];

const StarSVG = (props: { filled: boolean }) => {
  const { filled } = props;
  return (
    <svg
      className={`size-5 ${filled ? "text-yellow-300" : "text-primary-300"}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d={
          filled
            ? "M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
            : "M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"
        }
      />
    </svg>
  );
};

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  file: z.any().optional(),
  terms: z.boolean(),
  like1: z.string(),
  like2: z.string(),
  like3: z.string(),
  dislike1: z.string(),
  dislike2: z.string(),
});

const WriteReviewSheet = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      terms: false,
      like1: "Great customer support",
      like2: "Fair pricing",
      like3: "",
      dislike1: "Product arrived later than expected",
      dislike2: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-lg bg-primary-700 px-5 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
          Write a review
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>ADD A REVIEW</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <form
            className="h-full overflow-y-auto"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <div className="flex items-center">
                  <Ratings rating={3} totalStars={5} variant="yellow" />
                  <span className="ms-2 text-lg font-bold">3.0 out of 5</span>
                </div>
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium"
                >
                  Review title{" "}
                  <span className="text-xs text-muted-foreground">
                    (30-150 characters)
                  </span>
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
                          placeholder="Type review title"
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-600 focus:ring-primary-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <Text className="mb-2 block text-sm font-medium text-secondary-foreground">
                  Title suggestions
                </Text>
                <div className="flex space-x-2">
                  <Badge>Awesome specifications</Badge>
                  <Badge>Best price</Badge>
                  <Badge>Great battery</Badge>
                </div>
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Review{" "}
                  <span className="text-xs text-muted-foreground">
                    {" "}
                    (150-3000 characters)
                  </span>
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
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  What did you like?
                </Label>
                <FormField
                  control={form.control}
                  name="like1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="like1"
                          type="text"
                          placeholder="What did you like about this product?"
                          className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="like2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="like2"
                          type="text"
                          placeholder="What did you like about this product?"
                          className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="like3"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="like3"
                          type="text"
                          placeholder="What did you like about this product?"
                          className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className="me-2 mt-2 w-full rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4">
                  <Plus />
                  <span>Add another</span>
                </Button>
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  What did you dislike?
                </Label>
                <FormField
                  control={form.control}
                  name="dislike1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="dislike1"
                          type="text"
                          placeholder="What did you like about this product?"
                          className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dislike2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="dislike2"
                          type="text"
                          placeholder="What did you like about this product?"
                          className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className="me-2 mt-2 w-full rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4">
                  <Plus />
                  <span>Add another</span>
                </Button>
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="dropzone-file"
                  className="mb-2 block text-sm font-medium"
                >
                  Add photos of the product to help other customers{" "}
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
                              <CloudUpload className="mb-4 size-8 text-primary-500" />
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
            </div>
            <SheetFooter className="bottom-5 mb-2 w-[335px]">
              <SheetClose asChild>
                <div className=" flex w-full justify-between border-t border-primary-200 pt-4 md:pt-5">
                  <Button
                    type="submit"
                    className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
                  >
                    Submit review
                  </Button>
                  <Button className="me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4">
                    Cancel
                  </Button>
                </div>
              </SheetClose>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

const reportSchema = z.object({
  type: z.enum(["abuse", "violation"], {
    required_error: "You need to select one report type",
  }),
  title: z.string(),
  description: z.string(),
  file: z.any().optional(),
  terms: z.boolean(),
});

const Review = (props: ReviewDataProps) => {
  const { review } = props;
  const { name, date, rating, comments, isReply, disliked, loved } = review;
  const formSchema = z.object({
    comment: z.string().optional(),
  });

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="gap-8 py-6 sm:flex sm:items-start">
        <div className="min-w-0 flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Text className="text-base font-semibold text-secondary-foreground">
                {name}
              </Text>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <StarSVG key={index} filled={index < rating} />
                ))}
              </div>
            </div>
            <Text className="text-sm font-normal text-muted-foreground">
              {date}
            </Text>
          </div>
          {comments.map((comment, index) => (
            <Text
              key={index}
              className="text-base font-normal text-muted-foreground"
            >
              {comment}
            </Text>
          ))}
          <div className="flex items-center gap-6">
            <div className="inline-flex items-center gap-1.5 bg-background text-sm font-medium text-secondary-foreground hover:cursor-pointer hover:bg-background hover:underline">
              <Reply className="size-5" />
              Reply
            </div>
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
              <DialogContent className="bg-muted">
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
                          className="mb-2 block text-sm font-medium text-secondary-foreground"
                        >
                          Describe your issue
                        </Label>
                        <FormField
                          control={report.control}
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
                              <Input
                                id="picture"
                                type="file"
                                className="border border-primary-200 text-secondary-foreground"
                              />
                            </div>
                          )}
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center">
                          <FormField
                            control={report.control}
                            name="terms"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="sr-only">Terms</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    id="review-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="mt-0 size-4 flex-wrap rounded border-primary-300 bg-primary-100 align-middle text-primary-600 focus:ring-2 focus:ring-primary-500"
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
        </div>
        <div className="mt-6 shrink-0 sm:mt-0 md:w-64">
          <Text className="text-base font-semibold text-secondary-foreground">
            {loved ? "Loved the most" : "Disliked the most"}
          </Text>
          <ul className="mt-2 space-y-2 text-sm font-normal text-muted-foreground">
            {(loved ?? disliked) &&
              (loved ?? disliked ?? []).map((item, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  {loved ? (
                    <Check className="size-5 shrink-0 text-primary-500" />
                  ) : (
                    <X className="size-5 shrink-0 text-red-500" />
                  )}
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>
      {isReply && (
        <div className="flex">
          <div className="mr-3 hidden shrink-0 sm:block">
            <Image
              height={36}
              width={36}
              className="size-9 rounded-full"
              src="https://xsgames.co/randomusers/assets/avatars/female/3.jpg"
              alt="User profile picture of Michael Burry"
            />
          </div>
          <Form {...form}>
            <form
              className="mb-6 w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="mb-4 w-full rounded-lg border border-primary-200 bg-primary-50">
                <div className="rounded-t-lg bg-primary-50 px-4 py-2">
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Your comment</FormLabel>
                        <FormControl>
                          <Textarea
                            className="w-full border-0 bg-primary-50 px-0 text-sm text-foreground shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0"
                            placeholder="Write a comment..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between border-t px-3 py-2">
                  <div className="flex flex-wrap items-center divide-primary-200 sm:divide-x">
                    <div className="flex items-center space-x-1 sm:pr-4">
                      {buttonIcons.map((button, index) => (
                        <Button
                          key={index}
                          className="cursor-pointer rounded bg-primary-50 p-2 text-primary-500 shadow-none hover:bg-primary-100 hover:text-primary-900"
                        >
                          {button.icon}
                          <span className="sr-only">{button.label}</span>
                        </Button>
                      ))}
                    </div>
                    <div className="hidden flex-wrap items-center space-x-1 sm:flex sm:pl-4">
                      {additionalButtons.map((button, index) => (
                        <Button
                          key={index}
                          className="cursor-pointer rounded bg-primary-50 p-2 text-primary-500 shadow-none hover:bg-primary-100 hover:text-primary-900"
                        >
                          {button.icon}
                          <span className="sr-only">{button.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Button className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-200">
                Post comment
              </Button>
            </form>
          </Form>
        </div>
      )}
    </>
  );
};

const CustomerReviewsList = () => {
  return (
    <div className="mt-6 divide-y divide-primary-200 border-t border-primary-200">
      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
};

const CustomerReviews = () => {
  return (
    <div className="w-full shrink-0 space-y-6 lg:max-w-sm">
      <Heading level={3} className="font-semibold">
        Customer Reviews
      </Heading>
      <div className="space-y-8">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Text className="text-3xl font-semibold leading-none text-secondary-foreground">
              4.0
            </Text>
            <div className="flex items-center gap-0.5">
              {[...Array(4)].map((_, index) => (
                <StarSVG key={index} filled={true} />
              ))}
              <StarSVG filled={false} />
            </div>
          </div>
          <Text className="text-base font-medium leading-none text-secondary-foreground">
            based on 23 ratings
          </Text>
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          {reviewsData.map((review, index) => (
            <div key={index} className="flex items-center gap-2">
              <Text className="w-2 shrink-0 text-start text-sm font-medium leading-none text-secondary-foreground">
                {review.rating}
              </Text>
              <StarSVG filled={true} />
              <div className="h-3 w-48 max-w-xs rounded-sm bg-primary-200">
                <div
                  className={`h-3 rounded-sm ${review.color}`}
                  style={{ width: `${review.percentage}%` }}
                ></div>
              </div>
              <Link
                href="#"
                className="shrink-0 text-sm font-medium leading-none text-muted-foreground hover:underline"
              >
                {review.count} reviews
              </Link>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <Text className="text-sm font-normal text-muted-foreground">
            Customer Reviews, including Product Star Ratings, help customers to
            learn more about the product and decide whether it is the right
            product for them.
          </Text>
          <Text className="text-sm font-normal text-muted-foreground">
            To calculate the overall rating and percentage breakdown by star, we
            don&apos;t use a simple average. Instead, our system considers
            things like how recent a review is and if the reviewer bought the
            item on Flowbite.
          </Text>
        </div>
      </div>
      <WriteReviewSheet />
    </div>
  );
};

const CommentsDrawerReview = () => {
  return (
    <div>
      <section className="bg-background py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="lg:flex lg:items-start lg:gap-12">
            <CustomerReviews />
            <div className="mt-6 min-w-0 flex-1 lg:mt-0">
              <div className="sm:flex sm:items-end sm:justify-between sm:gap-4">
                {" "}
                <div>
                  <Text className="text-sm font-normal leading-tight text-foreground">
                    Showing <span className="font-semibold">5,768</span>{" "}
                    Customer Reviews
                  </Text>
                </div>
                <div className="shrink-0 space-y-4 sm:mt-0 sm:flex sm:max-w-sm sm:items-center sm:gap-4 sm:space-y-0">
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

              <CustomerReviewsList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentsDrawerReview;
