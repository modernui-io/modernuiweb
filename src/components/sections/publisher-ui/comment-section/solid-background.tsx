"use client";

import {
  Paperclip,
  MapPin,
  Image as ImageIcon,
  Heart,
  MessageCircle,
  MoreHorizontal as MoreIcon,
  Ellipsis
} from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Popover, PopoverTrigger ,PopoverContent} from "~/components/ui/popover";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

const formSchema = z.object({
  comment: z.string().optional(),
});


const comments = [
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    name: "Michael Gough",
    datetime: "2022-02-08",
    title: "February 8th, 2022",
    date: "Feb. 8, 2022",
    content: "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    likes: 11,
    replies : true,
    replyList : [
      {
        profilePicture: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
        name: "Jese Leos",
        datetime: "2022-02-12",
        title: "February 12th, 2022",
        date: "Feb. 12, 2022",
        content: "Much appreciated! Glad you liked it ☺️",
        likes: 3,
      },
    ]
  },
  
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    name: "Bonnie Green",
    datetime: "2022-03-12",
    title: "March 12th, 2022",
    date: "Mar. 12, 2022",
    content: "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
    likes: 24,
  },
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    name: "Helene Engels",
    datetime: "2022-06-23",
    title: "June 23rd, 2022",
    date: "Jun. 23, 2022",
    content: "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
    likes: 9,
  },
];

const DropDownMenu = ()=>(
  <Popover>
    <PopoverTrigger asChild>
  <Button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex items-center shadow-none rounded-lg p-2 bg-primary-50 text-center text-sm font-medium focus:outline-none focus:ring-4 text-primary-400 hover:bg-primary-100 focus:ring-primary-200"
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
    <MuiLayout.Section className="bg-background py-8 lg:py-16 antialiased">
      <MuiLayout.Container className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <Heading level={4} className="lg:text-2xl font-bold text-foreground">Discussion (20)</Heading>
          <div>
            <Button
              type="button"
              className="py-2 px-3 text-sm font-medium text-foreground bg-background rounded-lg border border-primary-200 focus:outline-none hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-200 "
            >
              Subscribe
            </Button>
          </div>
        </div>
        <Form {...form}>
        <form className="mb-6" onSubmit ={form.handleSubmit(onSubmit)}>
          <div className="mb-4 w-full bg-primary-50 rounded-lg border border-primary-200">
            <div className="py-2 px-4 bg-primary-50 rounded-t-lg ">
                <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Your comment</FormLabel>
                    <FormControl>
                      <Textarea
                      id="comment"
                        className="w-full border-0 px-0 text-sm focus:outline-none focus:ring-0 shadow-none focus-visible:ring-0 bg-primary-50 text-foreground"
                        placeholder="Write a comment..."
                        {...field}
                        rows={6}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>
            <div className="flex justify-between items-center py-2 px-3 border-t border-primary-300">
              <Button
                type="submit"
                className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-200"               
              >
                Post comment
              </Button>
              <div className="flex pl-0 space-x-1 sm:pl-2">
                <Button
                  type="button"
                  className="inline-flex justify-center p-2 bg-primary-50 shadow-none text-primary-500 rounded cursor-pointer hover:text-primary-900 hover:bg-primary-100"
                >
                  <Paperclip className="w-4 h-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
                <button
                  type="button"
                  className="inline-flex bg-primary-50 shadow-none justify-center p-2 text-primary-500 rounded cursor-pointer hover:text-primary-900 hover:bg-primary-100"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="sr-only">Set location</span>
                </button>
                <button
                  type="button"
                  className="inline-flex bg-primary-50 shadow-none justify-center p-2 text-primary-500 rounded cursor-pointer hover:text-primary-900 hover:bg-primary-100"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span className="sr-only">Upload image</span>
                </button>
              </div>
            </div>
          </div>
        </form>
        </Form>
        {comments.map((comment, index) => (
          <><article key={index} className={`p-6 mb-6 text-base bg-primary-50 rounded-lg`}>
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <Text className="inline-flex items-center mr-3 text-sm text-foreground font-semibold">
                  <img className="mr-2 w-6 h-6 rounded-full" src={comment.profilePicture} alt={comment.name} />
                  {comment.name}
                </Text>
                <Text className="text-sm text-primary-600">
                  <time dateTime={comment.datetime} title={comment.title}>{comment.date}</time>
                </Text>
              </div>
             <DropDownMenu />
            </footer>
            <Text className="text-primary-500">{comment.content}</Text>
            <div className="flex items-center mt-4 space-x-4">
              <button type="button" className="flex items-center text-sm text-primary-500 hover:underline font-medium">
                <Heart className="w-3 h-3 mr-1" />
                {comment.likes} Likes
              </button>
              <button type="button" className="flex items-center text-sm text-primary-500 hover:underline font-medium">
                <MessageCircle className="w-3 h-3 mr-1.5" />
                Reply
              </button>
            </div>
          </article>
          {comment.replies && comment.replyList.map((reply)=>(
             <article key={index} className={`p-6 mb-6 ml-12 text-base bg-primary-50 rounded-lg`}>
             <footer className="flex justify-between items-center mb-2">
               <div className="flex items-center">
                 <Text className="inline-flex items-center mr-3 text-sm text-foreground font-semibold">
                   <img className="mr-2 w-6 h-6 rounded-full" src={reply.profilePicture} alt={reply.name} />
                   {reply.name}
                 </Text>
                 <Text className="text-sm text-primary-500">
                   <time dateTime={reply.datetime} title={reply.title}>{reply.date}</time>
                 </Text>
               </div>
               <DropDownMenu />
             </footer>
             <Text className="text-primary-500">{reply.content}</Text>
             <div className="flex items-center mt-4 space-x-4">
               <button type="button" className="flex items-center text-sm text-primary-500 hover:underline font-medium">
                 <Heart className="w-3 h-3 mr-1" />
                 {reply.likes} Likes
               </button>
               <button type="button" className="flex items-center text-sm text-primary-500 hover:underline font-medium">
                 <MessageCircle className="w-3 h-3 mr-1.5" />
                 Reply
               </button>
             </div>
           </article>
          ))}</>
        ))}
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

