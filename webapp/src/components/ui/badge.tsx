import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]",
  {
    variants: {
      variant: {
        default: "bg-ink/5 text-ink",
        brand: "bg-brand/10 text-brand",
        red: "bg-red-brand/10 text-red-brand",
        amber: "bg-amber-brand/10 text-amber-brand",
        sky: "bg-sky-brand/10 text-sky-brand",
        outline: "border border-ink/15 bg-transparent text-ink",
        live: "bg-transparent text-ink border border-ink/15 pl-2 pr-3.5 py-1.5 normal-case tracking-normal text-xs",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
