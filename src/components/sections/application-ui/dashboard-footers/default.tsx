import { FaDribbble, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";

import { Text } from "~/components/ui/custom/text";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function DefaultDashboardFooter() {
  return (
    <footer className="bg-background py-5">
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
            <TooltipContent>
              <Text>Like us on Facebook</Text>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <FaTwitter className="size-4" />
              </span>
            </TooltipTrigger>
            <TooltipContent>
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
            <TooltipContent>
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
            <TooltipContent>
              <Text>Follow us on Dribble</Text>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  );
}
