import Link from "next/link";

// Icons
import { ChevronRight } from "lucide-react";

// Components
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

const paras = [
  "Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.",
  "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.",
];

export function HeadingDescriptionTwoColumn() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 md:grid md:grid-cols-2 md:px-6 md:py-16">
        <div>
          <Heading
            level={1}
            className="mb-4 text-wrap font-bold tracking-tight"
          >
            Powering innovation at 200,000+ companies worldwide
          </Heading>
          <Text className="mb-4 font-light text-muted-foreground sm:text-lg">
            Empower Developers, IT Ops, and business teams to collaborate at
            high velocity. Respond to changes and deliver great customer and
            employee service experiences fast.
          </Text>
          <Link
            href="#"
            className="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-500"
          >
            Learn more
            <ChevronRight className="ml-1 size-6" />
          </Link>
        </div>
        <div className="mt-4 sm:mt-0">
          {paras.map((para) => (
            <Text
              key={para}
              className="mb-4 font-light text-muted-foreground sm:text-lg"
            >
              {para}
            </Text>
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
