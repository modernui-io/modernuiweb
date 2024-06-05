import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ChevronRight,
  Ellipsis,
  Globe,
  Heart,
  Home,
  Image as ImageIcon,
  Mail,
  MessageSquareQuote,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Components Import
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
import { Label } from "~/components/ui/label";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
//Image Imports
import Blog1 from "~/lib/assets/images/blog-1.png";
import Blog2 from "~/lib/assets/images/blog-2.png";
import Blog3 from "~/lib/assets/images/blog-3.png";
import Blog4 from "~/lib/assets/images/blog-4.png";
import Blog5 from "~/lib/assets/images/image-2.jpg";
import Blog6 from "~/lib/assets/images/image-4.jpg";
import Typography1 from "~/lib/assets/images/typography-image-1.png";
import Typography2 from "~/lib/assets/images/typography-image-2.png";

interface ListData {
  label: string;
  href: string;
}

interface LinkData {
  name: string;
  data: ListData[];
}

interface ArticleData {
  image: StaticImageData;
  title: string;
  link: string;
  alt: string;
}

interface TableData {
  country: string;
  date: string;
  amount: string;
}

const TableData: TableData[] = [
  {
    country: "United States",
    date: "April 21, 2021",
    amount: "$2,300",
  },
  {
    country: "Canada",
    date: "May 31, 2021",
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

const ArticleData: ArticleData[] = [
  {
    image: Blog2,
    title: "ModernUI Web enables IT to automate Apple device configuration",
    link: "#",
    alt: "Image 1",
  },
  {
    image: Blog5,
    title: "How AI is transforming your smartphone",
    link: "#",
    alt: "Image 2",
  },
  {
    image: Blog3,
    title: "Android, ChromeOS, and the future of app discovery",
    link: "#",
    alt: "Image 3",
  },
  {
    image: Blog6,
    title: "What Google collaboration app offers remote teams",
    link: "#",
    alt: "Image 4",
  },
  {
    image: Blog4,
    title: "Collaboration app spending grows in the face of crisis",
    link: "#",
    alt: "Image 5",
  },
  {
    image: Blog1,
    title: "For developers, too many meetings, too little 'focus' time",
    link: "#",
    alt: "Image 6",
  },
];

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
];

const Comments = [
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    name: "Michael Gough",
    datetime: "2022-02-08",
    title: "February 8th, 2022",
    date: "Feb. 8, 2022",
    content:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    likes: 37,
  },
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/7.jpg",
    name: "Jese Leos",
    datetime: "2022-02-12",
    title: "February 12th, 2022",
    date: "Feb. 12, 2022",
    content: "Much appreciated! Glad you liked it ☺️",
    likes: 9,
    isReply: true,
  },
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/3.jpg",
    name: "Bonnie Green",
    datetime: "2022-03-12",
    title: "March 12th, 2022",
    date: "Mar. 12, 2022",
    content:
      "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
    likes: 22,
  },
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/4.jpg",
    name: "Helene Engels",
    datetime: "2022-06-23",
    title: "June 23rd, 2022",
    date: "Jun. 23, 2022",
    content:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
    likes: 18,
  },
];

const CommentList = [
  {
    author: "Bonnie Green",
    title: "5 Ways SaaS Can Help Speed Up Cybersecurity Implementation",
  },
  {
    author: "Lana Byrd",
    title:
      "Jese Leos on Crunching Large Datasets Made Fast and Easy: the Polars Library",
  },
  {
    author: "Jese Leos",
    title: "Founders, ditch your long presentations. Here’s how to make ...",
  },
  {
    author: "Thomas Lean",
    title: "AI Meets IoT: What is the Artificial Intelligence of Things",
  },
];

