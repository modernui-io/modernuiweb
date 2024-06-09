import React from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CircleHelp,
  CloudUpload,
  CreditCard,
  MonitorPause,
  Search,
  Truck,
} from "lucide-react";
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
        <Button className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
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

const ServicePage = () => {
  const faqCategories = [
    {
      id: "general",
      iconPath: (
        <CircleHelp className="me-2 size-6 text-muted-foreground group-hover:text-primary-900" />
      ),
      label: "General questions",
    },
    {
      id: "technical",
      iconPath: (
        <MonitorPause className="me-2 size-6 text-muted-foreground group-hover:text-primary-900" />
      ),
      label: "Technical questions",
    },
    {
      id: "payment",
      iconPath: (
        <CreditCard className="me-2 size-6 text-muted-foreground group-hover:text-primary-900" />
      ),
      label: "Payment questions",
    },
    {
      id: "delivery",
      iconPath: (
        <Truck className="me-2 size-6 text-muted-foreground group-hover:text-primary-900" />
      ),
      label: "Delivery questions",
    },
  ];

  const faqBenefits = [
    {
      title: "Enhanced Performance:",
      description:
        "By storing frequently accessed data on the SSD, the Fusion Drive significantly improves overall system performance. Applications launch faster, files open quickly, and system boot times are reduced.",
    },
    {
      title: "Cost Efficiency:",
      description:
        "Fusion Drive offers a cost-effective solution compared to using a large-capacity SSD alone. Users get the benefit of fast SSD performance for commonly used data while enjoying the larger storage capacity of an HDD for less frequently accessed files.",
    },
    {
      title: "Seamless User Experience:",
      description:
        "Fusion Drive technology is designed to operate transparently to the user. There is no need for manual intervention or management. The system handles data migration and storage optimization automatically, providing a seamless and efficient user experience.",
    },
    {
      title: "Ideal for Various Use Cases:",
      description:
        "Fusion Drive is suitable for a wide range of use cases, from everyday computing tasks.",
    },
  ];

  const ListData = [
    {
      title:
        "How does the fusion drive technology in the iMac work, and what benefits does it offer?",
      data: (
        <>
          <Text className="text-muted-foreground">
            Fusion Drive technology in the iMac combines the benefits of both
            traditional hard disk drives (HDDs) and solid-state drives (SSDs)
            into a single storage solution. Here&apos;s how it works and the
            advantages it offers:
          </Text>
          <ol className="my-4 list-outside list-decimal space-y-2.5 pl-5 text-muted-foreground md:my-6">
            <li>
              <span className="font-semibold text-secondary-foreground">
                Hybrid Storage Architecture:
              </span>{" "}
              Fusion Drive combines a large-capacity HDD with a smaller SSD into
              a single logical volume. The macOS operating system manages this
              hybrid storage architecture intelligently, ensuring that
              frequently accessed files and applications are stored on the
              faster SSD portion, while less frequently accessed data resides on
              the HDD.
            </li>
            <li>
              <span className="font-semibold text-secondary-foreground">
                Automatic Data Tiering:
              </span>{" "}
              The macOS operating system continuously monitors the usage
              patterns of files and applications. Frequently accessed data, such
              as system files, frequently used applications, and often-used
              documents, are automatically moved to the SSD portion of the
              Fusion Drive for faster access.
            </li>
            <li>
              <span className="font-semibold text-secondary-foreground">
                Improved Performance:
              </span>{" "}
              By prioritizing frequently accessed data on the SSD portion,
              Fusion Drive delivers faster read and write speeds compared to
              traditional HDDs alone. This results in quicker boot times, faster
              application launches, and smoother overall system performance.
            </li>
          </ol>
          <Text className="mb-4 text-muted-foreground">
            Overall, Fusion Drive technology in the iMac offers a balanced
            combination of speed, capacity, and affordability, making it an
            ideal solution for users who need fast access to frequently used
            data without sacrificing storage space or breaking the bank.
          </Text>
        </>
      ),
    },
    {
      title:
        "Can you explain the differences between the various display options available for the iMac?",
      data: (
        <>
          <Text className="mb-4 text-muted-foreground">
            The 27-inch iMac&apos;s 5K Retina display has a higher pixel density
            compared to the 21.5-inch models, resulting in sharper text, images,
            and graphics. This higher pixel density provides more detail and
            clarity, making it ideal for tasks such as photo and video editing,
            graphic design, and content creation.
          </Text>
          <Text className="mb-4 text-muted-foreground">
            The Retina displays models offer excellent color accuracy and wide
            color gamut support, making them suitable for professional
            applications that require precise color reproduction, such as
            graphic design, photography, and video editing.
          </Text>
        </>
      ),
    },
    {
      title:
        "Can you describe the Thunderbolt and USB connectivity options in the iMac?",
      data: (
        <>
          <Text className="mb-4 text-muted-foreground">
            As of my last update in January 2022, the latest generation of iMac
            processors could vary depending on when they were released. However,
            I can provide you with an overview of the typical key features found
            in the latest generation of iMac processors up to that point:
          </Text>
          <ol className="my-4 list-outside list-decimal space-y-2.5 pl-5 text-muted-foreground md:my-6">
            <li>
              <span className="font-semibold text-secondary-foreground">
                Apple Silicon:
              </span>{" "}
              Fusion Drive combines a large-capacity HDD with a smaller SSD into
              a single logical volume. The macOS operating system manages this
              hybrid storage architecture intelligently, ensuring that
              frequently accessed files and applications are stored on the
              faster SSD portion, while less frequently accessed data resides on
              the HDD.
            </li>
            <li>
              <span className="font-semibold text-secondary-foreground">
                Unified Memory Architecture:
              </span>{" "}
              Apple has transitioned its Mac lineup, including the iMac, to its
              custom-designed Apple Silicon processors. These chips, based on
              ARM architecture, offer significant performance and efficiency
              improvements compared to previous Intel-based processors.
            </li>
            <li>
              <span className="font-semibold text-secondary-foreground">
                Integrated Graphics:
              </span>{" "}
              Apple Silicon processors integrate powerful graphics processing
              units (GPUs) directly onto the same chip. These integrated GPUs
              deliver impressive graphics performance for tasks such as gaming,
              video editing, and 3D rendering, without the need for a discrete
              graphics card.
            </li>
          </ol>
          <Text className="mb-4 text-muted-foreground">
            These key features represent the advancements brought about by the
            latest generation of iMac processors, offering improved performance,
            efficiency, and integration compared to previous generations.
          </Text>
        </>
      ),
    },
    {
      title:
        "How does the cooling system in the iMac function, especially in high-performance models?",
      data: (
        <>
          <Text className="mb-4 text-muted-foreground">
            The iMac&apos;s cooling system is designed to efficiently dissipate
            heat generated by its components, particularly in high-performance
            models where intensive tasks like video editing, gaming, or running
            demanding software can lead to increased heat production.
          </Text>
          <Text className="mb-4 text-muted-foreground">
            The cooling system in the iMac is a crucial component that helps to
            ensure reliable performance and longevity, particularly in
            high-performance models where heat dissipation is a critical
            consideration. Through a combination of efficient airflow design,
            fan control algorithms, and thermal management solutions, the
            iMac&apos;s cooling system effectively regulates temperatures to
            keep the system running smoothly under various workloads.
          </Text>
        </>
      ),
    },
    {
      title:
        "What are the key features of the latest generation of iMac's processors?",
      data: (
        <>
          <Text className="mb-4 text-muted-foreground">
            As of my last update in January 2022, the latest generation of iMac
            processors could vary depending on when they were released. However,
            I can provide you with an overview of the typical key features found
            in the latest generation of iMac processors up to that point:
          </Text>
          <ol className="my-4 list-outside list-decimal space-y-2.5 pl-5 text-muted-foreground md:my-6">
            <li>
              <span className="font-semibold text-secondary-foreground">
                Apple Silicon:
              </span>{" "}
              Fusion Drive combines a large-capacity HDD with a smaller SSD into
              a single logical volume. The macOS operating system manages this
              hybrid storage architecture intelligently, ensuring that
              frequently accessed files and applications are stored on the
              faster SSD portion, while less frequently accessed data resides on
              the HDD.
            </li>

            <li>
              <span className="font-semibold text-secondary-foreground">
                Unified Memory Architecture:
              </span>{" "}
              Apple has transitioned its Mac lineup, including the iMac, to its
              custom-designed Apple Silicon processors. These chips, based on
              ARM architecture, offer significant performance and efficiency
              improvements compared to previous Intel-based processors.
            </li>

            <li>
              <span className="font-semibold text-secondary-foreground">
                Integrated Graphics:
              </span>{" "}
              Apple Silicon processors integrate powerful graphics processing
              units (GPUs) directly onto the same chip. These integrated GPUs
              deliver impressive graphics performance for tasks such as gaming,
              video editing, and 3D rendering, without the need for a discrete
              graphics card.
            </li>
          </ol>
          <Text className="mb-4 text-muted-foreground">
            These key features represent the advancements brought about by the
            latest generation of iMac processors, offering improved performance,
            efficiency, and integration compared to previous generations.
          </Text>
        </>
      ),
    },
  ];

  return (
    <section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl space-y-6 px-4 2xl:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="w-full lg:sticky lg:top-4 lg:max-w-xs">
            <div className="rounded-lg border border-primary-200 bg-primary-50">
              <div className="space-y-4 p-4">
                <ul className="space-y-2 text-secondary-foreground">
                  {faqCategories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`#${category.id}`}
                        title=""
                        className="group flex w-full items-center rounded-lg px-3 py-1.5 font-medium hover:bg-primary-200 hover:text-primary-900"
                      >
                        {category.iconPath}
                        {category.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div>
                  <span className="text-muted-foreground">
                    Didn&apos;t find the answer?
                  </span>
                  <QuestionModal />
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            {ListData.map(({ title, data }, index) => (
              <div key={index}>
                <Heading
                  level={3}
                  className="flex border-y border-primary-300 py-4 text-lg font-bold md:text-xl xl:items-center"
                >
                  <CircleHelp className="me-2 mt-1 size-5 shrink-0 text-secondary-foreground" />
                  {title}
                </Heading>
                <div className="my-4 flex items-center text-muted-foreground">
                  Updated November 20 2023
                  <div className="mx-2 size-1.5 rounded-full bg-gray-500"></div>
                  <div>12:45</div>
                </div>
                {data}
              </div>
            ))}
            <div className="mt-6 flex items-center justify-center">
              <Button className="mb-2 me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300">
                Show More...
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
