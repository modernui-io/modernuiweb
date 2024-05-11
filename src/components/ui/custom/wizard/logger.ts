import { IS_DEV } from "~/lib/config";

import type { LogLevel } from "./types";

/**
 * Log messages in the console with a corresponding urgency
 *
 * @param level The urgency of the message
 * @param message The message to log in the console
 */
export const log = (level: LogLevel, message: string) => {
  if (IS_DEV) {
    const packageName = "[/components/ui/custom/wizard]";

    switch (level) {
      case "warn":
        console.warn(`${packageName} ${message}`);
        break;
      case "error":
        console.error(`${packageName} ${message}`);
        break;
      default:
        console.log(`${packageName} ${message}`);
    }
  }
};
