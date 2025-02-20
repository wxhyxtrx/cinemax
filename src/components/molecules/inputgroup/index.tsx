import { Input, InputProps } from "@/components/atoms/input";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputGroupProps extends InputProps {
  label?: string;
}

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className={cn("relative w-auto rounded-full border border-dark-gray/50", className)}>
        {label && (
          <label className="absolute -top-3 left-5 bg-primary-dark px-1 text-sm">
            {label}
          </label>
        )}
        <Input ref={ref} {...props} className="bg-transparent w-full" />
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export { Input, InputGroup };
