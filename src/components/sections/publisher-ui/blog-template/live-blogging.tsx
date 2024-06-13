"use-client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Globe,
  Image as ImageIcon,
  Mail,
  Phone,
  Share2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
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
//Image Imports
import Avatar1 from "~/lib/assets/images/avatar-1.png";
import Avatar2 from "~/lib/assets/images/avatar-2.png";
import Avatar3 from "~/lib/assets/images/avatar-3.png";
import Blog1 from "~/lib/assets/images/blog-1.png";
import Blog2 from "~/lib/assets/images/blog-2.png";
import Blog3 from "~/lib/assets/images/blog-3.png";
import Blog4 from "~/lib/assets/images/blog-4.png";
import Typography1 from "~/lib/assets/images/typography-image-1.png";

interface ArticleData {
  image: StaticImageData;
  avatar: StaticImageData;
  author: string;
  date: string;
  title: string;
  description: string;
}

interface Article {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  readTime: string;
  link: string;
}

interface ListData {
  list: { icon?: JSX.Element; title: string }[];
  className?: string;
}

const ArticleData: ArticleData[] = [
  {
    image: Blog1,
    avatar: Avatar1,
    author: "Jese Leos",
    date: "Aug 15, 2021",
    title: "Our first office",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog3,
    avatar: Avatar2,
    author: "Roberta Casas",
    date: "Aug 15, 2021",
    title: "We partnered up with Google",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog4,
    avatar: Avatar3,
    author: "Sofia McGuire",
    date: "Aug 15, 2021",
    title: "Our first project with React",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog1,
    avatar: Avatar1,
    author: "Jese Leos",
    date: "Aug 15, 2021",
    title: "Our first office",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog3,
    avatar: Avatar2,
    author: "Roberta Casas",
    date: "Aug 15, 2021",
    title: "We partnered up with Google",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
  {
    image: Blog4,
    avatar: Avatar3,
    author: "Sofia McGuire",
    date: "Aug 15, 2021",
    title: "Our first project with React",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.",
  },
];

const ArticlesData: Article[] = [
  {
    imgSrc: Blog1,
    imgAlt: "Image 1",
    title: "Constructing Search & Filter with ModernUI Web",
    readTime: "Read in 2 minutes",
    link: "/our-first-office",
  },
  {
    imgSrc: Blog2,
    imgAlt: "Image 2",
    title: "No-Build Required React Framework",
    readTime: "Read in 12 minutes",
    link: "/enterprise-design-tips",
  },
  {
    imgSrc: Blog3,
    imgAlt: "Image 3",
    title: "Using ModernUI Web to improve app performance",
    readTime: "Read in 8 minutes",
    link: "/we-partnered-with-google",
  },
  {
    imgSrc: Blog4,
    imgAlt: "Image 4",
    title: "Solid hooks system for Javascript and NodeJS",
    readTime: "Read in 4 minutes",
    link: "/our-first-project-with-react",
  },
];

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

const addresses = [
  {
    city: "New York",
    address: "Huntersville,",
    address2: "957 Hill Hills Suite 491, United States",
    office: "+12(3) 456 7890 1234",
    support: "company@name.com",
  },
  {
    city: "Rome",
    address: "Piazza di Spagna,",
    address2: "00187 Roma RM, Italy",
    office: "+12(3) 456 7890 1234",
    support: "company@name.it",
  },
  {
    city: "London",
    address: "Fulham Rd,",
    address2: "London SW6 1HS, United Kingdom",
    office: "+12(3) 456 7890 1234",
    support: "company@name.co.uk",
  },
];

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

const SortList = [
  {
    title: "Latest",
  },
  {
    title: "Trending",
  },
  {
    title: "Oldest",
  },
];

const TrendingArticlesCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <div className="bg-muted py-8 antialiased lg:py-16">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <Heading level={3} className="mb-8 text-left font-bold tracking-normal">
          Trending on ModernWeb UI
        </Heading>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="relative h-[570px] overflow-hidden rounded-lg"
        >
          <CarouselContent>
            {ArticleData.map((article, index) => (
              <CarouselItem
                key={index}
                className="duration-700 ease-in-out md:basis-1/2 lg:basis-1/3 "
              >
                <Article key={index} {...article} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[47%] top-[525px] rounded-lg bg-muted" />
          <CarouselNext className=" right-[47%] top-[525px] rounded-lg bg-muted" />
        </Carousel>
      </div>
    </div>
  );
};

const Article = (article: ArticleData) => {
  const { image, avatar, author, date, title, description } = article;
  return (
    <article className="mx-auto w-full max-w-sm rounded-lg border bg-background p-4 shadow-md">
      <Link href="#">
        <Image className="mb-5 rounded-lg" src={image} alt={title} />
      </Link>
      <div className="mb-3 flex items-center space-x-2">
        <Avatar>
          <Image
            className="size-10 w-full rounded-full object-cover"
            src={avatar}
            alt={`${author} avatar`}
          />
        </Avatar>
        <div className="font-medium text-secondary-foreground">
          <div>{author}</div>
          <div className="text-sm font-normal text-muted-foreground">
            {date} · 16 min read
          </div>
        </div>
      </div>
      <Heading level={3} className="mb-2 font-bold tracking-tight lg:text-2xl">
        <Link href="#">{title}</Link>
      </Heading>
      <Text className="mb-3 text-muted-foreground">{description}</Text>
      <Link
        href="#"
        className="inline-flex items-center font-medium text-primary hover:text-brand-600 hover:no-underline"
      >
        Read more
        <ArrowRight className="ml-1 mt-px size-3" />
      </Link>
    </article>
  );
};

const ArticleCardVertical = (article: Article) => {
  const { imgSrc, imgAlt, title, readTime, link } = article;
  return (
    <article className="mb-8 flex">
      <Link href={link} passHref className="shrink-0">
        <Image
          src={imgSrc}
          className="mr-5 size-24 max-w-full rounded-full object-cover align-middle"
          alt={imgAlt}
        />
      </Link>
      <div className="flex flex-col justify-center">
        <Heading level={6} className="mb-2 font-bold leading-tight">
          <Link href={link} passHref>
            {title}
          </Link>
        </Heading>
        <Link
          href={link}
          passHref
          className="inline-flex items-center text-md font-medium text-primary underline underline-offset-4 hover:no-underline"
        >
          {readTime}
        </Link>
      </div>
    </article>
  );
};

const DropDownMenu = (props: ListData) => {
  const { list, className } = props;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="dropdownComment1Button"
          data-dropdown-toggle="dropdownComment1"
          className={`inline-flex items-center rounded-lg bg-background p-2 text-center text-sm font-medium text-muted-foreground hover:bg-primary-200 ${className}`}
        >
          {list[0].icon ? (
            <Share2 className="size-4" />
          ) : (
            <>
              Latest <ChevronDown className="ml-2 size-3" />
            </>
          )}
          <span className="sr-only">Comment settings</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-30 w-auto divide-y divide-primary-50 rounded bg-background p-0 shadow">
        <div id="dropdownComment1">
          <ul
            className="text-sm text-primary-700"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            {list.map(({ icon, title }, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[12px] hover:bg-primary-100 hover:text-foreground"
                >
                  <div className="flex p-2">
                    <div className="mr-2">{icon}</div>
                    {title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const formSchema = z.object({
  email: z.string().optional(),
});

const subscriptionSchema = z.object({
  email: z.string().optional(),
});

const BlogFooter = () => {
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
    <footer className="bg-muted antialiased">
      <div className="mx-auto max-w-screen-xl p-4 pt-6 md:p-8 lg:p-10">
        <div className="gap-8 space-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {addresses.map((address, index) => (
            <address key={index} className="not-italic">
              <Text className="mb-6 text-sm font-semibold uppercase text-foreground">
                {address.city}
              </Text>
              <Text className="mb-3 text-muted-foreground">
                {address.address}
                <br />
                {address.address2}
              </Text>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <Phone className="mr-2 size-4" />
                  Office: {address.office}
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 size-4" />
                  Support:{" "}
                  <Link
                    href={`mailto:${address.support}`}
                    className="ml-2 hover:underline"
                  >
                    {address.support}
                  </Link>
                </li>
              </ul>
            </address>
          ))}
        </div>
        <div className="mx-auto mt-6 max-w-screen-md items-center justify-between rounded-lg bg-primary-300 p-4 sm:flex lg:mt-16">
          <Text className="text-sm font-medium text-foreground">
            Sign up to our newsletter
          </Text>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="ml-0 mt-4 flex w-full items-center sm:ml-5 sm:mt-0"
            >
              <div className="relative w-full">
                <Label
                  htmlFor="email-subscribe"
                  className="mb-2 hidden text-sm font-medium text-background"
                >
                  Email address
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
                          className="block w-full rounded-lg rounded-r-none border border-primary-500 bg-muted p-3 text-sm text-foreground shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          placeholder="name@modernUiWeb.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="mt-2 cursor-pointer rounded-l-none rounded-r-lg border border-primary-600 bg-primary-600 px-5 py-3 text-center text-sm text-background hover:bg-primary-700 focus:ring-4 focus:ring-primary-300">
                Subscribe
              </Button>
            </form>
          </Form>
        </div>
        <hr className="my-6 border-primary-400 sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-6 flex items-center text-2xl font-semibold text-secondary-foreground lg:mb-0">
            <Globe className="mr-2 h-8" />
            ModernUI Web
          </div>
          <span className="mb-4 block text-sm text-muted-foreground lg:mb-0">
            © 2021-2022{" "}
            <Link href="#" className="hover:underline">
              Flowbite™
            </Link>
            . All Rights Reserved.
          </span>
          <Popover>
            <PopoverTrigger asChild>
              <button className="mt-3 inline-flex items-center text-center text-sm font-medium text-muted-foreground hover:text-foreground sm:mt-0">
                English (US)
                <ChevronDown className="ml-2 size-4" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="z-10 w-44 divide-y divide-gray-100 rounded bg-muted-foreground shadow">
              <ul className="py-1 text-sm text-background">
                {["English", "German", "Italian", "Spanish"].map(
                  (language, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-primary-200 hover:text-secondary-foreground"
                      >
                        {language}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </footer>
  );
};

const LiveBlogging = () => {
  // 1. Define your form.
  const subscription = useForm<z.infer<typeof subscriptionSchema>>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
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
    <MuiLayout.Section className="bg-background">
      <main className="bg-background pb-8 antialiased lg:pb-16">
        <header className="mx-auto w-full max-w-screen-xl py-8 lg:py-12">
          <div className="w-full max-w-screen-lg px-4">
            <div className="mb-4 flex items-center text-lg text-red-600">
              <div className="mr-2 size-3 rounded-full bg-red-600"></div>Live
              Reporting
            </div>
            <Heading
              level={1}
              className="mb-4 max-w-2xl text-wrap font-extrabold leading-tight tracking-normal"
            >
              ModernUI Web Blocks Tutorial - Learn how to get started with
              custom sections using the ModernUI Web Blocks
            </Heading>
            <div className="flex items-center">
              <Clock className="mr-2 size-3" />
              <time
                className="font-normal text-muted-foreground"
                dateTime="2022-03-08"
                title="August 3rd, 2022"
              >
                August 3, 2022, 2:20am EDT
              </time>
            </div>
          </div>
        </header>
        <div className="relative z-20 mx-auto flex max-w-screen-xl justify-between rounded bg-background px-4">
          <article className="w-full max-w-none xl:w-[828px]">
            <div className="mb-6 flex items-center justify-between border-y border-primary-300 py-6">
              <span className="text-sm font-bold text-secondary-foreground lg:mb-0">
                15 Posts
              </span>
              <div className="flex items-center">
                <span className="mr-2 text-xs font-semibold uppercase text-secondary-foreground">
                  Sort by
                </span>
                <DropDownMenu list={SortList} />
              </div>
            </div>
            <div className="mb-4 border-b border-primary-300 pb-3 lg:mb-8">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-red-600">
                  45 min ago
                </span>
                <DropDownMenu list={ColorIconList} />
              </div>
              <Heading
                level={1}
                className="mb-4 max-w-4xl font-extrabold leading-none tracking-normal"
              >
                Getting started with ModernUI Web
              </Heading>
              <Text level="xl" className="mb-6 leading-8">
                ModernUI Web is an open-source library of UI components built
                with the utility-first classes from Tailwind CSS. It also
                includes interactive elements such as dropdowns, modals,
                datepickers.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                But then I found a{" "}
                <Link className="text-primary" href="#">
                  component library based on Tailwind CSS called ModernUI Web
                </Link>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more which
                are conveniently built with the utility classes from Tailwind
                CSS.
              </Text>
            </div>
            <div className="mb-4 border-b border-primary-300 pb-3 lg:mb-8">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-red-600">
                  45 min ago
                </span>
                <DropDownMenu list={ColorIconList} />
              </div>
              <Heading
                level={1}
                className="mb-4 max-w-4xl font-extrabold leading-none tracking-normal"
              >
                Best practices for setting up your prototype
              </Heading>
              <Text className="mb-6 md:text-lg md:leading-8">
                <strong>Low fidelity or high fidelity?</strong> Fidelity refers
                to how close a prototype will be to the real deal. If you&#39;re
                simply preparing a quick visual aid for a presentation, a
                low-fidelity prototype — like a wireframe with placeholder
                images and some basic text — would be more than enough. But if
                you&#39;re going for more intricate usability testing, hi-fi
                prototypes are the better choice.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                <strong>Consider your user</strong>. To create an intuitive user
                flow, try to think as your user would when interacting with your
                product. While you can fine-tune this during beta testing,
                considering your user&apos;s needs and habits early on will save
                you time by setting you on the right path.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                <strong>Start from the inside out.</strong>. A nice way to both
                organize your tasks and create more user-friendly prototypes is
                by building your prototypes &apos;inside out&apos;. Start by
                focusing on what will be important to your user, like a Buy now
                button or an image gallery, and list each element by order of
                priority. This way, you&apos;ll be able to create a prototype
                that puts your users needs at the heart of your design.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                {" "}
                And there you have it! Everything you need to design and share
                prototypes — right in Flowbite Figma.
              </Text>
            </div>
            <div className="mb-4 border-b border-primary-300 pb-3 lg:mb-8">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-red-600">
                  2 hr 5 min ago
                </span>
                <DropDownMenu list={ColorIconList} />
              </div>
              <Heading
                level={1}
                className="mb-4 max-w-4xl font-extrabold leading-none tracking-normal"
              >
                When does design come in handy?
              </Heading>
              <Text className="mb-6 md:text-lg md:leading-8">
                First of all you need to understand how ModernUI Web works. This
                library is not another framework. Rather, it is a set of
                components based on Tailwind CSS that you can just copy-paste
                from the documentation.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                It also includes a JavaScript file that enables interactive
                components, such as modals, dropdowns, and datepickers which you
                can optionally include into your project via CDN or NPM.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                You can check out the quickstart guide to explore the elements
                by including the CDN files into your project. But if you want to
                build a project with ModernUI Web I recommend you to follow the
                build tools steps so that you can purge and minify the generated
                CSS.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                You&apos;ll also receive a lot of useful application UI,
                marketing UI, and e-commerce pages that can help you get started
                with your projects even faster. You can check out this
                comparison table to better understand the differences between
                the open-source and pro version of ModernUI Web.
              </Text>
            </div>

            <div className="mb-6 border-b border-primary-300 pb-3 leading-8 lg:mb-8">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-red-600">
                  45 min ago
                </span>
                <DropDownMenu list={ColorIconList} />
              </div>
              <Heading
                level={1}
                className="mb-4 max-w-4xl font-extrabold leading-none tracking-normal"
              >
                Getting started with ModernUI Web
              </Heading>
              <Text className="mb-6 leading-8 sm:text-lg lg:text-[22px]">
                ModernUI Web is an open-source library of UI components built
                with the utility-first classes from Tailwind CSS. It also
                includes interactive elements such as dropdowns, modals,
                datepickers.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                But then I found a{" "}
                <Link className="text-primary" href="#">
                  component library based on Tailwind CSS called ModernUI Web
                </Link>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more which
                are conveniently built with the utility classes from Tailwind
                CSS.
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
              <Text className="mb-6 md:text-lg md:leading-8">
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </Text>
              <Text className="mb-6 md:text-lg md:leading-8">
                But then I found a{" "}
                <Link className="text-primary" href="#">
                  component library based on Tailwind CSS called ModernUI Web
                </Link>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more which
                are conveniently built with the utility classes from Tailwind
                CSS.
              </Text>
            </div>
          </article>
          <aside className="hidden xl:block" aria-labelledby="sidebar-label">
            <div className="sticky top-6 xl:w-[336px]">
              <Heading level={3} id="sidebar-label" className="sr-only">
                Sidebar
              </Heading>
              <div className="mb-8">
                <Text className="mb-2 text-wrap text-[14px] font-bold uppercase leading-5 tracking-normal">
                  ModernUI Web News morning headlines
                </Text>
                <Text className="mb-4 text-sm text-muted-foreground">
                  Get all the stories you need-to-know from the most powerful
                  name in news delivered first thing every morning to your inbox
                </Text>
                <Form {...subscription}>
                  <form onSubmit={subscription.handleSubmit(onSubmit)}>
                    <div className="relative mb-4">
                      <FormField
                        control={subscription.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only">
                              Your Email
                            </FormLabel>
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
              <div className="mb-12">
                <Text className="mb-2 text-wrap text-[14px] font-bold uppercase leading-5 tracking-normal">
                  Latest news
                </Text>
                {ArticlesData.map((article, index) => (
                  <ArticleCardVertical key={index} {...article} />
                ))}
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
            </div>
          </aside>
        </div>
      </main>
      <aside aria-label="Related articles" className="bg-muted antialiased">
        <TrendingArticlesCarousel />
      </aside>
      <div className="bg-background">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto flex max-w-screen-sm flex-col items-center text-center">
            <Heading
              level={1}
              className="mb-4 font-extrabold leading-tight tracking-tight"
            >
              Live news. Innovative interviews.
            </Heading>
            <Text className="mb-6 leading-8 text-muted-foreground md:text-lg">
              As a subscriber, you can stay informed with the live news, stream
              exclusive films and unique interactive interviews.
            </Text>
            <Button color="info" className="w-fit">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
      <BlogFooter />
    </MuiLayout.Section>
  );
};

export default LiveBlogging;
