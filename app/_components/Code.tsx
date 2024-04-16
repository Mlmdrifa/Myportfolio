import { cn } from "@/lib/utils";
import { ComponentPropsWithRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border border-accent py-0.5 text-primary hover:bg-accent/50 transition-colors px-1 rounded-sm ",
        className
      )}
      {...props}
    />
  );
};
