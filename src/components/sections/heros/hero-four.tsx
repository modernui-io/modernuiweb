import Image from "next/image";
import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
// Image Imports
import Placeholder from "~/lib/assets/images/placeholder.jpg";

const Hero = () => {
  return (
    <MuiLayout.Section className="relative h-[720px]">
      <MuiLayout.Container className="not-prose">
        {/* Name and Nav */}
        <div className="flex w-full justify-between">
          <div className="">
            <Heading
              level={1}
              className="mb-4 text-3xl font-normal md:text-6xl"
            >
              <Link className="transition-all hover:opacity-70" href="#">
                Lorem Ipsum
              </Link>
            </Heading>
            <Heading level={2} className="w-48 text-lg font-light leading-6">
              Another component from Modern UI.
            </Heading>
          </div>
          <div className="hidden gap-4 md:flex">
            <Link className="transition-all hover:opacity-70" href="#">
              Book a component
            </Link>
            <Link className="transition-all hover:opacity-70" href="#">
              Heros
            </Link>
            <Link className="transition-all hover:opacity-70" href="#">
              Shop
            </Link>
            <Link className="transition-all hover:opacity-70" href="#">
              Learn More
            </Link>
          </div>
        </div>

        {/* Images */}
        <div className="fit absolute bottom-0 right-0 flex items-end justify-end gap-2">
          {/* Image 1 */}
          <div className="hidden h-72 w-96 md:block">
            <Image
              className="h-full w-full rounded-tl-3xl object-cover"
              src={Placeholder}
              alt="placeholder"
            ></Image>
          </div>
          {/* Image 2 */}
          <div className="h-[420px] w-fit md:w-96">
            <Image
              className="h-full w-full rounded-tl-3xl object-cover"
              src={Placeholder}
              alt="placeholder"
            ></Image>
          </div>
        </div>

        {/* Circle CTA */}
        <div className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full border bg-secondary p-12 text-center font-medium leading-4 transition-all hover:opacity-80">
          <Link className="-mt-1" href="#">
            Get Started
          </Link>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default Hero;
