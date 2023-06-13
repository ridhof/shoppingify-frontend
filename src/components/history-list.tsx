"use client";

import clsx from "clsx";

import ChevronRight from "@material-design-icons/svg/filled/chevron_right.svg";
import EventNote from "@material-design-icons/svg/filled/event_note.svg";

interface HistoryEntry {
  name: string;
  date: string;
  status: string;
}

interface HistoryListProps {
  date: string;
  items: HistoryEntry[];
}

function HistoryList({ date, items }: HistoryListProps) {
  return (
    <section className="mb-14">
      <div className="mb-4 text-xs font-semibold">{date}</div>
      <ol>
        {items.map((items) => (
          <li
            key={items.name}
            className="mb-7 flex cursor-pointer justify-between rounded-xl p-5 shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]"
          >
            <div className="text-base font-semibold">{items.name}</div>
            <div className="flex gap-7">
              <div className="flex items-center gap-3">
                <EventNote className="fill-gray-400" />
                <span className="text-xs font-medium text-gray-400">
                  {items.date}
                </span>
              </div>
              <div
                className={clsx(
                  "rounded-lg border-[1px] border-solid px-2 py-1 text-sm font-medium",
                  {
                    "border-light-blue text-light-blue":
                      items.status === "completed",
                    "border-tomato text-tomato": items.status === "canceled",
                  },
                )}
              >
                {items.status}
              </div>

              <ChevronRight className=" fill-primary" />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HistoryList;
