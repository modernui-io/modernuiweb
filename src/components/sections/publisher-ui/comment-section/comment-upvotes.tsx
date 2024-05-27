"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Paperclip,
  MapPin,
  ImageIcon,
  CodeIcon,
  SettingsIcon,
  Smile,
  ListIcon,
  CalendarRange,
  DownloadIcon,
  PlusIcon,
  MinusIcon,
  Ellipsis,
  MessageSquareMore,
} from 'lucide-react';

//component imports
import * as MuiLayout from "~/components/layouts";
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
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Popover, PopoverTrigger ,PopoverContent} from "~/components/ui/popover";

const comments = [
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    name: "Bonnie Green",
    datetime: "2022-03-15",
    title: "March 15th, 2022",
    date: "Mar. 15, 2022",
    upvotes: 14,
    content: "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
    replies : true,
    replyList : [
      {
        profilePicture: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
        name: "Jese Leos",
        datetime: "2022-02-12",
        title: "February 12th, 2022",
        date: "Feb. 12, 2022",
        upvotes: 3,
        content: "Much appreciated! Glad you liked it ☺️"
      },
    ]
  },
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    name: "Danny Hart",
    datetime: "2022-02-08",
    title: "February 8th, 2022",
    date: "Feb. 8, 2022",
    upvotes: 12,
    content: "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy."
  },
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    name: "Helene Engels",
    datetime: "2022-06-23",
    title: "June 23rd, 2022",
    date: "Jun. 23, 2022",
    upvotes: 32,
    content: "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects."
  }
];

const buttonIcons = [
  { icon: <Paperclip className="w-4 h-4" />, label: "Attach file" },
  { icon: <MapPin className="w-4 h-4" />, label: "Embed map" },
  { icon: <ImageIcon className="w-4 h-4" />, label: "Upload image" },
  { icon: <CodeIcon className="w-4 h-4" />, label: "Format code" },
  { icon: <Smile className="w-4 h-4" />, label: "Add emoji" },
];

const additionalButtons = [
  { icon: <ListIcon className="w-4 h-4" />, label: "Add list" },
  { icon: <SettingsIcon className="w-4 h-4" />, label: "Settings" },
  { icon: <CalendarRange className="w-4 h-4" />, label: "Timeline" },
  { icon: <DownloadIcon className="w-4 h-4" />, label: "Download" },
];

