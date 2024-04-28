import * as MuiLayout from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Heading } from "~/components/ui/custom/headings";
import { Text } from "~/components/ui/custom/text";

const Header = () => {
  return (
    <MuiLayout.Section>
      <MuiLayout.Container className="text-center">
        <Heading level={1} className="!my-0">
          This is a Header
        </Heading>
        <Text className="text-balance text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate quidem natus.
        </Text>
        <div className="mt-6 flex items-center justify-center gap-2">
          <Button>Get Started</Button>
          <Button variant={"outline"}>Learn More</Button>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
};

export default Header;
