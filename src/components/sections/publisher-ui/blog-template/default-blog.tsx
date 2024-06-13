"use-client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Ellipsis, Globe, Mail, MessageSquareMore } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Components Import
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Textarea } from "~/components/ui/textarea";
// Image Imports
import Blog1 from "~/lib/assets/images/blog-1.png";
import Blog2 from "~/lib/assets/images/blog-2.png";
import Blog3 from "~/lib/assets/images/blog-3.png";
import Blog4 from "~/lib/assets/images/blog-4.png";
import ProfilePic from "~/lib/assets/images/profile-picture-2.jpg";
import Quote from "~/lib/assets/images/quote.png";
import Typography1 from "~/lib/assets/images/typography-image-1.png";
import Typography2 from "~/lib/assets/images/typography-image-2.png";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

const commentSchema = z.object({
  comment: z.string().optional(),
});

interface Article {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
  readTime: string;
  link: string;
}

interface TableData {
  country: string;
  date: string;
  amount: string;
}

interface ListData {
  label: string;
  href: string;
}

interface LinkData {
  name: string;
  data: ListData[];
}

const LinkData: LinkData[] = [
  {
    name: "COMPANY",
    data: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Brand Center", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    name: "HELP CENTER",
    data: [
      { label: "Discord Server", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    name: "LEGAL",
    data: [
      { label: "Privacy Policy", href: "#" },
      { label: "Licensing", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    name: "COMPANY",
    data: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Brand Center", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    name: "DOWNLOAD",
    data: [
      { label: "iOS", href: "#" },
      { label: "Android", href: "#" },
      { label: "Windows", href: "#" },
      { label: "MacOS", href: "#" },
    ],
  },
];

//This icon is not available in Lucid/RadixUI
const TwitterIcon = () => (
  <svg
    className="size-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
    />
  </svg>
);

// This icon is not available in Lucid/RadixUI
const BallIcon = () => (
  <svg
    className="size-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
      clipRule="evenodd"
    />
  </svg>
);

// This icon is not available in Lucid/RadixUI
const FacebookIcon = () => (
  <svg
    className="size-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 8 19"
  >
    <path
      fillRule="evenodd"
      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
      clipRule="evenodd"
    />
  </svg>
);

// This icon is not available in Lucid/RadixUI
const GithubIcon = () => (
  <svg
    className="size-4"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
      clipRule="evenodd"
    />
  </svg>
);

const IconList = [
  { icon: <FacebookIcon /> },
  { icon: <TwitterIcon /> },
  { icon: <GithubIcon /> },
  { icon: <BallIcon /> },
];

const TableData: TableData[] = [
  {
    country: "United States",
    date: "April 21, 2021",
    amount: "$2,300",
  },
  {
    country: "Canada",
    date: "May 31, 202",
    amount: "$300",
  },
  {
    country: "United Kingdom",
    date: "June 3, 2021",
    amount: "$2,500",
  },
  {
    country: "Australia",
    date: "June 23, 2021",
    amount: "$3,543",
  },
  {
    country: "Germany",
    date: "July 6, 2021",
    amount: "$99",
  },
  {
    country: "France",
    date: "August 23, 2021",
    amount: "$2,540",
  },
];

const ExampleCode = `
<dl className="grid grid-cols-2 gap-8 max-w-screen-md text-gray-900 sm:grid-cols-3 dark:text-white">
  <div className="flex flex-col justify-center items-center">
    <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
    <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">developers</dd>
  </div>
  <div className="flex flex-col justify-center items-center">
    <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
    <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">contributors</dd>
  </div>
  <div className="flex flex-col justify-center items-center">
    <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
    <dd className="text-lg font-normal text-gray-500 dark:text-gray-400">organizations</dd>
  </div>
</dl>
`;

const Articles: Article[] = [
  {
    imgSrc: Blog1,
    imgAlt: "Image 1",
    title: "Our first office",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 2 minutes",
    link: "/our-first-office",
  },
  {
    imgSrc: Blog2,
    imgAlt: "Image 2",
    title: "Enterprise design tips",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 12 minutes",
    link: "/enterprise-design-tips",
  },
  {
    imgSrc: Blog3,
    imgAlt: "Image 3",
    title: "We partnered with Google",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 8 minutes",
    link: "/we-partnered-with-google",
  },
  {
    imgSrc: Blog4,
    imgAlt: "Image 4",
    title: "Our first project with React",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 4 minutes",
    link: "/our-first-project-with-react",
  },
];

const comments = [
  {
    profilePic: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
    name: "Michael Gough",
    date: "Feb. 8, 2022",
    comment:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
  },
  {
    profilePic: "https://xsgames.co/randomusers/assets/avatars/female/4.jpg",
    name: "Jese Leos",
    date: "Feb. 12, 2022",
    comment: "Much appreciated! Glad you liked it ☺️",
    isReply: true,
  },
  {
    profilePic: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    name: "Bonnie Green",
    date: "Mar. 12, 2022",
    comment:
      "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
  },
  {
    profilePic: "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    name: "Helene Engels",
    date: "Jun. 23, 2022",
    comment:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
  },
];

const DropDownMenu = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        id="dropdownComment1Button"
        data-dropdown-toggle="dropdownComment1"
        className="inline-flex items-center rounded-lg bg-background p-2 text-center text-sm font-medium text-primary-400 shadow-none hover:bg-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-200"
      >
        <Ellipsis className="size-4" />
        <span className="sr-only">Comment settings</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="z-10 w-36 divide-y divide-primary-50 rounded bg-background p-0 shadow">
      <div id="dropdownComment1">
        <ul
          className="text-sm text-primary-700"
          aria-labelledby="dropdownMenuIconHorizontalButton"
        >
          {["Edit", "Remove", "Report"].map((name, index) => (
            <li key={index}>
              <Link
                href="#"
                className="block px-4 py-2 hover:bg-primary-100 hover:text-foreground"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PopoverContent>
  </Popover>
);

const CommentSection = () => {
  // 1. Define your form.
  const comment = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
    },
  });

  // 2. Define a submit handler.
  function onCommentSubmit(values: z.infer<typeof commentSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="bg-background py-8 pt-0 antialiased">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <Heading level={4} className="font-bold text-foreground lg:text-2xl">
            Discussion (20)
          </Heading>
        </div>
        <Form {...comment}>
          <form
            className="mb-6"
            onSubmit={comment.handleSubmit(onCommentSubmit)}
          >
            <div className="mb-6 rounded-lg border border-gray-200 bg-primary-50 px-4 py-2">
              <FormField
                control={comment.control}
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
            <Button className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-200">
              Post comment
            </Button>
          </form>
        </Form>
        {comments.map(({ comment, date, name, profilePic, isReply }, index) => {
          return (
            <div key={index}>
              <article
                className={`rounded-lg  bg-background p-6 text-base ${index !== 0 ? "mb-3 border-t border-gray-200 " : ""} ${isReply ? "ml-6" : ""}`}
              >
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Text className="mr-3 inline-flex items-center text-sm font-semibold text-foreground">
                      <Avatar className="mr-2 size-6 rounded-full">
                        <AvatarImage
                          src={profilePic}
                          alt="Michael Gough"
                        ></AvatarImage>
                      </Avatar>
                      {name}
                    </Text>
                    <Text className="text-sm text-primary-500">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        {date}
                      </time>
                    </Text>
                  </div>
                  <DropDownMenu />
                </footer>
                <Text className="text-primary-600">{comment}</Text>
                <div className="mt-4 flex items-center space-x-4">
                  <Button
                    variant={"link"}
                    className="flex items-center text-sm font-medium text-primary-500 hover:underline"
                  >
                    <MessageSquareMore className="mr-1.5 size-3.5" />
                    Reply
                  </Button>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ArticleCard = (article: Article) => {
  const { imgSrc, imgAlt, title, description, readTime, link } = article;
  return (
    <article className="max-w-xs">
      <Link href={link} passHref>
        <Image
          src={imgSrc}
          width={400}
          height={300}
          className="mb-5 rounded-lg"
          alt={imgAlt}
        />
      </Link>
      <Heading level={5} className="mb-2 font-bold leading-tight">
        <Link href={link} passHref>
          {title}
        </Link>
      </Heading>
      <Text className="mb-6 text-muted-foreground">{description}</Text>
      <Link
        href={link}
        passHref
        className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
      >
        {readTime}
      </Link>
    </article>
  );
};

const BlogBody = () => {
  return (
    <div>
      <Heading
        level={1}
        className="mb-6 font-bold leading-[48px] tracking-tight"
      >
        Getting started with ModernUI Web
      </Heading>
      <Text className="mb-6 md:text-lg">
        First of all you need to understand how ModernUI Web works. This library
        is not another framework. Rather, it is a set of components based on
        Tailwind CSS that you can just copy-paste from the documentation.
      </Text>
      <Text className="mb-6 md:text-lg">
        It also includes a JavaScript file that enables interactive components,
        such as modals, dropdowns, and datepickers which you can optionally
        include into your project via CDN or NPM.
      </Text>
      <Text className="mb-6 md:text-lg">
        You can check out the quickstart guide to explore the elements by
        including the CDN files into your project. But if you want to build a
        project with ModernUI Web I recommend you to follow the build tools
        steps so that you can purge and minify the generated CSS.
      </Text>
      <Text className="mb-6 md:text-lg">
        You&#39;ll also receive a lot of useful application UI, marketing UI,
        and e-commerce pages that can help you get started with your projects
        even faster. You can check out this comparison table to better
        understand the differences between the open-source and pro version of
        ModernUI Web.
      </Text>
      <Heading
        level={1}
        className="mb-6 font-bold leading-[48px] tracking-tight"
      >
        When does design come in handy?
      </Heading>
      <Text className="mb-6 md:text-lg">
        While it might seem like extra work at a first glance, here are some key
        moments in which prototyping will come in handy:
      </Text>
      <ol type="1" className="ml-[28px] list-decimal">
        <li className="mb-6 md:text-lg">
          <strong>Usability testing</strong>. Does your user know how to exit
          out of screens? Can they follow your intended user journey and buy
          something from the site you&#39;ve designed? By running a usability
          test, you&#39;ll be able to see how users will interact with your
          design once it&#39;s live;
        </li>
        <li className="mb-6 md:text-lg">
          <strong>Involving stakeholders</strong>. Need to check if your GDPR
          consent boxes are displaying properly? Pass your prototype to your
          data protection team and they can test it for real;
        </li>
        <li className="mb-6 md:text-lg">
          <strong>Impressing a client</strong>. Prototypes can help explain or
          even sell your idea by providing your client with a hands-on
          experience;
        </li>
        <li className="mb-6 md:text-lg">
          <strong>Communicating your vision</strong>. By using an interactive
          medium to preview and test design elements, designers and developers
          can understand each other — and the project — better.
        </li>
      </ol>
      <Heading className="mb-4 font-bold leading-9 tracking-normal" level={3}>
        Laying the groundwork for best design
      </Heading>
      <Text className="mb-6 md:text-lg">
        Before going digital, you might benefit from scribbling down some ideas
        in a sketchbook. This way, you can think things through before
        committing to an actual design project.
      </Text>
      <Text className="mb-6 md:text-lg">
        Let&#39;s start by including the CSS file inside the <code>head</code>{" "}
        tag of your HTML.
      </Text>
      <Heading className="mb-4 font-bold leading-9 tracking-normal" level={3}>
        Understanding typography
      </Heading>
      <Heading className="mb-[9px] font-semibold tracking-tight" level={4}>
        Type properties
      </Heading>
      <Text className="mb-6 md:text-lg">
        A typeface is a collection of letters. While each letter is unique,
        certain shapes are shared across letters. A typeface represents shared
        patterns across a collection of letters.
      </Text>
      <Heading className="mb-[9px] font-semibold tracking-tight" level={4}>
        Baseline
      </Heading>
      <Text className="mb-6 md:text-lg">
        A typeface is a collection of letters. While each letter is unique,
        certain shapes are shared across letters. A typeface represents shared
        patterns across a collection of letters.
      </Text>
      <Heading className="mb-[9px] font-semibold tracking-tight" level={4}>
        Measurement from the baseline
      </Heading>
      <Text className="mb-6 md:text-lg">
        A typeface is a collection of letters. While each letter is unique,
        certain shapes are shared across letters. A typeface represents shared
        patterns across a collection of letters.
      </Text>
      <Heading className="mb-4 font-bold leading-9 tracking-normal" level={3}>
        Type classification
      </Heading>
      <Heading className="mb-[9px] font-semibold tracking-tight" level={4}>
        Serif
      </Heading>
      <Text className="mb-6 md:text-lg">
        A serif is a small shape or projection that appears at the beginning or
        end of a stroke on a letter. Typefaces with serifs are called serif
        typefaces. Serif fonts are classified as one of the following:
      </Text>
      <Heading className="mb-[9px] font-semibold tracking-tight" level={4}>
        Old-Style serifs
      </Heading>
      <ul className="mb-6 ml-[28px] list-disc md:text-lg">
        <li className="mb-3">Low contrast between thick and thin strokes</li>
        <li className="mb-3">Diagonal stress in the strokes</li>
        <li className="mb-3">Slanted serifs on lower-case ascenders</li>
      </ul>
      <Image className="mb-6 w-full object-cover" src={Typography2} alt="" />
      <ol className="mb-6 ml-[28px] list-decimal md:text-lg">
        <li className="mb-3">Low contrast between thick and thin strokes</li>
        <li className="mb-3">Diagonal stress in the strokes</li>
        <li className="mb-3">Slanted serifs on lower-case ascenders</li>
      </ol>
      <Heading className="mb-4 font-bold leading-9 tracking-normal" level={3}>
        Laying the best for successful prototyping
      </Heading>
      <Text level="baseTall" className="mb-6 md:text-lg">
        A serif is a small shape or projection that appears at the beginning:
      </Text>
      <Image src={Quote} width={32} height={32} alt="quote" />

      <Text className="mb-6 mt-[10px] font-bold italic md:text-lg">
        ModernUI Web is just awesome. It contains tons of predesigned components
        and pages starting from login screen to complex dashboard. Perfect
        choice for your next SaaS application.
      </Text>

      <Heading className="mb-[9px] font-semibold tracking-tight" level={4}>
        Code example
      </Heading>
      <Text className="mb-6 md:text-lg">
        A serif is a small shape or projection that appears at the beginning or
        end of a stroke on a letter. Typefaces with serifs are called serif
        typefaces. Serif fonts are classified as one of the following:
      </Text>
      <div className="mb-6 overflow-x-auto rounded-lg bg-muted p-4">
        <pre className="whitespace-pre text-base text-muted-foreground">
          <code>{ExampleCode}</code>
        </pre>
      </div>
      <Heading className="mb-[9px] font-semibold tracking-tight" level={4}>
        Table example
      </Heading>
      <Text className="mb-6 md:text-lg">
        A serif is a small shape or projection that appears at the beginning or
        end of a stroke on a letter.
      </Text>
      <div className="mb-6 overflow-x-auto">
        <Table className="mx-auto mb-6 table w-full md:min-w-full">
          <TableHeader>
            <TableRow className="bg-muted font-bold">
              <TableHead>Country</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TableData.map(({ country, amount, date }) => (
              <TableRow key={country}>
                <TableCell className="font-medium">{country}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Heading className="mb-6 font-bold leading-9 tracking-normal" level={3}>
        Best practices for setting up your prototype
      </Heading>
      <Text className="mb-6 md:text-lg">
        <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how
        close a prototype will be to the real deal. If you&#39;re simply
        preparing a quick visual aid for a presentation, a low-fidelity
        prototype — like a wireframe with placeholder images and some basic text
        — would be more than enough. But if you&#39;re going for more intricate
        usability testing, hi-fi prototypes are the better choice.
      </Text>
      <Text className="mb-6 md:text-lg">
        <strong>Consider your user</strong>. To create an intuitive user flow,
        try to think as your user would when interacting with your product.
        While you can fine-tune this during beta testing, considering your
        user&apos;s needs and habits early on will save you time by setting you
        on the right path.
      </Text>
      <Text className="mb-6 md:text-lg">
        <strong>Start from the inside out.</strong>. A nice way to both organize
        your tasks and create more user-friendly prototypes is by building your
        prototypes &apos;inside out&apos;. Start by focusing on what will be
        important to your user, like a Buy now button or an image gallery, and
        list each element by order of priority. This way, you&apos;ll be able to
        create a prototype that puts your users needs at the heart of your
        design.
      </Text>
      <Text className="mb-6 md:text-lg">
        {" "}
        And there you have it! Everything you need to design and share
        prototypes — right in ModernUi Web Figma.
      </Text>
    </div>
  );
};

const BlogFooter = () => {
  return (
    <footer className="bg-muted antialiased">
      <div className="md:{p-8 pb-0} lg:{p-10 pb-0} mx-auto max-w-screen-xl p-4 py-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {LinkData.map(({ name, data }, index) => (
            <div key={index}>
              <Text className="mb-6 text-sm font-semibold uppercase">
                {name}
              </Text>
              <ul className="text-muted-foreground">
                {data.map(({ label, href }, index) => (
                  <li key={index} className="mb-6">
                    <Link href={href} className="hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-border sm:mx-auto lg:my-8" />
        <div className="text-center">
          <Link
            href="#"
            className="mb-5 flex items-center justify-center text-2xl font-semibold text-secondary-foreground"
          >
            <Globe className="mr-2 h-8" />
            ModernUI Web
          </Link>
          <span className="block text-center text-sm text-muted-foreground">
            © 2021-2022{" "}
            <Link href="#" className="hover:underline">
              ModernUI Web™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="mt-5 flex justify-center space-x-5">
            {IconList.map(({ icon }, index) => (
              <li key={index}>
                <Link
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-secondary-foreground"
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

const DefaultBlog = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-background">
      <main className="bg-background pt-8 antialiased">
        <div className="mx-auto flex max-w-screen-xl justify-between px-4">
          <article className="mx-auto w-full max-w-2xl py-8 lg:py-16">
            <header className="mb-6 lg:mb-6">
              <address className="mb-6 flex items-center not-italic">
                <div className="mr-3 inline-flex items-center text-sm text-secondary-foreground">
                  <Avatar className="mr-4 size-16">
                    <Image
                      className="w-full rounded-full object-cover"
                      src={ProfilePic}
                      alt="Jese Leos"
                    />
                  </Avatar>
                  <div>
                    <Link
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-secondary-foreground"
                    >
                      Jese Leos
                    </Link>
                    <Text className="text-base text-muted-foreground">
                      Graphic Designer, educator & CEO ModernUI Web
                    </Text>
                    <Text className="text-base text-muted-foreground">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </Text>
                  </div>
                </div>
              </address>
            </header>
            <Heading
              level={1}
              className="mb-6 text-wrap font-extrabold leading-tight tracking-normal"
            >
              Best practices for successful prototypes
            </Heading>
            <Text className="mb-6 leading-8 sm:text-lg lg:text-[22px]">
              ModernUI Web is an open-source library of UI components built with
              the utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </Text>
            <Text className="mb-6 md:text-lg">
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </Text>
            <Text className="mb-6 md:text-lg">
              But then I found a{" "}
              <Link className="text-primary" href="#">
                component library based on Tailwind CSS called ModernUI Web
              </Link>
              . It comes with the most commonly used UI components, such as
              buttons, navigation bars, cards, form elements, and more which are
              conveniently built with the utility classes from Tailwind CSS.
            </Text>
            <figure className="mb-5">
              <Image className="w-full object-cover" src={Typography1} alt="" />
              <figcaption className="text-center text-sm text-muted-foreground">
                Digital art by Anonymous
              </figcaption>
            </figure>
            <BlogBody />
            <CommentSection />
          </article>
        </div>
      </main>

      <aside
        aria-label="Related articles"
        className="bg-muted py-6 antialiased lg:py-24"
      >
        <div className="mx-auto max-w-screen-xl px-4">
          <Heading level={3} className="mb-8 font-bold">
            Related articles
          </Heading>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {Articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </aside>
      <div className="mx-auto max-w-screen-md py-8 sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">
          <Heading level={1} className="mb-4 font-extrabold tracking-tight">
            Sign up for our newsletter
          </Heading>
          <Text className="mx-12 mb-12 text-muted-foreground md:text-lg">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </Text>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mx-16 mb-3 mt-6 flex h-fit flex-1 items-center justify-center gap-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex min-w-full flex-1">
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl className="w-full">
                      <div className="relative">
                        <Input
                          className="w-full rounded-r-none bg-input pl-8"
                          placeholder="Enter your email"
                          {...field}
                        />
                        <Mail className="absolute left-2 top-1/4 size-5 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <Button className="rounded-l-none">Submit</Button>
                  </FormItem>
                )}
              />
            </form>
            <div className="text-sm font-medium text-muted-foreground">
              We care about the protection of your data. &nbsp;
              <Link
                href="#"
                className="text-secondary-foreground hover:underline"
              >
                Read our Privacy Policy
              </Link>
              &nbsp; .
            </div>
          </Form>
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export default DefaultBlog;
