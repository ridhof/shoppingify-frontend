type InputProps = { label: string } & React.ComponentPropsWithoutRef<"input">;

function Input({ id, label, ...props }: InputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-xl border-0 px-4 py-5 text-sm font-medium ring-2 ring-gray-300 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}

export default Input;
