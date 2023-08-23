"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";

import FormatListBulleted from "@material-design-icons/svg/filled/format_list_bulleted.svg";
import Replay from "@material-design-icons/svg/filled/replay.svg";
import InsertChart from "@material-design-icons/svg/outlined/insert_chart_outlined.svg";
import ShoppingCart from "@material-design-icons/svg/outlined/shopping_cart.svg";

import { listDrawerAtom } from "~/atoms";

import Tooltip from "~/components/ui/tooltip";

function Navigation() {
  const pathname = usePathname();
  const [, setListDrawer] = useAtom(listDrawerAtom);

  return (
    <nav className="fixed flex h-full flex-col justify-between py-10 bg-white">
      <Tooltip label="menu" position="right" offset={24}>
        <Image
          className="mx-auto cursor-pointer"
          src="/images/logo.svg"
          alt="Shoppingify Logo"
          width={40}
          height={40}
        />
      </Tooltip>
      <div className="flex flex-col gap-11">
        <Tooltip label="items" position="right">
          <Link
            href="/"
            className={clsx("relative px-6 py-3", {
              " before:absolute before:left-0 before:top-0 before:h-full before:w-[6px] before:rounded-r-lg before:bg-primary":
                pathname === "/",
            })}
          >
            <FormatListBulleted className="fill-gray-700" />
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
            <Replay className="fill-gray-700" />
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
            <InsertChart className="fill-gray-700" />
          </Link>
        </Tooltip>
      </div>
      <Tooltip label="shopping list" position="right" offset={24}>
        <button
          onClick={() =>
            setListDrawer((drawer) => ({ ...drawer, isOpen: !drawer.isOpen }))
          }
          className="relative mx-auto h-10 w-10 rounded-full bg-primary"
        >
          <ShoppingCart className="mx-auto fill-white" />
          <span className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 rounded bg-tomato px-2 py-0.5  text-xs text-white">
            3
          </span>
        </button>
      </Tooltip>
    </nav>
  );
}

export default Navigation;
