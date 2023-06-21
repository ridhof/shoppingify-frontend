import { forwardRef } from "react";

type TextAreaProps = {
  label: string;
  error: string | undefined;
} & React.ComponentPropsWithRef<"textarea">;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, label, error, ...props }, ref) => {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="mb-1 block text-sm font-medium">
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          {...props}
          className="w-full rounded-xl border-0 px-4 py-5 text-sm font-medium ring-2 ring-gray-300 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
        />
        {error ?? <div className="font-xs text-tomato">{error}</div>}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";

export default TextArea;
