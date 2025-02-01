import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.ComponentProps<"textarea"> & {
  autoResize?: boolean;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, autoResize = false, ...props }) => {
    const localRef = React.useRef<HTMLTextAreaElement | null>(null);

    React.useEffect(() => {
      if (autoResize && localRef.current) {
        localRef.current.style.height = "auto";
        localRef.current.style.height = `${localRef.current.scrollHeight}px`;
      }
    }, [props.value, autoResize]);

    return (
      <textarea
        ref={localRef}
        className={cn(
          "w-full p-2 border border-border-light dark:border-border-dark rounded bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark focus:ring-primary dark:focus:ring-primary-dark",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
