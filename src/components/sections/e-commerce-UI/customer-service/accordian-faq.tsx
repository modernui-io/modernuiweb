import React, { useState } from "react";
import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

const AccordianFaqService = () => {
  const QuestionAnswer = () => {
    return (
      <div className="space-y-4 border-b border-primary-200 py-5">
        <div className="flex items-center gap-3">
          <Heading level={4} className="text-base font-semibold">
            ModernUI Web Experts
          </Heading>
          <Text className="text-sm font-normal text-muted-foreground">
            November 20 2023 • 12:45
          </Text>
        </div>
        <Text className="mb-4 text-base font-normal text-muted-foreground">
          <span className="font-semibold text-secondary-foreground">
            Apple Silicon:
          </span>
          Apple has transitioned its Mac lineup from Intel processors to
          custom-designed Apple Silicon chips. The latest iMac models might
          feature the latest iterations of these chips, offering improved
          performance and efficiency.
        </Text>
        <Text className="text-base font-normal text-muted-foreground">
          <span className="font-semibold text-secondary-foreground">
            Slimmer Design:
          </span>
          Apple often focuses on making its products thinner and lighter. Recent
          iMac models might feature a slimmer profile compared to their
          predecessors.
        </Text>
        <Text className="text-base font-normal text-muted-foreground">
          <span className="font-semibold text-secondary-foreground">
            Vivid Retina Display:
          </span>
          iMacs typically feature high-resolution Retina displays with vibrant
          colors and excellent contrast. The latest models might offer
          improvements in display technology for even better image quality.
        </Text>
        <div className="flex items-center gap-4">
          <Text className="text-sm font-medium text-muted-foreground">
            Was it helpful to you?
          </Text>
          <div className="flex items-center">
            <input
              id="general-radio-3"
              type="radio"
              name="general-radio-2"
              className="size-4 border-primary-300 bg-input text-primary-600"
            />
            <label
              htmlFor="general-radio-3"
              className="ms-2 text-sm font-medium text-foreground"
            >
              Yes: 16
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="general-radio-4"
              type="radio"
              name="general-radio-2"
              className="size-4 border-primary-300 bg-input text-primary-600"
            />
            <label
              htmlFor="general-radio-4"
              className="ms-2 text-sm font-medium text-foreground"
            >
              No: 3
            </label>
          </div>
        </div>
      </div>
    );
  };

  const Answer = () => {
    return (
      <div className="space-y-4 border-b border-primary-200 py-5 ">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-secondary-foreground">
            ModernUI Web Shop
          </h3>
          <Text className="text-sm font-normal text-muted-foreground">
            November 20 2023 • 12:45
          </Text>
        </div>
        <Text className="text-base font-normal text-muted-foreground">
          The iMac is a line of all-in-one desktop computers designed and
          produced by Apple Inc. It sets itself apart by integrating the
          display, processing unit, and other components into a single sleek
          enclosure, minimizing cable clutter and providing a seamless user
          experience.
        </Text>
        <div className="flex items-center gap-4">
          <Text className="text-sm font-medium text-muted-foreground">
            Was it helpful to you?
          </Text>
          <div className="flex items-center">
            <input
              id="general-radio-1"
              type="radio"
              name="general-radio"
              className="size-4 border-primary-300 bg-input text-primary-600"
            />
            <label
              htmlFor="general-radio-1"
              className="ms-2 text-sm font-medium text-foreground"
            >
              Yes: 9
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="general-radio-2"
              type="radio"
              name="general-radio"
              className="size-4 border-primary-300 bg-input text-primary-600"
            />
            <label
              htmlFor="general-radio-2"
              className="ms-2 text-sm font-medium text-foreground"
            >
              No: 0
            </label>
          </div>
        </div>
      </div>
    );
  };

  const questions = [
    {
      question: "What is an iMac, and how does it differ from other computers?",
      answer: <Answer />,
      author: "ModernUI Web Shop",
      date: "November 20 2023 • 12:45",
      helpfulYes: 9,
      helpfulNo: 0,
    },
    {
      question: "What are the key features of the latest iMac models?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
    {
      question: "What is an iMac, and how does it differ from other computers?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Shop",
      date: "November 20 2023 • 12:45",
      helpfulYes: 9,
      helpfulNo: 0,
    },
    {
      question: "What are the key features of the latest iMac models?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
    {
      question:
        "What is the Retina display on an iMac, and why is it significant?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
    {
      question:
        "How is the performance of an iMac for tasks like video editing, graphic design, and gaming?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
    {
      question:
        "Can I upgrade the components of my iMac, such as RAM or storage?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
    {
      question: "What is the role of Thunderbolt ports on an iMac?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
    {
      question: "How does the macOS operating system differ from Windows?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
    {
      question: "What security features does the iMac offer?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
    {
      question:
        "Can I use my iMac with other Apple devices, such as iPhone and iPad?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
    {
      question: "What support options are available for iMac users?",
      answer: <QuestionAnswer />,
      author: "ModernUI Web Experts",
      date: "November 20 2023 • 12:45",
      helpfulYes: 16,
      helpfulNo: 3,
    },
  ];

  return (
    <MuiLayout.Section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl space-y-6 px-4 2xl:px-0">
        <Heading level={3} className="font-semibold">
          General questions
        </Heading>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="hover:no-underline">
                <span className="text-xl font-semibold leading-7 text-muted-foreground">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-6 sm:mt-8">
          <Text className="text-lg font-normal text-muted-foreground">
            Didn&apos;t find the answer?
            <Link
              href="#"
              title=""
              className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              &nbsp;Ask a question
            </Link>
          </Text>
        </div>
      </div>
    </MuiLayout.Section>
  );
};

export default AccordianFaqService;
