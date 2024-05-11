"use client";

import { Progress } from "~/components/ui/progress";
import { cn } from "~/lib/utils";

import useWizard from "../use-wizard";

const WizardProgressBar = ({ className }: { className?: string }) => {
  const { activeStep, stepCount, isFirstStep } = useWizard();

  if (isFirstStep) {
    return null;
  }

  const progressPercentage = Math.ceil(((activeStep + 1) / stepCount) * 100);

  return (
    <Progress value={progressPercentage} className={cn("w-full", className)} />
  );
};

export default WizardProgressBar;
