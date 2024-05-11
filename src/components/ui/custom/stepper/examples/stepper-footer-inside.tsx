import { Button } from "~/components/ui/button";
import {
  Step,
  Stepper,
  useStepper,
  type StepItem,
} from "~/components/ui/custom/stepper";

const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
] satisfies StepItem[];

export default function StepperFooterInside() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper orientation="vertical" initialStep={0} steps={steps}>
        {steps.map((stepProps, index) => {
          return (
            <Step key={stepProps.label} {...stepProps}>
              <div className="my-4 flex h-40 items-center justify-center rounded-md border bg-secondary text-primary">
                <h1 className="text-xl">Step {index + 1}</h1>
              </div>
              <StepButtons />
            </Step>
          );
        })}
        <FinalStep />
      </Stepper>
    </div>
  );
}

const StepButtons = () => {
  const { nextStep, prevStep, isLastStep, isOptionalStep, isDisabledStep } =
    useStepper();
  return (
    <div className="mb-4 flex w-full gap-2">
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
    </div>
  );
};

const FinalStep = () => {
  const { hasCompletedAllSteps, resetSteps } = useStepper();

  if (!hasCompletedAllSteps) {
    return null;
  }

  return (
    <>
      <div className="flex h-40 items-center justify-center rounded-md border bg-secondary text-primary">
        <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
      </div>
      <div className="flex w-full justify-end gap-2">
        <Button size="sm" onClick={resetSteps}>
          Reset
        </Button>
      </div>
    </>
  );
};
