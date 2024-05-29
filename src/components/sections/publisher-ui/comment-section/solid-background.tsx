"use client";

import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Ellipsis,
  Heart,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
  Paperclip,
} from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//component imports
import * as MuiLayout from "~/components/layouts";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Textarea } from "~/components/ui/textarea";

const formSchema = z.object({
  comment: z.string().optional(),
});

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

const DropDownMenu = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        id="dropdownComment1Button"
        data-dropdown-toggle="dropdownComment1"
        className="inline-flex items-center rounded-lg bg-primary-50 p-2 text-center text-sm font-medium text-primary-400 shadow-none hover:bg-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-200"
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

export const CommentsSolidBackground = () => {
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
    <MuiLayout.Section className="bg-background py-8 antialiased lg:py-16">
      <MuiLayout.Container className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <Heading level={4} className="font-bold text-foreground lg:text-2xl">
            Discussion (20)
          </Heading>
          <div>
            <Button
              type="button"
              className="rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary-200 "
            >
              Subscribe
            </Button>
          </div>
        </div>
        <Form {...form}>
          <form className="mb-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 w-full rounded-lg border border-primary-200 bg-primary-50">
              <div className="rounded-t-lg bg-primary-50 px-4 py-2 ">
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Your comment</FormLabel>
                      <FormControl>
                        <Textarea
                          id="comment"
                          className="w-full border-0 bg-primary-50 px-0 text-sm text-foreground shadow-none focus:outline-none focus:ring-0 focus-visible:ring-0"
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
                <Button
                  type="submit"
                  className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-200"
                >
                  Post comment
                </Button>
                <div className="flex space-x-1 pl-0 sm:pl-2">
                  <Button
                    type="button"
                    className="inline-flex cursor-pointer justify-center rounded bg-primary-50 p-2 text-primary-500 shadow-none hover:bg-primary-100 hover:text-primary-900"
                  >
                    <Paperclip className="size-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                  <button
                    type="button"
                    className="inline-flex cursor-pointer justify-center rounded bg-primary-50 p-2 text-primary-500 shadow-none hover:bg-primary-100 hover:text-primary-900"
                  >
                    <MapPin className="size-4" />
                    <span className="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex cursor-pointer justify-center rounded bg-primary-50 p-2 text-primary-500 shadow-none hover:bg-primary-100 hover:text-primary-900"
                  >
                    <ImageIcon className="size-4" />
                    <span className="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Form>
        {comments.map((comment, index) => (
          <article
            key={index}
            className={`mb-6 rounded-lg bg-primary-50 p-6 text-base ${comment.isReply ? "ml-12" : ""}`}
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
              <DropDownMenu />
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
        ))}
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
