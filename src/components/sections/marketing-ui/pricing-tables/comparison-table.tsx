// Components
import React, { useState } from "react";
import Link from "next/link";

import { Check, X } from "lucide-react";
import { HiChevronDown } from "react-icons/hi";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";

interface Deal {
  name: string;
  description: string;
  price: string;
  type: string;
  features: { text: string; bold?: string }[];
}

interface TableRowType {
  label: {
    text: string;
    btn?: string;
    btnLink?: string;
  };
  community: boolean;
  developer: boolean;
  designer: boolean;
}

interface TableSectionType {
  headings: string[];
  rows: TableRowType[];
}

const deals: Deal[] = [
  {
    name: "Starter",
    description: "Best option for personal use and for your next project.",
    price: "$29",
    type: "/month",
    features: [
      { text: "Individual configuration" },
      { text: "No setup, or hidden fees" },
      { text: "Team size: ", bold: "1 developer" },
      { text: "Premium support: ", bold: "6 months" },
      { text: "Free updates: ", bold: "6 months" },
    ],
  },
  {
    name: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: "$99",
    type: "/month",
    features: [
      { text: "Individual configuration" },
      { text: "No setup, or hidden fees" },
      { text: "Team size: ", bold: "10 developer" },
      { text: "Premium support: ", bold: "24 months" },
      { text: "Free updates: ", bold: "24 months" },
    ],
  },
  {
    name: "Enterprise",
    description:
      "Best for large scale uses and extended redistribution rights.",
    price: "$499",
    type: "/month",
    features: [
      { text: "Individual configuration" },
      { text: "No setup, or hidden fees" },
      { text: "Team size: ", bold: "100+ developer" },
      { text: "Premium support: ", bold: "36 months" },
      { text: "Free updates: ", bold: "36 months" },
    ],
  },
];

const tableSections: TableSectionType[] = [
  {
    headings: [
      "Tailwind CSS code",
      "Community Edition",
      "Developer Edition",
      "Design Edition",
    ],
    rows: [
      {
        label: { text: "Basic Components", btn: "view all", btnLink: "/#" },
        community: true,
        developer: true,
        designer: true,
      },
      {
        label: { text: "Application UI", btn: "view demo", btnLink: "/#" },
        community: false,
        developer: true,
        designer: false,
      },
      {
        label: { text: "Marketing UI pre-order" },
        community: false,
        developer: true,
        designer: false,
      },
      {
        label: { text: "E-commerce UI pre-order" },
        community: false,
        developer: true,
        designer: false,
      },
    ],
  },
  {
    headings: [
      "Figma design files",
      "Community Edition",
      "Developer Edition",
      "Design Edition",
    ],
    rows: [
      {
        label: {
          text: "Free Edition",
          btn: "duplicate in figma",
          btnLink: "/# ",
        },
        community: true,
        developer: true,
        designer: true,
      },
      {
        label: {
          text: "Application UI",
          btn: "preview in figma",
          btnLink: "/# ",
        },
        community: false,
        developer: true,
        designer: true,
      },
      {
        label: {
          text: "Marketing UI",
          btn: "preview in figma",
          btnLink: "/# ",
        },
        community: false,
        developer: true,
        designer: true,
      },
      {
        label: { text: "E-commerce UI pre-order" },
        community: false,
        developer: true,
        designer: true,
      },
    ],
  },
  {
    headings: [
      "HUGO Templates",
      "Community Edition",
      "Developer Edition",
      "Design Edition",
    ],
    rows: [
      {
        label: { text: "HUGO Templates" },
        community: false,
        developer: true,
        designer: false,
      },
      {
        label: { text: "JSON data sources" },
        community: false,
        developer: true,
        designer: false,
      },
    ],
  },
];

