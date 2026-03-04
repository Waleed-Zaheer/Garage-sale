import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-semibold tracking-widest uppercase transition-colors",
  {
    variants: {
      variant: {
        default:  "bg-amber-500/20 text-amber-500 border border-amber-500/40",
        outline:  "border border-current text-current",
        solid:    "bg-amber-500 text-zinc-900",
        sky:      "bg-sky-500/20 text-sky-500 border border-sky-500/40",
        orange:   "bg-orange-500/20 text-orange-500 border border-orange-500/40",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size:    "md",
    },
  }
);

export function Badge({ className, variant, size, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}
