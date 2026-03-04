import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // base
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 select-none cursor-pointer rounded-none",
  {
    variants: {
      variant: {
        solid:   "bg-amber-500 text-zinc-900 hover:bg-amber-400",
        outline: "border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-zinc-900",
        ghost:   "text-zinc-400 hover:text-amber-500 hover:bg-transparent",
        link:    "text-amber-500 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm:   "text-xs px-5 py-2.5",
        md:   "text-sm px-7 py-3.5",
        lg:   "text-sm px-9 py-4",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "solid",
      size:    "md",
    },
  }
);

/**
 * shadcn-style Button.
 * Supports `asChild` to render as any element (e.g. <a>).
 */
export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}

export { buttonVariants };
