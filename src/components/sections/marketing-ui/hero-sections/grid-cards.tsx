// Note - the flowbite is used in url of images we need them to load images
/* eslint-disable local-rules/no-flowbite */
import Link from "next/link";

//components
import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";

export function BackgroundImageCardsHero() {
  return (
    <MuiLayout.Section className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="#"
            className="col-span-2 h-96 bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/bmw-ix.png')] bg-cover bg-center bg-no-repeat p-8 text-left bg-blend-multiply hover:bg-blend-normal"
          >
            <Heading
              level={1}
              className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-slate-50"
            >
              Enjoy nature sustainable travel in the BMW iX
            </Heading>
            <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-gray-700">
              Show more
            </Button>
          </Link>
          <Link
            href="#"
            className="col-span-2 h-96 bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/bmw-m4.png')] bg-cover bg-center bg-no-repeat p-8 text-left bg-blend-multiply hover:bg-blend-normal md:col-span-1"
          >
            <Heading
              level={1}
              className="mb-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-50"
            >
              Enjoy nature sustainable travel in the BMW iX
            </Heading>
            <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-gray-700">
              Show more
            </Button>
          </Link>
          <Link
            href="#"
            className="col-span-2 h-96 bg-gray-500 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/bmw-m6.png')] bg-cover bg-center bg-no-repeat p-8 text-left bg-blend-multiply hover:bg-blend-normal md:col-span-1"
          >
            <Heading
              level={1}
              className="mb-5 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-50"
            >
              Enjoy nature sustainable travel in the BMW iX
            </Heading>
            <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-gray-700">
              Show more
            </Button>
          </Link>
        </div>
      </div>
    </MuiLayout.Section>
  );
}