const BlogBody = () => {
  return (
    <div>
      <Heading className="mb-4 font-extrabold tracking-tight" level={2}>
        Getting started with Flowbite
      </Heading>
      <Text className="mb-4 md:text-lg">
        First of all you need to understand how Flowbite works. This library is
        not another framework. Rather, it is a set of components based on
        Tailwind CSS that you can just copy-paste from the documentation.
      </Text>
      <Text className="mb-4 md:text-lg">
        It also includes a JavaScript file that enables interactive components,
        such as modals, dropdowns, and datepickers which you can optionally
        include into your project via CDN or NPM.
      </Text>
      <Text className="mb-4 md:text-lg">
        You can check out the quickstart guide to explore the elements by
        including the CDN files into your project. But if you want to build a
        project with Flowbite I recommend you to follow the build tools steps so
        that you can purge and minify the generated CSS.
      </Text>
      <Text className="mb-4 md:text-lg">
        You&#39;ll also receive a lot of useful application UI, marketing UI,
        and e-commerce pages that can help you get started with your projects
        even faster. You can check out this comparison table to better
        understand the differences between the open-source and pro version of
        Flowbite.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={2}>
        When does design come in handy?
      </Heading>
      <Text className="mb-4 md:text-lg">
        While it might seem like extra work at a first glance, here are some key
        moments in which prototyping will come in handy:
      </Text>
      <ol>
        <li className="mb-4 md:text-lg">
          <strong>Usability testing</strong>. Does your user know how to exit
          out of screens? Can they follow your intended user journey and buy
          something from the site you&#39;ve designed? By running a usability
          test, you&#39;ll be able to see how users will interact with your
          design once it&#39;s live;
        </li>
        <li className="mb-4 md:text-lg">
          <strong>Involving stakeholders</strong>. Need to check if your GDPR
          consent boxes are displaying properly? Pass your prototype to your
          data protection team and they can test it for real;
        </li>
        <li className="mb-4 md:text-lg">
          <strong>Impressing a client</strong>. Prototypes can help explain or
          even sell your idea by providing your client with a hands-on
          experience;
        </li>
        <li className="mb-4 md:text-lg">
          <strong>Communicating your vision</strong>. By using an interactive
          medium to preview and test design elements, designers and developers
          can understand each other — and the project — better.
        </li>
      </ol>
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Laying the groundwork for best design
      </Heading>
      <Text className="mb-4 md:text-lg">
        Before going digital, you might benefit from scribbling down some ideas
        in a sketchbook. This way, you can think things through before
        committing to an actual design project.
      </Text>
      <Text className="mb-4 md:text-lg">
        Let&#39;s start by including the CSS file inside the <code>head</code>{" "}
        tag of your HTML.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Understanding typography
      </Heading>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Type properties
      </Heading>
      <Text className="mb-4 md:text-lg">
        A typeface is a collection of letters. While each letter is unique,
        certain shapes are shared across letters. A type represents shared
        patterns across collection of letters.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Baseline
      </Heading>
      <Text className="mb-4 md:text-lg">
        A typeface is a collection of letters. While each letter is unique,
        certain shapes are shared across letters. A typeface represents shared
        patterns across a collection of letters.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Measurement from the baseline
      </Heading>
      <Text className="mb-4 md:text-lg">
        A typeface is a collection of letters. While each letter is unique,
        certain shapes are shared across letters. A typeface represents shared
        patterns across a collection of letters.
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Type classification
      </Heading>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Serif
      </Heading>
      <Text className="mb-4 md:text-lg">
        A serif is a small shape or projection that appears at the beginning or
        end of a stroke on a letter. Typefaces with serifs are called serif
        typefaces. Serif fonts are classified as one of the following:
      </Text>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Old-Style serifs
      </Heading>
      <ul className="mb-4 list-disc md:text-lg">
        <li>Low contrast between thick and thin strokes</li>
        <li>Diagonal stress in the strokes</li>
        <li>Slanted serifs on lower-case ascenders</li>
      </ul>
      <Image className="mb-4 w-full object-cover" src={Typography2} alt="" />
      <ol className="mb-4 list-decimal md:text-lg">
        <li>Low contrast between thick and thin strokes</li>
        <li>Diagonal stress in the strokes</li>
        <li>Slanted serifs on lower-case ascenders</li>
      </ol>
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Laying the best for successful prototyping
      </Heading>
      <Text level="baseTall" className="mb-4 md:text-lg">
        A serif is a small shape or projection that appears at the beginning:
      </Text>
      <blockquote>
        <Text className="mb-4 font-bold italic md:text-lg">
          &quot;Flowbite is just awesome. It contains tons of predesigned
          components and pages starting from login screen to complex dashboard.
          Perfect choice for your next SaaS application.&quot;
        </Text>
      </blockquote>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Code example
      </Heading>
      <Text className="mb-4 md:text-lg">
        A serif is a small shape or projection that appears at the beginning or
        end of a stroke on a letter. Typefaces with serifs are called serif
        typefaces. Serif fonts are classified as one of the following:
      </Text>
      <div className="overflow-x-auto rounded-lg bg-muted p-4">
        <pre className="whitespace-pre text-base text-muted-foreground">
          <code>{ExampleCode}</code>
        </pre>
      </div>
      <Heading className="mb-4 font-extrabold tracking-tight" level={4}>
        Table example
      </Heading>
      <Text className="mb-4 md:text-lg">
        A serif is a small shape or projection that appears at the beginning or
        end of a stroke on a letter.
      </Text>
      <div className="container mb-4 overflow-x-auto">
        <Table className="mx-auto w-full table-fixed">
          <TableHeader>
            <TableRow className="bg-muted font-bold">
              <TableHead className="min-w-40">Country</TableHead>
              <TableHead className="min-w-40">Date & Time</TableHead>
              <TableHead className="min-w-40">Amount</TableHead>
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
      <Heading className="mb-4 font-extrabold tracking-tight" level={3}>
        Best practices for setting up your prototype
      </Heading>
      <Text className="mb-4 md:text-lg">
        <strong>Low fidelity or high fidelity?</strong> Fidelity refers to how
        close a prototype will be to the real deal. If you&#39;re simply
        preparing a quick visual aid for a presentation, a low-fidelity
        prototype — like a wireframe with placeholder images and some basic text
        — would be more than enough. But if you&#39;re going for more intricate
        usability testing, hi-fi prototypes are the better choice.
      </Text>
      <Text className="mb-4 md:text-lg">
        <strong>Anticipate technical issues</strong>. Consider the technical
        limitations of your prototype early. If you&#39;re using the prototype
        to pitch a product that will require real-world hardware, ensure the
        prototype will be easy to port to said hardware.
      </Text>
      <Text className="mb-4 md:text-lg">
        <strong>Remember accessibility</strong>. It&#39;s crucial to take into
        account accessibility concerns when creating a prototype. If it&#39;s a
        feature that will make navigation easier for users with disabilities,
        build it into your prototype. If you&#39;re creating a website for
        general consumption, ensure anyone can use it.
      </Text>
    </div>
  );
};

