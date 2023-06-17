"use client";

import Link, { type LinkProps } from "next/link";
import ArrowRight from "@material-design-icons/svg/filled/arrow_right_alt.svg";

function BackNavigation(props: LinkProps) {
  return (
    <Link
      {...props}
      className="flex items-center gap-1 text-sm font-bold text-primary"
    >
      <ArrowRight className="rotate-180 fill-primary" />
      back
    </Link>
  );
}

export default BackNavigation;
