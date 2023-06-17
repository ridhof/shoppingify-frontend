"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";

type ProgressProps = {
  color: string;
  percentage: number;
};

function Progress({ color, percentage }: ProgressProps) {
  return (
    <ProgressPrimitive.Root className="relative h-[6px] w-full overflow-hidden rounded bg-[#E0E0E0]">
      <ProgressPrimitive.Indicator
        // eslint-disable-next-line tailwindcss/classnames-order
        className={`h-full w-full flex-1 bg-${color} transition-all`}
        style={{ transform: `translateX(-${100 - (percentage || 0)}%)` }}
      ></ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  );
}

export default Progress;