//This icon is not available in Lucid/RadixUI
const TwitterColorIcon = () => (
  <svg
    className="size-5"
    aria-hidden="true"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.03168 15.0005C11.0694 15.0005 14.3718 9.99823 14.3718 5.66031C14.3718 5.51823 14.3718 5.37679 14.3622 5.23599C15.0047 4.77129 15.5593 4.19591 16 3.53679C15.4009 3.80239 14.7654 3.97649 14.1146 4.05327C14.7999 3.64306 15.3128 2.99779 15.5578 2.23759C14.9134 2.61999 14.2084 2.88947 13.4733 3.03439C12.9783 2.5081 12.3237 2.15961 11.6108 2.04284C10.8978 1.92607 10.1663 2.04753 9.52931 2.38842C8.89234 2.72931 8.38548 3.27064 8.08716 3.92862C7.78884 4.5866 7.71569 5.32456 7.87904 6.02831C6.57393 5.96284 5.29717 5.62366 4.13164 5.03279C2.9661 4.44192 1.93784 3.61256 1.1136 2.59855C0.693819 3.32121 0.565248 4.1767 0.754066 4.99083C0.942885 5.80496 1.43489 6.51652 2.12992 6.98063C1.60749 6.96532 1.09643 6.82438 0.64 6.56975V6.61135C0.640207 7.36925 0.902567 8.10374 1.38258 8.69026C1.86259 9.27677 2.53071 9.67919 3.2736 9.82927C2.79032 9.96109 2.28325 9.98036 1.79136 9.88559C2.00121 10.5378 2.40962 11.1081 2.95949 11.5169C3.50937 11.9256 4.17322 12.1523 4.85824 12.1653C4.17763 12.7003 3.39821 13.0958 2.56458 13.3293C1.73096 13.5627 0.859476 13.6296 0 13.5259C1.50122 14.4893 3.24795 15.0002 5.03168 14.9979"
      fill="#1DA1F2"
    />
  </svg>
);

