import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";

const CTA = () => {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="not-prose rounded-lg p-6 md:rounded-xl md:p-12">
        <div className="flex flex-col gap-6">
          <Heading className="text-4xl">Lorem ipsum dolor sit amet</Heading>
          <Heading level={4} className="text-balance text-2xl opacity-70">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Heading>
          <div className="flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default CTA;
