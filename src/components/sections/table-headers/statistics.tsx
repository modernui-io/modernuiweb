import { HiPlus, HiRefresh, HiUpload } from "react-icons/hi";

import { Button } from "~/components/ui/button";

export function TableHeaderWithStatistics() {
  return (
    <section className="flex items-center bg-background py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <div className="flex flex-col space-y-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0">
            <div className="flex flex-1 items-center space-x-4">
              <h5>
                <span className="text-gray-500">All keywords:&nbsp;</span>
                <span>146</span>
              </h5>
              <h5>
                <span className="text-gray-500">Total volume:&nbsp;</span>
                <span>88.4k</span>
              </h5>
            </div>
            <div className="flex shrink-0 flex-col space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end">
              <Button>
                <HiPlus className="-ml-1 mr-2 size-3.5" />
                Add to keyword list
              </Button>
              <Button color="gray">
                <HiRefresh className="mr-2 size-4" />
                Update metrics 1/250
              </Button>
              <Button color="gray">
                <HiUpload className="mr-2 size-4" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
