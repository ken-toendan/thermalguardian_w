import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleGroupVariants = cva(
  "inline-flex items-center rounded-full border border-ink/15 bg-transparent p-0.5",
  {
    variants: { variant: { default: "" } },
    defaultVariants: { variant: "default" },
  }
);

const toggleItemVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer data-[state=on]:bg-ink data-[state=on]:text-cream text-ink/70 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
  {
    variants: { size: { default: "h-7 px-3", sm: "h-6 px-2 text-[11px]" } },
    defaultVariants: { size: "default" },
  }
);

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleGroupVariants>
>(({ className, variant, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(toggleGroupVariants({ variant }), className)}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Root>
));
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleItemVariants>
>(({ className, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(toggleItemVariants({ size }), className)}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Item>
));
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
