import { forwardRef } from "react";

type InputProps = {
  label: string;
  error: string | undefined;
} & React.ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="mb-1 block text-sm font-medium">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          {...props}
          className="w-full rounded-xl border-0 px-4 py-5 text-sm font-medium ring-2 ring-gray-300 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
        />
        {error && <p className="mt-1 text-sm font-bold text-tomato">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
