import {
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
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

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

const comments = [
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    name: "Michael Gough",
    datetime: "2022-02-08",
    title: "February 8th, 2022",
    date: "Feb. 8, 2022",
    content: "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
    likes: 37,
  },
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    name: "Jese Leos",
    datetime: "2022-02-12",
    title: "February 12th, 2022",
    date: "Feb. 12, 2022",
    content: "Much appreciated! Glad you liked it ☺️",
    likes: 9,
    isReply : true,
  },
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    name: "Bonnie Green",
    datetime: "2022-03-12",
    title: "March 12th, 2022",
    date: "Mar. 12, 2022",
    content: "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
    likes: 22,
  },
  {
    profilePicture: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    name: "Helene Engels",
    datetime: "2022-06-23",
    title: "June 23rd, 2022",
    date: "Jun. 23, 2022",
    content: "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
    likes: 18,
  },
];

const formSchema = z.object({
  firstName: z.string().min(1),
  email : z.string().email({message : "Please enter a valid email"}),
  website : z.string().optional(),
  message : z.string().min(1)
});

const WordpressComments = () => {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        firstName: "",
        email : "",
        website : "",
        message : "",
      },
    });
  
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
    }


  return (
    <MuiLayout.Section className="text-foreground bg-background py-8 lg:py-16 antialiased">
      <MuiLayout.Container className="mx-auto max-w-screen-md px-4">
        <div className="flex justify-between items-center mb-6">
          <Heading level={4} className="font-bold text-foreground lg:text-2xl ">Leave a reply</Heading>
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6 p-6 mx-auto mb-6 bg-background rounded-lg border border-primary-200 shadow-sm grid-cols sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="firstName" className="block mb-2 text-sm font-medium text-foreground">First Name</Label>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">First Name</FormLabel>
                    <FormControl>
                      <Input
                      id="firstName"
              className="block p-3 w-full text-sm text-foreground bg-primary-50 rounded-lg border border-primary-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"                        
                        placeholder="Bonnie Green"
                        {...field}
                        
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                </div>
          <div>
            <Label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">Your email</Label>
             <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Your email</FormLabel>
                    <FormControl>
                      <Input
                      id="email"
                      className="block p-3 w-full text-sm text-foreground bg-primary-50 rounded-lg border border-primary-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="name@flowbite.com"
                        {...field}                       
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
          </div>
          <div>
            <Label htmlFor="website" className="block mb-2 text-sm font-medium text-foreground ">Website</Label>
            <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">First Name</FormLabel>
                    <FormControl>
                      <Input
                      id="website"
                      className="block p-3 w-full text-sm text-foreground bg-primary-50 rounded-lg border border-primary-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="www.yoursite.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">Your message</Label>
               <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">First Name</FormLabel>
                    <FormControl>
                      <Textarea
                      id="Textarea"
                      rows={5}
                      className="block p-2.5 w-full text-sm text-foreground bg-primary-50 rounded-lg shadow-sm border border-primary-300 focus:ring-primary-500 focus:border-primary-500"
                      placeholder=""
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
            // className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Post comment
          </Button>
        </form>
        </Form>
        {comments.map((comment, index) => (
          <article key={index} className={`p-6 mb-6 ${comment.isReply ? 'ml-6 lg:ml-12' : ''} text-base bg-background rounded-lg border border-primary-200 shadow-sm`}>
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img className="mr-2 w-8 h-8 rounded-lg" src={comment.profilePicture} alt={comment.name} />
                <div>
                  <span className="text-sm font-semibold text-foreground">{comment.name}</span>
                  <Text className="text-sm text-primary-500">
                    <time dateTime={comment.datetime} title={comment.title}>{comment.date}</time>
                  </Text>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button type="button" className="flex items-center text-sm text-primary-500 hover:underline font-medium">
                  <Heart className="mr-1 w-3 h-3" />
                  {comment.likes}
                </button>
                <DropDownMenu />
              </div>
            </footer>
            <Text className="text-primary-500">{comment.content}</Text>
            <button type="button" className="mt-4 text-sm text-foreground hover:underline font-medium">
              Reply
            </button>
          </article>
        ))}
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default WordpressComments;