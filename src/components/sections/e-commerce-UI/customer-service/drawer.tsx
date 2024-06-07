import React from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, CircleHelp, CloudUpload, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//component imports
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/custom/pagination";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

interface Comment {
  author: string;
  date: string;
  content: string;
  questionCount: number;
  isAnswer?: boolean;
}

interface CommentProps {
  comments: Comment[];
}

const commentsData = [
  {
    author: "Michael Gough",
    date: "November 20 2023 • 12:40",
    content:
      "The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?",
    questionCount: 8,
    isAnswer: false,
  },
  {
    author: "James Way",
    date: "November 20 2023 • 12:45",
    content:
      "It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.",
    questionCount: 8,
    isAnswer: true,
  },
  {
    author: "Jese Leos",
    date: "November 18 2023 • 09:12",
    content: "Is this just the monitor?",
    questionCount: 8,
    isAnswer: false,
  },
  {
    author: "Bonnie Green",
    date: "November 18 2023 • 09:24",
    content:
      "It's an all-in-one (AIO). Which means everything in one structure. So it's not just a monitor it uses Apple's operating System, macOS and it has storage, CPU, GPU etc.",
    questionCount: 8,
    isAnswer: true,
  },
  {
    author: "Roberta Casas",
    date: "November 18 2023 • 16:02",
    content:
      'I just brought home the Imac 24". It says the mouse and Keyboard are wireless. Where do I install the power for them?',
    questionCount: 8,
    isAnswer: false,
  },
  {
    author: "James Way",
    date: "November 18 2023 • 09:24",
    content:
      "You can charge the mouse and keyboard with a lightning charger. Once charged, they last months before having to charge again.",
    questionCount: 8,
    isAnswer: true,
  },
  {
    author: "Joseph McFallen",
    date: "November 16 2023 • 13:00",
    content:
      'For an inexpert 85-year-old general user with a ten-year old iMac (OSX Yosemite version 10.10.5), is this latest model 24" iMac with Retina 4.5K display Apple M1 8GB memory - 256GB SSD a decent upgrade?',
    questionCount: 8,
    isAnswer: false,
  },
  {
    author: "Bonnie Green",
    date: "November 16 2023 • 13:44",
    content:
      "Hello Joseph, it's basically the same system as your older machine, but bigger, lighter and faster. There is no disc drive and it has fewer ports.",
    questionCount: 8,
    isAnswer: true,
  },
  {
    author: "Neil Sims",
    date: "November 06 2023 • 17:37",
    content: "Does this include the keyboard and mouse?",
    questionCount: 8,
    isAnswer: false,
  },
  {
    author: "James Way",
    date: "November 06 2023 • 18:07",
    content:
      "Yes it does, color matched to the Mac. And the keyboard has Touch ID.",
    questionCount: 8,
    isAnswer: true,
  },
];

const Comment = (props: Comment) => {
  const { author, date, content, questionCount, isAnswer } = props;
  return (
    <div
      className={`mt-6 space-y-3 rounded-lg border border-primary-200 bg-primary-50 p-6 shadow-sm ${isAnswer ? "sm:ml-12" : ""}`}
    >
      {isAnswer && (
        <span className="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
          <Check className="me-1.5 size-3" />
          Answer
        </span>
      )}
      <div className="flex items-center gap-3">
        <Link
          href="#"
          className="text-base font-semibold text-secondary-foreground hover:underline"
        >
          {author}
        </Link>
        <Text className="text-sm font-normal text-muted-foreground">
          {date}
        </Text>
      </div>
      <Text className="text-base font-normal text-muted-foreground">
        {content}
      </Text>
      <div className="flex items-center gap-4">
        <Text className="text-sm font-medium text-muted-foreground">
          I have the same question
        </Text>
        <div className="flex items-center">
          <input
            id={`answer-radio-yes-${author}`}
            type="radio"
            name={`answer-radio-${author}`}
            className="size-4 border-primary-300 bg-muted text-primary-600"
          />
          <label
            htmlFor={`answer-radio-yes-${author}`}
            className="ms-2 text-sm font-medium text-foreground"
          >
            Yes: {questionCount}
          </label>
        </div>
        <div className="flex items-center">
          <input
            id={`answer-radio-no-${author}`}
            type="radio"
            name={`answer-radio-${author}`}
            className="size-4 border-primary-300 bg-muted text-primary-600"
          />
          <label
            htmlFor={`answer-radio-no-${author}`}
            className="ms-2 text-sm font-medium text-foreground"
          >
            No: 0
          </label>
        </div>
      </div>
    </div>
  );
};

