"use-client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Ellipsis, Mail, MessageSquareMore } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Components Import
import * as MuiLayout from "~/components/layouts";
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
import { Textarea } from "~/components/ui/textarea";
// Image Imports
import Blog1 from "~/lib/assets/images/blog-1.png";
import Blog2 from "~/lib/assets/images/blog-2.png";
import Blog3 from "~/lib/assets/images/blog-3.png";
import Blog4 from "~/lib/assets/images/blog-4.png";
import ProfilePic from "~/lib/assets/images/profile-picture-2.jpg";
import Typography1 from "~/lib/assets/images/typography-image-1.png";

import BlogBody from "./components/blog-body";
import BlogFooter from "./components/blog-footer";

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
        type="button"
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
    <div className="bg-background py-8 antialiased">
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
            <div className="mb-4 rounded-lg border border-gray-200 bg-primary-50 px-4 py-2">
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
            <Button
              type="submit"
              className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-200"
            >
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
            <header className="mb-4 lg:mb-6">
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
              <Heading
                level={1}
                className="mb-4 font-extrabold leading-tight lg:mb-6 lg:text-4xl"
              >
                Best practices for successful prototypes
              </Heading>
            </header>
            <Text level="mdTitle" className="mb-4">
              ModernUI Web is an open-source library of UI components built with
              the utility-first classes from Tailwind CSS. It also includes
              interactive elements such as dropdowns, modals, datepickers.
            </Text>
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
        className="bg-muted py-6 antialiased lg:py-16"
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
                      <div className="relative">
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
              <Button type="submit">Submit</Button>
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