//This icon is not available in Lucid/RadixUI
const FacebookColorIcon = () => (
  <svg
    className="size-5"
    aria-hidden="true"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M16 8.4436C16 4.02532 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02532 0 8.4436C0 12.4366 2.92547 15.7463 6.75 16.3464V10.7561H4.71875V8.4436H6.75V6.6811C6.75 4.6761 7.94438 3.5686 9.77172 3.5686C10.6467 3.5686 11.5625 3.72485 11.5625 3.72485V5.6936H10.5538C9.56 5.6936 9.25 6.31032 9.25 6.9436V8.4436H11.4688L11.1141 10.7561H9.25V16.3464C13.0745 15.7463 16 12.4366 16 8.4436Z"
        fill="#1877F2"
      />
      <path
        d="M11.1141 10.7561L11.4688 8.4436H9.25V6.9436C9.25 6.31095 9.56 5.6936 10.5538 5.6936H11.5625V3.72485C11.5625 3.72485 10.647 3.5686 9.77172 3.5686C7.94438 3.5686 6.75 4.6761 6.75 6.6811V8.4436H4.71875V10.7561H6.75V16.3464C7.5783 16.476 8.4217 16.476 9.25 16.3464V10.7561H11.1141Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_13664_80011">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0 0.443604)"
        />
      </clipPath>
    </defs>
  </svg>
);

//This icon is not available in Lucid/RadixUI
const RedditColorIcon = () => (
  <svg
    className="size-5"
    aria-hidden="true"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M8 16.4436C12.4183 16.4436 16 12.8619 16 8.4436C16 4.02533 12.4183 0.443604 8 0.443604C3.58172 0.443604 0 4.02533 0 8.4436C0 12.8619 3.58172 16.4436 8 16.4436Z"
        fill="#FF4500"
      />
      <path
        d="M13.3335 8.44363C13.3335 7.79801 12.8095 7.27404 12.1639 7.27404C11.8458 7.27404 11.5651 7.39567 11.3592 7.60152C10.5639 7.03076 9.45982 6.65649 8.24344 6.60971L8.77677 4.11146L10.5078 4.47638C10.5265 4.91614 10.8914 5.2717 11.3405 5.2717C11.799 5.2717 12.1733 4.89743 12.1733 4.43895C12.1733 3.98047 11.799 3.6062 11.3405 3.6062C11.013 3.6062 10.7323 3.79334 10.6013 4.07404L8.66449 3.66234C8.60835 3.65299 8.55221 3.66234 8.50543 3.69041C8.45865 3.71848 8.43058 3.76527 8.41186 3.82141L7.82239 6.60971C6.57794 6.64714 5.46449 7.01205 4.65982 7.60152C4.45397 7.40503 4.16391 7.27404 3.85514 7.27404C3.20952 7.27404 2.68555 7.79801 2.68555 8.44363C2.68555 8.92082 2.96625 9.32316 3.37794 9.5103C3.35923 9.62258 3.34987 9.74421 3.34987 9.86585C3.34987 11.6623 5.43642 13.1126 8.01888 13.1126C10.6013 13.1126 12.6879 11.6623 12.6879 9.86585C12.6879 9.74421 12.6785 9.63193 12.6598 9.51965C13.0434 9.33252 13.3335 8.92082 13.3335 8.44363ZM5.3335 9.27638C5.3335 8.8179 5.70777 8.44363 6.16625 8.44363C6.62473 8.44363 6.999 8.8179 6.999 9.27638C6.999 9.73486 6.62473 10.1091 6.16625 10.1091C5.70777 10.1091 5.3335 9.73486 5.3335 9.27638ZM9.98379 11.4752C9.41303 12.046 8.32765 12.0834 8.00952 12.0834C7.69139 12.0834 6.59666 12.0366 6.03525 11.4752C5.95104 11.391 5.95104 11.2506 6.03525 11.1664C6.11946 11.0822 6.25982 11.0822 6.34403 11.1664C6.69958 11.522 7.46683 11.653 8.01888 11.653C8.57093 11.653 9.32882 11.522 9.69373 11.1664C9.77794 11.0822 9.9183 11.0822 10.0025 11.1664C10.068 11.26 10.068 11.391 9.98379 11.4752ZM9.83408 10.1091C9.37561 10.1091 9.00134 9.73486 9.00134 9.27638C9.00134 8.8179 9.37561 8.44363 9.83408 8.44363C10.2926 8.44363 10.6668 8.8179 10.6668 9.27638C10.6668 9.73486 10.2926 10.1091 9.83408 10.1091Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_13664_80014">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0 0.443604)"
        />
      </clipPath>
    </defs>
  </svg>
);

