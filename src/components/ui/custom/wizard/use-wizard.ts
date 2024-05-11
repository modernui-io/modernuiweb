import * as React from "react";

import type { WizardValues } from "./types";
import WizardContext from "./wizard-context";

const useWizard = () => {
  const context = React.useContext(WizardContext);

  if (!context && process.env.NODE_ENV === "development") {
    throw Error("Wrap your step with `Wizard`");
  } else {
    return context! as WizardValues;
  }
};

export default useWizard;
