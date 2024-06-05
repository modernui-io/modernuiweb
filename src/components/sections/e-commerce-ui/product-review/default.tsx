import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeCheck, CloudUpload } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

//component imports
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Ratings } from "~/components/ui/custom/ratings";
import { Text } from "~/components/ui/custom/text";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
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
import { Textarea } from "~/components/ui/textarea";
import Mac1 from "~/lib/assets/images/imac-photo-1.jpg";
import Mac2 from "~/lib/assets/images/imac-photo-2.jpg";

interface ReviewCardProps {
  name: string;
  date: string;
  review: string[];
  helpfulYes: number;
  helpfulNo: number;
  verified: boolean;
  images: StaticImageData[];
}

interface ReviewListWrapperProps {
  reviews: ReviewCardProps[];
}

const RatingData = [
  { rating: 5, percentage: 20, count: 239 },
  { rating: 4, percentage: 60, count: 432 },
  { rating: 3, percentage: 15, count: 53 },
  { rating: 2, percentage: 5, count: 32 },
  { rating: 1, percentage: 0, count: 13 },
];

const reviewsData = [
  {
    name: "Micheal Gough",
    date: "November 18 2023 at 15:35",
    review: [
      "My old IMAC was from 2013. This replacement was well needed. Very fast, and the color matches my office set up perfectly. The display is out of this world and I&apos;m very happy with this purchase.",
    ],
    helpfulYes: 3,
    helpfulNo: 0,
    verified: true,
    images: [],
  },
  {
    name: "Jese Leos",
    date: "November 18 2023 at 15:35",
    review: [
      "It&apos;s fancy, amazing keyboard, matching accessories. Super fast, batteries last more than usual, everything runs perfect in this computer. Highly recommend!",
    ],
    helpfulYes: 1,
    helpfulNo: 0,
    verified: true,
    images: [Mac1, Mac2],
  },
  {
    name: "Bonnie Green",
    date: "November 18 2023 at 15:35",
    review: [
      "My old IMAC was from 2013. This replacement was well needed. Very fast, and the colour matches my office set up perfectly. The display is out of this world and I&apos;m very happy with this purchase.",
    ],
    helpfulYes: 0,
    helpfulNo: 0,
    verified: true,
    images: [],
  },
  {
    name: "Roberta Casas",
    date: "November 18 2023 at 15:35",
    review: [
      "I have used earlier Mac computers in my university work for a number of years and found them easy to use.The iMac 2021 is no exception. It works straight out of the box giving superb definition from the HD screen.",
      "Basic tools such as a browser (Safari) and a mail client are included in the system. Microsoft Office apps can be downloaded from the App Store though they may only work in read-only mode unless you take out a subscription. The instruction manual that comes with it is the size of a piece of toilet paper but the proper user guide is on-line.",
    ],
    helpfulYes: 1,
    helpfulNo: 0,
    verified: true,
    images: [],
  },
  {
    name: "Neil Sims",
    date: "November 18 2023 at 15:35",
    review: [
      "I replaced my 11 year old iMac with the new M1 Apple. I wanted to remain with Apple as my old one is still working perfectly and all Apple products are so reliable. Setting up was simple and fast and transferring everything from my previous iMac worked perfectly.",
    ],
    helpfulYes: 1,
    helpfulNo: 0,
    verified: true,
    images: [],
  },
];

