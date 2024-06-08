import Link from "next/link";

// Icons
import { ChevronRight } from "lucide-react";

// Components
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

const contents = [
  {
    heading: "Chapter 1: Introduction to Design Principles",
    description:
      "This chapter provides an overview of the basic principles of design, such as balance, contrast, and hierarchy. It explains how these principles can be used to create visually pleasing and effective designs.",
  },
  {
    heading: "Chapter 2: Designing for User Experience",
    description:
      "This chapter explores the concept of user experience (UX) design and how it relates to the overall design process. It covers topics such as user research, usability testing, and user-centered design.",
  },
  {
    heading: "Chapter 3: Typography in Design",
    description:
      "This chapter delves into the art and technique of typography, including the history and evolution of type, the basics of typographic hierarchy, and the use of typography in digital design.",
  },
  {
    heading: "Chapter 4: Color Theory and its Applications",
    description:
      "This chapter covers the basics of color theory and its application in design. It includes information on color wheels, complementary colors, color schemes, and the psychological effects of color. It also covers color management and color spaces in digital design.",
  },
  {
    heading: "Chapter 5: Design for the Web",
    description:
      "This chapter will cover the basics of web design, including the principles of responsive design, website layout, and typography, as well as the use of HTML, CSS, and JavaScript.",
  },
  {
    heading: "Chapter 6: Branding and Identity Design",
    description:
      "This chapter will explore the process of creating and maintaining a brand, including the development of a brand strategy, the creation of a visual identity, and the use of design elements to communicate a brand's message.",
  },
];

export function TableContentImage() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="text-center">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Table of contents
          </Heading>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-5 rounded-lg border bg-secondary p-5">
          {contents.map((content) => (
            <div
              key={content.heading}
              className=" border-b border-gray-300 pb-5 last:border-none dark:border-gray-700"
            >
              <Heading
                level={"sub"}
                className="font-semibold text-secondary-foreground"
              >
                {content.heading}
              </Heading>
              <Text
                level={"base"}
                className="font-normal text-muted-foreground"
              >
                {content.description}
              </Text>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-500 hover:underline"
          >
            Get free sample chapters
            <ChevronRight className="ml-1 size-6" />
          </Link>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
