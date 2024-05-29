import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { Ellipsis, MessageSquareReply } from "lucide-react";

// Components Import
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
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
// Image Imports
import ProfilePic1 from "~/lib/assets/images/profile-picture-2.jpg";
import ProfilePic3 from "~/lib/assets/images/profile-picture-3.jpg";
import ProfilePic4 from "~/lib/assets/images/profile-picture-4.jpg";
import ProfilePic2 from "~/lib/assets/images/profile-picture-5.jpg";
import Typography2 from "~/lib/assets/images/typography-image-2.png";

interface TableData {
  country: string;
  date: string;
  amount: string;
}

const TableData: TableData[] = [
  {
    country: "United States",
    date: "April 21, 2021",
    amount: "$2,300",
  },
  {
    country: "Canada",
    date: "May 31, 202",
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

// const CommentData: CommentData[] = [
//   {
//     profilePic: ProfilePic1,
//     name: "Michael Gough",
//     date: "Feb. 8, 2022",
//     comment:
//       "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
//     reply: [
//       {
//         profilePic: ProfilePic2,
//         name: "Jese Leos",
//         date: "Feb. 12, 2022",
//         comment: "Much appreciated! Glad you liked it ☺️",
//       },
//     ],
//   },
//   {
//     profilePic: ProfilePic3,
//     name: "Bonnie Green",
//     date: "Mar. 12, 2022",
//     comment:
//       "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
//     reply: [],
//   },
//   {
//     profilePic: ProfilePic4,
//     name: "Helene Engels",
//     date: "Jun. 23, 2022",
//     comment:
//       "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
//     reply: [],
//   },
// ];

const DropDownMenu = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        id="dropdownComment1Button"
        data-dropdown-toggle="dropdownComment1"
        className="inline-flex items-center rounded-lg bg-background p-2 text-center text-sm font-medium text-primary-400 shadow-none hover:bg-primary-100 focus:outline-none"
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

const BlogBody = () => {
  return (
    <div>
      <Heading className="mb-4 font-extrabold tracking-tight" level={2}>
        Getting started with Flowbite
      </Heading>
      <Text className="mb-4 md:text-lg">
        First of all you need to understand how Flowbite works. This library is
        not another framework. Rather, it is a set of components based on
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
        project with Flowbite I recommend you to follow the build tools steps so
        that you can purge and minify the generated CSS.
      </Text>
      <Text className="mb-4 md:text-lg">
        You&#39;ll also receive a lot of useful application UI, marketing UI,
        and e-commerce pages that can help you get started with your projects
        even faster. You can check out this comparison table to better
        understand the differences between the open-source and pro version of
        Flowbite.
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
          &quot;Flowbite is just awesome. It contains tons of predesigned
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
      {/* <section>
        <div className="mb-6 flex items-center justify-between">
          <Heading level={2} className="font-bold lg:text-2xl">
            Discussion (20)
          </Heading>
        </div>
        <form className="mb-6">
          <div className="mb-4 rounded-lg border border-border bg-background">
            <Textarea
              className="w-full border-0 bg-background p-2 text-sm text-secondary-foreground focus:ring-0"
              placeholder="Write a comment..."
              id="message"
              required
            />
          </div>
          <Button
            type="submit"
            className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium text-background hover:bg-primary-800 focus:ring-4"
          >
            Post comment
          </Button>
        </form>

        {CommentData.map(
          ({ profilePic, name, date, comment, reply }, index) => (
            <>
              <article
                className="rounded-lg bg-background p-6 text-base"
                key={index}
              >
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Text className="mr-3 inline-flex items-center text-sm font-semibold">
                      <Image
                        className="mr-2 size-6 rounded-full object-cover"
                        src={profilePic}
                        alt="Michael Gough"
                      />
                      {name}
                    </Text>
                    <Text className="text-sm text-muted-foreground">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        {date}
                      </time>
                    </Text>
                  </div>
                  <DropDownMenu />
                </footer>
                <Text>{comment}</Text>
                <div className="mt-4 flex items-center space-x-4">
                  <button
                    type="button"
                    className="flex items-center text-sm font-medium text-muted-foreground hover:underline"
                  >
                    <MessageSquareReply className="mr-1.5 size-3 text-muted-foreground" />
                    Reply
                  </button>
                </div>
              </article>
              {reply &&
                reply.length > 0 &&
                reply.map(({ name, date, profilePic, comment }, index) => (
                  <article
                    className="mb-6 ml-6 rounded-lg bg-background p-6 text-base lg:ml-12"
                    key={index}
                  >
                    <footer className="mb-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <Text className="mr-3 inline-flex items-center text-sm font-semibold">
                          <Image
                            className="mr-2 size-6 rounded-full object-cover"
                            src={profilePic}
                            alt="Profile Pic"
                          />
                          {name}
                        </Text>
                        <Text className="text-sm text-muted-foreground">
                          <time
                            dateTime="2022-02-08"
                            title="February 8th, 2022"
                          >
                            {date}
                          </time>
                        </Text>
                      </div>
                      <DropDownMenu />
                    </footer>
                    <Text>{comment}</Text>
                    <div className="mt-4 flex items-center space-x-4">
                      <button
                        type="button"
                        className="flex items-center text-sm font-medium text-muted-foreground hover:underline"
                      >
                        <MessageSquareReply className="mr-1.5 size-3 text-muted-foreground" />
                        Reply
                      </button>
                    </div>
                  </article>
                ))}
              <hr className="border-border sm:mx-auto" />
            </>
          ),
        )}
      </section> */}
    </div>
  );
};

export default BlogBody;
