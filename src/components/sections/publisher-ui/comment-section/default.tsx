"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Ellipsis ,MessageSquareMore } from 'lucide-react';

//component imports
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
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


const formSchema = z.object({
  comment: z.string().optional(),
});

const comments = [
  {
    profilePic :  "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
    name : "Michael Gough" ,
    date :  "Feb. 8, 2022", 
    comment : "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy." ,
    replies : true,
    replyList : [
      {
        profilePic :  "https://xsgames.co/randomusers/assets/avatars/female/4.jpg",
        name : "Jese Leos" ,
        date :  "Feb. 12, 2022", 
        comment : "Much appreciated! Glad you liked it ☺️" ,
      }
    ],
  },
  {
    profilePic :  "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
    name : "Bonnie Green" ,
    date :  "Mar. 12, 2022", 
    comment : "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy." ,
    replies : false,
    replyList : [],
  },
  {
    profilePic :  "https://xsgames.co/randomusers/assets/avatars/female/1.jpg",
    name : "Helene Engels" ,
    date :  "Jun. 23, 2022", 
    comment : "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects." ,
    replies : false,
    replyList : [],
  }
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
    <MuiLayout.Section className=" py-8 antialiased bg-background lg:py-16">
      <MuiLayout.Container className="mx-auto max-w-2xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <Heading level={4} className="font-bold text-foreground lg:text-2xl">
            Discussion (20)
          </Heading>
        </div>
        <Form {...form}>
        <form className="mb-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-primary-50 px-4 py-2">
            
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
          <Button
            type="submit"
            className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium hover:bg-primary-800 focus:ring-4 focus:ring-primary-200"
          >
            Post comment
          </Button>
        </form>
        </Form> 
        {comments.map(({comment,date,name,profilePic,replies,replyList} ,index)=>{
          return (<div key={index}>
            <article className={`rounded-lg  p-6 text-base bg-background ${index !== 0 ? "mb-3 border-t border-gray-200 " : ""}`}>
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-foreground">
                <img
                  className="mr-2 h-6 w-6 rounded-full"
                  src={profilePic}
                  alt="Michael Gough"
                />
               {name}
              </p>
              <p className="text-sm text-primary-500">
                <time dateTime="2022-02-08" title="February 8th, 2022">
                  {date}
                </time>
              </p>
            </div>
           <DropDownMenu />
          </footer>
          <p className="text-primary-600">
           {comment}
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <button
              type="button"
              className="flex items-center text-sm font-medium text-primary-500 hover:underline"
            >
              <MessageSquareMore className="mr-1.5 h-3.5 w-3.5" />
              Reply
            </button>
          </div>
        </article> {replies && replyList.map(({ profilePic ,
        name ,
        date , 
        comment}) => (
          <article key={index} className="mb-3 ml-6 rounded-lg bg-background p-6 text-base lg:ml-12">
          <footer className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-3 inline-flex items-center text-sm font-semibold text-foreground">
                <img
                  className="mr-2 h-6 w-6 rounded-full"
                  src={profilePic}
                  alt="Jese Leos"
                />
                {name}
              </p>
              <p className="text-sm text-primary-600 ">
                <time dateTime="2022-02-12" title="February 12th, 2022">
                  Feb. 12, 2022
                </time>
              </p>
            </div>
            <DropDownMenu/>
          </footer>
          <p className="text-primary-500">
           {comment}
          </p>
          <div className="mt-4 flex items-center space-x-4">
            <button
              type="button"
              className="flex items-center text-sm font-medium text-primary-500 hover:underline"
            >
              <MessageSquareMore className="mr-1.5 h-3.5 w-3.5" />
              Reply
            </button>
          </div>
        </article>
        ))}</div>)
        })}
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
