import React from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleHelp, CloudUpload, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//component imports
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
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
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const questionsData = [
  {
    id: 1,
    answersCount: 3,
    question:
      "The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?",
    answer:
      "It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.",
    answeredBy: "Bonnie Green",
    answeredDate: "1 day ago",
  },
  {
    id: 2,
    answersCount: 1,
    question: "Is this just the monitor?",
    answer:
      "It's an all-in-one (AIO). Which means everything in one structure. So it's not just a monitor it uses Apple's operating System, macOS and it has storage, CPU, GPU etc.",
    answeredBy: "Jese Leos",
    answeredDate: "1 day ago",
  },
  {
    id: 3,
    answersCount: 7,
    question:
      'For an inexpert 85-year-old general user with a ten-year old iMac (OSX Yosemite version 10.10.5), is this latest model 24" iMac with Retina 4.5K display Apple M1 8GB memory - 256GB SSD a decent upgrade?',
    answer:
      "It's basically the same system as your older machine, but bigger, lighter and faster. There is no disc drive and it has fewer ports.",
    answeredBy: "Bonnie Green",
    answeredDate: "2 days ago",
  },
  {
    id: 4,
    answersCount: 32,
    question:
      'I just brought home the Imac24". It says the mouse and Keyboard are wireless. Where do I install the power for them?',
    answer:
      "You can charge the mouse and keyboard with a lightning charger. Once charged, they last months before having to charge again.",
    answeredBy: "Roberta Casas",
    answeredDate: "2 days ago",
  },
  {
    id: 5,
    answersCount: 4,
    question: "Does this include the keyboard and mouse?",
    answer:
      "Yes it does, color matched to the Mac. And the keyboard has Touch ID.",
    answeredBy: "Joseph McFallen",
    answeredDate: "1 week ago",
  },
];

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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="block rounded-lg bg-primary-700 px-5 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
          Ask a question
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {" "}
            <Heading level={4} className="mb-1 font-semibold">
              Ask a question
            </Heading>
          </DialogTitle>
        </DialogHeader>
        <hr className="border border-primary-200 px-0" />
        <Form {...form}>
          <form
            className="p-4 pt-0 md:p-5"
            onSubmit={form.handleSubmit(onSubmit)}
          >
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
              <div className="col-span-2 grid gap-4 md:grid-cols-2">
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
            <div className="border-t border-primary-200 pt-4  md:pt-5">
              <Button
                type="submit"
                className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Submit question
              </Button>
              <Button className="me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4">
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const searchSchema = z.object({
  title: z.string(),
});

const DefaultService = () => {
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
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-4">
          <Heading level={3} className="shrink-0 font-semibold">
            Questions (147)
          </Heading>
          <Form {...search}>
            <form className="w-full gap-4 sm:flex sm:items-center sm:justify-end lg:mt-0">
              <div className="col-span-2">
                <FormField
                  control={search.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative mt-0 w-[300px]">
                          <Input
                            type="text"
                            id="title"
                            {...field}
                            placeholder="Search Questions & Answers"
                            className="block w-full rounded-lg border border-primary-300 bg-input p-2.5 pl-8 text-sm text-foreground focus:border-primary-600 focus:ring-primary-600"
                          />
                          <Search className="absolute left-2 top-1/4 size-4 text-muted-foreground" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <QuestionModal />
            </form>
          </Form>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-primary-200">
            {questionsData.map((item) => (
              <div key={item.id} className="space-y-4 py-6 md:py-8">
                <div className="grid gap-4">
                  <div>
                    <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0">
                      {item.answersCount}{" "}
                      {item.answersCount > 1 ? "answers" : "answer"}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="text-xl font-semibold text-secondary-foreground hover:underline"
                  >
                    {item.question}
                  </Link>
                </div>
                <Text className="text-base font-normal text-muted-foreground">
                  {item.answer}
                </Text>
                <Text className="text-sm font-medium text-muted-foreground">
                  Answered {item.answeredDate} by
                  <Link
                    href="#"
                    className="text-secondary-foreground hover:underline"
                  >
                    {" "}
                    {item.answeredBy}
                  </Link>
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center lg:justify-start">
          <Button className="mb-2 me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300">
            View more questions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DefaultService;