const ReviewCard = (props: ReviewCardProps) => {
  const { name, date, review, helpfulYes, helpfulNo, verified, images } = props;
  return (
    <div className="gap-3 py-6 sm:flex sm:items-start">
      <div className="shrink-0 space-y-2 sm:w-48 md:w-72">
        <div className="flex items-center gap-0.5">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className="size-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            ))}
        </div>

        <div className="space-y-0.5">
          <Text className="text-base font-semibold text-secondary-foreground">
            {name}
          </Text>
          <Text className="text-sm font-normal text-muted-foreground">
            {date}
          </Text>
        </div>

        {verified && (
          <div className="inline-flex items-center gap-1">
            <BadgeCheck className="size-5 text-dark-tremor-brand" />
            <Text className="text-sm font-medium text-secondary-foreground">
              Verified purchase
            </Text>
          </div>
        )}
      </div>

      <div className="mt-4 min-w-0 flex-1 space-y-4 sm:mt-0">
        {review.map((item, index) => (
          <Text
            className="mb-2 text-base font-normal text-muted-foreground"
            key={index}
          >
            {item}
          </Text>
        ))}

        {images && images.length > 0 && (
          <div className="flex gap-2">
            {images.map((image, index) => (
              <div key={index}>
                <Image
                  height={32}
                  width={20}
                  className="h-32 w-20 rounded-lg object-cover"
                  src={image}
                  alt="review image"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
          <Text className="text-sm font-medium text-muted-foreground">
            Was it helpful to you?
          </Text>
          <div className="flex items-center">
            <input
              id="reviews-radio-yes"
              type="radio"
              value=""
              name="reviews-radio"
              className="size-4 bg-primary-100 text-primary-600"
            />
            <label
              htmlFor="reviews-radio-yes"
              className="ms-2 text-sm font-medium text-secondary-foreground"
            >
              {" "}
              Yes: {helpfulYes}{" "}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="reviews-radio-no"
              type="radio"
              value=""
              name="reviews-radio"
              className="size-4 bg-primary-100 text-primary-600"
            />
            <label
              htmlFor="reviews-radio-no"
              className="ms-2 text-sm font-medium text-secondary-foreground"
            >
              No: {helpfulNo}{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewListWrapper = (props: ReviewListWrapperProps) => {
  const { reviews } = props;
  return (
    <div className="mt-6 divide-y divide-primary-200">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

const formSchema = z.object({
  title: z.string(),
  description: z.string(),
  file: z.any().optional(),
  terms: z.boolean(),
});

const ReviewDialog = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      terms: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="block rounded-lg bg-primary-700 px-5 py-2 text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300">
          Write a customer review
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {" "}
            <Heading level={4} className="mb-1 font-semibold">
              Add a review for:
            </Heading>
          </DialogTitle>
          <DialogDescription>
            {" "}
            <Link
              href="#"
              className="font-medium text-primary-700 hover:underline"
            >
              Apple iMac 24&quot; All-In-One Computer, Apple M1, 8GB RAM, 256GB
              SSD
            </Link>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="p-4 md:p-5" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <div className="flex items-center">
                  <Ratings rating={3} totalStars={5} variant="yellow" />
                  <span className="ms-2 text-lg font-bold">3.0 out of 5</span>
                </div>
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium"
                >
                  Review title
                </Label>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">title</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="title"
                          {...field}
                          className="block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-600 focus:ring-primary-600"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium"
                >
                  Review description
                </Label>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id="description"
                          rows={6}
                          className="mb-2 block w-full rounded-lg border border-primary-300 bg-primary-50 p-2.5 text-sm text-foreground focus:border-primary-500 focus:ring-primary-500"
                        />
                      </FormControl>
                      <FormMessage>
                        <Text className="ms-auto text-xs text-primary-500">
                          Problems with the product or delivery?{" "}
                          <Link
                            href="#"
                            className="text-primary-600 hover:underline"
                          >
                            Send a report
                          </Link>
                          .
                        </Text>
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <Label
                  htmlFor="dropzone-file"
                  className="mb-2 block text-sm font-medium"
                >
                  Add real photos of the product to help other customers{" "}
                  <span className="text-primary-500">(Optional)</span>
                </Label>
                <div className="flex w-full items-center justify-center">
                  <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="sr-only">Email</FormLabel>
                        <FormControl>
                          <Label
                            htmlFor="dropzone-file"
                            className=" flex h-52 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary-300 bg-primary-50 hover:bg-primary-100"
                          >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                              <CloudUpload className="mb-4 size-8 text-primary-500" />
                              <Text className="mb-2 text-sm text-primary-500 ">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </Text>
                              <Text className="text-xs text-primary-500">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                              </Text>
                            </div>
                            <Input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              {...field}
                            />
                          </Label>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center">
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            id="review-checkbox"
                            type="checkbox"
                            value=""
                            className="size-4 rounded border-primary-300 bg-primary-100 text-primary-600 focus:ring-2 focus:ring-primary-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Label
                    htmlFor="review-checkbox"
                    className="ms-2 text-sm font-medium text-primary-500"
                  >
                    By publishing this review you agree with the{" "}
                    <Link href="#" className="text-primary-600 hover:underline">
                      terms and conditions
                    </Link>
                    .
                  </Label>
                </div>
              </div>
            </div>
            <div className="border-t border-primary-200 pt-4  md:pt-5">
              <Button
                type="submit"
                className="me-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-background hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Add review
              </Button>
              <Button className="me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4">
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const stars = Array(5)
  .fill(null)
  .map((_, index) => (
    <svg
      key={index}
      className="size-4 text-yellow-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
    </svg>
  ));

const ReviewDetail = RatingData.map((review, index) => (
  <div key={index} className="flex items-center gap-2">
    <Text className="w-2 shrink-0 text-start text-sm font-medium leading-none text-secondary-foreground">
      {review.rating}
    </Text>
    {stars}
    <div className="h-1.5 w-80 rounded-full bg-primary-200">
      <div
        className="h-1.5 rounded-full bg-yellow-300"
        style={{ width: `${review.percentage}%` }}
      ></div>
    </div>
    <Link
      href="#"
      className="w-8 shrink-0 text-right text-sm font-medium leading-none text-muted-foreground hover:underline sm:w-auto sm:text-left"
    >
      {review.count} reviews
    </Link>
  </div>
));

const DefaultReview = () => {
  return (
    <MuiLayout.Container className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="flex items-center gap-2">
          <Heading level={3} className="font-semibold">
            Reviews
          </Heading>
          <div className="mt-2 flex items-center gap-2 sm:mt-0">
            {stars}
            <Text className="text-sm font-medium leading-none text-muted-foreground">
              (4.6)
            </Text>
            <Link
              href="#"
              className="text-sm font-medium leading-none text-secondary-foreground underline hover:no-underline"
            >
              {" "}
              645 Reviews{" "}
            </Link>
          </div>
        </div>

        <div className="my-6 gap-8 sm:flex sm:items-start md:my-8">
          <div className="shrink-0 space-y-4">
            <Text className="text-2xl font-semibold leading-none text-secondary-foreground">
              4.65 out of 5
            </Text>
            <ReviewDialog />
          </div>
          <div className="mt-6 min-w-0 flex-1 space-y-3 sm:mt-0">
            {ReviewDetail}
          </div>
        </div>
      </div>
      <ReviewListWrapper reviews={reviewsData} />
      <div className="mt-6 text-center">
        <button
          type="button"
          className="mb-2 me-2 rounded-lg border border-primary-200 bg-background px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-primary-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-primary-300"
        >
          View more reviews
        </button>
      </div>
    </MuiLayout.Container>
  );
};

export default DefaultReview;
