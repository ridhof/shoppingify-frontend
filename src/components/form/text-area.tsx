type TextAreaProps = {
  label: string;
} & React.ComponentPropsWithRef<"textarea">;

function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <div className="mb-4">
      <label htmlFor="note" className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full rounded-xl border-0 px-4 py-5 text-sm font-medium ring-2 ring-gray-300 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

export default TextArea;
