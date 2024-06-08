import Link from "next/link";

// Icons
import { ChevronRight } from "lucide-react";

// Components
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

export function HeadingDescription() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 md:px-6 md:py-16">
        <Heading level={1} className="mb-4 text-wrap font-bold tracking-tight">
          Powering innovation at{" "}
          <span className="font-extrabold">200,000+</span> companies worldwide
        </Heading>
        <Text className="mb-4 font-light text-muted-foreground sm:text-lg">
          Track work across the enterprise through an open, collaborative
          platform. Link issues across Jira and ingest data from other software
          development tools, so your IT support and operations teams have richer
          contextual information to rapidly respond to requests, incidents, and
          changes.
        </Text>
        <Text className="mb-4 font-medium text-muted-foreground sm:text-lg">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </Text>
        <Link
          href="#"
          className="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-500"
        >
          Learn more
          <ChevronRight className="ml-1 size-6" />
        </Link>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
