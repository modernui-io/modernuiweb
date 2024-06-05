"use-client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Bookmark,
  Ellipsis,
  Globe,
  Heart,
  Image as ImageIcon,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
  Paperclip,
} from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Components Import
import * as MuiLayout from "~/components/layouts";
import { Avatar } from "~/components/ui/avatar";
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
import Avatar1 from "~/lib/assets/images/avatar-1.png";
import Avatar2 from "~/lib/assets/images/avatar-2.png";
import Avatar3 from "~/lib/assets/images/avatar-3.png";
import Blog1 from "~/lib/assets/images/blog-1.png";
import Blog2 from "~/lib/assets/images/blog-2.png";
import Blog3 from "~/lib/assets/images/blog-3.png";
import Blog4 from "~/lib/assets/images/blog-4.png";
import Typography1 from "~/lib/assets/images/typography-image-1.png";
import Typography2 from "~/lib/assets/images/typography-image-2.png";

interface TableData {
  country: string;
  date: string;
  amount: string;
}

interface ArticleData {
  image: StaticImageData;
  avatar: StaticImageData;
  author: string;
  date: string;
  title: string;
  description: string;
}

interface ListData {
  list: string[];
  className?: string;
}

interface Article {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
  description: string;
  readTime: string;
  link: string;
}

