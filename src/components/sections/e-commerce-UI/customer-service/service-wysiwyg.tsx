import React from "react";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlignCenter,
  Bold,
  ChevronDown,
  FileImage,
  Italic,
  Laugh,
  List,
  ListOrdered,
  MinusIcon,
  Paperclip,
  Pilcrow,
  PlusIcon,
  Quote,
  Redo2,
  Underline,
  Undo2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Textarea } from "~/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import MacDark from "~/lib/assets/images/complete-imac-dark (1).svg";
import MacLight from "~/lib/assets/images/complete-imac-light.svg";

interface FontDropdownPorps {
  options: string[];
}

const relatedQuestions = [
  {
    id: 1,
    answersCount: "3 answers",
    question:
      "“The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?”",
    answer:
      "It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.",
  },
  {
    id: 2,
    answersCount: "1 answer",
    question: "“Is this just the monitor?”",
    answer:
      "It's an all-in-one (AIO). Which means everything in one structure. So it's not just a monitor it uses Apple's operating System.",
  },
  {
    id: 3,
    answersCount: "7 answers",
    question:
      '“For an inexpert 85-year-old general user with a ten-year old iMac (OSX Yosemite version 10.10.5), is this latest model 24" iMac with Retina 4.5K display Apple M1 8GB memory - 256GB SSD a decent upgrade?”',
    answer:
      "It's basically the same system as your older machine, but bigger, lighter and faster. There is no disc drive and it has fewer ports.",
  },
  {
    id: 4,
    answersCount: "32 answers",
    question:
      '“I just brought home the Imac24". It saysthe mouse and Keyboard are wireless. Where do I install the power for them?”',
    answer:
      "You can charge the mouse and keyboard with a lightning charger. Once charged, they last months before having to charge again.",
  },
  {
    id: 5,
    answersCount: "No answers",
    question: "“Does this include the keyboard and mouse?”",
    answer:
      "Yes it does, color matched to the Mac. And the keyboard has Touch ID.",
  },
];

const answers = [
  {
    id: 1,
    bestAnswer: false,
    votes: 8,
    answer:
      "Absolutely! This package includes everything you need to set up your first computer smoothly. From the computer itself to necessary cables and adapters, you'll be ready to plug it in and get started right away.",
    author: "Jese Leos",
    askedDate: "1 day ago",
  },
  {
    id: 2,
    bestAnswer: false,
    votes: 2,
    answer:
      "Yes, indeed! This comprehensive package ensures that you have all the essentials to set up your computer hassle-free. No need to worry about missing components or compatibility issues – just plug it in, and you're good to go!",
    author: "Thomas Lean",
    askedDate: "1 day ago",
  },
  {
    id: 3,
    bestAnswer: false,
    votes: 1,
    answer:
      "You bet! They thought of everything to make your transition to your first computer seamless. From power cords to peripherals, this package has you covered. Just plug it in, power up, and dive into the world of computing!",
    author: "Karen Nelson",
    askedDate: "1 day ago",
  },
  {
    id: 4,
    bestAnswer: false,
    votes: 0,
    answer:
      "Apple taken care of the details so you can focus on helping your 10-year-old excel in school with their new computer. Just plug it in, power on, and begin your computing journey!",
    author: "Neil Sims",
    askedDate: "1 day ago",
  },
];

const TextSize = () => (
  <svg
    className="size-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"
    />
  </svg>
);

const TextSlash = () => (
  <svg
    className="size-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.7 6.5M9.6 19l1-4M5 5l6.5 6.5M19 19l-7.5-7.5"
    />
  </svg>
);

const TextIndent = () => (
  <svg
    className="size-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 6h12M6 18h12m-5-8h5m-5 4h5M6 9v6l3.5-3L6 9Z"
    />
  </svg>
);

const TextOutdent = () => (
  <svg
    className="size-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 6h12M6 18h12m-5-8h5m-5 4h5M9.5 9v6L6 12l3.5-3Z"
    />
  </svg>
);