export function ComparisonTable() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Designed for business teams like yours
          </Heading>
          <Text className="mb-5 font-light text-muted-foreground sm:text-xl">
            Here we focus on markets where technology, innovation, and capital
            can unlock long-term value and drive economic growth.
          </Text>
        </div>
        <div className="mb-8 grid gap-8 xl:grid-cols-3">
          {deals.map((deal, index) => (
            <Card
              key={index}
              className="mx-auto flex max-w-lg flex-col rounded-lg border p-6 text-center shadow dark:bg-muted"
            >
              <CardHeader className="p-0">
                <Heading
                  level={3}
                  className="mb-4 text-2xl font-semibold tracking-normal"
                >
                  {deal.name}
                </Heading>
                <Text className="font-light text-muted-foreground sm:text-lg">
                  {deal.description}
                </Text>
              </CardHeader>
              <CardContent className="p-0">
                <div className="my-8 flex items-baseline justify-center">
                  <Text>
                    <span className="mr-2 text-5xl font-extrabold">
                      {deal.price}
                    </span>{" "}
                    <span className="text-muted-foreground">{deal.type}</span>
                  </Text>
                </div>
                <ul className="mb-8 space-y-4">
                  {deal.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center space-x-3"
                    >
                      <Check className="size-5 shrink-0 text-green-500" />
                      <Text>
                        {feature.text}{" "}
                        {feature?.bold && (
                          <span className="font-semibold">{feature.bold}</span>
                        )}
                      </Text>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-0">
                <Button className="w-full py-2.5">
                  <Link
                    href="/#"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-center text-sm font-medium focus:outline-none focus:ring-4 "
                  >
                    Get started
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant={"ghost"}
              className="mx-auto mt-8 flex items-center justify-center text-base font-medium text-primary hover:text-primary/90"
            >
              Show Detailed Plan Comparison
              <HiChevronDown className="ml-1 size-5" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Table className="mt-8 w-full max-w-full overflow-x-auto">
              <TableBody className="block min-w-max overflow-hidden">
                {tableSections.map((section, sectionIndex) => (
                  <React.Fragment key={sectionIndex}>
                    <TableRow className="grid w-full grid-cols-4 gap-x-16 border-y bg-secondary p-4 text-sm font-medium hover:bg-secondary">
                      {section.headings.map((heading) => (
                        <TableCell key={heading} className="w-full p-0">
                          {heading}
                        </TableCell>
                      ))}
                    </TableRow>
                    {section.rows.map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className="grid grid-cols-4 items-center gap-x-16 border-b border-primary-300 p-4 text-sm text-muted-foreground hover:bg-background"
                      >
                        <TableCell className="p-0 text-muted-foreground">
                          {
                            <>
                              {row.label.text}{" "}
                              {row.label.btn && row.label.btnLink && (
                                <>
                                  (
                                  <Link
                                    href={row.label.btnLink}
                                    className="text-primary hover:underline"
                                  >
                                    {row.label.btn}
                                  </Link>
                                  )
                                </>
                              )}
                            </>
                          }
                        </TableCell>
                        <TableCell className="p-0">
                          {row.community ? (
                            <Check className="size-6 text-green-500" />
                          ) : (
                            <X className="size-6 text-red-500" />
                          )}
                        </TableCell>
                        <TableCell className="p-0">
                          {row.developer ? (
                            <Check className="size-6 text-green-500" />
                          ) : (
                            <X className="size-6 text-red-500" />
                          )}
                        </TableCell>
                        <TableCell className="p-0">
                          {row.designer ? (
                            <Check className="size-6 text-green-500" />
                          ) : (
                            <X className="size-6 text-red-500" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
                <TableRow className="grid grid-cols-4 gap-x-16 border-b border-secondary-foreground px-4 py-3 text-sm text-muted-foreground hover:bg-background">
                  <TableCell className="text-muted-foreground"></TableCell>
                  {[...Array(3)].map((_) => (
                    <TableCell key={_} className="p-0">
                      <Button className="h-auto w-full py-2.5">
                        <Link
                          href="/#"
                          className="inline-flex items-center justify-center rounded-lg bg-primary text-center text-sm font-medium focus:outline-none focus:ring-4 "
                        >
                          Buy Now
                        </Link>
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </CollapsibleContent>
        </Collapsible>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
