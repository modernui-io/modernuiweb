import { HiCog, HiInformationCircle, HiPlus } from "react-icons/hi";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/custom/text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function TableHeaderWithSettings() {
  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <div className="divide-y px-4">
            <div className="flex flex-col space-y-3 py-3 md:flex-row md:items-center md:justify-between md:space-x-4 md:space-y-0">
              <div className="flex flex-1 items-center space-x-2">
                <h5>
                  <span>Rankings Overview</span>
                  <span className="ml-1 text-gray-500">1-100 (436)</span>
                </h5>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div>
                        <span className="sr-only">More info</span>
                        <HiInformationCircle className="size-4 text-gray-400" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Text>Showing 1-100 of 436 results</Text>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex shrink-0 flex-col items-start space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
                <Button className="[&>span]:text-xs">
                  <HiCog className="mr-2 size-4" />
                  Table settings
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between space-y-3 py-4 md:flex-row md:items-center md:space-y-0">
              <Button>
                <HiPlus className="mr-2 size-3.5" />
                Add more keywords
              </Button>
              <div className="w-full flex-col space-x-2 md:w-auto md:flex-row md:space-x-0">
                <Button className="border-r md:rounded-r-none">
                  Positions
                </Button>
                <Button className="border-x md:rounded-none md:border-l-0">
                  Estimated Traffic
                </Button>
                <Button className="border-x md:rounded-none md:border-l-0">
                  Visibility
                </Button>
                <Button className="md:rounded-l-none">
                  All for modernui.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