const tools = [
  {
    id: "tooltip-undo",
    label: "Undo",
    icon: <Undo2 className="size-5" />,
  },
  {
    id: "tooltip-redo",
    label: "Redo",
    icon: <Redo2 className="size-5" />,
  },
  {
    id: "tooltip-text-size",
    label: "Text size",
    icon: <TextSize />,
  },
  {
    id: "tooltip-font-bold",
    label: "Bold",
    icon: <Bold className="size-5" />,
  },
  {
    id: "tooltip-font-italic",
    label: "Italic",
    icon: <Italic className="size-5" />,
  },
  {
    id: "tooltip-font-underline",
    label: "Underline",
    icon: <Underline className="size-5" />,
  },
  {
    id: "tooltip-text-slash",
    label: "Text slash",
    icon: <TextSlash />,
  },
  {
    id: "tooltip-paragraph",
    label: "Paragraph",
    icon: <Pilcrow className="size-5" />,
  },
  {
    id: "tooltip-quote",
    label: "Quote",
    icon: <Quote className="size-5" />,
  },
  {
    id: "tooltip-text-center",
    label: "Text center",
    icon: <AlignCenter className="size-5" />,
  },
  {
    id: "tooltip-ordered-list",
    label: "Ordered list",
    icon: <ListOrdered className="size-5" />,
  },
  {
    id: "tooltip-list",
    label: "List",
    icon: <List className="size-5" />,
  },
  {
    id: "tooltip-text-indent",
    label: "Text indent",
    icon: <TextIndent />,
  },
  {
    id: "tooltip-text-outdent",
    label: "Text outdent",
    icon: <TextOutdent />,
  },
  {
    id: "tooltip-attachment",
    label: "Attach file",
    icon: <Paperclip className="size-5" />,
  },
  {
    id: "tooltip-emoji",
    label: "Emoji",
    icon: <Laugh className="size-5" />,
  },
  {
    id: "tooltip-photo",
    label: "Insert photo",
    icon: <FileImage className="size-5" />,
  },
];

