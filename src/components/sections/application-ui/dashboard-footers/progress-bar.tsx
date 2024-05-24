import { Progress } from "~/components/ui/progress";

export function FooterWithProgressBar() {
  return (
    <footer className="rounded-lg bg-background p-4 antialiased shadow md:p-6 xl:p-8">
      <div className="flex flex-col justify-between lg:flex-row lg:items-center xl:mb-0">
        <div className="order-1 mb-4 w-full sm:w-96 lg:mb-0">
          <Progress value={40} className="mb-1" />
          <div className="text-xs font-medium text-gray-500 dark:text-white">
            7.2 GB of 15 GB used
          </div>
        </div>
        <p className="order-3 text-sm text-gray-500 dark:text-gray-400 lg:order-2 xl:flex">
          Copyright &copy; 2022&nbsp;
          <a
            href="https://modernui.com/"
            className="ml-1 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            ModernUI
          </a>
          . All rights reserved.
        </p>
        <div className="order-2 mb-4 text-sm text-gray-500 dark:text-gray-400 lg:order-3 lg:mb-0 lg:text-right">
          <p>Last account activity: 12 hours ago</p>
          <a href="#" className="font-medium underline hover:no-underline">
            Details
          </a>
        </div>
      </div>
    </footer>
  );
}
