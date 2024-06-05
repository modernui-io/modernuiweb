"use client";

import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Ellipsis, MessageSquareMore } from "lucide-react";
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

const formSchema = z.object({
  comment: z.string().optional(),
});

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
      <Button className="inline-flex items-center rounded-lg bg-background p-2 text-center text-sm font-medium text-primary-400 shadow-none hover:bg-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-200">
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

export function DefaultCommentSection() {
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
    <MuiLayout.Section className=" bg-background py-8 antialiased lg:py-16">
      <MuiLayout.Container className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <Heading level={4} className="font-bold text-foreground lg:text-2xl">
            Discussion (20)
          </Heading>
        </div>
        <Form {...form}>
          <form className="mb-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 rounded-lg border border-gray-200 bg-primary-50 px-4 py-2">
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
            <div key={`${index}${name}`}>
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
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