const BreadcrumbList = [
  {
    icon: <Home className="mr-2.5 size-4" />,
    title: "Home",
  },
  {
    icon: <ChevronRight className="mx-1 size-4 " />,
    title: "Tech",
  },
  {
    icon: <ChevronRight className="mx-1 size-4 " />,
    title: "Prototyping from A to Z",
  },
];

//This icon is not available in Lucid/RadixUI
const LinkedinColorIcon = () => (
  <svg
    className="size-5"
    aria-hidden="true"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M14.8189 0.443604H1.18111C0.867861 0.443604 0.567441 0.568042 0.34594 0.789543C0.124438 1.01104 0 1.31146 0 1.62471V15.2625C0 15.5757 0.124438 15.8762 0.34594 16.0977C0.567441 16.3192 0.867861 16.4436 1.18111 16.4436H14.8189C15.1321 16.4436 15.4326 16.3192 15.6541 16.0977C15.8756 15.8762 16 15.5757 16 15.2625V1.62471C16 1.31146 15.8756 1.01104 15.6541 0.789543C15.4326 0.568042 15.1321 0.443604 14.8189 0.443604ZM4.76889 14.0736H2.36333V6.43249H4.76889V14.0736ZM3.56445 5.3736C3.29158 5.37207 3.02528 5.28973 2.79916 5.137C2.57304 4.98426 2.39723 4.76796 2.29392 4.5154C2.19061 4.26284 2.16443 3.98533 2.21869 3.71791C2.27294 3.45048 2.4052 3.20512 2.59877 3.01279C2.79234 2.82046 3.03854 2.68978 3.30631 2.63724C3.57408 2.58471 3.85141 2.61267 4.1033 2.71759C4.35519 2.82252 4.57036 2.99971 4.72164 3.22681C4.87293 3.45391 4.95355 3.72073 4.95333 3.9936C4.95591 4.17629 4.92167 4.35763 4.85267 4.52681C4.78368 4.69598 4.68132 4.84954 4.55171 4.97831C4.42211 5.10709 4.2679 5.20846 4.09828 5.27637C3.92867 5.34428 3.74711 5.37735 3.56445 5.3736ZM13.6356 14.0803H11.2311V9.90583C11.2311 8.67472 10.7078 8.29472 10.0322 8.29472C9.31889 8.29472 8.61889 8.83249 8.61889 9.93694V14.0803H6.21333V6.43805H8.52667V7.49694H8.55778C8.79 7.02694 9.60333 6.2236 10.8444 6.2236C12.1867 6.2236 13.6367 7.02027 13.6367 9.3536L13.6356 14.0803Z"
        fill="#0A66C2"
      />
    </g>
    <defs>
      <clipPath id="clip0_13664_80017">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0 0.443604)"
        />
      </clipPath>
    </defs>
  </svg>
);

