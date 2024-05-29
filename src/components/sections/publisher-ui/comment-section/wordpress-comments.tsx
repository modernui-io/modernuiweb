import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { Ellipsis, Heart } from "lucide-react";
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
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Textarea } from "~/components/ui/textarea";

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

const formSchema = z.object({
  firstName: z.string().min(1),
  email: z.string().email({ message: "Please enter a valid email" }),
  website: z.string().optional(),
  message: z.string().min(1),
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
    <MuiLayout.Section className="bg-background py-8 text-foreground antialiased lg:py-16">
      <MuiLayout.Container className="mx-auto max-w-screen-md px-4">
        <div className="mb-6 flex items-center justify-between">
          <Heading level={4} className="font-bold text-foreground lg:text-2xl ">
            Leave a reply
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
            <Button
              type="submit"
              className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-200"
            >
              Post comment
            </Button>
          </form>
        </Form>
        {comments.map((comment, index) => (
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
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default WordpressComments;
