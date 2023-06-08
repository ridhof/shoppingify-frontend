import { type PropsWithChildren } from "react";
import clsx from "clsx";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface TooltipProps {
  label: string;
  position: "top" | "right" | "bottom" | "left";
}

function Tooltip({
  children,
  label,
  position,
}: PropsWithChildren<TooltipProps>) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal className="bg-gray-700">
          <TooltipPrimitive.Content
            side={position}
            className={clsx(
              "radix-side-top:animate-slide-down-fade",
              "radix-side-right:animate-slide-left-fade",
              "radix-side-bottom:animate-slide-up-fade",
              "radix-side-left:animate-slide-right-fade",
              "inline-flex items-center rounded-md px-4 py-2.5",
              "bg-gray-700",
            )}
          >
            <TooltipPrimitive.Arrow className="fill-current text-gray-700" />
            <span className="block text-xs leading-none text-white">
              {label}
            </span>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export default Tooltip;
