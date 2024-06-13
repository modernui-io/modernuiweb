import { FaDribbble, FaFacebookF, FaGithub } from "react-icons/fa";

import { Text } from "~/components/ui/custom/text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function DefaultDashboardFooter() {
  return (
    <footer className="flex flex-col items-center justify-between bg-background px-10 py-5 md:flex-row">
      <Text className="mb-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
        &copy; 2019-2022&nbsp;
        <a
          href="https://modernui.com/"
          rel="noreferrer"
          target="_blank"
          className="hover:underline"
        >
          ModernUI
        </a>
        . All rights reserved.
      </Text>
      <div className="flex items-center justify-center space-x-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <FaFacebookF className="size-4" />
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-background">
              <Text>Like us on Facebook</Text>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <XIcon />
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-background">
              <Text>Follow us on Twitter</Text>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <FaGithub className="size-4" />
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-background">
              <Text>Star us on GitHub</Text>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <FaDribbble className="size-4" />
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-background">
              <Text>Follow us on Dribble</Text>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  );
}

function XIcon() {
  return (
    <svg
      className="size-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
      />
    </svg>
  );
}
