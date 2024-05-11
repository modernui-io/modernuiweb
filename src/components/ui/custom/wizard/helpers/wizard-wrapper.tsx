"use client";

// import { memo, useCallback, type ButtonHTMLAttributes } from "react";
// import { useRouter } from "next/navigation";
import { AnimatePresence, m as motion } from "framer-motion";

// import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

import useWizard from "../use-wizard";

const Step = ({ num, isActive }: { num: number; isActive: boolean }) => {
  return (
    <div className="relative">
      <div
        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-300 ${
          isActive
            ? "border-indigo-600 bg-indigo-600 text-white"
            : "border-gray-300 text-gray-300"
        }`}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.svg
              key="icon-marker-check"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1.6em"
              width="1.6em"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </motion.svg>
          ) : (
            <motion.span
              key="icon-marker-num"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.125 }}
            >
              {num}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isActive && (
        <div className="absolute -inset-1.5 z-0 animate-pulse rounded-full bg-indigo-100" />
      )}
    </div>
  );
};

export const WizardWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const { activeStep, stepCount } = useWizard();
  const stepArray = Array.from(Array(stepCount).keys());

  return (
    <AnimatePresence mode="wait">
      <div
        className={cn(
          "grid h-full w-full items-start gap-6 bg-background md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]",
          className,
        )}
      >
        <div className="hidden flex-col gap-4 md:flex">
          {stepArray.map((num) => {
            const stepNum = num + 1;
            const isActive = stepNum <= activeStep;
            return <Step key={stepNum} num={stepNum} isActive={isActive} />;
          })}
        </div>
        {children}
      </div>
    </AnimatePresence>
  );
};
