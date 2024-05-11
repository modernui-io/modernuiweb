import * as React from "react";

import { Button } from "~/components/ui/button";
import {
  Step,
  Stepper,
  useStepper,
  type StepItem,
  type StepperProps,
} from "~/components/ui/custom/stepper";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
] satisfies StepItem[];

export default function StepperOrientation() {
  const [orientation, setOrientation] =
    React.useState<StepperProps["orientation"]>("vertical");

  return (
    <div className="flex w-full flex-col gap-4">
      <RadioGroup
        className="mb-2 flex"
        value={orientation}
        onValueChange={(value) =>
          setOrientation(value as StepperProps["orientation"])
        }
      >
        <Label
          htmlFor="horizontal"
          className="hover:bg-gray-3 flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 [&:has([data-state=checked])]:border-primary"
        >
          <RadioGroupItem
            value="horizontal"
            id="horizontal"
            className="sr-only"
          />
          <h2 className="font-medium">Horizontal</h2>
        </Label>
        <Label
          htmlFor="vertical"
          className="hover:bg-gray-3 flex w-fit flex-col gap-3 rounded-md border bg-background px-2 py-1 [&:has([data-state=checked])]:border-primary"
        >
          <RadioGroupItem value="vertical" id="vertical" className="sr-only" />
          <h2 className="font-medium">Vertical</h2>
        </Label>
      </RadioGroup>
      <Stepper orientation={orientation} initialStep={0} steps={steps}>
        {steps.map((stepProps, index) => {
          return (
            <Step key={stepProps.label} {...stepProps}>
              <div className="my-4 flex h-40 items-center justify-center rounded-md border bg-secondary text-primary">
                <h1 className="text-xl">Step {index + 1}</h1>
              </div>
            </Step>
          );
        })}
        <Footer />
      </Stepper>
    </div>
  );
}

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    isDisabledStep,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
  } = useStepper();
  return (
    <>
      {hasCompletedAllSteps && (
        <div className="flex h-40 items-center justify-center rounded-md border bg-secondary text-primary">
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
      )}
      <div className="flex w-full justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reset
          </Button>
        ) : (
          <>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              size="sm"
              variant="secondary"
            >
              Prev
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </>
        )}
      </div>
    </>
  );
};
