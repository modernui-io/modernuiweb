"use client";

import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CalendarRange,
  CodeIcon,
  DownloadIcon,
  Ellipsis,
  ImageIcon,
  ListIcon,
  MapPin,
  MessageSquareMore,
  MinusIcon,
  Paperclip,
  PlusIcon,
  SettingsIcon,
  Smile,
} from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//component imports
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Textarea } from "~/components/ui/textarea";

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

const formSchema = z.object({
  comment: z.string().optional(),
});

export const CommentsUpvotes = () => {
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
              className="rounded-lg border border-primary-200 bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary-200"
            >
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
              alt="Michael Burry"
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
                          type="button"
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
                          type="button"
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
              <Button
                type="submit"
                className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-200"
              >
                Post comment
              </Button>
            </form>
          </Form>
        </div>
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <article
                className={`mb-6 rounded-lg border border-primary-200 bg-background p-4 text-base lg:p-6 ${comment.isReply ? "ml-12" : ""}`}
              >
                <div className="flex">
                  <div className="mr-4">
                    <div className="flex w-9 flex-col items-center justify-center rounded-lg bg-primary-100 font-medium ">
                      <Button
                        type="button"
                        className="flex w-full justify-center rounded-b-none rounded-t-lg bg-primary-100 px-0 py-1 text-primary-500 shadow-none hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-50"
                      >
                        <PlusIcon className="size-4 text-primary-500" />
                      </Button>
                      <span className="px-2 py-1 text-xs font-medium text-foreground lg:px-0 lg:text-sm ">
                        {comment.upvotes}
                      </span>
                      <Button
                        type="button"
                        className="flex w-full  justify-center rounded-b-lg rounded-t-none bg-primary-100 px-0 py-1 text-primary-500 shadow-none hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-50"
                      >
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
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};
