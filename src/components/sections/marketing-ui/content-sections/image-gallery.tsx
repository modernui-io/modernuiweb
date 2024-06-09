import Image from "next/image";

// Components
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";
// Image
import Gallery1 from "~/lib/assets/images/content-gallery-1.png";
import Gallery2 from "~/lib/assets/images/content-gallery-2.png";
import Gallery3 from "~/lib/assets/images/content-gallery-3.png";
import Gallery4 from "~/lib/assets/images/content-gallery-4.png";
import Gallery5 from "~/lib/assets/images/content-gallery-5.png";
import Gallery6 from "~/lib/assets/images/content-gallery-6.png";

const images = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6];

export function ImageGallery() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:text-center lg:px-12 lg:py-16">
        <Heading level={1} className="mb-4 font-bold tracking-tight">
          We didn&apos;t reinvent the wheel
        </Heading>
        <Text className="mb-4 font-light text-muted-foreground sm:text-lg md:px-20 lg:px-36 xl:px-48">
          We are strategists, designers and developers. Innovators and problem
          solvers. Small enough to be simple and quick, but big enough to
          deliver the scope you want at the pace you need.
        </Text>
        <div className="mt-8 gap-4 sm:mt-12 sm:grid sm:grid-cols-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              className={`rounded-lg sm:block ${index % 4 === 0 ? "col-span-2 mb-4 sm:mb-0" : "col-span-1 hidden sm:block"}`}
              alt={""}
            />
          ))}
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
