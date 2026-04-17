import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm border px-1.5 py-0.5 text-2xs font-medium uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-border-strong bg-secondary text-foreground",
        outline: "border-border text-muted-foreground bg-transparent",
        accent: "border-accent/30 bg-accent-soft text-accent",
        success: "border-success/30 bg-success-soft text-success",
        warning: "border-warning/30 bg-warning-soft text-warning",
        destructive: "border-destructive/30 bg-destructive-soft text-destructive",
        info: "border-info/30 bg-info-soft text-info",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        solid: "border-transparent bg-primary text-primary-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
