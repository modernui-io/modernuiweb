"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const avatarBadgeVariants = cva(
  "absolute flex size-4 items-stretch justify-stretch rounded-full bg-background [&>*]:grow [&>*]:rounded-full",
  {
    variants: {
      position: {
        bottomLeft: "-left-1 bottom-0",
        bottomRight: "-right-1 bottom-0",
        topLeft: "-left-1 top-0",
        topRight: "-right-1 top-0",
      },
    },
    defaultVariants: {
      position: "bottomLeft",
    },
  },
);

export interface AvatarBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarBadgeVariants> {
  children?: // Note the children can be of any react elemnt type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | never[];
}

const AvatarBadge = ({ className, position, ...props }: AvatarBadgeProps) => (
  <div
    className={cn(avatarBadgeVariants({ position }), className)}
    {...props}
  />
);

interface AvatarGroupContextValue {
  count?: number;
  limit?: number;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
}

const AvatarGroupContext = React.createContext<AvatarGroupContextValue>({});

const AvatarGroupProvider = ({
  children,
  limit,
}: {
  children?: React.ReactNode;
  limit?: number;
}) => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <AvatarGroupContext.Provider
      value={{
        count,
        setCount,
        limit,
      }}
    >
      {children}
    </AvatarGroupContext.Provider>
  );
};

const useAvatarGroupContext = () => React.useContext(AvatarGroupContext);

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  limit?: number;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, limit, ...props }, ref) => {
    return (
      <AvatarGroupProvider limit={limit}>
        <div
          ref={ref}
          className={cn(
            "relative flex items-center justify-end -space-x-4",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </AvatarGroupProvider>
    );
  },
);
AvatarGroup.displayName = "AvatarGroup";

const AvatarGroupList = ({ children }: { children?: React.ReactNode }) => {
  const { limit, setCount } = useAvatarGroupContext();

  setCount?.(React.Children.count(children));

  return (
    <>{limit ? React.Children.toArray(children).slice(0, limit) : children}</>
  );
};

export type AvatarOverflowIndicatorProps =
  React.HTMLAttributes<HTMLSpanElement>;

const AvatarOverflowIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & AvatarOverflowIndicatorProps
>(({ className, ...props }, ref) => {
  const { limit, count } = useAvatarGroupContext();
  if (!limit || !count || count <= limit) return null;
  return (
    <span
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted",
        className,
      )}
      {...props}
    >
      +{count - limit}
    </span>
  );
});
AvatarOverflowIndicator.displayName = "AvatarOverflowIndicator";

export { AvatarBadge, AvatarGroup, AvatarGroupList, AvatarOverflowIndicator };
