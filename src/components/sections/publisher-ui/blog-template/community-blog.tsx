import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bookmark,
  CalendarRange,
  CircleHelp,
  ClipboardList,
  ClipboardMinus,
  CodeIcon,
  Contact,
  DownloadIcon,
  Earth,
  Ellipsis,
  FileVideo,
  Globe,
  Heart,
  Home,
  ImageIcon,
  Info,
  Link as LinkIcon,
  ListIcon,
  LockKeyhole,
  MapPin,
  Menu,
  MessageSquareMore,
  Mic,
  MinusIcon,
  Paperclip,
  PlusIcon,
  Search,
  SettingsIcon,
  Smile,
  Tag,
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
import Quote from "~/lib/assets/images/quote.png";
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

interface TableData {
  country: string;
  date: string;
  amount: string;
}

interface Article {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
  readTime: string;
  link: string;
}

//This icon is not available in Lucid/RadixUI
const TwitterIcon = (props: { classStyle: string }) => {
  const { classStyle } = props;
  return (
    <svg
      className={`size-4 ${classStyle ? classStyle : ""}`}
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
};

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
const FacebookIcon = (props: { classStyle: string }) => {
  const { classStyle } = props;
  return (
    <svg
      className={`size-4 ${classStyle}`}
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
};

// This icon is not available in Lucid/RadixUI
const GithubIcon = () => (
  <svg
    className="size-3"
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
  { icon: <FacebookIcon classStyle={""} /> },
  { icon: <TwitterIcon classStyle={""} /> },
  { icon: <GithubIcon /> },
  { icon: <BallIcon /> },
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

const socialMediaLinks = [
  {
    href: "#",
    label: "Share",
    icon: <FacebookIcon classStyle="mr-2 size-3" />,
  },
  {
    href: "#",
    label: "Tweet",
    icon: <TwitterIcon classStyle="mr-2 size-3" />,
  },
  {
    label: "Copy link",
    icon: <LinkIcon className="mr-2 size-4" />,
    isButton: true,
  },
];
const recommendedTopics = [
  "Technology",
  "Money",
  "Art",
  "Productivity",
  "Psychology",
  "Design",
  "Mindfulness",
];

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

const reactions = [
  {
    count: 75,
    icon: (
      <svg
        aria-hidden="true"
        className="mb-1 h-6"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 14.1907C24 12.7352 23.7409 11.3397 23.2659 10.0486C22.9412 13.8526 20.9132 15.8065 18.7941 14.8966C16.8092 14.0439 18.1468 10.7199 18.2456 9.13377C18.4122 6.44506 18.2372 3.36742 13.3532 0.808594C15.3826 4.69095 13.5882 7.10295 11.7064 7.24977C9.61835 7.41283 7.70612 5.45542 8.412 2.27895C6.12635 3.96318 6.06 6.79801 6.76518 8.63189C7.50071 10.5434 6.73553 12.1317 4.94188 12.3081C2.93718 12.5058 1.82329 10.1615 2.85035 6.42601C1.07294 8.51895 0 11.2295 0 14.1907C0 20.8182 5.37247 26.1907 12 26.1907C18.6275 26.1907 24 20.8182 24 14.1907Z"
          fill="#F4900C"
        />
        <path
          d="M19.3349 17.7211C19.4393 19.8981 17.5271 20.7515 16.4979 20.3393C15.0113 19.7442 15.4102 18.7221 15.0276 16.6044C14.645 14.4868 13.1746 13.0164 10.9984 12.3691C12.5866 16.8395 10.1182 18.487 8.82428 18.7814C7.50287 19.0821 6.17511 18.7807 6.02334 15.9529C4.4817 17.4875 3.52734 19.6108 3.52734 21.9571C3.52734 22.2169 3.54358 22.4724 3.56617 22.7266C5.73323 24.8682 8.70993 26.1924 11.9979 26.1924C15.2859 26.1924 18.2626 24.8682 20.4297 22.7266C20.4523 22.4724 20.4685 22.2169 20.4685 21.9571C20.4685 20.4134 20.0563 18.967 19.3349 17.7211Z"
          fill="#FFCC4D"
        />
      </svg>
    ),
  },
  {
    count: 23,
    icon: (
      <svg
        aria-hidden="true"
        className="mb-1 h-6"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.333 5.83236L7.66634 0.499023H0.333008L9.66634 11.8324L17.347 8.66569L12.333 5.83236Z"
          fill="#55ACEE"
        />
        <path
          d="M16.9997 0.499023L12.333 5.83236L15.9263 10.707L16.7443 9.71436L24.333 0.499023H16.9997Z"
          fill="#3B88C3"
        />
        <path
          d="M15.8401 11.184C15.8934 11.0393 15.9274 10.8853 15.9274 10.722C15.9274 9.98601 15.3301 9.38867 14.5941 9.38867H10.1494C9.41274 9.38867 8.81608 9.98601 8.81608 10.722C8.81608 10.8853 8.84941 11.0393 8.90341 11.184C6.73141 12.4013 5.26074 14.722 5.26074 17.3887C5.26074 21.316 8.44408 24.5 12.3721 24.5C16.2994 24.5 19.4834 21.316 19.4834 17.3887C19.4827 14.722 18.0127 12.4013 15.8401 11.184Z"
          fill="#FFAC33"
        />
        <path
          d="M12.3724 22.7214C15.3179 22.7214 17.7057 20.3335 17.7057 17.388C17.7057 14.4425 15.3179 12.0547 12.3724 12.0547C9.42688 12.0547 7.03906 14.4425 7.03906 17.388C7.03906 20.3335 9.42688 22.7214 12.3724 22.7214Z"
          fill="#FFD983"
        />
        <path
          d="M14.5202 20.9199C14.4255 20.9199 14.3308 20.8906 14.2495 20.8326L12.3348 19.4599L10.4208 20.8326C10.2575 20.9493 10.0388 20.9493 9.87682 20.8306C9.71482 20.7133 9.64682 20.5046 9.70682 20.3146L10.4208 18.0106L8.52415 16.6739C8.36282 16.5553 8.29615 16.3459 8.35748 16.1553C8.41948 15.9653 8.59615 15.8359 8.79682 15.8346L11.1461 15.8313L11.8942 13.5846C11.9575 13.3946 12.1348 13.2666 12.3355 13.2666C12.5355 13.2666 12.7135 13.3946 12.7768 13.5846L13.5122 15.8313L15.8735 15.8346C16.0742 15.8359 16.2515 15.9653 16.3128 16.1553C16.3748 16.3459 16.3075 16.5546 16.1462 16.6739L14.2488 18.0106L14.9628 20.3146C15.0242 20.5053 14.9548 20.7133 14.7935 20.8306C14.7115 20.8906 14.6155 20.9199 14.5202 20.9199Z"
          fill="#FFAC33"
        />
      </svg>
    ),
  },
  {
    count: 18,
    icon: (
      <svg
        aria-hidden="true"
        className="mb-1 h-6"
        viewBox="0 0 25 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0905 17.9535C22.642 12.99 20.167 10.5 20.167 10.5L15.667 4.5H9.66699L5.16699 10.5C5.16699 10.5 4.10274 11.5747 3.24174 13.7062C1.74999 14.2013 0.666992 15.5918 0.666992 17.25C0.666992 18.336 1.13574 19.3065 1.87374 19.9913C1.59174 20.5177 1.41699 21.1103 1.41699 21.75C1.41699 23.2185 2.26899 24.477 3.49824 25.092C4.46049 26.5335 5.74599 27 6.66699 27H18.667C19.7012 27 21.1967 26.4157 22.1755 24.5175C23.6237 23.9992 24.667 22.6275 24.667 21C24.667 19.7415 24.0415 18.6345 23.0905 17.9535ZM12.667 4.5C13.0795 4.5 13.4605 4.3815 13.792 4.188C14.1242 4.3815 14.5052 4.5 14.917 4.5C16.1597 4.5 17.917 2.742 17.917 1.5C17.917 1.5 17.917 0 16.417 0C15.826 0 15.667 0.75 14.917 0.75C14.167 0.75 14.167 0 12.667 0C11.167 0 11.167 0.75 10.417 0.75C9.66699 0.75 9.50874 0 8.91699 0C7.41699 0 7.41699 1.5 7.41699 1.5C7.41699 2.742 9.17499 4.5 10.417 4.5C10.8287 4.5 11.2097 4.3815 11.542 4.188C11.8742 4.3815 12.2552 4.5 12.667 4.5Z"
          fill="#FDD888"
        />
        <path
          d="M17.167 4.5C17.167 4.914 16.8317 5.25 16.417 5.25H8.91699C8.50299 5.25 8.16699 4.914 8.16699 4.5C8.16699 4.086 8.50299 3.75 8.91699 3.75H16.417C16.8317 3.75 17.167 4.086 17.167 4.5Z"
          fill="#BF6952"
        />
        <path
          d="M17.0925 18.4065C17.0925 15.0487 10.6568 15.2677 10.6568 13.242C10.6568 12.261 11.6325 11.7817 12.765 11.7817C14.6685 11.7817 15.0075 12.9585 15.8693 12.9585C16.479 12.9585 16.773 12.5887 16.773 12.174C16.773 11.211 15.255 10.482 13.7993 10.23V9.3C13.7993 8.72025 13.3118 8.25 12.7088 8.25C12.105 8.25 11.6168 8.72025 11.6168 9.3V10.2622C10.0298 10.6095 8.66402 11.6685 8.66402 13.3942C8.66402 16.6185 15.0983 16.488 15.0983 18.753C15.0983 19.5382 14.2148 20.3227 12.765 20.3227C10.5893 20.3227 9.86477 18.906 8.98127 18.906C8.55077 18.906 8.16602 19.254 8.16602 19.779C8.16602 20.6137 9.61952 21.6172 11.6183 21.897L11.6175 21.9045V22.953C11.6175 23.532 12.1065 24.003 12.7095 24.003C13.3125 24.003 13.8008 23.532 13.8008 22.953V21.9045C13.8008 21.8917 13.7948 21.882 13.794 21.8707C15.5925 21.5482 17.0925 20.4217 17.0925 18.4065Z"
          fill="#67757F"
        />
      </svg>
    ),
  },
  {
    count: 14,
    icon: (
      <svg
        aria-hidden="true"
        className="mb-1 h-6"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.75255 5.29787C7.67789 5.37254 7.62122 5.46254 7.57388 5.56121L7.56855 5.55587L0.0910439 22.4003L0.0983774 22.4076C-0.0402924 22.6763 0.191713 23.223 0.667057 23.699C1.1424 24.1743 1.68908 24.4063 1.95775 24.2676L1.96442 24.2743L18.8088 16.7961L18.8035 16.7901C18.9015 16.7435 18.9915 16.6868 19.0668 16.6108C20.1082 15.5694 18.4195 12.1927 15.2961 9.06862C12.1713 5.94455 8.79458 4.25651 7.75255 5.29787Z"
          fill="#DD2E44"
        />
        <path
          d="M8.66858 8.30273L0.279048 21.9737L0.0910439 22.3971L0.0983774 22.4044C-0.0402924 22.6731 0.191713 23.2197 0.667057 23.6958C0.821728 23.8504 0.982398 23.9678 1.13973 24.0671L11.3353 11.6361L8.66858 8.30273Z"
          fill="#EA596E"
        />
        <path
          d="M15.3439 9.01304C18.4573 12.1278 20.186 15.4479 19.2033 16.4292C18.2213 17.4119 14.9012 15.6839 11.7858 12.5705C8.67174 9.45572 6.9437 6.13431 7.92573 5.15228C8.90841 4.17026 12.2285 5.8983 15.3439 9.01304Z"
          fill="#A0041E"
        />
        <path
          d="M12.3913 9.37694C12.2587 9.48427 12.0853 9.54028 11.902 9.52028C11.3233 9.45761 10.8366 9.25627 10.496 8.93826C10.1353 8.60159 9.95727 8.14958 10.0059 7.6969C10.0913 6.90221 10.8886 6.17286 12.248 6.31953C12.7767 6.3762 13.0127 6.2062 13.0207 6.12486C13.03 6.04419 12.836 5.82752 12.3073 5.77019C11.7286 5.70752 11.242 5.50618 10.9006 5.18817C10.54 4.8515 10.3613 4.39949 10.4106 3.94681C10.4973 3.15213 11.294 2.42278 12.652 2.57011C13.0373 2.61145 13.2407 2.53211 13.3267 2.48078C13.3954 2.43878 13.4227 2.39878 13.4254 2.37544C13.4334 2.29477 13.242 2.0781 12.712 2.02077C12.346 1.98077 12.0807 1.65276 12.1213 1.28608C12.1607 0.920076 12.488 0.655404 12.8553 0.695405C14.2134 0.841408 14.8374 1.72343 14.7514 2.51878C14.6647 3.3148 13.868 4.04281 12.5087 3.89681C12.1233 3.85481 11.922 3.93481 11.8353 3.98615C11.7666 4.02748 11.7386 4.06815 11.736 4.09082C11.7273 4.17215 11.92 4.38816 12.45 4.44549C13.808 4.59216 14.432 5.47351 14.346 6.26887C14.26 7.06355 13.4634 7.7929 12.1047 7.64557C11.7193 7.60423 11.5166 7.68423 11.43 7.7349C11.3606 7.77757 11.334 7.81757 11.3313 7.84024C11.3226 7.9209 11.5153 8.13758 12.0447 8.19491C12.41 8.23491 12.676 8.56359 12.6353 8.92959C12.6167 9.11226 12.524 9.27027 12.3913 9.37694Z"
          fill="#AA8DD8"
        />
        <path
          d="M20.4411 15.5411C21.7565 15.1698 22.6638 15.7565 22.8798 16.5265C23.0958 17.2958 22.6278 18.2699 21.3131 18.6399C20.7998 18.7839 20.6458 19.0292 20.6665 19.1072C20.6891 19.1859 20.9498 19.3152 21.4618 19.1706C22.7765 18.8005 23.6839 19.3872 23.8999 20.1566C24.1172 20.9266 23.6479 21.8993 22.3325 22.27C21.8198 22.414 21.6651 22.66 21.6878 22.738C21.7098 22.816 21.9698 22.9453 22.4825 22.8013C22.8358 22.702 23.2052 22.908 23.3045 23.262C23.4032 23.6167 23.1972 23.9847 22.8425 24.0847C21.5285 24.4547 20.6205 23.8693 20.4031 23.0986C20.1871 22.3293 20.6558 21.3566 21.9718 20.9859C22.4852 20.8413 22.6392 20.5966 22.6165 20.5179C22.5952 20.4399 22.3352 20.3099 21.8232 20.4539C20.5071 20.8246 19.6004 20.2392 19.3838 19.4679C19.1671 18.6985 19.6358 17.7259 20.9511 17.3545C21.4631 17.2112 21.6171 16.9645 21.5958 16.8872C21.5731 16.8085 21.3138 16.6792 20.8011 16.8232C20.4465 16.9232 20.0791 16.7165 19.9791 16.3625C19.8798 16.0092 20.0864 15.6411 20.4411 15.5411Z"
          fill="#77B255"
        />
        <path
          d="M15.3333 13.7449C15.1373 13.7449 14.9439 13.6589 14.8119 13.4949C14.5819 13.2069 14.6292 12.7875 14.9159 12.5575C15.0612 12.4409 18.528 9.71812 23.4274 10.4188C23.7921 10.4708 24.0455 10.8081 23.9935 11.1728C23.9415 11.5368 23.6068 11.7928 23.2388 11.7382C18.91 11.1235 15.7806 13.5742 15.7499 13.5989C15.6259 13.6975 15.4793 13.7449 15.3333 13.7449Z"
          fill="#AA8DD8"
        />
        <path
          d="M3.83539 10.9697C3.77205 10.9697 3.70739 10.9604 3.64338 10.9417C3.29071 10.8357 3.0907 10.4643 3.19671 10.1117C3.95206 7.59628 4.63674 3.58219 3.79539 2.5355C3.70138 2.41683 3.55938 2.30016 3.23404 2.32483C2.60869 2.37283 2.66803 3.69219 2.66869 3.70552C2.69669 4.07287 2.42069 4.39287 2.05401 4.42021C1.68134 4.44287 1.36666 4.1722 1.33933 3.80486C1.27066 2.8855 1.55667 1.1148 3.13404 0.995461C3.83805 0.942127 4.42273 1.1868 4.83541 1.70014C6.41611 3.66752 4.81141 9.37099 4.47407 10.495C4.3874 10.7837 4.12206 10.9697 3.83539 10.9697Z"
          fill="#77B255"
        />
        <path
          d="M16.999 7.63774C17.5513 7.63774 17.9991 7.19002 17.9991 6.63772C17.9991 6.08542 17.5513 5.6377 16.999 5.6377C16.4467 5.6377 15.999 6.08542 15.999 6.63772C15.999 7.19002 16.4467 7.63774 16.999 7.63774Z"
          fill="#5C913B"
        />
        <path
          d="M1.33336 13.6355C2.06976 13.6355 2.66673 13.0385 2.66673 12.3021C2.66673 11.5657 2.06976 10.9688 1.33336 10.9688C0.596967 10.9688 0 11.5657 0 12.3021C0 13.0385 0.596967 13.6355 1.33336 13.6355Z"
          fill="#9266CC"
        />
        <path
          d="M21.666 14.3047C22.2183 14.3047 22.6661 13.857 22.6661 13.3047C22.6661 12.7524 22.2183 12.3047 21.666 12.3047C21.1137 12.3047 20.666 12.7524 20.666 13.3047C20.666 13.857 21.1137 14.3047 21.666 14.3047Z"
          fill="#5C913B"
        />
        <path
          d="M15.666 22.3038C16.2183 22.3038 16.6661 21.856 16.6661 21.3037C16.6661 20.7514 16.2183 20.3037 15.666 20.3037C15.1137 20.3037 14.666 20.7514 14.666 21.3037C14.666 21.856 15.1137 22.3038 15.666 22.3038Z"
          fill="#5C913B"
        />
        <path
          d="M18.6683 4.30052C19.4047 4.30052 20.0017 3.70355 20.0017 2.96715C20.0017 2.23076 19.4047 1.63379 18.6683 1.63379C17.9319 1.63379 17.335 2.23076 17.335 2.96715C17.335 3.70355 17.9319 4.30052 18.6683 4.30052Z"
          fill="#FFCC4D"
        />
        <path
          d="M21.6699 6.9688C22.2222 6.9688 22.67 6.52107 22.67 5.96877C22.67 5.41648 22.2222 4.96875 21.6699 4.96875C21.1176 4.96875 20.6699 5.41648 20.6699 5.96877C20.6699 6.52107 21.1176 6.9688 21.6699 6.9688Z"
          fill="#FFCC4D"
        />
        <path
          d="M19.668 9.63384C20.2203 9.63384 20.668 9.18611 20.668 8.63381C20.668 8.08151 20.2203 7.63379 19.668 7.63379C19.1157 7.63379 18.668 8.08151 18.668 8.63381C18.668 9.18611 19.1157 9.63384 19.668 9.63384Z"
          fill="#FFCC4D"
        />
        <path
          d="M5.00198 16.9668C5.55427 16.9668 6.002 16.5191 6.002 15.9668C6.002 15.4145 5.55427 14.9668 5.00198 14.9668C4.44968 14.9668 4.00195 15.4145 4.00195 15.9668C4.00195 16.5191 4.44968 16.9668 5.00198 16.9668Z"
          fill="#FFCC4D"
        />
      </svg>
    ),
  },
  {
    count: 75,
    icon: (
      <svg
        aria-hidden="true"
        className="mb-1 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 12C24 18.6273 18.6273 24 12 24C5.37267 24 0 18.6273 0 12C0 5.37267 5.37267 0 12 0C18.6273 0 24 5.37267 24 12Z"
          fill="#FFCC4D"
        />
        <path
          d="M12.0008 14.5657C10.0234 14.5657 8.71076 14.335 7.08809 14.0197C6.71676 13.949 5.99609 14.0197 5.99609 15.1117C5.99609 17.295 8.50476 20.0244 12.0008 20.0244C15.4968 20.0244 18.0054 17.295 18.0054 15.1117C18.0054 14.0197 17.2841 13.9484 16.9134 14.0197C15.2908 14.335 13.9788 14.5657 12.0008 14.5657Z"
          fill="#664500"
        />
        <path
          d="M11.1003 2.18723C10.5276 0.566561 8.75092 -0.284106 7.12959 0.287227C6.14559 0.633894 5.44892 1.42789 5.17759 2.35656C4.38359 1.80389 3.34359 1.62323 2.36092 1.96989C0.740921 2.54189 -0.111079 4.31989 0.461587 5.94056C0.542921 6.16989 0.650921 6.38256 0.776254 6.57923C2.07692 8.96723 5.83492 10.6459 8.11025 10.6666C9.86825 9.22189 11.7409 5.55656 11.2556 2.88189C11.2303 2.64989 11.1803 2.41656 11.1003 2.18723ZM12.9003 2.18723C13.4729 0.566561 15.2503 -0.284106 16.8709 0.287227C17.8549 0.633894 18.5516 1.42789 18.8236 2.35656C19.6176 1.80389 20.6576 1.62323 21.6403 1.96989C23.2603 2.54189 24.1116 4.31989 23.5403 5.94056C23.4583 6.16989 23.3509 6.38256 23.2249 6.57923C21.9243 8.96723 18.1663 10.6459 15.8903 10.6666C14.1323 9.22189 12.2603 5.55656 12.7456 2.88189C12.7703 2.64989 12.8203 2.41656 12.9003 2.18723Z"
          fill="#DD2E44"
        />
      </svg>
    ),
  },
  {
    count: 23,
    icon: (
      <svg
        aria-hidden="true"
        className="mb-1 h-6"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.333 12C24.333 18.6273 18.9603 24 12.333 24C5.70567 24 0.333008 18.6273 0.333008 12C0.333008 5.37267 5.70567 0 12.333 0C18.9603 0 24.333 5.37267 24.333 12Z"
          fill="#FFCC4D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.16052 7.34497C1.32052 7.5043 2.11918 7.98297 2.27852 8.46164C2.43852 8.93964 2.75852 11.651 3.71718 12.449C4.70585 13.2703 8.43518 12.965 9.14918 12.609C10.7472 11.8123 10.9432 9.5883 11.2258 8.46164C11.3852 7.82364 12.3438 7.82364 12.3438 7.82364C12.3438 7.82364 13.3025 7.82364 13.4625 8.46097C13.7452 9.5883 13.9425 11.8123 15.5392 12.6083C16.2538 12.965 19.9832 13.271 20.9732 12.4496C21.9305 11.6516 22.2498 8.9403 22.4098 8.46164C22.5685 7.98364 23.3685 7.50497 23.5279 7.34564C23.6885 7.1863 23.6885 6.5483 23.5279 6.3883C23.2085 6.06964 19.4385 5.78564 15.3792 6.22897C14.5692 6.31764 14.2612 6.54764 12.3432 6.54764C10.4265 6.54764 10.1172 6.31697 9.30785 6.22897C5.25118 5.78497 1.48052 6.06897 1.16052 6.38764C1.00118 6.54697 1.00118 7.18564 1.16052 7.34497Z"
          fill="#292F33"
        />
        <path
          d="M18.5567 15.7527C18.4381 15.6454 18.2607 15.6387 18.1334 15.7334C18.1074 15.7527 15.5187 17.6667 12.3334 17.6667C9.15605 17.6667 6.55872 15.7527 6.53338 15.7334C6.40605 15.6387 6.22872 15.6467 6.11005 15.7527C5.99205 15.8594 5.96538 16.0354 6.04738 16.1714C6.13338 16.3147 8.19205 19.6667 12.3334 19.6667C16.4747 19.6667 18.5341 16.3147 18.6194 16.1714C18.7014 16.0347 18.6754 15.8594 18.5567 15.7527Z"
          fill="#664500"
        />
      </svg>
    ),
  },
  {
    count: 18,
    icon: (
      <svg
        aria-hidden="true"
        className="mb-1 h-6"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.667 24C19.2944 24 24.667 18.6274 24.667 12C24.667 5.37258 19.2944 0 12.667 0C6.03958 0 0.666992 5.37258 0.666992 12C0.666992 18.6274 6.03958 24 12.667 24Z"
          fill="#FFCC4D"
        />
        <path
          d="M7.67613 15.748C7.70613 15.8673 8.45479 18.6673 12.6661 18.6673C16.8781 18.6673 17.6261 15.8673 17.6561 15.748C17.6928 15.6033 17.6275 15.4533 17.4981 15.3787C17.3681 15.3047 17.2055 15.3267 17.0981 15.43C17.0855 15.4427 15.7955 16.6673 12.6661 16.6673C9.53679 16.6673 8.24613 15.4427 8.23413 15.4307C8.17013 15.3673 8.08479 15.334 7.99946 15.334C7.94346 15.334 7.88679 15.348 7.83546 15.3767C7.70479 15.4513 7.63946 15.6027 7.67613 15.748Z"
          fill="#664500"
        />
        <path
          d="M8.66667 11.3337C9.58714 11.3337 10.3333 10.289 10.3333 9.00033C10.3333 7.71166 9.58714 6.66699 8.66667 6.66699C7.74619 6.66699 7 7.71166 7 9.00033C7 10.289 7.74619 11.3337 8.66667 11.3337Z"
          fill="#664500"
        />
        <path
          d="M16.6667 11.3337C17.5871 11.3337 18.3333 10.289 18.3333 9.00033C18.3333 7.71166 17.5871 6.66699 16.6667 6.66699C15.7462 6.66699 15 7.71166 15 9.00033C15 10.289 15.7462 11.3337 16.6667 11.3337Z"
          fill="#664500"
        />
      </svg>
    ),
  },
  {
    count: 14,
    icon: (
      <svg
        aria-hidden="true"
        className="mb-1 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.24467 6.07733C3.87207 5.63882 4.81784 5.72291 5.38116 6.18812L4.73508 5.24903C4.21514 4.5075 4.40135 3.70523 5.14355 3.18462C5.88575 2.66601 7.98887 4.06031 7.98887 4.06031C7.46426 3.31143 7.56238 2.36233 8.31125 1.83705C9.06012 1.31377 10.0933 1.49465 10.6179 2.24486L17.5727 12.0697L16.6864 20.663L9.28906 17.9652L2.83686 8.3987C2.30758 7.64516 2.49046 6.60594 3.24467 6.07733Z"
          fill="#EF9645"
        />
        <path
          d="M1.79857 11.5433C1.79857 11.5433 1.04302 10.442 2.14497 9.68715C3.24559 8.93226 4.00047 10.0329 4.00047 10.0329L7.50523 15.1442C7.62603 14.9426 7.75819 14.7437 7.90569 14.5475L3.04135 7.45454C3.04135 7.45454 2.28647 6.35392 3.38775 5.59904C4.48837 4.84416 5.24325 5.94478 5.24325 5.94478L9.81859 12.6172C9.98879 12.4784 10.163 12.3389 10.3425 12.2021L5.03835 4.46572C5.03835 4.46572 4.28347 3.3651 5.38475 2.61022C6.48537 1.85534 7.24025 2.95596 7.24025 2.95596L12.5444 10.691C12.7393 10.5715 12.9322 10.4681 13.1258 10.3586L8.168 3.12883C8.168 3.12883 7.41312 2.02821 8.51373 1.27333C9.61435 0.518448 10.3692 1.61907 10.3692 1.61907L15.6113 9.26398L16.4083 10.4267C13.1058 12.692 12.7914 16.9536 14.6783 19.7055C15.0554 20.2561 15.606 19.879 15.606 19.879C13.3414 16.5758 14.0328 12.8642 17.336 10.5995L16.3622 5.72586C16.3622 5.72586 15.9985 4.44169 17.282 4.07727C18.5661 3.71351 18.9306 4.99767 18.9306 4.99767L20.0552 8.33757C20.5011 9.66178 20.9756 10.9813 21.6037 12.2294C23.3771 15.7536 22.3178 20.1333 18.9739 22.4273C15.3263 24.9283 10.3399 23.9985 7.83828 20.3516L1.79857 11.5433Z"
          fill="#FFDC5D"
        />
        <path
          d="M8.00913 21.3583C5.33934 21.3583 2.64153 18.6605 2.64153 15.9907C2.64153 15.6216 2.37122 15.3232 2.00212 15.3232C1.63302 15.3232 1.30664 15.6216 1.30664 15.9907C1.30664 19.9954 4.00445 22.6932 8.00913 22.6932C8.37822 22.6932 8.67657 22.3668 8.67657 21.9977C8.67657 21.6286 8.37822 21.3583 8.00913 21.3583Z"
          fill="#5DADEC"
        />
        <path
          d="M4.67212 22.6649C2.66978 22.6649 1.33489 21.33 1.33489 19.3277C1.33489 18.9586 1.03654 18.6602 0.667445 18.6602C0.298348 18.6602 0 18.9586 0 19.3277C0 21.9974 2.00234 23.9998 4.67212 23.9998C5.04121 23.9998 5.33956 23.7014 5.33956 23.3323C5.33956 22.9632 5.04121 22.6649 4.67212 22.6649ZM16.0187 1.30664C15.6503 1.30664 15.3512 1.60566 15.3512 1.97409C15.3512 2.34252 15.6503 2.64153 16.0187 2.64153C18.6885 2.64153 21.3583 5.03699 21.3583 7.98109C21.3583 8.34952 21.6573 8.64854 22.0257 8.64854C22.3941 8.64854 22.6931 8.34952 22.6931 7.98109C22.6931 4.3008 20.0234 1.30664 16.0187 1.30664Z"
          fill="#5DADEC"
        />
        <path
          d="M19.3559 0C18.9875 0 18.6885 0.270983 18.6885 0.639413C18.6885 1.00784 18.9875 1.33489 19.3559 1.33489C21.3583 1.33489 22.6651 2.81996 22.6651 4.64408C22.6651 5.01251 22.9915 5.31153 23.3606 5.31153C23.7297 5.31153 24 5.01251 24 4.64408C24 2.0831 22.0257 0 19.3559 0Z"
          fill="#5DADEC"
        />
      </svg>
    ),
  },
];

const categories = [
  { name: "Home", icon: <Home className="mr-2 size-4" /> },
  { name: "Reading list", icon: <ClipboardMinus className="mr-2 size-4" /> },
  { name: "Listings", icon: <ClipboardList className="mr-2 size-4" /> },
  { name: "Podcasts", icon: <Mic className="mr-2 size-4" /> },
  { name: "Videos", icon: <FileVideo className="mr-2 size-4" /> },
  { name: "Tags", icon: <Tag className="mr-2 size-4" /> },
  { name: "FAQ", icon: <CircleHelp className="mr-2 size-4" /> },
  { name: "Sponsors", icon: <Heart className="mr-2 size-4" /> },
  { name: "About", icon: <Info className="mr-2 size-4" /> },
];

const others = [
  { name: "Privacy policy", icon: <LockKeyhole className="mr-2 size-4" /> },
  { name: "Terms of use", icon: <Earth className="mr-2 size-4" /> },
  { name: "Contact", icon: <Contact className="mr-2 size-4" /> },
];

const comments = [
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    name: "Bonnie Green",
    datetime: "2022-03-15",
    title: "March 15th, 2022",
    date: "Mar. 15, 2022",
    upvotes: 14,
    content:
      "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
  },
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/4.jpg",
    name: "Danny Hart",
    datetime: "2022-02-08",
    title: "February 8th, 2022",
    date: "Feb. 8, 2022",
    upvotes: 12,
    isReply: true,
    content:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
  },
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    name: "Jese Leos",
    datetime: "2022-02-12",
    title: "February 12th, 2022",
    date: "Feb. 12, 2022",
    upvotes: 3,
    content: "Much appreciated! Glad you liked it ☺️",
  },
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/5.jpg",
    name: "Helene Engels",
    datetime: "2022-06-23",
    title: "June 23rd, 2022",
    date: "Jun. 23, 2022",
    upvotes: 32,
    content:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
  },
];