const DropDownMenu = ()=>(
  <Popover>
    <PopoverTrigger asChild>
  <Button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex items-center shadow-none rounded-lg p-2 bg-background text-center text-sm font-medium focus:outline-none focus:ring-4 text-primary-400 hover:bg-primary-100 focus:ring-primary-200"
              type="button"
            >
              <Ellipsis className="h-4 w-4" />
              <span className="sr-only">Comment settings</span>
            </Button>
            </PopoverTrigger>
            <PopoverContent  className="z-10 p-0 w-36 divide-y divide-primary-50 rounded bg-background shadow">
  <div
  id="dropdownComment1"
 
>
  
  <ul
    className="text-sm text-primary-700"
    aria-labelledby="dropdownMenuIconHorizontalButton"
  >
    {['Edit' , 'Remove' ,  'Report' ].map((name,index) => (
    <li key={index}>
      <a
      href="#"
      className="block px-4 py-2 hover:bg-primary-100 hover:text-foreground"
    >
      {name}
    </a>
  </li>
   ))}
  </ul>
</div>
</PopoverContent>
</Popover>
)


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
    <MuiLayout.Section className="bg-background py-8 lg:py-16 antialiased">
      <MuiLayout.Container className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <Heading level={4} className="lg:text-2xl font-bold text-foreground">Discussion (20)</Heading>
          <div>
            <Button
              type="button"
              className="py-2 px-3 text-sm font-medium text-foreground bg-background rounded-lg border border-primary-200 focus:outline-none hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-200"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="flex">
          <div className="mr-3 shrink-0 hidden sm:block">
            <img
              className="w-9 h-9 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt="Michael Burry"
            />
          </div>
          <Form {...form}>
          <form className="mb-6 w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 w-full bg-primary-50 rounded-lg border border-primary-200">
              <div className="py-2 px-4 rounded-t-lg bg-primary-50">
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Your comment</FormLabel>
                    <FormControl>
                      <Textarea
                        className="w-full border-0 px-0 text-sm focus:outline-none focus:ring-0 shadow-none focus-visible:ring-0 bg-primary-50 text-foreground"
                        placeholder="Write a comment..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className="flex justify-between items-center py-2 px-3 border-t">
                <div className="flex flex-wrap items-center divide-primary-200 sm:divide-x">
                  <div className="flex items-center space-x-1 sm:pr-4">
                  {buttonIcons.map((button, index) => (
                      <Button
                        key={index}
                        type="button"
                        className="p-2 hover:text-primary-900 hover:bg-primary-100 text-primary-500 bg-primary-50 shadow-none rounded cursor-pointer"
                      >
                        {button.icon}
                        <span className="sr-only">{button.label}</span>
                      </Button>
                    ))}
                  </div>
                  <div className="flex-wrap items-center space-x-1 sm:pl-4 hidden sm:flex">
                  {additionalButtons.map((button, index) => (
                      <Button
                        key={index}
                        type="button"
                        className="p-2 hover:text-primary-900 hover:bg-primary-100 text-primary-500 rounded cursor-pointer bg-primary-50 shadow-none"
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
          return(
          <div key={index}>
          <article className="p-4 lg:p-6 mb-6 text-base bg-background border border-primary-200 rounded-lg">
            <div className="flex">
              <div className="mr-4">
                <div className="rounded-lg bg-primary-100 w-9 flex flex-col items-center justify-center font-medium ">
                  <button type="button" className="text-primary-500  py-1 hover:bg-primary-600 rounded-t-lg w-full focus:ring-2 focus:outline-none focus:ring-primary-50 flex justify-center">
                    <PlusIcon className="w-4 h-4" />
                  </button>
                  <span className="text-foreground font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm ">{comment.upvotes}</span>
                  <button type="button" className="text-primary-500 py-1  rounded-b-lg hover:bg-primary-200 w-full focus:ring-2 focus:outline-none focus:ring-primary-50 flex justify-center">
                    <MinusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="w-full">
                <footer className="flex justify-between items-center mb-2 w-full">
                  <a href="#" className="flex items-center">
                    <img className="mr-2 w-6 h-6 rounded-full" src={comment.profilePicture} alt={comment.name} />
                    <Text className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-foreground">
                      <span className="font-semibold">{comment.name}</span>
                      <time className="text-sm text-primary-600  md:ml-2" dateTime={comment.datetime} title={comment.title}>{comment.date}</time>
                    </Text>
                  </a>
                  <DropDownMenu />
                </footer>
                <Text className="text-primary-500">{comment.content}</Text>
                <div className="flex items-center mt-4 space-x-4">
                  <button type="button" className="flex items-center text-sm text-primary-500 hover:underline font-medium">
                    <MessageSquareMore className="w-3.5 h-3.5 mr-1" />
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </article>
          {comment.replies && comment.replyList.map((reply)=>(
            <article key={index} className="p-4 ml-6 lg:p-6 mb-6 text-base bg-background border border-primary-200 rounded-lg">
            <div className="flex">
              <div className="mr-4">
                <div className="rounded-lg bg-primary-100 w-9 flex flex-col items-center justify-center font-medium ">
                  <button type="button" className="text-primary-500  py-1 hover:bg-primary-600 rounded-t-lg w-full focus:ring-2 focus:outline-none focus:ring-primary-50 flex justify-center">
                    <PlusIcon className="w-4 h-4" />
                  </button>
                  <span className="text-foreground font-medium py-1 px-2 lg:px-0 text-xs lg:text-sm ">{reply.upvotes}</span>
                  <button type="button" className="text-primary-500 py-1  rounded-b-lg hover:bg-primary-200 w-full focus:ring-2 focus:outline-none focus:ring-primary-50 flex justify-center">
                    <MinusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="w-full">
                <footer className="flex justify-between items-center mb-2 w-full">
                  <a href="#" className="flex items-center">
                    <img className="mr-2 w-6 h-6 rounded-full" src={reply.profilePicture} alt={reply.name} />
                    <Text className="inline-flex flex-col md:flex-row items-start mr-3 text-sm text-foreground">
                      <span className="font-semibold">{reply.name}</span>
                      <time className="text-sm text-primary-600  md:ml-2" dateTime={reply.datetime} title={reply.title}>{reply.date}</time>
                    </Text>
                  </a>
                  <DropDownMenu />
                </footer>
                <Text className="text-primary-500">{reply.content}</Text>
                <div className="flex items-center mt-4 space-x-4">
                  <button type="button" className="flex items-center text-sm text-primary-500 hover:underline font-medium">
                    <MessageSquareMore className="w-3.5 h-3.5 mr-1" />
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </article>
          ))}
          </div>
        ) })}
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};



