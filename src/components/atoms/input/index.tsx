import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "subfix"> {
  className?: string;
  prefix?: boolean;
  iconPrefix?: React.ReactNode;
  subfix?: boolean;
  iconSubfix?: React.ReactNode;
  actionBtn?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      prefix,
      iconPrefix,
      subfix,
      iconSubfix,
      actionBtn,
      type = "text",
      name,
      value,
      onChange,
      onFocus,
      placeholder,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex items-center gap-3 w-full rounded-full bg-primary-light px-4 py-3 text-white-gray",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {prefix && <div className="text-sm text-white-gray">{iconPrefix}</div>}
        <input
          ref={ref}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          className="w-full bg-transparent px-1 text-white-gray outline-none ring-0"
          required={required}
          disabled={disabled}
          {...props}
        />
        {subfix && !disabled && (
          <button type="button" onClick={actionBtn} className="text-white-gray">
            {iconSubfix}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
