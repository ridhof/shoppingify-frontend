import clsx from "clsx";

type ButtonProps = {
  className?: string;
  variant: "primary" | "secondary";
} & React.ComponentPropsWithoutRef<"button">;

function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        {
          "bg-primary text-white": variant === "primary",
          "bg-white text-black": variant === "secondary",
        },
        "rounded-xl px-6 py-5 font-bold",
        className,
      )}
      {...props}
    />
  );
}

export default Button;