const PeopleToFollow = [
  {
    name: "Bonnie Green",
    role: "Web developer at Facebook",
    imgSrc: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
  },
  {
    name: "Jese Leos",
    role: "Engineer at Alphabet Inc.",
    imgSrc: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
  },
  {
    name: "Paul Livingston",
    role: "Figma designer at Adobe Inc.",
    imgSrc: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
  },
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

// eslint-disable-next-line react/display-name
const DropDownMenu = React.memo(() => (
  <Popover>
    <PopoverTrigger asChild>
      <Button className="inline-flex items-center rounded-lg bg-muted p-2 text-center text-sm font-medium text-primary-400 shadow-none hover:bg-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-200">
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
));

const formSchema = z.object({
  comment: z.string().optional(),
});

const CommentsUpvotes = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="bg-background py-8 antialiased lg:py-16">
      <div className="w-full">
        <div className="mb-6 flex items-center justify-between">
          <Heading level={4} className="font-bold text-foreground lg:text-2xl">
            Discussion (20)
          </Heading>
          <div>
            <Button className="rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary-200">
              Subscribe
            </Button>
          </div>
        </div>
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
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <article
                className={`mb-6 rounded-lg border border-primary-200 bg-muted p-4 text-base lg:p-6 ${comment.isReply ? "ml-12" : ""}`}
              >
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex w-9 flex-col items-center justify-center rounded-lg bg-primary-100 font-medium ">
                      <Button className="flex w-full justify-center rounded-b-none rounded-t-lg bg-primary-100 px-0 py-1 text-primary-500 shadow-none hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-50">
                        <PlusIcon className="size-4 text-primary-500" />
                      </Button>
                      <span className="px-2 py-1 text-xs font-medium text-foreground lg:px-0 lg:text-sm ">
                        {comment.upvotes}
                      </span>
                      <Button className="flex w-full  justify-center rounded-b-lg rounded-t-none bg-primary-100 px-0 py-1 text-primary-500 shadow-none hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-50">
                        <MinusIcon className="size-4 text-primary-500" />
                      </Button>
                    </div>
                  </div>
                  <div className="w-full">
                    <footer className="mb-2 flex w-full items-center justify-between">
                      <Link href="#" className="flex items-center">
                        <Image
                          className="mr-2 size-6 rounded-full"
                          height={36}
                          width={36}
                          src={comment.profilePicture}
                          alt={comment.name}
                        />
                        <Text className="mr-3 inline-flex flex-col items-start text-sm text-foreground md:flex-row">
                          <span className="font-semibold">{comment.name}</span>
                          <time
                            className="text-sm text-primary-600  md:ml-2"
                            dateTime={comment.datetime}
                            title={comment.title}
                          >
                            {comment.date}
                          </time>
                        </Text>
                      </Link>
                      <DropDownMenu />
                    </footer>
                    <Text className="text-primary-500">{comment.content}</Text>
                    <div className="mt-4 flex items-center space-x-4">
                      <Button
                        variant={"link"}
                        className="flex items-center text-sm font-medium text-primary-500 hover:underline"
                      >
                        <MessageSquareMore className="mr-1 size-3.5" />
                        Reply
                      </Button>
                    </div>
                  </div>
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
      <Text className="mb-4 text-muted-foreground">{description}</Text>
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

const RelatedArticles = () => (
  <aside
    aria-label="Related articles"
    className="bg-muted py-8 antialiased lg:py-24"
  >
    <div className="mx-auto max-w-screen-2xl px-4">
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
);

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
            <TableRow className="bg-muted py-3 font-bold">
              <TableHead>Country</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TableData.map(({ country, amount, date }) => (
              <TableRow key={country} className="py-3">
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
        prototypes — right in Flowbite Figma.
      </Text>
    </div>
  );
};

const BlogFooter = () => {
  return (
    <footer className="w-full bg-muted antialiased">
      <div className="md:{p-8 pb-0} lg:{p-10 pb-0} mx-auto w-full p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {LinkData.map(({ name, data }, index) => (
            <div key={index}>
              <Text className="mb-6 text-sm font-medium uppercase">{name}</Text>
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
        <hr className="my-6 border-primary-300 sm:mx-auto lg:my-8" />
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

const CommunityBlog = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu-2");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between">
      <header className="w-full">
        <nav className="border-primary-200 bg-muted py-2.5 antialiased">
          <div className="mx-auto flex w-full  max-w-screen-2xl flex-wrap items-center justify-between px-4">
            <Link
              href="#"
              className="flex items-center text-2xl font-semibold text-secondary-foreground"
            >
              <Globe className="mr-2 h-8" />
              ModernUI Web
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                href="#"
                className="mr-2 rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 lg:px-5 lg:py-2.5"
              >
                Get started
              </Link>
              <Button
                data-collapse-toggle="mobile-menu-2"
                className="ml-1 inline-flex items-center rounded-lg bg-background p-2 text-sm text-secondary-foreground hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-300 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="size-5" />
              </Button>
            </div>
            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                {[
                  "Home",
                  "Company",
                  "Marketplace",
                  "Features",
                  "Team",
                  "Contact",
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="block border-b border-primary-200 bg-muted py-2 pl-3 pr-4 text-primary-500 hover:bg-background  hover:text-secondary-foreground lg:border-0 lg:bg-muted lg:p-0 lg:hover:bg-transparent lg:hover:text-primary-700"
                      aria-current="page"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="bg-background py-8 antialiased lg:py-16">
        <div className="mx-auto flex w-full justify-between px-5">
          <div className="mb-6 mr-12 hidden lg:w-52 xl:block">
            <div className="sticky top-6">
              <aside aria-labelledby="reactions-label" className="mb-2 w-full">
                <Heading level={3} id="reactions-label" className="sr-only">
                  Reactions
                </Heading>
                <div className="mb-2 flex w-[210px] flex-wrap items-center justify-between">
                  {reactions.map((reaction, index) => (
                    <div
                      key={index}
                      className="mb-4 flex flex-col rounded-lg bg-background px-3 hover:bg-primary-100"
                    >
                      <div>{reaction.icon}</div>
                      <span className="block text-sm font-medium text-muted-foreground">
                        {reaction.count}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>
              <aside aria-labelledby="categories-label">
                <Heading level={3} id="categories-label" className="sr-only">
                  Categories
                </Heading>
                <nav className="mb-6 rounded-lg border border-primary-200 p-6 font-medium text-muted-foreground">
                  <ul className="mb-6 space-y-4">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="flex items-center text-muted-foreground hover:text-tremor-brand-subtle"
                        >
                          {category.icon}
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Heading level={6} className="mb-4">
                    Others
                  </Heading>
                  <ul className="space-y-4">
                    {others.map((item, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="flex items-center text-muted-foreground hover:text-tremor-brand-subtle"
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
              <aside>
                <div>
                  <Link
                    href="#"
                    className="mb-3 flex h-48 w-full items-center justify-center rounded-lg bg-muted"
                  >
                    <ImageIcon className="size-8 text-muted-foreground" />
                  </Link>
                  <Text className="mb-2 text-sm text-muted-foreground">
                    Students and Teachers, save up to 60% on ModernUI Web
                    Creative Cloud.
                  </Text>
                  <Text className="text-xs uppercase text-muted-foreground">
                    Ads placeholder
                  </Text>
                </div>
              </aside>
            </div>
          </div>
          <article className="mx-auto w-full">
            <header className="mb-4 lg:mb-6">
              <Heading level={1} className="font-extrabold leading-tight">
                Prototyping from A to Z: best practices for successful
                prototypes
              </Heading>
              <div className="flex items-center justify-between py-4">
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
              </div>

              <div className="flex items-center justify-between ">
                <aside aria-label="Share social media">
                  {socialMediaLinks.map((link, index) =>
                    link.isButton ? (
                      <Button
                        key={index}
                        className="mr-2 inline-flex items-center rounded-lg border border-primary-300 bg-muted px-6 py-2 text-xs font-medium text-foreground no-underline hover:bg-primary-400  focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-400"
                      >
                        {link.icon}
                        {link.label}
                      </Button>
                    ) : (
                      <Link
                        key={index}
                        href={link.href ?? ""}
                        className="mr-2 inline-flex items-center rounded-lg border border-primary-300 bg-muted px-6 py-2 text-xs font-medium text-foreground no-underline hover:bg-primary-400  focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-400"
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    ),
                  )}
                </aside>
                <div>
                  <Button className="mr-2 inline-flex items-center rounded-lg bg-background p-2 text-center text-sm font-medium text-muted-foreground hover:bg-primary-300">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Bookmark className="size-5" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Save this article</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Button>
                </div>
              </div>
            </header>
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
            <CommentsUpvotes />
          </article>

          <aside
            className="ml-12 hidden w-[288px] lg:block"
            aria-labelledby="sidebar-label"
          >
            <div className="sticky top-6">
              <Heading level={4} id="sidebar-label" className="sr-only">
                Sidebar
              </Heading>

              <div className="mb-6 rounded-lg border border-primary-200 bg-background p-6 font-medium text-muted-foreground shadow">
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
                <Text
                  level={"md"}
                  className="mb-2 font-bold uppercase leading-5"
                >
                  Location
                </Text>
                <Text className="mb-4 text-sm font-normal text-muted-foreground">
                  California, United States
                </Text>
                <Text
                  level={"md"}
                  className="mb-2 font-bold uppercase leading-5"
                >
                  Joined
                </Text>
                <Text className="mb-4 text-sm font-normal text-muted-foreground">
                  September 20, 2018
                </Text>
                <Button className="w-full rounded-lg bg-muted px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-muted-foreground hover:text-background focus:outline-none focus:ring-4 focus:ring-primary-500 [&>span]:border-gray-300">
                  Follow
                </Button>
              </div>
              <div className="mb-4 rounded-lg border border-primary-200 p-6 pt-0 font-medium text-muted-foreground">
                <Form {...form}>
                  <form
                    className="w-full"
                    onSubmit={form.handleSubmit(onSubmit)}
                  >
                    <div className="my-6 rounded-t-lg bg-primary-50">
                      <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only">
                              Your comment
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  className="pl-8 md:w-[238px]"
                                  placeholder="Search..."
                                  {...field}
                                />
                                <Search className="absolute left-2 top-1/4 size-5 text-muted-foreground" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </form>
                </Form>
                <Heading level={6} className="mb-6 font-bold uppercase">
                  Recommended topics
                </Heading>
                <div className="flex flex-wrap">
                  {recommendedTopics.map((topic, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="mb-3 mr-3 rounded bg-primary-100 px-2.5 py-0.5 text-sm font-medium text-secondary-foreground"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-primary-200 bg-background p-6 font-medium text-muted-foreground">
                <Heading level={6} className="mb-6 font-bold uppercase">
                  Who to follow
                </Heading>
                <ul className="space-y-4 text-muted-foreground">
                  {PeopleToFollow.map((person, index) => (
                    <li
                      key={index}
                      className="flex items-start justify-between"
                    >
                      <div className="mr-3 shrink-0">
                        <Image
                          className="mt-1 size-6 rounded-full"
                          src={person.imgSrc}
                          alt={person.name}
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="mr-3">
                        <span className="block font-medium text-secondary-foreground">
                          {person.name}
                        </span>
                        <span className="text-sm font-normal">
                          {person.role}
                        </span>
                      </div>
                      <div>
                        <Button className="rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-secondary-foreground hover:bg-muted-foreground hover:text-background focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-500 [&>span]:border-gray-300">
                          Follow
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <RelatedArticles />
      <div className="w-full bg-background">
        <div className="w-full px-4 py-8 sm:py-24 lg:px-6">
          <div className=" mx-auto flex max-w-screen-md flex-col items-center text-center">
            <Heading
              level={1}
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
      <BlogFooter />
    </div>
  );
};

export default CommunityBlog;