const comments = [
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    name: "Michael Gough",
    datetime: "2022-02-08",
    title: "February 8th, 2022",
    date: "Feb. 8, 2022",
    content:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    likes: 11,
  },
  {
    profilePicture:
      "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    name: "Jese Leos",
    datetime: "2022-02-12",
    title: "February 12th, 2022",
    date: "Feb. 12, 2022",
    content: "Much appreciated! Glad you liked it ☺️",
    likes: 3,
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
    likes: 24,
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
    likes: 9,
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

const FacebookIcon = () => (
  <svg
    className="mr-2 size-3 text-muted-foreground"
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

const TwitterIcon = () => (
  <svg
    className="mr-2 size-3 text-muted-foreground"
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

const socialMediaLinks = [
  {
    href: "#",
    label: "Share",
    icon: <FacebookIcon />,
  },
  {
    href: "#",
    label: "Tweet",
    icon: <TwitterIcon />,
  },
  {
    label: "Copy link",
    icon: <LinkIcon className="mr-2 size-3" />,
    isButton: true,
  },
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
    title: "We partnered up with Google",
    description:
      "Over the past year, Volosoft has undergone many changes! After months of preparation.",
    readTime: "Read in 8 minutes",
    link: "/we-partnered-up-with-google",
  },
];

const BlogBody = () => {
  return (
    <div>
      <Heading className="mb-4 font-extrabold tracking-tight" level={2}>
        Getting started with ModernUI Web
      </Heading>
      <Text className="mb-4 md:text-lg">
        First of all you need to understand how ModernUI Web works. This library
        is not another framework. Rather, it is a set of components based on
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
        project with ModernUI Web I recommend you to follow the build tools
        steps so that you can purge and minify the generated CSS.
      </Text>
      <Text className="mb-4 md:text-lg">
        You&#39;ll also receive a lot of useful application UI, marketing UI,
        and e-commerce pages that can help you get started with your projects
        even faster. You can check out this comparison table to better
        understand the differences between the open-source and pro version of
        ModernUI Web.
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
        certain shapes are shared across letters. A typeface represents shared
        patterns across a collection of letters.
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
          &quot;ModernUI Web is just awesome. It contains tons of predesigned
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

const RoundedList = () => (
  <aside
    aria-label="Related articles"
    className="bg-muted py-8 antialiased lg:py-16"
  >
    <div className="mx-auto max-w-screen-xl px-4">
      <Heading level={3} className="mb-8 font-bold">
        Read next
      </Heading>
      {Articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  </aside>
);

const commentSchema = z.object({
  comment: z.string().optional(),
});

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
    <div className="bg-background py-8 antialiased lg:py-16">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <Heading level={4} className="font-bold text-foreground lg:text-2xl">
            Discussion (20)
          </Heading>
          <div>
            <Button className="rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary-200 ">
              Subscribe
            </Button>
          </div>
        </div>
        <Form {...comment}>
          <form
            className="mb-6"
            onSubmit={comment.handleSubmit(onCommentSubmit)}
          >
            <div className="mb-4 w-full rounded-lg border border-primary-200 bg-muted">
              <div className="rounded-t-lg bg-muted px-4 py-2 ">
                <FormField
                  control={comment.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Your comment</FormLabel>
                      <FormControl>
                        <Textarea
                          id="comment"
                          className="w-full border-0 bg-muted px-0 text-sm text-foreground shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0"
                          placeholder="Write a comment..."
                          {...field}
                          rows={6}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-between border-t border-primary-300 px-3 py-2">
                <Button className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-200">
                  Post comment
                </Button>
                <div className="flex space-x-1 pl-0 sm:pl-2">
                  <Button className="inline-flex cursor-pointer justify-center rounded bg-muted p-2 text-primary-500 shadow-none hover:bg-primary-100 hover:text-primary-900">
                    <Paperclip className="size-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                  <Button className="inline-flex cursor-pointer justify-center rounded bg-muted p-2 text-primary-500 shadow-none hover:bg-primary-100 hover:text-primary-900">
                    <MapPin className="size-4" />
                    <span className="sr-only">Set location</span>
                  </Button>
                  <Button className="inline-flex cursor-pointer justify-center rounded bg-muted p-2 text-primary-500 shadow-none hover:bg-primary-100 hover:text-primary-900">
                    <ImageIcon className="size-4" />
                    <span className="sr-only">Upload image</span>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
        {comments.map((comment, index) => (
          <>
            <article
              key={index}
              className={`mb-6 rounded-lg bg-muted p-6 text-base ${comment.isReply ? "ml-12" : ""}`}
            >
              <footer className="mb-2 flex items-center justify-between">
                <div className="flex items-center">
                  <Text className="mr-3 inline-flex items-center text-sm font-semibold text-foreground">
                    <Image
                      width={24}
                      height={24}
                      className="mr-2 size-6 rounded-full"
                      src={comment.profilePicture}
                      alt={comment.name}
                    />
                    {comment.name}
                  </Text>
                  <Text className="text-sm text-primary-600">
                    <time dateTime={comment.datetime} title={comment.title}>
                      {comment.date}
                    </time>
                  </Text>
                </div>
                <DropDownMenu
                  list={["Edit", "Remove", "Report"]}
                  className="bg-muted"
                />
              </footer>
              <Text className="text-primary-500">{comment.content}</Text>
              <div className="mt-4 flex items-center space-x-1">
                <Button
                  variant={"link"}
                  className="flex items-center px-2 text-sm font-medium text-primary-500 hover:underline"
                >
                  <Heart className="mr-1 size-3" />
                  {comment.likes} Likes
                </Button>
                <Button
                  variant={"link"}
                  className="flex items-center px-2 text-sm font-medium text-primary-500 hover:underline"
                >
                  <MessageCircle className="mr-1.5 size-3" />
                  Reply
                </Button>
              </div>
            </article>
          </>
        ))}
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
  const { imgSrc, imgAlt, description, title, readTime, link } = article;
  return (
    <article className="mb-8 flex">
      <div className="flex flex-col justify-center">
        <Heading level={6} className="mb-2 font-bold leading-tight">
          <Link href={link} passHref>
            {title}
          </Link>
        </Heading>
        <Text className="mb-2">{description}</Text>
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

const ArticleCard = (article: Article) => {
  const { imgSrc, imgAlt, title, description, readTime, link } = article;
  return (
    <article className="mb-8 flex">
      <Link href={link} passHref className="shrink-0">
        <Image
          src={imgSrc}
          className="mr-5 size-32 max-w-full rounded-full object-cover align-middle"
          alt={imgAlt}
        />
      </Link>
      <div className="flex flex-col justify-center">
        <Heading level={4} className="mb-2 font-bold leading-tight">
          <Link href={link} passHref>
            {title}
          </Link>
        </Heading>
        <Text className="mb-2 text-muted-foreground">{description}</Text>
        <Link
          href={link}
          passHref
          className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
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
          <Ellipsis className="size-4" />
          <span className="sr-only">Comment settings</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-30 w-36 divide-y divide-primary-50 rounded bg-background p-0 shadow">
        <div id="dropdownComment1">
          <ul
            className="text-sm text-primary-700"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            {list.map((name, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="block px-4 py-2 text-[12px] hover:bg-primary-100 hover:text-foreground"
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
};

const formSchema = z.object({
  email: z.string().optional(),
});

const BlogFooter = () => {
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

  return (
    <footer className="bg-muted antialiased">
      <div className="md:{p-8 pb-0} lg:{p-10 pb-0} mx-auto max-w-screen-xl p-4 py-6">
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

const FeatureArticle = () => {
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
    <MuiLayout.Section className="bg-background">
      <main className="bg-background pb-8 antialiased lg:pb-16">
        <header className="py-12">
          <div className="mx-auto w-full max-w-screen-xl px-4 text-center">
            <span className="mb-4 block font-semibold text-secondary-foreground">
              Published{" "}
              <time
                className="font-normal text-muted-foreground"
                dateTime="2022-03-08"
                title="August 3rd, 2022"
              >
                August 3, 2022, 2:20am EDT
              </time>
            </span>
            <Heading
              level={2}
              className="mx-auto mb-4 max-w-2xl font-extrabold leading-none"
            >
              ModernUI Web Blocks Tutorial - Learn how to get started with
              custom sections using the ModernUI Web Blocks
            </Heading>
            <Text className="text-lg font-normal text-muted-foreground">
              Before going digital, you might scribbling down some ideas in a
              sketchbook.
            </Text>
          </div>
        </header>
        <div className="relative z-20 mx-auto flex max-w-screen-xl justify-between rounded bg-background px-4">
          <article className="w-full max-w-none xl:w-[828px]">
            <div className="mb-2 flex flex-col justify-between border-y border-primary-300 py-4 lg:flex-row lg:items-center">
              <span className="mb-4 text-base font-normal text-muted-foreground lg:mb-0">
                By{" "}
                <Link
                  href="#"
                  rel="author"
                  className="font-bold text-secondary-foreground no-underline hover:underline"
                >
                  Jese Leos
                </Link>{" "}
                in{" "}
                <Link
                  href="#"
                  className="font-normal text-muted-foreground no-underline hover:underline"
                >
                  World News
                </Link>
              </span>
              <aside aria-label="Share social media">
                {socialMediaLinks.map((link, index) =>
                  link.isButton ? (
                    <Button
                      key={index}
                      className="mr-2 inline-flex items-center rounded-lg border border-primary-300 bg-muted px-6 text-xs font-medium text-foreground no-underline hover:bg-primary-400 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-400"
                    >
                      {link.icon}
                      {link.label}
                    </Button>
                  ) : (
                    <Link
                      key={index}
                      href={link.href ?? ""}
                      className="mr-2 inline-flex items-center rounded-lg border border-primary-300 bg-muted px-6 py-2  text-xs font-medium text-foreground no-underline hover:bg-primary-400 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-400"
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ),
                )}
              </aside>
            </div>
            <div className="mb-4 border-b border-primary-300 pb-3 lg:mb-8">
              <Text level="xl" className="mb-4">
                ModernUI Web is an open-source library of UI components built
                with the utility-first classes from Tailwind CSS. It also
                includes interactive elements such as dropdowns, modals,
                datepickers.
              </Text>
              <Text className="mb-4 md:text-lg">
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </Text>
              <Text className="mb-4 md:text-lg">
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
                  className="mx-auto w-9/12 object-cover"
                  src={Typography1}
                  alt=""
                />
                <figcaption className="text-center text-sm text-muted-foreground">
                  Digital art by Anonymous
                </figcaption>
              </figure>
              <Text className="mb-4 md:text-lg">
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </Text>
              <Text className="mb-4 md:text-lg">
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
            <BlogBody />
            <div className="flex items-center justify-between border-y border-primary-300 py-6">
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
                        <Bookmark className="size-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Save this article</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Button>
                <DropDownMenu list={["Mute this author", "Report"]} />
              </div>
            </div>
            <CommentSection />
          </article>
          <aside className="hidden xl:block" aria-labelledby="sidebar-label">
            <div className="sticky top-6 xl:w-[336px]">
              <Heading level={3} id="sidebar-label" className="sr-only">
                Sidebar
              </Heading>
              <div className="mb-8 rounded-lg border border-primary-300 p-2">
                <Heading level={6} className="mb-2 uppercase">
                  ModernUI Web News morning headlines
                </Heading>
                <Text className="mb-4 text-sm text-muted-foreground">
                  Get all the stories you need-to-know from the most powerful
                  name in news delivered first thing every morning to your inbox
                </Text>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="relative mb-4">
                      <FormField
                        control={form.control}
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
                                  {...form}
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
              <div className="mb-8 rounded-lg border border-primary-300 p-2">
                <Heading level={6} className="mb-4 font-bold uppercase">
                  Latest news
                </Heading>
                {Articles.map((article, index) => (
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
        <RoundedList />
      </aside>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center">
          <Heading level={2} className="mb-4 font-extrabold tracking-tight">
            Sign up for our newsletter
          </Heading>
          <Text className="mb-6 text-muted-foreground md:text-lg">
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </Text>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mb-3 mt-6 flex h-fit items-center justify-center gap-2"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          className="bg-input pl-8 md:w-64"
                          placeholder="Your email address"
                          {...field}
                        />
                        <Mail className="absolute left-2 top-1/4 size-5 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-2">Submit</Button>
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
    </MuiLayout.Section>
  );
};

export default FeatureArticle;
