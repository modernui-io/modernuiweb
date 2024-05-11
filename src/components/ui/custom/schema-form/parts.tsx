import { AnimatePresence, m } from "framer-motion";
import type { TwcComponentProps } from "react-twc";

import { twx } from "~/lib/utils";

type ShakeProps = TwcComponentProps<"div"> & { $error?: boolean };
export const Shake = twx.div<ShakeProps>((props) => [
  "animate-thrice animate-duration-200 animate-ease-in",
  props.$error ? "animate-shake" : "",
]);

const FieldErrorWrapper = twx(m.p)`text-[0.8rem] font-medium text-destructive`;

interface FieldErrorProps {
  /**
   * error will be hidden if undefined
   */
  message?: string;
}

export const FieldError = ({ message }: FieldErrorProps) => {
  return (
    <AnimatePresence>
      {!!message && (
        <FieldErrorWrapper
          key="error"
          transition={{
            duration: 2,
          }}
          initial={{
            y: -4,
            scaleY: 0.2,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scaleY: 1,
          }}
          exit={{
            y: -4,
            opacity: 0,
            scaleY: 0,
          }}
        >
          {message}
        </FieldErrorWrapper>
      )}
    </AnimatePresence>
  );
};
