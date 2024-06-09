// Components
import * as MuiLayout from "~/components/layouts";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

export function VideoContent() {
  return (
    <MuiLayout.Section className="bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl px-4 py-8 sm:text-center lg:px-12 lg:py-16">
        <Heading level={1} className="mb-4 text-wrap font-bold tracking-tight">
          We didn&apos;t reinvent the wheel
        </Heading>
        <Text className="font-light text-muted-foreground sm:text-lg md:px-20 lg:px-36 xl:px-48">
          We are strategists, designers and developers. Innovators and problem
          solvers. Small enough to be simple and quick, but big enough to
          deliver the scope you want at the pace you need.
        </Text>
        <iframe
          allowFullScreen
          loading="lazy"
          className="mx-auto mt-8 h-64 w-full max-w-2xl rounded-lg sm:h-96 lg:mt-12"
          src="https://www.youtube.com/embed/KJwYBJMSbPI?si=rECWsSBHVEV55rFU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