const ColorIconList = [
  {
    icon: <TwitterColorIcon />,
    title: "Share on Twitter",
  },
  {
    icon: <FacebookColorIcon />,
    title: "Share on Facebook",
  },
  {
    icon: <RedditColorIcon />,
    title: "Share on Reddit",
  },
  {
    icon: <LinkedinColorIcon />,
    title: "Share on LinkedIn",
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

const NewsList = [
  {
    image: Blog1,
    newsTitle: "SaaS can help speed up Cybersecurity projects",
  },
  {
    image: Blog2,
    newsTitle: "Crunching large datasets made fast: ModernUI Web Library",
  },
  {
    image: Blog3,
    newsTitle: "Here’s how to make a react app with ModernUI Web Blocks",
  },
  {
    image: Blog1,
    newsTitle: "AI meets IoT: What is the artificial intelligence",
  },
  {
    image: Blog2,
    newsTitle: "How to create a basic application with ModernUI Web",
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
          aria-labelledby="dropdownCommentButton"
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

const formSchema = z.object({
  firstName: z.string().min(1),
  email: z.string().email({ message: "Please enter a valid email" }),
  website: z.string().optional(),
  message: z.string().min(1),
});

const subscriptionSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
});

const WordpressComments = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      website: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-background py-8 text-foreground antialiased lg:py-16">
      <div className="mx-auto max-w-screen-md px-4">
        <div className="mb-6 flex items-center justify-between">
          <Heading level={4} className="font-bold text-foreground lg:text-2xl ">
            Leave a reply
          </Heading>
          <div>
            <Button className="rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary-200 ">
              Subscribe
            </Button>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto mb-6 grid gap-6 rounded-lg border border-primary-200 bg-background p-6 shadow-sm sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <Label
                htmlFor="firstName"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                First Name
              </Label>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">First Name</FormLabel>
                    <FormControl>
                      <Input
                        id="firstName"
                        className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-3 text-sm text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        placeholder="Bonnie Green"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Your email
              </Label>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Your email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-3 text-sm text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        placeholder="name@modernUiWeb.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Label
                htmlFor="website"
                className="mb-2 block text-sm font-medium text-foreground "
              >
                Website
              </Label>
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">First Name</FormLabel>
                    <FormControl>
                      <Input
                        id="website"
                        className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-3 text-sm text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        placeholder="www.yoursite.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <Label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Your message
              </Label>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">First Name</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        rows={5}
                        className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        placeholder=""
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
        {Comments.map((comment, index) => (
          <article
            key={index}
            className={`mb-6 p-6 ${comment.isReply ? "ml-6 lg:ml-12" : ""} rounded-lg border border-primary-200 bg-background text-base shadow-sm`}
          >
            <footer className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  className="mr-2 size-8 rounded-lg"
                  width={32}
                  height={32}
                  src={comment.profilePicture}
                  alt={comment.name}
                />
                <div>
                  <span className="text-sm font-semibold text-foreground">
                    {comment.name}
                  </span>
                  <Text className="text-sm text-primary-500">
                    <time dateTime={comment.datetime} title={comment.title}>
                      {comment.date}
                    </time>
                  </Text>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={"link"}
                  className="flex items-center px-0 text-sm font-medium text-primary-500 hover:underline"
                >
                  <Heart className="mr-1 size-3" />
                  {comment.likes}
                </Button>
                <DropDownMenu />
              </div>
            </footer>
            <Text className="text-primary-500">{comment.content}</Text>
            <Button
              variant={"link"}
              className="mt-4 px-0 text-sm font-medium text-foreground hover:underline"
            >
              Reply
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
};

const RightSidebarArticle = () => {
  // 1. Define your form.
  const subscription = useForm<z.infer<typeof subscriptionSchema>>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof subscriptionSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <main className="bg-background py-8 antialiased lg:py-16">
        <div className="mx-auto flex max-w-screen-xl justify-between px-2">
          <aside
            className="relative ml-auto mr-12 hidden xl:block"
            aria-labelledby="sidebar-label"
          >
            <div className="sticky top-6 rounded-lg border border-primary-300 bg-muted p-2">
              {ColorIconList.map(({ icon, title }, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button className="mb-2 flex items-center rounded-lg bg-muted p-2 text-center text-sm font-medium text-secondary-foreground hover:bg-primary-200 focus:outline-none focus:ring-4 focus:ring-gray-300">
                        {icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-foreground">
                      <Text className="text-md text-background">{title}</Text>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </aside>
          <article className="mx-auto w-full">
            <header className="mb-4 lg:mb-6">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  {BreadcrumbList.map(({ icon, title }, index) => (
                    <li className="inline-flex items-center" key={title}>
                      <Link
                        href="#"
                        className={`inline-flex items-center text-sm font-medium text-muted-foreground ${index !== BreadcrumbList.length - 1 ? "hover:text-primary-600" : ""}`}
                      >
                        {icon}
                        {title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="my-4 flex items-center md:my-6">
                {["Technology", "Design", "Programming"].map((name, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="mr-3 rounded bg-primary-200 px-2.5 py-0.5 text-sm font-medium text-primary-800 hover:bg-primary-300"
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <Heading
                level={1}
                className="mb-4 font-extrabold leading-tight lg:mb-6 lg:text-4xl"
              >
                Prototyping from A to Z: best practices for successful
                prototypes
              </Heading>
              <div className="flex items-center justify-between border-y border-primary-300 py-4">
                <div className="mr-4 text-sm">
                  <address className="inline not-italic">
                    By{" "}
                    <Link
                      rel="author"
                      className="text-secondary-foreground no-underline hover:underline"
                      href="#"
                    >
                      Jese Leos
                    </Link>
                  </address>{" "}
                  in{" "}
                  <Link
                    href="#"
                    className="text-secondary-foreground no-underline hover:underline"
                  >
                    Design
                  </Link>
                  <span>
                    on{" "}
                    <time
                      className="uppercase"
                      dateTime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      Feb. 8, 2022 at 4:52PM PDT
                    </time>
                  </span>
                </div>
                <Link
                  href="#comments"
                  className="flex shrink-0 items-center text-sm font-medium text-muted-foreground hover:underline"
                >
                  <MessageSquareQuote className="mr-1 size-4" />4 Comments
                </Link>
              </div>
            </header>
            <Text className="mb-4 md:text-lg">
              Before going digital, you might benefit from scribbling down some
              ideas in a sketchbook. This way, you can think things through
              before committing to an actual design project.
            </Text>
            <Text className="mb-4 md:text-lg">
              But then I found a{" "}
              <Link className="text-primary" href="#">
                component library based on Tailwind CSS called ModernUI Web
              </Link>
              . It comes with the most commonly used UI components, such as
              buttons, navigation bars, cards, form elements, and more which are
              conveniently built with the utility classes from Tailwind CSS.
            </Text>
            <figure className="mb-5">
              <Image
                className="mx-auto w-3/4 object-cover"
                src={Typography1}
                alt=""
              />
              <figcaption className="text-center text-sm text-muted-foreground">
                Digital art by Anonymous
              </figcaption>
            </figure>
            <BlogBody />
            <WordpressComments />
          </article>
          <aside
            className=" ml-12 hidden xl:block"
            aria-labelledby="sidebar-label"
          >
            <Heading level={4} id="sidebar-label" className="sr-only">
              Sidebar
            </Heading>
            <div className="mb-6 divide-y divide-primary-200 rounded-lg border border-primary-200 bg-background p-5 font-medium text-muted-foreground shadow">
              <Heading
                level={6}
                className="mb-4 text-sm font-bold uppercase leading-tight"
              >
                Latest news
              </Heading>
              {NewsList.map(({ image, newsTitle }) => (
                <div className="flex items-center py-4" key={newsTitle}>
                  <Link href="#" className="shrink-0">
                    <Image
                      src={image}
                      className="mr-4 size-12 max-w-full rounded-lg object-cover"
                      alt="Image 1"
                    />
                  </Link>
                  <Link href="#">
                    <Text
                      level={"sm"}
                      className="font-semibold leading-tight hover:underline"
                    >
                      {newsTitle}
                    </Text>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mb-6 rounded-lg border border-primary-200 bg-background p-5 shadow">
              <Heading level={6} className="mb-2  font-semibold leading-tight">
                Get the best ModernUI Web News delivered to your inbox
              </Heading>
              <Text className="mb-4 text-sm text-muted-foreground">
                Subscribe our newsletter for latest world news. Let&apos;s stay
                updated!
              </Text>
              <Form {...subscription}>
                <form onSubmit={subscription.handleSubmit(onSubmit)}>
                  <div className="relative mb-4">
                    <FormField
                      control={subscription.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">First Name</FormLabel>
                          <FormControl>
                            <div>
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <User className="size-3.5 text-muted-foreground" />
                              </div>
                              <Input
                                id="name"
                                className="block w-full rounded-lg border border-primary-200 bg-muted p-2.5 pl-9 text-sm text-secondary-foreground placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500"
                                placeholder="Bonnie Green"
                                {...subscription}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="relative mb-4">
                    <FormField
                      control={subscription.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Your Email</FormLabel>
                          <FormControl>
                            <div className="relative mb-4">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Mail className="size-3.5 text-muted-foreground" />
                              </div>
                              <Input
                                type="email"
                                className="block w-full rounded-lg border border-primary-200 bg-muted p-2.5 pl-9 text-sm text-secondary-foreground placeholder:text-muted-foreground focus:border-primary-500 focus:ring-primary-500"
                                placeholder="name@company.com"
                                {...subscription}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button className="mb-2 mr-2 w-full rounded-lg bg-muted text-sm font-medium text-secondary-foreground hover:bg-muted-foreground hover:text-background focus:outline-none focus:ring-4 focus:ring-primary-500 [&>span]:border-gray-300">
                    Subscribe
                  </Button>
                </form>
              </Form>
            </div>
            <div className="mb-6 divide-y divide-primary-200 rounded-lg border border-primary-200 bg-background p-5 font-medium text-muted-foreground shadow">
              <Heading level={6} className="mb-4 font-bold uppercase">
                Recent comments
              </Heading>
              {CommentList.map((comment, index) => (
                <div key={index} className="py-4">
                  <Text className="font-normal text-muted-foreground">
                    {comment.author} on{" "}
                    <Link
                      href="#"
                      className="font-medium italic text-secondary-foreground hover:underline"
                    >
                      {comment.title}
                    </Link>
                  </Text>
                </div>
              ))}
            </div>
            <div className="mb-6 rounded-lg border border-primary-200 bg-background p-5 font-medium text-muted-foreground shadow">
              <Heading level={6} className="mb-4 font-bold uppercase">
                Follow me
              </Heading>
              <div className="mb-4 flex items-center">
                <div className="mr-3 shrink-0">
                  <Image
                    className="mt-1 size-8 w-full rounded-full object-cover"
                    width={32}
                    height={32}
                    src="https://xsgames.co/randomusers/assets/avatars/male/3.jpg"
                    alt="Jese Leos"
                  />
                </div>
                <div className="mr-3">
                  <span className="block font-medium text-secondary-foreground">
                    Jese Leos
                  </span>
                  <span className="text-sm font-normal">546k followers</span>
                </div>
              </div>
              <Text className="mb-4 text-sm font-normal text-muted-foreground">
                Hey! I&apos;m Jese Leos. I&apos;m a career-changer. Bootcamp
                grad & Dev.
              </Text>
              <Button className="w-full rounded-lg bg-muted px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-muted-foreground hover:text-background focus:outline-none focus:ring-4 focus:ring-primary-500 [&>span]:border-gray-300">
                Follow
              </Button>
            </div>
            <div>
              <Link
                href="#"
                className="mb-3 flex h-48 w-full items-center justify-center rounded-lg bg-muted"
              >
                <ImageIcon className="size-8 text-muted-foreground" />
              </Link>
              <Text className="mb-2 text-sm text-muted-foreground">
                Students and Teachers, save up to 60% on ModernUI Web Creative
                Cloud.
              </Text>
              <Text className="text-xs uppercase text-muted-foreground">
                Ads placeholder
              </Text>
            </div>
          </aside>
        </div>
      </main>
      <aside
        aria-label="Related articles"
        className="bg-muted py-8 antialiased lg:py-16"
      >
        <div className="mx-auto max-w-screen-xl px-4">
          <Heading level={3} className="mb-8 font-bold">
            Read Next
          </Heading>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ArticleData.map((article, index) => (
              <article key={index}>
                <Link href={article.link}>
                  <Image
                    src={article.image}
                    className="mb-5 size-56 w-full max-w-full rounded-lg object-cover"
                    alt={article.alt}
                  />
                </Link>
                <Heading level={5} className="mb-2 font-bold leading-tight">
                  <Link href={article.link}>{article.title}</Link>
                </Heading>
                <Link
                  href={article.link}
                  className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </aside>

      <div className="bg-background">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto flex max-w-screen-sm flex-col items-center text-center">
            <Heading
              level={2}
              className="mb-4 font-extrabold leading-tight tracking-tight"
            >
              Join a growing community of millions of developers and designers!
            </Heading>
            <Text className="mb-6 text-muted-foreground md:text-lg">
              Millions of tech blogs publish on ModernUI Web daily.
            </Text>
            <Button color="info" className="w-fit">
              Create an account
            </Button>
          </div>
        </div>
      </div>
      <footer className="bg-muted antialiased">
        <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            <div className="col-span-2">
              <Link
                href="#"
                className="mb-5 flex text-2xl font-semibold text-secondary-foreground"
              >
                <Globe className="mr-2 h-8" />
                ModernUI Web
              </Link>
              <Text className="my-4 text-muted-foreground">
                ModernUi Web is a open-source library of over 400+ web
                components and interactive elements built with the utility
                classes from Tailwind CSS.
              </Text>
              <ul className="mt-5 flex space-x-5">
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
            {LinkData.map(({ name, data }, index) => (
              <div key={index}>
                <Text className="mb-6 text-sm font-medium uppercase">
                  {name}
                </Text>
                <ul className="text-muted-foreground">
                  {data.map(({ label, href }, index) => (
                    <li key={index} className="mb-4">
                      <Link href={href} className="hover:underline">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr className="my-6 border-primary-400 sm:mx-auto lg:my-8" />
          <span className="block text-center text-sm text-muted-foreground">
            © 2021-2022{" "}
            <Link href="#" className="hover:underline">
              ModernUI Web™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default RightSidebarArticle;