const Comments = () => (
  <div className="my-6">
    {commentsData.map((comment, index) => (
      <Comment key={index} {...comment} />
    ))}
  </div>
);

const questionSchema = z.object({
  question: z
    .string()
    .min(150, "Minimum 150 characters required")
    .max(1000, "Maximum 1000 characters allowed"),
  questionType: z.enum(["technical", "shipment", "payment", "other"]),
  priority: z.enum(["very-high", "high", "medium", "low"]),
  files: z.any().optional(),
  agreement: z.boolean(),
});

const QuestionModal = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      question: "",
      questionType: "technical",
      priority: "high",
      files: "",
      agreement: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof questionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mt-4 w-full shrink-0 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:mt-0 sm:w-auto">
          Ask a question
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-[600px]">
        <SheetHeader>
          <SheetTitle>
            {" "}
            <Heading level={4} className="mb-1 font-semibold">
              Ask a question
            </Heading>
          </SheetTitle>
        </SheetHeader>
        <hr className="mb-2 border border-primary-200 px-0" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Question{" "}
                  <span className="text-muted-foreground">
                    (150-1000 characters)
                  </span>
                </Label>
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id="question"
                          rows={6}
                          className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="questionType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex">
                        Question type
                        <span className="ml-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <CircleHelp className="size-5 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <Text className="bg-muted text-secondary-foreground">
                                  Choose your question type to get a faster
                                  answer
                                </Text>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </span>
                      </FormLabel>
                      <FormControl>
                        <select
                          id="question-type"
                          {...field}
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        >
                          <option selected value="technical">
                            Technical Question
                          </option>
                          <option value="shipment">Shipment Question</option>
                          <option value="payment">Payment Issue</option>
                          <option value="other">Other</option>
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                {" "}
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <FormControl>
                        <select
                          id="priority-type"
                          {...field}
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        >
                          <option selected value="very-high">
                            Very High
                          </option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="dropzone-file"
                  className="mb-2 block text-sm font-medium"
                >
                  Upload files{" "}
                  <span className="text-primary-500">(Optional)</span>
                </Label>
                <div className="flex w-full items-center justify-center">
                  <FormField
                    control={form.control}
                    name="files"
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
              <div className="col-span-2">
                <div className="flex items-center">
                  <FormField
                    control={form.control}
                    name="agreement"
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
                    I have read and agree with the{" "}
                    <Link href="#" className="text-primary-600 hover:underline">
                      terms and conditions
                    </Link>
                    .
                  </Label>
                </div>
              </div>
            </div>
            <SheetFooter className="absolute bottom-5 mb-2 w-[335px]">
              <div className="flex w-full justify-between  border-t border-primary-200 pt-4 md:pt-5">
                <Button className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
                  Submit question
                </Button>
                <SheetClose asChild>
                  <Button className="me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4">
                    Cancel
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

const searchSchema = z.object({
  title: z.string(),
});

const DrawerService = () => {
  // 1. Define your form.
  const search = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      title: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof searchSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-4">
          <Heading level={3} className="shrink-0 font-semibold lg:flex-1">
            Questions (147)
          </Heading>
          <div className="mt-4 sm:flex sm:items-center sm:justify-end sm:gap-4 lg:mt-0">
            <div className="shrink-0">
              <label
                htmlFor="reviews"
                className="sr-only mb-2 block text-sm font-medium text-secondary-foreground"
              >
                Select question type
              </label>
              <select
                id="reviews"
                className="block w-full rounded-lg border border-primary-300 bg-input py-2.5 pe-10 pl-2.5 text-sm text-foreground focus:border-primary-600 focus:ring-primary-600"
              >
                <option selected value="">
                  Most helpful
                </option>
                <option value="recent">Most recent</option>
              </select>
            </div>

            <Form {...search}>
              <form className="mt-4 w-full shrink-0 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:gap-4">
                <FormField
                  control={search.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="flex flex-1">
                      <FormControl>
                        <div className="relative w-full flex-1 lg:max-w-sm">
                          <Input
                            type="text"
                            id="title"
                            {...field}
                            placeholder="Search Questions & Answers"
                            className="block w-full rounded-lg border border-primary-300 bg-input px-4 py-2.5 pl-8 ps-9 text-sm text-foreground focus:border-primary-600 focus:ring-primary-600"
                          />
                          <Search className="absolute left-2 top-1/4 size-4 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <QuestionModal />
              </form>
            </Form>
          </div>
        </div>

        <Comments />
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious className="size-9 p-0" href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">100</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="size-9 p-0" href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default DrawerService;
