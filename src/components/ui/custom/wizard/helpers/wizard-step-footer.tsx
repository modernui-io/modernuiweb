"use client";

import { memo, useCallback, type ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

import { Button } from "~/components/ui/button";

import useWizard from "../use-wizard";

interface WizardStepFooterProps {
  isIndividualStep?: boolean;
  showLoading?: boolean;
  isFinalStepSubmit?: boolean;
  nextButtonType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  nextButtonHandler?: () => void;
}
const WizardStepFooter = ({
  isIndividualStep = false,
  showLoading = false,
  nextButtonType = "submit",
  nextButtonHandler,
  isFinalStepSubmit,
}: WizardStepFooterProps) => {
  const {
    activeStep,
    stepCount,
    isFirstStep,
    isLastStep,
    previousStep,
    nextStep,
    isLoading,
  } = useWizard();
  const router = useRouter();

  const handlePrev = useCallback(() => {
    previousStep();
  }, [previousStep]);

  const handleNext = useCallback(async () => {
    if (
      !nextButtonHandler &&
      nextButtonType !== "submit" &&
      nextButtonType !== "reset"
    ) {
      await nextStep();
    }
    if (nextButtonHandler) {
      nextButtonHandler();
    }
  }, [nextButtonHandler, nextButtonType, nextStep]);

  if (isIndividualStep) {
    return (
      <nav className="sticky z-50 !mt-6 flex flex-row items-center justify-between">
        <Button
          size={"lg"}
          variant={"outline"}
          // className="w-30"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.back();
          }}
        >
          Cancel
        </Button>
        <Button
          disabled={showLoading}
          size={"lg"}
          // className="w-30"
          type="submit"
        >
          Save
        </Button>
      </nav>
    );
  }

  if (isFirstStep) {
    return null;
  }

  return (
    <nav
      // className="absolute inset-x-0 bottom-0 flex w-full items-center justify-between py-3"
      className="!mt-6 flex w-full items-center justify-between py-3"
      // className="fixed bottom-px left-0 flex w-full items-center justify-between border-t border-primary-100 bg-primary-50 px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <Button
        onClick={handlePrev}
        disabled={isLoading || isFirstStep}
        className="rounded-3xl"
        size="lg"
        variant={"outline"}
      >
        Back
      </Button>

      {!isLastStep && !isFinalStepSubmit && (
        <Button
          onClick={handleNext}
          disabled={showLoading || isLoading || isLastStep}
          className="rounded-3xl"
          size="lg"
          type={nextButtonType}
        >
          Next
        </Button>
      )}

      {isFinalStepSubmit && (
        <Button
          disabled={showLoading}
          className="rounded-3xl"
          size="lg"
          type="submit"
        >
          Submit
        </Button>
      )}
    </nav>
  );
};

export default memo(WizardStepFooter);
