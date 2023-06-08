"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  FormatListBulleted,
  Replay,
  InsertChartOutlined,
} from "@mui/icons-material";

import Tooltip from "~/components/ui/tooltip";

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed flex h-full flex-col items-center justify-center gap-11">
      <Tooltip label="items" position="right">
        <Link
          href="/"
          className={clsx("relative px-6 py-3", {
            " before:absolute before:left-0 before:top-0 before:h-full before:w-[6px] before:rounded-r-lg before:bg-primary":
              pathname === "/",
          })}
        >
          <FormatListBulleted />
        </Link>
      </Tooltip>
      <Tooltip label="history" position="right">
        <Link
          href="/history"
          className={clsx("relative px-6 py-3", {
            "before:absolute before:left-0 before:top-0 before:h-full before:w-[6px] before:rounded-r-lg before:bg-primary":
              pathname === "/history",
          })}
        >
          <Replay />
        </Link>
      </Tooltip>
      <Tooltip label="statistics" position="right">
        <Link
          href="/statistics"
          className={clsx("relative px-6 py-3", {
            "before:absolute before:left-0 before:top-0 before:h-full before:w-[6px] before:rounded-r-lg before:bg-primary":
              pathname === "/statistics",
          })}
        >
          <InsertChartOutlined />
        </Link>
      </Tooltip>
    </nav>
  );
}

export default Navigation;
