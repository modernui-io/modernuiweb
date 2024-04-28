import { ArrowUpRight } from "lucide-react";

import * as MuiLayout from "~/components/layouts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Heading } from "~/components/ui/custom/headings";

interface FAQItem {
  question: string;
  answer: string;
  link?: string;
}

const content: FAQItem[] = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Ut enim ad minim veniam?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const FAQ = () => {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container>
        <div className="not-prose flex flex-col gap-6">
          <Heading className="text-4xl">Frequently Asked Questions</Heading>
          <Heading level={4} className="text-2xl font-light opacity-70">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our
            customer support team.
          </Heading>
          <div className="mt-6 flex flex-col gap-6 md:mt-12">
            {content.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={item.question}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:w-3/4">
                    {item.answer}
                    {item.link && (
                      <a
                        href={item.link}
                        className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                      >
                        Learn more <ArrowUpRight className="ml-1" />
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default FAQ;
