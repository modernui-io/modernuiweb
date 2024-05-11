import * as React from "react";

import { IS_DEV } from "~/lib/config";

import type { WizardValues } from "./types";

const WizardContext = React.createContext<WizardValues | null>(null);

if (IS_DEV) {
  WizardContext.displayName = "WizardContext";
}

export default WizardContext;
