import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.ComponentProps<"textarea"> & {
  autoResize?: boolean;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, autoResize = false, ...props }, ref) => {
    const localRef = React.useRef<HTMLTextAreaElement | null>(null);

    // Adjust the height when autoResize is enabled and the value changes.
    React.useEffect(() => {
      if (autoResize && localRef.current) {
        // Reset height to recalc scrollHeight correctly.
        localRef.current.style.height = "auto";
        localRef.current.style.height = `${localRef.current.scrollHeight}px`;
      }
    }, [props.value, autoResize]);

    // Combine forwarded ref with our local ref.
    const setRefs = (node: HTMLTextAreaElement | null) => {
      localRef.current = node;
      if (!ref) return;
      if (typeof ref === "function") {
        ref(node);
      } else {
        (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current =
          node;
      }
    };

    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-stone-200 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-stone-800 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-300",
          className
        )}
        ref={setRefs}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
