import { HiEye } from "react-icons/hi";

import * as MuiLayout from "~/components/layouts";
import { Text } from "~/components/ui/custom/text";
import { Progress } from "~/components/ui/progress";

export function TableFooterProgressBar() {
  return (
    <MuiLayout.Section className="flex h-screen items-center bg-background">
      <MuiLayout.Container className="mx-auto max-w-screen-xl overflow-x-visible px-4 lg:px-12">
        <div className="relative rounded-b-lg bg-background shadow-md dark:bg-muted-foreground/20">
          <nav className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0">
            <div className="w-full max-w-xs">
              <div className="mb-1 flex justify-between">
                <Text
                  level={"xs"}
                  className="font-medium text-muted-foreground"
                >
                  3.24 GB of 15 GB used
                </Text>
              </div>
              <Progress value={25} className="mb-1" />
            </div>
            <div className="flex items-center space-x-2">
              <Text level={"sm"}>
                <span className="font-normal text-muted-foreground">
                  Last account activity:{" "}
                </span>
                <span className="font-semibold">2 hours ago</span>
              </Text>
              <HiEye className="size-4 text-muted-foreground" />
            </div>
          </nav>
        </div>
      </MuiLayout.Container>
    </MuiLayout.Section>
  );
}