const FontDropdown = (props: FontDropdownPorps) => {
  const { options } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-primary-200">
          Arial (Sans-serif){" "}
          <span>
            <ChevronDown className="-me-0.5 ms-1.5 size-3.5" />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-primary-200">
        {options.map((item, index) => (
          <DropdownMenuItem key={index}>
            <span>{item}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ToolButton = (props: {
  id: string;
  icon: JSX.Element;
  label: string;
}) => {
  const { id, icon, label } = props;
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              data-tooltip-target={id}
              className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-muted-foreground hover:bg-primary-200 hover:text-secondary-foreground "
            >
              {icon}
              <span className="sr-only ">{label}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent className="bg-primary-200">
            <Text className="bg-primary-200 text-secondary-foreground">
              {label}
            </Text>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

const AnswerArticle = (props: {
  id: number;
  bestAnswer: boolean;
  votes: number;
  answer: string;
  author: string;
  askedDate: string;
}) => {
  const answer = props;
  return (
    <article className="mb-4 rounded-lg border border-primary-200 bg-primary-50 p-4 text-base lg:p-6">
      <div className="flex flex-col sm:flex-row">
        <div className="order-2 mt-4 sm:order-1 sm:mr-4 sm:mt-0">
          <div className="flex w-24 items-center justify-center rounded-lg border border-primary-200 bg-muted font-medium sm:w-9 sm:flex-col">
            <Button className="flex w-full justify-center rounded-b-none rounded-t-lg border-primary-200 bg-muted px-0 py-1 text-primary-500 shadow-none hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200">
              <PlusIcon className="size-4 text-primary-500" />
            </Button>
            <span className="px-2 text-xs font-medium text-foreground lg:px-0 lg:text-sm ">
              {answer.votes}
            </span>
            <Button className="flex w-full  justify-center rounded-b-lg rounded-t-none bg-muted px-0 py-1 text-primary-500 shadow-none hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200">
              <MinusIcon className="size-4 text-primary-500" />
            </Button>
          </div>
        </div>
        <div className="order-1 text-muted-foreground sm:order-2">
          {answer.bestAnswer && (
            <span className="me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
              Best answer
            </span>
          )}
          <Text className="my-4 text-muted-foreground md:mb-5">
            {answer.answer}
          </Text>
          <Text className="text-muted-foreground">
            Asked {answer.askedDate} by{" "}
            <Link
              href="#"
              className="font-medium text-secondary-foreground hover:underline"
            >
              {answer.author}
            </Link>
          </Text>
        </div>
      </div>
    </article>
  );
};

const formSchema = z.object({
  name: z.string(),
  answer: z.string().optional(),
});

const WysiwygService = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      answer: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const fontOptions = [
    "Arial (Sans-serif)",
    "Times New Roman (Serif)",
    "Helvetica (Sans-serif)",
    "Verdana (Sans-serif)",
    "Georgia (Serif)",
    "Roboto (Sans-serif)",
  ];

  return (
    <MuiLayout.Section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
        <Heading
          level={3}
          className="mb-4 text-wrap font-semibold tracking-normal"
        >
          “This will be our first computer believe that or not. We have a
          10-year-old who needs it for school. With this package is everything
          included that we need to plug it in and go?”
        </Heading>
        <Text className="text-muted-foreground">
          Asked 3 days ago by{" "}
          <Link
            href="#"
            className="font-medium text-secondary-foreground hover:underline"
          >
            Bonnie Green
          </Link>
        </Text>
        <div className="my-4 border-t border-primary-200 pt-4 md:my-8 md:pt-8">
          <article className="mb-4 rounded-lg border border-primary-200 bg-primary-50 p-4 text-base lg:p-6">
            <div className="flex flex-col sm:flex-row">
              <div className="order-2 mt-4 sm:order-1 sm:mr-4 sm:mt-0">
                <div className="flex w-24 items-center justify-center rounded-lg border border-primary-200 bg-muted font-medium sm:w-9 sm:flex-col">
                  <Button className="flex w-full justify-center rounded-b-none rounded-t-lg border-primary-200 bg-muted px-0 py-1 text-primary-500 shadow-none hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200">
                    <PlusIcon className="size-4 text-primary-500" />
                  </Button>
                  <span className="px-2 text-xs font-medium text-foreground lg:px-0 lg:text-sm ">
                    65
                  </span>
                  <Button className="flex w-full  justify-center rounded-b-lg rounded-t-none bg-muted px-0 py-1 text-primary-500 shadow-none hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-200">
                    <MinusIcon className="size-4 text-primary-500" />
                  </Button>
                </div>
              </div>
              <div className="order-1 text-muted-foreground sm:order-2">
                <span className="me-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                  Best answer
                </span>
                <Text className="my-4 text-muted-foreground md:mb-5">
                  Certainly! Embracing the significance of your first computer
                  acquisition, particularly in catering to your
                  10-year-old&apos;s educational needs, underscores the
                  importance of a comprehensive package. In the case of an iMac,
                  Apple offering is meticulously crafted to encompass all
                  requisite components for immediate functionality upon
                  unboxing.
                </Text>
                <Text className="mb-4 text-muted-foreground md:mb-5">
                  Within this package, you will find not only the iMac itself,
                  boasting its sleek design and powerful performance, but also a
                  suite of complementary peripherals essential for seamless
                  operation. These include a Magic Keyboard and a Magic Mouse,
                  ensuring intuitive interaction with the system right out of
                  the box. Furthermore, all necessary cables, including the
                  power cord and Thunderbolt 3 cables for peripheral
                  connectivity, are thoughtfully included, eliminating any need
                  for additional purchases or compatibility concerns.
                </Text>
                <Image
                  className="mb-4 max-w-full dark:hidden"
                  src={MacLight}
                  alt="Light theme iMac"
                />
                <Image
                  className="mb-4 hidden max-w-full dark:block"
                  src={MacDark}
                  alt="Dark theme iMac"
                />
                <Text className="mb-4 text-muted-foreground md:mb-5">
                  Moreover, recognizing the pivotal role of software in
                  enhancing productivity and enabling educational pursuits, this
                  iMac package comes preloaded with macOS, Apple&apos;s robust
                  operating system. Additionally, essential productivity
                  applications such as Pages, Numbers, and Keynote are readily
                  available, facilitating tasks ranging from document creation
                  to presentations with utmost efficiency.
                </Text>
                <Text className="mb-4 text-muted-foreground md:mb-5">
                  Beyond hardware and software provisions, Apple commitment
                  extends to ensuring a seamless setup experience. Clear and
                  concise setup instructions accompany the package, guiding you
                  through the initial configuration process effortlessly. Should
                  you encounter any queries or require further assistance, our
                  dedicated support channels stand ready to provide prompt
                  resolution, ensuring your transition into the world of iMac
                  computing is smooth and gratifying.
                </Text>
                <Text className="mb-4 text-muted-foreground md:mb-5">
                  Thus, with our iMac package, you can confidently plug in your
                  new computer, empowered with the knowledge that every element
                  essential for immediate use is meticulously curated and
                  readily accessible.
                </Text>
                <Text className="text-muted-foreground">
                  Asked 1 day ago by{" "}
                  <Link
                    href="#"
                    className="font-medium text-secondary-foreground hover:underline"
                  >
                    Roberta Casas
                  </Link>
                </Text>
              </div>
            </div>
          </article>
          {answers.map((answer) => (
            <AnswerArticle key={answer.id} {...answer} />
          ))}
        </div>
        <div className="mb-4 sm:mb-6">
          <Heading level={3} className="font-semibold tracking-normal">
            Answer to this question
          </Heading>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mb-4 md:mb-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your name</FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      id="first_name"
                      {...field}
                      className="mb-4 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Write your answer here</FormLabel>
                  <FormControl>
                    <div className="rounded-lg border border-primary-300 bg-primary-50">
                      <div className="w-full">
                        <div className="rounded-t-lg bg-primary-50 px-4 py-2">
                          <Textarea
                            id="response"
                            rows={8}
                            {...field}
                            className="block w-full border-0 bg-primary-50 px-0 text-sm text-foreground focus:ring-0"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center divide-primary-200 rounded-b-lg border-t border-primary-200 px-4 py-3 sm:divide-x sm:rtl:divide-x-reverse">
                        <div className="flex flex-wrap items-center space-x-0.5 sm:pe-4 rtl:space-x-reverse">
                          {tools.slice(0, 2).map((tool) => (
                            <ToolButton
                              key={tool.id}
                              id={tool.id}
                              icon={tool.icon}
                              label={tool.label}
                            />
                          ))}
                          <FontDropdown options={fontOptions} />
                          {tools.slice(2, 14).map((tool) => (
                            <ToolButton
                              key={tool.id}
                              id={tool.id}
                              icon={tool.icon}
                              label={tool.label}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="items-center space-x-4 rounded-b-lg border-t border-primary-200 px-4 py-3 sm:flex">
                        <Button
                          type="submit"
                          className="mb-4 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-3 py-2 text-center text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-400 sm:mb-0 sm:w-auto"
                        >
                          Submit answer
                        </Button>
                        {tools.slice(14).map((tool) => (
                          <ToolButton
                            key={tool.id}
                            id={tool.id}
                            icon={tool.icon}
                            label={tool.label}
                          />
                        ))}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <Heading
          level={3}
          className="mb-4 font-semibold tracking-normal sm:mb-6"
        >
          Related questions
        </Heading>
        <div className="-my-6 divide-y divide-primary-200">
          {relatedQuestions.map((item) => (
            <div key={item.id} className="space-y-4 py-6 md:py-8">
              <div className="grid gap-4">
                <div>
                  <span
                    className={`inline-block rounded px-2.5 py-0.5 text-xs font-medium ${
                      item.answersCount === "No answers"
                        ? "bg-primary-200 text-primary-500"
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    }`}
                  >
                    {item.answersCount}
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
            </div>
          ))}
        </div>
      </div>
    </MuiLayout.Section>
  );
};

export default WysiwygService;
