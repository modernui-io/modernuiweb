import Image from "next/image";
import Link from "next/link";

import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
import Logo from "~/lib/assets/images/logo.svg";

const Hero = () => {
  return (
    <MuiLayout.Section className="not-prose">
      <MuiLayout.Container>
        <div className="m-auto flex h-full w-full max-w-5xl flex-col gap-8 px-4 py-4 md:px-6 md:py-10">
          {/* Large Text */}
          <Heading
            level={1}
            className="text-3xl font-normal tracking-tight md:text-6xl"
          >
            This is a component {/* eslint-disable-next-line */}
            <img
              className="my-auto -mt-3 inline w-24 md:-mt-6 md:w-48"
              width={192}
              height={108}
              src="https://newsroom.porsche.com/dam/jcr:a388376a-c5e2-4363-939b-6fbacd867a64/718_neu_2023.png"
              alt=""
            ></img>{" "}
            with special {/* eslint-disable-next-line */}
            <img
              className="my-auto -mt-3 inline w-24 md:-mt-6 md:w-48"
              width={192}
              height={108}
              src="https://newsroom.porsche.com/dam/jcr:a388376a-c5e2-4363-939b-6fbacd867a64/718_neu_2023.png"
              alt=""
            ></img>{" "}
            image capabilities. {}
          </Heading>
          {/* logo features */}
          <div className="flex w-fit flex-wrap items-center gap-6 rounded-lg border p-4">
            <Text>As seen in:</Text>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
          </div>
          {/* End Text */}
          <div className="md:text-lg">
            <Text className="hidden md:block">
              We make components for marketing sites.
            </Text>
            <div className="grid gap-2 md:flex">
              <Text className="opacity-50">
                Visit modernui.io to use our components for free.{" "}
              </Text>
              <Link className="transition-all hover:opacity-70" href="#">
                Check it Out -{`>`}
              </Link>
            </div>
            <Text className="mt-4 text-xs">
              <span className="opacity-50">Available now online.</span> Tell us
              what you build next.
            </Text>
          </div>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default Hero;
